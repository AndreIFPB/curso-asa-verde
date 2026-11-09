// Renderiza os blocos de conteúdo de uma lição.
//
// Tipos aceitos (campo "t"):
//   lead, p, h            texto de abertura, parágrafo e subtítulo
//   ideia                 destaque com ideia-chave (titulo, texto)
//   passos                etapas numeradas (titulo?, itens: [titulo, texto])
//   cartoes               grade de cartões (titulo?, colunas, itens: {titulo, rotulo?, texto})
//   comparar              dois cartões lado a lado (itens: {titulo, texto})
//   lista                 lista de verificação (titulo?, itens, numerada?, colunas?)
//   evitar                erros a evitar (titulo, itens)
//   relato                citação real (texto, autor)
//   caso                  caso real de uma unidade (unidade, titulo, texto)
//   foto, fotos           imagens com legenda
//   diagrama              diagrama ilustrado (nome)
//   numeros               números em destaque (titulo?, itens: [valor, rotulo])
//   tabela                tabela (titulo?, colunas, linhas)
//   abas                  conteúdo em abas (itens: {rotulo, detalhe?, blocos})
//   linha                 linha do tempo (itens: [quando, titulo, texto])
//   lei                   trecho de lei (titulo, texto, fonte)
//   check                 pergunta rápida com retorno imediato
//   cenario               situação com escolhas e retorno para cada opção
//   mapa                  mapa interativo das unidades
//   metas                 metas do ciclo definidas em config.js
//   link                  chamada para um recurso externo (texto, rotulo, href: chave de CONFIG)
import { useId, useState } from "react";
import Diagrama from "./Diagramas.jsx";
import { CONFIG, UNIDADES } from "./index.js";
import { Alerta, Balanca, Check, Externo, Fechar, Lampada, Pino } from "./icones.jsx";

// Converte **negrito** em <strong>.
export function Rico({ texto }) {
  const partes = String(texto).split(/(\*\*[^*]+\*\*)/g);
  return partes.map((p, i) => (p.startsWith("**") && p.endsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : p));
}

// Separa a unidade do número ("2.322,5 kg") para exibi-la menor.
function Valor({ v }) {
  const m = String(v).match(/^([\d.,]+)\s+(\D.*)$/);
  if (!m) return v;
  return (
    <>
      {m[1]}
      <small> {m[2]}</small>
    </>
  );
}

function Img({ src, w, h, alt }) {
  return <img src={src} width={w} height={h} alt={alt || ""} loading="lazy" decoding="async" />;
}

function Pergunta({ b }) {
  const [escolha, setEscolha] = useState(null);
  const id = useId();
  const respondeu = escolha !== null;
  const acertou = escolha === b.certa;
  return (
    <section className="bl-check" aria-labelledby={`${id}-q`}>
      <p className="bl-etiqueta">Verifique o que aprendeu</p>
      <h3 id={`${id}-q`}>{b.pergunta}</h3>
      <div className="bl-opcoes" role="group" aria-label="Opções de resposta">
        {b.opcoes.map((o, i) => {
          const estado = !respondeu ? "" : i === b.certa ? " certa" : i === escolha ? " errada" : " apagada";
          return (
            <button type="button" key={o} className={`bl-opcao${estado}`} onClick={() => setEscolha(i)} disabled={respondeu && acertou} aria-pressed={escolha === i}>
              <span className="bl-letra" aria-hidden="true">
                {String.fromCharCode(65 + i)}
              </span>
              <span>{o}</span>
              {respondeu && i === b.certa && <Check className="bl-opcao-ic" />}
            </button>
          );
        })}
      </div>
      <div aria-live="polite">
        {respondeu && (
          <p className={`bl-retorno${acertou ? " ok" : ""}`}>
            <strong>{acertou ? "Isso mesmo." : "Ainda não."}</strong> {acertou ? b.explica : "Releia o trecho acima e tente outra opção."}
          </p>
        )}
      </div>
    </section>
  );
}

function Cenario({ b }) {
  const [escolha, setEscolha] = useState(null);
  const id = useId();
  const op = escolha !== null ? b.opcoes[escolha] : null;
  return (
    <section className="bl-cenario" aria-labelledby={`${id}-s`}>
      <p className="bl-etiqueta">O que você faria?</p>
      <p className="bl-cenario-sit" id={`${id}-s`}>
        {b.situacao}
      </p>
      <div className="bl-opcoes" role="group" aria-label="Escolha uma atitude">
        {b.opcoes.map((o, i) => (
          <button
            type="button"
            key={o.texto}
            className={`bl-opcao${escolha === i ? (o.boa ? " certa" : " errada") : ""}`}
            onClick={() => setEscolha(i)}
            aria-pressed={escolha === i}
          >
            <span className="bl-letra" aria-hidden="true">
              {String.fromCharCode(65 + i)}
            </span>
            <span>{o.texto}</span>
          </button>
        ))}
      </div>
      <div aria-live="polite">
        {op && (
          <p className={`bl-retorno${op.boa ? " ok" : ""}`}>
            <strong>{op.boa ? "Boa escolha." : "Pense de novo."}</strong> {op.retorno}
          </p>
        )}
      </div>
    </section>
  );
}

