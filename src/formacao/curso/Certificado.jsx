import { useEffect } from "react";
import { CONFIG, NUCLEO, MODULOS, COMUNIDADE } from "./index.js";
import * as P from "./progresso.js";
import { Topo } from "./Comum.jsx";
import { PARCEIROS } from "./config.js";
import { Imprimir, Voltar, Cadeado, Seta } from "./icones.jsx";

const dataLonga = (iso) => new Date(iso).toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" });

export default function Certificado({ conta, ir, onSair, moduloId }) {
  const trilha = MODULOS[moduloId];
  // O certificado do núcleo comum é o do percurso "Conhecer o projeto", aberto à comunidade.
  const aberto = moduloId === NUCLEO.id;
  const liberado = Boolean(trilha) && P.certificadoLiberado(conta, trilha.id);

  useEffect(() => {
    if (!liberado) return;
    document.documentElement.classList.add("fm-imprime-cert");
    return () => document.documentElement.classList.remove("fm-imprime-cert");
  }, [liberado]);

  if (!liberado) {
    return (
      <div className="fm-app">
        <Topo conta={conta} onPainel={() => ir("#/")} onSair={onSair} />
        <main className="fm-shell fm-bloqueio">
          <Cadeado width="40" height="40" />
          <h1>Certificado ainda não disponível</h1>
          <p>O certificado é emitido depois da aprovação nas avaliações do seu percurso.</p>
          <button type="button" className="fm-btn fm-btn--escuro" onClick={() => ir("#/")}>
            Voltar ao painel <Seta />
          </button>
        </main>
      </div>
    );
  }

  const avTrilha = P.avaliacao(conta, trilha.id);
  const avNucleo = P.avaliacao(conta, NUCLEO.id);
  const data = avTrilha.data || new Date().toISOString();
  const codigo = P.codigoCertificado(conta.nome, trilha.id, data);
  const media = Math.round((aberto ? avNucleo.melhor : (avTrilha.melhor + avNucleo.melhor) / 2) * 100);
  const nomePercurso = aberto ? COMUNIDADE.nome : trilha.nome;
  const horas = aberto ? COMUNIDADE.horas : trilha.horas;
  const tipo = aberto ? "percurso" : "trilha";

  return (
    <div className="fm-app fm-app--cert">
      <Topo conta={conta} onPainel={() => ir("#/")} onSair={onSair} />

      <header className="fm-cert-cab fm-noprint">
        <div className="fm-shell fm-cert-cab-in">
          <div>
            <a
              className="fm-link-sutil"
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                ir("#/");
              }}
            >
              <Voltar width="18" height="18" /> Painel
            </a>
            <h1>Seu certificado</h1>
            <p>
              Para salvar em PDF, escolha <strong>Imprimir</strong> e, no destino, <strong>Salvar como PDF</strong>. A segunda página traz o conteúdo programático.
            </p>
          </div>
          <button type="button" className="fm-btn fm-btn--escuro" onClick={() => window.print()}>
            <Imprimir /> Imprimir ou salvar em PDF
          </button>
        </div>
      </header>

      <main className="fm-shell fm-cert-palco">
        <article className="fm-folha fm-folha--frente" aria-label="Certificado, frente">
          <div className="fm-folha-faixa">
            <img className="fm-folha-logo" src="/logos/asaverde_white.webp" width="692" height="400" alt="Projeto Asa Verde" />
            <div className="fm-folha-trilha">
              <span>Formação Asa Verde {new Date(data).getFullYear()}</span>
              <strong>{nomePercurso}</strong>
            </div>
            <dl className="fm-folha-dados">
              <div>
                <dt>Carga horária</dt>
                <dd>{horas} horas</dd>
              </div>
              <div>
                <dt>Aproveitamento</dt>
                <dd>{media}%</dd>
              </div>
              <div>
                <dt>Código de verificação</dt>
                <dd>{codigo}</dd>
              </div>
            </dl>
          </div>

          <div className="fm-folha-corpo">
            <h2 className="fm-folha-tit">Certificado</h2>
            <p className="fm-folha-txt">Certificamos que</p>
            <p className="fm-folha-nome">{conta.nome}</p>
            {aberto ? (
              <p className="fm-folha-txt">
                concluiu o percurso <strong>Conhecer o projeto</strong> da <strong>Formação Asa Verde</strong>, com as lições do núcleo comum sobre a origem, as instituições, o método
                e os resultados do Projeto Asa Verde, com aprovação na avaliação e carga horária de <strong>{horas} horas</strong>.
              </p>
            ) : (
              <p className="fm-folha-txt">
                concluiu a <strong>Formação Asa Verde</strong>, trilha <strong>{trilha.nome}</strong>, composta pelo núcleo comum sobre o projeto e pelas lições específicas da sua
                função, com aprovação nas avaliações e carga horária de <strong>{horas} horas</strong>.
              </p>
            )}
            <p className="fm-folha-local">Santa Rita (PB), {dataLonga(data)}.</p>

            <div className="fm-folha-ass">
              {CONFIG.assinaturas.map((a) => (
                <div key={a.nome}>
                  <strong>{a.nome}</strong>
                  <span>{a.cargo}</span>
                </div>
              ))}
            </div>

            <ul className="fm-folha-parc" aria-label="Instituições do projeto">
              {PARCEIROS.map((p) => (
                <li key={p.src}>
                  <img src={p.src} alt={p.nome} />
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="fm-folha fm-folha--verso" aria-label="Certificado, verso: conteúdo programático">
          <div className="fm-verso-cab">
            <h2>Conteúdo programático</h2>
            <p>
              {conta.nome}, {tipo} {nomePercurso}, {horas} horas. Código {codigo}.
            </p>
          </div>
          <div className="fm-verso-cols">
            {(aberto ? [NUCLEO] : [NUCLEO, trilha]).map((m) => (
              <section key={m.id}>
                <h3>{m.id === NUCLEO.id ? "Núcleo comum: O Asa Verde" : `Trilha: ${m.nome}`}</h3>
                <ol>
                  {m.licoes.map((l) => (
                    <li key={l.id}>
                      <strong>{l.titulo}</strong>
                      <span>{l.resumo}</span>
                    </li>
                  ))}
                </ol>
                <p className="fm-verso-av">
                  Avaliação: {Math.round(P.avaliacao(conta, m.id).melhor * 100)}% de acertos ({m.avaliacao.length} questões).
                </p>
              </section>
            ))}
            {aberto && (
              <section>
                <h3>Sobre o Projeto Asa Verde</h3>
                <p className="fm-verso-sobre">
                  O Projeto Asa Verde leva a educação ambiental às escolas públicas de Santa Rita (PB) por meio de estudantes do IFPB que atuam como multiplicadores ambientais. Em
                  2026, atendeu 17 unidades educacionais, com 104 multiplicadores, 3.194 ações registradas e 41.506 participações de estudantes e crianças.
                </p>
              </section>
            )}
          </div>
          <p className="fm-verso-rodape">
            A Formação Asa Verde é oferecida pelo Projeto Asa Verde, iniciativa do Ministério Público da Paraíba com a Prefeitura Municipal de Santa Rita, por meio da Secretaria
            Municipal de Meio Ambiente (SEMMA) e da Secretaria Municipal de Educação, executada pelo IFPB – Campus Santa Rita, em parceria com a COOREMM, Cooperativa de Trabalho dos Catadores e Catadoras de Reciclagem de Marcos Moura.
          </p>
        </article>
      </main>

      <section className="fm-shell fm-cert-resumo fm-noprint" aria-label="Dados do certificado">
        <dl>
          <div>
            <dt>Nome</dt>
            <dd>{conta.nome}</dd>
          </div>
          <div>
            <dt>{aberto ? "Percurso" : "Trilha"}</dt>
            <dd>{nomePercurso}</dd>
          </div>
          <div>
            <dt>Carga horária</dt>
            <dd>{horas} horas</dd>
          </div>
          <div>
            <dt>Concluído em</dt>
            <dd>{dataLonga(data)}</dd>
          </div>
          <div>
            <dt>Código</dt>
            <dd>{codigo}</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
