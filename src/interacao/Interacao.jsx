import { useEffect, useId, useRef, useState } from "react";
import {
  FUNCOES,
  PERGUNTAS,
  UNIDADES_LISTA,
  comentarAvaliacao,
  enviarDepoimento,
  enviarPesquisa,
  listarDepoimentosAprovados,
  marcado,
  marcar,
  registrarAvaliacao,
} from "./servicos.js";
import { IconArrow } from "../site/icons.jsx";
import "./interacao.css";

/** Robôs costumam enviar formulários em menos de 3 segundos. */
const TEMPO_MINIMO = 3000;

/* ───────────── "Esta página foi útil?" (fim das páginas internas) ───────────── */

export function PaginaUtil({ pagina }) {
  const chave = `util:${pagina}`;
  const [voto, setVoto] = useState(() => marcado(chave));
  const [etapa, setEtapa] = useState(() => (marcado(chave) ? "respondida" : "pergunta"));
  const [comentario, setComentario] = useState("");
  const [erro, setErro] = useState("");
  const gravacao = useRef(null);
  const idComentario = useId();

  function votar(valor) {
    setVoto(valor);
    setErro("");
    setEtapa("comentar");
    const promessa = registrarAvaliacao(pagina, valor === "sim")
      .then(() => marcar(chave, valor))
      .catch(() => {
        setErro("Não foi possível registrar a sua resposta agora. Verifique a conexão e tente de novo.");
        setEtapa("pergunta");
        throw new Error("voto-nao-gravado");
      });
    promessa.catch(() => {}); // a falha já foi mostrada; evita aviso de promessa sem tratamento
    gravacao.current = promessa;
  }

  async function enviarComentario(evento) {
    evento.preventDefault();
    if (!comentario.trim()) return;
    setEtapa("enviando");
    try {
      await gravacao.current;
      await comentarAvaliacao(pagina, comentario);
      setEtapa("obrigado");
    } catch {
      setErro("Não foi possível enviar o comentário agora. Tente de novo em instantes.");
      setEtapa("comentar");
    }
  }

  return (
    <aside className="shell util" aria-labelledby={`util-${pagina}`}>
      <div className="util-caixa" aria-live="polite">
        {etapa === "pergunta" && (
          <div className="util-linha">
            <h2 id={`util-${pagina}`}>Esta página foi útil?</h2>
            <div className="util-botoes">
              <button type="button" onClick={() => votar("sim")}>Sim</button>
              <button type="button" onClick={() => votar("nao")}>Não</button>
            </div>
            {erro && <p className="util-erro" role="alert">{erro}</p>}
          </div>
        )}

        {(etapa === "comentar" || etapa === "enviando") && (
          <form className="util-form" onSubmit={enviarComentario}>
            <h2 id={`util-${pagina}`}>Obrigado pela resposta.</h2>
            <label htmlFor={idComentario}>
              {voto === "sim" ? "Quer contar o que mais ajudou?" : "Quer contar o que faltou nesta página?"} <span>(opcional)</span>
            </label>
            <textarea id={idComentario} rows={3} maxLength={600} value={comentario} onChange={e => setComentario(e.target.value)} />
            <div className="util-acoes">
              <button type="submit" className="util-enviar" disabled={!comentario.trim() || etapa === "enviando"}>
                {etapa === "enviando" ? "Enviando…" : "Enviar comentário"}
              </button>
              <button type="button" className="util-pular" onClick={() => setEtapa("obrigado")}>Agora não</button>
            </div>
            {erro && <p className="util-erro" role="alert">{erro}</p>}
          </form>
        )}

        {etapa === "obrigado" && (
          <p className="util-fim" id={`util-${pagina}`}>Obrigado. A equipe do projeto lê todas as respostas.</p>
        )}

        {etapa === "respondida" && (
          <p className="util-fim" id={`util-${pagina}`}>Você já disse se esta página foi útil. Obrigado pela participação.</p>
        )}
      </div>
    </aside>
  );
}

