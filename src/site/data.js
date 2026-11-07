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
  arquivo2026: "Projeto-Asa-Verde-Relatorio-de-Impacto-2026.pdf",
  arquivo2025: "Projeto-Asa-Verde-Relatorio-de-Impacto-2025.pdf",
};

// Capítulos do site (trilho lateral e menu).
export const CAPITULOS = [
  { id: "projeto", n: "01", nome: "O projeto" },
  { id: "numeros", n: "02", nome: "Em números" },
  { id: "eixos", n: "03", nome: "Eixos de atuação" },
  { id: "territorio", n: "04", nome: "Resultados por unidade" },
  { id: "tempo", n: "05", nome: "Linha do tempo" },
  { id: "vozes", n: "06", nome: "Vozes" },
  { id: "galeria", n: "07", nome: "Galeria" },
  { id: "imprensa", n: "08", nome: "Imprensa" },
  { id: "relatorios", n: "09", nome: "Relatórios" },
];

export const DESTAQUES = [
  { valor: 17, rotulo: "unidades educacionais", detalhe: "10 escolas de ensino fundamental e 7 centros de educação infantil" },
  { valor: 104, rotulo: "estudantes do IFPB", detalhe: "atuando como multiplicadores ambientais" },
  { valor: 3194, rotulo: "ações registradas", detalhe: "no sistema de monitoramento do projeto" },
  { valor: 41506, rotulo: "participações", detalhe: "de estudantes e crianças nas atividades" },
];

export const NUMEROS = [
  { valor: "1.912", rotulo: "ações educativas presenciais nas unidades" },
  { valor: "144", rotulo: "ações por semana, em média, entre maio e outubro" },
  { valor: "853", rotulo: "oficinas de educação ambiental" },
  { valor: "734", rotulo: "palestras de educação ambiental" },
  { valor: "172", rotulo: "gincanas e campanhas ambientais" },
  { valor: "113", rotulo: "ações de arborização" },
  { valor: "1.260", rotulo: "mudas plantadas" },
  { valor: "1.282", rotulo: "publicações digitais sobre as ações" },
  { valor: "8", rotulo: "bairros e localidades, na zona urbana e em Lerolândia" },
];

// Cada ponto da matriz é uma ação registrada em 2026. Presenciais preenchidas; digitais vazadas.
export const MATRIZ = [
  { k: "oficinas", nome: "Oficinas", n: 853, cor: "#8cc63f" },
  { k: "palestras", nome: "Palestras", n: 734, cor: "#d6e5c0" },
  { k: "gincanas", nome: "Gincanas e campanhas", n: 172, cor: "#3f9a5c" },
  { k: "arborizacao", nome: "Ações de arborização", n: 113, cor: "#ffffff" },
  { k: "outras", nome: "Outras ações presenciais", n: 40, cor: "#6d8f7d" },
  { k: "publicacoes", nome: "Publicações digitais", n: 1282, vazado: true },
];

