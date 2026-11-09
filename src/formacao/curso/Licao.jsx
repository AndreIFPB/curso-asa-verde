import { useEffect, useState } from "react";
import { NUCLEO, MODULOS, minutos } from "./index.js";
import * as P from "./progresso.js";
import Blocos from "./Blocos.jsx";
import { Topo } from "./Comum.jsx";
import { ICONE_TRILHA, Anterior, Seta, Check, Cadeado, Relogio, Lista, Fechar, Medalha, Voltar } from "./icones.jsx";

function Sumario({ modulo, conta, licaoId, ir, onFechar }) {
  const feitas = P.licoesFeitas(conta, modulo);
  const a = P.avaliacao(conta, modulo.id);
  const lido = P.moduloLido(conta, modulo);
  return (
    <nav className="fm-sum" aria-label={`Lições: ${modulo.nome}`}>
      <div className="fm-sum-cab">
        <p>{modulo.id === NUCLEO.id ? "Núcleo comum" : "Trilha"}</p>
        <strong>{modulo.nome}</strong>
        <span className="fm-barra" aria-hidden="true">
          <i style={{ width: `${(feitas / modulo.licoes.length) * 100}%` }} />
        </span>
        <span className="fm-sum-cont">
          {feitas} de {modulo.licoes.length} lições concluídas
        </span>
        {onFechar && (
          <button type="button" className="fm-btn-ic fm-sum-x" onClick={onFechar} aria-label="Fechar sumário">
            <Fechar />
          </button>
        )}
      </div>
      <ol>
        {modulo.licoes.map((l, i) => {
          const feita = P.licaoFeita(conta, l.id);
          const atual = l.id === licaoId;
          return (
            <li key={l.id} className={`${feita ? "feito" : ""}${atual ? " atual" : ""}`}>
              <a
                href={`#/licao/${modulo.id}/${l.id}`}
                aria-current={atual ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onFechar?.();
                  ir(`#/licao/${modulo.id}/${l.id}`);
                }}
              >
                <span className="fm-sum-n">{feita ? <Check width="15" height="15" /> : i + 1}</span>
                <span>{l.titulo}</span>
              </a>
            </li>
          );
        })}
        <li className={`fm-sum-av${a.aprovado ? " feito" : ""}${!lido ? " bloq" : ""}`}>
          <a
            href={`#/avaliacao/${modulo.id}`}
            onClick={(e) => {
              e.preventDefault();
              onFechar?.();
              ir(`#/avaliacao/${modulo.id}`);
            }}
          >
            <span className="fm-sum-n">{a.aprovado ? <Check width="15" height="15" /> : lido ? <Medalha width="15" height="15" /> : <Cadeado width="15" height="15" />}</span>
            <span>Avaliação</span>
          </a>
        </li>
      </ol>
      <a
        className="fm-sum-volta"
        href="#/"
        onClick={(e) => {
          e.preventDefault();
          ir("#/");
        }}
      >
        <Voltar width="18" height="18" /> Voltar ao painel
      </a>
    </nav>
  );
}

function useProgressoLeitura() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const on = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(1, window.scrollY / max) : 1);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, []);
  return p;
}

