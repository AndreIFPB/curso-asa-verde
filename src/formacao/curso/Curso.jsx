import { useCallback, useEffect, useRef, useState } from "react";
import "./curso.css";
import { CONFIG, NUCLEO, TRILHAS, MODULOS, minutosModulo } from "./index.js";
import * as P from "./progresso.js";
import { ICONE_TRILHA, Seta, Check, Cadeado, Relogio, Livro, Medalha, Lista, Refazer } from "./icones.jsx";
import { Topo, Rodape } from "./Comum.jsx";
import Licao from "./Licao.jsx";
import Avaliacao from "./Avaliacao.jsx";
import Certificado from "./Certificado.jsx";

// ---------- rotas internas (hash) ----------

function lerRota() {
  const partes = window.location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const [tela, mod, lic] = partes;
  if (tela === "licao" && MODULOS[mod]) return { tela, mod, lic };
  if ((tela === "avaliacao" || tela === "certificado") && MODULOS[mod]) return { tela, mod };
  return { tela: "inicio" };
}

const TITULOS = {
  inicio: "Formação Asa Verde",
  licao: "Lição | Formação Asa Verde",
  avaliacao: "Avaliação | Formação Asa Verde",
  certificado: "Certificado | Formação Asa Verde",
};

// ---------- peças locais ----------

function Anel({ valor, tamanho = 96 }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <svg className="fm-anel" width={tamanho} height={tamanho} viewBox="0 0 100 100" role="img" aria-label={`${valor}% concluído`}>
      <circle cx="50" cy="50" r={r} className="fm-anel-fundo" />
      <circle cx="50" cy="50" r={r} className="fm-anel-valor" strokeDasharray={c} strokeDashoffset={c * (1 - valor / 100)} />
      <text x="50" y="50" textAnchor="middle" dominantBaseline="central">
        {valor}%
      </text>
    </svg>
  );
}

// ---------- entrada ----------

