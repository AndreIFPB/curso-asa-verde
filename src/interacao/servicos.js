/**
 * Interação do público com o site (Firebase, projeto site-asa-verde).
 *
 * - Depoimentos: o visitante envia; só aparecem em Vozes depois de aprovados na moderação.
 * - "Esta página foi útil?": um voto por visitante em cada página, com comentário opcional.
 * - Pesquisa de percepção: uma resposta por visitante.
 *
 * O SDK do Firebase só é baixado quando alguém interage (ou abre Vozes), para não pesar
 * no carregamento do site. Visitantes entram com login anônimo; as regras do Firestore
 * (arquivo firestore.rules) validam cada campo e impedem leituras indevidas.
 */
import { CAPITULOS } from "../site/data.js";
import { ACERVO } from "../site/galeria.js";

// A configuração web do Firebase é pública por natureza; a proteção está nas regras do Firestore.
const CONFIG = {
  apiKey: "AIzaSyDnBEHO_Y7WezwW_AunTnYDAqJx1s0vC84",
  authDomain: "site-asa-verde.firebaseapp.com",
  projectId: "site-asa-verde",
  storageBucket: "site-asa-verde.firebasestorage.app",
  messagingSenderId: "118909115430",
  appId: "1:118909115430:web:2743e927804a7fd09e1ae7",
};

/** Contas com acesso à moderação. Precisa ser igual à lista da função admin() nas regras. */
export const ADMINS = ["andre.silvajp@gmail.com"];

export const FUNCOES = [
  "Mãe, pai ou responsável",
  "Professor(a) da escola",
  "Gestão ou equipe da escola",
  "Estagiário(a) do IFPB",
  "Professor(a) orientador(a) do IFPB",
  "Instituição parceira",
  "Comunidade",
];

export const UNIDADES_LISTA = [...new Set(ACERVO.map(f => f.unidade).filter(Boolean))]
  .sort((a, b) => a.localeCompare(b, "pt-BR"));

// Os valores precisam bater com as listas aceitas nas regras do Firestore.
export const PERGUNTAS = [
  {
    id: "perfil",
    titulo: "Qual é a sua relação com o projeto?",
    opcoes: [
      ["responsavel", "Mãe, pai ou responsável"],
      ["professor", "Professor(a) da escola"],
      ["gestor", "Gestão ou equipe da escola"],
      ["estagiario", "Estagiário(a) do IFPB"],
      ["comunidade", "Comunidade ou outra relação"],
    ],
  },
  {
    id: "mudanca",
    titulo: "Depois das atividades, você percebeu mudanças nas atitudes das crianças com o meio ambiente?",
    ajuda: "Por exemplo: separar o lixo, cuidar das plantas, economizar água.",
    opcoes: [
      ["muita", "Sim, muitas"],
      ["alguma", "Sim, algumas"],
      ["nenhuma", "Não percebi"],
      ["nao_sei", "Não sei dizer"],
    ],
  },
  {
    id: "avaliacao",
    titulo: "Como você avalia as atividades do projeto?",
    opcoes: [
      ["otima", "Ótimas"],
      ["boa", "Boas"],
      ["regular", "Regulares"],
      ["ruim", "Ruins"],
      ["nao_conheco", "Não conheço as atividades"],
    ],
  },
  {
    id: "continuidade",
    titulo: "Você gostaria que o projeto continuasse em 2027?",
    opcoes: [
      ["sim", "Sim"],
      ["nao", "Não"],
      ["nao_sei", "Não sei"],
    ],
  },
];

/** Nomes das páginas que recebem "Esta página foi útil?". */
export const PAGINAS_AVALIADAS = Object.fromEntries([
  ...CAPITULOS.map(c => [c.id, c.nome]),
  ["equipe", "Quem faz o Asa Verde"],
]);

/* ── Firebase sob demanda ─────────────────────────────────────────────── */

let appPromessa;
let authPromessa;
let bancoPromessa;

function app() {
  appPromessa ??= import("firebase/app").then(({ initializeApp }) => initializeApp(CONFIG));
  return appPromessa;
}

function autenticacao() {
  authPromessa ??= Promise.all([import("firebase/auth"), app()]).then(([m, a]) => ({
    m,
    auth: m.initializeAuth(a, { persistence: [m.indexedDBLocalPersistence, m.browserLocalPersistence] }),
  }));
  return authPromessa;
}

function banco() {
  bancoPromessa ??= Promise.all([import("firebase/firestore/lite"), app()]).then(([m, a]) => ({ m, db: m.getFirestore(a) }));
  return bancoPromessa;
}

/** Garante uma sessão (anônima, se a pessoa ainda não tiver uma) antes de gravar. */
async function sessaoDoVisitante() {
  const { m, auth } = await autenticacao();
  await auth.authStateReady();
  if (!auth.currentUser) await m.signInAnonymously(auth);
  return auth.currentUser;
}

const milissegundos = t => (t && typeof t.toMillis === "function" ? t.toMillis() : 0);

