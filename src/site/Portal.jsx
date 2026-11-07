import { useEffect, useRef, useState } from "react";
import { CAPITULOS, DESTAQUES, EIXOS, EVOLUCAO, GALERIA, INFANTIL, LINKS, RELATORIOS, VOZES } from "./data.js";
import { IconArrow, IconCap, IconClose, IconDownload, IconMenu } from "./icons.jsx";
import PhotoSpread from "./PhotoSpread.jsx";
import "./portal.css";

const primaryLinks = [["galeria", "Fotografias"], ["impacto", "Impacto"], ["vozes", "Vozes"], ["relatorios", "Relatórios"]];
const format = new Intl.NumberFormat("pt-BR");

export function Cabecalho({ onFormacao, selected }) {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const closeOutside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("focusin", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("focusin", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);
  return (
    <header className="mast" ref={header}>
      <div className="shell mast-inner">
        <a className="brand" href="#inicio" onClick={() => setOpen(false)} aria-label="Projeto Asa Verde, início">
          <img width="52" height="34" src="/logos/simbolo_white.webp" alt="" />
          <span><small>PROJETO</small>Asa Verde</span>
        </a>
        <nav className="main-links" aria-label="Navegação principal">
          {primaryLinks.map(([id, name]) => <a key={id} href={`#${id}`} aria-current={selected === id ? "page" : undefined}>{name}</a>)}
        </nav>
        <div className="mast-tools">
          <a className="training" href="/formacao" onClick={onFormacao}><IconCap /> Área do estagiário</a>
          <button type="button" ref={toggle} className="menu-toggle" aria-label={open ? "Fechar menu" : "Abrir menu de navegação"} aria-expanded={open} aria-controls="all-links" onClick={() => setOpen(!open)}>{open ? <IconClose /> : <IconMenu />}</button>
        </div>
      </div>
      {open && <nav id="all-links" className="index-menu" aria-label="Todas as seções" onClick={() => setOpen(false)}>
        <a href="#inicio">Início <IconArrow /></a>
        {CAPITULOS.map(c => <a key={c.id} href={`#${c.id}`}>{c.nome} <IconArrow /></a>)}
        <a href="#equipe">Quem faz o Asa Verde <IconArrow /></a>
        <a href="/formacao" onClick={onFormacao}>Formação dos estagiários <IconCap /></a>
      </nav>}
    </header>
  );
}


const coverPhotos = [
  {
    src: "/img/capa.webp", w: 1216, h: 1720,
    alt: "Criança carimbando as mãos verdes em um painel de papel",
    legenda: "Marcas de mãos formam um painel coletivo durante a atividade de pintura.",
    label: "Pintura coletiva",
  },
  { ...GALERIA.find(photo => photo.src === "/img/gal-ciranda.webp"), label: "Ciranda no pátio" },
  { ...EIXOS.find(axis => axis.id === "arborizacao").fotos[0], label: "Plantio na escola" },
];

function Capa() {
  return (
    <section className="edition-cover" aria-labelledby="hero-title">
      <div className="shell edition-heading">
        <div className="edition-name">
          <p className="overline">Educação ambiental · Santa Rita, PB</p>
          <h1 id="hero-title"><span className="visually-hidden">Projeto </span>Asa <em>Verde</em></h1>
        </div>
        <div className="edition-intro">
          <p>Nas escolas públicas de Santa Rita, jovens do IFPB levam a educação ambiental da sala de aula aos pátios, às calçadas e às famílias.</p>
          <a className="underlink" href="#impacto">Conheça o alcance do projeto <IconArrow /></a>
        </div>
      </div>
      <PhotoSpread photos={coverPhotos} layout="cover" />
      <div className="shell cover-credit">
        <span>Fotografias das equipes do Asa Verde · 2026</span>
        <a className="underlink" href="#galeria">Explorar o acervo <IconArrow /></a>
      </div>
    </section>
  );
}

const metrics = [
  { label: "unidades de ensino", values: [EVOLUCAO[0].a, DESTAQUES[0].valor] },
  { label: "estudantes multiplicadores do IFPB", values: [EVOLUCAO[1].a, DESTAQUES[1].valor] },
  { label: "ações registradas no ciclo", values: [EVOLUCAO[6].a, DESTAQUES[2].valor] },
];

function Impacto() {
  const [year, setYear] = useState(2026);
  const current = year === 2026;
  return (
    <section className="impact-edition" id="impacto" aria-labelledby="impact-title">
      <div className="shell">
        <div className="section-rule">
          <h2 id="impact-title">Alcance do projeto</h2>
          <div className="cycle-select" role="group" aria-label="Ciclo do projeto">
            {[2025, 2026].map(value => (
              <button key={value} type="button" aria-pressed={value === year} onClick={() => setYear(value)}>{value}</button>
            ))}
          </div>
        </div>
        <div className="impact-composition" aria-live="polite" aria-atomic="true">
          <div className="impact-lead">
            <p className="impact-number">{current ? "41.506" : "4.751"}</p>
            <h3>{current ? "participações nas atividades" : "matrículas nas escolas atendidas"}</h3>
            <p>{current
              ? "Cada presença em uma atividade entra na contagem. Uma criança que participou de uma oficina e de um plantio, por exemplo, aparece duas vezes."
              : "As dez escolas do primeiro ciclo reuniam esse total de matrículas. O relatório usa esse dado para estimar o público que as ações poderiam alcançar."}</p>
          </div>
          <dl className="impact-ledger">
            {metrics.map(m => (
              <div key={m.label}><dt>{m.label}</dt><dd>{format.format(m.values[current ? 1 : 0])}</dd></div>
            ))}
          </dl>
        </div>
        <div className="source-line">
          <p>{current ? "Relatório de 2026 · Dados consolidados em 7 de novembro." : "Relatório de 2025 · Junho a dezembro."}</p>
          <a className="underlink" href="#numeros">Comparar os dois ciclos <IconArrow /></a>
        </div>
      </div>
    </section>
  );
}

function PrimeiraInfancia() {
  return (
    <section className="shell childhood" aria-labelledby="infancia-title">
      <figure className="childhood-photo">
        <img src="/img/inf-patio.webp" width="1600" height="1204" loading="lazy"
          alt="Crianças examinam folhas e areia com a estagiária durante uma atividade no pátio" />
        <figcaption>Atividade sensorial em um centro de educação infantil.</figcaption>
      </figure>
      <div className="childhood-text">
        <p className="overline">Educação infantil</p>
        <h2 id="infancia-title">A descoberta começa <em>no pátio.</em></h2>
        <p>Em julho de 2026, sete centros de educação infantil receberam o Asa Verde. Para trabalhar com crianças de 4 a 6 anos, os estagiários levaram folhas, sementes, música e brincadeiras para as rodas de aprendizagem.</p>
        <dl className="childhood-stats">
          <div><dt>oficinas nos centros infantis</dt><dd>{INFANTIL[0][0]}</dd></div>
          <div><dt>participações das crianças</dt><dd>{INFANTIL[4][0]}</dd></div>
        </dl>
        <a className="underlink" href="#infantil">Conhecer as atividades <IconArrow /></a>
      </div>
    </section>
  );
}

function Comunidade() {
  const relato = VOZES.find(voice => voice.unidade.includes("Antônio Pereira"));
  return (
    <section className="community-story" aria-labelledby="community-title">
      <div className="shell community-layout">
        <div className="community-copy">
          <p className="overline">Arborização · Tibiri II</p>
          <h2 id="community-title">Da escola <em>à calçada.</em></h2>
          <p>Na Avenida Assis Chateaubriand, estagiários e equipe da SEMMA conversaram de porta em porta com as famílias sobre o plantio em frente às casas.</p>
          <figure className="field-quote">
            <blockquote>“{relato.texto}”</blockquote>
            <figcaption>{relato.autor} · {relato.unidade}</figcaption>
          </figure>
          <a className="underlink" href="#arborizacao">Ler sobre o Corredor Verde <IconArrow /></a>
        </div>
        <figure className="community-photo">
          <img src="/img/arb-corredor.webp" width="1200" height="1600" loading="lazy" alt="Equipes do Corredor Verde percorrendo uma rua de Tibiri II" />
          <figcaption>Mobilização do Corredor Verde em Santa Rita.</figcaption>
        </figure>
      </div>
    </section>
  );
}

function RelatoriosHome() {
  return (
    <section className="shell annual-library" aria-labelledby="sources-title">
      <div className="section-rule"><h2 id="sources-title">Relatórios de impacto</h2>
        <a className="underlink" href="#relatorios">Relatórios e painéis <IconArrow /></a>
      </div>
      <div className="annual-grid">
        {RELATORIOS.map(r => (
          <article className="annual-book" key={r.ano}>
            <img src={r.capa} loading="lazy" width="720" height="1018" alt={`Capa do relatório de ${r.ano}`} />
            <div>
              <p className="overline">Edição {r.ano}</p>
              <h3>{r.ano === "2026" ? "A chegada à educação infantil" : "O primeiro ciclo nas escolas"}</h3>
              <p>{r.ano === "2026" ? "Os resultados das 17 unidades, da formação dos multiplicadores às atividades com as turmas." : "A implantação da coleta seletiva e o destino de 2.322,5 kg de recicláveis com a COREMM."}</p>
              <a className="underlink" href={r.pdf} download={r.arquivo}><IconDownload /> Baixar PDF · {r.paginas}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Inicio() {
  return <><Capa /><Impacto /><PrimeiraInfancia /><Comunidade /><RelatoriosHome /></>;
}
