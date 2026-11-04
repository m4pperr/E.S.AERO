"use client";

import React, {
  Children,
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  motion,
  motionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";

/**
 * Effet "cartes empilées" appliqué à TOUTES les sections de la landing page.
 *
 * Principe (identique à la démo hero-scroll-animation) :
 *  - chaque section est `sticky` ; la suivante glisse par-dessus ;
 *  - pendant qu'elle est recouverte, la section du dessous rétrécit (scale),
 *    pivote légèrement (rotate) et s'estompe.
 *
 * Pensé pour le mobile :
 *  - les sections plus hautes que l'écran sont épinglées par leur BAS
 *    (top négatif) au lieu d'être coupées ;
 *  - unités `lvh` / `svh` (pas de saut quand la barre d'adresse bouge) ;
 *  - amplitude réduite sur petit écran, pas de rotation brutale ;
 *  - `will-change` uniquement sur les sections proches de la transition
 *    (évite de garder de grosses couches GPU en mémoire) ;
 *  - aucune dépendance à `useScroll({ target })` : un seul calcul par scroll ;
 *  - `prefers-reduced-motion` : sections normales, sans effet ;
 *  - avant hydratation / sans JS : flux normal (rien de cassé).
 */

export interface StackItemProps {
  /** id d'ancre (ex: "programme"). Placé sur un repère fixe, compatible Lenis. */
  id?: string;
  /** Classes Tailwind de la section (fond, arrondis, ombre…). */
  className?: string;
  children: React.ReactNode;
}

/** Marqueur déclaratif : n'est jamais rendu seul, ScrollStack lit ses props. */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function StackItem(_props: StackItemProps): React.ReactElement | null {
  return null;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

interface Amplitude {
  scale: number;
  rotate: number;
  /** intensité max du voile sombre (0 → 1) */
  dim: number;
}

const DESKTOP: Amplitude = { scale: 0.88, rotate: -3.5, dim: 0.5 };
const MOBILE: Amplitude = { scale: 0.93, rotate: -1.6, dim: 0.45 };

/** Éléments cliquables / focusables à neutraliser quand ils passent sous la carte suivante. */
const INTERACTIVE_SELECTOR =
  "a[href], button, input, select, textarea, [data-cta], [tabindex]:not([tabindex='-1'])";

/** Attribut posé sur un élément cliquable recouvert (lu aussi par le tracking). */
export const STACK_HIDDEN_ATTR = "data-stack-hidden";

function setHidden(el: HTMLElement, hidden: boolean) {
  const isHidden = el.getAttribute(STACK_HIDDEN_ATTR) === "true";
  if (hidden === isHidden) return;
  if (hidden) {
    el.setAttribute(STACK_HIDDEN_ATTR, "true");
    el.style.pointerEvents = "none";
  } else {
    el.removeAttribute(STACK_HIDDEN_ATTR);
    el.style.pointerEvents = "";
  }
}

/**
 * Neutralise les éléments cliquables d'une section recouverte.
 * - coverTop : bord haut (viewport) de la carte qui recouvre, ou null si aucun recouvrement.
 * - full : section entièrement recouverte → tout est désactivé + `inert`.
 * Un bouton dont une partie quelconque passe sous la carte suivante est désactivé :
 * sur iOS / navigateurs in-app, le hit-test des éléments sticky transformés peut être
 * désynchronisé pendant le scroll, un tap pourrait sinon atteindre un bouton caché.
 */
function syncInteractivity(
  layer: HTMLElement,
  coverTop: number | null,
  full: boolean
) {
  if (layer.inert !== full) layer.inert = full;

  const els = layer.querySelectorAll<HTMLElement>(INTERACTIVE_SELECTOR);
  els.forEach((el) => {
    if (full) return setHidden(el, true);
    if (coverTop === null) return setHidden(el, false);
    const r = el.getBoundingClientRect();
    setHidden(el, r.bottom > coverTop);
  });
}

export default function ScrollStack({
  children,
}: {
  children: React.ReactNode;
}) {
  const reduced = useReducedMotion();

  const items = useMemo(
    () =>
      Children.toArray(children).filter(isValidElement) as React.ReactElement<StackItemProps>[],
    [children]
  );
  const count = items.length;

  const layerRefs = useRef<(HTMLElement | null)[]>([]);
  const probeRef = useRef<HTMLDivElement>(null);
  const lvhRef = useRef(0);
  const amplitudeRef = useRef<Amplitude>(DESKTOP);

  // progress[i] : 0 → 1 pendant que la section i+1 recouvre la section i
  const progress = useMemo(
    () => Array.from({ length: count }, () => motionValue(0)),
    [count]
  );
  // near[i] : "transform, opacity" quand la section est proche de sa transition
  const willChange = useMemo(
    () => Array.from({ length: count }, () => motionValue("auto")),
    [count]
  );

  // covered[i] : "0" quand la section est entièrement recouverte (inutile de la peindre)
  const covered = useMemo(
    () => Array.from({ length: count }, () => motionValue("1")),
    [count]
  );

  const [heights, setHeights] = useState<number[]>([]);
  const [lvh, setLvh] = useState(0);

  const update = useCallback(() => {
    const vh = lvhRef.current || window.innerHeight;
    for (let i = 0; i < count; i++) {
      const next = layerRefs.current[i + 1];
      const self = layerRefs.current[i];
      if (!next || !self) {
        progress[i].set(0);
        willChange[i].set("auto");
        covered[i].set("1");
        if (self) syncInteractivity(self, null, false);
        continue;
      }
      const nextTop = next.getBoundingClientRect().top;
      // bord bas de la section épinglée = min(hauteur, écran)
      const edge = Math.min(self.offsetHeight, vh);
      const p = edge > 0 ? clamp((edge - nextTop) / edge, 0, 1) : 0;
      progress[i].set(p);

      const near = nextTop < vh * 1.25 && nextTop > -vh * 0.25;
      willChange[i].set(near ? "transform" : "auto");

      // Entièrement recouverte par la suivante → on ne la peint plus
      // (opacity 0 plutôt que visibility:hidden pour rester dans l'arbre d'accessibilité)
      // offsetHeight ignore les transformations (scale) de la section suivante
      const full = nextTop <= 0 && nextTop + next.offsetHeight >= window.innerHeight;
      covered[i].set(full ? "0" : "1");

      // Boutons / liens passés sous la carte suivante → non cliquables
      const overlapping = nextTop < window.innerHeight && p > 0;
      syncInteractivity(self, overlapping ? nextTop : null, full);
    }
  }, [count, progress, willChange, covered]);

  // Mesures (hauteur des sections + hauteur d'écran "large")
  const measure = useCallback(() => {
    const probeH = probeRef.current?.offsetHeight || window.innerHeight;
    lvhRef.current = probeH;
    amplitudeRef.current = window.innerWidth < 768 ? MOBILE : DESKTOP;

    const next = layerRefs.current
      .slice(0, count)
      .map((el) => Math.round(el?.offsetHeight ?? 0));
    setHeights((prev) =>
      prev.length === next.length && prev.every((h, i) => h === next[i])
        ? prev
        : next
    );
    setLvh((prev) => (prev === probeH ? prev : probeH));
    update();
  }, [count, update]);

  useEffect(() => {
    if (reduced) return;
    measure();

    const ro = new ResizeObserver(() => measure());
    layerRefs.current.forEach((el) => el && ro.observe(el));
    window.addEventListener("resize", measure);
    window.addEventListener("orientationchange", measure);
    // 2e passe une fois les images / polices chargées
    const t = window.setTimeout(measure, 600);
    window.addEventListener("load", measure);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("orientationchange", measure);
      window.removeEventListener("load", measure);
      window.clearTimeout(t);
    };
  }, [measure, reduced]);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", () => {
    if (!reduced) update();
  });

  // Filet de sécurité : un tap qui atteindrait malgré tout un bouton recouvert
  // (hit-test désynchronisé sur iOS / in-app) est annulé avant toute action ou tracking.
  useEffect(() => {
    const guard = (e: Event) => {
      const target = e.target as Element | null;
      if (target?.closest?.(`[${STACK_HIDDEN_ATTR}="true"]`)) {
        e.preventDefault();
        e.stopImmediatePropagation();
      }
    };
    window.addEventListener("click", guard, { capture: true });
    return () => window.removeEventListener("click", guard, { capture: true });
  }, []);

  return (
    <>
      {/* Sonde invisible : mesure la hauteur d'écran "large" (100lvh) */}
      <div
        ref={probeRef}
        aria-hidden
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: "100lvh",
          visibility: "hidden",
          pointerEvents: "none",
        }}
      />

      {items.map((item, i) => {
        const { id, className = "", children: content } = item.props;
        const isLast = i === count - 1;
        const h = heights[i] || 0;
        const ready = !reduced && h > 0 && lvh > 0;

        return (
          <React.Fragment key={item.key ?? i}>
            {/* Repère d'ancre : reste à la position naturelle de la section,
                même quand celle-ci est épinglée (Lenis scrollTo fiable). */}
            {id ? (
              <div id={id} aria-hidden className="h-0 w-full" />
            ) : null}

            <StackLayer
              index={i}
              isLast={isLast}
              ready={ready}
              height={h}
              lvh={lvh}
              className={className}
              progress={progress[i]}
              willChange={willChange[i]}
              covered={covered[i]}
              amplitudeRef={amplitudeRef}
              setRef={(el) => {
                layerRefs.current[i] = el;
              }}
            >
              {content}
            </StackLayer>
          </React.Fragment>
        );
      })}
    </>
  );
}