export const EIXOS = [
  {
    id: "educacao",
    n: "01",
    nome: "Educação ambiental",
    valor: "1.587",
    titulo: "encontros formativos em sala de aula",
    texto: [
      "As oficinas e palestras formaram o núcleo pedagógico do projeto. As palestras, dialogadas e adaptadas à faixa etária, apresentaram os conceitos; as oficinas os transformaram em experiência, com maquetes de biomas, composteiras, brinquedos feitos de materiais recicláveis, terrários, experimentos sobre o ciclo da água e painéis coletivos.",
      "Em 2026, o número de oficinas foi 3,3 vezes maior que em 2025, e o de palestras, duas vezes maior.",
    ],
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
      { src: "/img/edu-oficina.webp", w: 1280, h: 720, alt: "Turma reunida com estagiários do Asa Verde diante de um painel sobre energia", legenda: "Encerramento de uma sequência sobre energia, com o painel produzido pela turma" },
      { src: "/img/edu-biomas.webp", w: 1054, h: 1302, alt: "Maquete de bioma produzida por estudantes em oficina", legenda: "Maquete de biomas feita em oficina" },
    ],
  },
  {
    id: "arborizacao",
    n: "02",
    nome: "Arborização e cuidado com o território",
    valor: "1.260",
    titulo: "mudas plantadas em 113 ações, nas 17 unidades",
    texto: [
      "O plantio foi tratado como processo educativo: crianças e adolescentes participaram da escolha do local, do preparo do solo, do plantio, da primeira rega e da manutenção das mudas. Os registros incluem árvores nativas e frutíferas, plantas ornamentais e hortaliças cultivadas em hortas escolares.",
    ],
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
      "Coentro, alface e cebolinha",
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
      { src: "/img/arb-plantio.webp", w: 1200, h: 1600, alt: "Estudantes plantando uma muda no pátio da escola", legenda: "Plantio de muda no pátio da escola, com a primeira rega feita pelos estudantes" },
      { src: "/img/arb-corredor.webp", w: 1200, h: 1600, alt: "Mobilização do Corredor Verde em rua de Tibiri II", legenda: "Mobilização porta a porta do Corredor Verde, em Tibiri II" },
    ],
  },
  {
    id: "mobilizacao",
    n: "03",
    nome: "Gincanas, campanhas e mobilização",
    valor: "172",
    titulo: "gincanas e campanhas levaram o aprendizado para além da sala",
    texto: [
      "Provas de separação de resíduos, corridas, bingos, jogos de tabuleiro e caças ao tesouro transformaram o que foi aprendido em desafio coletivo. As campanhas levaram o projeto às famílias e ao bairro, com doação de mudas, mobilização porta a porta e caminhadas ecológicas.",
      "As aulas de campo ampliaram o território de aprendizagem: as turmas da EMEF e EJA Aníbal Limeira visitaram a Estação Cabo Branco, para estudar a erosão costeira, e o Parque Zoobotânico Arruda Câmara. Na coleta seletiva, a EMEF Jaime Lacet pesou 106 kg de papel, plástico, vidro e metal, destinados a catadores da comunidade.",
    ],
    numeros: [
      ["83", "gincanas e campanhas nos centros de educação infantil"],
      ["106 kg", "de recicláveis pesados em uma única escola"],
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
      { src: "/img/mob-ginasio.webp", w: 1600, h: 1200, alt: "Estudantes e estagiários reunidos no ginásio após a gincana ambiental", legenda: "Gincana Ambiental no ginásio da EMEF e EJA Aníbal Limeira" },
      { src: "/img/mob-cabobranco.webp", w: 1600, h: 900, alt: "Turma em aula de campo na Estação Cabo Branco", legenda: "Aula de campo na Estação Cabo Branco, em João Pessoa" },
    ],
  },
  {
    id: "comunicacao",
    n: "04",
    nome: "Comunicação e visibilidade",
    valor: "1.282",
    titulo: "publicações aproximaram o projeto da comunidade",
    texto: [
      "Cada unidade alimentou semanalmente as redes do projeto, com destaque para o perfil @projetoasaverde no Instagram, e a equipe de Mídia produziu stories, vídeos e coberturas das visitas institucionais. A comunicação deu transparência ao trabalho realizado e valorizou o protagonismo de estudantes e estagiários.",
      "Em agosto, o projeto chegou à imprensa: estagiárias da EMEF Jaime Lacet apresentaram o Asa Verde na Rádio 100.5 FM, de Santa Rita, e a TV Cabo Branco registrou a caminhada ecológica da escola. No 7 de Setembro, a EMEF Estevão José Carneiro da Cunha levou a temática ambiental ao desfile cívico da cidade.",
    ],
    numeros: [
      ["2", "reportagens na imprensa"],
      ["10", "estagiários na equipe de Mídia"],
    ],
    fotos: [
      { src: "/img/com-radio.webp", w: 675, h: 1200, alt: "Estagiária do Asa Verde em entrevista na Rádio 100.5 FM", legenda: "Rádio 100.5 FM, 17 de agosto" },
      { src: "/img/com-tv.webp", w: 900, h: 1200, alt: "Reportagem da TV Cabo Branco em escola atendida pelo projeto", legenda: "TV Cabo Branco, 21 de agosto" },
      { src: "/img/com-desfile.webp", w: 900, h: 1200, alt: "Estudantes no desfile cívico de 7 de Setembro com faixa sobre árvores", legenda: "Desfile cívico de 7 de Setembro" },
    ],
  },
];

