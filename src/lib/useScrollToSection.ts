"use client";

import { useCallback } from "react";
import { useLenis } from "lenis/react";

/** Hauteur approximative de la navbar fixe, pour ne pas masquer le haut des sections. */
export const NAV_OFFSET = -80;

/**
 * Scroll fluide vers une section via Lenis (fallback natif si Lenis n'est pas prêt).
 * Évite le conflit entre `scrollIntoView({ behavior: "smooth" })` et le smooth scroll Lenis.
 */
export function useScrollToSection() {
  const lenis = useLenis();

  return useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;

      if (lenis) {
        // Recalcule la hauteur réelle de la page avant de viser la cible,
        // sinon Lenis peut s'arrêter trop tôt (ex: bouton du hero).
        lenis.resize();
        lenis.scrollTo(el, {
          offset: NAV_OFFSET,
          duration: 1.2,
          onComplete: () => {
            const gap = el.getBoundingClientRect().top + NAV_OFFSET;
            if (Math.abs(gap) > 8) {
              lenis.resize();
              lenis.scrollTo(el, { offset: NAV_OFFSET, duration: 0.5 });
            }
          },
        });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
        window.scrollTo({ top, behavior: "smooth" });
      }
    },
    [lenis]
  );
}
