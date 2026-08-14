import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Check,
  ClipboardCheck,
  Compass,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { AzimuteFooter, AzimuteHeader, whatsappPlanning } from "../components/AzimuteShell";
import { FeaturedRoutes } from "../components/FeaturedRoutes";
import { HeroCarousel } from "../components/HeroCarousel";


const differentials = [
  {
    icon: BookOpen,
    title: "Objetivo curricular claro",
    text: "Cada roteiro parte do que a turma precisa aprender. A escola recebe argumento pedagógico, não apenas uma lista de lugares.",
  },
  {
    icon: ShieldCheck,
    title: "Operação segura",
    text: "Seguro incluso, transporte regulamentado e equipe de apoio para a escola acompanhar tudo com previsibilidade.",
  },
  {
    icon: ClipboardCheck,
    title: "Material do professor",
    text: "Diário de campo e eixo de aprendizagem ajudam a preparar, conduzir e retomar a experiência em sala.",
  },
  {
    icon: Compass,
    title: "Rotas por série e tema",
    text: "As expedições entram no calendário de forma coerente com a etapa escolar e o conteúdo em andamento.",
  },
] as const;

export default function Home() {
  return (
    <main className="az-site">
      <div
        aria-hidden="true"
        dangerouslySetInnerHTML={{
          __html:
            "<!-- THESIS: uma expedição pedagógica começa antes da estrada; recusamos o portal turístico genérico. OWN-WORLD: marinho profundo, azul royal, cobre, ouro, papel off-white e fotografia territorial. STORY: escola entende, confia e pede um roteiro. FIRST VIEWPORT: navegação transparente sobre expedição real, promessa à esquerda e dois CTAs. FORM: composição fiel à referência Flytour, adaptada à identidade Azimute. -->",
        }}
      />

      <section className="az-hero" id="inicio">
        <HeroCarousel />
        <AzimuteHeader overlay />

        <div className="az-container az-hero-inner">
          <div className="az-hero-copy">
            <span className="az-hero-kicker">Expedições pedagógicas · RN e Nordeste</span>
            <h1>Viagens que transformam o mundo em sala de aula</h1>
            <p>Roteiros com objetivo curricular, operação organizada e material para a escola preparar cada experiência.</p>
            <div className="az-actions">
              <Link href={whatsappPlanning} className="az-button az-button-primary" target="_blank" rel="noopener noreferrer">
                Planejar calendário <ArrowRight aria-hidden="true" />
              </Link>
              <Link href="/roteiros" className="az-button az-button-light">
                Ver roteiros <ArrowRight aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
        <div className="az-scroll-hint" aria-hidden="true"><span /></div>
      </section>

      <section className="az-section az-experiences" id="expedicoes">
        <div className="az-container">
          <div className="az-section-heading az-section-heading-center">
            <span className="az-label"><Sparkles aria-hidden="true" /> Rotas em destaque</span>
            <h2>Um tema, muitos caminhos<br />de aprendizagem</h2>
            <p>Cada rota reúne roteiros ligados pelo mesmo território ou eixo pedagógico. Escolha uma rota e descubra as jornadas disponíveis.</p>
          </div>
          <FeaturedRoutes />
        </div>
      </section>

      <section className="az-section az-about" id="sobre">
        <div className="az-container az-about-grid">
          <div className="az-about-photo">
            <Image src="/azimute/timeAzimute.png" alt="Time da Azimute Educatur" fill sizes="(max-width: 900px) 100vw, 50vw" />
            <div className="az-about-caption">
              <strong>Time Azimute</strong>
              <span>Quem planeja e acompanha cada expedição</span>
            </div>
          </div>
          <div className="az-about-copy">
            <span className="az-kicker">Quem faz a Azimute</span>
            <h2>Um time próximo da escola, do planejamento à volta para casa</h2>
            <p>A Azimute Educatur transforma viagens escolares em experiências com intenção pedagógica, leitura de território e organização de ponta a ponta.</p>
            <p>Nosso time conversa com coordenações e professores, constrói cada roteiro e acompanha a operação para que escola e famílias saibam o que vai acontecer em cada etapa.</p>
            <ul>
              <li><Check aria-hidden="true" /> Roteiros construídos junto com a escola</li>
              <li><Check aria-hidden="true" /> Planejamento pedagógico e operacional integrado</li>
              <li><Check aria-hidden="true" /> Acompanhamento próximo de educadores e famílias</li>
            </ul>
            <Link href="#contato" className="az-text-link">Planejar com o nosso time <ArrowRight aria-hidden="true" /></Link>
          </div>
        </div>
      </section>

      <section className="az-proof" id="seguranca" aria-label="Estrutura das expedições Azimute">
        <div className="az-container az-proof-grid">
          <div className="az-proof-intro">
            <span>Planejamento que a escola consegue defender</span>
            <strong>Pedagógico e operacional apresentados antes da decisão.</strong>
          </div>
          <div className="az-proof-item"><strong>50+</strong><span>roteiros possíveis</span></div>
          <div className="az-proof-item"><strong>BNCC</strong><span>objetivo curricular por roteiro</span></div>
          <div className="az-proof-item"><strong>RN+</strong><span>RN, PB, PE e CE</span></div>
        </div>
      </section>

      <section className="az-section az-differentials">
        <div className="az-container">
          <div className="az-section-heading az-section-heading-center">
            <span className="az-kicker">Para a escola aprovar com segurança</span>
            <h2>O que acompanha<br />cada expedição</h2>
            <p>Não entregamos apenas um destino. A escola recebe os argumentos pedagógicos e operacionais para decidir com clareza.</p>
          </div>
          <div className="az-differential-row">
            {differentials.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title}>
                  <span><Icon aria-hidden="true" /></span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="az-section az-process" id="como-funciona">
        <div className="az-container az-process-grid">
          <div>
            <div className="az-section-heading">
              <span className="az-kicker">Como funciona</span>
              <h2>Do primeiro contato ao calendário fechado</h2>
              <p>A Azimute organiza o caminho para que a escola chegue à decisão com objetivo, operação e comunicação definidos.</p>
            </div>
            <ol className="az-process-list">
              <li>
                <span>01</span>
                <div><strong>Mapeamos a escola</strong><p>Entendemos as séries, os conteúdos em andamento e quem participa da aprovação.</p></div>
              </li>
              <li>
                <span>02</span>
                <div><strong>Montamos o calendário</strong><p>Relacionamos cada turma aos roteiros e às experiências adequadas para o semestre.</p></div>
              </li>
              <li>
                <span>03</span>
                <div><strong>Entregamos os argumentos</strong><p>Objetivo pedagógico, operação, comunicação para famílias e segurança chegam antes da decisão.</p></div>
              </li>
            </ol>
          </div>
          <div className="az-process-visual">
            <Image src="/azimute/routes/engenhos/areia.webp" alt="Centro histórico de Areia, Paraíba" fill sizes="(max-width: 760px) 100vw, 46vw" />
            <div className="az-process-caption">
              <strong>Civilização e Engenhos · Areia, PB</strong>
              <span>1 dia · Fundamental II e Médio</span>
              <small>Transporte · mediação · diário de campo · seguro incluso · BNCC mapeada</small>
            </div>
          </div>
        </div>
      </section>

      <section className="az-cta-band" id="contato">
        <div className="az-container az-cta-inner">
          <div>
            <span>Planejamento semestral</span>
            <h2>Quais turmas precisam sair da sala este semestre?</h2>
            <p>A Azimute cruza série, conteúdo e território para apresentar as opções certas.</p>
          </div>
          <Link href={whatsappPlanning} className="az-button az-button-primary" target="_blank" rel="noopener noreferrer">
            Solicitar planejamento <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>

      <AzimuteFooter />
    </main>
  );
}