// Unidades: posições do marcador no mapa em % (x, y), medidas sobre a imagem mapa.webp.
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

// Resultados por unidade (Relatório 2026, p. 19).
// [n, nome curto, oficinas, palestras, gincanas, arborização, mudas, publicações, participações]
export const RESULTADOS_UNIDADES = [
  ["01", "Aníbal Limeira", 29, 54, 3, 10, 24, 52, 1884],
  ["02", "Dr. Antônio Pereira de Almeida", 42, 37, 3, 1, 11, 83, 1512],
  ["03", "Carlos Arnóbio Maroja Di Pace", 58, 75, 2, 2, 2, 93, 2875],
  ["04", "Emília Cavalcante de Morais Neta", 28, 9, 14, 14, 114, 56, 1675],
  ["05", "Estevão José Carneiro da Cunha", 28, 49, 4, 8, 39, 76, 1721],
  ["06", "Índio Piragibe", 43, 37, 4, 2, 2, 98, 1660],
  ["07", "Jaime Lacet", 191, 165, 53, 8, 244, 153, 16604],
  ["08", "Monsenhor Rafael de Barros", 22, 27, 1, 7, 198, 56, 730],
  ["09", "Odilon Ribeiro Coutinho", 126, 55, 1, 22, 269, 104, 4512],
  ["10", "Dr. Flávio Maroja Filho", 23, 27, 2, 2, 2, 25, 940],
  ["—", "Padre João Félix Medeiros (fase inicial)", 2, 2, 2, 2, 2, 3, 41],
  ["11", "CIEI Elias Heckmans", 35, 23, 2, 3, 32, 56, 1013],
  ["12", "CIEI Heitel Santiago", 55, 58, 21, 8, 66, 85, 1999],
  ["13", "EMEIF Tiradentes", 44, 20, 12, 5, 135, 74, 1515],
  ["14", "CIEI Lourdes Serejo", 8, 21, 4, 4, 31, 59, 368],
  ["15", "CIEI Maria Carmelita Maroja Pedroza", 20, 23, 22, 2, 2, 73, 670],
  ["16", "CIEI Carmelita Maroja (Anexo)", 43, 44, 2, 1, 40, 75, 955],
  ["17", "CIEI Nenzinha Ribeiro", 56, 8, 20, 12, 47, 61, 832],
];

export const COLUNAS_RESULTADOS = [
  { k: 2, nome: "Oficinas" },
  { k: 3, nome: "Palestras" },
  { k: 4, nome: "Gincanas e campanhas" },
  { k: 5, nome: "Arborização" },
  { k: 6, nome: "Mudas" },
  { k: 7, nome: "Publicações" },
  { k: 8, nome: "Participações" },
];

