import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock3, GraduationCap, MapPin } from "lucide-react";
import { AzimuteFooter, AzimuteHeader, whatsappPlanning } from "../../components/AzimuteShell";
import { expeditionRoutes } from "../../data/routes";

export const metadata: Metadata = {
  title: "Roteiros pedagógicos | Azimute Educatur",
  description: "Conheça expedições pedagógicas no RN e Nordeste, organizadas por destino, duração e etapa escolar.",
};

export default function RoutesCatalog() {
  return (
    <main className="az-site az-inner-page">
      <AzimuteHeader />
      <section className="az-catalog-hero">
        <div className="az-container az-catalog-intro">
          <div>
            <span className="az-kicker">Catálogo de expedições</span>
            <h1>O território também ensina</h1>
          </div>
          <p>Escolha uma jornada para conhecer o objetivo pedagógico, as paradas, a logística e as habilidades trabalhadas antes de conversar com a Azimute.</p>
        </div>
      </section>

      <section className="az-route-index" aria-label="Roteiros disponíveis">
        <div className="az-container">
          {expeditionRoutes.map((route, index) => (
            <article className="az-route-row" key={route.slug}>
              <Link href={`/roteiros/${route.slug}`} className="az-route-row-image" aria-label={`Conhecer ${route.title}`}>
                <Image src={route.cardImage} alt={route.location} fill sizes="(max-width: 760px) 100vw, 42vw" priority={index === 0} />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </Link>
              <div className="az-route-row-copy">
                <span className="az-route-family">{route.route}</span>
                <h2><Link href={`/roteiros/${route.slug}`}>{route.title}</Link></h2>
                <p>{route.summary}</p>
                <div className="az-route-facts">
                  <span><MapPin aria-hidden="true" /> {route.location}</span>
                  <span><Clock3 aria-hidden="true" /> {route.duration}</span>
                  <span><GraduationCap aria-hidden="true" /> {route.segment}</span>
                </div>
                <Link href={`/roteiros/${route.slug}`} className="az-text-link">Conhecer o roteiro <ArrowRight aria-hidden="true" /></Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="az-catalog-close">
        <div className="az-container az-catalog-close-grid">
          <Image src="/azimute/mascotes-identidade.png" alt="Azi, mascote da Azimute Educatur" width={460} height={306} />
          <div><span>Não encontrou a combinação certa?</span><h2>A Azi ajuda a escola a encontrar o próximo caminho.</h2><p>A Azimute cruza série, conteúdo e território para sugerir as expedições mais adequadas ao calendário.</p><Link href={whatsappPlanning} className="az-button az-button-primary" target="_blank" rel="noopener noreferrer">Planejar com a Azimute <ArrowRight aria-hidden="true" /></Link></div>
        </div>
      </section>
      <AzimuteFooter />
    </main>
  );
}