interface StackLayerProps {
  index: number;
  isLast: boolean;
  ready: boolean;
  height: number;
  lvh: number;
  className: string;
  progress: MotionValue<number>;
  willChange: MotionValue<string>;
  covered: MotionValue<string>;
  amplitudeRef: React.RefObject<Amplitude>;
  setRef: (el: HTMLElement | null) => void;
  children: React.ReactNode;
}

function StackLayer({
  index,
  isLast,
  ready,
  height,
  lvh,
  className,
  progress,
  willChange,
  covered,
  amplitudeRef,
  setRef,
  children,
}: StackLayerProps) {
  const scale = useTransform(progress, (p) => 1 + (amplitudeRef.current.scale - 1) * p);
  const rotate = useTransform(progress, (p) => amplitudeRef.current.rotate * p);
  const dim = useTransform(progress, (p) => amplitudeRef.current.dim * p);

  // Section plus haute que l'écran → on l'épingle par son bas (top négatif).
  // Section plus courte → épinglée en haut.
  const visible = Math.min(height, lvh);
  const stickyTop = `min(0px, calc(100lvh - ${height}px))`;
  // Origine = centre de la partie visible de la section
  const originY = height - visible / 2;

  const style: React.CSSProperties & Record<string, unknown> = {
    zIndex: index + 1,
  };

  if (ready) {
    style.position = "sticky";
    style.top = stickyTop;
    style.transformOrigin = `50% ${originY}px`;
  } else {
    style.position = "relative";
  }

  return (
    <motion.section
      ref={setRef}
      className={className}
      style={{
        ...style,
        // Pas d'effet sur la dernière section (rien ne la recouvre)
        ...(ready && !isLast
          ? { scale, rotate, willChange, opacity: covered }
          : {}),
      }}
    >
      {children}
      {/* Voile sombre : donne de la profondeur sans rendre la section transparente */}
      {ready && !isLast ? (
        <motion.div
          aria-hidden
          style={{ opacity: dim }}
          className="pointer-events-none absolute inset-0 z-50 rounded-[inherit] bg-[#050a12]"
        />
      ) : null}
    </motion.section>
  );
}
