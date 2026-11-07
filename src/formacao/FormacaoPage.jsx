import { useEffect } from "react";
import "./legacy.css";
import Formacao from "./Formacao.jsx";

// Plataforma de formação dos multiplicadores (curso original, sem alterações),
// com uma faixa discreta para voltar ao site do projeto.
export default function FormacaoPage({ navigate }) {
  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("legacy-mode");
    return () => html.classList.remove("legacy-mode");
  }, []);

  const voltar = (e) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <div className="formacao-voltar">
        <a href="/" onClick={voltar}>
          <img src="/logos/simbolo_white.webp" width="676" height="400" alt="" />
          Voltar ao site do Projeto Asa Verde
        </a>
        <span>Formação dos multiplicadores ambientais</span>
      </div>
      <Formacao />
    </>
  );
}
