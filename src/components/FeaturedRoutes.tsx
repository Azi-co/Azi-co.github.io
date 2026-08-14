"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import { useRef } from "react";
import { featuredRoutes } from "../data/featured-routes";

function consultationLink(title: string) {
  return `https://wa.me/5584999650530?text=${encodeURIComponent(`Olá, quero conhecer o roteiro ${title} para minha escola.`)}`;
}

export function FeaturedRoutes() {
  const rails = useRef<Record<string, HTMLDivElement | null>>({});

  function moveRail(slug: string, direction: -1 | 1) {
    const rail = rails.current[slug];
    if (!rail) return;
    rail.scrollBy({ left: direction * Math.min(rail.clientWidth * 0.82, 720), behavior: "smooth" });
  }

  return (
    <div className="az-featured-routes">
      {featuredRoutes.map((route, routeIndex) => (
        <article className="az-featured-route" key={route.slug}>
          <div className="az-featured-route-intro">
            <span className="az-route-number">0{routeIndex + 1}</span>
            <div>
              <span className="az-route-eyebrow">{route.eyebrow}</span>
              <h3>{route.title}</h3>
              <p>{route.description}</p>
              <span className="az-route-count">{route.itineraries.length} roteiros nesta rota</span>
            </div>
          </div>

          <div className="az-route-rail-wrap">
            <div className="az-route-rail-head">
              <span>Explore os roteiros</span>
              <div className="az-route-controls">
                <button type="button" onClick={() => moveRail(route.slug, -1)} aria-label={`Ver roteiros anteriores de ${route.title}`}>
                  <ArrowLeft aria-hidden="true" />
                </button>
                <button type="button" onClick={() => moveRail(route.slug, 1)} aria-label={`Ver próximos roteiros de ${route.title}`}>
                  <ArrowRight aria-hidden="true" />
                </button>
              </div>
            </div>

            <div
              className="az-route-rail"
              ref={(element) => { rails.current[route.slug] = element; }}
              aria-label={`Roteiros da ${route.title}`}
            >
              {route.itineraries.map((itinerary) => {
                const href = itinerary.detailSlug
                  ? `/roteiros/${itinerary.detailSlug}`
                  : consultationLink(itinerary.title);
                const external = !itinerary.detailSlug;

                return (
                  <Link
                    className="az-route-card"
                    href={href}
                    key={itinerary.title}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                  >
                    <span className="az-route-card-photo">
                      <Image src={itinerary.image} alt="" fill sizes="(max-width: 760px) 78vw, 360px" />
                      <span className="az-route-card-shade" />
                      <span className="az-route-card-index">Roteiro</span>
                    </span>
                    <span className="az-route-card-body">
                      <span className="az-route-card-location"><MapPin aria-hidden="true" /> {itinerary.location}</span>
                      <strong>{itinerary.title}</strong>
                      <span className="az-route-card-bottom">
                        <span>{itinerary.segment}</span>
                        <span className="az-route-card-action">{external ? "Consultar" : "Conhecer"} <ArrowRight aria-hidden="true" /></span>
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <span className="az-route-swipe">Deslize para ver os demais roteiros</span>
          </div>
        </article>
      ))}
    </div>
  );
}
