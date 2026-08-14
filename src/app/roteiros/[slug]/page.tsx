import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, GraduationCap, MapPin, ShieldCheck, Users } from "lucide-react";
import { notFound } from "next/navigation";
import { AzimuteFooter, AzimuteHeader } from "../../../components/AzimuteShell";
import { expeditionRoutes, getRouteBySlug, routeWhatsapp } from "../../../data/routes";

type RoutePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return expeditionRoutes.map((route) => ({ slug: route.slug }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const route = getRouteBySlug((await params).slug);
  if (!route) return {};
  return { title: `${route.title} | Azimute Educatur`, description: route.summary };
}

export default async function RouteDetail({ params }: RoutePageProps) {
  const route = getRouteBySlug((await params).slug);
  if (!route) notFound();
  const whatsapp = routeWhatsapp(route.title);

  return (
    <main className="az-site az-route-page">
      <section className="az-route-hero">
        <Image src={route.heroImage} alt={route.title} fill sizes="100vw" priority />
        <div className="az-route-hero-shade" />
        <AzimuteHeader overlay />
        <div className="az-container az-route-hero-content">
          <Link href="/roteiros" className="az-route-back"><ArrowLeft aria-hidden="true" /> Todos os roteiros</Link>
          <span className="az-route-family">{route.route}</span>
          <h1>{route.title}</h1>
          <p>{route.summary}</p>
          <div className="az-route-hero-actions">
            <Link href="#jornada" className="az-button az-button-light">Ver a jornada <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="az-route-specs" aria-label="Informações do roteiro">
        <div className="az-container az-route-spec-grid">
          <div><MapPin aria-hidden="true" /><span>Destino</span><strong>{route.location}</strong></div>
          <div><Clock3 aria-hidden="true" /><span>Duração</span><strong>{route.duration}</strong></div>
          <div><GraduationCap aria-hidden="true" /><span>Segmento</span><strong>{route.segment}</strong></div>
          <div><Users aria-hidden="true" /><span>Grupo mínimo</span><strong>{route.minimum}</strong></div>
        </div>
      </section>

      <section className="az-section az-route-learning">
        <div className="az-container">
          <div className="az-section-heading"><span className="az-kicker">Aprendizagem em campo</span><h2>O que muda no aluno depois da expedição</h2></div>
          <div className="az-learning-list">
            {route.learning.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="az-route-journey" id="jornada">
        <div className="az-container az-section-heading"><span className="az-kicker">A jornada do aluno</span><h2>Quatro momentos, um aprendizado conectado</h2></div>
        <div className="az-journey-list">
          {route.stops.map((stop) => (
            <article className="az-journey-stop" key={`${stop.kicker}-${stop.title}`}>
              <div className="az-journey-photo"><Image src={stop.image} alt={stop.title} fill sizes="(max-width: 800px) 100vw, 50vw" /></div>
              <div className="az-journey-copy"><span>{stop.kicker}</span><h3>{stop.title}</h3><p>{stop.text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="az-section az-route-practical">
        <div className="az-container az-practical-grid">
          <div>
            <span className="az-kicker">Sem surpresas</span><h2>Tudo que a escola recebe</h2>
            <ul>{route.included.map((item) => <li key={item}><Check aria-hidden="true" /> {item}</li>)}</ul>
          </div>
          <aside>
            <span className="az-kicker">Conexões com a BNCC</span><h2>Habilidades relacionadas</h2>
            <div className="az-bncc-list">{route.bncc.map((skill) => <div key={skill.code}><strong>{skill.code}</strong><p>{skill.description}</p></div>)}</div>
            <p className="az-bncc-note">A seleção final é ajustada à série e aos objetivos definidos com a escola.</p>
          </aside>
        </div>
      </section>

      <section className="az-route-cta">
        <div className="az-container az-route-cta-grid">
          <ShieldCheck aria-hidden="true" />
          <div><span>Próximo passo</span><h2>{route.title} no calendário deste semestre?</h2><p>A Azimute entende as turmas, ajusta o roteiro e apresenta o argumento pedagógico e operacional para a escola.</p></div>
          <Link href={whatsapp} className="az-button az-button-primary" target="_blank" rel="noopener noreferrer">Falar com a Azimute <ArrowRight aria-hidden="true" /></Link>
        </div>
      </section>
      <AzimuteFooter />
    </main>
  );
}
