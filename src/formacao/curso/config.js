// Configurações da Formação Asa Verde.
// Tudo o que costuma mudar de um ciclo para outro está aqui.

export const CONFIG = {
  // Código entregue pela coordenação a quem vai fazer o curso.
  codigoAcesso: "asa2026",

  // Nota mínima para aprovação nas avaliações (0,70 = 70%).
  aprovacao: 0.7,

  // Número de tentativas em cada avaliação. Depois disso, a pessoa procura a coordenação.
  tentativas: 3,

  // Carga horária do certificado do percurso "Conhecer o projeto", aberto à comunidade
  // (núcleo comum e avaliação, sem código de acesso).
  horasComunidade: 2,

  // Quem assina os certificados (apenas o nome impresso; não há assinatura digital).
  assinaturas: [
    { nome: "Prof. Dr. Inakã Silva Barreto", cargo: "Diretor-Geral do IFPB – Campus Santa Rita" },
    { nome: "Prof. Dr. André Luiz da Silva", cargo: "Coordenador Técnico do Projeto Asa Verde" },
  ],

  // Metas por unidade, exibidas na trilha do multiplicador. Atualize a cada ciclo.
  metas: [
    ["3", "gincanas ou campanhas por unidade"],
    ["10", "ações de arborização por unidade"],
    ["100", "mudas plantadas por unidade"],
  ],

  // Contato exibido no curso.
  instagram: "https://www.instagram.com/projetoasaverde/",
  sistema: "https://relatorio-asa-verde-2026.vercel.app",
  painel:
    "https://app.powerbi.com/view?r=eyJrIjoiYjQxNzhiMDEtZWU3Mi00MTk5LWE3MjQtMDk2ODkxOThiZmFkIiwidCI6IjUyMzYzMjI3LWVjY2EtNDA2Zi1iMDFlLWYwYzIxY2FmY2E0MCJ9",
  relatorio2026: "/relatorios/relatorio-asa-verde-2026.pdf",
};

// Logotipos exibidos no rodapé do curso e no certificado.
export const PARCEIROS = [
  { src: "/logos/mppb.webp", nome: "Ministério Público da Paraíba" },
  { src: "/logos/santarita.webp", nome: "Prefeitura Municipal de Santa Rita" },
  { src: "/logos/semma.webp", nome: "Secretaria Municipal de Meio Ambiente de Santa Rita" },
  { src: "/logos/ifpb.webp", nome: "IFPB – Campus Santa Rita" },
  { src: "/logos/cooremm.webp", nome: "COOREMM – Cooperativa de Trabalho dos Catadores e Catadoras de Reciclagem de Marcos Moura" },
];

