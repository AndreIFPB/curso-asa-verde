import { useEffect, useRef, useState } from "react";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/archivo/wdth-italic.css";
import "./site.css";
import {
  LINKS,
  NAV,
  PARCEIROS,
  PAPEIS,
  DESTAQUES,
  NUMEROS,
  EVOLUCAO,
  ETAPAS,
  EIXOS,
  INFANTIL,
  ESCOLAS,
  CIEIS,
  LINHA_DO_TEMPO,
  VOZES,
  GALERIA,
  IMPRENSA,
  RELATORIOS,
  FICHA,
  ORIENTADORES,
} from "./data.js";
import {
  IconDownload,
  IconExternal,
  IconChart,
  IconClipboard,
  IconInstagram,
  IconCap,
  IconMenu,
  IconClose,
  IconPrev,
  IconNext,
} from "./icons.jsx";

const ext = { target: "_blank", rel: "noopener noreferrer" };

function Img({ src, w, h, alt = "", className, eager, sizes, style }) {
  return (
    <img
      src={src}
      width={w}
      height={h}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      sizes={sizes}
      style={style}
    />
  );
}

/* ───────────────────────── Cabeçalho ───────────────────────── */

function Header({ onFormacao }) {
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!aberto) return;
    const onKey = (e) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [aberto]);

  return (
    <header className={`hdr${rolou ? " hdr--rolou" : ""}${aberto ? " hdr--aberto" : ""}`}>
      <div className="wrap hdr-in">
        <a className="marca" href="#inicio" onClick={() => setAberto(false)}>
          <img src="/logos/simbolo_white.webp" width="676" height="400" alt="" />
          <span>
            Projeto
            <br />
            Asa Verde
          </span>
        </a>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto((v) => !v)}
        >
          {aberto ? <IconClose /> : <IconMenu />}
          <span>{aberto ? "Fechar" : "Menu"}</span>
        </button>

        <nav id="menu-principal" className="nav" aria-label="Seções do site">
          <ul>
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={() => setAberto(false)}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--lima btn--sm nav-formacao" href="/formacao" onClick={onFormacao}>
            <IconCap />
            Formação dos multiplicadores
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ───────────────────────── Abertura ───────────────────────── */

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-titulo">
      <div className="hero-txt">
        <p className="hero-edicao">Santa Rita – PB, ciclo 2026</p>
        <h1 className="hero-titulo" id="hero-titulo">
          <span className="hero-l1">Projeto</span>
          <span className="hero-l2">Asa Verde</span>
        </h1>
        <p className="hero-lead">
          Educação ambiental nas escolas e nos centros de educação infantil de Santa Rita, com
          estudantes do IFPB atuando como multiplicadores ambientais.
        </p>
        <div className="hero-cta">
          <a className="btn btn--lima" href={LINKS.relatorio2026} download="Projeto-Asa-Verde-Relatorio-de-Impacto-2026.pdf">
            <IconDownload />
            Baixar o relatório 2026
          </a>
          <a className="btn btn--contorno" href="#resultados">
            Ver os resultados
          </a>
        </div>
        <dl className="hero-fatos">
          {DESTAQUES.map((d) => (
            <div key={d.rotulo}>
              <dt>{d.rotulo}</dt>
              <dd>{d.valor}</dd>
            </div>
          ))}
        </dl>
      </div>
      <figure className="hero-foto">
        <Img
          src="/img/capa.webp"
          w={1216}
          h={1720}
          eager
          alt="Mãos de criança pintadas de verde carimbando um painel coletivo"
        />
        <figcaption>Transformando escolas. Semeando futuro.</figcaption>
      </figure>
    </section>
  );
}

