import { useEffect, useState, useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import {
  EVENTO_PREFERENCIAS,
  assinarEndereco,
  caminhoAtual,
  carregarClarity,
  clarityAtivo,
  coletaClarityAtiva,
  eventoDoClique,
  gravarEscolha,
  lerEscolha,
  limparEvento,
  recusarClarity,
  registrarEvento,
} from "./analytics.js";
import "./analytics.css";

/** Contagem de acessos (Vercel) em todas as rotas e aviso de cookies do Clarity no site. */
export function Medicao({ rota }) {
  const caminho = useSyncExternalStore(assinarEndereco, caminhoAtual, () => "/");
  const [escolha, setEscolha] = useState(lerEscolha);
  const [reaberto, setReaberto] = useState(false);

  useEffect(() => {
    if (escolha === "aceito") carregarClarity();
  }, [escolha]);

  useEffect(() => {
    // Etiqueta cada visualização com a página, para filtrar mapas de calor no Clarity.
    if (coletaClarityAtiva()) window.clarity("set", "pagina", caminho);
  }, [caminho, escolha]);

  useEffect(() => {
    const reabrir = () => setReaberto(true);
    const aoClicar = (evento) => {
      const nome = eventoDoClique(evento.target);
      if (nome) registrarEvento(nome);
    };
    window.addEventListener(EVENTO_PREFERENCIAS, reabrir);
    document.addEventListener("click", aoClicar, true);
    return () => {
      window.removeEventListener(EVENTO_PREFERENCIAS, reabrir);
      document.removeEventListener("click", aoClicar, true);
    };
  }, []);

  function decidir(valor) {
    gravarEscolha(valor);
    setEscolha(valor);
    setReaberto(false);
    if (valor === "recusado") recusarClarity();
  }

  const mostrarAviso = clarityAtivo && rota === "site" && (reaberto || !escolha);

  return (
    <>
      <Analytics route={caminho} path={caminho} beforeSend={limparEvento}
        mode={import.meta.env.DEV ? "development" : "production"} />
      {mostrarAviso && <AvisoCookies escolha={escolha} onDecidir={decidir} />}
    </>
  );
}

function AvisoCookies({ escolha, onDecidir }) {
  return (
    <section className="aviso-cookies" role="region" aria-labelledby="aviso-cookies-tit">
      <h2 id="aviso-cookies-tit">Cookies de análise</h2>
      <p>
        Com a sua permissão, usamos o Microsoft Clarity para entender como o site é usado: onde as pessoas clicam e até
        onde rolam a página. Não registramos o que você digita. A contagem de visitas, feita pelo Vercel, não usa cookies.
      </p>
      <p className="aviso-cookies-link">
        <a href="https://privacy.microsoft.com/pt-br/privacystatement" target="_blank" rel="noopener noreferrer">
          Política de privacidade da Microsoft
        </a>
        {escolha && <span>Escolha atual: {escolha === "aceito" ? "aceito" : "recusado"}</span>}
      </p>
      <div className="aviso-cookies-acoes">
        <button type="button" onClick={() => onDecidir("recusado")}>Recusar</button>
        <button type="button" className="aceitar" onClick={() => onDecidir("aceito")}>Aceitar</button>
      </div>
    </section>
  );
}
