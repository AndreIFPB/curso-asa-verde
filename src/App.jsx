import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import Site from "./site/Site.jsx";

// A plataforma de formação só é carregada quando alguém abre /formacao.
const FormacaoPage = lazy(() => import("./formacao/FormacaoPage.jsx"));

const TITULOS = {
  site: "Projeto Asa Verde | Educação ambiental nas escolas de Santa Rita – PB",
  formacao: "Formação dos multiplicadores | Projeto Asa Verde",
};

function rotaAtual() {
  const caminho = window.location.pathname.replace(/\/+$/, "") || "/";
  if (caminho === "/formacao" || caminho === "/treinamento" || caminho === "/curso") return "formacao";
  return "site";
}

export default function App() {
  const [rota, setRota] = useState(() => {
    // Endereços antigos no formato /#/formacao continuam funcionando.
    if (window.location.hash.startsWith("#/formacao")) {
      window.history.replaceState({}, "", "/formacao");
    }
    return rotaAtual();
  });

  useEffect(() => {
    const onPop = () => setRota(rotaAtual());
    const onHash = () => {
      if (window.location.hash.startsWith("#/formacao")) {
        window.history.replaceState({}, "", "/formacao");
        setRota("formacao");
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onHash);
    return () => {
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  useEffect(() => {
    document.title = TITULOS[rota];
  }, [rota]);

  const navigate = useCallback((destino) => {
    window.history.pushState({}, "", destino);
    setRota(rotaAtual());
    window.scrollTo(0, 0);
  }, []);

  if (rota === "formacao") {
    return (
      <Suspense fallback={<div style={{ padding: "4rem", textAlign: "center", fontFamily: "system-ui" }}>Carregando a formação…</div>}>
        <FormacaoPage navigate={navigate} />
      </Suspense>
    );
  }

  return <Site navigate={navigate} />;
}
