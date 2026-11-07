import { useEffect, useRef, useState } from "react";
import { CAPITULOS, DESTAQUES, EVOLUCAO, GALERIA, LINKS, RELATORIOS } from "./data.js";
import { IconArrow, IconCap, IconClose, IconDownload, IconMenu, IconNext, IconPrev, FieldIcon } from "./icons.jsx";
import "./portal.css";

const primaryLinks = [["projeto", "O projeto"], ["impacto", "Impacto"], ["territorio", "Território"], ["relatorios", "Relatórios"]];
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

const photoPaths = ["/img/maos-terra.webp", "/img/gal-ciranda.webp", "/img/gal-597.webp"];
const fieldPhotos = photoPaths.map(path => GALERIA.find(photo => photo.src === path));

function Capa() {
  const [index, setIndex] = useState(0);
  const photo = fieldPhotos[index];
  const turn = (offset) => setIndex(i => (i + offset + fieldPhotos.length) % fieldPhotos.length);
  return (
    <section className="field-hero" aria-labelledby="hero-title">
      <img key={photo.src} className="field-photo" src={photo.src} width={photo.w} height={photo.h} alt={photo.alt} fetchPriority="high" />
      <div className="field-shade" />
      <div className="shell hero-frame">
        <div className="hero-copy">
          <p className="kicker lime"><i /> EDUCAÇÃO AMBIENTAL</p>
          <h1 id="hero-title">Projeto<br /><em>Asa Verde</em></h1>
          <p className="hero-intro">Nas escolas públicas de Santa Rita, estudantes do IFPB ensinam crianças e adolescentes a plantar, reaproveitar materiais e cuidar do lugar onde vivem.</p>
          <div className="hero-actions"><a className="action-primary" href="#impacto">Explorar o impacto <IconArrow /></a><a className="action-quiet" href="#projeto">Conhecer o projeto</a></div>
        </div>
        <div className="field-footer">
          <span className="field-location"><FieldIcon type="pin" /> Santa Rita <i /> Paraíba</span>
          <div className="field-controls">
            <div className="field-caption" aria-live="polite"><small>ACERVO DO PROJETO · {String(index + 1).padStart(2, "0")} / 03</small><span>{photo.legenda}</span></div>
            <button type="button" onClick={() => turn(-1)} aria-label="Fotografia anterior"><IconPrev /></button>
            <button type="button" onClick={() => turn(1)} aria-label="Próxima fotografia"><IconNext /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

const metrics = [
  { icon: "school", label: "Unidades de ensino", current: DESTAQUES[0].valor, previous: EVOLUCAO[0].a },
  { icon: "people", label: "Estudantes multiplicadores", current: DESTAQUES[1].valor, previous: EVOLUCAO[1].a },
  { icon: "book", label: "Ações registradas", current: DESTAQUES[2].valor, previous: EVOLUCAO[6].a },
  { icon: "plant", label: "Mudas plantadas", current: 1260, previous: 1214 },
];

function Impacto() {
  const [year, setYear] = useState(2026);
  const current = year === 2026;
  return (
    <section id="impacto" className="impact-panel" aria-labelledby="impact-title">
      <div className="shell">
        <div className="impact-head">
          <h2 id="impact-title">O impacto em números</h2>
          <div className="year-picker" role="group" aria-label="Ano dos indicadores">{[2025, 2026].map(value => <button key={value} type="button" aria-pressed={value === year} onClick={() => setYear(value)}>{value}</button>)}</div>
        </div>
        <div aria-live="polite" aria-atomic="true">
          <dl className="metric-grid">{metrics.map(m => <div key={m.icon} className="metric"><dt><FieldIcon type={m.icon}/>{m.label}</dt><dd>{format.format(current ? m.current : m.previous)}</dd></div>)}</dl>
          <p className="reach-note">{current ? <>As atividades somaram <strong>41.506 participações</strong>. Cada presença conta, inclusive quando o mesmo estudante participa de várias ações.</> : <>As dez escolas reuniam <strong>4.751 matrículas</strong>. Esse total indica quantos estudantes poderiam ser alcançados pelo projeto.</>}</p>
          <div className="impact-source"><p>{current ? "Abril a novembro de 2026 · Dados consolidados em 7 de novembro." : "Junho a dezembro de 2025 · Primeiro ciclo do projeto."}</p><a href={current ? LINKS.relatorio2026 + "#page=6" : LINKS.relatorio2025} target="_blank" rel="noreferrer">Consultar a fonte <IconArrow /></a></div>
        </div>
      </div>
    </section>
  );
}

const stories = [
  { section: "Educação infantil", title: "Aprender com os pés no pátio", body: "Em sete centros de educação infantil, crianças de 4 a 6 anos exploraram o ambiente com brincadeiras, plantios e experiências sensoriais.", image: "/img/inf-patio.webp", alt: "Crianças explorando materiais naturais com uma estagiária no pátio", target: "infantil" },
  { section: "Arborização", title: "O plantio chega às calçadas", body: "Em Tibiri II, moradores receberam as equipes do Corredor Verde e adotaram mudas para cuidar em frente de casa.", image: "/img/arb-corredor.webp", alt: "Equipe do Corredor Verde visitando uma rua em Tibiri II", target: "arborizacao" },
  { section: "Educação ambiental", title: "Da sala de aula à oficina", body: "Maquetes de biomas, composteiras e brinquedos de material reaproveitado deram forma a 853 oficinas em 2026.", image: "/img/edu-oficina.webp", alt: "Estudantes ao lado de um painel sobre energia produzido pela turma", target: "educacao" },
];

function Campo() {
  return (
    <section className="shell field-stories" aria-labelledby="stories-title">
      <p className="kicker"><i /> NAS ESCOLAS</p>
      <div className="section-line"><h2 id="stories-title">O projeto em campo</h2><a className="text-link" href="#galeria">Visitar a galeria <IconArrow /></a></div>
      <div className="story-grid">{stories.map(s => <a className="story" href={`#${s.target}`} key={s.target}>
        <div className="story-image"><img src={s.image} loading="lazy" alt={s.alt} /></div>
        <small>{s.section}</small><h3>{s.title}</h3><p>{s.body}</p><span className="story-more">Ler sobre a ação <IconArrow /></span>
      </a>)}</div>
    </section>
  );
}

function TerritorioChamada() {
  return <section className="territory-promo"><div className="shell territory-inner">
    <div><p className="kicker lime"><i /> TERRITÓRIO</p><h2>Onde o Asa Verde atua</h2>
      <p>Da zona urbana a Lerolândia, as equipes atuam em oito bairros e localidades. Encontre sua escola ou centro de educação infantil e veja o que a equipe registrou.</p>
      <a className="action-primary" href="#territorio">Explorar as unidades <IconArrow /></a>
    </div>
    <a className="map-preview" href="#territorio" aria-label="Abrir mapa das 17 unidades de ensino"><img src="/img/mapa.webp" width="1364" height="1040" loading="lazy" alt="Mapa das unidades de ensino de Santa Rita atendidas pelo projeto" /></a>
  </div></section>;
}

function Fontes() {
  return <section className="shell sources-home" aria-labelledby="sources-title">
    <p className="kicker"><i /> PRESTAÇÃO DE CONTAS</p><div className="section-line"><h2 id="sources-title">Relatórios de impacto</h2><a className="text-link" href="#numeros">Comparar indicadores <IconArrow /></a></div>
    <div className="source-pair">{RELATORIOS.map(r => <article className="annual" key={r.ano}><img src={r.capa} loading="lazy" width="720" height="1018" alt={`Capa do relatório de ${r.ano}`} /><div><small>{r.paginas} · PDF</small><h3>Edição {r.ano}</h3><p>{r.ano === "2026" ? "A chegada à educação infantil e os resultados de cada unidade." : "As primeiras dez escolas, a coleta seletiva e a parceria com a COOREMM."}</p><a className="text-link" href={r.pdf} download={r.arquivo}><IconDownload /> Baixar relatório</a></div></article>)}</div>
  </section>;
}

export function Inicio() {
  return <><Capa /><Impacto /><Campo /><TerritorioChamada /><Fontes /></>;
}
