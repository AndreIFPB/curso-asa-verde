// Conteúdo do site do Projeto Asa Verde.
// Fonte dos números: Relatório de Impacto 2026 (dados consolidados em 07/11/2026)
// e Relatório de Impacto 2025.

export const LINKS = {
  powerbi2026:
    "https://app.powerbi.com/view?r=eyJrIjoiYjQxNzhiMDEtZWU3Mi00MTk5LWE3MjQtMDk2ODkxOThiZmFkIiwidCI6IjUyMzYzMjI3LWVjY2EtNDA2Zi1iMDFlLWYwYzIxY2FmY2E0MCJ9",
  powerbi2025:
    "https://app.powerbi.com/view?r=eyJrIjoiYTc1ZWQ0MjgtZGUxYi00M2MzLWFiMjktNjdkZGY0MzNmYmVlIiwidCI6ImEwYjZiNWZkLWIwMDgtNDkzZC1iZGU3LWY0M2E2Y2ZmM2I0MiJ9",
  sistema: "https://relatorio-asa-verde-2026.vercel.app",
  instagram: "https://www.instagram.com/projetoasaverde/",
  relatorio2026: "/relatorios/relatorio-asa-verde-2026.pdf",
  relatorio2025: "/relatorios/relatorio-asa-verde-2025.pdf",
};

export const NAV = [
  { href: "#projeto", label: "O projeto" },
  { href: "#resultados", label: "Resultados" },
  { href: "#territorio", label: "Onde atuamos" },
  { href: "#imprensa", label: "Imprensa" },
  { href: "#relatorios", label: "Relatórios" },
];

export const PARCEIROS = {
  realizacao: [
    { nome: "Ministério Público da Paraíba", logo: "/logos/mppb.webp", w: 499, h: 185 },
    { nome: "Prefeitura Municipal de Santa Rita", logo: "/logos/santarita.webp", w: 307, h: 240 },
    { nome: "Instituto Federal da Paraíba – Campus Santa Rita", logo: "/logos/ifpb.webp", w: 170, h: 240 },
  ],
  apoio: [
    { nome: "Secretaria Municipal de Meio Ambiente de Santa Rita (SEMMA)", logo: "/logos/semma.webp", w: 465, h: 240 },
    { nome: "Cooperativa de Trabalho dos Catadores e Catadoras de Reciclagem de Marcos Moura (COOREMM)", logo: "/logos/cooremm.webp", w: 491, h: 240 },
  ],
};

export const PAPEIS = [
  {
    papel: "Idealizador",
    nome: "Ministério Público da Paraíba",
    texto:
      "Concepção do projeto pela Promotora de Justiça Dra. Miriam Pereira Vasconcelos e acompanhamento institucional das ações.",
  },
  {
    papel: "Financiadora e gestora local",
    nome: "Prefeitura Municipal de Santa Rita",
    texto:
      "Financiamento e gestão local, com a articulação das Secretarias Municipais de Meio Ambiente e de Educação.",
  },
  {
    papel: "Instituição executora",
    nome: "IFPB – Campus Santa Rita",
    texto:
      "Formação e orientação dos estudantes multiplicadores, coordenação pedagógica, monitoramento e prestação de contas.",
  },
];

export const DESTAQUES = [
  { valor: "17", rotulo: "unidades educacionais", detalhe: "10 escolas de ensino fundamental e 7 centros de educação infantil" },
  { valor: "104", rotulo: "estudantes do IFPB", detalhe: "atuando como multiplicadores ambientais" },
  { valor: "41.506", rotulo: "participações", detalhe: "de estudantes e crianças nas atividades" },
];

export const NUMEROS = [
  { valor: "3.194", rotulo: "ações registradas no sistema de monitoramento" },
  { valor: "1.912", rotulo: "ações educativas presenciais nas unidades" },
  { valor: "144", rotulo: "ações por semana, em média, entre maio e outubro" },
  { valor: "853", rotulo: "oficinas de educação ambiental" },
  { valor: "734", rotulo: "palestras de educação ambiental" },
  { valor: "172", rotulo: "gincanas e campanhas ambientais" },
  { valor: "1.260", rotulo: "mudas plantadas em 113 ações de arborização" },
  { valor: "1.282", rotulo: "publicações digitais sobre as ações" },
  { valor: "8", rotulo: "bairros e localidades, na zona urbana e em Lerolândia" },
];

