// Progresso salvo no navegador de quem faz o curso.
// Cada pessoa é identificada pelo nome digitado na entrada.

import { CONFIG, NUCLEO, MODULOS } from "./index.js";

const CHAVE = "asaverde:formacao:v3";

export function slug(nome) {
  return nome
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function ler() {
  try {
    const bruto = localStorage.getItem(CHAVE);
    const dados = bruto ? JSON.parse(bruto) : null;
    if (dados && typeof dados === "object" && dados.contas) return dados;
  } catch {
    /* navegador sem armazenamento disponível */
  }
  return { contas: {}, atual: null };
}

function gravar(dados) {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(dados));
  } catch {
    /* segue sem salvar */
  }
}

export function carregarSessao() {
  const dados = ler();
  return dados.atual && dados.contas[dados.atual] ? dados.contas[dados.atual] : null;
}

export function entrar(nome, perfil) {
  const dados = ler();
  const id = slug(nome);
  const existente = dados.contas[id];
  const conta = existente
    ? { ...existente, nome: nome.trim(), perfil: perfil || existente.perfil }
    : { id, nome: nome.trim(), perfil, inicio: new Date().toISOString(), licoes: {}, avaliacoes: {}, ultima: null };
  dados.contas[id] = conta;
  dados.atual = id;
  gravar(dados);
  return conta;
}

export function sair() {
  const dados = ler();
  dados.atual = null;
  gravar(dados);
}

export function salvarConta(conta) {
  const dados = ler();
  dados.contas[conta.id] = conta;
  dados.atual = conta.id;
  gravar(dados);
  return conta;
}

// ---- consultas sobre o progresso ----

export const licaoFeita = (conta, id) => Boolean(conta?.licoes?.[id]);

export function licoesFeitas(conta, modulo) {
  return modulo.licoes.filter((l) => licaoFeita(conta, l.id)).length;
}

export function moduloLido(conta, modulo) {
  return licoesFeitas(conta, modulo) === modulo.licoes.length;
}

export function avaliacao(conta, moduloId) {
  return conta?.avaliacoes?.[moduloId] || { tentativas: 0, melhor: 0, aprovado: false };
}

export const aprovado = (conta, moduloId) => avaliacao(conta, moduloId).aprovado;

export function tentativasRestantes(conta, moduloId) {
  const a = avaliacao(conta, moduloId);
  return a.aprovado ? 0 : Math.max(0, CONFIG.tentativas - a.tentativas);
}

export function trilhaLiberada(conta) {
  return aprovado(conta, NUCLEO.id);
}

export function certificadoLiberado(conta, trilhaId) {
  return aprovado(conta, NUCLEO.id) && aprovado(conta, trilhaId);
}

// Percentual geral do percurso do perfil: lições + avaliações do núcleo e da trilha.
export function percentual(conta) {
  const trilha = MODULOS[conta.perfil];
  if (!trilha) return 0;
  const total = NUCLEO.licoes.length + trilha.licoes.length + 2;
  const feito =
    licoesFeitas(conta, NUCLEO) + licoesFeitas(conta, trilha) + (aprovado(conta, NUCLEO.id) ? 1 : 0) + (aprovado(conta, trilha.id) ? 1 : 0);
  return Math.round((feito / total) * 100);
}

// Próximo passo sugerido no percurso do perfil.
export function proximoPasso(conta) {
  const trilha = MODULOS[conta.perfil];
  for (const modulo of [NUCLEO, trilha]) {
    if (!modulo) continue;
    if (modulo.id !== NUCLEO.id && !trilhaLiberada(conta)) break;
    const pendente = modulo.licoes.find((l) => !licaoFeita(conta, l.id));
    if (pendente) return { tipo: "licao", modulo, licao: pendente };
    if (!aprovado(conta, modulo.id)) return { tipo: "avaliacao", modulo };
  }
  if (trilha && certificadoLiberado(conta, trilha.id)) return { tipo: "certificado", modulo: trilha };
  return null;
}

export function concluirLicao(conta, moduloId, licaoId) {
  const nova = {
    ...conta,
    licoes: { ...conta.licoes, [licaoId]: conta.licoes[licaoId] || new Date().toISOString() },
    ultima: { modulo: moduloId, licao: licaoId },
  };
  return salvarConta(nova);
}

export function registrarAvaliacao(conta, moduloId, acertos, total) {
  const anterior = avaliacao(conta, moduloId);
  const nota = total ? acertos / total : 0;
  const passou = nota >= CONFIG.aprovacao;
  const registro = {
    tentativas: anterior.tentativas + 1,
    melhor: Math.max(anterior.melhor || 0, nota),
    aprovado: anterior.aprovado || passou,
    data: passou && !anterior.aprovado ? new Date().toISOString() : anterior.data || null,
    ultima: { acertos, total, nota },
  };
  return salvarConta({ ...conta, avaliacoes: { ...conta.avaliacoes, [moduloId]: registro } });
}

// Código impresso no certificado, derivado do nome, da trilha e da data de aprovação.
export function codigoCertificado(nome, trilhaId, data) {
  const texto = `${slug(nome)}|${trilhaId}|${data}`;
  let h1 = 0x811c9dc5;
  let h2 = 0x01000193;
  for (let i = 0; i < texto.length; i++) {
    h1 = Math.imul(h1 ^ texto.charCodeAt(i), 16777619);
    h2 = Math.imul(h2 + texto.charCodeAt(i), 2246822519);
  }
  const base = ((h1 >>> 0).toString(36) + (h2 >>> 0).toString(36)).toUpperCase().replace(/[^A-Z0-9]/g, "");
  const ano = (data || "").slice(0, 4) || new Date().getFullYear();
  return `AV${ano}-${base.slice(0, 4)}-${base.slice(4, 8)}`;
}
