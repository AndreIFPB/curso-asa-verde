// Trilha da equipe de Mídia.

export const MIDIA = {
  id: "midia",
  nome: "Equipe de Mídia",
  publico: "Estagiários da comunicação",
  descricao:
    "O papel da comunicação no projeto, o fluxo de produção, fotografia e vídeo de ações educativas, proteção da imagem de crianças, legendas e relação com a imprensa.",
  foto: { src: "/img/com-radio.webp", w: 675, h: 1200, alt: "Estagiária do Asa Verde em entrevista na Rádio 100.5 FM" },
  horas: 24,
  licoes: [
    {
      id: "c1",
      titulo: "A comunicação no Asa Verde",
      resumo: "Por que comunicar é parte do método e o que a equipe de Mídia entrega.",
      blocos: [
        {
          t: "lead",
          texto:
            "Comunicar não é enfeite: é prestação de contas. A comunicação mostra à sociedade o que está sendo feito com recursos públicos, valoriza o protagonismo de estudantes e estagiários e aproxima o projeto das famílias.",
        },
        {
          t: "numeros",
          titulo: "A comunicação em 2026",
          itens: [
            ["1.282", "publicações digitais registradas pelas 17 unidades"],
            ["10", "estagiários na equipe de Mídia"],
            ["2", "reportagens: Rádio 100.5 FM e TV Cabo Branco"],
            ["+488%", "publicações em relação a 2025"],
          ],
        },
        {
          t: "p",
          texto:
            "As unidades alimentaram semanalmente as redes do projeto, com destaque para o perfil **@projetoasaverde** no Instagram. A equipe de Mídia produziu stories, vídeos e coberturas das visitas institucionais e apoiou as equipes de campo na produção de conteúdo.",
        },
        {
          t: "ideia",
          titulo: "Publicação também é ação registrada",
          texto: "Cada publicação sobre as ações do projeto entra no sistema de relatórios como ação registrada, separada das ações presenciais. Publicar e não registrar é perder um resultado que pertence à equipe.",
        },
        {
          t: "cartoes",
          titulo: "O que a equipe de Mídia entrega",
          colunas: 2,
          itens: [
            { titulo: "Redes do projeto", texto: "Publicações, stories e vídeos curtos sobre as ações das unidades." },
            { titulo: "Coberturas especiais", texto: "Visitas da Promotoria, abertura, Semana do Meio Ambiente, Dia da Árvore e encerramento." },
            { titulo: "Banco de imagens", texto: "Fotos organizadas por unidade e mês, usadas nos relatórios mensais e no relatório de impacto." },
            { titulo: "Apoio às equipes", texto: "Orientação às unidades sobre fotos, vídeos e legendas, para que o material chegue com qualidade." },
          ],
        },
        {
          t: "fotos",
          itens: [
            { src: "/img/com-tv.webp", w: 900, h: 1200, alt: "Reportagem da TV Cabo Branco em escola atendida pelo projeto", legenda: "TV Cabo Branco na caminhada ecológica da EMEF Jaime Lacet, 21 de agosto." },
            { src: "/img/com-desfile.webp", w: 900, h: 1200, alt: "Estudantes no desfile cívico de 7 de Setembro com faixa sobre árvores", legenda: "Desfile cívico de 7 de Setembro com tema ambiental." },
          ],
        },
        {
          t: "check",
          pergunta: "Uma publicação sobre uma oficina foi ao ar no Instagram. O que falta?",
          opcoes: ["Nada, a publicação já basta", "Registrar a publicação no sistema de relatórios", "Apagar depois de uma semana", "Enviar para a imprensa"],
          certa: 1,
          explica: "Publicações digitais entram no sistema como ações registradas. Sem o registro, elas não aparecem nos resultados.",
        },
      ],
    },
    {
      id: "c2",
      titulo: "O fluxo de produção",
      resumo: "Do registro na unidade à publicação: pautas, prazos e organização do material.",
      blocos: [
        {
          t: "lead",
          texto: "A equipe de Mídia não está em todas as unidades ao mesmo tempo. Por isso, a comunicação do projeto depende de um fluxo claro entre as equipes de campo, os líderes e a Mídia.",
        },
        { t: "diagrama", nome: "fluxoMidia" },
        {
          t: "passos",
          titulo: "A rotina semanal",
          itens: [
            ["Pauta da semana", "Levante com os líderes as ações previstas nas unidades e escolha o que merece cobertura especial."],
            ["Recebimento do material", "As unidades enviam fotos, vídeos curtos e uma descrição da ação pelo líder, no mesmo dia."],
            ["Seleção e edição", "Escolha as melhores imagens, confira autorizações e ajuste luz e enquadramento sem alterar o que aconteceu."],
            ["Texto e publicação", "Escreva a legenda, revise e publique no horário combinado."],
            ["Registro e arquivo", "Registre a publicação no sistema e guarde as fotos no banco de imagens, organizadas por unidade e mês."],
          ],
        },
        {
          t: "tabela",
          titulo: "Datas para planejar com antecedência",
          colunas: ["Quando", "O que cobrir"],
          linhas: [
            ["Abril", "Abertura do ciclo e formação dos multiplicadores"],
            ["Maio", "Chegada às escolas e primeiras ações"],
            ["3 a 5 de junho", "Dia Nacional da Educação Ambiental e Semana do Meio Ambiente"],
            ["Julho a novembro", "Visitas da Promotoria de Justiça às unidades"],
            ["Setembro", "7 de Setembro e Dia da Árvore"],
            ["Novembro", "Despedidas nas unidades, certificação e mostra de encerramento"],
          ],
        },
        {
          t: "ideia",
          titulo: "Recomendação para o próximo ciclo",
          texto: "O relatório de 2026 recomenda estabelecer um calendário de pautas com a imprensa e realizar uma mostra de encerramento com as 17 unidades. A equipe de Mídia é peça central nas duas frentes.",
        },
        {
          t: "caso",
          unidade: "EMEF Índio Piragibe",
          titulo: "Presença constante nas redes",
          texto: "Com 98 publicações, foi a terceira unidade com maior presença nas redes do projeto. A ação “Os 3Rs em ação”, que envolveu pais e responsáveis, mostrou como a comunicação aproxima as famílias.",
        },
      ],
    },
    {
      id: "c3",
      titulo: "Fotografia e vídeo de ação educativa",
      resumo: "O que fotografar, como enquadrar e como contar uma ação em poucas imagens.",
      blocos: [
        {
          t: "lead",
          texto: "Uma boa foto do Asa Verde mostra aprendizagem acontecendo: mãos na terra, olhares atentos, uma turma construindo algo junto. Fotos posadas têm o seu lugar, mas não contam a história sozinhas.",
        },
        {
          t: "cartoes",
          titulo: "Três imagens que contam uma ação",
          colunas: 3,
          itens: [
            { titulo: "O início", texto: "A turma reunida, o tema apresentado, os materiais prontos." },
            { titulo: "O processo", texto: "Mãos fazendo, grupos trabalhando, o estagiário mediando. É a foto mais importante." },
            { titulo: "O resultado", texto: "O produto da oficina, a muda plantada, a turma no encerramento." },
          ],
        },
        {
          t: "fotos",
          itens: [
            { src: "/img/gal-874.webp", w: 790, h: 1400, alt: "Crianças plantando mudas na grama", legenda: "Processo: mãos e ação, sem rostos em primeiro plano." },
            { src: "/img/gal-ciranda.webp", w: 1600, h: 922, alt: "Ciranda de crianças e estagiários no pátio", legenda: "Ambiente: a atividade inteira em um plano aberto." },
          ],
        },
        {
          t: "lista",
          titulo: "Técnica básica com o celular",
          itens: [
            "Limpe a lente antes de começar. Parece detalhe, mas muda o resultado.",
            "Fotografe com a luz a favor: a janela ou o sol atrás de você, e não atrás das pessoas.",
            "Aproxime-se em vez de usar o zoom digital, que reduz a qualidade.",
            "Na horizontal para relatórios e site; na vertical para stories e vídeos curtos.",
            "Faça várias fotos de cada momento e escolha depois.",
            "Em vídeos, segure o celular com as duas mãos e grave trechos curtos, de 5 a 15 segundos.",
            "Não interrompa a atividade para fotografar: a ação vem antes do registro.",
          ],
        },
        {
          t: "evitar",
          titulo: "Fotos que não devem ser usadas",
          itens: [
            "Crianças chorando, em conflito ou em situação constrangedora.",
            "Imagens que exponham deficiência, vulnerabilidade ou condição de saúde de alguém.",
            "Fotos tremidas, escuras ou com a turma de costas para a atividade.",
            "Imagens com documentos, listas de chamada ou telas com dados pessoais à mostra.",
          ],
        },
        {
          t: "check",
          pergunta: "Qual é a foto mais importante de uma oficina?",
          opcoes: ["A selfie da equipe", "A do processo: os alunos fazendo a atividade", "A da fachada da escola", "A dos materiais ainda na sacola"],
          certa: 1,
          explica: "A foto do processo mostra a aprendizagem acontecendo e é a que melhor representa o método do projeto.",
        },
      ],
    },
    {
      id: "c4",
      titulo: "Proteção da imagem de crianças",
      resumo: "O que diz a lei, o que a equipe faz e o que nunca deve ser publicado.",
      blocos: [
        {
          t: "lead",
          texto: "O Asa Verde trabalha com crianças e adolescentes. Proteger a imagem deles é uma obrigação legal e um compromisso ético do projeto. Na dúvida, não publique.",
        },
        {
          t: "lei",
          titulo: "Estatuto da Criança e do Adolescente, art. 17",
          texto: "O direito ao respeito de crianças e adolescentes abrange a preservação da imagem e da identidade.",
          fonte: "Lei nº 8.069/1990",
        },
        {
          t: "lei",
          titulo: "Lei Geral de Proteção de Dados, art. 14",
          texto: "O tratamento de dados pessoais de crianças deve ser feito com consentimento específico e em destaque dado por pelo menos um dos pais ou pelo responsável legal. A imagem de uma pessoa identificável é um dado pessoal.",
          fonte: "Lei nº 13.709/2018",
        },
        {
          t: "passos",
          titulo: "O que a equipe faz na prática",
          itens: [
            ["Confirme as autorizações", "Antes de publicar, confirme com a escola e a coordenação quais alunos têm autorização de uso de imagem."],
            ["Sem autorização, sem rosto", "Quando não houver autorização, use enquadramentos sem identificação: mãos, costas, plano aberto ou o produto da atividade."],
            ["Nunca nome e imagem juntos", "Não publique nome completo, turma e foto de uma criança na mesma postagem."],
            ["Atenção ao contexto", "Não marque localização em tempo real nem publique informações que permitam localizar uma criança fora da escola."],
            ["Material guardado com cuidado", "Envie as fotos para o banco de imagens do projeto e apague-as do celular pessoal depois."],
          ],
        },
        {
          t: "cenario",
          situacao: "Uma das fotos mais bonitas da semana mostra o rosto de uma criança em primeiro plano, mas ela não está na lista de autorizações da escola. O que fazer?",
          opcoes: [
            { texto: "Publicar mesmo assim, porque a foto é positiva.", retorno: "Uma imagem positiva continua sendo dado pessoal de uma criança. Sem autorização, não pode ser publicada." },
            {
              texto: "Não publicar essa foto e escolher outra da mesma atividade em que a criança não seja identificável.",
              retorno: "Isso mesmo. A ação continua sendo divulgada e a criança fica protegida.",
              boa: true,
            },
            { texto: "Publicar com um emoji sobre o rosto e marcar a escola.", retorno: "Cobrir o rosto pode ajudar, mas identificar a escola e a turma ainda pode expor a criança. O caminho mais seguro é escolher outra imagem." },
          ],
        },
      ],
    },
    {
      id: "c5",
      titulo: "Texto, legenda e imprensa",
      resumo: "Como escrever legendas claras, dar crédito aos parceiros e atender a imprensa.",
      blocos: [
        {
          t: "lead",
          texto: "Uma boa legenda responde às perguntas de quem não estava lá: o que aconteceu, com quem, onde e por que isso importa.",
        },
        {
          t: "passos",
          titulo: "A estrutura de uma legenda",
          itens: [
            ["O quê", "Comece pela ação: “Estudantes do 4º ano plantaram ipês-amarelos no pátio da escola.”"],
            ["Quem e onde", "Identifique a unidade e a turma, nunca o nome completo das crianças."],
            ["Por quê", "Explique o sentido educativo: “A atividade fechou a sequência sobre arborização urbana.”"],
            ["Crédito", "Mencione as instituições: Projeto Asa Verde, MPPB, Prefeitura de Santa Rita e IFPB – Campus Santa Rita."],
          ],
        },
        {
          t: "comparar",
          itens: [
            { titulo: "Evite", texto: "“Mais um dia incrível de projeto!!! 🌱🌱🌱 Muito amor envolvido.”" },
            { titulo: "Prefira", texto: "“As turmas do 3º ano da EMEIF Tiradentes fizeram o experimento “Fazendo chover” para entender o ciclo da água. Projeto Asa Verde · MPPB · Prefeitura de Santa Rita · IFPB.”" },
          ],
        },
        {
          t: "lista",
          titulo: "Revise antes de publicar",
          itens: [
            "O nome da unidade está escrito corretamente?",
            "Os números conferem com o registro da ação?",
            "Há alguma criança identificável sem autorização?",
            "O texto tem erros de digitação ou excesso de emojis?",
            "As instituições parceiras foram mencionadas?",
          ],
        },
        { t: "h", texto: "Quando a imprensa procura o projeto" },
        {
          t: "p",
          texto:
            "Em agosto de 2026, estagiárias da EMEF Jaime Lacet apresentaram o projeto na Rádio 100.5 FM, de Santa Rita, e a TV Cabo Branco cobriu a caminhada ecológica da escola. Entrevistas são oportunidades valiosas, e por isso todo pedido de imprensa passa pela coordenação antes de ser confirmado.",
        },
        {
          t: "lista",
          titulo: "Para preparar uma entrevista",
          itens: [
            "Defina com a coordenação as três mensagens principais.",
            "Tenha à mão os números atualizados: unidades, estagiários, ações, mudas e participações.",
            "Prepare um exemplo concreto de uma unidade.",
            "Mencione as instituições parceiras e a idealização do Ministério Público.",
            "Fale de forma simples, como se explicasse o projeto a um vizinho.",
          ],
        },
        {
          t: "check",
          pergunta: "Um repórter liga pedindo para gravar em uma escola amanhã. O que a equipe faz?",
          opcoes: ["Confirma na hora e avisa a escola depois", "Leva o pedido à coordenação, que combina com a escola e define quem fala", "Recusa, porque a imprensa atrapalha", "Indica o telefone pessoal de um estagiário"],
          certa: 1,
          explica: "Pedidos de imprensa passam pela coordenação, que alinha com a escola, as autorizações de imagem e as mensagens principais.",
        },
      ],
    },
  ],
  avaliacao: [
    {
      q: "Por que a comunicação é considerada parte do método do Asa Verde?",
      opcoes: ["Porque aumenta o número de seguidores", "Porque é prestação de contas à sociedade e valoriza o protagonismo de estudantes e estagiários", "Porque substitui o registro no sistema", "Porque é exigida pelas escolas"],
      certa: 1,
      licao: "c1",
      explica: "A comunicação mostra o uso de recursos públicos e aproxima o projeto das famílias.",
    },
    {
      q: "Como as publicações digitais entram nos resultados do projeto?",
      opcoes: ["Automaticamente, pelo Instagram", "Como ações registradas no sistema, separadas das ações presenciais", "Não entram nos resultados", "Só no relatório final, por estimativa"],
      certa: 1,
      licao: "c1",
      explica: "Cada publicação é registrada no sistema como ação registrada, fora do total de ações presenciais.",
    },
    {
      q: "Qual é o caminho do material de uma ação até a publicação?",
      opcoes: ["Estagiário publica direto no perfil do projeto", "Unidade envia pelo líder, a Mídia seleciona, edita, publica, registra e arquiva", "A escola publica e a Mídia compartilha", "A coordenação recebe e decide o que fazer"],
      certa: 1,
      licao: "c2",
      explica: "O fluxo passa pelo líder e pela Mídia, que publica, registra no sistema e organiza o banco de imagens.",
    },
    {
      q: "Qual destas é uma boa prática de fotografia com o celular?",
      opcoes: ["Usar o zoom digital ao máximo", "Fotografar contra a luz da janela", "Aproximar-se e manter a luz atrás de quem fotografa", "Interromper a atividade para posar"],
      certa: 2,
      licao: "c3",
      explica: "Aproximar-se preserva a qualidade, e a luz a favor ilumina o rosto das pessoas e a atividade.",
    },
    {
      q: "O que fazer quando a criança da melhor foto não tem autorização de uso de imagem?",
      opcoes: ["Publicar, porque a foto é positiva", "Escolher outra imagem em que ela não seja identificável", "Publicar e apagar se alguém reclamar", "Publicar só nos stories"],
      certa: 1,
      licao: "c4",
      explica: "Pelo ECA e pela LGPD, a imagem de criança identificável só é publicada com autorização. A ação pode ser divulgada com outra foto.",
    },
    {
      q: "Qual combinação nunca deve aparecer em uma publicação?",
      opcoes: ["Nome da unidade e tema da atividade", "Nome completo, turma e foto de uma criança", "Logotipos dos parceiros", "Número de mudas plantadas"],
      certa: 1,
      licao: "c4",
      explica: "Juntar nome completo, turma e imagem identifica a criança e a expõe.",
    },
    {
      q: "Qual é a estrutura de uma boa legenda?",
      opcoes: ["Emojis e hashtags", "O quê, quem e onde, por quê e crédito às instituições", "Só o nome da escola", "Um texto longo sobre o projeto inteiro"],
      certa: 1,
      licao: "c5",
      explica: "A legenda informa quem não estava lá e dá crédito às instituições parceiras.",
    },
  ],
};