export const EVOLUCAO = [
  { indicador: "Unidades atendidas", a: 10, b: 17 },
  { indicador: "Estagiários multiplicadores", a: 60, b: 104 },
  { indicador: "Oficinas de educação ambiental", a: 256, b: 853 },
  { indicador: "Palestras de educação ambiental", a: 355, b: 734 },
  { indicador: "Gincanas e campanhas", a: 41, b: 172 },
  { indicador: "Publicações digitais", a: 218, b: 1282 },
  { indicador: "Ações registradas", a: 2231, b: 3194 },
];

export const ETAPAS = [
  {
    titulo: "Formação dos multiplicadores",
    texto:
      "Antes de chegar às escolas, cada estagiário conclui a formação online, com quatro módulos progressivos, avaliações e certificado, e participa de capacitações presenciais no IFPB, com a Secretaria de Meio Ambiente e com profissionais da educação infantil do município.",
  },
  {
    titulo: "Equipes em cada unidade",
    texto:
      "Equipes de quatro a cinco estagiários atuam semanalmente em turmas definidas com a gestão escolar, acompanhadas por um supervisor da unidade e por um professor orientador do IFPB. As equipes de Planejamento e de Mídia dão suporte à operação e à comunicação.",
  },
  {
    titulo: "Ação educativa contínua",
    texto:
      "Palestras, oficinas, gincanas, campanhas e ações de arborização são organizadas em sequências temáticas e adaptadas a cada faixa etária, do Infantil 4 ao 9º ano, sempre unindo uma introdução conceitual a uma atividade prática.",
  },
  {
    titulo: "Registro e acompanhamento",
    texto:
      "Cada ação é registrada no sistema de relatórios, com data, turma, participantes e evidências, e consolidada em relatórios mensais e no painel público em Power BI. A Promotoria de Justiça acompanha as atividades com visitas às unidades.",
  },
];

