// Núcleo comum: obrigatório para todos os perfis.
// Tipos de bloco aceitos estão documentados em Leitor.jsx.

export const NUCLEO = {
  id: "nucleo",
  nome: "O Asa Verde",
  subtitulo: "Núcleo comum",
  descricao:
    "A origem, a missão, as instituições, a forma de trabalho e os resultados do projeto. É a base de todas as trilhas e o percurso de quem quer conhecer o Asa Verde.",
  foto: { src: "/img/capa.webp", w: 1216, h: 1720, alt: "Mãos de criança pintadas de verde carimbando um painel coletivo" },
  licoes: [
    {
      id: "n1",
      titulo: "Por que o Asa Verde existe",
      resumo: "A origem do projeto, a missão e o que já foi construído em dois ciclos.",
      blocos: [
        {
          t: "lead",
          texto:
            "O Projeto Asa Verde existe para transformar as escolas públicas de Santa Rita em núcleos vivos de educação ambiental: lugares onde crianças e adolescentes aprendem a compreender o território em que vivem, a cuidar dele e a agir como agentes de mudança nas suas comunidades.",
        },
        {
          t: "p",
          texto:
            "A iniciativa foi idealizada pelo **Ministério Público da Paraíba**, a partir da concepção da Promotora de Justiça **Dra. Miriam Pereira Vasconcelos**. Para tirá-la do papel, o MPPB articulou uma parceria com a **Prefeitura Municipal de Santa Rita** e com o **Instituto Federal da Paraíba – Campus Santa Rita**. A parceria foi firmada em 5 de junho de 2025, Dia Mundial do Meio Ambiente.",
        },
        {
          t: "ideia",
          titulo: "A missão em uma frase",
          texto: "Transformar escolas em núcleos vivos de educação ambiental, com presença contínua, integrada à rotina escolar e conectada com a realidade de Santa Rita.",
        },
        { t: "h", texto: "Presença contínua, e não ações isoladas" },
        {
          t: "p",
          texto:
            "Palestras pontuais costumam ser esquecidas na semana seguinte. O Asa Verde foi desenhado de outra forma: equipes de estudantes do IFPB vão às mesmas unidades toda semana, ao longo de meses, com sequências de atividades planejadas para cada turma. É essa regularidade que cria vínculo com as crianças e transforma informação em hábito.",
        },
        {
          t: "p",
          texto:
            "O projeto aposta no estudante do IFPB como agente principal. São jovens dos cursos técnicos integrados de Meio Ambiente e Informática, que conhecem o município e têm com os alunos uma proximidade que um palestrante externo raramente alcança. Por isso a formação importa tanto: o projeto só funciona quando cada pessoa entende o que está fazendo e por que está fazendo.",
        },
        {
          t: "numeros",
          titulo: "Dois ciclos em números",
          itens: [
            ["10 → 17", "unidades atendidas, de 2025 para 2026"],
            ["60 → 104", "estudantes multiplicadores do IFPB"],
            ["2.231 → 3.194", "ações registradas no sistema"],
            ["41.506", "participações de estudantes e crianças em 2026"],
            ["1.214 + 1.260", "árvores e mudas plantadas nos dois ciclos"],
            ["2.322,5 kg", "de recicláveis destinados à COOREMM em 2025"],
          ],
        },
        {
          t: "foto",
          src: "/img/equipe.webp",
          w: 2200,
          h: 1237,
          alt: "Estagiários, professores orientadores e coordenação do Projeto Asa Verde reunidos",
          legenda: "Estagiários, professores orientadores e coordenação do ciclo 2026.",
        },
        { t: "h", texto: "O que muda na vida de quem participa" },
        {
          t: "relato",
          texto: "Vocês só têm uma aula por semana, então eu tenho que aproveitar enquanto vocês estão aqui, porque a aula de vocês é a minha preferida.",
          autor: "Estudante do 6º ano da EMEF e EJA Aníbal Limeira, em relato registrado pela equipe (julho de 2026)",
        },
        {
          t: "p",
          texto:
            "Os relatos das equipes mostram crianças que levam para casa o hábito de separar resíduos, que continuam cuidando da muda plantada semanas depois e que reagem diante de uma queimada perto da escola. Em 2026, o projeto também rendeu a Santa Rita o **prêmio prata do Sebrae Cidade Empreendedora**, na categoria Sustentabilidade e Meio Ambiente.",
        },
        {
          t: "check",
          pergunta: "Quem idealizou o Projeto Asa Verde?",
          opcoes: ["A Secretaria Municipal de Educação", "O Ministério Público da Paraíba", "A COOREMM", "O Sebrae"],
          certa: 1,
          explica: "O projeto nasceu de uma iniciativa do MPPB, a partir da concepção da Promotora de Justiça Dra. Miriam Pereira Vasconcelos, que articulou a parceria com a Prefeitura e o IFPB.",
        },
      ],
    },
    {
      id: "n2",
      titulo: "Quem faz o Asa Verde",
      resumo: "As instituições parceiras, as funções de cada pessoa e os caminhos de comunicação.",
      blocos: [
        {
          t: "lead",
          texto:
            "O Asa Verde reúne o sistema de justiça, o poder público municipal e a rede federal de educação profissional. Cada parceiro tem um papel definido, e entender esses papéis ajuda você a saber a quem recorrer e como o projeto se organiza.",
        },
        { t: "diagrama", nome: "governanca" },
        {
          t: "cartoes",
          colunas: 2,
          itens: [
            {
              titulo: "Ministério Público da Paraíba",
              rotulo: "Idealizador",
              texto: "Concebeu o projeto e faz o acompanhamento institucional das ações. Em 2026, a Promotora de Justiça visitou as unidades entre julho e novembro.",
            },
            {
              titulo: "Prefeitura Municipal de Santa Rita",
              rotulo: "Financiadora e gestora local",
              texto: "Financia o projeto e faz a gestão local, com a articulação das Secretarias Municipais de Meio Ambiente (SEMMA) e de Educação.",
            },
            {
              titulo: "IFPB – Campus Santa Rita",
              rotulo: "Instituição executora",
              texto: "Seleciona e forma os estudantes multiplicadores, faz a coordenação pedagógica, o monitoramento das ações e a prestação de contas.",
            },
            {
              titulo: "COOREMM",
              rotulo: "Apoio",
              texto: "A Cooperativa de Trabalho dos Catadores e Catadoras de Reciclagem de Marcos Moura recebe os recicláveis das campanhas de coleta seletiva.",
            },
          ],
        },
        { t: "h", texto: "Como as pessoas se organizam no dia a dia" },
        {
          t: "p",
          texto:
            "Em cada unidade atua uma equipe de quatro a cinco estagiários, com um líder. A equipe é acompanhada por um **supervisor da unidade**, professor ou professora da própria escola, e por um **professor orientador do IFPB**. Duas equipes de apoio dão suporte a todas as unidades: a de **Planejamento**, que cuida dos dados e do monitoramento, e a de **Mídia**, que cuida da comunicação.",
        },
        { t: "diagrama", nome: "estrutura" },
        {
          t: "tabela",
          titulo: "As funções no ciclo 2026",
          colunas: ["Função", "Quem é", "Papel principal"],
          linhas: [
            ["Multiplicadores ambientais", "84 estagiários nas unidades", "Planejam e conduzem as ações educativas e registram cada uma delas"],
            ["Líder da equipe", "Um estagiário de cada unidade", "Organiza os registros do grupo, faz a ponte com Mídia e Planejamento e aciona a coordenação"],
            ["Equipe de Planejamento", "10 estagiários", "Acompanha o sistema de relatórios, a qualidade dos dados e as metas"],
            ["Equipe de Mídia", "10 estagiários", "Produz a comunicação do projeto e a cobertura das ações e visitas"],
            ["Professores orientadores", "11 professores do IFPB", "Orientam pedagogicamente as equipes e acompanham o estágio"],
            ["Supervisores das unidades", "Professores das 17 unidades", "Acompanham a equipe na escola e combinam turmas, horários e rotina"],
            ["Direção da unidade", "Gestão de cada escola ou CIEI", "Acolhe o projeto e garante as condições para as ações"],
            ["Coordenação", "IFPB e SEMMA", "Planeja o ciclo, decide os rumos e responde pelo projeto"],
          ],
        },
        { t: "h", texto: "O caminho da comunicação" },
        {
          t: "p",
          texto:
            "Dúvidas e problemas seguem um caminho simples: o estagiário fala com o líder da equipe; o líder leva ao professor orientador; o orientador aciona a coordenação quando necessário. Na escola, a equipe combina tudo com o supervisor da unidade e, quando for o caso, com a direção. Ninguém resolve sozinho uma questão que envolve a rotina da escola ou o nome do projeto.",
        },
        {
          t: "cenario",
          situacao:
            "Durante a visita, a diretora pergunta se a equipe pode ficar com uma turma durante a manhã, porque uma professora faltou. O que a equipe deve fazer?",
          opcoes: [
            {
              texto: "Aceitar, para manter uma boa relação com a escola.",
              retorno: "A intenção é boa, mas a equipe não substitui professores. Assumir uma turma sozinha expõe os estagiários e a escola e foge do que foi combinado no projeto.",
            },
            {
              texto: "Agradecer a confiança, explicar que a equipe atua nas atividades combinadas do projeto e levar o pedido ao orientador ou à coordenação.",
              retorno: "Isso mesmo. A equipe preserva a relação com a escola, não assume uma responsabilidade que não é sua e leva a questão a quem pode decidir.",
              boa: true,
            },
            {
              texto: "Recusar e ir embora mais cedo, já que a atividade não vai acontecer.",
              retorno: "Recusar sem explicar desgasta a relação. O melhor caminho é explicar com cordialidade e comunicar o orientador.",
            },
          ],
        },
      ],
    },
    {
      id: "n3",
      titulo: "Como o projeto funciona",
      resumo: "O método em quatro passos, os eixos de atuação, as modalidades de ação e o ciclo do ano.",
      blocos: [
        {
          t: "lead",
          texto:
            "O Asa Verde combina quatro elementos: formação dos multiplicadores, presença semanal nas unidades, registro sistemático de cada ação e acompanhamento institucional pelos parceiros.",
        },
        {
          t: "passos",
          itens: [
            ["Formação dos multiplicadores", "Antes de chegar às escolas, cada estagiário conclui esta formação online e participa de capacitações presenciais no IFPB, com a SEMMA e com profissionais da educação infantil do município."],
            ["Equipes em cada unidade", "Equipes de quatro a cinco estagiários atuam semanalmente em turmas definidas com a gestão escolar, acompanhadas pelo supervisor da unidade e pelo professor orientador do IFPB."],
            ["Ação educativa contínua", "Palestras, oficinas, gincanas, campanhas e ações de arborização são organizadas em sequências temáticas, adaptadas a cada faixa etária, do Infantil 4 ao 9º ano, sempre unindo uma introdução conceitual a uma atividade prática."],
            ["Registro e acompanhamento", "Cada ação é registrada no sistema de relatórios e consolidada em relatórios mensais e no painel público em Power BI. A Promotoria de Justiça acompanha as atividades com visitas às unidades."],
          ],
        },
        { t: "h", texto: "O ciclo de cada ação" },
        {
          t: "p",
          texto: "Toda ação do projeto, da palestra ao plantio, passa pelas mesmas cinco etapas. Pular uma delas compromete o resultado de todo o grupo.",
        },
        { t: "diagrama", nome: "cicloAcao" },
        { t: "h", texto: "Os quatro eixos de atuação" },
        {
          t: "cartoes",
          colunas: 2,
          itens: [
            { titulo: "Educação ambiental", rotulo: "1.587 encontros em 2026", texto: "Palestras e oficinas em sala de aula: o núcleo pedagógico do projeto." },
            { titulo: "Arborização", rotulo: "1.260 mudas em 113 ações", texto: "Plantio tratado como processo educativo, da escolha do local à manutenção das mudas." },
            { titulo: "Mobilização", rotulo: "172 gincanas e campanhas", texto: "Gincanas, campanhas, coleta seletiva e aulas de campo que levam o aprendizado para além da sala." },
            { titulo: "Comunicação", rotulo: "1.282 publicações", texto: "Registro e divulgação das ações, com transparência e valorização do protagonismo de estudantes e estagiários." },
          ],
        },
        {
          t: "tabela",
          titulo: "As modalidades de ação",
          colunas: ["Modalidade", "O que é", "Como conta no projeto"],
          linhas: [
            ["Palestra", "Encontro dialogado que apresenta um tema e provoca reflexão", "Uma ação por encontro registrado"],
            ["Oficina", "Atividade prática em que os alunos fazem, experimentam e produzem", "Uma ação por encontro registrado"],
            ["Gincana", "Desafio coletivo e pontual, com regras e equipes", "Uma ação de gincanas e campanhas"],
            ["Campanha", "Mobilização contínua em torno de uma meta, como a coleta seletiva", "Uma ação de gincanas e campanhas"],
            ["Arborização", "Plantio, cuidado e acompanhamento de mudas com os alunos", "Uma ação, com o número de mudas informado"],
            ["Publicação digital", "Conteúdo publicado sobre as ações do projeto", "Uma ação registrada (fora das ações presenciais)"],
          ],
        },
        {
          t: "ideia",
          titulo: "Uma regra que vale para todos",
          texto: "O que não está registrado não aconteceu para o projeto. Os números do relatório de impacto, do painel em Power BI e da prestação de contas ao Ministério Público vêm exclusivamente do sistema de relatórios.",
        },
        { t: "h", texto: "O ano do projeto" },
        {
          t: "linha",
          itens: [
            ["Abril", "Abertura e formação", "Cerimônia de abertura com os parceiros e formação dos multiplicadores, online e presencial."],
            ["Maio", "Chegada às escolas", "Recepção pelas gestões, capacitação com a SEMMA, entrega das cartas de apresentação e início das atividades."],
            ["Junho", "Semana do Meio Ambiente", "Grandes mobilizações, como o Corredor Verde em Tibiri II."],
            ["Julho", "Educação infantil e visitas", "Os centros de educação infantil entram no projeto e começam as visitas da Promotoria de Justiça."],
            ["Agosto e setembro", "Pico de atividades", "Agosto concentrou 1.005 ações em 2026. Setembro traz o 7 de Setembro e o Dia da Árvore."],
            ["Outubro", "Calendário apertado", "Feriados, eleições e eventos escolares reduzem os dias disponíveis: as metas precisam estar adiantadas."],
            ["Novembro", "Encerramento", "Últimas atividades, despedidas nas unidades e certificação de estagiários, orientadores e unidades."],
          ],
        },
        {
          t: "check",
          pergunta: "Uma equipe fez uma ótima oficina, mas ninguém registrou no sistema. Para o projeto, essa ação:",
          opcoes: ["Conta, porque aconteceu de fato", "Conta só se tiver foto no Instagram", "Não aparece nos resultados nem na prestação de contas", "Conta pela metade"],
          certa: 2,
          explica: "Os indicadores do projeto vêm do sistema de relatórios. Sem registro, a ação não entra no painel, nos relatórios mensais nem no relatório de impacto.",
        },
      ],
    },
    {
      id: "n4",
      titulo: "Onde atuamos e o que aprendemos",
      resumo: "As 17 unidades, os resultados que contam a história do ciclo 2026 e as recomendações para o próximo.",
      blocos: [
        {
          t: "lead",
          texto: "Em 2026, o Asa Verde chegou a 17 unidades em 8 bairros e localidades: 10 escolas de ensino fundamental e 7 centros de educação infantil, na zona urbana de Santa Rita e em Lerolândia, a cerca de 18 km do centro.",
        },
        { t: "mapa" },
        { t: "h", texto: "Resultados que contam uma história" },
        {
          t: "caso",
          unidade: "EMEF Jaime Lacet",
          titulo: "575 ações e o projeto na imprensa",
          texto: "A unidade de maior intensidade do ciclo organizou o ano em temas mensais, como “Expedição Biodiversidade” e “Cientistas da Água”. Plantou 244 mudas, pesou 106 kg de recicláveis destinados a um catador da comunidade e levou o projeto à Rádio 100.5 FM e à TV Cabo Branco.",
        },
        {
          t: "caso",
          unidade: "EMEF Odilon Ribeiro Coutinho",
          titulo: "Um tema que nasceu da escola",
          texto: "Líder em arborização, com 22 ações e 269 mudas, a equipe trabalhou a valorização dos alimentos depois de observar um episódio de desperdício de merenda na própria escola. É a educação ambiental partindo da realidade dos alunos.",
        },
        {
          t: "caso",
          unidade: "CIEI Heitel Santiago",
          titulo: "O projeto dentro das famílias",
          texto: "Com 229 ações, foi o centro de educação infantil mais ativo. As crianças plantaram feijão depois de ouvir a história de João e o pé de feijão e, no Dia da Árvore, cada uma levou uma muda para casa com orientações de plantio.",
        },
        {
          t: "relato",
          texto: "Quando uma queimada atingiu uma área próxima à escola, uma criança pediu à professora que gravasse um vídeo para os estagiários, reclamando do ocorrido e pedindo que eles fossem resolver o problema.",
          autor: "Relato da equipe da EMEIF Tiradentes (outubro de 2026)",
        },
        { t: "h", texto: "O que o ciclo 2026 ensinou" },
        {
          t: "cartoes",
          colunas: 2,
          itens: [
            { titulo: "Calendário integrado", texto: "Recessos, avaliações, plantões pedagógicos e o período eleitoral reduziram os dias disponíveis. Planejar junto com a Secretaria de Educação e com cada escola é decisivo." },
            { titulo: "Metodologia para a primeira infância", texto: "Histórias, música, brincadeiras e plantio funcionaram melhor que exposições. A formação específica das equipes dos CIEIs fez diferença." },
            { titulo: "Registro digital fortalece a gestão", texto: "O sistema de relatórios e o painel público permitiram acompanhar cada unidade quase em tempo real e dar transparência aos resultados." },
            { titulo: "Cuidar do que foi plantado", texto: "As próprias equipes apontaram a necessidade de acompanhar a sobrevivência das mudas plantadas nos dois ciclos, e não apenas plantar novas." },
          ],
        },
        {
          t: "lista",
          titulo: "Recomendações para o próximo ciclo",
          numerada: true,
          itens: [
            "Pactuar o calendário do projeto com a Secretaria de Educação no início do ano, prevendo provas, eventos escolares e o calendário eleitoral.",
            "Instituir um indicador de manutenção e sobrevivência das mudas plantadas.",
            "Retomar a coleta seletiva com kits de pesagem nas unidades e rota regular de destinação à COOREMM.",
            "Aplicar um diagnóstico de aprendizagem no início e no fim do ciclo, em turmas amostrais.",
            "Consolidar um caderno pedagógico do Asa Verde, com sequências didáticas para a educação infantil e o ensino fundamental.",
            "Estabelecer um calendário de pautas com a imprensa e realizar uma mostra de encerramento com todas as unidades.",
          ],
        },
        {
          t: "link",
          texto: "Todos os indicadores podem ser consultados no Painel de Monitoramento, em Power BI, de acesso público.",
          rotulo: "Abrir o painel de monitoramento",
          href: "painel",
        },
      ],
    },
  ],
  avaliacao: [
    {
      q: "Qual é a missão do Projeto Asa Verde?",
      opcoes: [
        "Realizar palestras ambientais pontuais nas escolas que pedirem",
        "Transformar as escolas públicas de Santa Rita em núcleos vivos de educação ambiental",
        "Fiscalizar o descarte de resíduos nas escolas municipais",
        "Substituir as aulas de ciências por atividades ao ar livre",
      ],
      certa: 1,
      licao: "n1",
      explica: "A missão é a presença contínua da educação ambiental nas escolas, integrada à rotina e conectada com o território.",
    },
    {
      q: "Qual é o papel do IFPB – Campus Santa Rita no projeto?",
      opcoes: ["Idealizador", "Financiador", "Instituição executora", "Fiscal das escolas"],
      certa: 2,
      licao: "n2",
      explica: "O IFPB seleciona e forma os multiplicadores, coordena a parte pedagógica, monitora as ações e presta contas. O MPPB idealizou e a Prefeitura financia e faz a gestão local.",
    },
    {
      q: "Quem acompanha a equipe dentro da escola, no dia a dia?",
      opcoes: ["A Promotora de Justiça", "O supervisor da unidade, professor da própria escola", "A equipe de Mídia", "Ninguém: a equipe atua de forma independente"],
      certa: 1,
      licao: "n2",
      explica: "Cada equipe é acompanhada pelo supervisor da unidade e pelo professor orientador do IFPB.",
    },
    {
      q: "Um estagiário tem uma dúvida sobre uma situação na escola. Qual é o caminho correto?",
      opcoes: [
        "Resolver sozinho para não incomodar ninguém",
        "Publicar a situação nas redes do projeto",
        "Falar com o líder da equipe, que leva ao orientador e, se necessário, à coordenação",
        "Ligar diretamente para a Promotoria",
      ],
      certa: 2,
      licao: "n2",
      explica: "As questões seguem o caminho estagiário, líder, orientador e coordenação. Na escola, tudo é combinado com o supervisor e, quando for o caso, com a direção.",
    },
    {
      q: "Quais são as cinco etapas do ciclo de cada ação?",
      opcoes: [
        "Planejar, executar, registrar, divulgar e consolidar",
        "Chegar, apresentar, fotografar, publicar e sair",
        "Pesquisar, escrever, imprimir, entregar e arquivar",
        "Convidar, sortear, premiar, divulgar e encerrar",
      ],
      certa: 0,
      licao: "n3",
      explica: "Toda ação é planejada, executada, registrada no sistema, divulgada pela comunicação e consolidada nos relatórios e no painel.",
    },
    {
      q: "De onde vêm os números do relatório de impacto e do painel em Power BI?",
      opcoes: ["Das publicações no Instagram", "Do sistema de relatórios do projeto", "Das listas de chamada das escolas", "De estimativas da coordenação"],
      certa: 1,
      licao: "n3",
      explica: "Os indicadores são consolidados a partir do sistema de relatórios, em que as equipes registram cada ação.",
    },
    {
      q: "O indicador de participações soma os participantes de cada ação. O que isso significa?",
      opcoes: [
        "Que cada estudante é contado uma única vez no ano",
        "Que um mesmo estudante pode ser contado mais de uma vez, se participou de várias ações",
        "Que só contam os estudantes matriculados no 9º ano",
        "Que o número é uma estimativa feita no fim do ano",
      ],
      certa: 1,
      licao: "n4",
      explica: "Participações correspondem à soma dos participantes registrados em cada atividade. Por isso é diferente do número de estudantes.",
    },
    {
      q: "Qual destes aprendizados do ciclo 2026 orienta o planejamento do próximo ciclo?",
      opcoes: [
        "As escolas preferem receber o projeto só no segundo semestre",
        "Na educação infantil, exposições longas funcionam melhor que brincadeiras",
        "O calendário precisa ser pactuado no início do ano, prevendo provas, eventos e eleições",
        "O registro das ações pode ser feito no fim do ciclo",
      ],
      certa: 2,
      licao: "n4",
      explica: "Recessos, avaliações e o período eleitoral reduziram os dias disponíveis em 2026. A primeira recomendação para o próximo ciclo é pactuar o calendário logo no início.",
    },
  ],
};