/* ───────────── Depoimentos aprovados (capítulo Vozes) ───────────── */

const DEPOIMENTOS_VISIVEIS = 6;

export function DepoimentosPublicados() {
  const [lista, setLista] = useState(null);
  const [todos, setTodos] = useState(false);

  useEffect(() => {
    let ativo = true;
    listarDepoimentosAprovados()
      .then(resultado => ativo && setLista(resultado))
      .catch(() => ativo && setLista([]));
    return () => {
      ativo = false;
    };
  }, []);

  const visiveis = lista && !todos ? lista.slice(0, DEPOIMENTOS_VISIVEIS) : lista;

  return (
    <section className="dep-comunidade" aria-labelledby="dep-tit">
      <div className="dep-cab">
        <h2 id="dep-tit">Depoimentos da comunidade</h2>
        <p>Relatos enviados por famílias, professores, estagiários e parceiros, publicados depois da revisão da coordenação.</p>
        <a className="btn btn--lima" href="#participe">Enviar um depoimento</a>
      </div>
      {lista === null && <p className="dep-estado">Carregando depoimentos…</p>}
      {lista?.length === 0 && <p className="dep-estado">Ainda não há depoimentos publicados por aqui.</p>}
      {lista?.length > 0 && (
        <>
          <ul className="dep-lista">
            {visiveis.map(d => (
              <li key={d.id}>
                <blockquote><p>{d.texto}</p></blockquote>
                <p className="dep-autor">
                  <span>{d.nome}</span>
                  <span>{d.unidade ? `${d.funcao}, ${d.unidade}` : d.funcao}</span>
                </p>
              </li>
            ))}
          </ul>
          {lista.length > DEPOIMENTOS_VISIVEIS && !todos && (
            <button type="button" className="btn btn--fio dep-mais" onClick={() => setTodos(true)}>
              Ver todos os {lista.length} depoimentos
            </button>
          )}
        </>
      )}
    </section>
  );
}

/* ───────────── Chamada na página inicial ───────────── */

export function ChamadaParticipe() {
  return (
    <section className="shell part-home" aria-labelledby="part-home-tit">
      <div className="section-rule"><h2 id="part-home-tit">Participe</h2></div>
      <div className="part-home-corpo">
        <p>
          Você acompanhou o Asa Verde numa escola, em casa ou como estagiário? Conte a sua experiência ou responda à pesquisa de
          percepção do projeto. Leva poucos minutos.
        </p>
        <a className="underlink" href="#participe">Enviar depoimento ou responder à pesquisa <IconArrow /></a>
      </div>
    </section>
  );
}

/* ───────────── Página Participe ───────────── */

export function Participe() {
  return (
    <section className="ch participe" id="participe" aria-labelledby="part-tit">
      <div className="shell">
        <header className="ab in">
          <p className="ab-run">Participe</p>
          <h1 className="ab-tit" id="part-tit">Conte como o Asa Verde chegou até você</h1>
          <p className="ab-lead">
            Famílias, professores, gestores, estagiários e parceiros ajudam a contar a história do projeto. Envie um depoimento ou
            responda à pesquisa: as duas coisas levam poucos minutos.
          </p>
        </header>
        <FormDepoimento />
        <FormPesquisa />
      </div>
    </section>
  );
}

function CampoArmadilha({ valor, aoMudar }) {
  // Campo invisível para pessoas; robôs costumam preenchê-lo.
  return (
    <div className="part-armadilha" aria-hidden="true">
      <label>
        Deixe este campo em branco
        <input type="text" tabIndex={-1} autoComplete="off" value={valor} onChange={e => aoMudar(e.target.value)} />
      </label>
    </div>
  );
}

const DEPOIMENTO_VAZIO = { nome: "", funcao: "", unidade: "", texto: "", autorizacao: false };

