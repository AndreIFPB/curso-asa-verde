// Peças usadas em todas as telas do curso.
import { Sair, Voltar } from "./icones.jsx";
import { PARCEIROS } from "./config.js";

export function Marca({ claro }) {
  return (
    <span className={`fm-marca${claro ? " fm-marca--claro" : ""}`}>
      <img src="/logos/simbolo_white.webp" width="676" height="400" alt="" />
      <span>
        <small>Formação</small>
        Asa <em>Verde</em>
      </span>
    </span>
  );
}

export function Topo({ conta, onPainel, onSair, onSite, children }) {
  return (
    <header className="fm-topo">
      <div className="fm-shell fm-topo-in">
        <a
          href="#/"
          className="fm-topo-marca"
          onClick={(e) => {
            if (onPainel) {
              e.preventDefault();
              onPainel();
            }
          }}
          aria-label="Formação Asa Verde, painel"
        >
          <Marca />
        </a>
        <div className="fm-topo-meio">{children}</div>
        <div className="fm-topo-acoes">
          {conta ? (
            <>
              <span className="fm-topo-nome" title={conta.nome}>
                {conta.nome.split(" ")[0]}
              </span>
              <button type="button" className="fm-btn-ic" onClick={onSair} aria-label="Sair da formação" title="Sair">
                <Sair />
              </button>
            </>
          ) : (
            <a className="fm-topo-site" href="/" onClick={onSite}>
              <Voltar width="18" height="18" /> Site do projeto
            </a>
          )}
        </div>
      </div>
    </header>
  );
}

export function Rodape({ texto }) {
  return (
    <footer className="fm-rodape">
      <div className="fm-rodape-parc">
        <div className="fm-shell">
          <p>Realização e parceria</p>
          <ul aria-label="Instituições do projeto">
            {PARCEIROS.map((p) => (
              <li key={p.src}>
                <img src={p.src} alt={p.nome} title={p.nome} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="fm-rodape-base">
        <div className="fm-shell fm-rodape-in">
          <Marca claro />
          {texto && <p>{texto}</p>}
        </div>
      </div>
    </footer>
  );
}