function Parceiros() {
  const grupo = (titulo, itens) => (
    <div className="parc-grupo">
      <h2 className="parc-tit">{titulo}</h2>
      <ul>
        {itens.map((p) => (
          <li key={p.nome}>
            <img src={p.logo} width={p.w} height={p.h} alt={p.nome} loading="lazy" />
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <section className="parceiros" aria-label="Instituições parceiras">
      <div className="wrap parc-in">
        {grupo("Realização", PARCEIROS.realizacao)}
        {grupo("Apoio", PARCEIROS.apoio)}
      </div>
    </section>
  );
}

/* ───────────────────────── O projeto ───────────────────────── */

function Projeto() {
  return (
    <section className="sec projeto" id="projeto" aria-labelledby="projeto-tit">
      <div className="wrap">
        <div className="projeto-grid">
          <div className="projeto-txt">
            <h2 className="h2" id="projeto-tit">
              Escolas que se tornam núcleos vivos de educação ambiental
            </h2>
            <p className="lead">
              O Projeto Asa Verde é uma iniciativa de educação ambiental idealizada pelo Ministério
              Público da Paraíba, a partir da concepção da Promotora de Justiça Dra. Miriam Pereira
              Vasconcelos, e executada pelo Instituto Federal da Paraíba – Campus Santa Rita em
              parceria com a Prefeitura Municipal de Santa Rita.
            </p>
            <p>
              Seu propósito é transformar as escolas públicas do município em núcleos vivos de
              educação ambiental, nos quais crianças e adolescentes aprendem a compreender o
              território onde vivem, a cuidar dele e a agir como agentes de mudança em suas
              comunidades.
            </p>
            <p>
              Em 2026, segundo ano de execução, o projeto ampliou de forma expressiva o seu alcance.
              Às 10 escolas de ensino fundamental somaram-se 7 centros de educação infantil, levando
              a educação ambiental, pela primeira vez, a crianças de 4 a 6 anos. A equipe de
              multiplicadores também cresceu: 104 estudantes dos cursos técnicos integrados do IFPB
              atuaram entre abril e novembro, organizados em equipes de campo, de planejamento e de
              mídia.
            </p>
          </div>
          <figure className="projeto-foto">
            <Img
              src="/img/divisor-resultados.webp"
              w={2000}
              h={1125}
              alt="Estudantes e estagiários reunidos diante do painel do Projeto Asa Verde"
            />
          </figure>
        </div>

        <ol className="papeis">
          {PAPEIS.map((p) => (
            <li key={p.papel}>
              <p className="papel">{p.papel}</p>
              <h3>{p.nome}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── Números ───────────────────────── */

function Numeros() {
  return (
    <section className="sec numeros" id="resultados" aria-labelledby="numeros-tit">
      <div className="wrap">
        <div className="sec-cab sec-cab--claro">
          <h2 className="h2" id="numeros-tit">
            O ciclo 2026 em números
          </h2>
          <p>Abril a novembro de 2026, com dados consolidados em 7 de novembro.</p>
        </div>

        <dl className="num-destaques">
          {DESTAQUES.map((d) => (
            <div key={d.rotulo}>
              <dt>
                <strong>{d.rotulo}</strong>
                <span>{d.detalhe}</span>
              </dt>
              <dd className="num-grande">{d.valor}</dd>
            </div>
          ))}
        </dl>

        <dl className="num-grade">
          {NUMEROS.map((n) => (
            <div key={n.rotulo}>
              <dt>{n.rotulo}</dt>
              <dd>{n.valor}</dd>
            </div>
          ))}
        </dl>

        <p className="nota nota--claro">
          Participações correspondem à soma dos participantes registrados em cada atividade; um
          mesmo estudante pode ter participado de várias ações ao longo do ciclo. Ações registradas
          incluem as publicações digitais.
        </p>
      </div>
    </section>
  );
}

const fmt = (n) => n.toLocaleString("pt-BR");

function Evolucao() {
  return (
    <section className="sec evolucao" aria-labelledby="evo-tit">
      <div className="wrap evo-grid">
        <div className="evo-txt">
          <h2 className="h2" id="evo-tit">
            O projeto cresceu em todas as frentes
          </h2>
          <p>
            Em seu segundo ano, o Asa Verde ampliou a rede atendida, a equipe de multiplicadores e,
            sobretudo, a intensidade do trabalho pedagógico em sala de aula. As oficinas mais que
            triplicaram e as gincanas e campanhas quadruplicaram em relação a 2025.
          </p>
          <ul className="legenda" aria-label="Legenda">
            <li>
              <span className="sw sw--a" aria-hidden="true" />
              2025
            </li>
            <li>
              <span className="sw sw--b" aria-hidden="true" />
              2026
            </li>
          </ul>
          <p className="nota">
            Fontes: Relatório de Impacto 2025 (ações executadas entre junho e dezembro de 2025) e
            sistema de relatórios do Projeto Asa Verde 2026. As barras comparam cada indicador com o
            valor de 2026.
          </p>
        </div>

        <ul className="evo-lista">
          {EVOLUCAO.map((e) => {
            const pct = Math.round(((e.b - e.a) / e.a) * 100);
            const largura = (e.a / e.b) * 100;
            return (
              <li
                key={e.indicador}
                className="evo-item"
                aria-label={`${e.indicador}: ${fmt(e.a)} em 2025 e ${fmt(e.b)} em 2026, aumento de ${pct}%`}
              >
                <div className="evo-cab" aria-hidden="true">
                  <span>{e.indicador}</span>
                  <strong>+{pct}%</strong>
                </div>
                <div className="evo-barra" aria-hidden="true" title={`2025: ${fmt(e.a)}`}>
                  <span className="evo-b evo-b--a" style={{ "--v": `${largura}%` }} />
                  <em>{fmt(e.a)}</em>
                </div>
                <div className="evo-barra" aria-hidden="true" title={`2026: ${fmt(e.b)}`}>
                  <span className="evo-b evo-b--b" style={{ "--v": "100%" }} />
                  <em>{fmt(e.b)}</em>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Como funciona ───────────────────────── */

function ComoFunciona() {
  return (
    <section className="sec funciona" aria-labelledby="funciona-tit">
      <div className="wrap">
        <div className="sec-cab">
          <h2 className="h2" id="funciona-tit">
            Como o Asa Verde funciona
          </h2>
          <p>
            O projeto combina formação de jovens multiplicadores, presença semanal nas unidades
            educacionais, registro sistemático de cada ação e acompanhamento institucional pelos
            entes parceiros.
          </p>
        </div>
        <ol className="etapas">
          {ETAPAS.map((e, i) => (
            <li key={e.titulo}>
              <span className="etapa-n" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{e.titulo}</h3>
              <p>{e.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── Eixos ───────────────────────── */

function Eixo({ e, idx }) {
  const triplo = e.fotos.length === 3;
  const maxRank = e.ranking ? e.ranking[0][1] : 0;
  return (
    <article className={`eixo${idx % 2 ? " eixo--inv" : ""}${triplo ? " eixo--triplo" : ""}`} id={e.id} aria-labelledby={`${e.id}-tit`}>
      {triplo ? (
        <div className="eixo-trio">
          {e.fotos.map((f) => (
            <figure key={f.src}>
              <Img src={f.src} w={f.w} h={f.h} alt={f.alt} />
              <figcaption>{f.legenda}</figcaption>
            </figure>
          ))}
        </div>
      ) : (
        <div className="eixo-fotos">
          <Img className="eixo-f1" src={e.fotos[0].src} w={e.fotos[0].w} h={e.fotos[0].h} alt={e.fotos[0].alt} />
          <Img className="eixo-f2" src={e.fotos[1].src} w={e.fotos[1].w} h={e.fotos[1].h} alt={e.fotos[1].alt} />
        </div>
      )}

      <div className="eixo-txt">
        <p className="eixo-rot">
          <span>{e.eixo}</span>
          {e.nome}
        </p>
        <h3 className="eixo-tit" id={`${e.id}-tit`}>
          <span className="eixo-valor">{e.valor}</span>
          <span className="eixo-frase">{e.titulo}</span>
        </h3>
        <p>{e.texto}</p>

        <dl className="eixo-nums">
          {e.numeros.map(([v, r]) => (
            <div key={r}>
              <dt>{r}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        {e.lista && (
          <>
            <h4 className="mini-tit">{e.listaTitulo}</h4>
            <ul className="chips">
              {e.lista.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </>
        )}

        {e.ranking && (
          <>
            <h4 className="mini-tit">Unidades que mais plantaram</h4>
            <ul className="rank">
              {e.ranking.map(([nome, v]) => (
                <li key={nome}>
                  <span className="rank-nome">{nome}</span>
                  <span className="rank-barra" aria-hidden="true">
                    <span style={{ "--v": `${(v / maxRank) * 100}%` }} />
                  </span>
                  <span className="rank-v">{v} mudas</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {e.acoes && (
          <>
            <h4 className="mini-tit">{e.listaTitulo}</h4>
            <ul className="acoes">
              {e.acoes.map(([acao, onde]) => (
                <li key={acao}>
                  <strong>{acao}</strong>
                  <span>{onde}</span>
                </li>
              ))}
            </ul>
          </>
        )}

        {e.destaque && (
          <aside className="destaque">
            <h4>{e.destaque.titulo}</h4>
            <p>{e.destaque.texto}</p>
          </aside>
        )}

        {e.id === "comunicacao" && (
          <a className="link-forte" href={LINKS.instagram} {...ext}>
            <IconInstagram />
            Seguir @projetoasaverde no Instagram
          </a>
        )}
      </div>
    </article>
  );
}

function Eixos() {
  return (
    <section className="sec eixos" aria-labelledby="eixos-tit">
      <div className="wrap">
        <div className="sec-cab">
          <h2 className="h2" id="eixos-tit">
            Quatro eixos de atuação
          </h2>
          <p>
            Da sala de aula ao bairro, as ações do ciclo 2026 se organizaram em educação ambiental,
            arborização, mobilização e comunicação.
          </p>
        </div>
        {EIXOS.map((e, i) => (
          <Eixo key={e.id} e={e} idx={i} />
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────── Educação infantil ───────────────────────── */

function Infantil() {
  return (
    <section className="sec infantil" aria-labelledby="infantil-tit">
      <div className="wrap infantil-grid">
        <figure className="infantil-foto">
          <Img src="/img/inf-abraco.webp" w={1050} h={1400} alt="Duas crianças se abraçando durante atividade em centro de educação infantil" />
        </figure>
        <div className="infantil-txt">
          <p className="rotulo">Novidade de 2026</p>
          <h2 className="h2" id="infantil-tit">
            A educação ambiental chega à primeira infância
          </h2>
          <p className="lead">
            Em julho, o Asa Verde passou a atender sete unidades de educação infantil, com crianças
            de 4 a 6 anos.
          </p>
          <p>
            A mudança exigiu uma nova abordagem: as equipes receberam formação específica com
            profissionais da educação infantil do município e passaram a trabalhar com histórias,
            música, brincadeiras, pintura, experimentos simples e plantio. A resposta das crianças
            foi entusiasmada. Elas levaram para casa mudas, histórias e hábitos, envolvendo as
            famílias: uma aluna passou a jogar o lixo na lixeira de casa, outra prometeu
            conscientizar um familiar fumante, e uma criança pediu ajuda aos estagiários ao ver uma
            queimada perto da escola.
          </p>
          <dl className="infantil-nums">
            {INFANTIL.map(([v, r]) => (
              <div key={r}>
                <dt>{r}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Território ───────────────────────── */

function Territorio() {
  const lista = (titulo, itens) => (
    <div className="unid-grupo">
      <h3 className="mini-tit">{titulo}</h3>
      <ol className="unid">
        {itens.map(([n, nome, bairro]) => (
          <li key={n}>
            <span className="unid-n">{n}</span>
            <span className="unid-nome">{nome}</span>
            <span className="unid-bairro">{bairro}</span>
          </li>
        ))}
      </ol>
    </div>
  );
  return (
    <section className="sec territorio" id="territorio" aria-labelledby="terr-tit">
      <div className="wrap">
        <div className="sec-cab">
          <h2 className="h2" id="terr-tit">
            17 unidades em 8 bairros e localidades
          </h2>
          <p>
            O projeto está presente na zona urbana de Santa Rita e em Lerolândia, cerca de 18 km ao
            norte do centro.
          </p>
        </div>
        <div className="terr-grid">
          <figure className="mapa">
            <Img src="/img/mapa.webp" w={1364} h={1040} alt="Mapa de Santa Rita com a localização aproximada das 17 unidades atendidas, numeradas de 1 a 17" />
            <figcaption>
              Localização aproximada das unidades. Base cartográfica © OpenStreetMap contributors.
            </figcaption>
          </figure>
          <div className="unid-col">
            {lista("Escolas de ensino fundamental", ESCOLAS)}
            {lista("Centros de educação infantil", CIEIS)}
            <p className="nota">
              A EMEIF e EJA Padre João Félix Medeiros integrou a fase inicial do projeto (maio e
              junho). A partir de agosto, a equipe passou a atuar na EMEIF e EJA Dr. Flávio Maroja
              Filho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Linha do tempo ───────────────────────── */

function LinhaDoTempo() {
  return (
    <section className="sec tempo" aria-labelledby="tempo-tit">
      <div className="wrap tempo-grid">
        <div className="sec-cab sec-cab--claro tempo-cab">
          <h2 className="h2" id="tempo-tit">
            Os marcos do ciclo 2026
          </h2>
          <p>De abril a novembro, da abertura oficial às despedidas nas unidades.</p>
        </div>
        <ol className="tempo-lista">
          {LINHA_DO_TEMPO.map(([data, tit, txt]) => (
            <li key={tit}>
              <span className="tempo-data">{data}</span>
              <div>
                <h3>{tit}</h3>
                <p>{txt}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ───────────────────────── Acompanhamento ───────────────────────── */

function Acompanhamento() {
  return (
    <section className="sec acomp" aria-labelledby="acomp-tit">
      <div className="wrap acomp-grid">
        <div className="acomp-fotos">
          <Img src="/img/acp-carlosarnobio.webp" w={1400} h={1050} alt="Visita da Promotora de Justiça à EMEF Prof. Carlos Arnóbio Maroja Di Pace com estagiários e equipe escolar" />
          <Img src="/img/acp-odilon.webp" w={1400} h={1050} alt="Visita da Promotora de Justiça à EMEF Odilon Ribeiro Coutinho com a equipe de estagiários" />
        </div>
        <div className="acomp-txt">
          <h2 className="h2" id="acomp-tit">
            Um projeto acompanhado de perto
          </h2>
          <p>
            Entre julho e novembro, a Promotora de Justiça Dra. Miriam Pereira Vasconcelos,
            idealizadora do projeto, visitou as unidades atendidas para acompanhar as atividades,
            dialogar com gestões, professores, estagiários e estudantes e conhecer de perto os
            trabalhos produzidos pelas turmas. Nas visitas, esteve acompanhada de integrantes da
            coordenação do projeto no IFPB e na SEMMA.
          </p>
          <div className="transp">
            <h3>Transparência</h3>
            <p>
              Cada ação é registrada no sistema de relatórios do projeto e consolidada no Painel de
              Monitoramento, em Power BI, de acesso público.
            </p>
            <a className="btn btn--floresta" href={LINKS.powerbi2026} {...ext}>
              <IconChart />
              Abrir o painel de monitoramento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Vozes ───────────────────────── */

function Vozes() {
  const [primeira, ...demais] = VOZES;
  return (
    <section className="sec vozes" aria-labelledby="vozes-tit">
      <div className="wrap">
        <div className="sec-cab">
          <h2 className="h2" id="vozes-tit">
            O que ficou nas escolas
          </h2>
          <p>Relatos registrados pelas equipes de estagiários nos relatórios mensais.</p>
        </div>
        <figure className="voz voz--grande">
          <blockquote>
            <p>{primeira.texto}</p>
          </blockquote>
          <figcaption>
            <strong>{primeira.autor}</strong>
            <span>{primeira.unidade}</span>
          </figcaption>
        </figure>
        <div className="vozes-grade">
          {demais.map((v) => (
            <figure className="voz" key={v.unidade}>
              <blockquote>
                <p>{v.texto}</p>
              </blockquote>
              <figcaption>
                <strong>{v.autor}</strong>
                <span>{v.unidade}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Galeria ───────────────────────── */

function Galeria() {
  const [atual, setAtual] = useState(-1);
  const dlg = useRef(null);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (atual >= 0 && !d.open) d.showModal();
    if (atual < 0 && d.open) d.close();
  }, [atual]);

  const mover = (passo) => setAtual((i) => (i + passo + GALERIA.length) % GALERIA.length);

  const onKey = (e) => {
    if (e.key === "ArrowRight") mover(1);
    if (e.key === "ArrowLeft") mover(-1);
  };

  const foto = atual >= 0 ? GALERIA[atual] : null;

  return (
    <section className="sec galeria" aria-labelledby="gal-tit">
      <div className="wrap">
        <div className="sec-cab">
          <h2 className="h2" id="gal-tit">
            Da sala de aula ao território
          </h2>
          <p>Momentos do ciclo 2026 registrados pelas equipes de estagiários e pela equipe de Mídia.</p>
        </div>
        <ul className="gal-grade">
          {GALERIA.map((f, i) => (
            <li key={f.src} className={f.destaque ? "gal-destaque" : undefined} style={{ "--c": f.c, "--r": f.r }}>
              <button type="button" onClick={() => setAtual(i)} aria-label={`Ampliar foto: ${f.alt}`}>
                <Img src={f.src} w={f.w} h={f.h} alt="" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dlg}
        className="lightbox"
        aria-label="Foto ampliada"
        onClose={() => setAtual(-1)}
        onKeyDown={onKey}
        onClick={(e) => e.target === dlg.current && setAtual(-1)}
      >
        {foto && (
          <figure>
            <img src={foto.src} width={foto.w} height={foto.h} alt={foto.alt} />
            <figcaption>
              <span>{foto.alt}</span>
              <span className="lb-cont">
                {atual + 1} de {GALERIA.length}
              </span>
            </figcaption>
          </figure>
        )}
        <button type="button" className="lb-btn lb-fechar" onClick={() => setAtual(-1)} aria-label="Fechar">
          <IconClose />
        </button>
        <button type="button" className="lb-btn lb-ant" onClick={() => mover(-1)} aria-label="Foto anterior">
          <IconPrev />
        </button>
        <button type="button" className="lb-btn lb-prox" onClick={() => mover(1)} aria-label="Próxima foto">
          <IconNext />
        </button>
      </dialog>
    </section>
  );
}

/* ───────────────────────── Imprensa ───────────────────────── */

function Imprensa() {
  return (
    <section className="sec imprensa" id="imprensa" aria-labelledby="imp-tit">
      <div className="wrap">
        <div className="imp-topo">
          <div className="sec-cab">
            <h2 className="h2" id="imp-tit">
              O Asa Verde na imprensa
            </h2>
            <p>Notícias publicadas sobre o projeto por parceiros e veículos de comunicação.</p>
          </div>
          <aside className="premio" aria-labelledby="premio-tit">
            <div className="premio-selo" aria-hidden="true">
              Prata
            </div>
            <div>
              <h3 id="premio-tit">Reconhecimento nacional</h3>
              <p>
                Por meio do Projeto Asa Verde, Santa Rita recebeu o prêmio prata na categoria
                Sustentabilidade e Meio Ambiente do programa Cidade Empreendedora, do Sebrae.
              </p>
            </div>
          </aside>
        </div>

        <ul className="noticias">
          {IMPRENSA.map((n) => (
            <li key={n.url}>
              <a href={n.url} {...ext}>
                <span className="not-meta">
                  <strong>{n.veiculo}</strong>
                  <time>{n.data}</time>
                </span>
                <span className="not-corpo">
                  <span className="not-tit">{n.titulo}</span>
                  <span className="not-res">{n.resumo}</span>
                </span>
                <span className="not-ir" aria-hidden="true">
                  <IconExternal />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Relatórios ───────────────────────── */

function Relatorios() {
  return (
    <section className="sec relatorios" id="relatorios" aria-labelledby="rel-tit">
      <div className="wrap">
        <div className="sec-cab">
          <h2 className="h2" id="rel-tit">
            Relatórios de impacto
          </h2>
          <p>
            Os relatórios prestam contas aos entes parceiros e à sociedade sobre as ações executadas
            em cada ciclo. Baixe a versão completa ou consulte os dados no painel público.
          </p>
        </div>
        <div className="rel-grade">
          {RELATORIOS.map((r, i) => (
            <article className={`rel${i === 0 ? " rel--principal" : ""}`} key={r.ano} aria-labelledby={`rel-${r.ano}`}>
              <a className="rel-capa" href={r.pdf} download={r.arquivo} tabIndex={-1} aria-hidden="true">
                <Img src={r.capa} w={720} h={1018} alt="" />
              </a>
              <div className="rel-info">
                <p className="rel-ano">{r.ano}</p>
                <h3 id={`rel-${r.ano}`}>{r.titulo}</h3>
                <p className="rel-periodo">
                  {r.periodo}. {r.paginas}.
                </p>
                <p>{r.descricao}</p>
                <dl className="rel-nums">
                  {r.numeros.map(([v, t]) => (
                    <div key={t}>
                      <dt>{t}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="rel-acoes">
                  <a className="btn btn--floresta" href={r.pdf} download={r.arquivo}>
                    <IconDownload />
                    Baixar o relatório
                    <span className="btn-meta">{r.tamanho}</span>
                  </a>
                  <a className="btn btn--linha" href={r.painel} {...ext}>
                    <IconChart />
                    Painel de dados {r.ano}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Acessos ───────────────────────── */

function Acessos({ onFormacao }) {
  const itens = [
    {
      icon: <IconChart />,
      titulo: "Painel de monitoramento",
      texto: "Os indicadores do ciclo 2026 em Power BI, atualizados a partir do sistema de relatórios.",
      href: LINKS.powerbi2026,
      rotulo: "Power BI",
      externo: true,
    },
    {
      icon: <IconInstagram />,
      titulo: "Instagram",
      texto: "Fotos, vídeos e a rotina das ações nas escolas e nos centros de educação infantil.",
      href: LINKS.instagram,
      rotulo: "@projetoasaverde",
      externo: true,
    },
    {
      icon: <IconClipboard />,
      titulo: "Sistema de relatórios",
      texto: "Registro das ações pelas equipes, com data, turma, participantes e evidências. Acesso restrito às equipes do projeto.",
      href: LINKS.sistema,
      rotulo: "relatorio-asa-verde-2026.vercel.app",
      externo: true,
    },
    {
      icon: <IconCap />,
      titulo: "Formação dos multiplicadores",
      texto: "Curso online com quatro módulos, avaliações e certificado. Acesso com o código fornecido pela coordenação.",
      href: "/formacao",
      rotulo: "Área dos estagiários",
      externo: false,
    },
  ];
  return (
    <section className="sec acessos" aria-labelledby="acessos-tit">
      <div className="wrap">
        <div className="sec-cab sec-cab--claro">
          <h2 className="h2" id="acessos-tit">
            Acompanhe o projeto
          </h2>
        </div>
        <ul className="acessos-grade">
          {itens.map((it) => (
            <li key={it.titulo}>
              <a
                href={it.href}
                {...(it.externo ? ext : {})}
                onClick={it.externo ? undefined : onFormacao}
              >
                <span className="ac-icon">{it.icon}</span>
                <span className="ac-tit">
                  {it.titulo}
                  {it.externo && <IconExternal className="ac-ext" width="16" height="16" />}
                </span>
                <span className="ac-txt">{it.texto}</span>
                <span className="ac-rot">{it.rotulo}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Ficha técnica ───────────────────────── */

function Ficha() {
  return (
    <section className="sec ficha" id="equipe" aria-labelledby="ficha-tit">
      <div className="wrap">
        <figure className="ficha-foto">
          <Img src="/img/equipe.webp" w={2200} h={1237} alt="Estagiários, professores e coordenação do Projeto Asa Verde reunidos" />
        </figure>
        <div className="sec-cab">
          <h2 className="h2" id="ficha-tit">
            Quem faz o Asa Verde
          </h2>
          <p>
            104 estudantes dos cursos técnicos integrados de Meio Ambiente e Informática do IFPB –
            Campus Santa Rita atuaram no ciclo 2026: 84 nas equipes das unidades e 20 nas equipes de
            Planejamento e de Mídia, com a supervisão de professoras e professores das 17 unidades.
          </p>
        </div>
        <div className="ficha-grade">
          {FICHA.map((f) => (
            <div key={f.instituicao}>
              <h3 className="mini-tit">{f.instituicao}</h3>
              <ul className="pessoas">
                {f.pessoas.map(([nome, cargo]) => (
                  <li key={nome}>
                    <strong>{nome}</strong>
                    <span>{cargo}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="orientadores">
          <h3 className="mini-tit">Orientação pedagógica, professores do IFPB</h3>
          <ul>
            {ORIENTADORES.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Rodapé ───────────────────────── */

function Rodape({ onFormacao }) {
  return (
    <footer className="rodape">
      <div className="wrap">
        <div className="rod-topo">
          <img className="rod-logo" src="/logos/asaverde_white.webp" width="692" height="400" alt="Projeto Asa Verde" loading="lazy" />
          <p className="rod-lema">A educação ambiental planta hoje o mundo que queremos amanhã.</p>
        </div>
        <div className="rod-cols">
          <div>
            <h2 className="rod-tit">Navegação</h2>
            <ul>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
              <li>
                <a href="#equipe">Quem faz</a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="rod-tit">Acessos</h2>
            <ul>
              <li>
                <a href={LINKS.powerbi2026} {...ext}>
                  Painel de monitoramento
                </a>
              </li>
              <li>
                <a href={LINKS.sistema} {...ext}>
                  Sistema de relatórios
                </a>
              </li>
              <li>
                <a href={LINKS.instagram} {...ext}>
                  Instagram @projetoasaverde
                </a>
              </li>
              <li>
                <a href="/formacao" onClick={onFormacao}>
                  Formação dos multiplicadores
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="rod-tit">Relatórios</h2>
            <ul>
              <li>
                <a href={LINKS.relatorio2026} download="Projeto-Asa-Verde-Relatorio-de-Impacto-2026.pdf">
                  Relatório de Impacto 2026
                </a>
              </li>
              <li>
                <a href={LINKS.relatorio2025} download="Projeto-Asa-Verde-Relatorio-de-Impacto-2025.pdf">
                  Relatório de Impacto 2025
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="rod-tit">Realização</h2>
            <p>
              Ministério Público da Paraíba, Prefeitura Municipal de Santa Rita e Instituto Federal
              da Paraíba – Campus Santa Rita. Apoio: SEMMA e COOREMM.
            </p>
          </div>
        </div>
        <p className="rod-base">
          <span>Projeto Asa Verde, Santa Rita – PB</span>
          <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

/* ───────────────────────── Página ───────────────────────── */

export default function Site({ navigate }) {
  const onFormacao = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    navigate("/formacao");
  };

  return (
    <div className="site">
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header onFormacao={onFormacao} />
      <main id="conteudo">
        <Hero />
        <Parceiros />
        <Projeto />
        <Numeros />
        <Evolucao />
        <ComoFunciona />
        <Eixos />
        <Infantil />
        <Territorio />
        <LinhaDoTempo />
        <Acompanhamento />
        <Vozes />
        <Galeria />
        <Imprensa />
        <Relatorios />
        <Acessos onFormacao={onFormacao} />
        <Ficha />
      </main>
      <Rodape onFormacao={onFormacao} />
    </div>
  );
}
