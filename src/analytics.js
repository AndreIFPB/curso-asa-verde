/**
 * Contagem de acessos com o Vercel Web Analytics (sem cookies).
 * O site usa endereços com "#" (/#galeria). Aqui eles viram caminhos (/galeria),
 * para que cada seção apareça como uma página própria no painel do Vercel.
 */

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

/** Envia ao Vercel só o caminho, sem parâmetros de endereço. A moderação não entra na contagem. */
export function limparEvento(evento) {
  if (caminhoAtual().startsWith("/moderacao")) return null;
  try {
    return { ...evento, url: new URL(evento.url).origin + caminhoAtual() };
  } catch {
    return evento;
  }
}