function FormDepoimento() {
  const [dados, setDados] = useState(DEPOIMENTO_VAZIO);
  const [armadilha, setArmadilha] = useState("");
  const [estado, setEstado] = useState("editando");
  const inicio = useRef(0);
  useEffect(() => {
    inicio.current = Date.now();
  }, []);
  const id = useId();
  const mudar = campo => evento => {
    const valor = evento.target.type === "checkbox" ? evento.target.checked : evento.target.value;
    setDados(atual => ({ ...atual, [campo]: valor }));
  };

  async function enviar(evento) {
    evento.preventDefault();
    if (armadilha || Date.now() - inicio.current < TEMPO_MINIMO) {
      setEstado("enviado");
      return;
    }
    setEstado("enviando");
    try {
      await enviarDepoimento(dados);
      marcar("depoimento");
      setEstado("enviado");
    } catch {
      setEstado("erro");
    }
  }

  function novo() {
    setDados(DEPOIMENTO_VAZIO);
    inicio.current = Date.now();
    setEstado("editando");
  }

  return (
    <div className="part-bloco" id="depoimento">
      <div className="part-intro">
        <h2>Envie um depoimento</h2>
        <p>Conte o que mudou na escola, em casa ou na sua turma com as atividades do projeto.</p>
        <ul>
          <li>A coordenação lê cada depoimento antes de publicar na página Vozes.</li>
          <li>Não cite nomes de crianças.</li>
          <li>Você escolhe como o seu nome aparece.</li>
        </ul>
      </div>

      {estado === "enviado" ? (
        <div className="part-sucesso" role="status">
          <h3>Recebemos o seu depoimento.</h3>
          <p>Ele aparece em Vozes depois da revisão da coordenação. Obrigado por contar a sua experiência.</p>
          <button type="button" className="part-link" onClick={novo}>Enviar outro depoimento</button>
        </div>
      ) : (
        <form className="part-form" onSubmit={enviar}>
          <div className="part-campo">
            <label htmlFor={`${id}-nome`}>Nome, como deve aparecer no site</label>
            <input id={`${id}-nome`} type="text" required minLength={2} maxLength={80} autoComplete="name"
              value={dados.nome} onChange={mudar("nome")} />
          </div>
          <div className="part-duas">
            <div className="part-campo">
              <label htmlFor={`${id}-funcao`}>Relação com o projeto</label>
              <select id={`${id}-funcao`} required value={dados.funcao} onChange={mudar("funcao")}>
                <option value="" disabled>Escolha uma opção</option>
                {FUNCOES.map(f => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
            <div className="part-campo">
              <label htmlFor={`${id}-unidade`}>Unidade <span>(opcional)</span></label>
              <select id={`${id}-unidade`} value={dados.unidade} onChange={mudar("unidade")}>
                <option value="">Não se aplica</option>
                {UNIDADES_LISTA.map(u => <option key={u} value={u}>{u}</option>)}
              </select>
            </div>
          </div>
          <div className="part-campo">
            <label htmlFor={`${id}-texto`}>Depoimento</label>
            <textarea id={`${id}-texto`} required minLength={30} maxLength={1200} rows={6}
              aria-describedby={`${id}-texto-ajuda`} value={dados.texto} onChange={mudar("texto")} />
            <p className="part-ajuda" id={`${id}-texto-ajuda`}>
              De 30 a 1.200 caracteres. Até agora: {dados.texto.length}.
            </p>
          </div>
          <label className="part-check">
            <input type="checkbox" required checked={dados.autorizacao} onChange={mudar("autorizacao")} />
            <span>Autorizo a publicação deste depoimento no site do Projeto Asa Verde, com o nome e a relação informados.</span>
          </label>
          <CampoArmadilha valor={armadilha} aoMudar={setArmadilha} />
          {estado === "erro" && (
            <p className="part-erro" role="alert">Não foi possível enviar agora. Verifique a conexão e tente de novo; o texto continua aqui.</p>
          )}
          <button type="submit" className="btn btn--tinta part-enviar" disabled={estado === "enviando"}>
            {estado === "enviando" ? "Enviando…" : "Enviar depoimento"}
          </button>
        </form>
      )}
    </div>
  );
}

function FormPesquisa() {
  const [respostas, setRespostas] = useState({ unidade: "", comentario: "" });
  const [armadilha, setArmadilha] = useState("");
  const [estado, setEstado] = useState(() => (marcado("pesquisa") ? "respondida" : "editando"));
  const inicio = useRef(0);
  useEffect(() => {
    inicio.current = Date.now();
  }, []);
  const id = useId();
  const responder = (campo, valor) => setRespostas(atual => ({ ...atual, [campo]: valor }));

  async function enviar(evento) {
    evento.preventDefault();
    if (armadilha || Date.now() - inicio.current < TEMPO_MINIMO) {
      setEstado("enviada");
      return;
    }
    setEstado("enviando");
    try {
      await enviarPesquisa(respostas);
      marcar("pesquisa");
      setEstado("enviada");
    } catch (erro) {
      if (erro.message === "ja-respondeu") {
        marcar("pesquisa");
        setEstado("respondida");
      } else {
        setEstado("erro");
      }
    }
  }

  return (
    <div className="part-bloco" id="pesquisa">
      <div className="part-intro">
        <h2>Pesquisa de percepção</h2>
        <p>Quatro perguntas rápidas sobre o que você percebeu nas escolas. As respostas são anônimas e ajudam a avaliar o projeto e a planejar 2027.</p>
      </div>

      {estado === "enviada" || estado === "respondida" ? (
        <div className="part-sucesso" role="status">
          <h3>{estado === "enviada" ? "Respostas enviadas." : "Você já respondeu à pesquisa neste aparelho."}</h3>
          <p>Obrigado por ajudar a avaliar o Projeto Asa Verde.</p>
        </div>
      ) : (
        <form className="part-form" onSubmit={enviar}>
          {PERGUNTAS.map((pergunta, indice) => (
            <fieldset className="pq-grupo" key={pergunta.id}>
              <legend><span className="pq-num">{indice + 1}</span>{pergunta.titulo}</legend>
              {pergunta.ajuda && <p className="part-ajuda">{pergunta.ajuda}</p>}
              <div className="pq-opcoes">
                {pergunta.opcoes.map(([valor, rotulo], k) => (
                  <label className="pq-opcao" key={valor}>
                    <input type="radio" name={`${id}-${pergunta.id}`} value={valor} required={k === 0}
                      checked={respostas[pergunta.id] === valor} onChange={() => responder(pergunta.id, valor)} />
                    <span>{rotulo}</span>
                  </label>
                ))}
              </div>
              {pergunta.id === "perfil" && (
                <div className="part-campo pq-unidade">
                  <label htmlFor={`${id}-unidade`}>Unidade a que você está ligado(a) <span>(opcional)</span></label>
                  <select id={`${id}-unidade`} value={respostas.unidade} onChange={e => responder("unidade", e.target.value)}>
                    <option value="">Prefiro não informar</option>
                    {UNIDADES_LISTA.map(u => <option key={u} value={u}>{u}</option>)}
                  </select>
                </div>
              )}
            </fieldset>
          ))}
          <div className="part-campo">
            <label htmlFor={`${id}-comentario`}>Sugestão ou comentário <span>(opcional)</span></label>
            <textarea id={`${id}-comentario`} rows={3} maxLength={800} value={respostas.comentario}
              onChange={e => responder("comentario", e.target.value)} />
          </div>
          <CampoArmadilha valor={armadilha} aoMudar={setArmadilha} />
          {estado === "erro" && (
            <p className="part-erro" role="alert">Não foi possível enviar agora. Verifique a conexão e tente de novo.</p>
          )}
          <button type="submit" className="btn btn--tinta part-enviar" disabled={estado === "enviando"}>
            {estado === "enviando" ? "Enviando…" : "Enviar respostas"}
          </button>
        </form>
      )}
    </div>
  );
}
