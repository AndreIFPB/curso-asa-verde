// Trilhas de quem acompanha o projeto: orientadores do IFPB,
// supervisores das unidades e direção das escolas e CIEIs.

export const ORIENTADORES = {
  id: "orientadores",
  nome: "Professores orientadores",
  publico: "Professores do IFPB que orientam as equipes",
  descricao:
    "O papel do orientador previsto na Lei do Estágio, o acompanhamento pedagógico das equipes, a avaliação dos estagiários e como agir em situações delicadas.",
  foto: { src: "/img/acp-odilon.webp", w: 1400, h: 1050, alt: "Visita da Promotora de Justiça à EMEF Odilon Ribeiro Coutinho com a equipe de estagiários" },
  horas: 12,
  licoes: [
    {
      id: "o1",
      titulo: "O papel do orientador",
      resumo: "O que a lei prevê e o que o projeto espera do professor orientador.",
      blocos: [
        {
          t: "lead",
          texto:
            "O professor orientador é a referência pedagógica da equipe. É quem ajuda os estagiários a transformar boas intenções em ações bem planejadas, e quem acompanha o estágio como experiência formativa.",
        },
        {
          t: "lei",
          titulo: "Lei do Estágio, art. 3º, § 1º",
          texto: "O estágio deve ter acompanhamento efetivo pelo professor orientador da instituição de ensino e por supervisor da parte concedente.",
          fonte: "Lei nº 11.788/2008",
        },
        {
          t: "lei",
          titulo: "Lei do Estágio, art. 7º, incisos III e IV",
          texto: "Cabe à instituição de ensino indicar professor orientador da área do estágio, responsável pelo acompanhamento e avaliação das atividades, e exigir relatório das atividades em prazo não superior a seis meses.",
          fonte: "Lei nº 11.788/2008",
        },
        {
          t: "p",
          texto:
            "Em 2026, **11 professores do IFPB** orientaram as equipes das 17 unidades. Os estagiários são, em sua maioria, adolescentes dos cursos técnicos integrados. Para muitos, é a primeira experiência de conduzir uma turma. O olhar do orientador faz diferença na qualidade das ações e no desenvolvimento de cada um.",
        },
        {
          t: "cartoes",
          titulo: "O que o projeto espera do orientador",
          colunas: 2,
          itens: [
            { titulo: "Orientação pedagógica", texto: "Revisar o planejamento mensal da equipe e sugerir temas, sequências e abordagens adequadas a cada faixa etária." },
            { titulo: "Acompanhamento em campo", texto: "Visitar a unidade ao longo do ciclo, observar ações e conversar com o supervisor e a direção." },
            { titulo: "Acompanhamento dos registros", texto: "Verificar no sistema e no painel se a equipe registra com regularidade e qualidade." },
            { titulo: "Avaliação do estagiário", texto: "Acompanhar frequência, postura e evolução de cada estagiário e contribuir com os relatórios de estágio." },
          ],
        },
        { t: "diagrama", nome: "estrutura" },
      ],
    },
    {
      id: "o2",
      titulo: "Acompanhando a equipe",
      resumo: "Como revisar planos, observar ações e dar retorno que faz a equipe crescer.",
      blocos: [
        {
          t: "lead",
          texto: "Acompanhar uma equipe é combinar proximidade e autonomia: estar presente o suficiente para orientar, sem fazer pelos estagiários o que eles precisam aprender a fazer.",
        },
        {
          t: "passos",
          titulo: "O acompanhamento ao longo do mês",
          itens: [
            ["Revise o plano do mês", "Confira se há tema, sequência de atividades, distribuição por turma e variedade de formatos."],
            ["Converse com o líder", "Combine um canal e uma frequência de contato, com espaço para dúvidas e dificuldades."],
            ["Observe uma ação", "Sempre que possível, assista a uma atividade na unidade e anote o que funcionou e o que pode melhorar."],
            ["Dê retorno", "Comece pelo que funcionou, aponte um ou dois pontos de melhoria concretos e combine o próximo passo."],
            ["Acompanhe os registros", "Verifique no painel se o ritmo da equipe está compatível com as metas da unidade."],
          ],
        },
        {
          t: "lista",
          titulo: "O que observar em uma boa ação",
          itens: [
            "O objetivo da atividade está claro para a equipe e para a turma?",
            "O tema parte da realidade dos alunos, do bairro ou da escola?",
            "Os alunos participam ativamente ou só assistem?",
            "A linguagem e a duração estão adequadas à idade da turma?",
            "Há encerramento, com reflexão e um compromisso concreto?",
            "A equipe contou os participantes e fez as fotos para o registro?",
            "A postura da equipe é respeitosa e segura com as crianças?",
          ],
        },
        {
          t: "comparar",
          itens: [
            { titulo: "Retorno que trava", texto: "“A oficina foi fraca, vocês precisam se esforçar mais.”" },
            { titulo: "Retorno que faz crescer", texto: "“A abertura com a pergunta sobre o lixo de casa prendeu a turma. Na próxima, reservem dez minutos no fim para o encerramento: a atividade terminou sem a turma dizer o que aprendeu.”" },
          ],
        },
        {
          t: "caso",
          unidade: "EMEF Odilon Ribeiro Coutinho",
          titulo: "Quando a equipe enxerga a escola",
          texto: "A equipe trabalhou a valorização dos alimentos depois de observar um episódio de desperdício de merenda na própria escola. Estimular a equipe a partir do que observa na unidade é um dos papéis mais valiosos do orientador.",
        },
      ],
    },
    {
      id: "o3",
      titulo: "Avaliação e situações delicadas",
      resumo: "Critérios para avaliar estagiários e como agir diante de conflitos e riscos.",
      blocos: [
        {
          t: "lead",
          texto: "A avaliação do estagiário deve ser justa, baseada em evidências e conhecida por ele desde o início. Situações delicadas precisam de resposta rápida e do caminho certo.",
        },
        {
          t: "tabela",
          titulo: "Critérios de avaliação sugeridos",
          colunas: ["Critério", "Evidências"],
          linhas: [
            ["Assiduidade e pontualidade", "Presença nas ações combinadas e nos encontros da equipe"],
            ["Planejamento", "Contribuição para o plano mensal e preparo das atividades"],
            ["Condução das ações", "Observação em campo e retorno do supervisor da unidade"],
            ["Registro", "Regularidade e qualidade dos lançamentos no sistema"],
            ["Postura e trabalho em equipe", "Relação com colegas, escola e crianças"],
          ],
        },
        { t: "h", texto: "Quando acionar a coordenação" },
        {
          t: "lista",
          titulo: "Situações que não devem esperar",
          itens: [
            "Qualquer suspeita de risco à integridade de uma criança ou de um estagiário: comunique a coordenação e a direção da unidade imediatamente.",
            "Conflito entre a equipe e a escola que o diálogo direto não resolveu.",
            "Faltas repetidas de um estagiário ou abandono das atividades.",
            "Registros com indícios de informação falsa.",
            "Pedidos da escola que fogem das atividades do projeto.",
          ],
        },
        {
          t: "cenario",
          situacao: "O supervisor da unidade relata que a equipe tem chegado atrasada e que uma oficina foi cancelada sem aviso. Qual é o primeiro passo?",
          opcoes: [
            { texto: "Substituir a equipe por outra imediatamente.", retorno: "Uma medida drástica antes de ouvir a equipe é desproporcional e não resolve a causa." },
            {
              texto: "Agradecer o retorno, conversar com a equipe para entender o que aconteceu, combinar mudanças concretas e dar retorno ao supervisor.",
              retorno: "Isso mesmo. O orientador ouve os dois lados, corrige o rumo com a equipe e mantém a escola informada. Se o problema persistir, a coordenação é acionada.",
              boa: true,
            },
            { texto: "Esperar o próximo relatório para ver se melhora.", retorno: "Esperar transmite à escola que o projeto não acompanha a própria equipe. A resposta precisa ser rápida." },
          ],
        },
      ],
    },
  ],
  avaliacao: [
    {
      q: "O que a Lei do Estágio prevê sobre o acompanhamento do estagiário?",
      opcoes: ["Acompanhamento apenas pela escola onde atua", "Acompanhamento efetivo pelo professor orientador da instituição de ensino e por supervisor da parte concedente", "Nenhum acompanhamento obrigatório", "Acompanhamento apenas pelos colegas"],
      certa: 1,
      licao: "o1",
      explica: "É o que diz o art. 3º, § 1º, da Lei nº 11.788/2008.",
    },
    {
      q: "Qual é o prazo máximo para a instituição de ensino exigir o relatório de atividades do estagiário?",
      opcoes: ["Um ano", "Seis meses", "Um mês", "Não há prazo"],
      certa: 1,
      licao: "o1",
      explica: "O art. 7º, IV, fala em prazo não superior a seis meses.",
    },
    {
      q: "Qual destas atitudes caracteriza um bom acompanhamento da equipe?",
      opcoes: ["Planejar e conduzir as ações no lugar dos estagiários", "Revisar o plano, observar ações, dar retorno concreto e acompanhar os registros", "Aparecer só no encerramento do ciclo", "Avaliar apenas pelo número de publicações"],
      certa: 1,
      licao: "o2",
      explica: "O orientador combina proximidade e autonomia, orientando sem fazer pela equipe.",
    },
    {
      q: "Como deve ser um retorno que faz a equipe crescer?",
      opcoes: ["Genérico, para não desanimar", "Começa pelo que funcionou e aponta um ou dois pontos concretos de melhoria", "Lista todos os erros de uma vez", "Feito só por escrito no fim do ciclo"],
      certa: 1,
      licao: "o2",
      explica: "Retorno específico, equilibrado e com próximo passo combinado.",
    },
    {
      q: "Diante de suspeita de risco à integridade de uma criança, o orientador deve:",
      opcoes: ["Esperar a próxima reunião", "Comunicar a coordenação e a direção da unidade imediatamente", "Resolver sozinho com a equipe", "Publicar um alerta nas redes do projeto"],
      certa: 1,
      licao: "o3",
      explica: "Situações de risco não esperam: coordenação e direção são acionadas de imediato.",
    },
    {
      q: "Quais evidências sustentam uma avaliação justa do estagiário?",
      opcoes: ["Apenas a opinião do líder da equipe", "Presença, preparo, observação em campo, retorno do supervisor e qualidade dos registros", "Somente o número de ações registradas", "A popularidade nas redes"],
      certa: 1,
      licao: "o3",
      explica: "Critérios conhecidos desde o início e evidências de várias fontes tornam a avaliação justa.",
    },
  ],
};

