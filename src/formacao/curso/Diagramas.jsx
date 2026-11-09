// Diagramas ilustrativos do curso, montados em HTML e CSS para quebrar
// bem as linhas em qualquer tela.
import { Balanca, Escola, Capelo, Folha, Pessoas, Grafico, Camera, Bussola, Lista, Prancheta, Seta, Cadeado } from "./icones.jsx";

function Governanca() {
  return (
    <figure className="dg dg-gov" aria-label="Diagrama das instituições do projeto em torno das unidades educacionais">
      <div className="dg-gov-grid">
        <div className="dg-no dg-no--mppb">
          <Balanca />
          <strong>Ministério Público da Paraíba</strong>
          <span>idealiza e acompanha</span>
        </div>
        <div className="dg-no dg-no--pref">
          <Escola />
          <strong>Prefeitura de Santa Rita</strong>
          <span>financia e faz a gestão local, com SEMMA e Secretaria de Educação</span>
        </div>
        <div className="dg-no dg-no--ifpb">
          <Capelo />
          <strong>IFPB – Campus Santa Rita</strong>
          <span>executa, forma e orienta os multiplicadores</span>
        </div>
        <div className="dg-centro">
          <Folha />
          <strong>17 escolas e CIEIs</strong>
          <span>onde o projeto acontece, toda semana</span>
        </div>
        <div className="dg-no dg-no--coop">
          <Pessoas />
          <strong>COOREMM</strong>
          <span>recebe os recicláveis das campanhas</span>
        </div>
      </div>
    </figure>
  );
}

function Estrutura() {
  return (
    <figure className="dg dg-org" aria-label="Organograma do funcionamento do projeto">
      <div className="dg-org-topo">
        <div className="dg-org-caixa dg-org-caixa--escura">
          <strong>Coordenação do projeto</strong>
          <span>IFPB e SEMMA</span>
        </div>
        <div className="dg-org-lado">
          <Balanca />
          <span>A Promotoria de Justiça acompanha com visitas às unidades</span>
        </div>
      </div>
      <div className="dg-org-meio">
        <div className="dg-org-caixa">
          <Grafico />
          <strong>Equipe de Planejamento</strong>
          <span>dados, sistema e metas</span>
        </div>
        <div className="dg-org-caixa">
          <Bussola />
          <strong>Professores orientadores</strong>
          <span>orientação pedagógica das equipes</span>
        </div>
        <div className="dg-org-caixa">
          <Camera />
          <strong>Equipe de Mídia</strong>
          <span>comunicação e cobertura</span>
        </div>
      </div>
      <div className="dg-org-base">
        <div className="dg-org-unidade">
          <p className="dg-org-rotulo">Em cada unidade</p>
          <div className="dg-org-equipe">
            <div className="dg-org-caixa dg-org-caixa--cit">
              <Pessoas />
              <strong>Equipe de 4 a 5 estagiários</strong>
              <span>com um líder</span>
            </div>
            <div className="dg-org-par">
              <div className="dg-org-caixa">
                <strong>Supervisor da unidade</strong>
                <span>professor da escola</span>
              </div>
              <div className="dg-org-caixa">
                <strong>Direção</strong>
                <span>gestão da escola ou CIEI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </figure>
  );
}

