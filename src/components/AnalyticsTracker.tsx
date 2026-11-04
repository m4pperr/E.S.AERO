"use client";

import React, { useEffect, useRef } from "react";
import Script from "next/script";
import {
  captureAndGetUtmParams,
  trackContact,
  trackPixelEvent,
} from "@/lib/tracking";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";
const TIKTOK_PIXEL_ID = process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID || "";

export default function AnalyticsTracker() {
  const viewContentFiredRef = useRef(false);
  const scrollMilestonesRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    // 1. Capture immédiate des UTM dans sessionStorage dès l'arrivée
    captureAndGetUtmParams();

    // Fonction pour déclencher ViewContent une seule fois (10 s OU 25 % de scroll)
    const fireViewContent = (trigger: "timer_10s" | "scroll_25") => {
      if (viewContentFiredRef.current) return;
      viewContentFiredRef.current = true;
      trackPixelEvent("ViewContent", {
        content_name: "Formation PNC E.S.AERO",
        trigger,
      });
    };

    // 2. Timer de 10 secondes pour ViewContent
    const timer = window.setTimeout(() => {
      fireViewContent("timer_10s");
    }, 10000);

    // 3. Suivi de la profondeur de scroll : 25 %, 50 %, 75 %, 100 %
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const percent = Math.round((scrollTop / docHeight) * 100);

      if (percent >= 25 && !viewContentFiredRef.current) {
        fireViewContent("scroll_25");
      }

      for (const milestone of [25, 50, 75, 100]) {
        if (
          percent >= milestone &&
          !scrollMilestonesRef.current.has(milestone)
        ) {
          scrollMilestonesRef.current.add(milestone);
          trackPixelEvent("scroll", { percent: milestone }, true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // 4. Écouteur global sur tous les boutons et liens portant data-cta="<id>"
    const handleDocumentClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const ctaElement = target.closest<HTMLElement>("[data-cta]");
      if (!ctaElement) return;

      // Bouton recouvert par la carte suivante (ScrollStack) : clic non comptabilisé
      if (ctaElement.closest('[data-stack-hidden="true"]')) return;

      const ctaId = ctaElement.getAttribute("data-cta") || "unknown_cta";
      const href = ctaElement.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        // Clic sur un bouton d'appel téléphonique (compté même si l'appel n'aboutit pas)
        trackContact(ctaId, "phone");
      } else if (href.includes("wa.me") || href.includes("whatsapp")) {
        // Clic sur un bouton WhatsApp
        trackContact(ctaId, "whatsapp");
      } else if (ctaId !== "cta_final_form") {
        // Clic sur un bouton d'ancre (ex: "Être rappelé gratuitement" qui scrolle vers #rappel)
        trackPixelEvent("CTAClick", { cta_id: ctaId }, true);
      }
    };

    document.addEventListener("click", handleDocumentClick, { capture: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleDocumentClick, {
        capture: true,
      });
    };
  }, []);

  return (
    <>
      {/* META PIXEL (s'active automatiquement dès que NEXT_PUBLIC_META_PIXEL_ID est défini) */}
      {META_PIXEL_ID ? (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      ) : null}

      {/* TIKTOK PIXEL (s'active automatiquement dès que NEXT_PUBLIC_TIKTOK_PIXEL_ID est défini) */}
      {TIKTOK_PIXEL_ID ? (
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
              ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],
              ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
              for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
              ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
              ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";
              ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
              var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;
              var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
              ttq.load('${TIKTOK_PIXEL_ID}');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      ) : null}
    </>
  );
}

