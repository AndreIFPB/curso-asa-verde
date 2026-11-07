import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import "./site.css";
import { Cabecalho, Inicio } from "./Portal.jsx";
import {
  LINKS,
  CAPITULOS,
  PARCEIROS,
  PAPEIS,
  NUMEROS,
  MATRIZ,
  EVOLUCAO,
  ETAPAS,
  EIXOS,
  INFANTIL,
  UNIDADES,
  RESULTADOS_UNIDADES,
  COLUNAS_RESULTADOS,
  MESES,
  VOZES,
  GALERIA,
  IMPRENSA,
  RELATORIOS,
  FICHA,
  ORIENTADORES,
} from "./data.js";
import { IconDownload, IconExternal, IconChart, IconClipboard, IconInstagram, IconCap, IconClose, IconPrev, IconNext } from "./icons.jsx";

const ext = { target: "_blank", rel: "noopener noreferrer" };
const fmt = (n) => n.toLocaleString("pt-BR");

/* ───────────────────────── utilidades ───────────────────────── */

function usePrefersReducedMotion() {
  const [r, setR] = useState(() => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const on = () => setR(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return r;
}

// Marca o elemento com a classe "in" na primeira vez que entra na tela.
const temIO = typeof window !== "undefined" && "IntersectionObserver" in window;

function useInView(margin = "0px 0px -12% 0px") {
  const ref = useRef(null);
  const [vis, setVis] = useState(!temIO);
  useEffect(() => {
    const el = ref.current;
    if (!el || !temIO) return;
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) {
          setVis(true);
          io.disconnect();
        }
      },
      { rootMargin: margin, threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin]);
  return [ref, vis];
}

function Contador({ valor, duracao = 1400 }) {
  const [ref, vis] = useInView("0px 0px -8% 0px");
  const reduz = usePrefersReducedMotion();
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!vis || reduz) return;
    let raf;
    const t0 = performance.now();
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duracao);
      const e = 1 - Math.pow(1 - p, 3);
      setV(Math.round(valor * e));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [vis, valor, duracao, reduz]);
  const mostrado = !vis ? 0 : reduz ? valor : v;
  return (
    <span ref={ref} className="num">
      {fmt(mostrado)}
    </span>
  );
}

function Img({ src, w, h, alt = "", className, eager, style }) {
  return (
    <img src={src} width={w} height={h} alt={alt} className={className} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : undefined} decoding="async" style={style} />
  );
}

function Foto({ f, className = "", eager }) {
  return (
    <figure className={`foto ${className}`}>
      <Img src={f.src} w={f.w} h={f.h} alt={f.alt} eager={eager} />
      {f.legenda && <figcaption>{f.legenda}</figcaption>}
    </figure>
  );
}

/* Cabeçalho de capítulo: linha corrida, título e numeral vazado na margem. */
function Abertura({ nome, titulo, lead, children, claro }) {
  const [ref, vis] = useInView();
  return (
    <header ref={ref} className={`ab${vis ? " in" : ""}${claro ? " ab--claro" : ""}`}>
      <p className="ab-run">
        <span>Capítulo {n}</span>
        <span>{nome}</span>
      </p>
      <h1 className="ab-tit">{titulo}</h1>
      {lead && <p className="ab-lead">{lead}</p>}
      {children}
      <span className="ab-num" aria-hidden="true">
        {n}
      </span>
    </header>
  );
}

/* ───────────────────────── topo e trilho ───────────────────────── */

