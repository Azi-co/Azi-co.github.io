import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Menu, MessageCircle } from "lucide-react";
import { expeditionRoutes } from "../data/routes";

export const whatsappPlanning = "https://wa.me/5584999650530?text=Ol%C3%A1%2C%20quero%20planejar%20o%20calend%C3%A1rio%20de%20expedi%C3%A7%C3%B5es%20da%20minha%20escola.";
export const instagramProfile = "https://www.instagram.com/azimuteeducatur/";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".75" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function AzimuteHeader({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`az-header${overlay ? "" : " az-header-solid"}`}>
      <div className="az-container az-nav">
        <Link href="/" className="az-logo" aria-label="Azimute Educatur - início">
          <Image className="az-logo-art" src="/azimute/brand-mark.png" alt="" width={62} height={62} />
          <span className="az-logo-copy"><strong>AZIMUTE</strong><small>EDUCATUR</small></span>
        </Link>
        <nav className="az-nav-links" aria-label="Navegação principal">
          <Link href="/roteiros">Roteiros</Link>
          <Link href="/#como-funciona">Como funciona</Link>
          <Link href="/#sobre">Sobre nós</Link>
          <Link href="/#seguranca">Segurança</Link>
        </nav>
        <Link href={whatsappPlanning} className="az-header-cta" target="_blank" rel="noopener noreferrer">
          Planejar calendário <ArrowRight aria-hidden="true" />
        </Link>
        <details className="az-menu">
          <summary aria-label="Abrir menu"><Menu aria-hidden="true" /></summary>
          <nav aria-label="Navegação móvel">
            <Link href="/roteiros">Roteiros</Link>
            <Link href="/#como-funciona">Como funciona</Link>
            <Link href="/#sobre">Sobre nós</Link>
            <Link href="/#seguranca">Segurança</Link>
            <Link href={whatsappPlanning} target="_blank" rel="noopener noreferrer">Planejar calendário</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function AzimuteFooter() {
  return (
    <footer className="az-footer">
      <div className="az-container az-footer-grid">
        <div className="az-footer-brand">
          <Link href="/" className="az-logo" aria-label="Azimute Educatur - início">
            <Image className="az-logo-art" src="/azimute/brand-mark.png" alt="" width={62} height={62} />
            <span className="az-logo-copy"><strong>AZIMUTE</strong><small>EDUCATUR</small></span>
          </Link>
          <p>Expedições pedagógicas que conectam pessoas, lugares e aprendizados.</p>
          <div className="az-socials" aria-label="Redes sociais">
            <a href={instagramProfile} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Azimute Educatur">
              <InstagramIcon />
            </a>
            <a href={whatsappPlanning} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp da Azimute Educatur">
              <MessageCircle aria-hidden="true" />
            </a>
          </div>
        </div>
        <div>
          <h3>Roteiros</h3>
          {expeditionRoutes.map((route) => <Link key={route.slug} href={`/roteiros/${route.slug}`}>{route.title}</Link>)}
        </div>
        <div>
          <h3>Azimute</h3>
          <Link href="/#sobre">Sobre nós</Link><Link href="/#como-funciona">Como funciona</Link><Link href="/#seguranca">Segurança</Link>
        </div>
        <div>
          <h3>Atendimento</h3>
          <p><MapPin aria-hidden="true" /> RN e Nordeste</p>
          <a href={whatsappPlanning} target="_blank" rel="noopener noreferrer">(84) 99965-0530</a>
          <a href="mailto:contato@azimuteeducatur.com.br">contato@azimuteeducatur.com.br</a>
        </div>
      </div>
      <div className="az-container az-footer-bottom">
        <span>© 2026 Azimute Educatur. Todos os direitos reservados.</span>
        <span>Viajar · Descobrir · Aprender</span>
      </div>
    </footer>
  );
}
