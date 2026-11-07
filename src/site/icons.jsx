// Ícones em linha, traço único, herdando a cor do texto.
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

export const IconDownload = (p) => (
  <svg {...base} {...p}>
    <path d="M12 4v11" />
    <path d="m7 10 5 5 5-5" />
    <path d="M5 20h14" />
  </svg>
);

export const IconExternal = (p) => (
  <svg {...base} {...p}>
    <path d="M14 5h5v5" />
    <path d="M19 5 10 14" />
    <path d="M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4" />
  </svg>
);

export const IconChart = (p) => (
  <svg {...base} {...p}>
    <path d="M4 20V10" />
    <path d="M10 20V4" />
    <path d="M16 20v-7" />
    <path d="M21 20H3" />
  </svg>
);

export const IconClipboard = (p) => (
  <svg {...base} {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4.5h6V7H9z" />
    <path d="M9 12h6M9 16h4" />
  </svg>
);

export const IconInstagram = (p) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
  </svg>
);

export const IconCap = (p) => (
  <svg {...base} {...p}>
    <path d="m2.5 9 9.5-5 9.5 5-9.5 5z" />
    <path d="M6.5 11.2V16c1.5 1.6 3.4 2.4 5.5 2.4s4-.8 5.5-2.4v-4.8" />
    <path d="M21.5 9v5.5" />
  </svg>
);

export const IconMenu = (p) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconPrev = (p) => (
  <svg {...base} {...p}>
    <path d="m15 5-7 7 7 7" />
  </svg>
);

export const IconNext = (p) => (
  <svg {...base} {...p}>
    <path d="m9 5 7 7-7 7" />
  </svg>
);

export const IconArrow = (p) => (
  <svg {...base} {...p}><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
);

const fieldShapes = {
  pin: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.4" /></>,
  school: <><path d="m3 10 9-7 9 7M5 9v11h14V9M9.5 20v-5h5v5M3 20h18" /><circle cx="12" cy="9.5" r="1.5" /></>,
  people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" /></>,
  book: <><path d="M12 6c-3-2-6-2-9-1v14c3-1 6-1 9 1 3-2 6-2 9-1V5c-3-1-6-1-9 1Zm0 0v14M6 9l3 1m6 0 3-1" /></>,
  plant: <><path d="M12 21v-7c0-6 3-10 9-11 0 6-2 11-9 11Zm0 3C6 17 3 13 3 7c5 0 8 3 9 7M7 21h10" /></>,
};

export function FieldIcon({ type }) {
  return <svg {...base}>{fieldShapes[type]}</svg>;
}
