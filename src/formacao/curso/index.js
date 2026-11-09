import { CONFIG } from "./config.js";
import { NUCLEO } from "./nucleo.js";
import { MULTIPLICADOR } from "./multiplicador.js";
import { MIDIA } from "./midia.js";
import { PLANEJAMENTO } from "./planejamento.js";
import { ORIENTADORES, SUPERVISORES, DIRECAO } from "./gestores.js";

export { CONFIG, NUCLEO };

// Ordem em que as trilhas aparecem na escolha de perfil.
export const TRILHAS = [MULTIPLICADOR, MIDIA, PLANEJAMENTO, ORIENTADORES, SUPERVISORES, DIRECAO];

export const MODULOS = { [NUCLEO.id]: NUCLEO, ...Object.fromEntries(TRILHAS.map((t) => [t.id, t])) };

// Percurso aberto a qualquer pessoa: só o núcleo comum, sem código de acesso.
// Não é um módulo: quem escolhe este perfil faz o NUCLEO e recebe um certificado próprio.
export const COMUNIDADE = {
  id: "comunidade",
  nome: "Conhecer o projeto",
  publico: "Aberto a qualquer pessoa interessada",
  descricao:
    "Para familiares, estudantes, professores de outras escolas, pesquisadores e demais interessados. Você faz as lições do núcleo comum, conhece o Asa Verde por dentro e recebe um certificado de conclusão.",
  horas: CONFIG.horasComunidade,
  foto: { src: "/img/gal-ciranda.webp", w: 1600, h: 922, alt: "Ciranda de crianças e estagiários no pátio" },
};

// Dados de exibição do perfil da pessoa (trilha de função ou percurso aberto).
export const perfilDe = (id) => (id === COMUNIDADE.id ? COMUNIDADE : MODULOS[id] && id !== NUCLEO.id ? MODULOS[id] : null);

// Posições dos marcadores no mapa (% da imagem /img/mapa.webp).
export const UNIDADES = [
  { n: "01", nome: "EMEF e EJA Aníbal Limeira", bairro: "Jardim Europa", tipo: "escola", x: 47.65, y: 47.79 },
  { n: "02", nome: "EMEIF e EJA Dr. Antônio Pereira de Almeida", bairro: "Marcos Moura", tipo: "escola", x: 37.02, y: 80.77 },
  { n: "03", nome: "EMEF Prof. Carlos Arnóbio Maroja Di Pace", bairro: "Várzea Nova", tipo: "escola", x: 64.22, y: 19.23 },
  { n: "04", nome: "EMEF Emília Cavalcante de Morais Neta", bairro: "Lerolândia", tipo: "escola", x: 12.9, y: 11.54 },
  { n: "05", nome: "EMEF Estevão José Carneiro da Cunha", bairro: "Várzea Nova", tipo: "escola", x: 75.95, y: 21.35 },
  { n: "06", nome: "EMEF Índio Piragibe", bairro: "Popular", tipo: "escola", x: 27.64, y: 37.31 },
  { n: "07", nome: "EMEF Jaime Lacet", bairro: "Popular", tipo: "escola", x: 38.64, y: 33.94 },
  { n: "08", nome: "EMEF e EJA Monsenhor Rafael de Barros", bairro: "Liberdade", tipo: "escola", x: 43.48, y: 14.04 },
  { n: "09", nome: "EMEF Odilon Ribeiro Coutinho", bairro: "Tibiri II", tipo: "escola", x: 50.95, y: 71.25 },
  { n: "10", nome: "EMEIF e EJA Dr. Flávio Maroja Filho", bairro: "Tibiri II", tipo: "escola", x: 37.61, y: 68.46 },
  { n: "11", nome: "CIEI Elias Heckmans", bairro: "Popular", tipo: "ciei", x: 54.47, y: 31.83 },
  { n: "12", nome: "CIEI Heitel Santiago", bairro: "Várzea Nova", tipo: "ciei", x: 80.57, y: 33.56 },
  { n: "13", nome: "EMEIF Tiradentes", bairro: "Várzea Nova", tipo: "ciei", x: 55.5, y: 43.75 },
  { n: "14", nome: "CIEI Lourdes Serejo", bairro: "Heitel Santiago", tipo: "ciei", x: 67.82, y: 85.29 },
  { n: "15", nome: "CIEI Maria Carmelita Maroja Pedroza", bairro: "Tibiri II", tipo: "ciei", x: 57.04, y: 68.65 },
  { n: "16", nome: "CIEI Carmelita Maroja (Anexo)", bairro: "Tibiri II", tipo: "ciei", x: 58.8, y: 58.85 },
  { n: "17", nome: "CIEI Nenzinha Ribeiro", bairro: "Popular", tipo: "ciei", x: 41.28, y: 47.79 },
];

// Tempo estimado de leitura de uma lição, contando todo o texto dos blocos.
function textoDe(valor) {
  if (typeof valor === "string") return valor + " ";
  if (Array.isArray(valor)) return valor.map(textoDe).join("");
  if (valor && typeof valor === "object") return Object.values(valor).map(textoDe).join("");
  return "";
}

export function minutos(licao) {
  const palavras = textoDe(licao.blocos).split(/\s+/).filter(Boolean).length;
  const interativos = licao.blocos.filter((b) => ["check", "cenario", "abas", "mapa"].includes(b.t)).length;
  return Math.max(4, Math.round(palavras / 170 + interativos * 0.8));
}

export function minutosModulo(modulo) {
  return modulo.licoes.reduce((s, l) => s + minutos(l), 0) + Math.round(modulo.avaliacao.length * 0.8);
}
