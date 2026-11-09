// Trilha do multiplicador ambiental (estagiários das equipes de campo).

export const MULTIPLICADOR = {
  id: "multiplicador",
  nome: "Multiplicador ambiental",
  publico: "Estagiários das equipes nas unidades",
  descricao:
    "Como chegar à escola, conduzir palestras, oficinas, gincanas, campanhas e plantios, adaptar cada atividade à idade das turmas e registrar tudo com qualidade.",
  foto: { src: "/img/edu-oficina.webp", w: 1280, h: 720, alt: "Turma reunida com estagiários do Asa Verde diante de um painel sobre energia" },
  horas: 40,
  licoes: [
    {
      id: "m1",
      titulo: "Ser multiplicador ambiental",
      resumo: "O que significa o papel, o que se espera de você e como a equipe se organiza.",
      blocos: [
        {
          t: "lead",
          texto:
            "O título de multiplicador carrega uma lógica clara: você não é o destino final do que aprende nesta formação. Você é o canal. O conhecimento passa por você e chega às crianças, aos adolescentes e, por meio deles, às famílias.",
        },
        {
          t: "p",
          texto:
            "Por isso, ser multiplicador significa ser avaliado pelo que os outros aprendem com você. Uma oficina bem conduzida, uma palestra que provoca reflexão, um plantio que os alunos lembram por anos: esses são os resultados do seu trabalho.",
        },
        {
          t: "cartoes",
          titulo: "O que você faz nas unidades",
          colunas: 3,
          itens: [
            { titulo: "Palestras", texto: "Encontros dialogados que apresentam um tema e provocam reflexão." },
            { titulo: "Oficinas", texto: "Atividades práticas em que os alunos fazem, experimentam e produzem." },
            { titulo: "Gincanas e campanhas", texto: "Desafios coletivos e mobilizações que envolvem a escola inteira." },
            { titulo: "Arborização", texto: "Plantio e cuidado de mudas como processo educativo." },
            { titulo: "Registro", texto: "Cada ação entra no sistema no mesmo dia, com fotos e números." },
            { titulo: "Presença semanal", texto: "A escola conta com a sua equipe toda semana, no dia combinado." },
          ],
        },
        { t: "h", texto: "Você representa o projeto" },
        {
          t: "p",
          texto:
            "Dentro da escola, você não está ali como visitante. Está como representante do IFPB, da Prefeitura de Santa Rita e do Ministério Público da Paraíba. A forma como você chega, fala e se comporta forma a imagem que a escola terá do projeto.",
        },
        {
          t: "lista",
          titulo: "Postura em todas as visitas",
          itens: [
            "Chegue no horário combinado e avise com antecedência se houver qualquer imprevisto.",
            "Use a camisa do projeto e vista-se de forma adequada ao ambiente escolar.",
            "Use linguagem respeitosa com alunos, professores, funcionários e famílias.",
            "Deixe o celular para o registro da atividade, e não para uso pessoal durante a ação.",
            "Respeite as regras e a rotina da escola, mesmo quando forem diferentes das do IFPB.",
            "Nunca fique sozinho com uma criança em local reservado; atue sempre à vista da equipe e dos professores.",
          ],
        },
        { t: "h", texto: "O trabalho em equipe" },
        {
          t: "p",
          texto:
            "Cada unidade tem uma equipe de quatro a cinco estagiários com um **líder**. O líder organiza os registros do grupo, faz a ponte com as equipes de Mídia e de Planejamento e aciona o orientador e a coordenação quando necessário. Mas atenção: ser ou não líder não muda uma regra básica. **Cada estagiário é responsável por registrar as próprias ações.**",
        },
        {
          t: "evitar",
          titulo: "O que compromete o projeto",
          itens: [
            "Improvisar ações sem planejamento: uma oficina sem preparo transmite descuido e prejudica a imagem do projeto.",
            "Agir de forma independente, sem comunicar o líder, o orientador ou a coordenação.",
            "Deixar de registrar ações: sem dados, o projeto não consegue provar o seu impacto.",
            "Faltar às ações combinadas: a escola organiza a rotina contando com a sua presença.",
            "Usar linguagem ou conteúdo inadequado para a idade das turmas.",
          ],
        },
        {
          t: "relato",
          texto: "Após algumas das ações, os alunos começaram a nos entregar cartas, demonstrando carinho pelas aulas; alguns até desenharam o que foi abordado nas palestras.",
          autor: "Equipe de estagiários da EMEF Estevão José Carneiro da Cunha (junho de 2026)",
        },
        {
          t: "cenario",
          situacao: "Na manhã da oficina, um colega da sua equipe avisa que não vai poder ir. Os materiais estavam com ele. O que fazer?",
          opcoes: [
            { texto: "Cancelar a atividade sem avisar a escola e remarcar depois.", retorno: "Cancelar sem aviso quebra a confiança da escola, que organizou a turma para receber a equipe." },
            {
              texto: "Avisar o líder, combinar com o supervisor da unidade uma alternativa possível com os materiais disponíveis ou um novo horário, e registrar o que aconteceu.",
              retorno: "Isso mesmo. A equipe comunica, preserva o compromisso com a escola e aprende a deixar os materiais compartilhados com mais de uma pessoa.",
              boa: true,
            },
            { texto: "Fazer uma palestra improvisada sobre qualquer tema.", retorno: "Improvisar sem preparo compromete a qualidade e a imagem do projeto. Melhor combinar uma alternativa planejada." },
          ],
        },
      ],
    },
    {
      id: "m2",
      titulo: "Chegando à escola",
      resumo: "Como preparar e conduzir a primeira visita e construir uma relação de confiança.",
      blocos: [
        {
          t: "lead",
          texto: "O primeiro encontro com a escola é um dos momentos mais importantes do seu estágio. É nele que a direção e os professores formam a impressão que vão carregar durante todo o ciclo.",
        },
        {
          t: "lista",
          titulo: "Antes da primeira visita",
          itens: [
            "Pesquise a unidade: quantas turmas tem, qual faixa etária atende, se é escola de ensino fundamental ou centro de educação infantil, se tem EJA.",
            "Confirme o dia e o horário com antecedência. Nunca apareça sem combinar.",
            "Prepare uma apresentação breve do projeto, com os principais números e o que a equipe pretende fazer.",
            "Leve a carta de apresentação do projeto, impressa e assinada, para entregar pessoalmente à direção.",
            "Combine com a equipe quem fala, quem anota e quem registra.",
          ],
        },
        {
          t: "passos",
          titulo: "Os cinco passos da primeira visita",
          itens: [
            ["Apresentação", "Apresentem-se pelo nome, digam de qual instituição vêm e expliquem o projeto em poucos minutos. A direção tem uma agenda cheia."],
            ["Entrega da carta", "A carta de apresentação formaliza a chegada do projeto. Entreguem pessoalmente à direção."],
            ["Escuta", "Perguntem sobre horários, turmas indicadas, calendário escolar, provas e eventos. Escutar é mais importante do que falar nesse momento."],
            ["Próximos passos", "Saiam com pelo menos uma data e um horário combinados para a próxima ação, e com o nome do supervisor da unidade."],
            ["Registro", "Anotem o que foi combinado, quem vocês conheceram e qualquer informação útil. Isso ajuda a equipe inteira nas visitas seguintes."],
          ],
        },
        { t: "h", texto: "Quem é quem na unidade" },
        {
          t: "cartoes",
          colunas: 2,
          itens: [
            { titulo: "Direção", texto: "Acolhe o projeto, autoriza as ações e define com a equipe as condições de trabalho." },
            { titulo: "Supervisor da unidade", texto: "Professor ou professora que acompanha a equipe, ajuda a escolher turmas e horários e orienta sobre a rotina." },
            { titulo: "Professores das turmas", texto: "Recebem a equipe em sala. Combine a atividade com antecedência e respeite o tempo da aula." },
            { titulo: "Funcionários", texto: "Portaria, secretaria, merenda e limpeza fazem a escola funcionar. Cumprimente e respeite todos." },
          ],
        },
        {
          t: "ideia",
          titulo: "Lição de 2026: peça o calendário logo no início",
          texto: "Provas, recessos, plantões pedagógicos, feriados e eleições reduziram os dias disponíveis no segundo semestre. Conhecer o calendário da escola desde a primeira visita evita surpresas e permite adiantar as metas.",
        },
        {
          t: "caso",
          unidade: "EMEF Emília Cavalcante de Morais Neta",
          titulo: "Quando o calendário muda o plano",
          texto: "Na unidade mais distante do centro, em Lerolândia, o calendário eleitoral suspendeu as atividades presenciais a partir de 21 de setembro. Mesmo assim, a equipe fechou o ciclo com 13 gincanas e 114 mudas plantadas em 14 ações de arborização.",
        },
        {
          t: "cenario",
          situacao: "Vocês chegam para a palestra combinada e descobrem que a turma está fazendo prova. O que a equipe deve fazer?",
          opcoes: [
            { texto: "Pedir à professora que interrompa a prova por alguns minutos.", retorno: "A prova é prioridade da escola. Interromper desrespeita a rotina e o trabalho da professora." },
            {
              texto: "Procurar o supervisor, perguntar se outra turma prevista pode receber a atividade e combinar uma nova data para essa turma.",
              retorno: "Isso mesmo. A equipe se adapta sem atrapalhar a escola, aproveita o dia e já deixa a próxima data combinada.",
              boa: true,
            },
            { texto: "Ir embora e registrar a palestra mesmo assim.", retorno: "Registrar uma ação que não aconteceu é falsear dados e compromete a credibilidade de todo o projeto." },
          ],
        },
      ],
    },
    {
      id: "m3",
      titulo: "A palestra que provoca reflexão",
      resumo: "Os princípios da educação ambiental crítica e a estrutura de uma boa palestra.",
      blocos: [
        {
          t: "lead",
          texto:
            "A educação ambiental que o Asa Verde pratica não se limita a dizer “recicle” ou “economize água” como regras a seguir. Ela ajuda os alunos a ler o próprio território, compreender por que os problemas existem e agir de forma concreta.",
        },
        {
          t: "cartoes",
          titulo: "Os três pilares da educação ambiental crítica",
          colunas: 3,
          itens: [
            { titulo: "Contexto", texto: "A ação parte da realidade dos alunos: o rio, o bairro, a escola deles, e não exemplos genéricos." },
            { titulo: "Participação", texto: "O aluno não é espectador. Ele pergunta, opina, experimenta e constrói junto." },
            { titulo: "Ação concreta", texto: "A atividade termina com um resultado real: um produto, uma mudança ou um compromisso assumido." },
          ],
        },
        {
          t: "ideia",
          titulo: "A regra de ouro",
          texto: "Toda ação precisa responder à pergunta do aluno: “E daí? O que isso tem a ver comigo?”",
        },
        { t: "h", texto: "A palestra em cinco momentos" },
        {
          t: "p",
          texto: "Uma boa palestra se parece mais com uma conversa do que com um monólogo. Em uma aula de cerca de 30 minutos, use esta estrutura:",
        },
        { t: "diagrama", nome: "palestra" },
        {
          t: "passos",
          itens: [
            ["Gancho (2 a 3 min)", "Comece com algo que chame a atenção: uma pergunta surpreendente, um objeto, um dado ou uma história real. Por exemplo: “Quantos quilos de lixo vocês acham que a família de vocês produz em uma semana?”"],
            ["Contexto (5 a 8 min)", "Apresente o problema conectado à realidade local: o rio, o bairro, a escola. Quanto mais próximo da vida dos alunos, maior o impacto."],
            ["Informação central (8 a 12 min)", "Apresente o conteúdo em dois ou três pontos, com imagens, objetos ou vídeos curtos. Faça perguntas durante a explicação."],
            ["Conexão e reflexão (3 a 5 min)", "“O que cada um de nós pode fazer?” Não deixe a palestra terminar no problema: mostre caminhos."],
            ["Fechamento (2 a 3 min)", "Retome os pontos principais em frases simples, proponha um desafio concreto e agradeça a turma."],
          ],
        },
        {
          t: "cartoes",
          titulo: "A linguagem que conecta",
          colunas: 2,
          itens: [
            { titulo: "Fale a língua da turma", texto: "“Resíduos sólidos urbanos” pode virar “o lixo que a cidade produz”. Simplificar é respeitar." },
            { titulo: "Use exemplos locais", texto: "O Rio Paraíba e o bairro da escola têm mais força do que “os rios brasileiros”." },
            { titulo: "Faça perguntas abertas", texto: "“O que vocês acham?” e “Alguém sabe por quê?” ativam o pensamento e criam diálogo." },
            { titulo: "Conte histórias e valide respostas", texto: "Um caso real marca mais do que uma estatística. Quando um aluno acerta, reconheça." },
          ],
        },
        {
          t: "caso",
          unidade: "EMEF Prof. Carlos Arnóbio Maroja Di Pace",
          titulo: "75 palestras, sempre seguidas de prática",
          texto: "Com turmas do 6º ao 8º ano, a equipe fez o segundo maior número de palestras do projeto. Os temas avançaram da compostagem para os 3 Rs, a logística reversa, a biodiversidade, os polinizadores e os desastres ambientais, sempre seguidos de atividades práticas, como a confecção de lixeiras de coleta seletiva.",
        },
        {
          t: "check",
          pergunta: "O que deve acontecer antes de você apresentar o conteúdo principal da palestra?",
          opcoes: ["Ler os slides do começo ao fim", "Um gancho que prenda a atenção e um contexto ligado à realidade local", "Distribuir os materiais da oficina", "Pedir silêncio e organizar as carteiras em fileiras"],
          certa: 1,
          explica: "O gancho desperta o interesse e o contexto mostra por que o tema importa para aquela turma. Só então vem a informação central.",
        },
      ],
    },
    {
      id: "m4",
      titulo: "A oficina: aprender fazendo",
      resumo: "Como planejar e conduzir uma oficina do zero, com ideias que funcionaram em 2026.",
      blocos: [
        {
          t: "lead",
          texto: "A oficina é o formato mais poderoso que você tem. Enquanto a palestra informa e sensibiliza, a oficina transforma, porque coloca o aluno em contato direto com a experiência.",
        },
        {
          t: "passos",
          titulo: "O roteiro de seis etapas",
          itens: [
            ["Objetivo", "Defina em uma frase o que o aluno vai ser capaz de fazer ou compreender ao final. Objetivo vago gera oficina sem direção."],
            ["Público", "Quantos alunos e de que idade? Uma oficina para o 3º ano tem linguagem e materiais diferentes de uma para o 8º ano."],
            ["Tempo", "Nas escolas, a realidade costuma ser de 30 a 50 minutos. Planeje com margem, porque sempre haverá imprevistos."],
            ["Materiais", "Liste tudo com antecedência e confira as quantidades. Material faltando trava a oficina."],
            ["Roteiro", "Divida em três momentos: abertura, desenvolvimento e encerramento."],
            ["Avaliação", "Como você vai saber se funcionou? Fotos, contagem de participantes e uma frase sobre o que os alunos disseram."],
          ],
        },
        { t: "diagrama", nome: "tresMomentos" },
        {
          t: "p",
          texto:
            "**Na abertura**, nunca comece explicando: comece perguntando, com um objeto inesperado ou uma situação do cotidiano. **No desenvolvimento**, os alunos fazem; circule entre os grupos e tire dúvidas. **No encerramento**, pergunte o que aprenderam e o que vão fazer diferente. Termine com um compromisso concreto.",
        },
        {
          t: "fotos",
          itens: [
            { src: "/img/edu-biomas.webp", w: 1054, h: 1302, alt: "Maquete de bioma produzida por estudantes em oficina", legenda: "Maquete de biomas produzida pelos estudantes." },
            { src: "/img/maos-terra.webp", w: 1600, h: 1200, alt: "Mãos de criança segurando terra para o plantio", legenda: "Preparo de terra para uma oficina de plantio." },
          ],
        },
        {
          t: "cartoes",
          titulo: "Oficinas que funcionaram em 2026",
          colunas: 3,
          itens: [
            { titulo: "Maquetes de biomas", texto: "Os alunos representam a Caatinga, a Mata Atlântica e outros biomas com materiais simples." },
            { titulo: "Composteira e horta", texto: "Preparo do solo, adubo orgânico e cultivo de hortaliças na escola." },
            { titulo: "Brinquedos recicláveis", texto: "Transformar o que seria descartado em brinquedo e conversar sobre reutilização." },
            { titulo: "Terrários e ciclo da água", texto: "Experimentos que mostram a água evaporando, condensando e “chovendo”." },
            { titulo: "Lixeiras personalizadas", texto: "Cada turma confecciona e decora lixeiras de coleta seletiva para a sala." },
            { titulo: "Vasos sustentáveis", texto: "Mudas plantadas em vasos feitos de material reciclável, levadas para casa ou cuidadas na escola." },
          ],
        },
        {
          t: "evitar",
          titulo: "Erros comuns em oficinas",
          itens: [
            "Oficina sem objetivo claro: se você não sabe o que quer que o aluno aprenda, ele também não vai saber.",
            "Material insuficiente ou inadequado para a idade da turma.",
            "Instrução longa: se precisar de mais de três minutos para explicar a atividade, simplifique.",
            "Ficar parado na frente da sala em vez de circular entre os grupos.",
            "Terminar sem encerramento: sem reflexão, o aprendizado fica pela metade.",
            "Não registrar: sem fotos, participantes e uma anotação, a oficina não existe para o projeto.",
          ],
        },
        {
          t: "relato",
          texto: "Uma aluna do 4º ano contou, espontaneamente, que continuava cuidando da muda plantada na oficina de vasos recicláveis, uma das primeiras ações realizadas com a turma.",
          autor: "Relato da equipe da EMEF Odilon Ribeiro Coutinho (julho de 2026)",
        },
        {
          t: "check",
          pergunta: "Qual é a principal diferença entre oficina e palestra?",
          opcoes: [
            "A palestra usa materiais práticos; a oficina é só informativa",
            "Na oficina o aluno faz, experimenta e produz; a palestra sensibiliza e provoca reflexão",
            "A oficina é para turmas grandes e a palestra para turmas pequenas",
            "Não há diferença; depende só do tempo disponível",
          ],
          certa: 1,
          explica: "Os dois formatos se completam: a palestra apresenta e provoca; a oficina transforma o aluno em agente ativo.",
        },
      ],
    },
    {
      id: "m5",
      titulo: "Cada idade, um jeito de aprender",
      resumo: "Como adaptar as atividades da educação infantil aos anos finais do ensino fundamental.",
      blocos: [
        {
          t: "lead",
          texto:
            "Usar a mesma linguagem, o mesmo formato e os mesmos exemplos para todas as turmas é uma das falhas mais comuns de quem começa a ensinar. Em 2026, o Asa Verde atendeu crianças de 4 anos a adolescentes do 9º ano: conhecer cada faixa etária é condição básica para o seu trabalho.",
        },
        {
          t: "abas",
          itens: [
            {
              rotulo: "Educação infantil",
              detalhe: "4 a 6 anos",
              blocos: [
                {
                  t: "tabela",
                  colunas: ["Aspecto", "Como trabalhar"],
                  linhas: [
                    ["Atenção", "Atividades curtas, de 10 a 15 minutos, com troca frequente de estímulo"],
                    ["Linguagem", "Histórias, música, figuras e objetos que as crianças possam tocar"],
                    ["Formato", "Brincadeiras, pintura, experimentos simples, plantio e jogos de roda"],
                    ["Cuidado especial", "Um passo por vez, sempre demonstrando antes; a professora da turma acompanha a atividade"],
                  ],
                },
              ],
            },
            {
              rotulo: "Anos iniciais",
              detalhe: "1º ao 5º ano",
              blocos: [
                {
                  t: "tabela",
                  colunas: ["Aspecto", "Como trabalhar"],
                  linhas: [
                    ["Atenção", "De 10 a 25 minutos por atividade, conforme a idade"],
                    ["Linguagem", "Simples, concreta e visual; gostam de curiosidades e fatos surpreendentes"],
                    ["Formato", "Oficinas com produto final, jogos, gincanas por equipe e histórias"],
                    ["Cuidado especial", "No máximo dois passos por vez; cuidado com competições que excluem"],
                  ],
                },
              ],
            },
            {
              rotulo: "Anos finais",
              detalhe: "6º ao 9º ano",
              blocos: [
                {
                  t: "tabela",
                  colunas: ["Aspecto", "Como trabalhar"],
                  linhas: [
                    ["Atenção", "De 30 a 40 minutos por atividade"],
                    ["Linguagem", "Mais elaborada; apreciam debates, dados reais e desafios"],
                    ["Formato", "Debates, projetos com autonomia, experimentos e palestras com dados de Santa Rita"],
                    ["Cuidado especial", "Escute o que pensam antes de apresentar; a validação é essencial"],
                  ],
                },
              ],
            },
            {
              rotulo: "EJA",
              detalhe: "jovens e adultos",
              blocos: [
                {
                  t: "p",
                  texto:
                    "Com jovens e adultos, a educação ambiental funciona melhor quando parte do que eles já viveram e observaram: o bairro, o trabalho, a casa. Trate a turma como parceira, valorize a experiência de cada um e conecte o tema a decisões práticas do dia a dia, como o consumo de água e o destino do lixo de casa.",
                },
              ],
            },
          ],
        },
        { t: "h", texto: "A chegada à educação infantil" },
        {
          t: "p",
          texto:
            "Em julho de 2026, sete centros de educação infantil passaram a receber o projeto. A mudança exigiu uma nova abordagem: as equipes receberam formação com profissionais da educação infantil do município e trocaram as exposições por histórias, música, brincadeiras, pintura, experimentos simples e plantio.",
        },
        {
          t: "numeros",
          itens: [
            ["261", "oficinas na educação infantil"],
            ["83", "gincanas e campanhas"],
            ["351", "mudas plantadas"],
            ["7.352", "participações de crianças"],
          ],
        },
        {
          t: "cartoes",
          titulo: "Atividades que deram certo com crianças pequenas",
          colunas: 2,
          itens: [
            { titulo: "História e plantio", rotulo: "CIEI Heitel Santiago", texto: "Depois de ouvir a história de João e o pé de feijão, as crianças plantaram feijão e acompanharam a germinação." },
            { titulo: "Caixinha misteriosa e “Fazendo chover”", rotulo: "EMEIF Tiradentes", texto: "Aprendizagem pelos sentidos e um experimento simples para mostrar o ciclo da água." },
            { titulo: "Bingo do meio ambiente", rotulo: "CIEI Elias Heckmans", texto: "Temas como poluição das águas e queimadas viraram jogo, pintura e limpeza simulada do mar." },
            { titulo: "Brincadeiras adaptadas", rotulo: "CIEI Maria Carmelita Maroja Pedroza", texto: "A roda dos papéis e o morto-vivo com temática ambiental: 22 gincanas ao longo do ciclo." },
          ],
        },
        {
          t: "relato",
          texto: "Na hora das atividades, uma criança que não interagia passou a participar ativamente.",
          autor: "Relato da equipe do CIEI Maria Carmelita Maroja Pedroza (julho de 2026)",
        },
        {
          t: "check",
          pergunta: "Qual estratégia funcionou melhor com as crianças de 4 a 6 anos em 2026?",
          opcoes: ["Exposições longas com slides", "Histórias, música, brincadeiras, pintura e plantio", "Debates sobre dados ambientais", "Provas escritas ao fim de cada tema"],
          certa: 1,
          explica: "Na primeira infância, o aprendizado acontece brincando e fazendo. As exposições foram substituídas por atividades lúdicas e sensoriais.",
        },
      ],
    },
    {
      id: "m6",
      titulo: "Gincanas, campanhas e coleta seletiva",
      resumo: "Como mobilizar a escola inteira e conectar a coleta seletiva à COOREMM.",
      blocos: [
        {
          t: "lead",
          texto: "Gincanas e campanhas têm um poder que palestras e oficinas não alcançam sozinhas: mobilizam a escola inteira ao mesmo tempo, criam espírito de pertencimento e deixam memória.",
        },
        {
          t: "comparar",
          itens: [
            { titulo: "Gincana", texto: "Pontual e competitiva. Usa a competição saudável e o trabalho em equipe para revisar conteúdos e envolver turmas inteiras em um dia." },
            { titulo: "Campanha", texto: "Contínua e educativa. Mobiliza a escola por dias ou semanas em torno de uma meta, como a coleta seletiva, para criar novos hábitos." },
          ],
        },
        {
          t: "cartoes",
          titulo: "Tipos de gincana",
          colunas: 2,
          itens: [
            { titulo: "Coleta seletiva", texto: "Turmas competem pela maior quantidade de recicláveis, medida em quilos." },
            { titulo: "Arborização", texto: "Mudas plantadas, área revitalizada ou o melhor cuidado com as mudas existentes." },
            { titulo: "Conhecimento", texto: "Perguntas em equipe sobre os temas já trabalhados. Ótima para revisar conteúdos." },
            { titulo: "Criatividade", texto: "Cartazes, paródias, vídeos curtos ou objetos com material reciclável." },
          ],
        },
        {
          t: "passos",
          titulo: "Como planejar uma gincana",
          itens: [
            ["Objetivo", "O que você quer alcançar? Sem objetivo, a gincana vira bagunça organizada."],
            ["Formato", "Escolha o tipo e defina se será por turma, por equipe mista ou por série."],
            ["Regras", "Escreva as regras antes de anunciar: o que conta, o que não conta e como resolver empates."],
            ["Comunicação", "Anuncie com pelo menos três dias de antecedência e combine com a direção e os professores."],
            ["Logística", "Onde será? Quem avalia? Quem registra? Cada estagiário precisa de uma função clara no dia."],
            ["Premiação", "Não precisa ser material: um destaque nas redes do projeto já é um prêmio poderoso."],
            ["Encerramento", "Resultados, celebração dos vencedores e reconhecimento de todas as turmas."],
            ["Registro", "Participantes, pontuação por turma, fotos e quilos coletados, quando for o caso."],
          ],
        },
        {
          t: "caso",
          unidade: "EMEIF e EJA Dr. Antônio Pereira de Almeida",
          titulo: "“Missão: Salvar a Água!”",
          texto: "Em 2 de setembro, a gincana mobilizou 51 crianças das três turmas de 3º ano em provas como a Corrida da Gotinha, fechando a sequência sobre o ciclo da água.",
        },
        { t: "h", texto: "A campanha de coleta seletiva" },
        {
          t: "passos",
          itens: [
            ["Sensibilização", "Antes de lançar, explique em palestra ou oficina o que é coleta seletiva, o que pode ser reciclado e o impacto de cada quilo."],
            ["Lançamento", "Anuncie com cartazes e aviso nas salas. Deixe claro quais materiais, onde depositar e por quantos dias."],
            ["Coleta", "Recipientes identificados por tipo de material em pontos estratégicos, acompanhados diariamente, com placar por turma."],
            ["Pesagem", "Pese todo o material ao final. O peso entra no registro e é acompanhado pela coordenação."],
            ["Destinação", "Combine com a coordenação o recolhimento pela COOREMM ou por catadores da comunidade."],
            ["Celebração", "Divulgue quanto foi coletado e qual turma contribuiu mais. Reconheça todos."],
          ],
        },
        {
          t: "ideia",
          titulo: "Quem recebe o material",
          texto: "A COOREMM, Cooperativa de Trabalho dos Catadores e Catadoras de Reciclagem de Marcos Moura, é parceira do projeto. Quando os alunos sabem que o material separado vai para trabalhadores que vivem da reciclagem, separar o lixo ganha sentido humano e social.",
        },
        {
          t: "numeros",
          titulo: "A primeira grande campanha, em 2025",
          itens: [
            ["2.322,5 kg", "destinados à COOREMM"],
            ["1.267,5 kg", "de papel"],
            ["507,8 kg", "de plástico"],
            ["304,9 kg", "de metal"],
            ["242,3 kg", "de vidro"],
          ],
        },
        {
          t: "tabela",
          titulo: "Datas que mobilizam a escola",
          colunas: ["Data", "Comemoração", "Sugestão"],
          linhas: [
            ["22 de março", "Dia Mundial da Água", "Sequência sobre o ciclo da água e o uso consciente"],
            ["22 de abril", "Dia da Terra", "Lançamento de campanha ou gincana"],
            ["28 de abril", "Dia Nacional da Caatinga", "Oficina sobre o bioma do nosso estado"],
            ["3 de junho", "Dia Nacional da Educação Ambiental", "Apresentação do projeto às famílias"],
            ["5 de junho", "Dia Mundial do Meio Ambiente", "Semana do Meio Ambiente, a maior mobilização do semestre"],
            ["21 de setembro", "Dia da Árvore", "Mutirão de plantio e doação de mudas"],
            ["4 de outubro", "Dia dos Animais", "Oficina sobre a fauna local"],
            ["15 de outubro", "Dia do Consumo Consciente", "Reaproveitamento criativo de materiais"],
          ],
        },
        { t: "metas" },
        {
          t: "check",
          pergunta: "Uma campanha de coleta seletiva bem executada e bem registrada pode alimentar quais indicadores?",
          opcoes: ["Só o de gincanas e campanhas", "Gincanas e campanhas, peso de recicláveis e publicações digitais", "Nenhum, porque campanhas não contam", "Só o de publicações"],
          certa: 1,
          explica: "A campanha conta como ação de mobilização, o peso entra no registro e a divulgação gera publicações. Por isso o registro completo é tão importante.",
        },
      ],
    },
    {
      id: "m7",
      titulo: "Arborização: plantar e cuidar",
      resumo: "O plantio como processo educativo, as espécies usadas e o acompanhamento das mudas.",
      blocos: [
        {
          t: "lead",
          texto:
            "No Asa Verde, o plantio não é um evento isolado. É um processo educativo: crianças e adolescentes participam da escolha do local, do preparo do solo, do plantio, da primeira rega e da manutenção das mudas.",
        },
        {
          t: "fotos",
          itens: [
            { src: "/img/arb-plantio.webp", w: 1200, h: 1600, alt: "Estudantes plantando uma muda no pátio da escola", legenda: "Plantio no pátio, com os estudantes em todas as etapas." },
            { src: "/img/arb-corredor.webp", w: 1200, h: 1600, alt: "Mobilização do Corredor Verde em rua de Tibiri II", legenda: "Mobilização porta a porta do Corredor Verde, em Tibiri II." },
          ],
        },
        {
          t: "passos",
          titulo: "As cinco etapas de uma ação de arborização",
          itens: [
            ["Sensibilização", "Antes de plantar, converse: por que plantar? Qual é a espécie? De onde ela vem? O que ela oferece ao lugar?"],
            ["Preparo do solo", "Limpeza do espaço, abertura das covas e adição de substrato. Explique enquanto fazem. As ferramentas pesadas ficam com os estagiários e adultos."],
            ["Plantio", "Cada aluno participa: segura a muda, coloca a terra, firma o caule. Fotografe cada grupo."],
            ["Primeira rega", "Ensine a regar e defina quem cuida das mudas nas semanas seguintes, com revezamento entre turmas."],
            ["Acompanhamento", "Volte nas visitas seguintes com os mesmos alunos para verificar o crescimento e registrar. É isso que transforma o plantio em processo."],
          ],
        },
        {
          t: "ideia",
          titulo: "Plantar é o começo; cuidar é o resultado",
          texto: "As próprias equipes apontaram em 2026 a necessidade de acompanhar a sobrevivência das mudas. Uma das recomendações para o próximo ciclo é instituir um indicador de manutenção e sobrevivência. Registre também as visitas de cuidado: regar, replantar e medir contam como parte da ação.",
        },
        {
          t: "p",
          texto:
            "Na arborização de pátios e calçadas, a prioridade são as **espécies nativas**: são adaptadas ao clima da região, fortalecem a biodiversidade local, ensinam sobre o território e costumam sobreviver melhor. Em 2026, os registros também incluíram frutíferas, plantas ornamentais e hortaliças cultivadas em hortas escolares.",
        },
        {
          t: "lista",
          titulo: "Espécies plantadas em 2026",
          colunas: true,
          itens: ["Ipê-amarelo", "Jacarandá", "Flamboyant", "Aroeira", "Pata-de-vaca", "Algodoeiro-de-praia", "Moringa", "Cajueiro", "Aceroleira", "Goiabeira", "Amoreira", "Mamoeiro", "Coentro, alface e cebolinha nas hortas"],
        },
        {
          t: "caso",
          unidade: "Corredor Verde · Tibiri II",
          titulo: "Arborização que sai da escola",
          texto: "Na Semana do Meio Ambiente, estagiários e equipe da SEMMA percorreram a Av. Assis Chateaubriand, conversando com os moradores sobre arborização urbana e pedindo autorização para plantar em frente às casas. A implantação foi acompanhada em setembro.",
        },
        {
          t: "relato",
          texto: "Na ação Corredor Verde, grande parte dos moradores abraçou a campanha e adotou mudas. Muitos agora têm uma “semente” de conscientização ambiental na calçada de suas casas.",
          autor: "Relato da equipe da EMEIF e EJA Dr. Antônio Pereira de Almeida",
        },
        {
          t: "check",
          pergunta: "Qual é a diferença entre plantar uma árvore e conduzir uma ação de arborização?",
          opcoes: [
            "Não há diferença",
            "A ação de arborização é um processo educativo, com os alunos em todas as etapas e acompanhamento depois do plantio",
            "A ação de arborização é feita apenas por professores",
            "Plantar é na escola; arborização é só na zona rural",
          ],
          certa: 1,
          explica: "O que caracteriza a ação de arborização do projeto é o envolvimento dos alunos do começo ao fim e o cuidado continuado com as mudas.",
        },
      ],
    },
    {
      id: "m8",
      titulo: "Planejar e registrar",
      resumo: "Como montar o plano da unidade e fazer um registro completo de cada ação.",
      blocos: [
        {
          t: "lead",
          texto:
            "A diferença entre uma equipe que gera impacto e uma que apenas passa pela escola está no planejamento. Ele pode e deve ser adaptado à realidade de cada unidade, mas precisa existir.",
        },
        {
          t: "cartoes",
          titulo: "Os três pilares do bom planejamento",
          colunas: 3,
          itens: [
            { titulo: "Continuidade", texto: "Distribua as ações ao longo de todo o ciclo. A escola precisa sentir a presença da equipe de forma regular." },
            { titulo: "Variedade", texto: "Use todos os formatos: palestra, oficina, gincana, campanha e plantio. A combinação gera o impacto completo." },
            { titulo: "Registro", texto: "Ação planejada e não registrada não existe nos dados do projeto." },
          ],
        },
        {
          t: "passos",
          titulo: "Como montar o plano do mês",
          itens: [
            ["Escolha o tema do mês", "Um fio condutor ajuda as turmas a ligar uma atividade à outra: água, resíduos, biodiversidade, solo."],
            ["Monte a sequência", "Uma palestra apresenta o tema, uma oficina coloca a mão na massa e uma gincana ou plantio fecha o mês."],
            ["Distribua por turma", "Defina com o supervisor quais turmas recebem cada atividade, em que dia e horário."],
            ["Liste materiais e responsáveis", "Quem prepara, quem conduz, quem fotografa e quem registra."],
            ["Confira o calendário", "Provas, feriados e eventos da escola entram no plano antes das atividades."],
          ],
        },
        {
          t: "caso",
          unidade: "EMEF Jaime Lacet",
          titulo: "Temas mensais que viraram marca",
          texto: "A equipe organizou o ano em temas como “Expedição Biodiversidade”, em julho, e “Cientistas da Água”, em agosto, passando por energia, mudanças climáticas, insetos, minhocas e compostagem. Foi a unidade com mais ações registradas em 2026.",
        },
        { t: "h", texto: "O registro de cada ação" },
        {
          t: "lista",
          titulo: "O que registrar, sempre no mesmo dia",
          itens: [
            "Data e horário da ação.",
            "Unidade e turma atendida.",
            "Modalidade: palestra, oficina, gincana, campanha, arborização ou publicação.",
            "Número exato de participantes, contado antes de começar.",
            "Tema e uma descrição breve do que foi feito, em três a cinco linhas.",
            "Fotos do início, do desenvolvimento e do encerramento.",
            "Número de mudas ou quilos coletados, quando for o caso.",
            "Uma frase ou reação marcante de algum aluno.",
          ],
        },
        { t: "diagrama", nome: "fluxoRegistro" },
        {
          t: "ideia",
          titulo: "Por que contar os participantes com cuidado",
          texto: "O indicador de participações soma os participantes de cada ação. Um número errado em uma turma se multiplica nos totais da unidade e do projeto. Conte antes de começar e registre o número real, nunca uma estimativa arredondada.",
        },
        {
          t: "p",
          texto:
            "O sistema de relatórios tem fechamento mensal: depois que a coordenação fecha o mês, novos registros daquele período não entram. Registrar no mesmo dia evita esquecimentos e garante que o trabalho da equipe apareça nos resultados.",
        },
        { t: "link", texto: "O registro é feito no sistema de relatórios do projeto, com o acesso da sua unidade.", rotulo: "Abrir o sistema de relatórios", href: "sistema" },
        {
          t: "cenario",
          situacao: "A oficina foi ótima, mas, no fim, ninguém da equipe contou quantos alunos participaram. O que fazer?",
          opcoes: [
            { texto: "Registrar 40, um número que parece razoável para a turma.", retorno: "Estimar sem base distorce os indicadores. O número registrado precisa ser real." },
            {
              texto: "Confirmar com a professora quantos alunos estavam presentes naquele dia, registrar esse número e combinar que alguém da equipe sempre conta antes de começar.",
              retorno: "Isso mesmo. A lista de presença da turma é uma fonte confiável, e a equipe corrige o processo para as próximas ações.",
              boa: true,
            },
            { texto: "Não registrar a oficina, para não errar.", retorno: "Sem registro, a ação desaparece dos resultados. É melhor buscar o número real com a professora." },
          ],
        },
        {
          t: "ideia",
          titulo: "O certificado é o começo",
          texto: "Concluir esta formação não encerra o seu aprendizado. Ele continua em cada visita, em cada aluno que planta uma muda com você e em cada gincana que mobiliza uma escola.",
        },
      ],
    },
  ],
  avaliacao: [
    {
      q: "O que significa ser multiplicador ambiental no Asa Verde?",
      opcoes: [
        "Ser o fiscal que avalia as escolas",
        "Ser o canal pelo qual o conhecimento chega aos alunos e, por meio deles, às famílias",
        "Ser o professor titular das aulas de ciências",
        "Ser responsável pela gestão financeira do projeto",
      ],
      certa: 1,
      licao: "m1",
      explica: "O multiplicador leva a educação ambiental às turmas e é avaliado pelo que os outros aprendem com ele.",
    },
    {
      q: "Além de coordenar o grupo, qual é a responsabilidade do líder da equipe?",
      opcoes: [
        "Registrar sozinho as ações de todos os colegas",
        "Organizar os registros do grupo, fazer a ponte com Mídia e Planejamento e acionar o orientador quando necessário",
        "Avaliar e decidir sozinho as notas dos colegas",
        "Ser o único que conversa com a escola",
      ],
      certa: 1,
      licao: "m1",
      explica: "O líder facilita, mas cada estagiário continua responsável por registrar as próprias ações.",
    },
    {
      q: "Na primeira visita à escola, depois da apresentação, qual deve ser o comportamento principal da equipe?",
      opcoes: [
        "Apresentar o cronograma completo do semestre",
        "Escutar a escola: horários, turmas, calendário, provas e eventos",
        "Fazer uma palestra rápida para os alunos",
        "Deixar a carta com o porteiro e voltar outro dia",
      ],
      certa: 1,
      licao: "m2",
      explica: "Escutar vem antes de propor. A equipe sai da visita com datas combinadas e o nome do supervisor da unidade.",
    },
    {
      q: "Qual pergunta resume a regra de ouro da educação ambiental crítica?",
      opcoes: ["Quantos slides cabem na aula?", "E daí? O que isso tem a ver comigo?", "Qual turma ganhou a gincana?", "Quanto tempo falta para o recreio?"],
      certa: 1,
      licao: "m3",
      explica: "Toda ação precisa fazer sentido na vida dos alunos, partindo do território e da realidade deles.",
    },
    {
      q: "Como se divide o tempo de uma oficina?",
      opcoes: [
        "Explicação longa no início e atividade no fim",
        "Abertura, desenvolvimento e encerramento, com a maior parte do tempo para os alunos fazerem",
        "Só atividade prática, sem conversa",
        "Metade da aula para fotos e metade para a atividade",
      ],
      certa: 1,
      licao: "m4",
      explica: "Abertura de cerca de 20% do tempo, desenvolvimento de cerca de 60% e encerramento de cerca de 20%, com reflexão e compromisso.",
    },
    {
      q: "Com crianças de 4 a 6 anos, qual é a melhor forma de conduzir uma atividade?",
      opcoes: [
        "Explicar todos os passos de uma vez e deixar que façam sozinhas",
        "Um passo por vez, demonstrando antes, com histórias, música ou brincadeira",
        "Usar os mesmos slides do 9º ano",
        "Fazer uma prova curta no fim",
      ],
      certa: 1,
      licao: "m5",
      explica: "Na educação infantil, a atenção é curta e o aprendizado acontece brincando e fazendo, com a professora da turma acompanhando.",
    },
    {
      q: "Qual é a principal diferença entre gincana e campanha?",
      opcoes: [
        "A gincana usa recicláveis; a campanha usa mudas",
        "A gincana é pontual e competitiva; a campanha é contínua e busca criar hábitos",
        "A gincana envolve uma turma; a campanha, só professores",
        "É apenas uma diferença de nome",
      ],
      certa: 1,
      licao: "m6",
      explica: "A gincana mobiliza em um dia; a campanha mobiliza por dias ou semanas em torno de uma meta.",
    },
    {
      q: "Para onde vai o material reciclável das campanhas de coleta seletiva?",
      opcoes: [
        "Para o lixo comum da escola",
        "Para a COOREMM ou catadores da comunidade, combinado com a coordenação",
        "Fica guardado na escola até o fim do ano",
        "Cada aluno leva para casa",
      ],
      certa: 1,
      licao: "m6",
      explica: "A COOREMM, cooperativa de catadores de Marcos Moura, é parceira do projeto. A destinação é combinada com a coordenação.",
    },
    {
      q: "O que transforma um plantio em processo educativo?",
      opcoes: [
        "Plantar o maior número possível de mudas em um único dia",
        "Envolver os alunos em todas as etapas e voltar para acompanhar e cuidar das mudas",
        "Contratar uma empresa para plantar",
        "Plantar só em datas comemorativas",
      ],
      certa: 1,
      licao: "m7",
      explica: "Sensibilização, preparo, plantio, primeira rega e acompanhamento. Cuidar das mudas é parte da ação.",
    },
    {
      q: "Uma equipe faz muitas ações em um único mês, usa sempre palestras e não registra nada. Quais pilares do planejamento ela ignora?",
      opcoes: ["Só o registro", "Só a continuidade", "Só a variedade", "Continuidade, variedade e registro"],
      certa: 3,
      licao: "m8",
      explica: "Concentrar em um mês fere a continuidade, usar um único formato fere a variedade e não registrar faz o trabalho desaparecer dos resultados.",
    },
  ],
};