export const EIXOS = [
  {
    id: "educacao",
    eixo: "Eixo 1",
    nome: "Educação ambiental",
    valor: "1.587",
    titulo: "encontros formativos em sala de aula",
    texto:
      "As palestras, dialogadas e adaptadas à faixa etária, apresentaram os conceitos; as oficinas os transformaram em experiência, com maquetes de biomas, composteiras, brinquedos feitos de materiais recicláveis, terrários, experimentos sobre o ciclo da água e painéis coletivos. Em 2026, o número de oficinas foi 3,3 vezes maior que em 2025, e o de palestras, duas vezes maior.",
    numeros: [
      ["853", "oficinas"],
      ["734", "palestras"],
    ],
    listaTitulo: "Temas mais trabalhados",
    lista: [
      "Coleta seletiva e 3 Rs",
      "Água e ciclo da água",
      "Arborização",
      "Biomas brasileiros",
      "Compostagem e solo",
      "Poluição do ar, da água e do solo",
      "Fauna, flora e biodiversidade",
      "Energia e mudanças climáticas",
      "Valorização dos alimentos",
    ],
    fotos: [
      { src: "/img/edu-oficina.webp", w: 1280, h: 720, alt: "Turma reunida com estagiários do Asa Verde diante de um painel sobre energia" },
      { src: "/img/edu-biomas.webp", w: 1054, h: 1400, alt: "Maquete de bioma produzida por estudantes em oficina" },
    ],
  },
  {
    id: "arborizacao",
    eixo: "Eixo 2",
    nome: "Arborização e cuidado com o território",
    valor: "1.260",
    titulo: "mudas plantadas em 113 ações, nas 17 unidades",
    texto:
      "O plantio foi tratado como processo educativo: crianças e adolescentes participaram da escolha do local, do preparo do solo, do plantio, da primeira rega e da manutenção das mudas. Os registros incluem árvores nativas e frutíferas, plantas ornamentais e hortaliças cultivadas em hortas escolares.",
    numeros: [
      ["113", "ações de arborização"],
      ["17", "unidades com plantio"],
    ],
    listaTitulo: "Espécies plantadas",
    lista: [
      "Ipê-amarelo",
      "Jacarandá",
      "Flamboyant",
      "Aroeira",
      "Pata-de-vaca",
      "Algodoeiro-de-praia",
      "Moringa",
      "Cajueiro",
      "Aceroleira",
      "Goiabeira",
      "Amoreira",
      "Mamoeiro",
      "Hortaliças",
    ],
    ranking: [
      ["Odilon Ribeiro Coutinho", 269],
      ["Jaime Lacet", 244],
      ["Monsenhor Rafael de Barros", 198],
      ["Tiradentes", 135],
      ["Emília Cavalcante de Morais Neta", 114],
    ],
    destaque: {
      titulo: "Corredor Verde",
      texto:
        "Na Semana do Meio Ambiente, estagiários e equipe da SEMMA percorreram a Av. Assis Chateaubriand, em Tibiri II, dialogando com os moradores sobre a arborização urbana e obtendo autorização para o plantio em frente às residências. A implantação foi acompanhada em setembro.",
    },
    fotos: [
      { src: "/img/arb-plantio.webp", w: 1200, h: 1600, alt: "Estudantes plantando uma muda no pátio da escola" },
      { src: "/img/arb-corredor.webp", w: 1200, h: 1600, alt: "Mobilização do Corredor Verde em rua de Tibiri II" },
    ],
  },
  {
    id: "mobilizacao",
    eixo: "Eixo 3",
    nome: "Gincanas, campanhas e mobilização",
    valor: "172",
    titulo: "gincanas e campanhas levaram o aprendizado para além da sala",
    texto:
      "Provas de separação de resíduos, corridas, bingos, jogos de tabuleiro e caças ao tesouro transformaram o que foi aprendido em desafio coletivo. As campanhas levaram o projeto às famílias e ao bairro, com doação de mudas, mobilização porta a porta e caminhadas ecológicas. Nas aulas de campo, turmas visitaram a Estação Cabo Branco, para estudar a erosão costeira, e o Parque Zoobotânico Arruda Câmara. Na coleta seletiva, a EMEF Jaime Lacet pesou 106 kg de recicláveis, destinados a catadores da comunidade.",
    numeros: [
      ["83", "gincanas e campanhas nos centros de educação infantil"],
      ["106 kg", "de recicláveis pesados na coleta seletiva da EMEF Jaime Lacet"],
    ],
    listaTitulo: "Algumas ações de destaque",
    acoes: [
      ["“Missão: Salvar a Água!”", "EMEIF e EJA Dr. Antônio Pereira de Almeida"],
      ["Gincana Ambiental no ginásio", "EMEF e EJA Aníbal Limeira"],
      ["Bingo da poluição do ar", "EMEF Jaime Lacet"],
      ["Jogo de tabuleiro “Mundo Sustentável”", "EMEIF Tiradentes"],
      ["“Caça ao Tesouro da Natureza”", "CIEI Nenzinha Ribeiro"],
      ["“Conexão Natureza: aprendendo com os polinizadores”", "CIEI Elias Heckmans"],
      ["Doação de mudas no Dia da Árvore", "CIEI Heitel Santiago"],
    ],
    fotos: [
      { src: "/img/mob-ginasio.webp", w: 1600, h: 1200, alt: "Estudantes e estagiários reunidos no ginásio após a gincana ambiental" },
      { src: "/img/mob-cabobranco.webp", w: 1600, h: 900, alt: "Turma em aula de campo na Estação Cabo Branco" },
    ],
  },
  {
    id: "comunicacao",
    eixo: "Eixo 4",
    nome: "Comunicação e visibilidade",
    valor: "1.282",
    titulo: "publicações aproximaram o projeto da comunidade",
    texto:
      "Cada unidade alimentou semanalmente as redes do projeto, com destaque para o perfil @projetoasaverde no Instagram, e a equipe de Mídia produziu stories, vídeos e coberturas das visitas institucionais. Em agosto, estagiárias da EMEF Jaime Lacet apresentaram o Asa Verde na Rádio 100.5 FM, de Santa Rita, e a TV Cabo Branco registrou a caminhada ecológica da escola. No 7 de Setembro, a EMEF Estevão José Carneiro da Cunha levou a temática ambiental ao desfile cívico da cidade.",
    numeros: [
      ["2", "reportagens: Rádio 100.5 FM e TV Cabo Branco"],
      ["10", "estagiários na equipe de Mídia"],
    ],
    fotos: [
      { src: "/img/com-radio.webp", w: 675, h: 1200, alt: "Estagiária do Asa Verde em entrevista na Rádio 100.5 FM", legenda: "Rádio 100.5 FM, 17 de agosto" },
      { src: "/img/com-tv.webp", w: 900, h: 1200, alt: "Reportagem da TV Cabo Branco em escola atendida pelo projeto", legenda: "TV Cabo Branco, 21 de agosto" },
      { src: "/img/com-desfile.webp", w: 900, h: 1200, alt: "Estudantes no desfile cívico de 7 de Setembro com faixa sobre árvores", legenda: "Desfile cívico, setembro" },
    ],
  },
];