/* ── Marcações locais (o que este aparelho já respondeu) ──────────────── */

const CHAVE_LOCAL = "asaverde-participacao";

function lerMarcacoes() {
  try {
    return JSON.parse(localStorage.getItem(CHAVE_LOCAL)) || {};
  } catch {
    return {};
  }
}

export function marcado(chave) {
  return lerMarcacoes()[chave] ?? null;
}

export function marcar(chave, valor = true) {
  try {
    const atual = lerMarcacoes();
    atual[chave] = valor;
    localStorage.setItem(CHAVE_LOCAL, JSON.stringify(atual));
  } catch {
    // Navegação privada: a marcação vale só nesta visita.
  }
}

/* ── Ações do público ─────────────────────────────────────────────────── */

export async function enviarDepoimento({ nome, funcao, unidade, texto }) {
  await sessaoDoVisitante();
  const { m, db } = await banco();
  const dados = {
    nome: nome.trim(),
    funcao,
    texto: texto.trim(),
    autorizacao: true,
    status: "pendente",
    criadoEm: m.serverTimestamp(),
  };
  if (unidade) dados.unidade = unidade;
  await m.addDoc(m.collection(db, "depoimentos"), dados);
}

export async function listarDepoimentosAprovados() {
  const { m, db } = await banco();
  const consulta = m.query(m.collection(db, "depoimentos"), m.where("status", "==", "aprovado"));
  const resultado = await m.getDocs(consulta);
  return resultado.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => milissegundos(b.aprovadoEm) - milissegundos(a.aprovadoEm));
}

export async function registrarAvaliacao(pagina, util) {
  const usuario = await sessaoDoVisitante();
  const { m, db } = await banco();
  try {
    await m.setDoc(m.doc(db, "avaliacoes", `${usuario.uid}_${pagina}`), { pagina, util, criadoEm: m.serverTimestamp() });
  } catch (erro) {
    // A regra bloqueia um segundo voto na mesma página: para quem votou, o resultado é o mesmo.
    if (erro.code !== "permission-denied") throw erro;
  }
}

export async function comentarAvaliacao(pagina, comentario) {
  const usuario = await sessaoDoVisitante();
  const { m, db } = await banco();
  await m.updateDoc(m.doc(db, "avaliacoes", `${usuario.uid}_${pagina}`), { comentario: comentario.trim() });
}

export async function enviarPesquisa(respostas) {
  const usuario = await sessaoDoVisitante();
  const { m, db } = await banco();
  const dados = {
    perfil: respostas.perfil,
    mudanca: respostas.mudanca,
    avaliacao: respostas.avaliacao,
    continuidade: respostas.continuidade,
    criadoEm: m.serverTimestamp(),
  };
  if (respostas.unidade) dados.unidade = respostas.unidade;
  if (respostas.comentario?.trim()) dados.comentario = respostas.comentario.trim();
  try {
    await m.setDoc(m.doc(db, "pesquisa", usuario.uid), dados);
  } catch (erro) {
    if (erro.code === "permission-denied") throw new Error("ja-respondeu");
    throw erro;
  }
}

/* ── Moderação (somente contas da lista ADMINS) ──────────────────────── */

export async function observarSessao(aoMudar) {
  const { m, auth } = await autenticacao();
  return m.onAuthStateChanged(auth, aoMudar);
}

export async function entrarComGoogle() {
  const { m, auth } = await autenticacao();
  const provedor = new m.GoogleAuthProvider();
  provedor.setCustomParameters({ prompt: "select_account" });
  await m.signInWithPopup(auth, provedor, m.browserPopupRedirectResolver);
}

export async function sairDaModeracao() {
  const { m, auth } = await autenticacao();
  await m.signOut(auth);
}

export async function listarDepoimentos(status) {
  const { m, db } = await banco();
  const resultado = await m.getDocs(m.query(m.collection(db, "depoimentos"), m.where("status", "==", status)));
  return resultado.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => milissegundos(b.criadoEm) - milissegundos(a.criadoEm));
}

export async function aprovarDepoimento(id, texto) {
  const { m, db } = await banco();
  await m.updateDoc(m.doc(db, "depoimentos", id), { status: "aprovado", texto: texto.trim(), aprovadoEm: m.serverTimestamp() });
}

export async function mudarStatusDepoimento(id, status) {
  const { m, db } = await banco();
  await m.updateDoc(m.doc(db, "depoimentos", id), { status });
}

export async function excluirDocumento(colecao, id) {
  const { m, db } = await banco();
  await m.deleteDoc(m.doc(db, colecao, id));
}

export async function listarColecao(colecao) {
  const { m, db } = await banco();
  const resultado = await m.getDocs(m.collection(db, colecao));
  return resultado.docs
    .map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => milissegundos(b.criadoEm) - milissegundos(a.criadoEm));
}

export function dataLegivel(t) {
  const ms = milissegundos(t);
  return ms ? new Date(ms).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" }) : "";
}