function Entrada({ onEntrar, onSite }) {
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [perfil, setPerfil] = useState("");
  const [erro, setErro] = useState("");
  const nomeRef = useRef(null);
  const formRef = useRef(null);

  const escolher = (id) => {
    setPerfil(id);
    setErro("");
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => nomeRef.current?.focus({ preventScroll: true }), 450);
  };

  const enviar = (e) => {
    e.preventDefault();
    if (nome.trim().split(/\s+/).length < 2) return setErro("Digite o seu nome completo, como deve aparecer no certificado.");
    if (codigo.trim().toLowerCase() !== CONFIG.codigoAcesso.toLowerCase()) return setErro("O código de acesso não confere. Confira com a coordenação do projeto.");
    if (!perfil) return setErro("Escolha a sua função no projeto para abrir a trilha certa.");
    onEntrar(nome, perfil);
  };

  const totalLicoes = NUCLEO.licoes.length + TRILHAS.reduce((s, t) => s + t.licoes.length, 0);

  return (
    <div className="fm-entrada">
      <Topo onSite={onSite} />

      <section className="fm-hero" aria-labelledby="fm-hero-tit">
        <div className="fm-shell fm-hero-in">
          <div className="fm-hero-txt">
            <p className="fm-sobre">Projeto Asa Verde, Santa Rita (PB)</p>
            <h1 id="fm-hero-tit">
              Formação <em>Asa Verde</em>
            </h1>
          </div>
          <div className="fm-hero-lado">
            <p>
              O curso de quem faz o projeto acontecer. Um núcleo comum sobre o Asa Verde e trilhas específicas para multiplicadores, equipes de Mídia e de Planejamento, professores
              orientadores, supervisores e direção das unidades.
            </p>
            <div className="fm-hero-cta">
              <a className="fm-btn fm-btn--cit" href="#entrar" onClick={(e) => (e.preventDefault(), formRef.current?.scrollIntoView({ behavior: "smooth" }))}>
                Entrar na formação <Seta />
              </a>
              <a className="fm-link-claro" href="#trilhas" onClick={(e) => (e.preventDefault(), document.getElementById("trilhas")?.scrollIntoView({ behavior: "smooth" }))}>
                Conhecer as trilhas
              </a>
            </div>
          </div>
        </div>
        <div className="fm-hero-fotos" aria-hidden="true">
          <img src="/img/inf-abraco.webp" width="1050" height="1400" alt="" />
          <img src="/img/edu-oficina.webp" width="1280" height="720" alt="" />
          <img src="/img/arb-plantio.webp" width="1200" height="1600" alt="" />
          <img src="/img/com-radio.webp" width="675" height="1200" alt="" />
        </div>
        <div className="fm-shell">
          <dl className="fm-hero-fatos">
            <div>
              <dt>trilhas por função</dt>
              <dd>{TRILHAS.length}</dd>
            </div>
            <div>
              <dt>lições ilustradas</dt>
              <dd>{totalLicoes}</dd>
            </div>
            <div>
              <dt>unidades nos casos reais</dt>
              <dd>17</dd>
            </div>
            <div>
              <dt>para aprovação</dt>
              <dd>{Math.round(CONFIG.aprovacao * 100)}%</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="fm-sec fm-como" aria-labelledby="fm-como-tit">
        <div className="fm-shell">
          <h2 id="fm-como-tit" className="fm-h2">
            Como funciona
          </h2>
          <ol className="fm-percurso">
            <li>
              <span className="fm-percurso-ic">
                <Livro />
              </span>
              <strong>Núcleo comum</strong>
              <p>Quatro lições sobre a origem, as instituições, o método e os resultados do Asa Verde. Obrigatório para todos.</p>
            </li>
            <li>
              <span className="fm-percurso-ic">
                <Lista />
              </span>
              <strong>Sua trilha</strong>
              <p>Lições específicas para a sua função, com exemplos das 17 unidades, situações práticas e perguntas de revisão.</p>
            </li>
            <li>
              <span className="fm-percurso-ic">
                <Check />
              </span>
              <strong>Avaliações</strong>
              <p>Uma avaliação ao fim do núcleo e outra ao fim da trilha. É preciso acertar {Math.round(CONFIG.aprovacao * 100)}% das questões.</p>
            </li>
            <li>
              <span className="fm-percurso-ic">
                <Medalha />
              </span>
              <strong>Certificado</strong>
              <p>Emitido com o seu nome e a carga horária da trilha, pronto para imprimir ou salvar em PDF.</p>
            </li>
          </ol>
        </div>
      </section>

      <section className="fm-sec fm-trilhas" id="trilhas" aria-labelledby="fm-trilhas-tit">
        <div className="fm-shell">
          <div className="fm-cab">
            <h2 id="fm-trilhas-tit" className="fm-h2">
              Escolha a sua trilha
            </h2>
            <p>Cada pessoa faz o núcleo comum e a trilha da sua função no projeto.</p>
          </div>
          <ul className="fm-cards">
            {TRILHAS.map((t) => {
              const Icone = ICONE_TRILHA[t.id];
              return (
                <li key={t.id} className={perfil === t.id ? "sel" : undefined}>
                  <button type="button" onClick={() => escolher(t.id)} aria-pressed={perfil === t.id}>
                    <span className="fm-card-foto">
                      <img src={t.foto.src} width={t.foto.w} height={t.foto.h} alt="" loading="lazy" />
                      <span className="fm-card-ic">
                        <Icone />
                      </span>
                    </span>
                    <span className="fm-card-txt">
                      <span className="fm-card-pub">{t.publico}</span>
                      <strong>{t.nome}</strong>
                      <span className="fm-card-desc">{t.descricao}</span>
                      <span className="fm-card-meta">
                        <span>
                          <Livro width="16" height="16" /> {NUCLEO.licoes.length + t.licoes.length} lições
                        </span>
                        <span>
                          <Relogio width="16" height="16" /> cerca de {Math.round((minutosModulo(NUCLEO) + minutosModulo(t)) / 5) * 5} min
                        </span>
                      </span>
                      <span className="fm-card-cta">
                        {perfil === t.id ? (
                          <>
                            <Check width="18" height="18" /> Trilha escolhida
                          </>
                        ) : (
                          <>
                            Escolher esta trilha <Seta width="18" height="18" />
                          </>
                        )}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="fm-sec fm-login" id="entrar" ref={formRef} aria-labelledby="fm-login-tit">
        <div className="fm-shell fm-login-in">
          <div className="fm-login-txt">
            <h2 id="fm-login-tit" className="fm-h2">
              Entre na formação
            </h2>
            <p>Use o código fornecido pela coordenação. O seu progresso fica salvo neste navegador: entre sempre com o mesmo nome e no mesmo aparelho para continuar de onde parou.</p>
            <p className="fm-nota">
              Fez a formação de 2026 e precisa reimprimir o certificado? <a href="/formacao/2026">Acesse o curso anterior</a>.
            </p>
          </div>
          <form className="fm-form" onSubmit={enviar} noValidate>
            <label>
              <span>Nome completo</span>
              <input ref={nomeRef} type="text" autoComplete="name" value={nome} onChange={(e) => (setNome(e.target.value), setErro(""))} placeholder="Como deve aparecer no certificado" />
            </label>
            <label>
              <span>Código de acesso</span>
              <input type="text" autoComplete="off" autoCapitalize="none" spellCheck="false" value={codigo} onChange={(e) => (setCodigo(e.target.value), setErro(""))} placeholder="Fornecido pela coordenação" />
            </label>
            <fieldset>
              <legend>Sua função no projeto</legend>
              <div className="fm-perfis">
                {TRILHAS.map((t) => {
                  const Icone = ICONE_TRILHA[t.id];
                  return (
                    <label key={t.id} className={perfil === t.id ? "sel" : undefined}>
                      <input type="radio" name="perfil" value={t.id} checked={perfil === t.id} onChange={() => (setPerfil(t.id), setErro(""))} />
                      <Icone />
                      <span>{t.nome}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
            <div aria-live="assertive">{erro && <p className="fm-erro">{erro}</p>}</div>
            <button type="submit" className="fm-btn fm-btn--escuro fm-btn--largo">
              Entrar na formação <Seta />
            </button>
          </form>
        </div>
      </section>

      <Rodape texto="Uma realização do Ministério Público da Paraíba, da Prefeitura Municipal de Santa Rita, com a SEMMA e a Secretaria de Educação, e do IFPB – Campus Santa Rita, em parceria com a COOREMM." />
    </div>
  );
}

// ---------- painel ----------

function LinhaLicao({ modulo, licao, i, conta, bloqueado, ir }) {
  const feita = P.licaoFeita(conta, licao.id);
  return (
    <li className={`fm-item${feita ? " feito" : ""}${bloqueado ? " bloq" : ""}`}>
      <a
        href={`#/licao/${modulo.id}/${licao.id}`}
        onClick={(e) => {
          e.preventDefault();
          if (!bloqueado) ir(`#/licao/${modulo.id}/${licao.id}`);
        }}
        aria-disabled={bloqueado || undefined}
      >
        <span className="fm-item-n">{feita ? <Check /> : String(i + 1).padStart(2, "0")}</span>
        <span className="fm-item-txt">
          <strong>{licao.titulo}</strong>
          <span>{licao.resumo}</span>
        </span>
        <span className="fm-item-st">{bloqueado ? <Cadeado width="18" height="18" /> : feita ? "Revisar" : "Começar"}</span>
      </a>
    </li>
  );
}

function LinhaAvaliacao({ modulo, conta, bloqueado, ir }) {
  const a = P.avaliacao(conta, modulo.id);
  const lido = P.moduloLido(conta, modulo);
  const restantes = P.tentativasRestantes(conta, modulo.id);
  const travado = bloqueado || !lido;
  let st = "Disponível";
  if (a.aprovado) st = `Aprovado com ${Math.round(a.melhor * 100)}%`;
  else if (bloqueado) st = "";
  else if (!lido) st = "Conclua as lições";
  else if (restantes === 0) st = "Fale com a coordenação";
  else if (a.tentativas) st = `${restantes} tentativa${restantes > 1 ? "s" : ""} restante${restantes > 1 ? "s" : ""}`;
  return (
    <li className={`fm-item fm-item--av${a.aprovado ? " feito" : ""}${travado ? " bloq" : ""}`}>
      <a
        href={`#/avaliacao/${modulo.id}`}
        onClick={(e) => {
          e.preventDefault();
          if (!bloqueado) ir(`#/avaliacao/${modulo.id}`);
        }}
        aria-disabled={bloqueado || undefined}
      >
        <span className="fm-item-n">{a.aprovado ? <Check /> : <Medalha />}</span>
        <span className="fm-item-txt">
          <strong>Avaliação {modulo.id === NUCLEO.id ? "do núcleo comum" : "da trilha"}</strong>
          <span>
            {modulo.avaliacao.length} questões, aprovação com {Math.round(CONFIG.aprovacao * 100)}%
          </span>
        </span>
        <span className="fm-item-st">{bloqueado ? <Cadeado width="18" height="18" /> : st}</span>
      </a>
    </li>
  );
}

function Modulo({ modulo, conta, bloqueado, ir, n }) {
  const feitas = P.licoesFeitas(conta, modulo);
  const Icone = ICONE_TRILHA[modulo.id];
  return (
    <section className={`fm-mod${bloqueado ? " bloq" : ""}`} aria-labelledby={`mod-${modulo.id}`}>
      <header className="fm-mod-cab">
        <span className="fm-mod-n">{n}</span>
        <div>
          <p className="fm-mod-sub">
            <Icone width="18" height="18" /> {modulo.id === NUCLEO.id ? "Núcleo comum" : "Sua trilha"}
          </p>
          <h2 id={`mod-${modulo.id}`}>{modulo.nome}</h2>
          <p className="fm-mod-desc">{modulo.descricao}</p>
        </div>
        <div className="fm-mod-prog">
          <span>
            {feitas} de {modulo.licoes.length} lições
          </span>
          <span className="fm-barra" aria-hidden="true">
            <i style={{ width: `${(feitas / modulo.licoes.length) * 100}%` }} />
          </span>
          <span>cerca de {Math.round(minutosModulo(modulo) / 5) * 5} min</span>
        </div>
      </header>
      {bloqueado && (
        <p className="fm-aviso">
          <Cadeado width="18" height="18" /> A trilha é liberada depois da aprovação na avaliação do núcleo comum.
        </p>
      )}
      <ol className="fm-itens">
        {modulo.licoes.map((l, i) => (
          <LinhaLicao key={l.id} modulo={modulo} licao={l} i={i} conta={conta} bloqueado={bloqueado} ir={ir} />
        ))}
        <LinhaAvaliacao modulo={modulo} conta={conta} bloqueado={bloqueado} ir={ir} />
      </ol>
    </section>
  );
}

function Painel({ conta, setConta, ir, onSair }) {
  const trilha = MODULOS[conta.perfil];
  const prox = P.proximoPasso(conta);
  const pct = P.percentual(conta);
  const liberada = P.trilhaLiberada(conta);
  const cert = P.certificadoLiberado(conta, trilha.id);
  const [trocando, setTrocando] = useState(false);
  const IconeT = ICONE_TRILHA[trilha.id];

  const continuar = () => {
    if (!prox) return;
    if (prox.tipo === "licao") ir(`#/licao/${prox.modulo.id}/${prox.licao.id}`);
    if (prox.tipo === "avaliacao") ir(`#/avaliacao/${prox.modulo.id}`);
    if (prox.tipo === "certificado") ir(`#/certificado/${prox.modulo.id}`);
  };

  const rotuloProx = !prox
    ? null
    : prox.tipo === "licao"
      ? { sobre: prox.modulo.id === NUCLEO.id ? "Núcleo comum" : prox.modulo.nome, titulo: prox.licao.titulo, acao: P.licoesFeitas(conta, NUCLEO) + P.licoesFeitas(conta, trilha) === 0 ? "Começar" : "Continuar" }
      : prox.tipo === "avaliacao"
        ? { sobre: prox.modulo.id === NUCLEO.id ? "Núcleo comum" : prox.modulo.nome, titulo: "Avaliação", acao: "Fazer a avaliação" }
        : { sobre: trilha.nome, titulo: "Certificado disponível", acao: "Ver o certificado" };

  const trocar = (id) => {
    setConta(P.salvarConta({ ...conta, perfil: id }));
    setTrocando(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fm-app">
      <Topo conta={conta} onPainel={() => ir("#/")} onSair={onSair} />
      <section className="fm-boas" aria-labelledby="fm-ola">
        <div className="fm-shell fm-boas-in">
          <div>
            <p className="fm-sobre">
              <IconeT width="18" height="18" /> Trilha: {trilha.nome}
            </p>
            <h1 id="fm-ola">Olá, {conta.nome.split(" ")[0]}.</h1>
            <p className="fm-boas-txt">
              {pct === 0
                ? "Comece pelo núcleo comum. Depois da avaliação do núcleo, a sua trilha é liberada."
                : pct === 100
                  ? "Você concluiu a formação. O seu certificado está disponível."
                  : "O seu progresso fica salvo neste navegador. Continue de onde parou."}
            </p>
          </div>
          <div className="fm-boas-lado">
            <Anel valor={pct} />
            {rotuloProx && (
              <button type="button" className="fm-proximo" onClick={continuar}>
                <span className="fm-proximo-sobre">{rotuloProx.sobre}</span>
                <strong>{rotuloProx.titulo}</strong>
                <span className="fm-proximo-acao">
                  {rotuloProx.acao} <Seta width="18" height="18" />
                </span>
              </button>
            )}
          </div>
        </div>
        <div className="fm-shell">
          <ol className="fm-etapas" aria-label="Etapas da formação">
            <li className={P.aprovado(conta, NUCLEO.id) ? "feito" : "atual"}>
              <span>{P.aprovado(conta, NUCLEO.id) ? <Check width="16" height="16" /> : "1"}</span> Núcleo comum
            </li>
            <li className={P.aprovado(conta, trilha.id) ? "feito" : liberada ? "atual" : ""}>
              <span>{P.aprovado(conta, trilha.id) ? <Check width="16" height="16" /> : "2"}</span> {trilha.nome}
            </li>
            <li className={cert ? "feito" : ""}>
              <span>{cert ? <Check width="16" height="16" /> : "3"}</span> Certificado
            </li>
          </ol>
        </div>
      </section>

      <main className="fm-shell fm-painel">
        <Modulo modulo={NUCLEO} conta={conta} ir={ir} n="1" />
        <Modulo modulo={trilha} conta={conta} ir={ir} bloqueado={!liberada} n="2" />

        <section className={`fm-cert-card${cert ? " ok" : ""}`} aria-labelledby="fm-cert-tit">
          <span className="fm-mod-n">3</span>
          <div>
            <h2 id="fm-cert-tit">Certificado</h2>
            <p>
              {cert
                ? `Parabéns. O certificado da trilha ${trilha.nome}, com ${trilha.horas} horas, está pronto para imprimir ou salvar em PDF.`
                : `Disponível após a aprovação nas avaliações do núcleo comum e da trilha ${trilha.nome}. Carga horária: ${trilha.horas} horas.`}
            </p>
          </div>
          {cert ? (
            <button type="button" className="fm-btn fm-btn--escuro" onClick={() => ir(`#/certificado/${trilha.id}`)}>
              <Medalha /> Ver o certificado
            </button>
          ) : (
            <span className="fm-cert-lock">
              <Cadeado /> Bloqueado
            </span>
          )}
        </section>

        <section className="fm-outras" aria-labelledby="fm-outras-tit">
          <div className="fm-outras-cab">
            <div>
              <h2 id="fm-outras-tit">Outras trilhas</h2>
              <p>Se a sua função no projeto mudou, troque de trilha. O progresso de cada uma fica guardado.</p>
            </div>
            <button type="button" className="fm-btn fm-btn--linha" onClick={() => setTrocando((v) => !v)} aria-expanded={trocando}>
              <Refazer /> {trocando ? "Cancelar" : "Trocar de trilha"}
            </button>
          </div>
          {trocando && (
            <ul className="fm-outras-lista">
              {TRILHAS.filter((t) => t.id !== trilha.id).map((t) => {
                const Ic = ICONE_TRILHA[t.id];
                const feitoT = P.aprovado(conta, t.id);
                return (
                  <li key={t.id}>
                    <button type="button" onClick={() => trocar(t.id)}>
                      <Ic />
                      <span>
                        <strong>{t.nome}</strong>
                        <span>{feitoT ? "Concluída" : t.publico}</span>
                      </span>
                      <Seta width="18" height="18" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </main>

      <Rodape texto="Dúvidas sobre a formação: fale com o professor orientador ou com a coordenação do projeto." />
    </div>
  );
}

// ---------- aplicação ----------

export default function Curso({ navigate }) {
  const [conta, setConta] = useState(() => P.carregarSessao());
  const [rota, setRota] = useState(lerRota);

  useEffect(() => {
    const onHash = () => {
      setRota(lerRota());
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    document.title = TITULOS[conta ? rota.tela : "inicio"] || TITULOS.inicio;
  }, [rota, conta]);

  const ir = useCallback((hash) => {
    if (window.location.hash === hash) {
      setRota(lerRota());
      window.scrollTo(0, 0);
    } else {
      window.location.hash = hash;
    }
  }, []);

  const onSite = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    navigate("/");
  };

  const onEntrar = (nome, perfil) => {
    setConta(P.entrar(nome, perfil));
    ir("#/");
  };

  const onSair = () => {
    P.sair();
    setConta(null);
    ir("#/");
  };

  const comum = { conta, setConta, ir, onSair };
  let tela;
  if (!conta) tela = <Entrada onEntrar={onEntrar} onSite={onSite} />;
  else if (rota.tela === "licao") tela = <Licao key={`${rota.mod}-${rota.lic}`} {...comum} moduloId={rota.mod} licaoId={rota.lic} />;
  else if (rota.tela === "avaliacao") tela = <Avaliacao key={rota.mod} {...comum} moduloId={rota.mod} />;
  else if (rota.tela === "certificado") tela = <Certificado {...comum} moduloId={rota.mod} />;
  else tela = <Painel {...comum} />;

  return <div className="fm">{tela}</div>;
}