export const INFANTIL = [
  ["261", "oficinas"],
  ["197", "palestras"],
  ["83", "gincanas e campanhas"],
  ["351", "mudas plantadas"],
  ["7.352", "participações"],
];

export const ESCOLAS = [
  ["01", "EMEF e EJA Aníbal Limeira", "Jardim Europa"],
  ["02", "EMEIF e EJA Dr. Antônio Pereira de Almeida", "Marcos Moura"],
  ["03", "EMEF Prof. Carlos Arnóbio Maroja Di Pace", "Várzea Nova"],
  ["04", "EMEF Emília Cavalcante de Morais Neta", "Lerolândia"],
  ["05", "EMEF Estevão José Carneiro da Cunha", "Várzea Nova"],
  ["06", "EMEF Índio Piragibe", "Popular"],
  ["07", "EMEF Jaime Lacet", "Popular"],
  ["08", "EMEF e EJA Monsenhor Rafael de Barros", "Liberdade"],
  ["09", "EMEF Odilon Ribeiro Coutinho", "Tibiri II"],
  ["10", "EMEIF e EJA Dr. Flávio Maroja Filho", "Tibiri II"],
];

export const CIEIS = [
  ["11", "CIEI Elias Heckmans", "Popular"],
  ["12", "CIEI Heitel Santiago", "Várzea Nova"],
  ["13", "EMEIF Tiradentes", "Várzea Nova"],
  ["14", "CIEI Lourdes Serejo", "Heitel Santiago"],
  ["15", "CIEI Maria Carmelita Maroja Pedroza", "Tibiri II"],
  ["16", "CIEI Carmelita Maroja (Anexo)", "Tibiri II"],
  ["17", "CIEI Nenzinha Ribeiro", "Popular"],
];

export const LINHA_DO_TEMPO = [
  ["15 abr", "Abertura do ciclo 2026", "Cerimônia com o Prefeito de Santa Rita, o Ministério Público da Paraíba e o IFPB."],
  ["22 a 29 abr", "Formação dos multiplicadores", "Capacitações presenciais e lançamento da plataforma de formação online, com quatro módulos e certificação."],
  ["11 a 26 mai", "Chegada às escolas", "Recepção dos gestores, capacitação com a SEMMA, entrega das cartas de apresentação e início das atividades."],
  ["2 jun", "Corredor Verde", "Mobilização porta a porta na Av. Assis Chateaubriand, em Tibiri II, na Semana do Meio Ambiente, com SEMMA e CEDHOR."],
  ["7 jul", "Início nos centros de educação infantil", "Sete CIEIs passam a receber o projeto, que chega a crianças de 4 a 6 anos."],
  ["27 jul", "Visitas da Promotoria de Justiça", "A Promotora de Justiça Dra. Miriam Pereira Vasconcelos inicia as visitas de acompanhamento às unidades, concluídas em novembro."],
  ["4 ago", "Nova escola", "Início na EMEIF e EJA Dr. Flávio Maroja Filho."],
  ["17 a 21 ago", "O projeto na imprensa", "Entrevistas na Rádio 100.5 FM e na TV Cabo Branco, que cobriu a caminhada ecológica da EMEF Jaime Lacet."],
  ["set", "7 de Setembro e Dia da Árvore", "Desfile cívico com tema ambiental, plantios, doação de mudas e implantação do Corredor Verde."],
  ["out", "Eleições gerais", "O uso das escolas como locais de votação e o calendário escolar reduzem as atividades presenciais."],
  ["nov", "Encerramento", "Últimas atividades e despedidas nas unidades; certificação de estagiários, orientadores e unidades."],
];

