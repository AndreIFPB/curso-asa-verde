/* eslint-disable react-refresh/only-export-components -- arquivo só de ícones gerados por uma função */
// Ícones de traço único que herdam a cor do texto.
const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  focusable: "false",
};

const I = (paths) => {
  const Icone = (p) => (
    <svg {...base} {...p}>
      {paths}
    </svg>
  );
  return Icone;
};

export const Seta = I(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>);
export const Voltar = I(<><path d="M19 12H5" /><path d="m11 6-6 6 6 6" /></>);
export const Anterior = I(<path d="m15 5-7 7 7 7" />);
export const Proximo = I(<path d="m9 5 7 7-7 7" />);
export const Check = I(<path d="m5 12.5 4.2 4.2L19 7" />);
export const Cadeado = I(<><rect x="5" y="10.5" width="14" height="10" rx="2" /><path d="M8 10.5V7.5a4 4 0 0 1 8 0v3" /></>);
export const Relogio = I(<><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>);
export const Livro = I(<><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z" /><path d="M4 20.5A2.5 2.5 0 0 1 6.5 18H20v3H6.5A2.5 2.5 0 0 1 4 20.5z" /></>);
export const Medalha = I(<><circle cx="12" cy="9" r="5.5" /><path d="m8.5 13.5-1.5 7.5 5-2.5 5 2.5-1.5-7.5" /></>);
export const Lista = I(<><path d="M9 6h11M9 12h11M9 18h11" /><path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2" /></>);
export const Imprimir = I(<><path d="M7 9V3.5h10V9" /><rect x="3.5" y="9" width="17" height="8" rx="1.5" /><path d="M7 14h10v6.5H7z" /></>);
export const Download = I(<><path d="M12 4v11" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></>);
export const Externo = I(<><path d="M14 5h5v5" /><path d="M19 5 10 14" /><path d="M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" /></>);
export const Grafico = I(<><path d="M4 20V10" /><path d="M10 20V4" /><path d="M16 20v-7" /><path d="M21 20H3" /></>);
export const Prancheta = I(<><rect x="5" y="4" width="14" height="17" rx="2" /><path d="M9 4.5h6V7H9z" /><path d="M9 12h6M9 16h4" /></>);
export const Capelo = I(<><path d="m2.5 9 9.5-5 9.5 5-9.5 5z" /><path d="M6.5 11.2V16c1.5 1.6 3.4 2.4 5.5 2.4s4-.8 5.5-2.4v-4.8" /><path d="M21.5 9v5.5" /></>);
export const Menu = I(<path d="M4 7h16M4 12h16M4 17h16" />);
export const Fechar = I(<path d="M6 6l12 12M18 6 6 18" />);
export const Sair = I(<><path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" /><path d="M10 17l5-5-5-5" /><path d="M15 12H4" /></>);
export const Lampada = I(<><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.3 1 2.1h5c0-.8.4-1.6 1-2.1A6 6 0 0 0 12 3z" /></>);
export const Alerta = I(<><path d="M12 4 2.5 20h19z" /><path d="M12 10v4.5M12 17.5v.01" /></>);
export const Balanca = I(<><path d="M12 4v16M7 20h10" /><path d="M5 8h14" /><path d="m5 8-2.5 6a3 3 0 0 0 5 0zM19 8l-2.5 6a3 3 0 0 0 5 0z" /></>);
export const Folha = I(<><path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z" /><path d="M5 19 13 11" /></>);
export const Pessoas = I(<><circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><circle cx="17" cy="9" r="2.5" /><path d="M15.5 14.2A4.5 4.5 0 0 1 21 18.5" /></>);
export const Camera = I(<><path d="M4 8h3l1.5-2.5h7L17 8h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>);
export const Escola = I(<><path d="M3 10 12 5l9 5" /><path d="M5 10v9h14v-9" /><path d="M10 19v-5h4v5" /></>);
export const Bussola = I(<><circle cx="12" cy="12" r="8.5" /><path d="m15.5 8.5-2 5-5 2 2-5z" /></>);
export const Refazer = I(<><path d="M4 12a8 8 0 1 0 2.3-5.6" /><path d="M4 4v4h4" /></>);
export const Pino = I(<><path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11z" /><circle cx="12" cy="10" r="2.3" /></>);

// Ícone de cada trilha.
export const Globo = I(<><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3c2.6 2.5 3.9 5.5 3.9 9s-1.3 6.5-3.9 9c-2.6-2.5-3.9-5.5-3.9-9S9.4 5.5 12 3z" /></>);

export const ICONE_TRILHA = {
  nucleo: Folha,
  multiplicador: Pessoas,
  midia: Camera,
  planejamento: Grafico,
  orientadores: Bussola,
  supervisores: Escola,
  direcao: Balanca,
  comunidade: Globo,
};
