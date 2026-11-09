import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import Site from "./site/Site.jsx";

// A formação só é carregada quando alguém abre /formacao.
// /formacao abre o curso atual; /formacao/2026 mantém o curso anterior
// para quem precisa reimprimir o certificado emitido nele.
const Curso = lazy(() => import("./formacao/curso/Curso.jsx"));
const FormacaoPage = lazy(() => import("./formacao/FormacaoPage.jsx"));

const TITULOS = {
  site: "Projeto Asa Verde | Educação ambiental nas escolas de Santa Rita – PB",
  formacao: "Formação Asa Verde | Projeto Asa Verde",
  "formacao-2026": "Formação dos multiplicadores 2026 | Projeto Asa Verde",
};

function rotaAtual() {
  const caminho = window.location.pathname.replace(/\/+$/, "") || "/";
  if (caminho === "/formacao/2026") return "formacao-2026";
  if (caminho === "/formacao" || caminho === "/treinamento" || caminho === "/curso") return "formacao";
  return "site";
}

const carregando = (
  <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#faf8ef", color: "#112f27", fontFamily: '"Segoe UI", Arial, sans-serif' }}>
    Carregando a formação…
  </div>
);

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
    // O curso atual define o próprio título conforme a tela aberta.
    if (rota !== "formacao") document.title = TITULOS[rota];
  }, [rota]);

  const navigate = useCallback((destino) => {
    window.history.pushState({}, "", destino);
    setRota(rotaAtual());
    window.scrollTo(0, 0);
  }, []);

  if (rota === "formacao") {
    return (
      <Suspense fallback={carregando}>
        <Curso navigate={navigate} />
      </Suspense>
    );
  }

  if (rota === "formacao-2026") {
    return (
      <Suspense fallback={carregando}>
        <FormacaoPage navigate={navigate} />
      </Suspense>
    );
  }

  return <Site navigate={navigate} />;
}