export const MESES = [
  {
    mes: "abr",
    nome: "Abril",
    eventos: [
      ["15", "Abertura do ciclo 2026", "Cerimônia com o Prefeito de Santa Rita, o Ministério Público da Paraíba e o IFPB."],
      ["22–29", "Formação dos multiplicadores", "Capacitações presenciais e lançamento da plataforma de formação online, com quatro módulos e certificação."],
    ],
  },
  {
    mes: "mai",
    nome: "Maio",
    eventos: [["11–26", "Chegada às escolas", "Recepção dos gestores, capacitação com a SEMMA, entrega das cartas de apresentação e início das atividades."]],
  },
  {
    mes: "jun",
    nome: "Junho",
    eventos: [["2", "Corredor Verde", "Mobilização porta a porta na Av. Assis Chateaubriand, em Tibiri II, na Semana do Meio Ambiente, com SEMMA e CEDHOR."]],
  },
  {
    mes: "jul",
    nome: "Julho",
    eventos: [
      ["7", "Início nos centros de educação infantil", "Sete CIEIs passam a receber o projeto, que chega a crianças de 4 a 6 anos."],
      ["27", "Visitas da Promotoria de Justiça", "A Promotora de Justiça Dra. Miriam Pereira Vasconcelos inicia as visitas de acompanhamento às unidades, concluídas em novembro."],
    ],
  },
  {
    mes: "ago",
    nome: "Agosto",
    eventos: [
      ["4", "Nova escola", "Início na EMEIF e EJA Dr. Flávio Maroja Filho."],
      ["17–21", "O projeto na imprensa", "Entrevistas na Rádio 100.5 FM e na TV Cabo Branco, que cobriu a caminhada ecológica da EMEF Jaime Lacet."],
    ],
  },
  {
    mes: "set",
    nome: "Setembro",
    eventos: [["", "7 de Setembro e Dia da Árvore", "Desfile cívico com tema ambiental, plantios, doação de mudas e implantação do Corredor Verde."]],
  },
  {
    mes: "out",
    nome: "Outubro",
    eventos: [["", "Eleições gerais", "O uso das escolas como locais de votação e o calendário escolar reduzem as atividades presenciais."]],
  },
  {
    mes: "nov",
    nome: "Novembro",
    eventos: [["", "Encerramento", "Últimas atividades e despedidas nas unidades; certificação de estagiários, orientadores e unidades."]],
  },
];

export const GALERIA = [
  { src: "/img/gal-ciranda.webp", w: 1600, h: 922, alt: "Ciranda de crianças e estagiários no pátio", legenda: "Ciranda no pátio de um centro de educação infantil" },
  { src: "/img/gal-874.webp", w: 790, h: 1400, alt: "Crianças plantando mudas na grama", legenda: "Plantio de mudas com luvas, na educação infantil" },
  { src: "/img/gal-20.webp", w: 1400, h: 1050, alt: "Estudantes e estagiários reunidos ao ar livre após plantio", legenda: "Turma e equipe reunidas após o plantio" },
  { src: "/img/gal-826.webp", w: 1050, h: 1400, alt: "Crianças plantando uma muda florida", legenda: "Muda florida pronta para o plantio" },
  { src: "/img/gal-597.webp", w: 1400, h: 788, alt: "Turma exibindo trabalhos de educação ambiental em sala decorada", legenda: "Trabalhos da turma ao fim de uma sequência temática" },
  { src: "/img/gal-1108.webp", w: 1400, h: 1050, alt: "Estagiários com cartazes do Projeto Asa Verde", legenda: "Equipe de estagiários com os cartazes da escola" },
  { src: "/img/inf-tiradentes.webp", w: 1050, h: 1400, alt: "Estagiária conversando com crianças da educação infantil ao ar livre", legenda: "Roda de conversa ao ar livre" },
  { src: "/img/gal-267.webp", w: 1400, h: 1050, alt: "Turma reunida em sala de aula com estagiários", legenda: "Turma do ensino fundamental com a equipe" },
  { src: "/img/gal-797.webp", w: 1050, h: 1400, alt: "Crianças da educação infantil desenhando em atividade", legenda: "Atividade de desenho na educação infantil" },
  { src: "/img/maos-terra.webp", w: 1600, h: 1200, alt: "Mãos de criança segurando terra para o plantio", legenda: "Terra nas mãos, antes do plantio" },
  { src: "/img/gal-811.webp", w: 1050, h: 1400, alt: "Atividade com crianças em área coberta da escola", legenda: "Palestra em área coberta da escola" },
  { src: "/img/gal-555.webp", w: 1400, h: 788, alt: "Turma diante da fachada da EMEF Jaime Lacet", legenda: "Turma diante da EMEF Jaime Lacet" },
  { src: "/img/gal-904.webp", w: 1050, h: 1400, alt: "Brincadeira com bambolês na educação infantil", legenda: "Brincadeira com bambolês" },
  { src: "/img/gal-168.webp", w: 1050, h: 1400, alt: "Palestra em sala decorada com bandeirinhas", legenda: "Palestra em sala decorada para o São João" },
  { src: "/img/inf-patio.webp", w: 1600, h: 1204, alt: "Crianças e estagiária em atividade no pátio", legenda: "Atividade sensorial no pátio" },
  { src: "/img/gal-365.webp", w: 960, h: 1280, alt: "Estagiárias conduzindo atividade em sala de aula", legenda: "Estagiárias conduzindo a aula" },
  { src: "/img/gal-503.webp", w: 1280, h: 720, alt: "Exposição de trabalhos de estudantes com estagiários", legenda: "Exposição do Dia da Árvore" },
];