function Abas({ b }) {
  const [ativa, setAtiva] = useState(0);
  const id = useId();
  const mover = (e) => {
    if (e.key === "ArrowRight") setAtiva((a) => (a + 1) % b.itens.length);
    if (e.key === "ArrowLeft") setAtiva((a) => (a - 1 + b.itens.length) % b.itens.length);
  };
  return (
    <section className="bl-abas">
      <div className="bl-abas-lista" role="tablist" aria-label="Faixas etárias" onKeyDown={mover}>
        {b.itens.map((it, i) => (
          <button
            type="button"
            role="tab"
            key={it.rotulo}
            id={`${id}-t${i}`}
            aria-selected={ativa === i}
            aria-controls={`${id}-p${i}`}
            tabIndex={ativa === i ? 0 : -1}
            onClick={() => setAtiva(i)}
          >
            <strong>{it.rotulo}</strong>
            {it.detalhe && <span>{it.detalhe}</span>}
          </button>
        ))}
      </div>
      {b.itens.map((it, i) => (
        <div key={it.rotulo} role="tabpanel" id={`${id}-p${i}`} aria-labelledby={`${id}-t${i}`} hidden={ativa !== i} className="bl-abas-painel">
          <Blocos blocos={it.blocos} />
        </div>
      ))}
    </section>
  );
}

function Mapa() {
  const [ativo, setAtivo] = useState(null);
  const u = UNIDADES.find((x) => x.n === ativo);
  return (
    <section className="bl-mapa">
      <div className="bl-mapa-img">
        <img src="/img/mapa.webp" width="1364" height="1040" alt="Mapa de Santa Rita com a localização aproximada das 17 unidades atendidas" loading="lazy" />
        {UNIDADES.map((x) => (
          <button
            type="button"
            key={x.n}
            className={`bl-pin bl-pin--${x.tipo}${ativo === x.n ? " ativo" : ""}`}
            style={{ left: `${x.x}%`, top: `${x.y}%` }}
            onClick={() => setAtivo(ativo === x.n ? null : x.n)}
            onMouseEnter={() => setAtivo(x.n)}
            aria-label={`${x.n}: ${x.nome}, ${x.bairro}`}
            aria-pressed={ativo === x.n}
          >
            {Number(x.n)}
          </button>
        ))}
      </div>
      <div className="bl-mapa-info" aria-live="polite">
        {u ? (
          <>
            <span className={`bl-mapa-n bl-mapa-n--${u.tipo}`}>{u.n}</span>
            <div>
              <strong>{u.nome}</strong>
              <span>
                {u.tipo === "ciei" ? "Educação infantil" : "Ensino fundamental"}, bairro {u.bairro}
              </span>
            </div>
            <button type="button" className="bl-mapa-x" onClick={() => setAtivo(null)} aria-label="Limpar seleção">
              <Fechar width="16" height="16" />
            </button>
          </>
        ) : (
          <p>
            <Pino width="18" height="18" /> Toque em um número para ver a unidade. Verde-escuro: escolas de ensino fundamental. Verde-claro: centros de educação infantil.
          </p>
        )}
      </div>
    </section>
  );
}