export default function Licao({ conta, setConta, ir, onSair, moduloId, licaoId }) {
  const modulo = MODULOS[moduloId];
  const idx = Math.max(0, modulo.licoes.findIndex((l) => l.id === licaoId));
  const licao = modulo.licoes[idx];
  const [sumarioAberto, setSumarioAberto] = useState(false);
  const leitura = useProgressoLeitura();
  const bloqueada = moduloId !== NUCLEO.id && !P.trilhaLiberada(conta);
  const feita = P.licaoFeita(conta, licao.id);
  const Icone = ICONE_TRILHA[modulo.id];
  const anterior = modulo.licoes[idx - 1];
  const proxima = modulo.licoes[idx + 1];

  useEffect(() => {
    if (!sumarioAberto) return;
    const onKey = (e) => e.key === "Escape" && setSumarioAberto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [sumarioAberto]);

  if (bloqueada) {
    return (
      <div className="fm-app">
        <Topo conta={conta} onPainel={() => ir("#/")} onSair={onSair} />
        <main className="fm-shell fm-bloqueio">
          <Cadeado width="40" height="40" />
          <h1>Esta trilha ainda está bloqueada</h1>
          <p>A trilha {modulo.nome} é liberada depois da aprovação na avaliação do núcleo comum.</p>
          <button type="button" className="fm-btn fm-btn--escuro" onClick={() => ir("#/")}>
            Voltar ao painel <Seta />
          </button>
        </main>
      </div>
    );
  }

  const concluir = () => {
    const nova = P.concluirLicao(conta, modulo.id, licao.id);
    setConta(nova);
    if (proxima) ir(`#/licao/${modulo.id}/${proxima.id}`);
    else ir(`#/avaliacao/${modulo.id}`);
  };

  return (
    <div className="fm-app fm-app--leitura">
      <div className="fm-leitura-barra" aria-hidden="true">
        <i style={{ transform: `scaleX(${leitura})` }} />
      </div>
      <Topo conta={conta} onPainel={() => ir("#/")} onSair={onSair}>
        <button type="button" className="fm-btn-sum" onClick={() => setSumarioAberto(true)} aria-expanded={sumarioAberto}>
          <Lista width="18" height="18" /> Lição {idx + 1} de {modulo.licoes.length}
        </button>
      </Topo>

      <div className="fm-shell fm-leitor">
        <aside className="fm-leitor-lado">
          <Sumario modulo={modulo} conta={conta} licaoId={licao.id} ir={ir} />
        </aside>

        {sumarioAberto && (
          <div className="fm-gaveta" role="dialog" aria-modal="true" aria-label="Sumário da trilha" onClick={(e) => e.target === e.currentTarget && setSumarioAberto(false)}>
            <Sumario modulo={modulo} conta={conta} licaoId={licao.id} ir={ir} onFechar={() => setSumarioAberto(false)} />
          </div>
        )}

        <article className="fm-artigo" aria-labelledby="fm-licao-tit">
          <header className="fm-artigo-cab">
            <p className="fm-artigo-sobre">
              <Icone width="18" height="18" /> {modulo.id === NUCLEO.id ? "Núcleo comum" : `Trilha ${modulo.nome}`}
            </p>
            <div className="fm-artigo-tit">
              <span className="fm-artigo-num" aria-hidden="true">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h1 id="fm-licao-tit">{licao.titulo}</h1>
            </div>
            <p className="fm-artigo-resumo">{licao.resumo}</p>
            <p className="fm-artigo-meta">
              <span>
                <Relogio width="16" height="16" /> {minutos(licao)} min de leitura
              </span>
              <span>
                Lição {idx + 1} de {modulo.licoes.length}
              </span>
              {feita && (
                <span className="fm-tag-ok">
                  <Check width="16" height="16" /> Concluída
                </span>
              )}
            </p>
          </header>

          <div className="fm-artigo-corpo">
            <Blocos blocos={licao.blocos} />
          </div>

          <footer className="fm-artigo-fim">
            <div className="fm-fim-card">
              <div>
                <p className="fm-fim-sobre">{proxima ? "Próxima lição" : "Fim das lições"}</p>
                <strong>{proxima ? proxima.titulo : `Avaliação ${modulo.id === NUCLEO.id ? "do núcleo comum" : "da trilha"}`}</strong>
              </div>
              <button type="button" className="fm-btn fm-btn--escuro" onClick={concluir}>
                {feita ? "Continuar" : "Concluir lição"} <Seta />
              </button>
            </div>
            {anterior && (
              <a
                className="fm-link-sutil"
                href={`#/licao/${modulo.id}/${anterior.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  ir(`#/licao/${modulo.id}/${anterior.id}`);
                }}
              >
                <Anterior width="18" height="18" /> {anterior.titulo}
              </a>
            )}
          </footer>
        </article>
      </div>
    </div>
  );
}