export const VOZES = [
  {
    texto:
      "Na nossa última visita técnica, conseguimos levar uma aluna cadeirante ao Parque Zoobotânico. Poder incluí-la e deixá-la feliz gerou em nós um grande sentimento de alegria.",
    autor: "Equipe de estagiários",
    unidade: "EMEF e EJA Aníbal Limeira",
  },
  {
    texto:
      "Alunos do 5º ano lembraram que muitas pessoas passam fome enquanto alimentos são descartados. Perceber essa consciência em crianças tão jovens tornou a experiência ainda mais significativa.",
    autor: "Relato da equipe",
    unidade: "EMEF Odilon Ribeiro Coutinho",
  },
  {
    texto:
      "Na ação Corredor Verde, grande parte dos moradores abraçou a campanha e adotou mudas. Muitos agora têm uma “semente” de conscientização ambiental na calçada de suas casas.",
    autor: "Relato da equipe",
    unidade: "EMEIF e EJA Dr. Antônio Pereira de Almeida",
  },
  {
    texto:
      "Uma aluna do 5º ano contou que já transformava objetos que seriam descartados em seus próprios brinquedos, e que alguns deles ela usa até hoje.",
    autor: "Relato da equipe",
    unidade: "EMEF Índio Piragibe",
  },
  {
    texto:
      "Apesar do nervosismo dos primeiros dias, os dias seguintes nos trouxeram conforto e familiaridade com a sala de aula. As crianças foram receptivas e participativas em todos os momentos.",
    autor: "Relato da equipe",
    unidade: "EMEF Estevão José Carneiro da Cunha",
  },
  {
    texto:
      "Na oficina, as crianças contaram o que sabiam sobre jogar o lixo no lugar certo. Um aluno afirmou que amou a atividade e que queria fazer tudo de novo.",
    autor: "Relato da equipe",
    unidade: "CIEI Nenzinha Ribeiro",
  },
];

// Galeria em grade de 4 colunas × 7 linhas no desktop (c = coluna, r = linha).
export const GALERIA = [
  { src: "/img/gal-20.webp", w: 1400, h: 1050, c: "1", r: "1", alt: "Estudantes e estagiários reunidos ao ar livre após plantio" },
  { src: "/img/gal-826.webp", w: 1050, h: 1400, c: "2", r: "1 / span 2", alt: "Crianças plantando uma muda florida" },
  { src: "/img/gal-ciranda.webp", w: 1600, h: 922, c: "3 / span 2", r: "1 / span 2", destaque: true, alt: "Ciranda de crianças e estagiários no pátio" },
  { src: "/img/gal-874.webp", w: 790, h: 1400, c: "1", r: "2 / span 2", alt: "Crianças plantando mudas na grama" },
  { src: "/img/gal-597.webp", w: 1400, h: 788, c: "2", r: "3", alt: "Turma exibindo trabalhos de educação ambiental em sala decorada" },
  { src: "/img/gal-1108.webp", w: 1400, h: 1050, c: "3", r: "3", alt: "Estagiários com cartazes do Projeto Asa Verde" },
  { src: "/img/gal-797.webp", w: 1050, h: 1400, c: "4", r: "3 / span 2", alt: "Crianças da educação infantil desenhando em atividade" },
  { src: "/img/gal-267.webp", w: 1400, h: 1050, c: "1", r: "4", alt: "Turma reunida em sala de aula com estagiários" },
  { src: "/img/inf-tiradentes.webp", w: 1050, h: 1400, c: "2", r: "4 / span 2", alt: "Estagiária conversando com crianças da educação infantil ao ar livre" },
  { src: "/img/gal-811.webp", w: 1050, h: 1400, c: "3", r: "4 / span 2", alt: "Atividade com crianças em área coberta da escola" },
  { src: "/img/gal-168.webp", w: 1050, h: 1400, c: "1", r: "5 / span 2", alt: "Palestra em sala decorada com bandeirinhas" },
  { src: "/img/gal-555.webp", w: 1400, h: 788, c: "4", r: "5", alt: "Turma diante da fachada da EMEF Jaime Lacet" },
  { src: "/img/maos-terra.webp", w: 1600, h: 1200, c: "2", r: "6", alt: "Mãos de criança segurando terra para o plantio" },
  { src: "/img/gal-904.webp", w: 1050, h: 1400, c: "3", r: "6 / span 2", alt: "Brincadeira com bambolês na educação infantil" },
  { src: "/img/gal-365.webp", w: 960, h: 1280, c: "4", r: "6 / span 2", alt: "Estagiárias conduzindo atividade em sala de aula" },
  { src: "/img/inf-patio.webp", w: 1600, h: 1204, c: "1", r: "7", alt: "Crianças e estagiária em atividade no pátio" },
  { src: "/img/gal-503.webp", w: 1280, h: 720, c: "2", r: "7", alt: "Exposição de trabalhos de estudantes com estagiários" },
];