export const RELATORIOS = [
  {
    ano: "2026",
    titulo: "Relatório de Impacto 2026",
    periodo: "Abril a novembro de 2026",
    descricao:
      "Os resultados do segundo ciclo: os quatro eixos de atuação, a chegada à educação infantil, um capítulo para cada uma das 17 unidades, as vozes do projeto e as recomendações para 2027.",
    paginas: "64 páginas",
    tamanho: "22 MB",
    capa: "/relatorios/capa-2026.webp",
    pdf: LINKS.relatorio2026,
    arquivo: LINKS.arquivo2026,
    painel: LINKS.powerbi2026,
    numeros: [
      ["17", "unidades"],
      ["3.194", "ações"],
      ["41.506", "participações"],
    ],
  },
  {
    ano: "2025",
    titulo: "Relatório de Impacto 2025",
    periodo: "Junho a dezembro de 2025",
    descricao:
      "O primeiro ciclo do projeto em 10 escolas municipais, com 60 estagiários, a implantação da coleta seletiva e a destinação de 2.322,5 kg de recicláveis à COREMM.",
    paginas: "16 páginas",
    tamanho: "1,8 MB",
    capa: "/relatorios/capa-2025.webp",
    pdf: LINKS.relatorio2025,
    arquivo: LINKS.arquivo2025,
    painel: LINKS.powerbi2025,
    numeros: [
      ["10", "escolas"],
      ["2.231", "ações"],
      ["1.214", "árvores nativas"],
    ],
  },
];
export const PARCEIROS = {
  realizacao: [
    { nome: "Ministério Público da Paraíba", logo: "/logos/mppb.webp", w: 499, h: 185 },
    { nome: "Prefeitura Municipal de Santa Rita", logo: "/logos/santarita.webp", w: 307, h: 240 },
    { nome: "Secretaria Municipal de Meio Ambiente de Santa Rita (SEMMA)", logo: "/logos/semma.webp", w: 465, h: 240 },
    { nome: "Instituto Federal da Paraíba – Campus Santa Rita", logo: "/logos/ifpb.webp", w: 170, h: 240 },
  ],
  apoio: [
    { nome: "Cooperativa de Trabalho dos Catadores e Catadoras de Reciclagem de Marcos Moura (COREMM)", logo: "/logos/cooremm.webp", w: 491, h: 240 },
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

export const EVOLUCAO = [
  { indicador: "Unidades atendidas", a: 10, b: 17 },
  { indicador: "Estagiários multiplicadores", a: 60, b: 104 },
  { indicador: "Oficinas de educação ambiental", a: 256, b: 853 },
  { indicador: "Palestras de educação ambiental", a: 355, b: 734 },
  { indicador: "Gincanas e campanhas", a: 41, b: 172 },
  { indicador: "Publicações digitais", a: 218, b: 1282 },
  { indicador: "Ações registradas", a: 2231, b: 3194 },
];

export const INFANTIL = [
  ["261", "oficinas"],
  ["197", "palestras"],
  ["83", "gincanas e campanhas"],
  ["351", "mudas plantadas"],
  ["7.352", "participações"],
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