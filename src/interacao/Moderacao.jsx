import { useEffect, useMemo, useState } from "react";
import {
  ADMINS,
  PAGINAS_AVALIADAS,
  PERGUNTAS,
  aprovarDepoimento,
  dataLegivel,
  entrarComGoogle,
  excluirDocumento,
  listarColecao,
  listarDepoimentos,
  mudarStatusDepoimento,
  observarSessao,
  sairDaModeracao,
} from "./servicos.js";
import "./moderacao.css";

/* Página de moderação (/moderacao): acesso só com a conta Google autorizada nas regras do Firestore. */

const ROTULOS = Object.fromEntries(PERGUNTAS.map(p => [p.id, Object.fromEntries(p.opcoes)]));

function dataParaPlanilha(t) {
  const ms = t && typeof t.toMillis === "function" ? t.toMillis() : 0;
  if (!ms) return "";
  const d = new Date(ms);
  const dois = n => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${dois(d.getMonth() + 1)}-${dois(d.getDate())} ${dois(d.getHours())}:${dois(d.getMinutes())}`;
}

/** Gera um CSV com separador ";" e BOM, que abre direto no Excel e no Power BI. */
function baixarCsv(nomeArquivo, cabecalho, linhas) {
  const celula = valor => {
    const texto = valor == null ? "" : String(valor);
    return /[";\r\n]/.test(texto) ? `"${texto.replace(/"/g, '""')}"` : texto;
  };
  const conteudo = "﻿" + [cabecalho, ...linhas].map(l => l.map(celula).join(";")).join("\r\n");
  const url = URL.createObjectURL(new Blob([conteudo], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = nomeArquivo;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function useCarregar(funcao, dependencias) {
  const [estado, setEstado] = useState({ dados: null, erro: false });
  const [versao, setVersao] = useState(0);
  useEffect(() => {
    let ativo = true;
    setEstado({ dados: null, erro: false });
    funcao()
      .then(dados => ativo && setEstado({ dados, erro: false }))
      .catch(() => ativo && setEstado({ dados: null, erro: true }));
    return () => {
      ativo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...dependencias, versao]);
  return [estado, setEstado, () => setVersao(v => v + 1)];
}

export default function Moderacao({ navigate }) {
  const [usuario, setUsuario] = useState(undefined);
  const [erroLogin, setErroLogin] = useState("");

  useEffect(() => {
    document.title = "Moderação | Projeto Asa Verde";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  useEffect(() => {
    let ativo = true;
    let cancelar = null;
    observarSessao(u => ativo && setUsuario(u ?? null))
      .then(f => {
        cancelar = f;
        if (!ativo) f();
      })
      .catch(() => ativo && setUsuario(null));
    return () => {
      ativo = false;
      cancelar?.();
    };
  }, []);

  async function entrar() {
    setErroLogin("");
    try {
      await entrarComGoogle();
    } catch (erro) {
      if (erro.code !== "auth/popup-closed-by-user" && erro.code !== "auth/cancelled-popup-request") {
        setErroLogin("Não foi possível entrar. Se o navegador bloqueou a janela de login, permita pop-ups para este site e tente de novo.");
      }
    }
  }

  const contaGoogle = usuario && !usuario.isAnonymous;
  const autorizado = contaGoogle && usuario.emailVerified && ADMINS.includes(usuario.email);

  return (
    <div className="mod">
      <header className="mod-topo">
        <a href="/" onClick={e => { e.preventDefault(); navigate("/"); }}>Projeto Asa Verde</a>
        <span className="mod-titulo">Moderação</span>
        {contaGoogle && (
          <span className="mod-conta">
            {usuario.email}
            <button type="button" onClick={sairDaModeracao}>Sair</button>
          </span>
        )}
      </header>
      <main className="mod-corpo">
        {usuario === undefined && <p className="mod-aviso">Verificando o acesso…</p>}
        {usuario !== undefined && !contaGoogle && (
          <section className="mod-entrada">
            <h1>Moderação do site</h1>
            <p>Entre com a conta Google autorizada para revisar depoimentos e ver as respostas da pesquisa e das páginas.</p>
            <button type="button" className="mod-primario" onClick={entrar}>Entrar com Google</button>
            {erroLogin && <p className="mod-erro" role="alert">{erroLogin}</p>}
          </section>
        )}
        {contaGoogle && !autorizado && (
          <section className="mod-entrada">
            <h1>Acesso não autorizado</h1>
            <p>A conta {usuario.email} não tem acesso à moderação. Entre com a conta do projeto.</p>
            <button type="button" className="mod-primario" onClick={sairDaModeracao}>Trocar de conta</button>
          </section>
        )}
        {autorizado && <Painel />}
      </main>
    </div>
  );
}

const ABAS = [
  ["depoimentos", "Depoimentos"],
  ["paginas", "Páginas"],
  ["pesquisa", "Pesquisa"],
];

function Painel() {
  const [aba, setAba] = useState("depoimentos");
  const [aviso, setAviso] = useState("");
  return (
    <>
      <div className="mod-abas" role="group" aria-label="Seção da moderação">
        {ABAS.map(([id, nome]) => (
          <button key={id} type="button" aria-pressed={aba === id} onClick={() => { setAba(id); setAviso(""); }}>{nome}</button>
        ))}
      </div>
      <p className="mod-status" role="status" aria-live="polite">{aviso}</p>
      {aba === "depoimentos" && <Depoimentos avisar={setAviso} />}
      {aba === "paginas" && <Paginas avisar={setAviso} />}
      {aba === "pesquisa" && <Pesquisa />}
    </>
  );
}

const STATUS = [
  ["pendente", "Aguardando revisão"],
  ["aprovado", "Publicados"],
  ["recusado", "Recusados"],
];

function Depoimentos({ avisar }) {
  const [status, setStatus] = useState("pendente");
  const [{ dados, erro }, setEstado, recarregar] = useCarregar(() => listarDepoimentos(status), [status]);

  function retirar(id, mensagem) {
    setEstado(atual => ({ ...atual, dados: atual.dados.filter(d => d.id !== id) }));
    avisar(mensagem);
  }

  return (
    <section aria-labelledby="mod-dep-tit">
      <div className="mod-cab">
        <h1 id="mod-dep-tit">Depoimentos</h1>
        <div className="mod-filtros" role="group" aria-label="Situação dos depoimentos">
          {STATUS.map(([id, nome]) => (
            <button key={id} type="button" aria-pressed={status === id} onClick={() => setStatus(id)}>{nome}</button>
          ))}
        </div>
      </div>
      {erro && <p className="mod-erro">Não foi possível carregar os depoimentos. <button type="button" onClick={recarregar}>Tentar de novo</button></p>}
      {!erro && dados === null && <p className="mod-aviso">Carregando…</p>}
      {dados?.length === 0 && <p className="mod-aviso">Nenhum depoimento nesta situação.</p>}
      <ul className="mod-lista">
        {dados?.map(d => <CartaoDepoimento key={d.id} d={d} retirar={retirar} avisar={avisar} />)}
      </ul>
    </section>
  );
}

function CartaoDepoimento({ d, retirar, avisar }) {
  const [texto, setTexto] = useState(d.texto);
  const [ocupado, setOcupado] = useState(false);
  const [confirmarExclusao, setConfirmarExclusao] = useState(false);

  async function agir(acao, mensagem) {
    setOcupado(true);
    try {
      await acao();
      retirar(d.id, mensagem);
    } catch {
      avisar("A alteração não foi salva. Verifique a conexão e tente de novo.");
      setOcupado(false);
    }
  }

  async function salvarTexto() {
    setOcupado(true);
    try {
      await aprovarDepoimento(d.id, texto);
      avisar("Texto do depoimento atualizado.");
    } catch {
      avisar("A alteração não foi salva. Verifique a conexão e tente de novo.");
    }
    setOcupado(false);
  }

  return (
    <li className="mod-cartao">
      <p className="mod-meta">
        <strong>{d.nome}</strong>
        <span>{d.funcao}</span>
        {d.unidade && <span>{d.unidade}</span>}
        <span>Enviado em {dataLegivel(d.criadoEm)}</span>
        {d.aprovadoEm && <span>Publicado em {dataLegivel(d.aprovadoEm)}</span>}
      </p>
      <label className="mod-rotulo" htmlFor={`texto-${d.id}`}>Texto (você pode corrigir antes de publicar)</label>
      <textarea id={`texto-${d.id}`} rows={5} maxLength={1200} value={texto} onChange={e => setTexto(e.target.value)} />
      <div className="mod-acoes">
        {d.status === "pendente" && (
          <>
            <button type="button" className="mod-primario" disabled={ocupado || texto.trim().length < 30}
              onClick={() => agir(() => aprovarDepoimento(d.id, texto), "Depoimento publicado em Vozes.")}>Publicar</button>
            <button type="button" disabled={ocupado} onClick={() => agir(() => mudarStatusDepoimento(d.id, "recusado"), "Depoimento recusado.")}>Recusar</button>
          </>
        )}
        {d.status === "aprovado" && (
          <>
            <button type="button" className="mod-primario" disabled={ocupado || texto === d.texto || texto.trim().length < 30} onClick={salvarTexto}>Salvar texto</button>
            <button type="button" disabled={ocupado} onClick={() => agir(() => mudarStatusDepoimento(d.id, "pendente"), "Depoimento retirado do site e devolvido para revisão.")}>Despublicar</button>
          </>
        )}
        {d.status === "recusado" && (
          <button type="button" disabled={ocupado} onClick={() => agir(() => mudarStatusDepoimento(d.id, "pendente"), "Depoimento devolvido para revisão.")}>Voltar para revisão</button>
        )}
        {confirmarExclusao ? (
          <span className="mod-confirmar">
            Excluir de vez?
            <button type="button" className="mod-perigo" disabled={ocupado} onClick={() => agir(() => excluirDocumento("depoimentos", d.id), "Depoimento excluído.")}>Sim, excluir</button>
            <button type="button" onClick={() => setConfirmarExclusao(false)}>Cancelar</button>
          </span>
        ) : (
          <button type="button" className="mod-discreto" disabled={ocupado} onClick={() => setConfirmarExclusao(true)}>Excluir</button>
        )}
      </div>
    </li>
  );
}

function Paginas({ avisar }) {
  const [{ dados, erro }, setEstado, recarregar] = useCarregar(() => listarColecao("avaliacoes"), []);

  const resumo = useMemo(() => {
    if (!dados) return [];
    const porPagina = {};
    for (const a of dados) {
      const linha = (porPagina[a.pagina] ??= { pagina: a.pagina, sim: 0, nao: 0, comentarios: 0 });
      linha[a.util ? "sim" : "nao"] += 1;
      if (a.comentario) linha.comentarios += 1;
    }
    return Object.values(porPagina).sort((x, y) => y.sim + y.nao - (x.sim + x.nao));
  }, [dados]);

  const comentarios = dados?.filter(a => a.comentario) ?? [];
  const nomePagina = id => PAGINAS_AVALIADAS[id] || id;

  async function excluir(id) {
    try {
      await excluirDocumento("avaliacoes", id);
      setEstado(atual => ({ ...atual, dados: atual.dados.filter(a => a.id !== id) }));
      avisar("Resposta excluída.");
    } catch {
      avisar("Não foi possível excluir. Tente de novo.");
    }
  }

  function exportar() {
    baixarCsv("avaliacoes-paginas-asa-verde.csv", ["data", "pagina", "util", "comentario"],
      dados.map(a => [dataParaPlanilha(a.criadoEm), nomePagina(a.pagina), a.util ? "sim" : "não", a.comentario || ""]));
  }

  return (
    <section aria-labelledby="mod-pag-tit">
      <div className="mod-cab">
        <h1 id="mod-pag-tit">Esta página foi útil?</h1>
        {dados?.length > 0 && <button type="button" onClick={exportar}>Baixar CSV</button>}
      </div>
      {erro && <p className="mod-erro">Não foi possível carregar as respostas. <button type="button" onClick={recarregar}>Tentar de novo</button></p>}
      {!erro && dados === null && <p className="mod-aviso">Carregando…</p>}
      {dados?.length === 0 && <p className="mod-aviso">Ainda não há respostas.</p>}
      {resumo.length > 0 && (
        <div className="mod-tabela-rolagem">
          <table className="mod-tabela">
            <caption>{dados.length} respostas no total</caption>
            <thead>
              <tr><th scope="col">Página</th><th scope="col">Sim</th><th scope="col">Não</th><th scope="col">Útil para</th><th scope="col">Comentários</th></tr>
            </thead>
            <tbody>
              {resumo.map(l => (
                <tr key={l.pagina}>
                  <th scope="row">{nomePagina(l.pagina)}</th>
                  <td>{l.sim}</td>
                  <td>{l.nao}</td>
                  <td>{Math.round((l.sim / (l.sim + l.nao)) * 100)}%</td>
                  <td>{l.comentarios}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {comentarios.length > 0 && (
        <>
          <h2 className="mod-sub">Comentários</h2>
          <ul className="mod-lista">
            {comentarios.map(a => (
              <li className="mod-cartao" key={a.id}>
                <p className="mod-meta">
                  <strong>{nomePagina(a.pagina)}</strong>
                  <span>{a.util ? "Achou útil" : "Não achou útil"}</span>
                  <span>{dataLegivel(a.criadoEm)}</span>
                </p>
                <p className="mod-texto">{a.comentario}</p>
                <div className="mod-acoes"><button type="button" className="mod-discreto" onClick={() => excluir(a.id)}>Excluir</button></div>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}

function Pesquisa() {
  const [{ dados, erro }, , recarregar] = useCarregar(() => listarColecao("pesquisa"), []);
  const total = dados?.length ?? 0;

  const contagem = (campo, opcoes) =>
    opcoes.map(([valor, rotulo]) => {
      const n = dados.filter(r => r[campo] === valor).length;
      return { valor, rotulo, n, pct: total ? Math.round((n / total) * 100) : 0 };
    });

  const unidades = useMemo(() => {
    if (!dados) return [];
    const mapa = {};
    for (const r of dados) mapa[r.unidade || "Não informada"] = (mapa[r.unidade || "Não informada"] || 0) + 1;
    return Object.entries(mapa).sort((a, b) => b[1] - a[1]);
  }, [dados]);

  function exportar() {
    baixarCsv("pesquisa-percepcao-asa-verde.csv", ["data", "perfil", "unidade", "mudanca", "avaliacao", "continuidade", "comentario"],
      dados.map(r => [
        dataParaPlanilha(r.criadoEm),
        ROTULOS.perfil[r.perfil] || r.perfil,
        r.unidade || "",
        ROTULOS.mudanca[r.mudanca] || r.mudanca,
        ROTULOS.avaliacao[r.avaliacao] || r.avaliacao,
        ROTULOS.continuidade[r.continuidade] || r.continuidade,
        r.comentario || "",
      ]));
  }

  return (
    <section aria-labelledby="mod-pq-tit">
      <div className="mod-cab">
        <h1 id="mod-pq-tit">Pesquisa de percepção</h1>
        {total > 0 && <button type="button" onClick={exportar}>Baixar CSV</button>}
      </div>
      {erro && <p className="mod-erro">Não foi possível carregar as respostas. <button type="button" onClick={recarregar}>Tentar de novo</button></p>}
      {!erro && dados === null && <p className="mod-aviso">Carregando…</p>}
      {dados && total === 0 && <p className="mod-aviso">Ainda não há respostas.</p>}
      {total > 0 && (
        <>
          <p className="mod-total"><strong>{total}</strong> {total === 1 ? "resposta" : "respostas"}</p>
          <div className="mod-perguntas">
            {PERGUNTAS.map(p => (
              <figure className="mod-pergunta" key={p.id}>
                <figcaption>{p.titulo}</figcaption>
                <ul>
                  {contagem(p.id, p.opcoes).map(o => (
                    <li key={o.valor}>
                      <span className="mod-barra-rotulo">{o.rotulo}</span>
                      <span className="mod-barra" aria-hidden="true"><span style={{ width: `${o.pct}%` }} /></span>
                      <span className="mod-barra-valor">{o.n} ({o.pct}%)</span>
                    </li>
                  ))}
                </ul>
              </figure>
            ))}
            <figure className="mod-pergunta">
              <figcaption>Respostas por unidade</figcaption>
              <ul>
                {unidades.map(([nome, n]) => (
                  <li key={nome}>
                    <span className="mod-barra-rotulo">{nome}</span>
                    <span className="mod-barra" aria-hidden="true"><span style={{ width: `${Math.round((n / total) * 100)}%` }} /></span>
                    <span className="mod-barra-valor">{n}</span>
                  </li>
                ))}
              </ul>
            </figure>
          </div>
          {dados.some(r => r.comentario) && (
            <>
              <h2 className="mod-sub">Sugestões e comentários</h2>
              <ul className="mod-lista">
                {dados.filter(r => r.comentario).map(r => (
                  <li className="mod-cartao" key={r.id}>
                    <p className="mod-meta">
                      <strong>{ROTULOS.perfil[r.perfil] || r.perfil}</strong>
                      {r.unidade && <span>{r.unidade}</span>}
                      <span>{dataLegivel(r.criadoEm)}</span>
                    </p>
                    <p className="mod-texto">{r.comentario}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </section>
  );
}