export const SUPERVISORES = {
  id: "supervisores",
  nome: "Supervisores das unidades",
  publico: "Professores das escolas e CIEIs que acompanham as equipes",
  descricao:
    "Quem são os estagiários, o que a lei e o projeto esperam do supervisor, como receber e acompanhar a equipe e como dar retorno à coordenação.",
  foto: { src: "/img/gal-365.webp", w: 960, h: 1280, alt: "Estagiárias conduzindo atividade em sala de aula" },
  horas: 8,
  licoes: [
    {
      id: "s1",
      titulo: "O Asa Verde na sua unidade",
      resumo: "Quem são os estagiários e qual é o papel do supervisor.",
      blocos: [
        {
          t: "lead",
          texto:
            "A sua unidade recebe toda semana uma equipe de quatro a cinco estudantes do IFPB – Campus Santa Rita. Eles chegam para conduzir palestras, oficinas, gincanas, campanhas e plantios com as turmas, sempre em atividades combinadas com a escola.",
        },
        {
          t: "p",
          texto:
            "Os estagiários são, em sua maioria, adolescentes dos cursos técnicos integrados de Meio Ambiente e Informática. Passaram por esta formação e por capacitações presenciais antes de chegar à escola, e são orientados por um professor do IFPB. Ainda assim, estão aprendendo: o olhar do supervisor da unidade é decisivo para que tudo funcione bem.",
        },
        {
          t: "lei",
          titulo: "Lei do Estágio, art. 3º, § 1º, e art. 9º, inciso III",
          texto: "O estágio deve ter acompanhamento efetivo por professor orientador da instituição de ensino e por supervisor da parte concedente. Cada supervisor pode orientar e supervisionar até dez estagiários simultaneamente.",
          fonte: "Lei nº 11.788/2008",
        },
        {
          t: "cartoes",
          titulo: "O papel do supervisor da unidade",
          colunas: 2,
          itens: [
            { titulo: "Ponte com a escola", texto: "Ajuda a equipe a definir turmas e horários com a gestão e orienta sobre a rotina da unidade." },
            { titulo: "Acompanhamento das ações", texto: "Acompanha as atividades e garante que as turmas sigam sob a responsabilidade da escola." },
            { titulo: "Calendário", texto: "Avisa a equipe com antecedência sobre provas, eventos, feriados e mudanças de rotina." },
            { titulo: "Retorno", texto: "Conversa com a equipe e informa o orientador ou a coordenação sobre o que vai bem e o que precisa melhorar." },
          ],
        },
        {
          t: "numeros",
          titulo: "O que as unidades construíram em 2026",
          itens: [
            ["17", "unidades atendidas"],
            ["1.912", "ações educativas presenciais"],
            ["1.260", "mudas plantadas"],
            ["41.506", "participações de estudantes e crianças"],
          ],
        },
      ],
    },
    {
      id: "s2",
      titulo: "Recebendo e acompanhando a equipe",
      resumo: "Os combinados iniciais, a rotina das visitas e os cuidados com as turmas.",
      blocos: [
        {
          t: "lead",
          texto: "Os melhores resultados de 2026 vieram de unidades em que equipe e escola combinaram tudo desde o início: turmas, horários, espaços e calendário.",
        },
        {
          t: "passos",
          titulo: "Os combinados iniciais",
          itens: [
            ["Turmas e horários", "Defina com a gestão quais turmas recebem o projeto e em que dia e horário a equipe vem."],
            ["Calendário", "Entregue à equipe o calendário da unidade, com provas, recessos, eventos e reuniões."],
            ["Espaços", "Indique onde podem acontecer oficinas, gincanas e plantios, e onde guardar materiais."],
            ["Comunicação", "Combine um canal rápido com o líder da equipe para avisos de última hora."],
            ["Regras da unidade", "Explique as normas da escola: entrada, uniforme, uso de celular, segurança das crianças."],
          ],
        },
        {
          t: "ideia",
          titulo: "A turma continua sob a responsabilidade da escola",
          texto: "Os estagiários não substituem professores. Durante as atividades, é importante que um professor da unidade acompanhe a turma, sobretudo na educação infantil. Isso protege as crianças, os estagiários e a escola.",
        },
        {
          t: "lista",
          titulo: "Em cada visita",
          itens: [
            "Receba a equipe e confirme a turma e o espaço da atividade.",
            "Acompanhe a ação e observe a participação das crianças.",
            "Converse rapidamente com a equipe no fim: o que funcionou, o que ajustar.",
            "Avise sobre qualquer mudança prevista para a próxima semana.",
          ],
        },
        {
          t: "caso",
          unidade: "EMEF e EJA Aníbal Limeira",
          titulo: "Primeira a começar, com percurso próprio",
          texto: "Primeira unidade a iniciar as atividades, em 26 de maio, organizou o percurso em torno da horta e da compostagem. As turmas prepararam o solo, produziram adubo e cultivaram hortaliças, e o ciclo culminou em uma gincana no ginásio da escola.",
        },
        {
          t: "cenario",
          situacao: "A escola marcou uma reunião de pais para o dia da semana em que a equipe costuma vir. O que o supervisor faz?",
          opcoes: [
            { texto: "Nada; a equipe descobre quando chegar.", retorno: "A equipe perde a viagem e a semana de atividades. O aviso antecipado evita o desgaste." },
            {
              texto: "Avisa o líder com antecedência e combina outro dia ou uma atividade com as famílias durante a reunião.",
              retorno: "Isso mesmo. Além de evitar a viagem perdida, a reunião pode virar oportunidade de apresentar o projeto às famílias.",
              boa: true,
            },
            { texto: "Pede à equipe que conduza a reunião de pais.", retorno: "A reunião é da escola. A equipe pode participar com uma apresentação, se combinado, mas não conduzi-la." },
          ],
        },
      ],
    },
    {
      id: "s3",
      titulo: "Acompanhamento e retorno",
      resumo: "O que observar, como conversar com a equipe e quando acionar a coordenação.",
      blocos: [
        {
          t: "lead",
          texto: "O retorno do supervisor é uma das fontes mais importantes para o orientador avaliar os estagiários e para a coordenação ajustar o projeto.",
        },
        {
          t: "tabela",
          titulo: "O que observar na equipe",
          colunas: ["Aspecto", "Pergunta-chave"],
          linhas: [
            ["Pontualidade", "A equipe chega no horário combinado e avisa imprevistos?"],
            ["Preparo", "A atividade estava planejada, com materiais e objetivo claro?"],
            ["Relação com as crianças", "A linguagem é adequada e respeitosa? As crianças participam?"],
            ["Postura", "A equipe respeita as regras e a rotina da unidade?"],
            ["Registro", "A equipe conta os participantes e fotografa as atividades?"],
          ],
        },
        {
          t: "lista",
          titulo: "Acione o orientador ou a coordenação quando",
          itens: [
            "A equipe faltar ou cancelar atividades sem aviso mais de uma vez.",
            "Houver atitude inadequada com crianças, colegas ou funcionários.",
            "A escola precisar mudar o combinado de forma significativa.",
            "Houver qualquer situação de risco: nesse caso, de imediato.",
          ],
        },
        {
          t: "relato",
          texto: "Um momento marcante foi a realização do plantio de árvores, pois as crianças puderam participar de uma atividade prática e aprender, de forma divertida, sobre a importância de cuidar da natureza.",
          autor: "Relato da equipe do CIEI Nenzinha Ribeiro (setembro de 2026)",
        },
        {
          t: "p",
          texto:
            "Em novembro, o encerramento do ciclo inclui as despedidas nas unidades e a certificação de estagiários, orientadores e unidades. A participação do supervisor nesse momento valoriza o trabalho de todos.",
        },
      ],
    },
  ],
  avaliacao: [
    {
      q: "Quem são, em geral, os estagiários do Asa Verde?",
      opcoes: ["Professores aposentados", "Adolescentes dos cursos técnicos integrados do IFPB, formados para o projeto", "Funcionários da Prefeitura", "Voluntários sem formação"],
      certa: 1,
      licao: "s1",
      explica: "São estudantes dos cursos técnicos integrados de Meio Ambiente e Informática do IFPB – Campus Santa Rita.",
    },
    {
      q: "Quantos estagiários um supervisor pode acompanhar simultaneamente, segundo a Lei do Estágio?",
      opcoes: ["Até 5", "Até 10", "Até 20", "Sem limite"],
      certa: 1,
      licao: "s1",
      explica: "O art. 9º, III, da Lei nº 11.788/2008 fala em até dez estagiários simultaneamente.",
    },
    {
      q: "Qual destes é um combinado inicial importante entre supervisor e equipe?",
      opcoes: ["O cardápio da merenda", "Turmas, horários, calendário, espaços e canal de comunicação", "O tema da festa junina", "A escala de limpeza"],
      certa: 1,
      licao: "s2",
      explica: "Esses combinados evitam viagens perdidas e permitem planejar o ciclo inteiro.",
    },
    {
      q: "Durante as atividades, quem responde pela turma?",
      opcoes: ["Os estagiários, sozinhos", "A escola, com um professor da unidade acompanhando a turma", "Os pais", "A coordenação do IFPB"],
      certa: 1,
      licao: "s2",
      explica: "Os estagiários não substituem professores; a turma segue sob a responsabilidade da escola.",
    },
    {
      q: "A escola terá provas na semana da visita da equipe. O que o supervisor deve fazer?",
      opcoes: ["Nada", "Avisar o líder com antecedência e combinar outra data ou turma", "Pedir que a equipe aplique as provas", "Cancelar o projeto"],
      certa: 1,
      licao: "s2",
      explica: "O aviso antecipado preserva o trabalho da equipe e a rotina da escola.",
    },
    {
      q: "Em qual situação o supervisor deve acionar a coordenação de imediato?",
      opcoes: ["Quando a oficina terminar mais cedo", "Em qualquer situação de risco a crianças ou estagiários", "Quando faltar cartolina", "Quando a turma pedir outra gincana"],
      certa: 1,
      licao: "s3",
      explica: "Situações de risco exigem comunicação imediata à coordenação e à direção.",
    },
  ],
};

