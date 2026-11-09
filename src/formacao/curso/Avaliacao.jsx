import { useMemo, useState } from "react";
import { CONFIG, NUCLEO, MODULOS } from "./index.js";
import * as P from "./progresso.js";
import { Topo } from "./Comum.jsx";
import { ICONE_TRILHA, Seta, Check, Cadeado, Medalha, Refazer, Alerta, Voltar, Fechar } from "./icones.jsx";

// Embaralha de forma determinística, para que a ordem mude a cada tentativa.
function embaralhar(lista, semente) {
  const a = [...lista];
  let s = semente * 9301 + 49297;
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Avaliacao({ conta, setConta, ir, onSair, moduloId }) {
  const modulo = MODULOS[moduloId];
  const Icone = ICONE_TRILHA[modulo.id];
  const registro = P.avaliacao(conta, modulo.id);
  const restantes = P.tentativasRestantes(conta, modulo.id);
  const bloqueada = modulo.id !== NUCLEO.id && !P.trilhaLiberada(conta);
  const pendentes = modulo.licoes.filter((l) => !P.licaoFeita(conta, l.id));
  const nomeAv = modulo.id === NUCLEO.id ? "do núcleo comum" : `da trilha ${modulo.nome}`;
  const pct = Math.round(CONFIG.aprovacao * 100);

  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);
  const [refazendo, setRefazendo] = useState(false);

  // Questões e opções embaralhadas conforme o número da tentativa.
  const questoes = useMemo(() => {
    const semente = registro.tentativas + 1;
    return embaralhar(
      modulo.avaliacao.map((q, i) => {
        const ops = embaralhar(
          q.opcoes.map((texto, j) => ({ texto, certa: j === q.certa })),
          semente * 7 + i
        );
        return { ...q, id: i, ops };
      }),
      semente
    );
  }, [modulo, registro.tentativas]);

  const respondidas = Object.keys(respostas).length;

  const enviar = (e) => {
    e.preventDefault();
    if (respondidas < questoes.length) return;
    const erradas = questoes.filter((q) => !q.ops[respostas[q.id]]?.certa);
    const acertos = questoes.length - erradas.length;
    const nova = P.registrarAvaliacao(conta, modulo.id, acertos, questoes.length);
    setConta(nova);
    setResultado({ acertos, total: questoes.length, erradas, passou: acertos / questoes.length >= CONFIG.aprovacao, questoes, respostas });
    window.scrollTo(0, 0);
  };

  const recomecar = () => {
    setRespostas({});
    setResultado(null);
    setRefazendo(true);
    window.scrollTo(0, 0);
  };

  // Para o perfil aberto à comunidade, o núcleo comum é o percurso inteiro.
  const fimDoPercurso = modulo.id !== NUCLEO.id || P.ehComunidade(conta);

  const proximoDepois = () => {
    if (modulo.id === NUCLEO.id && !P.ehComunidade(conta)) {
      const trilha = MODULOS[conta.perfil];
      const primeira = trilha.licoes.find((l) => !P.licaoFeita(conta, l.id)) || trilha.licoes[0];
      ir(`#/licao/${trilha.id}/${primeira.id}`);
    } else {
      ir(`#/certificado/${modulo.id}`);
    }
  };

  const licaoTitulo = (id) => modulo.licoes.find((l) => l.id === id);

  let conteudo;

  if (bloqueada) {
    conteudo = (
      <div className="fm-av-aviso">
        <Cadeado width="32" height="32" />
        <h2>Avaliação bloqueada</h2>
        <p>
          {P.ehComunidade(conta)
            ? "As trilhas são para quem atua no projeto. Para abrir uma trilha, informe no painel o código de acesso fornecido pela coordenação."
            : "A trilha é liberada depois da aprovação na avaliação do núcleo comum."}
        </p>
        <button type="button" className="fm-btn fm-btn--escuro" onClick={() => ir("#/")}>
          Voltar ao painel <Seta />
        </button>
      </div>
    );
  } else if (resultado) {
    const nota = Math.round((resultado.acertos / resultado.total) * 100);
    const restAgora = P.tentativasRestantes(P.carregarSessao() || conta, modulo.id);
    conteudo = (
      <div className="fm-res">
        <div className={`fm-res-cab${resultado.passou ? " ok" : ""}`}>
          <div className="fm-res-nota">
            <strong>{nota}%</strong>
            <span>
              {resultado.acertos} de {resultado.total} questões
            </span>
          </div>
          <div>
            <h2>{resultado.passou ? "Aprovado." : "Ainda não foi desta vez."}</h2>
            <p>
              {resultado.passou
                ? !fimDoPercurso
                  ? "Você concluiu o núcleo comum. A sua trilha está liberada."
                  : modulo.id === NUCLEO.id
                    ? "Você concluiu o núcleo comum e conheceu o Asa Verde por dentro. O seu certificado está disponível."
                    : "Você concluiu a trilha. O seu certificado está disponível."
                : `É preciso acertar ${pct}% das questões. ${restAgora > 0 ? `Você ainda tem ${restAgora} tentativa${restAgora > 1 ? "s" : ""}.` : "As tentativas acabaram: procure a coordenação do projeto."}`}
            </p>
            <div className="fm-res-acoes">
              {resultado.passou ? (
                <button type="button" className="fm-btn fm-btn--escuro" onClick={proximoDepois}>
                  {fimDoPercurso ? "Ver o certificado" : "Começar a trilha"} <Seta />
                </button>
              ) : (
                restAgora > 0 && (
                  <button type="button" className="fm-btn fm-btn--escuro" onClick={recomecar}>
                    <Refazer /> Tentar de novo
                  </button>
                )
              )}
              <button type="button" className="fm-btn fm-btn--linha" onClick={() => ir("#/")}>
                Voltar ao painel
              </button>
            </div>
          </div>
        </div>

        {resultado.passou ? (
          <section className="fm-gabarito" aria-labelledby="fm-gab-tit">
            <h3 id="fm-gab-tit">Gabarito comentado</h3>
            <ol>
              {resultado.questoes.map((q) => {
                const escolhida = q.ops[resultado.respostas[q.id]];
                const certa = q.ops.find((o) => o.certa);
                return (
                  <li key={q.id} className={escolhida?.certa ? "ok" : "erro"}>
                    <p className="fm-gab-q">{q.q}</p>
                    <p className="fm-gab-r">
                      {escolhida?.certa ? <Check width="16" height="16" /> : <Fechar width="16" height="16" />} <strong>{certa.texto}</strong>
                    </p>
                    <p className="fm-gab-e">{q.explica}</p>
                  </li>
                );
              })}
            </ol>
          </section>
        ) : (
          <section className="fm-revisar" aria-labelledby="fm-rev-tit">
            <h3 id="fm-rev-tit">O que revisar antes de tentar de novo</h3>
            <ul>
              {[...new Set(resultado.erradas.map((q) => q.licao))].map((id) => {
                const l = licaoTitulo(id);
                if (!l) return null;
                const n = resultado.erradas.filter((q) => q.licao === id).length;
                return (
                  <li key={id}>
                    <a
                      href={`#/licao/${modulo.id}/${id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        ir(`#/licao/${modulo.id}/${id}`);
                      }}
                    >
                      <span>
                        <strong>{l.titulo}</strong>
                        <span>{n > 1 ? `${n} questões com erro` : "1 questão com erro"}</span>
                      </span>
                      <Seta width="18" height="18" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        )}
      </div>
    );
  } else if (registro.aprovado && !refazendo) {
    conteudo = (
      <div className="fm-av-aviso ok">
        <Medalha width="36" height="36" />
        <h2>Você já foi aprovado nesta avaliação</h2>
        <p>
          Melhor resultado: {Math.round(registro.melhor * 100)}%{registro.data ? `, em ${new Date(registro.data).toLocaleDateString("pt-BR")}` : ""}.
        </p>
        <div className="fm-res-acoes">
          <button type="button" className="fm-btn fm-btn--escuro" onClick={proximoDepois}>
            {fimDoPercurso ? "Ver o certificado" : "Ir para a trilha"} <Seta />
          </button>
          <button type="button" className="fm-btn fm-btn--linha" onClick={() => ir("#/")}>
            Voltar ao painel
          </button>
        </div>
      </div>
    );
  } else if (pendentes.length) {
    conteudo = (
      <div className="fm-av-aviso">
        <Alerta width="32" height="32" />
        <h2>Conclua as lições antes da avaliação</h2>
        <p>Faltam {pendentes.length === 1 ? "uma lição" : `${pendentes.length} lições`}:</p>
        <ul className="fm-av-pend">
          {pendentes.map((l) => (
            <li key={l.id}>
              <a
                href={`#/licao/${modulo.id}/${l.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  ir(`#/licao/${modulo.id}/${l.id}`);
                }}
              >
                {l.titulo} <Seta width="16" height="16" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  } else if (restantes === 0) {
    conteudo = (
      <div className="fm-av-aviso">
        <Alerta width="32" height="32" />
        <h2>As tentativas desta avaliação acabaram</h2>
        <p>Procure o seu professor orientador ou a coordenação do projeto para liberar uma nova tentativa.</p>
        <button type="button" className="fm-btn fm-btn--linha" onClick={() => ir("#/")}>
          Voltar ao painel
        </button>
      </div>
    );
  } else {
    conteudo = (
      <form className="fm-quiz" onSubmit={enviar}>
        <ol>
          {questoes.map((q, n) => (
            <li key={q.id} className={respostas[q.id] !== undefined ? "resp" : undefined}>
              <fieldset>
                <legend>
                  <span className="fm-quiz-n">{n + 1}</span>
                  {q.q}
                </legend>
                <div className="fm-quiz-ops">
                  {q.ops.map((o, i) => (
                    <label key={o.texto} className={respostas[q.id] === i ? "sel" : undefined}>
                      <input type="radio" name={`q${q.id}`} checked={respostas[q.id] === i} onChange={() => setRespostas((r) => ({ ...r, [q.id]: i }))} />
                      <span className="fm-quiz-letra" aria-hidden="true">
                        {String.fromCharCode(65 + i)}
                      </span>
                      <span>{o.texto}</span>
                    </label>
                  ))}
                </div>
              </fieldset>
            </li>
          ))}
        </ol>
        <div className="fm-quiz-envio">
          <span>
            {respondidas} de {questoes.length} respondidas
          </span>
          <span className="fm-barra" aria-hidden="true">
            <i style={{ width: `${(respondidas / questoes.length) * 100}%` }} />
          </span>
          <button type="submit" className="fm-btn fm-btn--escuro" disabled={respondidas < questoes.length}>
            Enviar respostas <Seta />
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="fm-app">
      <Topo conta={conta} onPainel={() => ir("#/")} onSair={onSair} />
      <header className="fm-av-cab">
        <div className="fm-shell">
          <a
            className="fm-link-claro fm-av-volta"
            href="#/"
            onClick={(e) => {
              e.preventDefault();
              ir("#/");
            }}
          >
            <Voltar width="18" height="18" /> Painel
          </a>
          <p className="fm-sobre">
            <Icone width="18" height="18" /> {modulo.id === NUCLEO.id ? "Núcleo comum" : `Trilha ${modulo.nome}`}
          </p>
          <h1>Avaliação {nomeAv}</h1>
          <ul className="fm-av-info">
            <li>{modulo.avaliacao.length} questões</li>
            <li>Aprovação com {pct}%</li>
            <li>{registro.aprovado ? "Aprovado" : `${restantes} de ${CONFIG.tentativas} tentativas disponíveis`}</li>
          </ul>
        </div>
      </header>
      <main className="fm-shell fm-av">{conteudo}</main>
    </div>
  );
}
