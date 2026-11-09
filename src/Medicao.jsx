import { useSyncExternalStore } from "react";
import { Analytics } from "@vercel/analytics/react";
import { assinarEndereco, caminhoAtual, limparEvento } from "./analytics.js";

/** Registra no Vercel uma visualização a cada troca de página, inclusive nas seções com "#". */
export function Medicao() {
  const caminho = useSyncExternalStore(assinarEndereco, caminhoAtual, () => "/");
  return (
    <Analytics route={caminho} path={caminho} beforeSend={limparEvento}
      mode={import.meta.env.DEV ? "development" : "production"} />
  );
}
