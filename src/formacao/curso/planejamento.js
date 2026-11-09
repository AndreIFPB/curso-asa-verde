// Trilha da equipe de Planejamento.

export const PLANEJAMENTO = {
  id: "planejamento",
  nome: "Equipe de Planejamento",
  publico: "Estagiários do monitoramento e dos dados",
  descricao:
    "O sistema de relatórios, as definições dos indicadores, a qualidade dos dados, o acompanhamento das metas e a consolidação dos relatórios mensais e do painel em Power BI.",
  foto: { src: "/img/gal-1108.webp", w: 1400, h: 1050, alt: "Estagiários com cartazes do Projeto Asa Verde" },
  horas: 24,
  licoes: [
    {
      id: "p1",
      titulo: "Dados como prestação de contas",
      resumo: "Por que os dados sustentam o projeto e o que a equipe de Planejamento entrega.",
      blocos: [
        {
          t: "lead",
          texto:
            "O Asa Verde é financiado com recursos públicos e acompanhado pelo Ministério Público. Cada número que o projeto apresenta precisa ser verificável. A equipe de Planejamento é guardiã dessa confiança.",
        },
        {
          t: "p",
          texto:
            "Os indicadores do relatório de impacto, dos relatórios mensais e do painel público em Power BI vêm do sistema de relatórios, em que as equipes registram cada ação. Se o dado está errado no sistema, ele está errado em todos esses documentos.",
        },
        { t: "diagrama", nome: "fluxoRegistro" },
        {
          t: "cartoes",
          titulo: "O que a equipe de Planejamento entrega",
          colunas: 2,
          itens: [
            { titulo: "Qualidade dos registros", texto: "Revisão periódica dos lançamentos, com correção junto às equipes." },
            { titulo: "Acompanhamento das metas", texto: "Visão por unidade do que já foi feito e do que falta, com alertas antecipados." },
            { titulo: "Consolidação mensal", texto: "Apoio aos relatórios mensais enviados aos parceiros e ao fechamento de cada mês." },
            { titulo: "Apoio às unidades", texto: "Orientação aos líderes e estagiários sobre como registrar corretamente." },
          ],
        },
        {
          t: "numeros",
          titulo: "O que os registros mostraram em 2026",
          itens: [
            ["3.194", "ações registradas"],
            ["1.912", "ações educativas presenciais"],
            ["144", "ações por semana, em média, de maio a outubro"],
            ["1.005", "ações em agosto, o pico do ciclo"],
          ],
        },
        {
          t: "check",
          pergunta: "Onde aparece um erro de registro feito no sistema?",
          opcoes: ["Apenas no sistema", "No painel, nos relatórios mensais e no relatório de impacto", "Só na planilha da unidade", "Em nenhum lugar, porque é corrigido automaticamente"],
          certa: 1,
          explica: "Todos os documentos de resultados são alimentados pelo sistema. Um erro na origem se espalha por todos eles.",
        },
      ],
    },
    {
      id: "p2",
      titulo: "O sistema de relatórios",
      resumo: "Como o sistema funciona, quais campos importam e como é o fechamento do mês.",
      blocos: [
        {
          t: "lead",
          texto: "O sistema de relatórios do Asa Verde é um aplicativo web em que cada unidade registra suas ações com data, turma, número de participantes, descrição e evidências.",
        },
        {
          t: "tabela",
          titulo: "Os campos de um registro",
          colunas: ["Campo", "Para que serve", "Erro comum"],
          linhas: [
            ["Data", "Situa a ação no mês e no ciclo", "Lançar a data do registro em vez da data da ação"],
            ["Unidade e turma", "Mostra onde e com quem a ação aconteceu", "Turma genérica, como “várias”"],
            ["Modalidade", "Classifica a ação nos indicadores", "Registrar gincana como oficina"],
            ["Participantes", "Alimenta o indicador de participações", "Número estimado ou repetido de outra ação"],
            ["Descrição", "Explica o que foi feito e o tema", "Texto vazio ou copiado de outro registro"],
            ["Mudas ou quilos", "Alimenta arborização e coleta seletiva", "Deixar em branco em uma ação de plantio"],
            ["Evidências", "Comprova a ação com fotos", "Registro sem nenhuma foto"],
          ],
        },
        {
          t: "p",
          texto:
            "O sistema trabalha com perfis de **escola** e de **centro de educação infantil**, o que permite separar os resultados por tipo de unidade. Os dados podem ser exportados em planilha e em PDF para a consolidação dos relatórios.",
        },
        {
          t: "ideia",
          titulo: "O fechamento do mês",
          texto: "O sistema tem fechamento mensal: depois que a coordenação fecha um mês, os registros daquele período ficam consolidados e novos lançamentos não entram. Antes de cada fechamento, a equipe de Planejamento confere as pendências com os líderes.",
        },
        { t: "link", texto: "Conheça o sistema com o acesso fornecido pela coordenação.", rotulo: "Abrir o sistema de relatórios", href: "sistema" },
        {
          t: "check",
          pergunta: "Um registro de plantio veio sem o número de mudas. O que acontece?",
          opcoes: ["Nada, o sistema estima", "A ação conta, mas as mudas não entram no indicador de arborização", "O registro é apagado automaticamente", "As mudas são contadas no mês seguinte"],
          certa: 1,
          explica: "Sem o número de mudas, o indicador de mudas plantadas fica incompleto. A equipe de Planejamento deve pedir a correção ao líder da unidade.",
        },
      ],
    },
    {
      id: "p3",
      titulo: "Definições e qualidade dos dados",
      resumo: "O que cada indicador mede e como encontrar e corrigir inconsistências.",
      blocos: [
        {
          t: "lead",
          texto: "Indicadores só são comparáveis quando todos entendem a mesma coisa por cada um deles. As definições abaixo são as usadas no relatório de impacto.",
        },
        {
          t: "tabela",
          titulo: "As definições oficiais",
          colunas: ["Indicador", "Definição"],
          linhas: [
            ["Ações registradas", "Todas as modalidades, inclusive as publicações digitais"],
            ["Ações educativas presenciais", "Todas as modalidades, exceto as publicações"],
            ["Participações", "Soma dos participantes informados em cada ação; um mesmo estudante pode ser contado mais de uma vez"],
            ["Mudas plantadas", "Quantidade informada nas ações de arborização, incluindo nativas, frutíferas, ornamentais e hortaliças"],
            ["Gincanas e campanhas", "Ações de mobilização coletiva, pontuais ou contínuas"],
          ],
        },
        {
          t: "ideia",
          titulo: "Participações não são estudantes",
          texto: "O indicador de participações é um somatório de presenças por ação, e isso é intencional. Ele mede a intensidade do trabalho. Nunca o apresente como número de estudantes diferentes alcançados.",
        },
        {
          t: "lista",
          titulo: "Sinais de alerta na revisão",
          itens: [
            "Dois registros com a mesma data, turma, modalidade e descrição: possível duplicidade.",
            "Participantes acima do tamanho da turma ou números redondos repetidos em sequência.",
            "Datas fora do período de atividades, em fins de semana ou em feriados.",
            "Modalidade que não combina com a descrição, como “gincana” descrita como palestra.",
            "Registros sem foto ou com a mesma foto usada em ações diferentes.",
            "Unidade com queda brusca de registros: pode ser problema na escola, e não só no sistema.",
          ],
        },
        {
          t: "passos",
          titulo: "Como corrigir sem desgastar a equipe",
          itens: [
            ["Verifique antes de apontar", "Confira a descrição e as fotos. Às vezes o registro está certo e o estranho é o contexto."],
            ["Fale com o líder", "Envie ao líder da unidade a lista de pontos a revisar, com clareza e respeito."],
            ["Corrija na origem", "A correção é feita no sistema, e não apenas na planilha exportada."],
            ["Explique o porquê", "Use cada correção para ensinar a registrar melhor da próxima vez."],
          ],
        },
        {
          t: "cenario",
          situacao: "Na revisão, você encontra uma turma de 25 alunos com 60 participantes registrados em uma palestra. O que faz?",
          opcoes: [
            { texto: "Corrige para 25 por conta própria.", retorno: "Talvez a palestra tenha reunido duas turmas. Corrigir sem verificar pode apagar um dado verdadeiro." },
            {
              texto: "Confere a descrição e as fotos e pergunta ao líder se a ação reuniu mais de uma turma, pedindo a correção se for o caso.",
              retorno: "Isso mesmo. Verificar antes de corrigir preserva o dado verdadeiro e ensina a equipe a descrever melhor a ação.",
              boa: true,
            },
            { texto: "Deixa como está, porque o número maior é bom para o projeto.", retorno: "Número inflado compromete a credibilidade de todos os resultados. A equipe de Planejamento é guardiã da qualidade." },
          ],
        },
      ],
    },
    {
      id: "p4",
      titulo: "Metas, ritmo e relatórios",
      resumo: "Como acompanhar as unidades ao longo do ciclo e apoiar a consolidação dos relatórios.",
      blocos: [
        {
          t: "lead",
          texto: "Acompanhar metas não é cobrar números no fim do ano. É enxergar cedo quais unidades precisam de apoio, enquanto ainda há tempo de agir.",
        },
        { t: "metas" },
        {
          t: "p",
          texto:
            "Em 2026, a curva de execução acompanhou a entrada escalonada das unidades: escolas entre o fim de maio e junho, centros de educação infantil em julho e a última escola em agosto. Outubro teve menos dias disponíveis por causa das eleições, feriados e do Dia das Crianças, e novembro foi dedicado ao encerramento.",
        },
        {
          t: "ideia",
          titulo: "A consequência prática",
          texto: "As metas de cada unidade precisam estar bem adiantadas até setembro. A equipe de Planejamento deve sinalizar ao orientador e à coordenação, já em agosto, as unidades com ritmo abaixo do esperado.",
        },
        {
          t: "passos",
          titulo: "A rotina de acompanhamento",
          itens: [
            ["Semanal", "Revisão dos registros novos e conversa com os líderes sobre pendências."],
            ["Quinzenal", "Quadro por unidade com o andamento das metas, compartilhado com orientadores e coordenação."],
            ["Mensal", "Conferência antes do fechamento do mês e apoio ao relatório mensal enviado aos parceiros."],
            ["Ao fim do ciclo", "Consolidação dos dados para o relatório de impacto e atualização do painel em Power BI."],
          ],
        },
        { t: "link", texto: "O painel público em Power BI é atualizado a partir do sistema de relatórios.", rotulo: "Abrir o painel de monitoramento", href: "painel" },
        {
          t: "check",
          pergunta: "Em agosto, uma unidade registrou poucas ações em relação às outras. Qual é a melhor atitude?",
          opcoes: ["Esperar o fechamento do ano para ver se melhora", "Sinalizar ao orientador e à coordenação e entender com o líder o que está acontecendo", "Lançar ações em nome da unidade", "Remover a unidade do painel"],
          certa: 1,
          explica: "O acompanhamento serve para agir cedo. A queda pode ter causas na escola, como calendário ou espaço, que o orientador e a coordenação podem resolver.",
        },
      ],
    },
  ],
  avaliacao: [
    {
      q: "Por que a equipe de Planejamento é chamada de guardiã da confiança no projeto?",
      opcoes: ["Porque decide quais unidades continuam", "Porque garante que os números apresentados com recursos públicos sejam verificáveis", "Porque cuida das redes sociais", "Porque aplica as provas aos alunos"],
      certa: 1,
      licao: "p1",
      explica: "Os resultados do projeto são prestação de contas; a qualidade dos dados sustenta essa confiança.",
    },
    {
      q: "O que diferencia ações registradas de ações educativas presenciais?",
      opcoes: ["Não há diferença", "As registradas incluem as publicações digitais; as presenciais, não", "As presenciais incluem as publicações", "As registradas são só as do primeiro semestre"],
      certa: 1,
      licao: "p3",
      explica: "Ações registradas incluem todas as modalidades, inclusive publicações. As presenciais excluem as publicações.",
    },
    {
      q: "Como deve ser apresentado o indicador de participações?",
      opcoes: ["Como número de estudantes diferentes alcançados", "Como soma das presenças em cada ação, em que um estudante pode ser contado mais de uma vez", "Como número de matrículas das escolas", "Como estimativa de famílias alcançadas"],
      certa: 1,
      licao: "p3",
      explica: "É um somatório intencional de presenças por ação, que mede a intensidade do trabalho.",
    },
    {
      q: "O que acontece depois do fechamento de um mês no sistema?",
      opcoes: ["Os registros do mês podem ser editados livremente", "Os registros ficam consolidados e novos lançamentos daquele mês não entram", "O sistema apaga os registros", "O mês é reaberto automaticamente"],
      certa: 1,
      licao: "p2",
      explica: "Por isso a conferência de pendências com os líderes é feita antes de cada fechamento.",
    },
    {
      q: "Qual destes é um sinal de possível duplicidade?",
      opcoes: ["Duas ações em turmas diferentes no mesmo dia", "Dois registros com mesma data, turma, modalidade e descrição", "Uma oficina com 20 participantes", "Uma ação de plantio com fotos"],
      certa: 1,
      licao: "p3",
      explica: "Registros idênticos em todos os campos merecem verificação com o líder.",
    },
    {
      q: "Onde a correção de um registro deve ser feita?",
      opcoes: ["Só na planilha exportada", "No próprio sistema, na origem", "No Power BI", "No relatório impresso"],
      certa: 1,
      licao: "p3",
      explica: "Corrigir na origem garante que todos os documentos alimentados pelo sistema fiquem certos.",
    },
    {
      q: "Por que as metas precisam estar adiantadas até setembro?",
      opcoes: ["Porque o sistema fecha em setembro", "Porque outubro tem menos dias disponíveis e novembro é dedicado ao encerramento", "Porque as escolas entram em férias em setembro", "Porque o relatório é entregue em setembro"],
      certa: 1,
      licao: "p4",
      explica: "Eleições, feriados e eventos reduzem outubro, e novembro é o mês das despedidas.",
    },
  ],
};