export const IMPRENSA = [
  {
    veiculo: "Jornal da Paraíba",
    data: "5 de setembro de 2026",
    titulo: "Projeto leva educação ambiental para escolas municipais de Santa Rita",
    resumo:
      "Reportagem sobre oficinas, palestras, gincanas, campanhas e hortas conduzidas pelos estudantes do IFPB nas escolas municipais.",
    url: "https://jornaldaparaiba.com.br/educacao/projeto-leva-educacao-ambiental-para-escolas-municipais-de-santa-rita",
  },
  {
    veiculo: "Ministério Público da Paraíba",
    data: "15 de abril de 2026",
    titulo: "Edição 2026 do projeto Asa Verde é lançada em Santa Rita",
    resumo:
      "O lançamento do segundo ciclo, com a ampliação do número de unidades e o balanço da edição de 2025.",
    url: "https://www.mppb.mp.br/index.php/pt/comunicacao/noticias/17-meio-ambiente/27355-edicao-2026-do-projeto-asa-verde-e-lancada-em-santa-rita",
  },
  {
    veiculo: "Polêmica Paraíba",
    data: "15 de abril de 2026",
    titulo: "Santa Rita conquista reconhecimento nacional em prêmio do Sebrae por ações em sustentabilidade",
    resumo:
      "O município recebeu o prêmio prata na categoria Sustentabilidade e Meio Ambiente do programa Cidade Empreendedora, por meio do Projeto Asa Verde.",
    url: "https://www.polemicaparaiba.com.br/cidades/santa-rita-e-reconhecida-nacionalmente-em-premio-do-sebrae-por-acoes-em-sustentabilidade",
  },
  {
    veiculo: "IFPB",
    data: "20 de março de 2026",
    titulo: "Projeto Asa Verde transforma escolas públicas em espaços de educação ambiental e mobilização social",
    resumo:
      "O portal do IFPB apresenta os resultados de 2025: dez escolas, mais de 2.200 ações e mais de 1.200 árvores nativas plantadas.",
    url: "https://www.ifpb.edu.br/noticias/2026/03/projeto-asa-verde-transforma-escolas-publicas-em-espacos-de-educacao-ambiental-e-mobilizacao-social",
  },
  {
    veiculo: "Jampa News",
    data: "6 de junho de 2025",
    titulo: "Município de Santa Rita e IFPB aderem ao projeto “Asa Verde”",
    resumo:
      "No Dia Mundial do Meio Ambiente, a Prefeitura e o IFPB firmaram a parceria que deu início ao projeto nas escolas municipais.",
    url: "https://www.jampanews.com/municipio-de-santa-rita-e-ifpb-aderem-ao-projeto-asa-verde/pb/",
  },
];

