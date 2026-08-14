"use client";

import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const heroSlides = [
  { src: "/azimute/hero/natal-forte-2026.webp", label: "Natal, RN", position: "center 52%" },
  { src: "/azimute/hero/mossoro-salinas-2026.webp", label: "Mossoró, RN", position: "center 58%" },
  { src: "/azimute/hero/martins-serra-2026.webp", label: "Martins, RN", position: "center 48%" },
  { src: "/azimute/hero/areia-portal-2026.webp", label: "Areia, PB", position: "center 55%" },
] as const;

export function HeroCarousel() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [manualPaused, setManualPaused] = useState(false);
  const [interactionPaused, setInteractionPaused] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const hero = rootRef.current?.closest(".az-hero");
    if (!hero) return;

    const pause = () => setInteractionPaused(true);
    const resume = (event?: Event) => {
      if (event instanceof FocusEvent && hero.contains(event.relatedTarget as Node | null)) return;
      setInteractionPaused(false);
    };

    hero.addEventListener("mouseenter", pause);
    hero.addEventListener("mouseleave", resume);
    hero.addEventListener("focusin", pause);
    hero.addEventListener("focusout", resume);

    return () => {
      hero.removeEventListener("mouseenter", pause);
      hero.removeEventListener("mouseleave", resume);
      hero.removeEventListener("focusin", pause);
      hero.removeEventListener("focusout", resume);
    };
  }, []);

  useEffect(() => {
    const updateVisibility = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => document.removeEventListener("visibilitychange", updateVisibility);
  }, []);

  useEffect(() => {
    if (manualPaused || interactionPaused || pageHidden || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % heroSlides.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [manualPaused, interactionPaused, pageHidden, reducedMotion]);

  return (
    <div className="az-hero-media" ref={rootRef}>
      <div className="az-hero-slides" aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div className={`az-hero-slide${index === active ? " is-active" : ""}`} key={slide.src}>
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              quality={90}
              sizes="100vw"
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}
      </div>

      <div className="az-hero-carousel-controls" role="group" aria-label="Imagens dos destinos Azimute">
        <span className="az-hero-destination" aria-live="polite">
          <strong>{heroSlides[active].label}</strong>
          <span>{String(active + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}</span>
        </span>
        <div className="az-hero-dots" aria-label="Escolher imagem do hero">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.label}
              className={index === active ? "is-active" : ""}
              onClick={() => setActive(index)}
              aria-label={`Mostrar imagem de ${slide.label}`}
              aria-current={index === active ? "true" : undefined}
            ><span /></button>
          ))}
        </div>
        {!reducedMotion && (
          <button
            type="button"
            className="az-hero-pause"
            onClick={() => setManualPaused((paused) => !paused)}
            aria-label={manualPaused ? "Retomar troca automática das imagens" : "Pausar troca automática das imagens"}
          >
            {manualPaused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
          </button>
        )}
      </div>
    </div>
  );
}