function Bloco({ b }) {
  switch (b.t) {
    case "lead":
      return (
        <p className="bl-lead">
          <Rico texto={b.texto} />
        </p>
      );
    case "p":
      return (
        <p className="bl-p">
          <Rico texto={b.texto} />
        </p>
      );
    case "h":
      return <h2 className="bl-h">{b.texto}</h2>;
    case "ideia":
      return (
        <aside className="bl-ideia">
          <Lampada className="bl-ideia-ic" />
          <div>
            {b.titulo && <p className="bl-ideia-tit">{b.titulo}</p>}
            <p>
              <Rico texto={b.texto} />
            </p>
          </div>
        </aside>
      );
    case "passos":
      return (
        <section className="bl-passos">
          {b.titulo && <h3 className="bl-tit">{b.titulo}</h3>}
          <ol>
            {b.itens.map(([t, d], i) => (
              <li key={t}>
                <span className="bl-passos-n" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <strong>{t}</strong>
                  <p>
                    <Rico texto={d} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );
    case "cartoes":
      return (
        <section className="bl-cartoes-wrap">
          {b.titulo && <h3 className="bl-tit">{b.titulo}</h3>}
          <ul className={`bl-cartoes bl-cartoes--${b.colunas || 2}`}>
            {b.itens.map((c) => (
              <li key={c.titulo}>
                {c.rotulo && <span className="bl-rotulo">{c.rotulo}</span>}
                <strong>{c.titulo}</strong>
                <p>
                  <Rico texto={c.texto} />
                </p>
              </li>
            ))}
          </ul>
        </section>
      );
    case "comparar":
      return (
        <div className="bl-comparar">
          {b.itens.map((c, i) => (
            <div key={c.titulo} className={i === 0 ? "a" : "b"}>
              <strong>{c.titulo}</strong>
              <p>{c.texto}</p>
            </div>
          ))}
        </div>
      );
    case "lista":
      return (
        <section className="bl-lista">
          {b.titulo && <h3 className="bl-tit">{b.titulo}</h3>}
          {b.numerada ? (
            <ol className="bl-lista-num">
              {b.itens.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          ) : (
            <ul className={b.colunas ? "bl-lista-col" : undefined}>
              {b.itens.map((t) => (
                <li key={t}>
                  <Check className="bl-lista-ic" />
                  <span>
                    <Rico texto={t} />
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      );
    case "evitar":
      return (
        <section className="bl-evitar">
          <h3 className="bl-tit">
            <Alerta /> {b.titulo}
          </h3>
          <ul>
            {b.itens.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </section>
      );
    case "relato":
      return (
        <figure className="bl-relato">
          <blockquote>
            <p>{b.texto}</p>
          </blockquote>
          <figcaption>{b.autor}</figcaption>
        </figure>
      );
    case "caso":
      return (
        <article className="bl-caso">
          <p className="bl-caso-un">{b.unidade}</p>
          <h3>{b.titulo}</h3>
          <p>{b.texto}</p>
        </article>
      );
    case "foto":
      return (
        <figure className="bl-foto">
          <Img {...b} />
          {b.legenda && <figcaption>{b.legenda}</figcaption>}
        </figure>
      );
    case "fotos":
      return (
        <div className="bl-fotos">
          {b.itens.map((f) => (
            <figure className="bl-foto" key={f.src}>
              <Img {...f} />
              {f.legenda && <figcaption>{f.legenda}</figcaption>}
            </figure>
          ))}
        </div>
      );
    case "diagrama":
      return <Diagrama nome={b.nome} />;
    case "numeros":
      return (
        <section className={`bl-numeros${b.itens.some(([v]) => String(v).length > 5) ? " bl-numeros--longo" : ""}`}>
          {b.titulo && <h3 className="bl-tit">{b.titulo}</h3>}
          <dl>
            {b.itens.map(([v, r]) => (
              <div key={r}>
                <dt>{r}</dt>
                <dd>
                  <Valor v={v} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      );
    case "tabela":
      return (
        <section className="bl-tabela">
          {b.titulo && <h3 className="bl-tit">{b.titulo}</h3>}
          <div className="bl-tabela-rolo" tabIndex={0} role="region" aria-label={b.titulo || "Tabela"}>
            <table>
              <thead>
                <tr>
                  {b.colunas.map((c) => (
                    <th key={c} scope="col">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {b.linhas.map((l) => (
                  <tr key={l[0]}>
                    {l.map((c, i) => (i === 0 ? <th key={i} scope="row">{c}</th> : <td key={i}>{c}</td>))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      );
    case "abas":
      return <Abas b={b} />;
    case "linha":
      return (
        <ol className="bl-linha">
          {b.itens.map(([q, t, d]) => (
            <li key={q}>
              <span className="bl-linha-q">{q}</span>
              <div>
                <strong>{t}</strong>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "lei":
      return (
        <aside className="bl-lei">
          <Balanca className="bl-lei-ic" />
          <div>
            <p className="bl-lei-tit">{b.titulo}</p>
            <p>{b.texto}</p>
            <p className="bl-lei-fonte">Síntese do texto legal. Fonte: {b.fonte}.</p>
          </div>
        </aside>
      );
    case "check":
      return <Pergunta b={b} />;
    case "cenario":
      return <Cenario b={b} />;
    case "mapa":
      return <Mapa />;
    case "metas":
      return (
        <section className="bl-metas">
          <h3 className="bl-tit">Metas por unidade no ciclo</h3>
          <dl>
            {CONFIG.metas.map(([v, r]) => (
              <div key={r}>
                <dt>{r}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <p className="bl-nota">As metas são definidas pela coordenação a cada ciclo e podem ser ajustadas conforme o calendário de cada unidade.</p>
        </section>
      );
    case "link":
      return (
        <p className="bl-link">
          <span>{b.texto}</span>
          <a href={CONFIG[b.href] || b.href} target="_blank" rel="noopener noreferrer">
            {b.rotulo} <Externo width="16" height="16" />
          </a>
        </p>
      );
    default:
      return null;
  }
}

export default function Blocos({ blocos }) {
  return blocos.map((b, i) => <Bloco key={i} b={b} />);
}