export const RELATORIOS = [
  {
    ano: "2026",
    titulo: "Relatório de Impacto 2026",
    periodo: "Abril a novembro de 2026",
    descricao:
      "Os resultados do segundo ciclo, com os quatro eixos de atuação, a chegada à educação infantil, os capítulos das 17 unidades, as vozes do projeto e as recomendações para 2027.",
    paginas: "64 páginas",
    tamanho: "PDF, 22 MB",
    capa: "/relatorios/capa-2026.webp",
    pdf: LINKS.relatorio2026,
    arquivo: "Projeto-Asa-Verde-Relatorio-de-Impacto-2026.pdf",
    painel: LINKS.powerbi2026,
    numeros: [
      ["17", "unidades"],
      ["3.194", "ações"],
      ["1.260", "mudas"],
    ],
  },
  {
    ano: "2025",
    titulo: "Relatório de Impacto 2025",
    periodo: "Junho a dezembro de 2025",
    descricao:
      "O primeiro ciclo do projeto em 10 escolas municipais, com 60 estagiários, a implantação da coleta seletiva e a destinação de 2.322,5 kg de recicláveis à COOREMM.",
    paginas: "16 páginas",
    tamanho: "PDF, 1,8 MB",
    capa: "/relatorios/capa-2025.webp",
    pdf: LINKS.relatorio2025,
    arquivo: "Projeto-Asa-Verde-Relatorio-de-Impacto-2025.pdf",
    painel: LINKS.powerbi2025,
    numeros: [
      ["10", "escolas"],
      ["2.231", "ações"],
      ["1.214", "árvores nativas"],
    ],
  },
];

export const FICHA = [
  {
    instituicao: "Ministério Público da Paraíba",
    pessoas: [["Dra. Miriam Pereira Vasconcelos", "Promotora de Justiça, idealizadora do Projeto Asa Verde"]],
  },
  {
    instituicao: "Prefeitura Municipal de Santa Rita",
    pessoas: [
      ["Jackson Alvino da Costa", "Prefeito Municipal"],
      ["Ednaldo Pereira de Santana", "Vice-Prefeito Municipal"],
      ["Jonatas Henrique", "Secretário Municipal de Meio Ambiente"],
      ["Andreza Alves Costa", "Secretária Municipal de Educação"],
      ["Vanessa Gabrielle Nóbrega Gomes Koroiva", "Coordenadora Geral do Projeto, SEMMA"],
      ["Marcelo de Souza Dionízio", "Supervisor Geral dos Estagiários, SEMMA"],
      ["Patrícia Araújo Rocha", "Supervisora do Projeto, Secretaria Municipal de Educação"],
    ],
  },
  {
    instituicao: "IFPB – Campus Santa Rita",
    pessoas: [
      ["Prof. Inakã Silva Barreto", "Diretor-Geral"],
      ["Prof. Sabiniano Araújo Rodrigues", "Diretor-Geral durante a execução do ciclo"],
      ["Prof. Dayvison Ribeiro Rodrigues", "Diretor de Administração e Planejamento"],
      ["Prof. André Luiz da Silva", "Coordenador Técnico do Projeto Asa Verde"],
      ["Profa. Marcley da Luz Marques", "Coordenadora de Estágio"],
      ["Profa. Magdalena Duarte Costa", "Coordenadora do Curso de Meio Ambiente"],
      ["Prof. Fábio Sampaio dos Santos Câmara", "Coordenador do Curso de Informática"],
    ],
  },
];

export const ORIENTADORES = [
  "André Luiz da Silva",
  "Bruno Guedes da Costa",
  "Evaldo Paulo de Souza Pulcinelli",
  "Fábio Sampaio dos Santos Câmara",
  "Gelda Karla da Silva Marques",
  "Geovane Lima Guimarães",
  "Gilson Carreira Junior",
  "Inakã Silva Barreto",
  "Magdalena Duarte Costa",
  "Rosenilda Aparecida Pulcinelli de Souza",
  "Victor Cavalcanti Mariano",
];