function Fluxo({ itens, rotulo, classe = "" }) {
  return (
    <figure className={`dg dg-fluxo ${classe}`} aria-label={rotulo}>
      <ol>
        {itens.map((item, i) => {
          const [Icone, titulo, texto] = item;
          return (
            <li key={titulo}>
              <span className="dg-fluxo-n">{i + 1}</span>
              <span className="dg-fluxo-ic">
                <Icone />
              </span>
              <strong>{titulo}</strong>
              <span>{texto}</span>
              {i < itens.length - 1 && (
                <span className="dg-fluxo-seta" aria-hidden="true">
                  <Seta />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

function Barra({ partes, rotulo, nota }) {
  const total = partes.reduce((s, p) => s + p[1], 0);
  return (
    <figure className="dg dg-barra" aria-label={rotulo}>
      <div className="dg-barra-faixa" aria-hidden="true">
        {partes.map(([nome, valor], i) => (
          <span key={nome} className={`dg-barra-seg dg-barra-seg--${i}`} style={{ flexGrow: valor, flexBasis: 0 }}>
            <span>{i + 1}</span>
            <strong>{nome}</strong>
          </span>
        ))}
      </div>
      <ol className="dg-barra-leg">
        {partes.map(([nome, valor, tempo], i) => (
          <li key={nome}>
            <span className={`dg-barra-cor dg-barra-seg--${i}`} aria-hidden="true">
              {i + 1}
            </span>
            <span>
              <strong>{nome}</strong>
              <span>{tempo}</span>
            </span>
            <span className="dg-barra-pct">{Math.round((valor / total) * 100)}%</span>
          </li>
        ))}
      </ol>
      {nota && <figcaption>{nota}</figcaption>}
    </figure>
  );
}

export default function Diagrama({ nome }) {
  switch (nome) {
    case "governanca":
      return <Governanca />;
    case "estrutura":
      return <Estrutura />;
    case "cicloAcao":
      return (
        <Fluxo
          rotulo="As cinco etapas do ciclo de cada ação"
          classe="dg-fluxo--ciclo"
          itens={[
            [Lista, "Planejar", "tema, turma, materiais e responsáveis"],
            [Pessoas, "Executar", "abertura, desenvolvimento e encerramento"],
            [Prancheta, "Registrar", "no sistema, no mesmo dia"],
            [Camera, "Divulgar", "fotos e legenda para as redes"],
            [Grafico, "Consolidar", "relatórios mensais e painel"],
          ]}
        />
      );
    case "fluxoRegistro":
      return (
        <Fluxo
          rotulo="O caminho de um registro até os relatórios"
          itens={[
            [Pessoas, "Ação na unidade", "participantes contados e fotos feitas"],
            [Prancheta, "Registro no sistema", "pelo estagiário, no mesmo dia"],
            [Lista, "Revisão", "pela equipe de Planejamento, com o líder"],
            [Cadeado, "Fechamento do mês", "pela coordenação"],
            [Grafico, "Painel e relatórios", "Power BI, relatórios mensais e relatório de impacto"],
          ]}
        />
      );
    case "fluxoMidia":
      return (
        <Fluxo
          rotulo="O caminho do material de uma ação até a publicação"
          itens={[
            [Camera, "Unidade", "fotos, vídeos curtos e descrição"],
            [Pessoas, "Líder", "envia o material no mesmo dia"],
            [Lista, "Mídia", "seleciona, confere autorizações e edita"],
            [Folha, "Publicação", "legenda revisada e créditos"],
            [Prancheta, "Registro e arquivo", "sistema de relatórios e banco de imagens"],
          ]}
        />
      );
    case "palestra":
      return (
        <Barra
          rotulo="Distribuição do tempo de uma palestra de cerca de 30 minutos"
          nota="Distribuição aproximada para uma palestra de cerca de 30 minutos."
          partes={[
            ["Gancho", 3, "2 a 3 min"],
            ["Contexto", 7, "5 a 8 min"],
            ["Informação central", 10, "8 a 12 min"],
            ["Conexão", 4, "3 a 5 min"],
            ["Fechamento", 3, "2 a 3 min"],
          ]}
        />
      );
    case "tresMomentos":
      return (
        <Barra
          rotulo="Os três momentos de uma oficina"
          nota="Proporção do tempo de uma oficina."
          partes={[
            ["Abertura", 20, "engajar e contextualizar"],
            ["Desenvolvimento", 60, "os alunos fazem"],
            ["Encerramento", 20, "refletir e assumir um compromisso"],
          ]}
        />
      );
    default:
      return null;
  }
}