export const DIRECAO = {
  id: "direcao",
  nome: "Direção da unidade",
  publico: "Diretores e gestores das escolas e CIEIs",
  descricao:
    "O que o Asa Verde oferece à unidade, o que o projeto precisa da gestão escolar e como acompanhar os resultados ao longo do ciclo.",
  foto: { src: "/img/gal-555.webp", w: 1400, h: 788, alt: "Turma diante da fachada da EMEF Jaime Lacet" },
  horas: 4,
  licoes: [
    {
      id: "d1",
      titulo: "O que o Asa Verde oferece à unidade",
      resumo: "Presença semanal, sequências pedagógicas e o que mudou nas unidades em 2026.",
      blocos: [
        {
          t: "lead",
          texto:
            "Receber o Asa Verde significa contar, durante todo o ciclo, com uma equipe de estudantes do IFPB que leva educação ambiental às turmas toda semana, com atividades planejadas, registradas e acompanhadas por professores orientadores.",
        },
        {
          t: "cartoes",
          colunas: 2,
          itens: [
            { titulo: "Presença semanal", texto: "Uma equipe de quatro a cinco estagiários, no dia e horário combinados com a gestão." },
            { titulo: "Sequências temáticas", texto: "Palestras, oficinas, gincanas, campanhas e plantios adaptados a cada faixa etária, do Infantil 4 ao 9º ano." },
            { titulo: "Arborização da unidade", texto: "Plantio de mudas no pátio, em hortas e na calçada, com as crianças participando de todas as etapas." },
            { titulo: "Visibilidade", texto: "Divulgação das ações da unidade nas redes do projeto e nos relatórios enviados aos parceiros." },
          ],
        },
        {
          t: "caso",
          unidade: "EMEF Jaime Lacet",
          titulo: "A escola na imprensa",
          texto: "Com 575 ações registradas, a unidade levou o projeto à Rádio 100.5 FM e à TV Cabo Branco, que cobriu a caminhada ecológica da escola em agosto de 2026.",
        },
        {
          t: "caso",
          unidade: "CIEI Heitel Santiago",
          titulo: "O projeto dentro das famílias",
          texto: "No Dia da Árvore, cada criança levou uma muda para casa, com orientações de plantio. As famílias passaram a participar do que as crianças aprendiam no centro.",
        },
        {
          t: "relato",
          texto: "Alguns estudantes assumiram o compromisso de continuar praticando a coleta seletiva em casa e de incentivar os pais a fazerem o mesmo.",
          autor: "Relato da equipe da EMEF Jaime Lacet (julho de 2026)",
        },
      ],
    },
    {
      id: "d2",
      titulo: "O que o projeto precisa da gestão",
      resumo: "As condições que fazem a diferença nos resultados da unidade.",
      blocos: [
        {
          t: "lead",
          texto: "O que mais influenciou os resultados das unidades em 2026 não foi o tamanho da escola, e sim a qualidade dos combinados entre a gestão e a equipe.",
        },
        {
          t: "passos",
          itens: [
            ["Indicar um supervisor", "Um professor ou professora da unidade que acompanhe a equipe e faça a ponte com a escola."],
            ["Definir turmas e horários", "Turmas que recebem o projeto e dia fixo da semana, preservando a rotina pedagógica."],
            ["Compartilhar o calendário", "Provas, recessos, eventos, reuniões e o período eleitoral, desde o início do ciclo."],
            ["Garantir espaços", "Sala ou pátio para oficinas e gincanas, área para plantio e local para guardar materiais."],
            ["Apoiar a coleta seletiva", "Pontos de coleta e combinados para a destinação à COOREMM, quando houver campanha."],
            ["Cuidar das autorizações de imagem", "Informar à equipe quais estudantes têm autorização de uso de imagem para a divulgação."],
          ],
        },
        {
          t: "ideia",
          titulo: "A principal lição de 2026",
          texto: "Recessos, avaliações, plantões pedagógicos e o calendário eleitoral reduziram os dias disponíveis no segundo semestre. Integrar o calendário do projeto ao da unidade desde o início é a medida que mais protege os resultados.",
        },
        {
          t: "cenario",
          situacao: "A unidade vai sediar a votação das eleições e terá alterações de rotina em outubro. Qual é a melhor atitude da gestão?",
          opcoes: [
            { texto: "Avisar a equipe na semana da eleição.", retorno: "Em cima da hora, a equipe já não consegue adiantar as atividades." },
            {
              texto: "Informar no início do semestre as datas afetadas, para que a equipe adiante gincanas, plantios e oficinas.",
              retorno: "Isso mesmo. Com as datas em mãos, a equipe consegue adiantar gincanas, plantios e oficinas antes das semanas em que as atividades presenciais ficam suspensas.",
              boa: true,
            },
            { texto: "Suspender o projeto até o fim do ano.", retorno: "A suspensão interrompe o vínculo com as turmas. Com antecedência, é possível reorganizar o calendário." },
          ],
        },
      ],
    },
    {
      id: "d3",
      titulo: "Acompanhando os resultados",
      resumo: "Onde ver os números da unidade, como o projeto é acompanhado e como falar com a coordenação.",
      blocos: [
        {
          t: "lead",
          texto: "Todos os resultados do Asa Verde são públicos. A gestão pode acompanhar o que acontece na unidade durante todo o ciclo.",
        },
        {
          t: "cartoes",
          colunas: 2,
          itens: [
            { titulo: "Painel de monitoramento", texto: "Indicadores do projeto em Power BI, atualizados a partir do sistema de relatórios." },
            { titulo: "Relatório de impacto", texto: "Documento anual com os resultados e um capítulo dedicado a cada unidade." },
            { titulo: "Visitas da Promotoria", texto: "Em 2026, a Promotora de Justiça visitou as unidades entre julho e novembro." },
            { titulo: "Encerramento", texto: "Despedidas nas unidades e certificação de estagiários, orientadores e unidades." },
          ],
        },
        { t: "link", texto: "Os indicadores do projeto estão disponíveis no painel público.", rotulo: "Abrir o painel de monitoramento", href: "painel" },
        { t: "link", texto: "O relatório de impacto do ciclo 2026 traz um capítulo para cada uma das 17 unidades.", rotulo: "Baixar o relatório de 2026", href: "relatorio2026" },
        {
          t: "p",
          texto:
            "Para dúvidas, ajustes de calendário ou qualquer situação com a equipe, o caminho é o supervisor da unidade, que fala com o professor orientador do IFPB e, quando necessário, com a coordenação do projeto.",
        },
      ],
    },
  ],
  avaliacao: [
    {
      q: "O que a unidade recebe ao participar do Asa Verde?",
      opcoes: ["Uma palestra anual", "Uma equipe de estagiários do IFPB toda semana, com atividades planejadas e acompanhadas", "Recursos financeiros diretos", "Um professor contratado"],
      certa: 1,
      licao: "d1",
      explica: "A presença semanal e as sequências temáticas são a base do projeto.",
    },
    {
      q: "Qual medida mais protegeu os resultados das unidades em 2026?",
      opcoes: ["Aumentar o número de estagiários", "Integrar desde o início o calendário do projeto ao da unidade", "Concentrar as atividades em outubro", "Reduzir os registros"],
      certa: 1,
      licao: "d2",
      explica: "Provas, recessos e eleições reduziram os dias disponíveis; o calendário integrado permite antecipar as ações.",
    },
    {
      q: "Por que a gestão deve informar quais estudantes têm autorização de uso de imagem?",
      opcoes: ["Para escolher quem participa das atividades", "Para que a divulgação respeite o ECA e a LGPD", "Para controlar a frequência", "Não é necessário"],
      certa: 1,
      licao: "d2",
      explica: "A imagem de criança identificável só pode ser divulgada com autorização dos responsáveis.",
    },
    {
      q: "Onde a gestão acompanha os indicadores do projeto?",
      opcoes: ["Apenas no Instagram", "No painel público em Power BI e no relatório de impacto", "Somente em reuniões presenciais", "Os dados não são públicos"],
      certa: 1,
      licao: "d3",
      explica: "Os resultados são públicos e atualizados a partir do sistema de relatórios.",
    },
    {
      q: "Qual é o caminho para tratar uma questão com a equipe?",
      opcoes: ["Falar diretamente com a Promotoria", "Supervisor da unidade, professor orientador e, se necessário, coordenação", "Publicar nas redes sociais", "Aguardar o encerramento"],
      certa: 1,
      licao: "d3",
      explica: "O supervisor faz a ponte com o orientador, que aciona a coordenação quando necessário.",
    },
  ],
};
