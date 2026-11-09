/**
 * Medição de acessos do site.
 *
 * 1. Vercel Web Analytics: conta visitas e páginas, sem cookies. Funciona assim que
 *    o Analytics for ativado no painel do projeto no Vercel.
 * 2. Microsoft Clarity: mapas de calor de cliques e rolagem. Usa cookies, por isso só
 *    é carregado depois que o visitante aceita o aviso (LGPD).
 *
 * Para ligar o Clarity, cole aqui o ID do projeto (clarity.microsoft.com →
 * Settings → Overview → Project ID). Enquanto estiver vazio, o Clarity não é
 * carregado e o aviso de cookies não aparece.
 */
export const CLARITY_ID = "";

const CHAVE_ESCOLHA = "asaverde-cookies"; // "aceito" ou "recusado"
export const EVENTO_PREFERENCIAS = "asaverde:preferencias-cookies";

export function lerEscolha() {
  try {
    return localStorage.getItem(CHAVE_ESCOLHA);
  } catch {
    return null;
  }
}

export function gravarEscolha(valor) {
  try {
    localStorage.setItem(CHAVE_ESCOLHA, valor);
  } catch {
    // Navegação privada ou armazenamento bloqueado: a escolha vale só nesta visita.
  }
}

/** Converte o endereço em um caminho legível nos painéis: /#galeria vira /galeria. */
export function caminhoAtual() {
  const caminho = window.location.pathname.replace(/\/+$/, "") || "/";
  const ancora = window.location.hash.replace(/^#\/?/, "").split(/[?&]/)[0];
  if (caminho === "/" && ancora && ancora !== "inicio") return `/${ancora}`;
  return caminho;
}

export function assinarEndereco(atualizar) {
  window.addEventListener("hashchange", atualizar);
  window.addEventListener("popstate", atualizar);
  return () => {
    window.removeEventListener("hashchange", atualizar);
    window.removeEventListener("popstate", atualizar);
  };
}

/** Envia ao Vercel só o caminho, sem parâmetros de endereço. */
export function limparEvento(evento) {
  try {
    return { ...evento, url: new URL(evento.url).origin + caminhoAtual() };
  } catch {
    return evento;
  }
}

let clarityCarregado = false;
let coletaPermitida = false;

/** Verdadeiro quando o script do Clarity está carregado e o visitante aceitou a coleta. */
export function coletaClarityAtiva() {
  return clarityCarregado && coletaPermitida;
}

/** Interrompe a coleta e apaga os cookies do Clarity nesta visita. */
export function recusarClarity() {
  coletaPermitida = false;
  if (!clarityCarregado) return;
  window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "denied" });
  window.clarity("consent", false);
}

export function carregarClarity() {
  if (!CLARITY_ID) return;
  coletaPermitida = true;
  if (!clarityCarregado) {
    clarityCarregado = true;
    // Código de instalação do Clarity, com a fila que guarda chamadas feitas antes do script carregar.
    window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments); };
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    document.head.appendChild(script);
  }
  window.clarity("consentv2", { ad_Storage: "denied", analytics_Storage: "granted" });
}

/** Registra um evento no Clarity (por exemplo, "galeria_2025"), se o visitante aceitou. */
export function registrarEvento(nome) {
  if (!coletaClarityAtiva()) return;
  window.clarity("event", nome.toLowerCase().replace(/[^a-z0-9_-]+/g, "_").slice(0, 60));
}

/** Reabre o aviso para o visitante mudar a escolha (link no rodapé). */
export function abrirPreferenciasCookies() {
  window.dispatchEvent(new Event(EVENTO_PREFERENCIAS));
}

export const clarityAtivo = Boolean(CLARITY_ID);

/** Downloads e links para outros sites viram eventos no Clarity sem mexer em cada botão. */
export function eventoDoClique(alvo) {
  const link = alvo instanceof Element ? alvo.closest("a[href]") : null;
  if (!link) return null;
  const url = new URL(link.href, window.location.href);
  const arquivo = decodeURIComponent(url.pathname.split("/").pop() || "");
  if (link.hasAttribute("download") || /\.pdf$/i.test(arquivo)) return `download_${arquivo.replace(/\.[^.]+$/, "")}`;
  if (url.origin !== window.location.origin) return `saida_${url.hostname.replace(/^www\./, "")}`;
  return null;
}