function Realizacao() {
  return (
    <section className="real" aria-label="Instituições parceiras">
      <div className="wrap real-in">
        <div className="real-g">
          <h2>Realização</h2>
          <ul>
            {PARCEIROS.realizacao.map((p) => (
              <li key={p.nome}>
                <img src={p.logo} width={p.w} height={p.h} alt={p.nome} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
        <div className="real-g">
          <h2>Apoio</h2>
          <ul>
            {PARCEIROS.apoio.map((p) => (
              <li key={p.nome}>
                <img src={p.logo} width={p.w} height={p.h} alt={p.nome} loading="lazy" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 01 · O projeto ───────────────────────── */

function Projeto() {
  return (
    <section className="ch" id="projeto" aria-labelledby="projeto-tit">
      <div className="wrap">
        <Abertura nome="O projeto" titulo={<span id="projeto-tit">Escolas que se tornam núcleos vivos de educação ambiental</span>} />

        <div className="proj">
          <div className="prosa prosa--2col">
            <p className="prosa-abre">
              O Projeto Asa Verde é uma iniciativa de educação ambiental idealizada pelo Ministério Público da Paraíba, a partir da concepção da Promotora de Justiça Dra. Miriam Pereira Vasconcelos, e
              executada pelo Instituto Federal da Paraíba – Campus Santa Rita em parceria com a Prefeitura Municipal de Santa Rita.
            </p>
            <p>
              Seu propósito é transformar as escolas públicas do município em núcleos vivos de educação ambiental, nos quais crianças e adolescentes aprendem a compreender o território onde vivem, a
              cuidar dele e a agir como agentes de mudança em suas comunidades.
            </p>
            <p>
              Em 2026, segundo ano de execução, o projeto ampliou de forma expressiva o seu alcance. Às 10 escolas de ensino fundamental somaram-se 7 centros de educação infantil, levando a educação
              ambiental, pela primeira vez, a crianças de 4 a 6 anos. A equipe de multiplicadores também cresceu: 104 estudantes dos cursos técnicos integrados do IFPB atuaram entre abril e novembro,
              organizados em equipes de campo, de planejamento e de mídia.
            </p>
          </div>

          <Foto
            className="proj-foto"
            f={{ src: "/img/divisor-resultados.webp", w: 2000, h: 1125, alt: "Estudantes e estagiários reunidos diante do painel do Projeto Asa Verde", legenda: "Turma e equipe de estagiários diante do painel do projeto pintado na escola" }}
          />
        </div>

        <ol className="papeis">
          {PAPEIS.map((p, i) => (
            <li key={p.papel}>
              <span className="papeis-i">{String(i + 1).padStart(2, "0")}</span>
              <span className="papeis-papel">{p.papel}</span>
              <h3>{p.nome}</h3>
              <p>{p.texto}</p>
            </li>
          ))}
        </ol>

        <div className="metodo">
          <h3 className="sub">Como o Asa Verde funciona</h3>
          <ol className="etapas">
            {ETAPAS.map((e, i) => (
              <li key={e.titulo}>
                <span className="etapas-n" aria-hidden="true">
                  {i + 1}
                </span>
                <h4>{e.titulo}</h4>
                <p>{e.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 02 · Em números ───────────────────────── */

function Matriz() {
  const [ref, vis] = useInView("0px 0px -10% 0px");
  const colunas = 94;
  const linhas = 34;
  const cols = useMemo(() => {
    const seq = [];
    MATRIZ.forEach((c, i) => {
      for (let j = 0; j < c.n; j++) seq.push(i);
    });
    const out = [];
    for (let c = 0; c < colunas; c++) out.push(seq.slice(c * linhas, (c + 1) * linhas));
    return out;
  }, []);
  const passo = 9;
  const r = 3.1;
  const total = MATRIZ.reduce((s, c) => s + c.n, 0);

  return (
    <figure ref={ref} className={`mz${vis ? " in" : ""}`}>
      <figcaption className="mz-cab">
        <strong>Cada ponto é uma ação registrada em 2026.</strong> {fmt(total)} ações, lidas da esquerda para a direita, de cima para baixo. As ações presenciais estão preenchidas; as publicações digitais,
        vazadas.
      </figcaption>
      <svg className="mz-svg" viewBox={`0 0 ${colunas * passo} ${linhas * passo}`} role="img" aria-label={`Matriz de ${fmt(total)} pontos, um para cada ação registrada, agrupados por modalidade`}>
        {cols.map((col, ci) => (
          <g key={ci} style={{ "--d": `${ci * 11}ms` }}>
            {col.map((cat, ri) => {
              const c = MATRIZ[cat];
              return c.vazado ? (
                <circle key={ri} cx={ci * passo + passo / 2} cy={ri * passo + passo / 2} r={r - 0.5} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="0.9" />
              ) : (
                <circle key={ri} cx={ci * passo + passo / 2} cy={ri * passo + passo / 2} r={r} fill={c.cor} />
              );
            })}
          </g>
        ))}
      </svg>
      <ul className="mz-leg">
        {MATRIZ.map((c) => (
          <li key={c.k}>
            <span className={`mz-sw${c.vazado ? " mz-sw--vazado" : ""}`} style={c.vazado ? undefined : { background: c.cor }} aria-hidden="true" />
            <span className="mz-nome">{c.nome}</span>
            <span className="mz-n">{fmt(c.n)}</span>
          </li>
        ))}
      </ul>
    </figure>
  );
}

function Evolucao() {
  const [ref, vis] = useInView("0px 0px -10% 0px");
  return (
    <div ref={ref} className={`evo${vis ? " in" : ""}`}>
      <div className="evo-txt">
        <h3 className="sub sub--claro">Em relação a 2025</h3>
        <p>
          Em seu segundo ano, o Asa Verde ampliou a rede atendida, a equipe de multiplicadores e, sobretudo, a intensidade do trabalho pedagógico em sala de aula. As oficinas mais que triplicaram e as
          gincanas e campanhas quadruplicaram.
        </p>
        <ul className="evo-leg" aria-label="Legenda">
          <li>
            <i className="sw sw--a" />
            2025
          </li>
          <li>
            <i className="sw sw--b" />
            2026
          </li>
        </ul>
        <p className="nota nota--claro">Fontes: Relatório de Impacto 2025 (ações de junho a dezembro de 2025) e sistema de relatórios do Projeto Asa Verde 2026.</p>
      </div>
      <ol className="evo-lista">
        {EVOLUCAO.map((e, i) => {
          const pct = Math.round(((e.b - e.a) / e.a) * 100);
          return (
            <li key={e.indicador} style={{ "--i": i }} aria-label={`${e.indicador}: ${fmt(e.a)} em 2025 e ${fmt(e.b)} em 2026, aumento de ${pct}%`}>
              <span className="evo-ind">{e.indicador}</span>
              <span className="evo-bars" aria-hidden="true">
                <span className="evo-row">
                  <i className="evo-b evo-b--a" style={{ "--v": `${(e.a / e.b) * 100}%` }} />
                  <em>{fmt(e.a)}</em>
                </span>
                <span className="evo-row">
                  <i className="evo-b evo-b--b" style={{ "--v": "100%" }} />
                  <em>{fmt(e.b)}</em>
                </span>
              </span>
              <span className="evo-pct" aria-hidden="true">
                +{pct}%
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Numeros() {
  return (
    <section className="ch ch--noite" id="numeros" aria-labelledby="numeros-tit">
      <div className="wrap">
        <Abertura claro nome="Em números" titulo={<span id="numeros-tit">Um ano de educação ambiental em escala</span>} lead="Abril a novembro de 2026. Dados consolidados em 7 de novembro." />

        <div className="heroi">
          <p className="heroi-n">
            <Contador valor={41506} />
          </p>
          <p className="heroi-t">
            participações de estudantes e crianças nas atividades<sup>1</sup>
          </p>
        </div>

        <Matriz />

        <dl className="ledger">
          {NUMEROS.map((n) => (
            <div key={n.rotulo}>
              <dt>{n.rotulo}</dt>
              <dd>{n.valor}</dd>
            </div>
          ))}
        </dl>

        <p className="nota nota--claro nota--rodape">
          <sup>1</sup> Participações correspondem à soma dos participantes registrados em cada atividade; um mesmo estudante pode ter participado de várias ações ao longo do ciclo. Ações registradas incluem
          as publicações digitais.
        </p>

        <Evolucao />
      </div>
    </section>
  );
}

/* ───────────────────────── 03 · Eixos ───────────────────────── */

function Eixo({ e, idx }) {
  const [ref, vis] = useInView();
  const trio = e.fotos.length === 3;
  const maxRank = e.ranking ? e.ranking[0][1] : 0;
  return (
    <article ref={ref} className={`eixo${idx % 2 ? " eixo--inv" : ""}${vis ? " in" : ""}`} id={e.id} aria-labelledby={`${e.id}-tit`}>
      <div className="eixo-media">
        {trio ? (
          <div className="trio">
            {e.fotos.map((f) => (
              <Foto key={f.src} f={f} />
            ))}
          </div>
        ) : (
          <div className="dupla">
            <Foto className="dupla-a" f={e.fotos[0]} />
            <Foto className="dupla-b" f={e.fotos[1]} />
          </div>
        )}
      </div>

      <div className="eixo-txt">
        <p className="eixo-run">
          <span>Eixo {e.n}</span>
          <span>{e.nome}</span>
        </p>
        <h3 className="eixo-tit" id={`${e.id}-tit`}>
          <span className="eixo-valor">{e.valor}</span>
          <span className="eixo-frase">{e.titulo}</span>
        </h3>
        <div className="prosa">
          {e.texto.map((t) => (
            <p key={t.slice(0, 24)}>{t}</p>
          ))}
        </div>

        <dl className="minis">
          {e.numeros.map(([v, r]) => (
            <div key={r}>
              <dt>{r}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>

        {e.lista && (
          <div className="bloco">
            <h4 className="sub">{e.listaTitulo}</h4>
            <ul className="lista-fio">
              {e.lista.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        )}

        {e.ranking && (
          <div className="bloco">
            <h4 className="sub">Unidades que mais plantaram</h4>
            <ol className="rank">
              {e.ranking.map(([nome, v]) => (
                <li key={nome}>
                  <span className="rank-nome">{nome}</span>
                  <span className="rank-barra" aria-hidden="true">
                    <i style={{ "--v": `${(v / maxRank) * 100}%` }} />
                  </span>
                  <span className="rank-v">
                    {v} <small>mudas</small>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {e.acoes && (
          <div className="bloco">
            <h4 className="sub">{e.listaTitulo}</h4>
            <ul className="acoes">
              {e.acoes.map(([acao, onde]) => (
                <li key={acao}>
                  <span>{acao}</span>
                  <span>{onde}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {e.destaque && (
          <aside className="caixa">
            <h4>{e.destaque.titulo}</h4>
            <p>{e.destaque.texto}</p>
          </aside>
        )}

        {e.id === "comunicacao" && (
          <a className="link" href={LINKS.instagram} {...ext}>
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
    <section className="ch ch--eixos" id="eixos" aria-labelledby="eixos-tit">
      <div className="wrap">
        <Abertura
          n="03"
          nome="Eixos de atuação"
          titulo={<span id="eixos-tit">Da sala de aula ao bairro, em quatro frentes</span>}
          lead="As ações do ciclo 2026 se organizaram em educação ambiental, arborização, mobilização e comunicação."
        />
        {EIXOS.map((e, i) => (
          <Eixo key={e.id} e={e} idx={i} />
        ))}
      </div>

      <div className="infantil" id="infantil">
        <div className="wrap infantil-in">
          <Foto className="infantil-foto" f={{ src: "/img/inf-abraco.webp", w: 1050, h: 1400, alt: "Duas crianças se abraçando durante atividade em centro de educação infantil", legenda: "Centro de educação infantil, segundo semestre de 2026" }} />
          <div className="infantil-txt">
            <p className="eixo-run eixo-run--claro">
              <span>Novidade de 2026</span>
              <span>Educação infantil</span>
            </p>
            <h3 className="infantil-tit">A educação ambiental chega à primeira infância</h3>
            <div className="prosa prosa--claro">
              <p>Em julho, o Asa Verde passou a atender sete unidades de educação infantil, com crianças de 4 a 6 anos.</p>
              <p>
                A mudança exigiu uma nova abordagem: as equipes receberam formação específica com profissionais da educação infantil do município e passaram a trabalhar com histórias, música,
                brincadeiras, pintura, experimentos simples e plantio. A resposta das crianças foi entusiasmada. Elas levaram para casa mudas, histórias e hábitos, envolvendo as famílias: uma aluna
                passou a jogar o lixo na lixeira de casa, outra prometeu conscientizar um familiar fumante, e uma criança pediu ajuda aos estagiários ao ver uma queimada perto da escola.
              </p>
            </div>
            <dl className="minis minis--claro minis--5">
              {INFANTIL.map(([v, r]) => (
                <div key={r}>
                  <dt>{r}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 04 · Território ───────────────────────── */

function Territorio() {
  const [ativo, setAtivo] = useState(null);
  const [ordem, setOrdem] = useState({ k: 8, dir: -1 });
  const [aberta, setAberta] = useState(false);

  const linhas = useMemo(() => {
    const l = [...RESULTADOS_UNIDADES];
    if (ordem.k === 1) l.sort((a, b) => a[1].localeCompare(b[1], "pt-BR") * ordem.dir);
    else l.sort((a, b) => (a[ordem.k] - b[ordem.k]) * ordem.dir);
    return l;
  }, [ordem]);

  const ordenar = (k) => setOrdem((o) => (o.k === k ? { k, dir: -o.dir } : { k, dir: k === 1 ? 1 : -1 }));

  const grupo = (titulo, tipo) => (
    <div className="unid-g">
      <h3 className="sub">{titulo}</h3>
      <ol className="unid">
        {UNIDADES.filter((u) => u.tipo === tipo).map((u) => (
          <li key={u.n} className={ativo === u.n ? "ativo" : undefined} onMouseEnter={() => setAtivo(u.n)} onMouseLeave={() => setAtivo(null)} onFocus={() => setAtivo(u.n)} onBlur={() => setAtivo(null)} tabIndex={0}>
            <span className={`pin pin--${u.tipo}`}>{u.n}</span>
            <span className="unid-nome">{u.nome}</span>
            <span className="unid-bairro">{u.bairro}</span>
          </li>
        ))}
      </ol>
    </div>
  );

  return (
    <section className="ch" id="territorio" aria-labelledby="terr-tit">
      <div className="wrap">
        <Abertura nome="Território" titulo={<span id="terr-tit">17 unidades em 8 bairros e localidades</span>} lead="Presença na zona urbana de Santa Rita e em Lerolândia, cerca de 18 km ao norte do centro." />

        <div className="terr">
          <figure className="mapa">
            <div className="mapa-img">
              <Img src="/img/mapa.webp" w={1364} h={1040} alt="Mapa de Santa Rita com a localização aproximada das 17 unidades atendidas, numeradas de 1 a 17" />
              {UNIDADES.map((u) => (
                <button
                  key={u.n}
                  type="button"
                  className={`mapa-pin${ativo === u.n ? " ativo" : ""}`}
                  style={{ "--x": `${u.x}%`, "--y": `${u.y}%` }}
                  onClick={() => setAtivo(u.n)}
                  onMouseEnter={() => setAtivo(u.n)}
                  onMouseLeave={() => setAtivo(null)}
                  onFocus={() => setAtivo(u.n)}
                  onBlur={() => setAtivo(null)}
                  aria-label={`${u.n}: ${u.nome}, ${u.bairro}`}
                >
                  <span className="mapa-tip">
                    <strong>{u.nome}</strong>
                    <span>{u.bairro}</span>
                  </span>
                </button>
              ))}
            </div>
            <figcaption>Localização aproximada das unidades. Base cartográfica © OpenStreetMap contributors. Selecione um número para identificar a unidade.</figcaption>
          </figure>

          <div className="unid-col">
            {grupo("Escolas de ensino fundamental", "escola")}
            {grupo("Centros de educação infantil", "ciei")}
            <p className="nota">
              A EMEIF e EJA Padre João Félix Medeiros integrou a fase inicial do projeto (maio e junho). A partir de agosto, a equipe passou a atuar na EMEIF e EJA Dr. Flávio Maroja Filho.
            </p>
          </div>
        </div>

        <div className="tab-wrap">
          <button type="button" className="tab-toggle" aria-expanded={aberta} aria-controls="tabela-unidades" onClick={() => setAberta((v) => !v)}>
            <span>{aberta ? "Ocultar" : "Ver"} os resultados por unidade</span>
            <span className="tab-toggle-n">{RESULTADOS_UNIDADES.length} linhas</span>
          </button>
          <div id="tabela-unidades" className={`tab-scroll${aberta ? "" : " oculta"}`} hidden={!aberta}>
            <table className="tabela">
              <caption>Resultados do ciclo 2026 por unidade. Clique no título de uma coluna para ordenar.</caption>
              <thead>
                <tr>
                  <th scope="col">
                    <button type="button" onClick={() => ordenar(1)} aria-sort={ordem.k === 1 ? (ordem.dir > 0 ? "ascending" : "descending") : "none"}>
                      Unidade
                    </button>
                  </th>
                  {COLUNAS_RESULTADOS.map((c) => (
                    <th scope="col" key={c.k} className="num-col">
                      <button type="button" onClick={() => ordenar(c.k)} aria-sort={ordem.k === c.k ? (ordem.dir > 0 ? "ascending" : "descending") : "none"} className={ordem.k === c.k ? "ativo" : undefined}>
                        {c.nome}
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {linhas.map((l) => (
                  <tr key={l[1]} className={l[0] === "—" ? "tab-nota" : undefined}>
                    <th scope="row">
                      <span className="tab-n">{l[0]}</span>
                      {l[1]}
                    </th>
                    {COLUNAS_RESULTADOS.map((c) => (
                      <td key={c.k} className={`num-col${ordem.k === c.k ? " ativo" : ""}`}>
                        {fmt(l[c.k])}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row">Total do projeto</th>
                  {COLUNAS_RESULTADOS.map((c) => (
                    <td key={c.k} className="num-col">
                      {fmt(RESULTADOS_UNIDADES.reduce((s, l) => s + l[c.k], 0))}
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
            <p className="nota">
              Dados do sistema de relatórios do Projeto Asa Verde, consolidados em 07/11/2026 e complementados pela coordenação com base nos registros fotográficos das equipes. Unidades 11 a 17 foram
              atendidas a partir de julho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 05 · Linha do tempo ───────────────────────── */

function Tempo() {
  return (
    <section className="ch" id="tempo" aria-labelledby="tempo-tit">
      <div className="wrap">
        <Abertura nome="Linha do tempo" titulo={<span id="tempo-tit">Os marcos do ciclo 2026</span>} lead="De abril a novembro: da abertura oficial às despedidas nas unidades." />
        <ol className="meses">
          {MESES.map((m) => (
            <li key={m.mes} className="mes">
              <span className="mes-rot" aria-hidden="true">
                {m.mes}
              </span>
              <span className="visually-hidden">{m.nome}</span>
              <ul>
                {m.eventos.map(([dia, tit, txt]) => (
                  <li key={tit}>
                    <span className="ev-dia">{dia}</span>
                    <div>
                      <h3>{tit}</h3>
                      <p>{txt}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="acomp">
          <div className="acomp-fotos">
            <Foto f={{ src: "/img/acp-carlosarnobio.webp", w: 1400, h: 1050, alt: "Visita da Promotora de Justiça à EMEF Prof. Carlos Arnóbio Maroja Di Pace", legenda: "EMEF Prof. Carlos Arnóbio Maroja Di Pace" }} />
            <Foto f={{ src: "/img/acp-odilon.webp", w: 1400, h: 1050, alt: "Visita da Promotora de Justiça à EMEF Odilon Ribeiro Coutinho", legenda: "EMEF Odilon Ribeiro Coutinho" }} />
          </div>
          <div className="acomp-txt">
            <h3 className="sub">Acompanhamento institucional</h3>
            <h4 className="acomp-tit">Um projeto acompanhado de perto</h4>
            <div className="prosa">
              <p>
                Entre julho e novembro, a Promotora de Justiça Dra. Miriam Pereira Vasconcelos, idealizadora do projeto, visitou as unidades atendidas para acompanhar as atividades, dialogar com
                gestões, professores, estagiários e estudantes e conhecer de perto os trabalhos produzidos pelas turmas. Nas visitas, esteve acompanhada de integrantes da coordenação do projeto no
                IFPB e na SEMMA.
              </p>
            </div>
            <div className="transp">
              <p>
                <strong>Transparência.</strong> Cada ação é registrada no sistema de relatórios do projeto e consolidada no Painel de Monitoramento, em Power BI, de acesso público.
              </p>
              <a className="btn btn--tinta" href={LINKS.powerbi2026} {...ext}>
                <IconChart />
                Abrir o painel de monitoramento
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 06 · Vozes ───────────────────────── */

function Vozes() {
  const [i, setI] = useState(0);
  const [pausa, setPausa] = useState(false);
  const reduz = usePrefersReducedMotion();
  const [ref, vis] = useInView("0px 0px -20% 0px");

  useEffect(() => {
    if (reduz || pausa || !vis) return;
    const t = setInterval(() => setI((v) => (v + 1) % VOZES.length), 9000);
    return () => clearInterval(t);
  }, [reduz, pausa, vis]);

  const v = VOZES[i];
  return (
    <section className="ch ch--noite" id="vozes" aria-labelledby="vozes-tit">
      <div className="wrap">
        <Abertura claro nome="Vozes" titulo={<span id="vozes-tit">O que ficou nas escolas</span>} lead="Relatos registrados pelas equipes de estagiários nos relatórios mensais." />

        <div ref={ref} className="deck" onMouseEnter={() => setPausa(true)} onMouseLeave={() => setPausa(false)} onFocus={() => setPausa(true)} onBlur={() => setPausa(false)}>
          <figure className="deck-fig" aria-live="polite">
            <blockquote key={i} className="deck-q">
              <p>{v.texto}</p>
            </blockquote>
            <figcaption key={`c${i}`} className="deck-c">
              <span>{v.autor}</span>
              <span>{v.unidade}</span>
            </figcaption>
          </figure>
          <div className="deck-nav">
            <button type="button" className="deck-btn" onClick={() => setI((i - 1 + VOZES.length) % VOZES.length)} aria-label="Relato anterior">
              <IconPrev />
            </button>
            <ol className="deck-dots" aria-label="Escolher relato">
              {VOZES.map((x, k) => (
                <li key={x.unidade}>
                  <button type="button" aria-label={`Relato ${k + 1}: ${x.unidade}`} aria-current={k === i ? "true" : undefined} onClick={() => setI(k)} />
                </li>
              ))}
            </ol>
            <button type="button" className="deck-btn" onClick={() => setI((i + 1) % VOZES.length)} aria-label="Próximo relato">
              <IconNext />
            </button>
            <span className="deck-cont" aria-hidden="true">
              {String(i + 1).padStart(2, "0")} / {String(VOZES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 07 · Galeria ───────────────────────── */

function Galeria() {
  const [atual, setAtual] = useState(-1);
  const [prog, setProg] = useState(0);
  const faixa = useRef(null);
  const dlg = useRef(null);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (atual >= 0 && !d.open) d.showModal();
    if (atual < 0 && d.open) d.close();
  }, [atual]);

  const onScroll = useCallback(() => {
    const el = faixa.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProg(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  const rolar = (dir) => {
    const el = faixa.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const mover = (passo) => setAtual((i) => (i + passo + GALERIA.length) % GALERIA.length);
  const foto = atual >= 0 ? GALERIA[atual] : null;

  return (
    <section className="ch ch--galeria" id="galeria" aria-labelledby="gal-tit">
      <div className="wrap">
        <Abertura nome="Galeria" titulo={<span id="gal-tit">Momentos do ciclo 2026</span>} lead="Registros das equipes de estagiários e da equipe de Mídia. Deslize para o lado ou toque em uma foto para ampliá-la." />
      </div>

      <div className="faixa-wrap">
        <ul className="faixa" ref={faixa} onScroll={onScroll} tabIndex={0} aria-label="Fotos do ciclo 2026">
          {GALERIA.map((f, i) => (
            <li key={f.src} style={{ "--ar": `${f.w} / ${f.h}` }}>
              <button type="button" onClick={() => setAtual(i)} aria-label={`Ampliar foto: ${f.alt}`}>
                <Img src={f.src} w={f.w} h={f.h} alt="" />
              </button>
              <span className="faixa-leg">
                <span className="faixa-i">{String(i + 1).padStart(2, "0")}</span>
                {f.legenda}
              </span>
            </li>
          ))}
        </ul>
        <div className="wrap faixa-ctl">
          <span className="faixa-prog" aria-hidden="true">
            <i style={{ "--p": prog }} />
          </span>
          <button type="button" className="deck-btn deck-btn--tinta" onClick={() => rolar(-1)} aria-label="Fotos anteriores">
            <IconPrev />
          </button>
          <button type="button" className="deck-btn deck-btn--tinta" onClick={() => rolar(1)} aria-label="Próximas fotos">
            <IconNext />
          </button>
        </div>
      </div>

      <dialog ref={dlg} className="lightbox" aria-label="Foto ampliada" onClose={() => setAtual(-1)} onKeyDown={(e) => (e.key === "ArrowRight" ? mover(1) : e.key === "ArrowLeft" ? mover(-1) : null)} onClick={(e) => e.target === dlg.current && setAtual(-1)}>
        {foto && (
          <figure>
            <img src={foto.src} width={foto.w} height={foto.h} alt={foto.alt} />
            <figcaption>
              <span>{foto.legenda}</span>
              <span className="lb-cont">
                {atual + 1} / {GALERIA.length}
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

/* ───────────────────────── 08 · Imprensa ───────────────────────── */

function Selo() {
  return (
    <div className="selo" role="img" aria-label="Prêmio Sebrae Cidade Empreendedora, prata, categoria Sustentabilidade e Meio Ambiente">
      <svg viewBox="0 0 200 200" aria-hidden="true">
        <defs>
          <path id="selo-circ" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
        </defs>
        <circle cx="100" cy="100" r="98" className="selo-anel" />
        <circle cx="100" cy="100" r="52" className="selo-anel" />
        <text className="selo-txt">
          <textPath href="#selo-circ" startOffset="0" textLength="464" lengthAdjust="spacing">
            Prêmio Sebrae · Cidade Empreendedora · Prata · Sustentabilidade e Meio Ambiente ·
          </textPath>
        </text>
        <text x="100" y="94" textAnchor="middle" className="selo-c1">
          Santa Rita
        </text>
        <text x="100" y="118" textAnchor="middle" className="selo-c2">
          2026
        </text>
      </svg>
    </div>
  );
}

function Imprensa() {
  return (
    <section className="ch" id="imprensa" aria-labelledby="imp-tit">
      <div className="wrap">
        <Abertura nome="Imprensa" titulo={<span id="imp-tit">O Asa Verde na imprensa</span>} lead="Notícias publicadas sobre o projeto por parceiros e veículos de comunicação." />

        <div className="imp">
          <ol className="noticias">
            {IMPRENSA.map((n) => (
              <li key={n.url}>
                <a href={n.url} {...ext}>
                  <span className="not-meta">
                    <span className="not-veic">{n.veiculo}</span>
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
          </ol>

          <aside className="premio">
            <Selo />
            <h3>Reconhecimento nacional</h3>
            <p>
              Por meio do Projeto Asa Verde, Santa Rita recebeu o prêmio prata na categoria Sustentabilidade e Meio Ambiente do programa Cidade Empreendedora, do Sebrae, edição 2025/2026.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── 09 · Relatórios ───────────────────────── */

function Relatorios({ onFormacao }) {
  const acessos = [
    { icon: <IconChart />, titulo: "Painel de monitoramento", texto: "Indicadores do ciclo 2026 em Power BI, atualizados a partir do sistema de relatórios.", href: LINKS.powerbi2026, ext: true },
    { icon: <IconInstagram />, titulo: "Instagram @projetoasaverde", texto: "Fotos, vídeos e a rotina das ações nas escolas e nos centros de educação infantil.", href: LINKS.instagram, ext: true },
    { icon: <IconClipboard />, titulo: "Sistema de relatórios", texto: "Registro das ações pelas equipes, com data, turma, participantes e evidências. Acesso restrito às equipes.", href: LINKS.sistema, ext: true },
    { icon: <IconCap />, titulo: "Formação dos multiplicadores", texto: "Curso online com quatro módulos, avaliações e certificado. Acesso com o código fornecido pela coordenação.", href: "/formacao", ext: false },
  ];

  return (
    <section className="ch ch--rel" id="relatorios" aria-labelledby="rel-tit">
      <div className="wrap">
        <Abertura nome="Relatórios" titulo={<span id="rel-tit">Relatórios de impacto</span>} lead="Os relatórios prestam contas aos entes parceiros e à sociedade sobre as ações executadas em cada ciclo. Baixe a versão completa ou consulte os dados no painel público." />

        <div className="livros">
          {RELATORIOS.map((r, i) => (
            <article className={`livro${i === 0 ? " livro--atual" : ""}`} key={r.ano} aria-labelledby={`rel-${r.ano}`}>
              <a className="livro-obj" href={r.pdf} download={r.arquivo} aria-label={`Baixar o ${r.titulo} (PDF, ${r.tamanho})`}>
                <span className="livro-capa">
                  <Img src={r.capa} w={720} h={1018} alt="" />
                </span>
              </a>
              <div className="livro-info">
                <p className="livro-ano">{r.ano}</p>
                <h3 id={`rel-${r.ano}`}>{r.titulo}</h3>
                <p className="livro-meta">
                  {r.periodo} · {r.paginas}
                </p>
                <p className="livro-desc">{r.descricao}</p>
                <dl className="minis minis--rel">
                  {r.numeros.map(([v, t]) => (
                    <div key={t}>
                      <dt>{t}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="livro-acoes">
                  <a className="btn btn--tinta" href={r.pdf} download={r.arquivo}>
                    <IconDownload />
                    Baixar o PDF
                    <span className="btn-meta">{r.tamanho}</span>
                  </a>
                  <a className="btn btn--fio-tinta" href={r.painel} {...ext}>
                    <IconChart />
                    Painel de dados {r.ano}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="sub sub--acessos">Acompanhe o projeto</h3>
        <ul className="acessos">
          {acessos.map((a) => (
            <li key={a.titulo}>
              <a href={a.href} {...(a.ext ? ext : {})} onClick={a.ext ? undefined : onFormacao}>
                <span className="ac-icon">{a.icon}</span>
                <span className="ac-txt">
                  <span className="ac-tit">
                    {a.titulo}
                    {a.ext && <IconExternal width="15" height="15" className="ac-ext" />}
                  </span>
                  <span className="ac-desc">{a.texto}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ───────────────────────── Quem faz ───────────────────────── */

function Equipe() {
  return (
    <section className="ch" id="equipe" aria-labelledby="eq-tit">
      <div className="wrap">
        <Foto className="eq-foto" f={{ src: "/img/equipe.webp", w: 2200, h: 1237, alt: "Estagiários, professores e coordenação do Projeto Asa Verde reunidos", legenda: "Estagiários, professores orientadores e coordenação do ciclo 2026" }} />
        <div className="eq-cab">
          <h1 className="eq-tit" id="eq-tit">
            Quem faz o Asa Verde
          </h1>
          <div className="prosa">
            <p>
              104 estudantes dos cursos técnicos integrados de Meio Ambiente e Informática do IFPB – Campus Santa Rita atuaram no ciclo 2026: 84 nas equipes das unidades e 20 nas equipes de Planejamento
              e de Mídia, com a supervisão de professoras e professores das 17 unidades.
            </p>
          </div>
        </div>
        <div className="ficha">
          {FICHA.map((f) => (
            <div key={f.instituicao}>
              <h3 className="sub">{f.instituicao}</h3>
              <ul className="pessoas">
                {f.pessoas.map(([nome, cargo]) => (
                  <li key={nome}>
                    <span>{nome}</span>
                    <span>{cargo}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="sub">Professores orientadores (IFPB)</h3>
            <ul className="pessoas pessoas--simples">
              {ORIENTADORES.map((n) => (
                <li key={n}>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Rodapé ───────────────────────── */

function Rodape({ onFormacao }) {
  return (
    <footer className="rod">
      <div className="wrap">
        <div className="rod-cols">
          <div className="rod-marca">
            <img src="/logos/asaverde_white.webp" width="692" height="400" alt="Projeto Asa Verde" loading="lazy" />
            <p>Santa Rita – PB · Educação ambiental nas escolas públicas desde 2025.</p>
          </div>
          <div>
            <h2 className="rod-tit">Explore o projeto</h2>
            <ol>
              <li><a href="#inicio">Início</a></li>
              {CAPITULOS.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`}>
                    {c.nome}
                  </a>
                </li>
              ))}
            </ol>
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
              <li>
                <a href={LINKS.relatorio2026} download={LINKS.arquivo2026}>
                  Relatório de Impacto 2026
                </a>
              </li>
              <li>
                <a href={LINKS.relatorio2025} download={LINKS.arquivo2025}>
                  Relatório de Impacto 2025
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="rod-tit">Realização</h2>
            <p><a href="#equipe">Conheça a equipe</a></p>
            <p>Ministério Público da Paraíba, Prefeitura Municipal de Santa Rita e Instituto Federal da Paraíba – Campus Santa Rita.</p>
            <p>Apoio: Secretaria Municipal de Meio Ambiente (SEMMA) e COOREMM.</p>
          </div>
        </div>
        <p className="rod-base">
          <span>Projeto Asa Verde · Santa Rita – PB</span>
          <span>Fotografias: equipes de estagiários e equipe de Mídia do projeto</span>
          <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}

/* ───────────────────────── Página ───────────────────────── */

const chapters = { projeto: Projeto, numeros: Numeros, eixos: Eixos, territorio: Territorio,
  tempo: Tempo, vozes: Vozes, galeria: Galeria, imprensa: Imprensa, relatorios: Relatorios, equipe: Equipe };
const fieldSections = new Set([...EIXOS.map(e => e.id), "infantil"]);

function subscribeHash(update) {
  window.addEventListener("hashchange", update);
  return () => window.removeEventListener("hashchange", update);
}

function readHash() {
  return window.location.hash.slice(1) || "inicio";
}

export default function Site({ navigate }) {
  const hash = useSyncExternalStore(subscribeHash, readHash);
  const page = fieldSections.has(hash) ? "eixos" : hash;
  const Chapter = Object.hasOwn(chapters, page) ? chapters[page] : null;
  const title = CAPITULOS.find(c => c.id === page)?.nome || "Quem faz o Asa Verde";
  const content = useRef(null);

  useLayoutEffect(() => {
    const target = (hash === "impacto" || fieldSections.has(hash)) && document.getElementById(hash);
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    else window.scrollTo({ top: 0, behavior: "instant" });
    if (window.location.hash) content.current?.focus({ preventScroll: true });
  }, [hash]);

  const onFormacao = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    navigate("/formacao");
  };

  return (
    <div className="pg" id="inicio">
      <a className="pular" href="#conteudo" onClick={(event) => {
        event.preventDefault();
        content.current?.focus();
      }}>Pular para o conteúdo</a>
      <Cabecalho key={hash} onFormacao={onFormacao} selected={page} />
      <main id="conteudo" ref={content} tabIndex={-1}>
        {Chapter ? (
          <div className="chapter-view">
            <nav className="shell breadcrumb" aria-label="Caminho da página"><a href="#inicio">Início</a><IconNext /><span aria-current="page">{title}</span></nav>
            <Chapter key={page} onFormacao={onFormacao} />
          </div>
        ) : <Inicio />}
        <Realizacao />
      </main>
      <Rodape onFormacao={onFormacao} />
    </div>
  );
}
