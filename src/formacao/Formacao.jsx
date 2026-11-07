import { useState, useEffect } from "react";

const ACCESS_CODE = "asa2026";
const PASS_RATE = 0.70;
const MAX_TRIES = 2;


const QUIZ = [
  { q: "Quem idealizou o Projeto Asa Verde?", opts: ["IFPB Campus Santa Rita","Prefeitura Municipal de Santa Rita","Ministério Público da Paraíba — MPPB","Secretaria Municipal de Educação"], ans: 2 },
  { q: "Em 2025, em quantas escolas municipais o Projeto Asa Verde atuou?", opts: ["5 escolas","8 escolas","10 escolas","15 escolas"], ans: 2 },
  { q: 'O que significa ser um "Multiplicador Ambiental" no Projeto Asa Verde?', opts: ["Ser o coordenador responsável pela gestão financeira do projeto","Ser o estagiário que leva educação ambiental de qualidade para dentro das escolas públicas","Ser o professor titular das aulas de meio ambiente","Ser o fiscal do MPPB que avalia as ações nas escolas"], ans: 1 },
  { q: "Quais são os três eixos de atuação do Projeto Asa Verde?", opts: ["Oficinas, Palestras e Gincanas","Educação Ambiental, Arborização e Comunicação e Visibilidade","Plantio, Reciclagem e Conscientização","MPPB, Prefeitura e IFPB"], ans: 1 },
  { q: "Para iniciar a atuação nas escolas, qual é o requisito obrigatório do estagiário?", opts: ["Ter participado de pelo menos um encontro presencial","Ter sido aprovado com 50% na avaliação do módulo 1","Ter o aval do diretor da escola onde será alocado","Apresentar o certificado de conclusão dos 4 módulos com nota mínima de 70%"], ans: 3 },
];


const QUIZ2 = [
  { q: "Qual é a principal diferença entre realizar uma oficina e uma palestra no Projeto Asa Verde?", opts: ["A palestra usa materiais práticos, enquanto a oficina é apenas informativa","A oficina transforma o aluno em agente ativo — ele faz, experimenta e produz; a palestra sensibiliza e provoca reflexão","A palestra é para turmas pequenas; a oficina serve para grupos grandes","As duas são equivalentes — a escolha depende apenas do tempo disponível"], ans: 1 },
  { q: "Quantos estagiários atuam em cada escola do Projeto Asa Verde e como eles se organizam?", opts: ["3 estagiários sem hierarquia definida, cada um atua de forma independente","10 estagiários divididos em dois turnos, supervisionados diretamente pela coordenação","5 estagiários com um líder de grupo responsável pela comunicação com as equipes do projeto","2 estagiários com supervisão direta e diária da coordenação do IFPB"], ans: 2 },
  { q: "Você acabou de realizar uma palestra para o 7º ano sobre resíduos sólidos. O que deve fazer imediatamente após terminar a ação?", opts: ["Esperar a próxima visita para registrar tudo junto e economizar tempo","Registrar data, escola, turma, número de participantes, tema e tirar pelo menos 3 fotos","Enviar um e-mail para a coordenação contando como foi","Pedir para os alunos avaliarem a palestra por escrito"], ans: 1 },
  { q: "Na estrutura de uma boa palestra, o que deve acontecer ANTES de você apresentar o conteúdo principal?", opts: ["Apresentar seu nome e explicar o tema que vai ser abordado","Distribuir os materiais que serão usados na atividade","Começar com algo que prenda a atenção — uma pergunta, dado impactante ou história real","Pedir silêncio e organizar as carteiras em fileiras"], ans: 2 },
  { q: "Além de coordenar o grupo, quais são as responsabilidades do líder de cada escola no Projeto Asa Verde?", opts: ["Realizar todas as ações sozinho quando algum estagiário faltar e registrar o trabalho dos colegas","Receber e organizar os registros do grupo, repassar para as equipes de mídia e planejamento, e acionar a coordenação quando necessário","Avaliar o desempenho dos colegas e decidir quais ações serão realizadas na escola","Ser o único responsável pela comunicação com a direção da escola e pelos relatórios mensais"], ans: 1 },
];


const QUIZ3 = [
  { q: "Qual é a principal diferença entre uma gincana e uma campanha no Projeto Asa Verde?", opts: ["A gincana usa materiais reciclados; a campanha usa mudas e sementes","A gincana é pontual e competitiva; a campanha é contínua e busca criar novos hábitos ao longo de dias ou semanas","A gincana envolve apenas uma turma; a campanha envolve toda a escola","As duas são equivalentes — a diferença é só o nome"], ans: 1 },
  { q: "Por que é indispensável envolver a direção e os professores antes de organizar qualquer gincana na escola?", opts: ["Para que eles possam escolher o tema da gincana e definir as regras","Porque o estagiário não tem autonomia para alterar a rotina escolar sem alinhamento prévio — e o apoio deles multiplica o engajamento","Somente para conseguir o espaço físico necessário para a atividade","Não é necessário — o estagiário pode organizar ações de forma independente dentro da escola"], ans: 1 },
  { q: "O que é a COREMM e qual é sua relação direta com as campanhas do Projeto Asa Verde?", opts: ["É a coordenação de registro e monitoramento das metas do projeto","É a cooperativa de reciclagem de Santa Rita que recebe o material coletado nas campanhas das escolas","É o setor da Prefeitura responsável por autorizar as ações do projeto","É a equipe de comunicação que produz o conteúdo para as redes sociais"], ans: 1 },
  { q: "Uma campanha de coleta seletiva foi bem executada e bem registrada. Quantos indicadores do projeto ela pode alimentar ao mesmo tempo?", opts: ["Apenas 1 — o de gincanas e campanhas","2 indicadores — gincanas e resíduos coletados","3 indicadores — gincanas/campanhas, resíduos coletados e publicações nas mídias digitais","Nenhum — campanhas não contam nos indicadores do Power BI"], ans: 2 },
  { q: "Qual é a meta de gincanas e campanhas por escola no Projeto Asa Verde?", opts: ["1 ação por escola","2 ações por escola","3 ações por escola","5 ações por escola"], ans: 2 },
];


const QUIZ4 = [
  { q: "No Projeto Asa Verde, qual é a diferença entre 'plantar uma árvore' e 'conduzir uma ação de arborização'?", opts: ["Não há diferença — as duas expressões descrevem a mesma atividade","Plantar é uma tarefa pontual; conduzir uma ação de arborização é um processo educativo que envolve os alunos em todas as etapas e cria vínculo duradouro com o ambiente","A ação de arborização é restrita à área rural; plantar árvore é feito dentro da escola","A ação de arborização é realizada apenas por professores; o estagiário faz o plantio simples"], ans: 1 },
  { q: "Por que o Projeto Asa Verde utiliza exclusivamente espécies nativas do bioma local nas ações de arborização?", opts: ["Porque espécies nativas são mais baratas e fáceis de encontrar no comércio local","Por exigência estética — as espécies nativas têm aparência mais adequada para ambientes escolares","Porque são adaptadas ao clima nordestino, fortalecem a biodiversidade regional, ensinam sobre o território local e têm maior taxa de sobrevivência","Porque a legislação ambiental proíbe o uso de espécies exóticas em projetos escolares"], ans: 2 },
  { q: "Você chegou na escola para a primeira visita oficial. Após a apresentação, qual deve ser o seu principal comportamento nesse encontro?", opts: ["Apresentar imediatamente o cronograma completo de ações que você já planejou para o semestre","Escutar a escola — perguntar sobre horários disponíveis, calendário escolar e perfil das turmas antes de propor qualquer coisa","Realizar uma palestra rápida de apresentação do projeto para os alunos","Distribuir a Carta Institucional para todos os professores e aguardar o retorno deles"], ans: 1 },
  { q: "Um estagiário faz muitas ações em um único mês, usa sempre o mesmo formato — só palestras — e não anota nada. Qual dos três pilares do bom planejamento ele está ignorando?", opts: ["Apenas o registro — os outros dois pilares estão sendo respeitados","Apenas a continuidade — ele deveria distribuir melhor as ações no tempo","Apenas a variedade — usar só palestras é suficiente se fizer em quantidade","Os três — está concentrando ações em um mês (sem continuidade), usando só um formato (sem variedade) e não registrando nada (sem registro)"], ans: 3 },
  { q: "O certificado de conclusão dos 4 módulos marca o fim da formação do estagiário no Projeto Asa Verde?", opts: ["Sim — após o certificado o estagiário já tem tudo que precisa e atua de forma totalmente independente","Não — o certificado é o começo da atuação. A formação continua em cada visita, cada plantio e cada ação realizada na escola","Sim — o certificado substitui a necessidade de participar dos encontros presenciais","Não — é preciso fazer mais dois módulos avançados antes de começar a atuar"], ans: 1 },
];

const STATS = [
  { n: "60", l: "Estagiários", s: "como você" },
  { n: "4.751", l: "Estudantes", s: "alcançados" },
  { n: "10", l: "Escolas", s: "urbana e rural" },
  { n: "2.231", l: "Ações", s: "jun–dez/2025" },
  { n: "1.214", l: "Árvores", s: "espécies nativas" },
  { n: "2.322 kg", l: "Resíduos", s: "destinados COREMM" },
];

const storageKey = (n) => `av2:${n.trim().toLowerCase().replace(/\s+/g,"_")}`;

const storageSave = (key, value) => {
  try { localStorage.setItem(key, value); } catch(_) {}
};
const storageLoad = (key) => {
  try { return localStorage.getItem(key); } catch(_) { return null; }
};

// ─── LOGO TEXTO ──────────────────────────────────────────────
function Logo({ forDark = false }) {
  const textColor = forDark ? "#ffffff" : "#1b5e20";
  return (
    <div style={{ textAlign:"center", lineHeight:1.15 }}>
      <div style={{ fontFamily:"'Playfair Display', Georgia, serif", fontWeight:900, fontSize:"1.8rem", color:textColor, letterSpacing:"0.1em" }}>
        PROJETO
      </div>
      <div style={{ fontFamily:"'Playfair Display', Georgia, serif", fontWeight:900, fontSize:"2.4rem", color:textColor, letterSpacing:"0.14em" }}>
        ASA VERDE
      </div>
    </div>
  );
}

// ─── SECTION WRAPPER ─────────────────────────────────────────
function SectionBlock({ id, visible, children }) {
  return (
    <div id={id} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(32px)",
      transition: "opacity 0.6s ease, transform 0.6s ease",
      pointerEvents: visible ? "auto" : "none",
      display: visible ? "block" : "none",
    }}>
      {children}
    </div>
  );
}

// ─── CALLOUT BOXES ────────────────────────────────────────────
function GreenBox({ title, children }) {
  return (
    <div style={{ background:"#e8f5e9", border:"2px solid #2e7d32", borderRadius:12, padding:"1.2rem 1.4rem", margin:"1.2rem 0" }}>
      {title && <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", margin:"0 0 0.5rem", fontSize:"0.95rem" }}>{title}</p>}
      <div style={{ color:"#1b4a1b", fontSize:"0.92rem", lineHeight:1.75 }}>{children}</div>
    </div>
  );
}

function BlueBox({ title, children }) {
  return (
    <div style={{ background:"#e3f2fd", border:"2px solid #1565c0", borderRadius:12, padding:"1.2rem 1.4rem", margin:"1.2rem 0" }}>
      {title && <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#0d47a1", margin:"0 0 0.5rem", fontSize:"0.95rem" }}>{title}</p>}
      <div style={{ color:"#1a237e", fontSize:"0.92rem", lineHeight:1.75 }}>{children}</div>
    </div>
  );
}

function OrangeBox({ title, children }) {
  return (
    <div style={{ background:"#fff3e0", border:"2px solid #e65100", borderRadius:12, padding:"1.2rem 1.4rem", margin:"1.2rem 0" }}>
      {title && <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#bf360c", margin:"0 0 0.5rem", fontSize:"0.95rem" }}>⚠ {title}</p>}
      <div style={{ color:"#4e342e", fontSize:"0.92rem", lineHeight:1.75 }}>{children}</div>
    </div>
  );
}

function Quote({ children }) {
  return (
    <div style={{ borderLeft:"4px solid #2e7d32", paddingLeft:"1.2rem", margin:"1.2rem 0", background:"#f1f8e9", borderRadius:"0 8px 8px 0", padding:"1rem 1rem 1rem 1.4rem" }}>
      <p style={{ fontFamily:"'Playfair Display',serif", fontSize:"1.05rem", fontStyle:"italic", color:"#1b5e20", margin:0, lineHeight:1.8 }}>"{children}"</p>
    </div>
  );
}

function SectionTitle({ icon, children }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:12, background:"linear-gradient(135deg,#1b5e20,#2e7d32)", borderRadius:12, padding:"1rem 1.4rem", margin:"0 0 1.4rem" }}>
      <span style={{ fontSize:24 }}>{icon}</span>
      <h2 style={{ margin:0, color:"#fff", fontFamily:"'Playfair Display',serif", fontSize:"1.15rem", fontWeight:700 }}>{children}</h2>
    </div>
  );
}

function SubTitle({ children }) {
  return (
    <h3 style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#2e7d32", fontSize:"1.05rem", borderBottom:"2px solid #a5d6a7", paddingBottom:"0.4rem", margin:"1.4rem 0 0.8rem" }}>{children}</h3>
  );
}

function Body({ children, style }) {
  return <p style={{ fontFamily:"'Source Serif 4',Georgia,serif", fontSize:"0.95rem", lineHeight:1.85, color:"#212121", margin:"0 0 0.9rem", ...style }}>{children}</p>;
}

function Bullet({ children }) {
  return (
    <div style={{ display:"flex", gap:10, marginBottom:"0.6rem", fontFamily:"'Source Serif 4',Georgia,serif", fontSize:"0.92rem", lineHeight:1.7, color:"#212121" }}>
      <span style={{ color:"#2e7d32", fontWeight:700, flexShrink:0, marginTop:2 }}>◆</span>
      <span>{children}</span>
    </div>
  );
}

// ─── PARTNER CARD ─────────────────────────────────────────────
function PartnerCard({ emoji, name, role, desc }) {
  return (
    <div style={{ border:"1px solid #c8e6c9", borderRadius:12, overflow:"hidden", marginBottom:"1rem" }}>
      <div style={{ background:"#1b5e20", padding:"0.8rem 1.2rem", display:"flex", alignItems:"center", gap:10 }}>
        <span style={{ fontSize:20 }}>{emoji}</span>
        <div>
          <p style={{ margin:0, color:"#fff", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem" }}>{name}</p>
          <p style={{ margin:0, color:"#a5d6a7", fontSize:"0.78rem", letterSpacing:"0.05em" }}>{role}</p>
        </div>
      </div>
      <div style={{ padding:"1rem 1.2rem", background:"#f9fbe7" }}>
        <Body>{desc}</Body>
      </div>
    </div>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────
function StatCard({ n, l, s }) {
  return (
    <div style={{ background:"#f1f8e9", border:"1px solid #a5d6a7", borderRadius:12, padding:"1rem 0.8rem", textAlign:"center" }}>
      <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"1.8rem", color:"#2e7d32", lineHeight:1 }}>{n}</div>
      <div style={{ fontFamily:"'Source Serif 4',serif", fontWeight:600, fontSize:"0.85rem", color:"#1b5e20", marginTop:4 }}>{l}</div>
      <div style={{ fontSize:"0.75rem", color:"#558b2f", fontStyle:"italic" }}>{s}</div>
    </div>
  );
}

// ─── EIXO CARD ────────────────────────────────────────────────
function EixoCard({ icon, title, type, children }) {
  return (
    <div style={{ border:"1px solid #c8e6c9", borderRadius:12, overflow:"hidden", marginBottom:"0.8rem" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, background:"#e8f5e9", padding:"0.7rem 1rem", borderBottom:"1px solid #c8e6c9" }}>
        <span style={{ fontSize:22 }}>{icon}</span>
        <div>
          <p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.9rem" }}>{title}</p>
          <p style={{ margin:0, fontSize:"0.75rem", color:"#558b2f", letterSpacing:"0.04em" }}>{type}</p>
        </div>
      </div>
      <div style={{ padding:"0.9rem 1rem", background:"#fafff9" }}>
        <Body style={{ margin:0, fontSize:"0.88rem" }}>{children}</Body>
      </div>
    </div>
  );
}

// ─── CONTINUE BUTTON ─────────────────────────────────────────
function ContinueBtn({ onClick, label = "Próxima Seção →", last = false }) {
  return (
    <div style={{ textAlign:"center", padding:"1.5rem 0 0.5rem" }}>
      <button onClick={onClick} style={{
        background: last ? "#1b5e20" : "#2e7d32",
        color:"#fff", border:"none", borderRadius:50,
        padding:"0.75rem 2rem", fontSize:"0.95rem",
        fontFamily:"'Source Serif 4',serif", cursor:"pointer",
        fontWeight:600, letterSpacing:"0.03em",
        boxShadow:"0 4px 14px rgba(46,125,50,0.3)",
        transition:"transform 0.1s",
      }}
        onMouseEnter={e => e.target.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.target.style.transform = "scale(1)"}
      >{label}</button>
    </div>
  );
}

// ─── QUIZ PANEL ───────────────────────────────────────────────
function QuizPanel({ tries, onSubmit, quiz = QUIZ }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const isLastTry = tries + 1 >= MAX_TRIES;
  const passed = submitted && score / quiz.length >= PASS_RATE;
  const exhausted = submitted && !passed && tries + 1 >= MAX_TRIES;

  const handleSubmit = () => {
    let s = 0;
    quiz.forEach((q, i) => { if (answers[i] === q.ans) s++; });
    setScore(s);
    setSubmitted(true);
    onSubmit(s);
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  return (
    <div style={{ margin:"0" }}>
      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"1.2rem", flexWrap:"wrap", gap:8 }}>
        <div style={{ background:"#e8f5e9", border:"1px solid #a5d6a7", borderRadius:20, padding:"5px 14px", fontSize:"0.8rem", color:"#1b5e20", fontWeight:600 }}>
          {quiz.length} questões · mínimo 70%
        </div>
        <div style={{ fontSize:"0.8rem", color:"#666" }}>Tentativa {tries + 1} de {MAX_TRIES}</div>
      </div>

      {quiz.map((q, qi) => {
        const sel = answers[qi];
        return (
          <div key={qi} style={{ background:"#fafff9", border:"1px solid #c8e6c9", borderRadius:12, padding:"1.1rem", marginBottom:"0.8rem" }}>
            <p style={{ fontSize:"0.78rem", color:"#558b2f", letterSpacing:"0.1em", margin:"0 0 0.5rem", fontFamily:"monospace" }}>QUESTÃO {qi + 1}</p>
            <p style={{ fontFamily:"'Source Serif 4',serif", fontWeight:600, fontSize:"0.92rem", color:"#1a1a1a", margin:"0 0 0.9rem", lineHeight:1.6 }}>{q.q}</p>
            <div style={{ display:"flex", flexDirection:"column", gap:6 }}>
              {q.opts.map((opt, ai) => {
                let bg = "#fff", bd = "1px solid #ddd", cl = "#333";
                if (!submitted) {
                  if (sel === ai) { bg = "#1b5e20"; bd = "1px solid #1b5e20"; cl = "#fff"; }
                } else {
                  const showCorrect = isLastTry;
                  if (showCorrect && ai === q.ans) { bg = "#e8f5e9"; bd = "2px solid #2e7d32"; cl = "#1b5e20"; }
                  else if (sel === ai && ai === q.ans) { bg = "#e8f5e9"; bd = "2px solid #2e7d32"; cl = "#1b5e20"; }
                  else if (sel === ai && ai !== q.ans) { bg = "#ffebee"; bd = "2px solid #c62828"; cl = "#b71c1c"; }
                }
                return (
                  <button key={ai} disabled={submitted} onClick={() => setAnswers(a => ({ ...a, [qi]: ai }))}
                    style={{ display:"flex", alignItems:"center", gap:10, padding:"0.6rem 0.9rem", borderRadius:8, background:bg, border:bd, color:cl, cursor:submitted?"default":"pointer", fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", textAlign:"left", transition:"all 0.15s" }}>
                    <span style={{ width:22, height:22, borderRadius:"50%", background:"rgba(0,0,0,0.08)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:700, flexShrink:0 }}>{String.fromCharCode(65+ai)}</span>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {!submitted ? (
        <div style={{ textAlign:"center", paddingTop:"0.8rem" }}>
          <button onClick={handleSubmit} disabled={Object.keys(answers).length < quiz.length}
            style={{ background:"#2e7d32", color:"#fff", border:"none", borderRadius:50, padding:"0.75rem 2rem", fontSize:"0.95rem", fontFamily:"'Source Serif 4',serif", cursor:Object.keys(answers).length < quiz.length?"not-allowed":"pointer", opacity:Object.keys(answers).length < quiz.length?0.4:1, fontWeight:600 }}>
            Enviar Avaliação →
          </button>
        </div>
      ) : (
        <div style={{ background: passed ? "#e8f5e9" : "#ffebee", border:"1px solid " + (passed?"#2e7d32":"#c62828"), borderRadius:12, padding:"1.1rem", textAlign:"center", marginTop:"0.5rem" }}>
          <p style={{ fontSize:"1.3rem", margin:"0 0 0.3rem" }}>{passed ? "🎉" : "😔"}</p>
          <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color: passed ? "#1b5e20" : "#b71c1c", fontSize:"1rem", margin:"0 0 0.4rem" }}>
            {score} de {quiz.length} acertos ({Math.round(score/quiz.length*100)}%)
          </p>
          <p style={{ fontSize:"0.88rem", color:"#555", margin:0 }}>
            {passed ? "Parabéns! Gerando seu certificado..." : exhausted ? "Tentativas esgotadas. Entre em contato com a coordenação." : `Não atingiu 70%. Você tem mais ${MAX_TRIES - (tries+1)} tentativa(s).`}
          </p>
          {!passed && !exhausted && (
            <button onClick={handleRetry} style={{ marginTop:"0.8rem", background:"#fff", border:"1px solid #c62828", color:"#c62828", borderRadius:20, padding:"6px 18px", cursor:"pointer", fontSize:"0.85rem", fontFamily:"'Source Serif 4',serif" }}>🔁 Tentar Novamente</button>
          )}
        </div>
      )}
    </div>
  );
}

// ─── CERTIFICATE ─────────────────────────────────────────────
function Certificate({ name, date, scores = [0,0,0,0], totals = [5,5,5,5] }) {
  const F = "'Playfair Display', Georgia, serif";
  const S = "'Source Serif 4', Georgia, serif";
  const G = "#1b5e20";
  const GM = "#2e7d32";
  const GL = "#a5d6a7";
  const avgPct = Math.round(scores.reduce((a,b)=>a+b,0) / totals.reduce((a,b)=>a+b,0) * 100);

  const modules = [
    { n:1, title:"Conhecendo o Projeto Asa Verde",        score:scores[0], total:totals[0] },
    { n:2, title:"Educação Ambiental na Prática",         score:scores[1], total:totals[1] },
    { n:3, title:"Gincanas, Campanhas e Coleta Seletiva", score:scores[2], total:totals[2] },
    { n:4, title:"Arborização e Planejamento de Ações",   score:scores[3], total:totals[3] },
  ];

  const coords = [
    { name:"Inakã Silva Barreto",    role:"Coordenador Geral do Projeto no IFPB" },
    { name:"André Luiz da Silva",    role:"Coordenador Técnico do Projeto no IFPB" },
    { name:"Magdalena Duarte Costa", role:"Coordenadora do Curso de Meio Ambiente" },
  ];

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#0d3d1e 0%,#1b5e20 50%,#0d3d1e 100%)", display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem" }}>
      <div style={{ maxWidth:720, width:"100%" }}>

        {/* ── CERTIFICADO ── */}
        <div style={{ background:"#fff", borderRadius:0, position:"relative", overflow:"hidden", boxShadow:"0 30px 80px rgba(0,0,0,0.5)" }}>

          {/* Faixa superior verde */}
          <div style={{ background:G, padding:"1.6rem 2.5rem", textAlign:"center", borderBottom:"6px solid #a5d6a7" }}>
            <Logo forDark={true}/>
            <div style={{ marginTop:"0.8rem" }}>
              <p style={{ fontFamily:F, fontWeight:900, fontSize:"0.75rem", color:"#a5d6a7", letterSpacing:"0.4em", margin:"0 0 0.2rem", textTransform:"uppercase" }}>Certificado de Conclusão</p>
              <p style={{ fontFamily:S, fontSize:"0.8rem", color:"rgba(255,255,255,0.7)", margin:0, letterSpacing:"0.15em" }}>FORMAÇÃO DE MULTIPLICADORES AMBIENTAIS</p>
            </div>
          </div>

          {/* Corpo */}
          <div style={{ padding:"2rem 2.8rem 1.5rem", textAlign:"center" }}>

            {/* Texto principal */}
            <p style={{ fontFamily:S, fontSize:"0.9rem", color:"#666", margin:"0 0 0.5rem" }}>Certificamos que</p>
            <h1 style={{ fontFamily:F, fontStyle:"italic", fontWeight:700, color:G, fontSize:"2.4rem", margin:"0 0 0.5rem", lineHeight:1.2, borderBottom:"2px solid "+GL, paddingBottom:"0.8rem" }}>{name}</h1>
            <p style={{ fontFamily:S, fontSize:"0.88rem", color:"#555", margin:"0.7rem 0 0.3rem" }}>concluiu com êxito a</p>
            <h2 style={{ fontFamily:F, fontWeight:700, color:G, fontSize:"1.35rem", margin:"0 0 1.2rem", lineHeight:1.3 }}>
              Formação de Multiplicadores Ambientais<br/>
              <span style={{ fontWeight:400, fontStyle:"italic", fontSize:"1.05rem", color:GM }}>Projeto Asa Verde — IFPB Campus Santa Rita</span>
            </h2>

            {/* Grade dos 4 módulos com nota */}
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, margin:"0 0 1.4rem" }}>
              {modules.map(m=>(
                <div key={m.n} style={{ display:"flex", alignItems:"center", gap:10, background:"#f1f8e9", border:"1px solid #c8e6c9", borderRadius:8, padding:"0.55rem 0.8rem", textAlign:"left" }}>
                  <div style={{ width:26, height:26, borderRadius:"50%", background:G, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    <span style={{ color:"#fff", fontSize:"0.72rem", fontWeight:700, fontFamily:F }}>✓</span>
                  </div>
                  <div style={{ flex:1 }}>
                    <p style={{ fontFamily:F, fontWeight:700, color:G, fontSize:"0.72rem", margin:0, letterSpacing:"0.04em" }}>MÓDULO {m.n}</p>
                    <p style={{ fontFamily:S, fontSize:"0.76rem", color:"#333", margin:0, lineHeight:1.3 }}>{m.title}</p>
                  </div>
                  <div style={{ textAlign:"right", flexShrink:0 }}>
                    <p style={{ fontFamily:F, fontWeight:700, color:GM, fontSize:"0.9rem", margin:0 }}>{Math.round(m.score/m.total*100)}%</p>
                    <p style={{ fontFamily:S, fontSize:"0.65rem", color:"#888", margin:0 }}>{m.score}/{m.total}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carga horária e data */}
            <div style={{ display:"flex", justifyContent:"center", gap:"2rem", margin:"0 0 1.4rem" }}>
              <div style={{ textAlign:"center" }}>
                <p style={{ fontFamily:F, fontWeight:700, color:GM, fontSize:"1.5rem", margin:0 }}>40h</p>
                <p style={{ fontFamily:S, fontSize:"0.72rem", color:"#888", margin:0, letterSpacing:"0.06em" }}>CARGA HORÁRIA</p>
              </div>
              <div style={{ width:1, background:"#e0e0e0" }}/>
              <div style={{ textAlign:"center" }}>
                <p style={{ fontFamily:F, fontWeight:700, color:GM, fontSize:"1.5rem", margin:0 }}>4</p>
                <p style={{ fontFamily:S, fontSize:"0.72rem", color:"#888", margin:0, letterSpacing:"0.06em" }}>MÓDULOS</p>
              </div>
              <div style={{ width:1, background:"#e0e0e0" }}/>
              <div style={{ textAlign:"center" }}>
                <p style={{ fontFamily:F, fontWeight:700, color:GM, fontSize:"1.5rem", margin:0 }}>{avgPct}%</p>
                <p style={{ fontFamily:S, fontSize:"0.72rem", color:"#888", margin:0, letterSpacing:"0.06em" }}>APROVEITAMENTO</p>
              </div>
            </div>

            {/* Assinaturas */}
            <div style={{ borderTop:"1px solid #e0e0e0", paddingTop:"1.2rem", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:16 }}>
              {coords.map(c=>(
                <div key={c.name} style={{ textAlign:"center" }}>
                  <div style={{ borderBottom:"1.5px solid #333", marginBottom:"0.4rem", height:36 }}/>
                  <p style={{ fontFamily:F, fontWeight:700, color:"#1a1a1a", fontSize:"0.78rem", margin:"0 0 2px", lineHeight:1.3 }}>{c.name}</p>
                  <p style={{ fontFamily:S, fontSize:"0.7rem", color:"#666", margin:0, lineHeight:1.4 }}>{c.role}</p>
                </div>
              ))}
            </div>

            {/* Rodapé */}
            <div style={{ marginTop:"1.1rem", borderTop:"1px solid #e8f5e9", paddingTop:"0.7rem" }}>
              <p style={{ fontFamily:S, fontSize:"0.72rem", color:"#aaa", margin:"0 0 2px" }}>Emitido em {date} · Santa Rita, Paraíba</p>
              <p style={{ fontFamily:S, fontSize:"0.7rem", color:"#bbb", margin:0, fontStyle:"italic" }}>MPPB · Prefeitura Municipal de Santa Rita · IFPB Campus Santa Rita · @projetoasaverde</p>
            </div>
          </div>

          {/* Faixa inferior decorativa */}
          <div style={{ background:G, height:8 }}/>
        </div>

        {/* Botão imprimir */}
        <div style={{ textAlign:"center", marginTop:"1.2rem" }}>
          <button onClick={()=>window.print()} style={{ background:"rgba(255,255,255,0.15)", border:"1px solid rgba(255,255,255,0.4)", color:"#fff", borderRadius:50, padding:"10px 24px", cursor:"pointer", fontFamily:S, fontSize:"0.9rem" }}>
            🖨️ Imprimir / Salvar PDF
          </button>
        </div>

      </div>
    </div>
  );
}

// ─── LOGIN ────────────────────────────────────────────────────
function Login({ name, setName, code, setCode, err, onLogin }) {
  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#1b5e20 0%,#33691e 60%,#1b4a1b 100%)", display:"flex", alignItems:"center", justifyContent:"center", padding:"1.5rem", position:"relative", overflow:"hidden" }}>
      {/* Decorative leaves */}
      {["12%,8%","88%,15%","5%,75%","92%,70%"].map((pos,i)=>(
        <div key={i} style={{ position:"absolute", left:pos.split(",")[0], top:pos.split(",")[1], fontSize:[60,45,70,50][i], opacity:0.08, transform:`rotate(${[15,-20,30,-10][i]}deg)`, pointerEvents:"none" }}>🌿</div>
      ))}
      <div style={{ background:"rgba(255,255,255,0.96)", borderRadius:20, padding:"2.5rem 2rem", maxWidth:440, width:"100%", boxShadow:"0 30px 80px rgba(0,0,0,0.4)", backdropFilter:"blur(10px)" }}>
        <div style={{ textAlign:"center", marginBottom:"1.8rem" }}>
          <Logo />
          <p style={{ fontFamily:"'Source Serif 4',serif", color:"#558b2f", fontSize:"0.85rem", margin:"1rem 0 0", fontStyle:"italic" }}>Formação de Multiplicadores Ambientais</p>
        </div>
        <div style={{ background:"#e8f5e9", borderRadius:12, padding:"0.8rem 1rem", marginBottom:"1.4rem", textAlign:"center" }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", margin:0, fontSize:"0.95rem" }}>Módulo 1 · Conhecendo o Projeto</p>
        </div>
        <label style={{ display:"block", fontFamily:"'Source Serif 4',serif", fontSize:"0.82rem", color:"#555", marginBottom:5 }}>Nome completo</label>
        <input value={name} onChange={e=>setName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&onLogin()} placeholder="Digite seu nome..." style={{ width:"100%", padding:"0.7rem 0.9rem", border:"1px solid #c8e6c9", borderRadius:10, fontFamily:"'Source Serif 4',serif", fontSize:"0.92rem", outline:"none", boxSizing:"border-box", marginBottom:"0.9rem", background:"#fafff9", color:"#1a1a1a" }}/>
        <label style={{ display:"block", fontFamily:"'Source Serif 4',serif", fontSize:"0.82rem", color:"#555", marginBottom:5 }}>Código de acesso</label>
        <input value={code} onChange={e=>setCode(e.target.value)} onKeyDown={e=>e.key==="Enter"&&onLogin()} placeholder="Código fornecido pela coordenação..." type="password" style={{ width:"100%", padding:"0.7rem 0.9rem", border:"1px solid #c8e6c9", borderRadius:10, fontFamily:"'Source Serif 4',serif", fontSize:"0.92rem", outline:"none", boxSizing:"border-box", marginBottom:err?"0.5rem":"1.1rem", background:"#fafff9", color:"#1a1a1a" }}/>
        {err && <p style={{ color:"#c62828", fontSize:"0.82rem", marginBottom:"0.9rem", fontFamily:"'Source Serif 4',serif" }}>⚠ {err}</p>}
        <button onClick={onLogin} style={{ width:"100%", padding:"0.8rem", background:"linear-gradient(135deg,#2e7d32,#1b5e20)", border:"none", borderRadius:50, color:"#fff", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"1rem", cursor:"pointer", letterSpacing:"0.03em" }}>
          Entrar no Curso →
        </button>
        <p style={{ textAlign:"center", fontFamily:"'Source Serif 4',serif", fontSize:"0.78rem", color:"#999", margin:"1rem 0 0", fontStyle:"italic" }}>4 módulos · Avaliação por módulo · Certificado final</p>
      </div>
    </div>
  );
}

// ─── HOME SCREEN (seleção de módulos) ───────────────────────
function HomeScreen({ studentName, mod1Score, mod2Passed, mod2Score, mod3Passed, mod3Score, mod4Passed, mod4Score, onGoMod1, onGoMod2, onGoMod3, onGoMod4, certDate }) {
  const modules = [
    { n:1, title:"Conhecendo o Projeto Asa Verde", done:true, score:mod1Score, total:QUIZ.length, icon:"📘" },
    { n:2, title:"Educação Ambiental na Prática", done:mod2Passed, score:mod2Score, total:QUIZ2.length, icon:"🔨", available:true },
    { n:3, title:"Gincanas, Campanhas e Coleta Seletiva", done:mod3Passed, score:mod3Score, total:QUIZ3.length, icon:"🏆", available:mod2Passed },
    { n:4, title:"Arborização e Planejamento de Ações", done:mod4Passed, score:mod4Score, total:QUIZ4.length, icon:"🌳", available:mod3Passed },
  ];
  return (
    <div style={{ minHeight:"100vh", background:"#f9fbe7", fontFamily:"'Source Serif 4',Georgia,serif" }}>
      <div style={{ background:"linear-gradient(135deg,#1b5e20,#2e7d32)", padding:"1rem 1.5rem", boxShadow:"0 2px 12px rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth:780, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}><Logo forDark={true}/><div><p style={{ margin:0, color:"#a5d6a7", fontSize:"0.7rem", letterSpacing:"0.15em", fontFamily:"monospace" }}>FORMAÇÃO</p><p style={{ margin:0, color:"#fff", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem" }}>Multiplicadores Ambientais</p></div></div>
          <p style={{ margin:0, color:"#c8e6c9", fontSize:"0.85rem" }}>Olá, {studentName.split(" ")[0]} 👋</p>
        </div>
      </div>
      <div style={{ maxWidth:780, margin:"0 auto", padding:"2rem 1.2rem" }}>
        <div style={{ textAlign:"center", marginBottom:"2rem" }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif", color:"#1b5e20", fontSize:"1.4rem", margin:"0 0 0.5rem" }}>Seus Módulos</h2>
          <p style={{ fontFamily:"'Source Serif 4',serif", color:"#666", fontSize:"0.9rem", margin:0 }}>Conclua todos os 4 módulos para receber o certificado final</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          {modules.map(m => (
            <div key={m.n} style={{ background:"#fff", border:"2px solid " + (m.done?"#2e7d32":m.available?"#a5d6a7":"#e0e0e0"), borderRadius:14, padding:"1.1rem 1.4rem", display:"flex", alignItems:"center", gap:14, opacity:m.available||m.done?1:0.55 }}>
              <div style={{ width:48, height:48, borderRadius:"50%", background:m.done?"#1b5e20":m.available?"#e8f5e9":"#f5f5f5", display:"flex", alignItems:"center", justifyContent:"center", fontSize:22, flexShrink:0 }}>{m.done?"✅":m.icon}</div>
              <div style={{ flex:1, minWidth:0 }}>
                <p style={{ margin:"0 0 2px", fontFamily:"'Playfair Display',serif", fontWeight:700, color:m.done?"#1b5e20":m.available?"#2e7d32":"#999", fontSize:"0.95rem" }}>Módulo {m.n}</p>
                <p style={{ margin:0, fontSize:"0.85rem", color:"#555" }}>{m.title}</p>
                {m.done && <p style={{ margin:"4px 0 0", fontSize:"0.78rem", color:"#2e7d32" }}>✓ Concluído · {m.score}/{m.total} acertos</p>}
                {!m.done && !m.available && <p style={{ margin:"4px 0 0", fontSize:"0.78rem", color:"#aaa" }}>🔒 Em breve</p>}
              </div>
              {(m.done || m.available) && (
                <button onClick={m.n===1?onGoMod1:m.n===2?onGoMod2:m.n===3?onGoMod3:onGoMod4}
                  style={{ background:m.done?"#f1f8e9":"#2e7d32", color:m.done?"#2e7d32":"#fff", border:"2px solid #2e7d32", borderRadius:50, padding:"0.5rem 1.2rem", cursor:"pointer", fontFamily:"'Source Serif 4',serif", fontWeight:600, fontSize:"0.85rem", flexShrink:0 }}>
                  {m.done?"Revisar":"Continuar →"}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap";
    document.head.appendChild(link);
  }, []);

  const [screen, setScreen] = useState("login"); // login|home|course|mod2|mod3|mod4|certificate
  const [inputName, setInputName] = useState("");
  const [inputCode, setInputCode] = useState("");
  const [loginErr, setLoginErr] = useState("");
  const [studentName, setStudentName] = useState("");
  const [certDate] = useState(new Date().toLocaleDateString("pt-BR",{day:"2-digit",month:"long",year:"numeric"}));
  // Módulo 1
  const [visible, setVisible] = useState(0);
  const [quizTries, setQuizTries] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [mod1Passed, setMod1Passed] = useState(false);
  const TOTAL = 6;
  // Módulo 2
  const [m2visible, setM2visible] = useState(0);
  const [m2Tries, setM2Tries] = useState(0);
  const [m2Score, setM2Score] = useState(0);
  const [mod2Passed, setMod2Passed] = useState(false);
  const TOTAL2 = 5;
  // Módulo 3
  const [m3visible, setM3visible] = useState(0);
  const [m3Tries, setM3Tries] = useState(0);
  const [m3Score, setM3Score] = useState(0);
  const [mod3Passed, setMod3Passed] = useState(false);
  const TOTAL3 = 5;
  // Módulo 4
  const [m4visible, setM4visible] = useState(0);
  const [m4Tries, setM4Tries] = useState(0);
  const [m4Score, setM4Score] = useState(0);
  const [mod4Passed, setMod4Passed] = useState(false);
  const TOTAL4 = 5;

  const save1 = (v,t,passed,score) => storageSave(storageKey(studentName)+"_m1", JSON.stringify({visible:v,tries:t,passed,score}));
  const save2 = (v,t,passed,score) => storageSave(storageKey(studentName)+"_m2", JSON.stringify({visible:v,tries:t,passed,score}));
  const save3 = (v,t,passed,score) => storageSave(storageKey(studentName)+"_m3", JSON.stringify({visible:v,tries:t,passed,score}));
  const save4 = (v,t,passed,score) => storageSave(storageKey(studentName)+"_m4", JSON.stringify({visible:v,tries:t,passed,score}));

  const handleLogin = () => {
    if (!inputName.trim()) { setLoginErr("Digite seu nome completo."); return; }
    if (inputCode.trim().toUpperCase() !== ACCESS_CODE.toUpperCase()) { setLoginErr("Código de acesso incorreto."); return; }
    const nm = inputName.trim();
    setStudentName(nm);
    setScreen("course");
    const load = (suffix) => { try { const raw = storageLoad(storageKey(nm)+suffix); return raw ? JSON.parse(raw) : null; } catch(_) { return null; } };
    const s1 = load("_m1"), s2 = load("_m2"), s3 = load("_m3"), s4 = load("_m4");
    if (s1) { setVisible(Math.min(s1.visible||0,TOTAL)); setQuizTries(s1.tries||0); setQuizScore(s1.score||0); if(s1.passed){setMod1Passed(true);setScreen("home");} }
    if (s2) { setM2visible(Math.min(s2.visible||0,TOTAL2)); setM2Tries(s2.tries||0); setM2Score(s2.score||0); if(s2.passed){setMod2Passed(true);} }
    if (s3) { setM3visible(Math.min(s3.visible||0,TOTAL3)); setM3Tries(s3.tries||0); setM3Score(s3.score||0); if(s3.passed){setMod3Passed(true);} }
    if (s4) { setM4visible(Math.min(s4.visible||0,TOTAL4)); setM4Tries(s4.tries||0); setM4Score(s4.score||0); if(s4.passed){setMod4Passed(true);} }
  };

  const advance = (nextVisible) => {
    setVisible(nextVisible); save1(nextVisible,quizTries,false,0);
    setTimeout(()=>{ const el=document.getElementById(`sec-${nextVisible}`); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); },150);
  };
  const advance2 = (nv) => {
    setM2visible(nv); save2(nv,m2Tries,false,0);
    setTimeout(()=>{ const el=document.getElementById(`m2sec-${nv}`); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); },150);
  };
  const advance3 = (nv) => {
    setM3visible(nv); save3(nv,m3Tries,false,0);
    setTimeout(()=>{ const el=document.getElementById(`m3sec-${nv}`); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); },150);
  };
  const advance4 = (nv) => {
    setM4visible(nv); save4(nv,m4Tries,false,0);
    setTimeout(()=>{ const el=document.getElementById(`m4sec-${nv}`); if(el) el.scrollIntoView({behavior:"smooth",block:"start"}); },150);
  };

  const handleQuizResult = (score) => {
    const passed = score/QUIZ.length >= PASS_RATE;
    const nt = quizTries+1;
    setQuizTries(nt); setQuizScore(score);
    save1(TOTAL,nt,passed,score);
    if(passed){ setMod1Passed(true); setTimeout(()=>setScreen("home"),1800); }
  };
  const handleQuiz2Result = (score) => {
    const passed = score/QUIZ2.length >= PASS_RATE;
    const nt = m2Tries+1;
    setM2Tries(nt); setM2Score(score);
    save2(TOTAL2,nt,passed,score);
    if(passed){ setMod2Passed(true); setTimeout(()=>setScreen("home"),1800); }
  };
  const handleQuiz3Result = (score) => {
    const passed = score/QUIZ3.length >= PASS_RATE;
    const nt = m3Tries+1;
    setM3Tries(nt); setM3Score(score);
    save3(TOTAL3,nt,passed,score);
    if(passed){ setMod3Passed(true); setTimeout(()=>setScreen("home"),1800); }
  };
  const handleQuiz4Result = (score) => {
    const passed = score/QUIZ4.length >= PASS_RATE;
    const nt = m4Tries+1;
    setM4Tries(nt); setM4Score(score);
    save4(TOTAL4,nt,passed,score);
    if(passed){ setMod4Passed(true); setTimeout(()=>setScreen("certificate"),1800); }
  };

  if (screen==="login") return <Login name={inputName} setName={setInputName} code={inputCode} setCode={setInputCode} err={loginErr} onLogin={handleLogin}/>;
  if (screen==="home") return <HomeScreen studentName={studentName} mod1Score={quizScore} mod2Passed={mod2Passed} mod2Score={m2Score} mod3Passed={mod3Passed} mod3Score={m3Score} mod4Passed={mod4Passed} mod4Score={m4Score} onGoMod1={()=>setScreen("course")} onGoMod2={()=>setScreen("mod2")} onGoMod3={()=>setScreen("mod3")} onGoMod4={()=>setScreen("mod4")} certDate={certDate}/>;
  if (screen==="certificate") return <Certificate name={studentName} date={certDate} scores={[quizScore, m2Score, m3Score, m4Score]} totals={[QUIZ.length, QUIZ2.length, QUIZ3.length, QUIZ4.length]}/>;

  if (screen==="mod2") {
    const pct2 = Math.round((m2visible/TOTAL2)*100);
    return (
      <div style={{ minHeight:"100vh", background:"#f9fbe7", fontFamily:"'Source Serif 4',Georgia,serif" }}>
        <div style={{ background:"linear-gradient(135deg,#1b5e20,#2e7d32)", padding:"1rem 1.5rem", position:"sticky", top:0, zIndex:100, boxShadow:"0 2px 12px rgba(0,0,0,0.2)" }}>
          <div style={{ maxWidth:780, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <button onClick={()=>setScreen("home")} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:8, padding:"4px 10px", cursor:"pointer", fontSize:"1rem" }}>←</button>
              <Logo forDark={true}/>
              <div><p style={{ margin:0, color:"#a5d6a7", fontSize:"0.7rem", letterSpacing:"0.15em", fontFamily:"monospace" }}>MÓDULO 2</p><p style={{ margin:0, color:"#fff", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem" }}>Educação Ambiental na Prática</p></div>
            </div>
            <div style={{ textAlign:"right" }}>
              <p style={{ margin:0, color:"#c8e6c9", fontSize:"0.75rem" }}>Olá, {studentName.split(" ")[0]}</p>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:4 }}>
                <div style={{ width:120, height:5, background:"rgba(255,255,255,0.2)", borderRadius:10, overflow:"hidden" }}><div style={{ width:`${pct2}%`, height:"100%", background:"#a5d6a7", borderRadius:10, transition:"width 0.5s" }}/></div>
                <span style={{ color:"#a5d6a7", fontSize:"0.72rem" }}>{pct2}%</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth:780, margin:"0 auto", padding:"2rem 1.2rem 4rem" }}>

          {/* M2 SEC 0 — Apresentação */}
          <SectionBlock id="m2sec-0" visible={m2visible>=0}>
            <div style={{ textAlign:"center", padding:"1.5rem 0 2rem" }}>
              <Logo/>
              <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:"#558b2f", fontSize:"1.05rem", margin:"1rem 0 0.3rem" }}>Módulo 2 — Educação Ambiental na Prática</p>
            </div>
            <SectionTitle icon="🎯">Apresentação do Módulo</SectionTitle>
            <SubTitle>O que você vai aprender aqui?</SubTitle>
            <Body>Agora que você conhece o Projeto Asa Verde — sua origem, sua estrutura e o seu papel como multiplicador ambiental —, chegou a hora de aprender <strong style={{color:"#2e7d32"}}>como</strong> fazer o trabalho na prática. Este módulo é o coração da sua formação como educador ambiental.</Body>
            <Body>Você vai aprender a planejar, executar e avaliar os dois principais formatos de ação educativa do projeto: a <strong style={{color:"#2e7d32"}}>oficina</strong> e a <strong style={{color:"#2e7d32"}}>palestra</strong>. Mais do que conhecer os formatos, você vai entender a lógica pedagógica por trás de cada um — porque saber <em>o que</em> fazer não basta: é preciso saber <em>por que</em> cada escolha importa.</Body>
            <BlueBox title="O que você vai aprender neste módulo:">
              {["Como funciona a educação ambiental crítica — e por que ela é diferente de uma aula comum.","O que é uma oficina e como planejar uma do zero, passo a passo.","O que é uma palestra e como torná-la envolvente e eficaz.","Como adaptar os formatos à faixa etária e ao contexto de cada escola.","Erros comuns que comprometem a qualidade das ações — e como evitá-los.","Como registrar o que aconteceu e medir o impacto da sua ação."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
            </BlueBox>
            <ContinueBtn onClick={()=>advance2(1)} label="Começar — Educação Ambiental Crítica →"/>
          </SectionBlock>

          {/* M2 SEC 1 — EA Crítica */}
          <SectionBlock id="m2sec-1" visible={m2visible>=1}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="🌱">Seção 1 — Educação Ambiental Crítica: Uma Nova Forma de Ensinar</SectionTitle>
            <SubTitle>O que torna uma ação educativa realmente eficaz?</SubTitle>
            <Body>Antes de falar em oficinas e palestras, é preciso entender o que diferencia uma ação de educação ambiental que <strong style={{color:"#2e7d32"}}>muda comportamentos</strong> de uma que as pessoas esquecem na semana seguinte.</Body>
            <Body>A educação ambiental que o Projeto Asa Verde pratica não é aquela que apenas informa — que diz 'recicle o lixo' ou 'economize água' como se fossem regras a seguir. Essa abordagem, chamada de <strong>educação ambiental tradicional</strong>, tem impacto limitado porque não conecta o conhecimento com a realidade vivida pelos alunos.</Body>
            <Body>O projeto adota uma perspectiva diferente: a <strong style={{color:"#2e7d32"}}>educação ambiental crítica</strong>. Nela, o objetivo não é apenas transmitir informações — é desenvolver nos alunos a capacidade de <strong>ler o próprio território</strong>, compreender por que os problemas ambientais existem, identificar sua responsabilidade e agir de forma concreta.</Body>
            <Quote>Educar ambientalmente não é ensinar sobre o meio ambiente. É ensinar a viver no meio ambiente — com consciência, responsabilidade e protagonismo.</Quote>
            <SubTitle>Os três pilares da educação ambiental crítica</SubTitle>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, margin:"0.5rem 0 1rem" }}>
              {[["🔍","Contexto","A ação parte da realidade dos alunos — do rio, do bairro, da escola deles. Não de exemplos genéricos."],["🤝","Participação","O aluno não é espectador — é sujeito ativo. Ele faz, experimenta, decide, constrói junto."],["🎯","Ação Concreta","A ação gera um resultado real — um produto, uma mudança, um compromisso assumido pelo aluno."]].map(([ic,t,d])=>(
                <div key={t} style={{ background:"#1b5e20", borderRadius:12, padding:"1rem", textAlign:"center" }}>
                  <div style={{ fontSize:24, marginBottom:6 }}>{ic}</div>
                  <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"0.85rem", margin:"0 0 6px" }}>{t}</p>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.78rem", color:"#c8e6c9", margin:0, lineHeight:1.6 }}>{d}</p>
                </div>
              ))}
            </div>
            <GreenBox title="Regra de ouro da educação ambiental crítica:">
              <Body style={{margin:0}}><strong style={{color:"#1b5e20"}}>Toda ação precisa responder à pergunta do aluno: 'E daí? O que isso tem a ver comigo?'</strong> Se a sua ação não responde essa pergunta de forma clara, ela não está conectada com a realidade dos alunos — e o aprendizado vai ser superficial.</Body>
            </GreenBox>
            <ContinueBtn onClick={()=>advance2(2)} label="Aprender sobre Oficinas →"/>
          </SectionBlock>

          {/* M2 SEC 2 — Oficina */}
          <SectionBlock id="m2sec-2" visible={m2visible>=2}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="🔨">Seção 2 — A Oficina: Aprender Fazendo</SectionTitle>
            <SubTitle>O que é uma oficina?</SubTitle>
            <Body>A oficina é o formato de educação ambiental mais poderoso disponível para você. Enquanto uma palestra informa e sensibiliza, a oficina <strong style={{color:"#2e7d32"}}>transforma</strong> — porque coloca o aluno em contato direto com a experiência.</Body>
            <Quote>Diga-me e eu esqueço. Ensine-me e eu me lembro. Envolva-me e eu aprendo. — Benjamin Franklin</Quote>
            <SubTitle>Como planejar uma oficina — passo a passo</SubTitle>
            <Body>Uma oficina sem planejamento vira improviso. Use sempre este roteiro de 6 etapas:</Body>
            <div style={{ display:"flex", flexDirection:"column", gap:6, margin:"0.5rem 0 1rem" }}>
              {[["01","Objetivo","Defina em uma frase o que o aluno vai ser capaz de fazer ou compreender ao final. Objetivo vago = oficina sem direção."],["02","Público","Quantos alunos? Qual faixa etária? Uma oficina para o 3º ano tem linguagem e materiais diferentes de uma para o 8º ano."],["03","Tempo","Em escolas, a realidade costuma ser entre 30 e 50 minutos. Planeje com margem — sempre haverá imprevistos."],["04","Materiais","Liste tudo com antecedência. Não existe 'vou improvisar no dia'. Materiais faltando travam a oficina."],["05","Roteiro","Divida em 3 momentos: Abertura (20%), Desenvolvimento (60%) e Encerramento (20%)."],["06","Avaliação","Como você vai saber se funcionou? Foto, contagem de participantes e uma frase sobre o que os alunos disseram."]].map(([n,t,d])=>(
                <div key={n} style={{ display:"flex", gap:10, alignItems:"flex-start", border:"1px solid #c8e6c9", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ background:"#1b5e20", minWidth:52, padding:"0.8rem 0", textAlign:"center", flexShrink:0 }}>
                    <p style={{ margin:0, color:"#fff", fontWeight:700, fontFamily:"'Playfair Display',serif", fontSize:"1rem" }}>{n}</p>
                    <p style={{ margin:0, color:"#a5d6a7", fontSize:"0.68rem", letterSpacing:"0.05em" }}>{t.toUpperCase()}</p>
                  </div>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333", lineHeight:1.6, padding:"0.8rem 0.8rem 0.8rem 0", margin:0 }}>{d}</p>
                </div>
              ))}
            </div>
            <SubTitle>A estrutura dos 3 momentos</SubTitle>
            <GreenBox title="🟢 Abertura (20%) — engajar e contextualizar">
              <Body style={{margin:"0 0 0.5rem"}}>Comece com uma pergunta provocadora, um objeto inesperado ou uma situação cotidiana. <strong style={{color:"#1b5e20"}}>Nunca comece explicando — comece perguntando.</strong> Exemplo: 'Alguém sabe para onde vai o lixo depois que o caminhão passa aqui?'</Body>
            </GreenBox>
            <BlueBox title="🔵 Desenvolvimento (60%) — onde o aprendizado acontece">
              <Body style={{margin:"0 0 0.5rem"}}>Esta é a parte central. É aqui que os alunos <strong>fazem</strong>. Organize claramente, divida em grupos se necessário, distribua os materiais e circule pelo espaço. Faça perguntas que ajudem a pensar — mas não dê as respostas. Se algo não funcionar: não entre em pânico. Adapte e siga em frente.</Body>
            </BlueBox>
            <GreenBox title="🟢 Encerramento (20%) — consolidar e gerar compromisso">
              <Body style={{margin:0}}>Nunca termine abruptamente. Reserve tempo para reflexão: 'O que aprendemos hoje?', 'O que você vai fazer diferente depois disso?' Gere um compromisso concreto — algo que o aluno vai fazer em casa ou na escola.</Body>
            </GreenBox>
            <SubTitle>Temas prioritários para oficinas</SubTitle>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, margin:"0.3rem 0 1rem" }}>
              {[["♻️","Resíduos Sólidos e Coleta Seletiva","Separação correta, impacto do lixo, visita à COREMM, construção de lixeiras, gincana de coleta."],["💧","Recursos Hídricos","Ciclo da água, uso consciente, contaminação, fontes de água no município."],["🌳","Arborização e Biodiversidade","Plantio de mudas, espécies nativas, importância das árvores para o microclima e a fauna local."],["🌍","Consumo Consciente","Pegada ecológica, reutilização criativa de materiais, produtos descartáveis vs. duráveis."]].map(([ic,t,d])=>(
                <div key={t} style={{ border:"1px solid #c8e6c9", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ background:"#e8f5e9", padding:"0.5rem 0.8rem", borderBottom:"1px solid #c8e6c9" }}><p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.88rem" }}>{ic} {t}</p></div>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.82rem", color:"#333", lineHeight:1.6, padding:"0.6rem 0.8rem", margin:0 }}>{d}</p>
                </div>
              ))}
            </div>
            <OrangeBox title="Erros mais comuns em oficinas — e como evitá-los">
              {["Oficina sem objetivo claro — se você não sabe o que quer que o aluno aprenda, o aluno também não vai saber.","Material insuficiente ou inadequado — confirme quantidade e qualidade antes do dia.","Instrução confusa ou muito longa — se precisar de mais de 3 minutos para explicar a atividade, simplifique.","Não circular durante a atividade — ficar parado na frente não é conduzir uma oficina.","Terminar sem encerramento — sem reflexão, o aprendizado fica pela metade.","Não registrar — foto, número de participantes e uma anotação rápida. Sem isso, a ação não existe para o projeto."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
            </OrangeBox>
            <ContinueBtn onClick={()=>advance2(3)} label="Aprender sobre Palestras →"/>
          </SectionBlock>

          {/* M2 SEC 3 — Palestra */}
          <SectionBlock id="m2sec-3" visible={m2visible>=3}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="🎤">Seção 3 — A Palestra: Sensibilizar e Provocar</SectionTitle>
            <SubTitle>O que é uma palestra — e o que ela NÃO é</SubTitle>
            <Body>A palestra de educação ambiental é um espaço de <strong style={{color:"#2e7d32"}}>sensibilização, reflexão e diálogo</strong>. O objetivo principal não é ensinar fatos ou definições — é mover o aluno emocionalmente e intelectualmente, provocar questionamentos e criar abertura para a mudança de comportamento.</Body>
            <Body>A diferença entre uma boa palestra e uma aula chata está em três palavras: <strong style={{color:"#2e7d32"}}>conversa</strong>, <strong style={{color:"#2e7d32"}}>pergunta</strong> e <strong style={{color:"#2e7d32"}}>surpresa</strong>. Uma boa palestra é mais próxima de um diálogo do que de um monólogo.</Body>
            <Quote>A educação ambiental começa quando o conhecimento encontra sentido na vida das pessoas.</Quote>
            <SubTitle>Como estruturar uma boa palestra — 5 etapas</SubTitle>
            <div style={{ display:"flex", flexDirection:"column", gap:6, margin:"0.5rem 0 1rem" }}>
              {[["🎣","Gancho (2-3 min)","Comece com algo que chame a atenção — uma pergunta surpreendente, um dado impactante ou uma história real. Não comece se apresentando. Exemplo: 'Quantos kg de lixo você acha que produziu nos últimos 7 dias?'"],["🌊","Contexto (5-8 min)","Apresente o problema conectado com a realidade local. Use dados reais de Santa Rita — o Rio Paraíba, o aterro, o bairro deles. Quanto mais próximo da realidade vivida, maior o impacto."],["💡","Informação Central (8-12 min)","Apresente o conteúdo principal em 2 ou 3 pontos. Use imagens, objetos reais ou vídeos curtos. Faça perguntas durante — não deixe a turma como plateia passiva."],["🤝","Conexão e Reflexão (3-5 min)","'O que cada um de nós pode fazer?' é a pergunta central desta fase. Não deixe a palestra morrer com o problema — mostre caminhos."],["✅","Fechamento (2-3 min)","Sintetize os 3 pontos mais importantes em frases simples. Proponha um desafio concreto e agradeça genuinamente."]].map(([ic,t,d])=>(
                <div key={t} style={{ display:"flex", gap:10, border:"1px solid #c8e6c9", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ background:"#1b5e20", minWidth:52, padding:"0.8rem 0", textAlign:"center", flexShrink:0 }}>
                    <p style={{ margin:0, fontSize:20 }}>{ic}</p>
                  </div>
                  <div style={{ padding:"0.7rem 0.8rem 0.7rem 0" }}>
                    <p style={{ margin:"0 0 4px", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.88rem" }}>{t}</p>
                    <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.85rem", color:"#333", lineHeight:1.6, margin:0 }}>{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <SubTitle>A linguagem que conecta</SubTitle>
            {[["Fale a língua deles","Evite jargões técnicos. 'Resíduos sólidos urbanos' pode ser 'lixo produzido nas cidades'. Simplificar é respeitar."],["Use exemplos locais","'O Rio Paraíba' tem mais impacto que 'os rios brasileiros'. 'O aterro de Santa Rita' é mais próximo que 'os aterros sanitários'."],["Faça perguntas abertas","'O que vocês acham?' e 'Alguém sabe por quê?' ativam o pensamento e criam diálogo."],["Conte histórias","Um caso real tem mais impacto que uma estatística. Humanize os dados."],["Valide o que eles já sabem","Quando um aluno responde corretamente, reconheça. Isso cria engajamento."]].map(([t,d])=><Bullet key={t}><strong style={{color:"#2e7d32"}}>{t}:</strong> {d}</Bullet>)}
            <ContinueBtn onClick={()=>advance2(4)} label="Adaptação por Faixa Etária →"/>
          </SectionBlock>

          {/* M2 SEC 4 — Faixa Etária + Registro */}
          <SectionBlock id="m2sec-4" visible={m2visible>=4}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="🎓">Seção 4 — Adaptação por Faixa Etária</SectionTitle>
            <SubTitle>Por que a faixa etária importa tanto?</SubTitle>
            <Body>Uma das falhas mais comuns entre educadores iniciantes é usar o mesmo formato, a mesma linguagem e os mesmos exemplos para todas as turmas. Conhecer as características de cada faixa etária é <strong style={{color:"#2e7d32"}}>condição básica para ser um bom educador.</strong></Body>
            <div style={{ overflowX:"auto", margin:"0.5rem 0 1rem" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontFamily:"'Source Serif 4',serif", fontSize:"0.82rem" }}>
                <thead>
                  <tr>
                    {["Aspecto","1º ao 3º ano (6–9 anos)","4º ao 6º ano (9–12 anos)","7º ao 9º ano (12–15 anos)"].map((h,i)=>(
                      <th key={i} style={{ background:"#1b5e20", color:"#fff", padding:"0.6rem 0.7rem", textAlign:"center", fontFamily:"'Playfair Display',serif", fontSize:"0.82rem", whiteSpace:"pre-line", border:"1px solid #0d3d1e" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[["Atenção","10 a 15 min por atividade","20 a 25 min por atividade","30 a 40 min por atividade"],["Linguagem","Simples, concreta, visual. Sem abstrações.","Clara e direta. Gosta de curiosidades e fatos surpreendentes.","Elaborada. Aprecia debates e desafios intelectuais."],["Motivação","Brincadeira, movimento, cores, histórias.","Desafio, competição saudável, pertencimento ao grupo.","Autonomia e relevância prática. Quer entender para que serve."],["Formato","Oficinas curtas com manipulação de materiais, histórias, jogos.","Oficinas com produto final, gincanas por equipe, palestras dinâmicas.","Debates, projetos com autonomia, palestras com dados reais."],["Atenção especial","Máx. 2 passos por vez. Sempre demonstre antes de pedir para fazer.","Grupos mistos funcionam bem. Cuidado com competição que exclui.","Escute o que pensam antes de apresentar. Validação é essencial."]].map((row,ri)=>(
                    <tr key={ri}>
                      {row.map((c,ci)=>(
                        <td key={ci} style={{ border:"1px solid #c8e6c9", padding:"0.55rem 0.7rem", background:ri%2===0?"#e8f5e9":"#fff", color:ci===0?"#1b5e20":"#333", fontWeight:ci===0?700:400 }}>{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <BlueBox title="Dica sobre a EJA (Educação de Jovens e Adultos):">
              <Body style={{margin:0}}>Com adultos, a educação ambiental funciona melhor quando parte do que eles <strong>já viveram e observaram</strong> — mudanças no rio, desmatamento que viram acontecer, problemas de saúde relacionados ao lixo. Não infantilize a abordagem. Use a experiência deles como ponto de partida.</Body>
            </BlueBox>
            <div style={{ height:20 }}/>
            <SectionTitle icon="📋">Seção 5 — Registro e Avaliação das Ações</SectionTitle>
            <SubTitle>Por que registrar é parte da ação — não um detalhe</SubTitle>
            <Body>O Projeto Asa Verde em 2025 realizou <strong style={{color:"#2e7d32"}}>2.231 ações documentadas</strong>. Esse número só existe porque cada estagiário registrou o que fez. <strong style={{color:"#2e7d32"}}>Quando você não registra, você prejudica o projeto inteiro.</strong></Body>
            <SubTitle>O que registrar em cada ação</SubTitle>
            <div style={{ display:"flex", flexDirection:"column", gap:5, margin:"0.3rem 0 1rem" }}>
              {[["📅","Data, horário de início e fim da ação"],["🏫","Nome da escola e turma(s) atendida(s)"],["👥","Número exato de participantes (conte antes de começar)"],["📌","Tema da ação e formato utilizado (oficina ou palestra)"],["📝","Breve descrição do que foi realizado (3 a 5 linhas)"],["📸","Mínimo de 3 fotos: antes, durante e no encerramento"],["💬","Uma frase ou reação marcante de algum aluno"],["⭐","Autoavaliação: o que funcionou e o que faria diferente"]].map(([ic,t])=>(
                <div key={t} style={{ display:"flex", gap:10, alignItems:"center", border:"1px solid #c8e6c9", borderRadius:8, padding:"0.5rem 0.9rem", background:"#fafff9" }}>
                  <span style={{ fontSize:18, minWidth:24 }}>{ic}</span>
                  <span style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333" }}>{t}</span>
                </div>
              ))}
            </div>
            <SubTitle>O registro que movimenta o projeto inteiro</SubTitle>
            <Body>Cada escola conta com <strong>5 estagiários</strong> que dividem responsabilidades. O elo que conecta tudo é o registro. Você alimenta duas equipes que dependem diretamente do seu trabalho:</Body>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, margin:"0.5rem 0 1rem" }}>
              <div style={{ border:"1px solid #c8e6c9", borderRadius:12, overflow:"hidden" }}>
                <div style={{ background:"#e8f5e9", padding:"0.6rem 1rem", borderBottom:"1px solid #c8e6c9" }}><p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.88rem" }}>📸 Equipe de Mídia</p></div>
                <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.82rem", color:"#333", lineHeight:1.65, padding:"0.7rem 1rem", margin:0 }}>Cria posts e conteúdo do <strong>@projetoasaverde</strong>. Precisa de fotos de qualidade e relatos das ações. Sem seu registro fotográfico, não há conteúdo para divulgar e o projeto perde visibilidade.</p>
              </div>
              <div style={{ border:"1px solid #c8e6c9", borderRadius:12, overflow:"hidden" }}>
                <div style={{ background:"#e8f5e9", padding:"0.6rem 1rem", borderBottom:"1px solid #c8e6c9" }}><p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.88rem" }}>📊 Equipe de Planejamento</p></div>
                <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.82rem", color:"#333", lineHeight:1.65, padding:"0.7rem 1rem", margin:0 }}>Insere dados no sistema de monitoramento. Precisa de data, escola, turma, número de participantes e formato. O que não está no sistema não conta como resultado.</p>
              </div>
            </div>
            <SubTitle>Estrutura do grupo escolar</SubTitle>
            <Body>Cada grupo tem um <strong style={{color:"#2e7d32"}}>líder de grupo</strong> que faz a ponte entre os 5 estagiários da escola e as equipes de mídia e planejamento. O fluxo: estagiários registram → líder organiza e repassa → mídia produz conteúdo → planejamento insere no sistema → dúvidas vão para a coordenação.</Body>
            <BlueBox title="Seu papel no grupo:">
              <Body style={{margin:0}}>Independentemente de ser ou não o líder, <strong>todo estagiário é responsável por registrar as próprias ações</strong>. O líder facilita a comunicação — mas não substitui o registro individual. Se cada um fizer bem a sua parte, o projeto todo funciona melhor.</Body>
            </BlueBox>
            <div style={{ textAlign:"center", margin:"1rem 0" }}>
              <a 
                href="https://drive.google.com/file/d/1kpUn1sRzlm2D5flqALxRdC_BcY_LxHTl/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-block", background:"#fff", border:"2px solid #2e7d32", color:"#2e7d32", borderRadius:50, padding:"0.6rem 1.6rem", fontFamily:"'Source Serif 4',serif", fontWeight:600, fontSize:"0.88rem", textDecoration:"none", cursor:"pointer" }}>📊 Metas e Indicadores do Projeto (PDF)</a>
            </div>
            <ContinueBtn onClick={()=>advance2(5)} label="Ir para a Avaliação →" last={true}/>
          </SectionBlock>

          {/* M2 QUIZ */}
          <SectionBlock id="m2sec-5" visible={m2visible>=5}>
            <div style={{ height:32 }}/>
            <div style={{ background:"#fff", border:"2px solid #2e7d32", borderRadius:16, padding:"1.5rem" }}>
              <SectionTitle icon="📝">Avaliação do Módulo 2</SectionTitle>
              <Body>Responda as questões abaixo para concluir o Módulo 2. Você precisa de pelo menos <strong>70%</strong> de aproveitamento. Tem até <strong>2 tentativas</strong>.</Body>
              <QuizPanel key={m2Tries} tries={m2Tries} onSubmit={handleQuiz2Result} quiz={QUIZ2}/>
            </div>
          </SectionBlock>

        </div>
      </div>
    );
  }


  if (screen==="mod3") {
    const pct3 = Math.round((m3visible/TOTAL3)*100);
    return (
      <div style={{ minHeight:"100vh", background:"#f9fbe7", fontFamily:"'Source Serif 4',Georgia,serif" }}>
        <div style={{ background:"linear-gradient(135deg,#1b5e20,#2e7d32)", padding:"1rem 1.5rem", position:"sticky", top:0, zIndex:100, boxShadow:"0 2px 12px rgba(0,0,0,0.2)" }}>
          <div style={{ maxWidth:780, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <button onClick={()=>setScreen("home")} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:8, padding:"4px 10px", cursor:"pointer", fontSize:"1rem" }}>←</button>
              <Logo forDark={true}/>
              <div><p style={{ margin:0, color:"#a5d6a7", fontSize:"0.7rem", letterSpacing:"0.15em", fontFamily:"monospace" }}>MÓDULO 3</p><p style={{ margin:0, color:"#fff", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem" }}>Gincanas, Campanhas e Coleta Seletiva</p></div>
            </div>
            <div style={{ textAlign:"right" }}>
              <p style={{ margin:0, color:"#c8e6c9", fontSize:"0.75rem" }}>Olá, {studentName.split(" ")[0]}</p>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:4 }}>
                <div style={{ width:120, height:5, background:"rgba(255,255,255,0.2)", borderRadius:10, overflow:"hidden" }}><div style={{ width:`${pct3}%`, height:"100%", background:"#a5d6a7", borderRadius:10, transition:"width 0.5s" }}/></div>
                <span style={{ color:"#a5d6a7", fontSize:"0.72rem" }}>{pct3}%</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth:780, margin:"0 auto", padding:"2rem 1.2rem 4rem" }}>

          {/* M3 SEC 0 — Apresentação */}
          <SectionBlock id="m3sec-0" visible={m3visible>=0}>
            <div style={{ textAlign:"center", padding:"1.5rem 0 2rem" }}>
              <Logo/>
              <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:"#558b2f", fontSize:"1.05rem", margin:"1rem 0 0.3rem" }}>Módulo 3 — Gincanas, Campanhas e Coleta Seletiva</p>
            </div>
            <SectionTitle icon="🎯">Apresentação do Módulo</SectionTitle>
            <SubTitle>O que você vai aprender aqui?</SubTitle>
            <Body>Nos módulos anteriores você aprendeu a base do projeto e os dois principais formatos de ação educativa: a oficina e a palestra. Agora chegou a vez dos formatos que mais <strong style={{color:"#2e7d32"}}>engajam coletivamente</strong> — as gincanas e as campanhas ambientais.</Body>
            <Body>Esses formatos têm um poder que a oficina e a palestra individualmente não alcançam: eles mobilizam <strong style={{color:"#2e7d32"}}>toda a escola ao mesmo tempo</strong>. Uma gincana bem planejada transforma o ambiente escolar por dias ou semanas. Uma campanha de coleta seletiva pode mudar hábitos de famílias inteiras.</Body>
            <BlueBox title="O que você vai aprender neste módulo:">
              {["O que é uma gincana ambiental e como ela se diferencia de outros formatos.","Como planejar e executar uma gincana do começo ao fim — regras, pontuação, logística e encerramento.","O que é uma campanha ambiental e quando ela é o formato mais indicado.","Como organizar uma campanha de coleta seletiva — o tipo mais comum no Projeto Asa Verde.","A COREMM — o que é, qual o papel dela no projeto e como conectar as ações escolares à cooperativa.","Como registrar gincanas e campanhas de forma que os dados entrem no sistema."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
            </BlueBox>
            <ContinueBtn onClick={()=>advance3(1)} label="Começar — A Gincana Ambiental →"/>
          </SectionBlock>

          {/* M3 SEC 1 — Gincana */}
          <SectionBlock id="m3sec-1" visible={m3visible>=1}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="🏆">Seção 1 — A Gincana Ambiental</SectionTitle>
            <SubTitle>O que é uma gincana ambiental?</SubTitle>
            <Body>A gincana ambiental é um formato de educação ambiental que usa a <strong style={{color:"#2e7d32"}}>competição saudável e o trabalho em equipe</strong> para engajar alunos de forma lúdica e coletiva. Diferente da oficina — onde o foco é o aprendizado individual prático — e da palestra — onde o objetivo é sensibilizar — a gincana <strong style={{color:"#2e7d32"}}>mobiliza grupos</strong> e transforma o aprendizado em algo que os alunos querem vencer.</Body>
            <Body>No Projeto Asa Verde, a gincana consegue envolver múltiplas turmas ao mesmo tempo, criar espírito de pertencimento à escola e gerar uma memória afetiva forte. Quando bem executada, os alunos falam sobre ela por semanas.</Body>
            <SubTitle>Quando usar uma gincana?</SubTitle>
            {["Você quer engajar várias turmas simultaneamente — a gincana funciona melhor quando há pelo menos 3 ou 4 turmas competindo.","O objetivo é criar um comportamento coletivo — como separar o lixo corretamente por vários dias seguidos.","Você quer gerar visibilidade para o projeto — gincanas são fotogênicas e chamam atenção da direção e dos professores.","Você quer consolidar aprendizados anteriores — a gincana é excelente para reaplicar conteúdos já trabalhados em oficinas e palestras."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
            <SubTitle>Tipos de gincana no Projeto Asa Verde</SubTitle>
            <div style={{ display:"flex", flexDirection:"column", gap:8, margin:"0.5rem 0 1rem" }}>
              {[["♻️","Coleta Seletiva","Cada turma compete pela maior quantidade de material reciclável coletado. Conta-se em kg. Conecta diretamente com a COREMM, que pode receber o material coletado."],["🌳","Arborização","As turmas competem pelo maior número de mudas plantadas, maior área revitalizada ou melhor cuidado com as mudas já existentes. Exige planejamento prévio."],["🧠","Conhecimento","Formato quiz — equipes respondem perguntas sobre meio ambiente, reciclagem, biodiversidade e o próprio projeto. Ótimo para consolidar conteúdos anteriores."],["🎨","Criatividade","As turmas produzem cartazes, vídeos curtos, paródias ou objetos com material reciclável. A votação pode envolver professores e outros alunos."]].map(([ic,t,d])=>(
                <div key={t} style={{ display:"flex", gap:0, border:"1px solid #c8e6c9", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ background:"#1b5e20", minWidth:60, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"0.8rem 0.5rem", flexShrink:0 }}>
                    <span style={{ fontSize:22 }}>{ic}</span>
                    <p style={{ margin:"4px 0 0", fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"0.72rem", textAlign:"center", lineHeight:1.2 }}>{t}</p>
                  </div>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333", lineHeight:1.65, padding:"0.8rem 1rem", margin:0 }}>{d}</p>
                </div>
              ))}
            </div>
            <SubTitle>Como planejar uma gincana — 8 passos</SubTitle>
            <div style={{ display:"flex", flexDirection:"column", gap:5, margin:"0.3rem 0 1rem" }}>
              {[["01","Objetivo","Defina em uma frase o que você quer alcançar. Sem objetivo claro, a gincana vira bagunça organizada."],["02","Formato","Escolha o tipo (coleta, conhecimento, criação, plantio) e defina se será por turma, por equipe mista ou por série."],["03","Regras","Escreva as regras antes de anunciar. Seja específico: o que conta, o que não conta, como resolver empates. Distribua por escrito."],["04","Comunicação","Anuncie com no mínimo 3 dias de antecedência. Use cartazes, avise professores e direção. Quanto mais a escola souber, maior o engajamento."],["05","Logística","Organize previamente: onde será? Quem avalia? Quem registra? Cada estagiário do grupo deve ter uma função clara no dia."],["06","Premiação","Defina o que a turma vencedora ganha. Não precisa ser material — um destaque no @projetoasaverde já é um prêmio poderoso."],["07","Encerramento","Toda gincana precisa de um encerramento formal: resultados, celebração dos vencedores e reconhecimento de todos. Capriche aqui."],["08","Registro","Total de participantes, pontuações por turma, fotos e kg coletados (se for coleta). Esses dados entram nos indicadores do projeto."]].map(([n,t,d])=>(
                <div key={n} style={{ display:"flex", gap:0, border:"1px solid #c8e6c9", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ background: parseInt(n)%2===0?"#e8f5e9":"#1b5e20", minWidth:52, textAlign:"center", padding:"0.7rem 0.3rem", flexShrink:0 }}>
                    <p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"1.1rem", color:parseInt(n)%2===0?"#1b5e20":"#fff" }}>{n}</p>
                    <p style={{ margin:"2px 0 0", fontSize:"0.65rem", fontWeight:600, color:parseInt(n)%2===0?"#2e7d32":"#a5d6a7", letterSpacing:"0.04em" }}>{t.toUpperCase()}</p>
                  </div>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333", lineHeight:1.6, padding:"0.7rem 1rem", margin:0 }}>{d}</p>
                </div>
              ))}
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, margin:"0.5rem 0 1rem" }}>
              <div style={{ border:"1px solid #c8e6c9", borderRadius:12, overflow:"hidden" }}>
                <div style={{ background:"#e8f5e9", padding:"0.6rem 1rem", borderBottom:"1px solid #c8e6c9" }}><p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.88rem" }}>✅ O que garante o sucesso</p></div>
                <div style={{ padding:"0.7rem 1rem" }}>{["Envolver professores e a direção antes — o apoio deles multiplica o engajamento.","Ter um placar visível e atualizado em tempo real.","Fotografia constante — o conteúdo para o @projetoasaverde é gerado aqui.","Celebrar cada etapa, não só o resultado final."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}</div>
              </div>
              <div style={{ border:"1px solid #f5c6cb", borderRadius:12, overflow:"hidden" }}>
                <div style={{ background:"#fff3e0", padding:"0.6rem 1rem", borderBottom:"1px solid #f5c6cb" }}><p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#7a3a00", fontSize:"0.88rem" }}>⚠️ O que compromete</p></div>
                <div style={{ padding:"0.7rem 1rem" }}>{["Anunciar no mesmo dia — o engajamento cai drasticamente.","Regras confusas ou que mudam no meio.","Encerramento sem celebração — o impacto se perde.","Não registrar dados e fotos no momento."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}</div>
              </div>
            </div>
            <ContinueBtn onClick={()=>advance3(2)} label="Aprender sobre Campanhas →"/>
          </SectionBlock>

          {/* M3 SEC 2 — Campanha + COREMM */}
          <SectionBlock id="m3sec-2" visible={m3visible>=2}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="📣">Seção 2 — A Campanha Ambiental e a COREMM</SectionTitle>
            <SubTitle>O que é uma campanha ambiental?</SubTitle>
            <Body>A campanha ambiental é uma ação de <strong style={{color:"#2e7d32"}}>mobilização coletiva em torno de um tema ou meta</strong> que se estende por um período mais longo — geralmente de uma semana a um mês. Enquanto a gincana é pontual e competitiva, a campanha é <strong style={{color:"#2e7d32"}}>contínua e educativa</strong>.</Body>
            <Body>A campanha serve para <strong>criar novos hábitos</strong> na comunidade escolar. Uma campanha bem executada começa com sensibilização, passa por ação prática e termina com avaliação e celebração dos resultados. As mais comuns no projeto são a <strong style={{color:"#2e7d32"}}>Campanha de Coleta Seletiva</strong> e campanhas temáticas como Semana do Meio Ambiente, Dia da Árvore e Dia da Terra.</Body>
            <SubTitle>Como organizar uma campanha de coleta seletiva</SubTitle>
            <div style={{ display:"flex", flexDirection:"column", gap:5, margin:"0.3rem 0 1rem" }}>
              {[["01","Sensibilização","Antes de lançar, faça uma palestra ou oficina rápida explicando o que é coleta seletiva, quais materiais podem ser reciclados e o impacto de cada kg destinado à reciclagem."],["02","Lançamento","Anuncie com antecedência — cartazes, aviso nas salas, envolvimento dos professores. Defina claramente: quais materiais, onde depositar e por quantos dias."],["03","Coleta","Posicione recipientes identificados por tipo de material nos pontos estratégicos. Acompanhe diariamente, motive com um placar e registre as quantidades."],["04","Pesagem","Ao final, pese todo o material coletado. Esse dado entra no sistema de monitoramento e é acompanhado pela coordenação."],["05","Destinação","Articule com a coordenação o recolhimento pela COREMM. O lixo coletado na escola vai para trabalhadores que dependem da reciclagem para viver."],["06","Celebração","Divulgue os resultados. Quanto foi coletado? Qual turma contribuiu mais? Celebre com reconhecimento público — placar, cartaz, foto no @projetoasaverde."]].map(([n,t,d])=>(
                <div key={n} style={{ display:"flex", gap:0, border:"1px solid #c8e6c9", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ background:parseInt(n)%2===0?"#e8f5e9":"#1b5e20", minWidth:52, textAlign:"center", padding:"0.7rem 0.3rem", flexShrink:0 }}>
                    <p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"1.1rem", color:parseInt(n)%2===0?"#1b5e20":"#fff" }}>{n}</p>
                    <p style={{ margin:"2px 0 0", fontSize:"0.65rem", fontWeight:600, color:parseInt(n)%2===0?"#2e7d32":"#a5d6a7", letterSpacing:"0.04em" }}>{t.toUpperCase()}</p>
                  </div>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333", lineHeight:1.6, padding:"0.7rem 1rem", margin:0 }}>{d}</p>
                </div>
              ))}
            </div>
            <GreenBox title="🔗 A conexão com a COREMM">
              <Body>A <strong style={{color:"#1b5e20"}}>COREMM — Cooperativa de Reciclagem do Município de Santa Rita</strong> — é parceira estratégica do Projeto Asa Verde. É ela que recebe e processa o material reciclável coletado nas campanhas das escolas.</Body>
              <Body>Quando os alunos sabem que o material que separaram vai para trabalhadores reais que dependem da reciclagem para sustentar suas famílias, o ato de separar o lixo ganha <strong>significado humano e social</strong> — não é apenas uma questão ambiental abstrata.</Body>
              <Body style={{margin:0}}>Sempre que possível, mencione a COREMM nas palestras, gincanas e campanhas. Se houver oportunidade, organize uma visita à cooperativa — esse é um dos momentos mais marcantes que os alunos podem ter no projeto.</Body>
            </GreenBox>
            <SubTitle>Resultado da Campanha de Coleta — 2025</SubTitle>
            <Body>Em 2025, o Projeto Asa Verde realizou sua primeira grande campanha de coleta seletiva. O resultado foi expressivo — e serve como referência e desafio para este ano, em que teremos <strong style={{color:"#2e7d32"}}>mais tempo de projeto</strong> para superar esses números.</Body>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:8, margin:"0.5rem 0 1rem" }}>
              {[["📄","Papel","1.267,5 kg"],["🧴","Plástico","507,8 kg"],["🫙","Vidro","242,3 kg"],["🔩","Metal","304,9 kg"]].map(([ic,t,v])=>(
                <div key={t} style={{ background:"#e8f5e9", border:"1px solid #a5d6a7", borderRadius:12, padding:"0.8rem 0.5rem", textAlign:"center" }}>
                  <div style={{ fontSize:22 }}>{ic}</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"1.1rem", color:"#1b5e20" }}>{v}</div>
                  <div style={{ fontSize:"0.75rem", color:"#558b2f" }}>{t}</div>
                </div>
              ))}
            </div>
            <div style={{ background:"#1b5e20", borderRadius:12, padding:"1rem", textAlign:"center", marginBottom:"1rem" }}>
              <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, color:"#fff", fontSize:"2rem", margin:"0 0 4px" }}>2.322,5 kg</p>
              <p style={{ fontFamily:"'Source Serif 4',serif", color:"#a5d6a7", fontSize:"0.85rem", margin:0 }}>Total destinado à COREMM em 2025 — apenas 1 mês de campanha</p>
            </div>
            <div style={{ textAlign:"center", margin:"0.5rem 0 1rem" }}>
              <a 
                href="https://drive.google.com/file/d/1ED4vhPi3jZXS7KFkT1GEwTafPq1eJz6-/view?usp=drive_link"
                target="_blank" rel="noopener noreferrer"
                style={{ display:"inline-block", background:"#fff", border:"2px solid #2e7d32", color:"#2e7d32", borderRadius:50, padding:"0.6rem 1.6rem", fontFamily:"'Source Serif 4',serif", fontWeight:600, fontSize:"0.88rem", textDecoration:"none", cursor:"pointer" }}>📊 Ver Resultado Completo — Impacto Ambiental 2025</a>
            </div>
            <ContinueBtn onClick={()=>advance3(3)} label="Ver Calendário de Datas Temáticas →"/>
          </SectionBlock>

          {/* M3 SEC 3 — Datas + Registro */}
          <SectionBlock id="m3sec-3" visible={m3visible>=3}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="📅">Seção 3 — Calendário de Datas Temáticas</SectionTitle>
            <SubTitle>Por que as datas temáticas são aliadas do projeto?</SubTitle>
            <Body>Datas temáticas <strong style={{color:"#2e7d32"}}>mobilizam naturalmente</strong> professores, direção e alunos — porque já existem dentro da agenda pedagógica da escola. Quando você conecta sua ação a uma data temática, você amplia o impacto sem aumentar o esforço.</Body>
            <div style={{ overflowX:"auto", margin:"0.5rem 0 1rem" }}>
              <table style={{ width:"100%", borderCollapse:"collapse", fontFamily:"'Source Serif 4',serif", fontSize:"0.82rem" }}>
                <thead>
                  <tr>{["Mês","Data","Sugestão de ação — Projeto Asa Verde"].map((h,i)=>(
                    <th key={i} style={{ background:"#1b5e20", color:"#fff", padding:"0.6rem 0.7rem", textAlign:"left", fontFamily:"'Playfair Display',serif", fontSize:"0.82rem", border:"1px solid #0d3d1e", width:i===0?"15%":i===1?"25%":"60%" }}>{h}</th>
                  ))}</tr>
                </thead>
                <tbody>
                  {[["Março","22 — Dia Mundial da Água","Palestra sobre uso consciente da água + oficina de maquete do ciclo hidrológico"],["Abril","22 — Dia da Terra","Campanha de plantio de mudas + lançamento de gincana de coleta seletiva"],["Maio","15 — Dia do Consumidor Consciente","Oficina de reaproveitamento criativo de materiais + exposição das peças produzidas"],["Junho","5 — Dia Mundial do Meio Ambiente","Semana do Meio Ambiente — maior campanha do semestre. Combina palestra + gincana + plantio."],["Setembro","21 — Dia da Árvore","Mutirão de plantio com toda a escola + gincana de identificação de espécies nativas."],["Outubro","4 — Dia dos Animais / 12 — Dia das Crianças","Oficina de biodiversidade + criação de cartazes sobre fauna local."],["Novembro","Semana da Consciência Ambiental","Campanha de coleta seletiva + pesagem e destinação para COREMM."],["Dezembro","Fechamento do ano","Celebração dos resultados — placar geral de ações, reconhecimento das turmas destaque."]].map((row,ri)=>(
                    <tr key={ri}>{row.map((c,ci)=>(
                      <td key={ci} style={{ border:"1px solid #c8e6c9", padding:"0.55rem 0.7rem", background:ri%2===0?"#e8f5e9":"#fff", color:ci===0?"#1b5e20":"#333", fontWeight:ci===0?700:400 }}>{c}</td>
                    ))}</tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ height:20 }}/>
            <SectionTitle icon="📋">Seção 4 — Registro de Gincanas e Campanhas</SectionTitle>
            <SubTitle>Distribua o registro entre o grupo — ninguém faz tudo sozinho</SubTitle>
            <Body>Gincanas e campanhas têm um volume de dados maior do que uma oficina ou palestra. <strong style={{color:"#2e7d32"}}>Distribua a tarefa de registro entre os 5 estagiários do grupo antes de começar</strong> — ninguém deve tentar fazer tudo sozinho.</Body>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, margin:"0.5rem 0 1rem" }}>
              {[["🏆 Para gincanas",["Data de início e encerramento","Nome e formato (coleta, conhecimento, plantio, criação)","Turmas participantes e total de alunos","Pontuações por turma — tabela completa","Turma vencedora e critério de desempate","Total coletado em kg (se for gincana de coleta)","Fotos: abertura, competição, placar e premiação"]],["📣 Para campanhas",["Período da campanha (início e fim)","Tema e objetivo principal","Número de alunos alcançados","Total de material coletado em kg","Confirmação de destinação para a COREMM","Fotos: lançamento, durante e celebração","Relato de 3 a 5 linhas sobre o impacto percebido"]]].map(([titulo,itens])=>(
                <div key={titulo} style={{ border:"1px solid #c8e6c9", borderRadius:12, overflow:"hidden" }}>
                  <div style={{ background:"#e8f5e9", padding:"0.6rem 1rem", borderBottom:"1px solid #c8e6c9" }}><p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.88rem" }}>{titulo}</p></div>
                  <div style={{ padding:"0.7rem 1rem" }}>{itens.map((t,i)=><Bullet key={i}>{t}</Bullet>)}</div>
                </div>
              ))}
            </div>
            <BlueBox title="Como contar nos indicadores:">
              <Body style={{margin:"0 0 0.5rem"}}>Cada gincana ou campanha realizada conta como <strong>1 ação</strong> no indicador de Gincanas e Campanhas. A meta por escola é de <strong style={{color:"#1b5e20"}}>3 ações</strong> — o mínimo esperado ao longo do projeto.</Body>
              <Body style={{margin:0}}>Uma campanha bem executada e bem registrada pode alimentar <strong style={{color:"#1b5e20"}}>3 indicadores ao mesmo tempo</strong>: gincanas/campanhas, resíduos coletados e publicações nas mídias digitais. Isso é o que chamamos de ação de alto impacto.</Body>
            </BlueBox>
            <ContinueBtn onClick={()=>advance3(4)} label="Ir para a Avaliação →" last={true}/>
          </SectionBlock>

          {/* M3 QUIZ */}
          <SectionBlock id="m3sec-4" visible={m3visible>=4}>
            <div style={{ height:32 }}/>
            <div style={{ background:"#fff", border:"2px solid #2e7d32", borderRadius:16, padding:"1.5rem" }}>
              <SectionTitle icon="📝">Avaliação do Módulo 3</SectionTitle>
              <Body>Responda as questões abaixo para concluir o Módulo 3. Você precisa de pelo menos <strong>70%</strong> de aproveitamento. Tem até <strong>2 tentativas</strong>.</Body>
              <QuizPanel key={m3Tries} tries={m3Tries} onSubmit={handleQuiz3Result} quiz={QUIZ3}/>
            </div>
          </SectionBlock>

        </div>
      </div>
    );
  }


  if (screen==="mod4") {
    const pct4 = Math.round((m4visible/TOTAL4)*100);
    return (
      <div style={{ minHeight:"100vh", background:"#f9fbe7", fontFamily:"'Source Serif 4',Georgia,serif" }}>
        <div style={{ background:"linear-gradient(135deg,#1b5e20,#2e7d32)", padding:"1rem 1.5rem", position:"sticky", top:0, zIndex:100, boxShadow:"0 2px 12px rgba(0,0,0,0.2)" }}>
          <div style={{ maxWidth:780, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap" }}>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <button onClick={()=>setScreen("home")} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:8, padding:"4px 10px", cursor:"pointer", fontSize:"1rem" }}>←</button>
              <Logo forDark={true}/>
              <div><p style={{ margin:0, color:"#a5d6a7", fontSize:"0.7rem", letterSpacing:"0.15em", fontFamily:"monospace" }}>MÓDULO 4</p><p style={{ margin:0, color:"#fff", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem" }}>Arborização e Planejamento de Ações</p></div>
            </div>
            <div style={{ textAlign:"right" }}>
              <p style={{ margin:0, color:"#c8e6c9", fontSize:"0.75rem" }}>Olá, {studentName.split(" ")[0]}</p>
              <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:4 }}>
                <div style={{ width:120, height:5, background:"rgba(255,255,255,0.2)", borderRadius:10, overflow:"hidden" }}><div style={{ width:`${pct4}%`, height:"100%", background:"#a5d6a7", borderRadius:10, transition:"width 0.5s" }}/></div>
                <span style={{ color:"#a5d6a7", fontSize:"0.72rem" }}>{pct4}%</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth:780, margin:"0 auto", padding:"2rem 1.2rem 4rem" }}>

          {/* M4 SEC 0 — Apresentação */}
          <SectionBlock id="m4sec-0" visible={m4visible>=0}>
            <div style={{ textAlign:"center", padding:"1.5rem 0 2rem" }}>
              <Logo/>
              <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:"#558b2f", fontSize:"1.05rem", margin:"1rem 0 0.3rem" }}>Módulo 4 — Arborização e Planejamento de Ações</p>
            </div>
            <SectionTitle icon="🎯">Apresentação do Módulo</SectionTitle>
            <SubTitle>O módulo final — e o mais importante para a continuidade do projeto</SubTitle>
            <Body>Nos três módulos anteriores você aprendeu o que é o projeto, como executar ações educativas e como mobilizar a escola com gincanas e campanhas. Agora você vai aprender os dois temas que definem a <strong style={{color:"#2e7d32"}}>sustentabilidade das ações no tempo</strong>: a arborização como processo educativo e o planejamento das suas próprias ações na escola.</Body>
            <Body>A arborização é o eixo do projeto que mais gera <strong style={{color:"#2e7d32"}}>vínculo duradouro</strong> entre o aluno e o meio ambiente. Uma criança que planta uma árvore com as próprias mãos e acompanha seu crescimento ao longo do ano não esquece o que aprendeu.</Body>
            <BlueBox title="O que você vai aprender neste módulo:">
              {["Por que a arborização é um processo educativo — e não apenas uma ação de plantio.","Como planejar e conduzir um mutirão de plantio com alunos — do preparo à manutenção.","Quais espécies nativas são utilizadas no projeto e por que a escolha importa.","Como montar seu plano de ações para a escola onde você vai atuar.","Como registrar e acompanhar os resultados das suas ações ao longo do projeto.","O que fazer no primeiro encontro com a escola e como construir uma relação de confiança com a direção."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
            </BlueBox>
            <ContinueBtn onClick={()=>advance4(1)} label="Começar — Arborização →"/>
          </SectionBlock>

          {/* M4 SEC 1 — Arborização */}
          <SectionBlock id="m4sec-1" visible={m4visible>=1}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="🌳">Seção 1 — Arborização: Muito Além do Plantio</SectionTitle>
            <SubTitle>O plantio de árvores como experiência pedagógica</SubTitle>
            <Body>No Projeto Asa Verde, o plantio de árvores não é um evento isolado — é um <strong style={{color:"#2e7d32"}}>processo educativo completo</strong>. A diferença entre 'plantar uma árvore' e 'conduzir uma ação de arborização' é enorme: a primeira é uma tarefa; a segunda é uma aula que dura o ano inteiro.</Body>
            <Body>Quando você envolve os alunos em todas as etapas — desde a escolha das espécies até o acompanhamento do crescimento —, você cria algo que nenhuma palestra consegue: um <strong style={{color:"#2e7d32"}}>vínculo de responsabilidade</strong> entre o aluno e o ambiente escolar. A árvore que ele plantou passa a ser 'a árvore dele'.</Body>
            <Quote>Quando um aluno planta uma árvore, ele planta pertencimento.</Quote>
            <SubTitle>As 5 etapas de uma ação de arborização</SubTitle>
            <div style={{ display:"flex", flexDirection:"column", gap:5, margin:"0.3rem 0 1rem" }}>
              {[["01","Sensibilização","Antes do plantio, faça uma conversa rápida: por que plantar árvores? Qual é a espécie? De onde ela vem? O que ela oferece para o território? Essa conversa conecta a ação física ao aprendizado ambiental."],["02","Preparo do Solo","Envolva os alunos no preparo: limpeza do espaço, abertura das covas, adição de substrato. Essa etapa suja as mãos e cria envolvimento. Explique enquanto fazem."],["03","Plantio","Este é o momento central. Deixe cada aluno participar — segurar a muda, colocar a terra, firmar o caule. Fotografe cada grupo. O plantio coletivo é o momento mais poderoso da ação."],["04","Irrigação Inicial","Ensine a técnica correta de rega. Defina quem será responsável pela irrigação nas semanas seguintes — crie um esquema de revezamento entre turmas."],["05","Acompanhamento","Retorne nas visitas seguintes para verificar o crescimento, registrar com fotos e envolver os mesmos alunos que plantaram. Isso é o que transforma o plantio em processo educativo."]].map(([n,t,d])=>(
                <div key={n} style={{ display:"flex", gap:0, border:"1px solid #c8e6c9", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ background:parseInt(n)%2===0?"#e8f5e9":"#1b5e20", minWidth:52, textAlign:"center", padding:"0.7rem 0.3rem", flexShrink:0 }}>
                    <p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"1.1rem", color:parseInt(n)%2===0?"#1b5e20":"#fff" }}>{n}</p>
                    <p style={{ margin:"2px 0 0", fontSize:"0.65rem", fontWeight:600, color:parseInt(n)%2===0?"#2e7d32":"#a5d6a7", letterSpacing:"0.04em" }}>{t.toUpperCase()}</p>
                  </div>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333", lineHeight:1.6, padding:"0.7rem 1rem", margin:0 }}>{d}</p>
                </div>
              ))}
            </div>
            <SubTitle>Por que espécies nativas?</SubTitle>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:10, margin:"0.3rem 0 1rem" }}>
              <div style={{ border:"1px solid #c8e6c9", borderRadius:12, overflow:"hidden" }}>
                <div style={{ background:"#e8f5e9", padding:"0.6rem 1rem", borderBottom:"1px solid #c8e6c9" }}><p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.88rem" }}>Por que nativas?</p></div>
                <div style={{ padding:"0.7rem 1rem" }}>{["São adaptadas ao clima nordestino — mais resistentes à seca e ao calor.","Fortalecem a biodiversidade regional — atraem pássaros, insetos e animais nativos.","Ensinam sobre o território local — cada espécie tem uma história e uma relação com a fauna do lugar.","Têm maior taxa de sobrevivência — garantindo que os resultados persistam."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}</div>
              </div>
              <div style={{ border:"1px solid #c8e6c9", borderRadius:12, overflow:"hidden" }}>
                <div style={{ background:"#e8f5e9", padding:"0.6rem 1rem", borderBottom:"1px solid #c8e6c9" }}><p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#1b5e20", fontSize:"0.88rem" }}>Como usar na atividade</p></div>
                <div style={{ padding:"0.7rem 1rem" }}>{["Pesquise o nome popular e científico de cada espécie antes do plantio.","Conte a história da planta: alimenta quais animais? Tem uso medicinal?","Peça que os alunos 'adotem' uma muda e registrem seu crescimento.","Compare nativas com exóticas — gera reflexão sobre biodiversidade."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}</div>
              </div>
            </div>
            <GreenBox title="Dica prática para atingir a meta:">
              <Body style={{margin:0}}>Não concentre todo o plantio em um único evento. <strong style={{color:"#1b5e20"}}>Cada visita à escola é uma oportunidade de arborização</strong>: verificar as mudas já plantadas conta, cuidar da irrigação conta, fazer uma minipalestra sobre as espécies conta. Distribua as ações ao longo de todo o projeto e registre cada uma. Meta por escola: <strong style={{color:"#1b5e20"}}>100 árvores plantadas e 10 ações de arborização</strong>.</Body>
            </GreenBox>
            <ContinueBtn onClick={()=>advance4(2)} label="Planejamento de Ações →"/>
          </SectionBlock>

          {/* M4 SEC 2 — Planejamento + Primeiro Encontro */}
          <SectionBlock id="m4sec-2" visible={m4visible>=2}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="📋">Seção 2 — Planejamento das Suas Ações na Escola</SectionTitle>
            <SubTitle>Por que o planejamento é inegociável</SubTitle>
            <Body>A diferença entre um estagiário que gera impacto real e um que apenas 'passa pelas escolas' está em uma palavra: <strong style={{color:"#2e7d32"}}>planejamento</strong>. Ações improvisadas transmitem descuido. Ações planejadas transmitem profissionalismo, geram confiança da escola e produzem resultados que entram nos indicadores do projeto.</Body>
            <Body>O planejamento pode e deve ser adaptado conforme a realidade de cada escola. Mas ele precisa existir. Um estagiário que chega à escola sem saber o que vai fazer não está trabalhando — <strong style={{color:"#c62828"}}>está improvisando</strong>.</Body>
            <SubTitle>Os três pilares do bom planejamento</SubTitle>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:10, margin:"0.5rem 0 1.2rem" }}>
              {[["📅","Continuidade","Distribua as ações ao longo de todo o projeto. Não concentre tudo em um mês. A escola precisa sentir sua presença de forma regular."],["🔄","Variedade","Use todos os formatos: palestra, oficina, gincana, campanha e plantio. A combinação é o que gera impacto completo."],["📊","Registro","Toda ação planejada que não for registrada não existirá nos dados do projeto. Planejamento sem registro é trabalho perdido."]].map(([ic,t,d])=>(
                <div key={t} style={{ background:"#1b5e20", borderRadius:12, padding:"1rem", textAlign:"center" }}>
                  <div style={{ fontSize:24, marginBottom:6 }}>{ic}</div>
                  <p style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, color:"#fff", fontSize:"0.85rem", margin:"0 0 6px" }}>{t}</p>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.78rem", color:"#c8e6c9", margin:0, lineHeight:1.6 }}>{d}</p>
                </div>
              ))}
            </div>
            <div style={{ height:20 }}/>
            <SectionTitle icon="🏫">Seção 3 — O Primeiro Encontro com a Escola</SectionTitle>
            <SubTitle>Por que a primeira impressão define tudo</SubTitle>
            <Body>O primeiro encontro com a escola é o momento mais importante de toda a sua trajetória no Projeto Asa Verde. É nesse momento que a direção e os professores formam a <strong style={{color:"#2e7d32"}}>impressão que vão carregar durante todo o projeto</strong>.</Body>
            <Body>Lembre-se: você não está chegando como visitante. Você está chegando como <strong style={{color:"#2e7d32"}}>representante do IFPB, da Prefeitura e do MPPB</strong>. A sua postura nesse dia reflete diretamente na imagem das três instituições.</Body>
            <SubTitle>O que fazer antes da primeira visita</SubTitle>
            {["Pesquise a escola: quantas turmas tem? Qual é o perfil dos alunos — zona urbana ou rural, EJA? Quem é o diretor?","Confirme o horário com antecedência — nunca apareça sem combinar. Ligue ou envie mensagem para confirmar.","Prepare uma apresentação breve do projeto — tenha em mente os principais números e o que você vai fazer naquela escola.","Leve a Carta Institucional — entregue pessoalmente à direção. Ela formaliza a entrada do projeto na escola.","Vista-se adequadamente — você representa instituições públicas. A aparência comunica respeito."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
            <SubTitle>Os 5 passos do dia da primeira visita</SubTitle>
            <div style={{ display:"flex", flexDirection:"column", gap:5, margin:"0.3rem 0 1rem" }}>
              {[["01","Apresentação","Apresente-se pelo nome, diga de qual instituição você é e explique brevemente o projeto. Seja objetivo — a direção tem uma agenda cheia."],["02","Entregue a Carta","A Carta Institucional formaliza a parceria. Entregue pessoalmente à direção."],["03","Escute a Escola","Pergunte sobre horários disponíveis, turmas indicadas e o calendário escolar. Escutar é mais importante do que falar nesse momento."],["04","Combine os Próximos Passos","Saia da escola com pelo menos uma data e horário combinados para a próxima ação. Nunca termine sem um compromisso concreto."],["05","Registre","Anote o que foi combinado, quem você conheceu e qualquer informação relevante. Esses dados ajudam nas visitas seguintes e são úteis para o grupo inteiro."]].map(([n,t,d])=>(
                <div key={n} style={{ display:"flex", gap:0, border:"1px solid #c8e6c9", borderRadius:10, overflow:"hidden" }}>
                  <div style={{ background:parseInt(n)%2===0?"#e8f5e9":"#1b5e20", minWidth:52, textAlign:"center", padding:"0.7rem 0.3rem", flexShrink:0 }}>
                    <p style={{ margin:0, fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:"1.1rem", color:parseInt(n)%2===0?"#1b5e20":"#fff" }}>{n}</p>
                    <p style={{ margin:"2px 0 0", fontSize:"0.65rem", fontWeight:600, color:parseInt(n)%2===0?"#2e7d32":"#a5d6a7", letterSpacing:"0.04em" }}>{t.toUpperCase()}</p>
                  </div>
                  <p style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333", lineHeight:1.6, padding:"0.7rem 1rem", margin:0 }}>{d}</p>
                </div>
              ))}
            </div>
            <ContinueBtn onClick={()=>advance4(3)} label="A Visão Completa →" last={false}/>
          </SectionBlock>

          {/* M4 SEC 3 — Visão completa */}
          <SectionBlock id="m4sec-3" visible={m4visible>=3}>
            <div style={{ height:32 }}/>
            <SectionTitle icon="🚀">Seção 4 — Você como Multiplicador: A Visão Completa</SectionTitle>
            <SubTitle>O que significa concluir esta formação</SubTitle>
            <Body>Você concluiu quatro módulos de formação. Isso significa que você agora tem as ferramentas para atuar como <strong style={{color:"#2e7d32"}}>Multiplicador Ambiental</strong> — o agente central de um dos projetos de educação ambiental mais estruturados já realizados no município de Santa Rita.</Body>
            <Body>Mas a formação não termina aqui. Ela continua em cada escola que você visitar, em cada aluno que plantar uma árvore com você, em cada gincana que mobilizar uma comunidade escolar. <strong style={{color:"#2e7d32"}}>O certificado que você está prestes a receber é o começo da sua atuação — não o fim.</strong></Body>
            <Quote>A educação ambiental planta hoje o mundo que queremos amanhã.</Quote>
            <SubTitle>O que o projeto espera de você — resumo final</SubTitle>
            <div style={{ display:"flex", flexDirection:"column", gap:5, margin:"0.3rem 0 1rem" }}>
              {[["🌱","Atuar com planejamento — nunca improvisar ações dentro da escola sem preparo prévio."],["🤝","Construir relações de confiança com a direção, os professores e os alunos de cada escola."],["📸","Registrar todas as ações com fotos, dados quantitativos e relatos — sem exceção."],["🌳","Conduzir ações de arborização como processos educativos, não apenas como plantios."],["♻️","Conectar as campanhas de coleta seletiva com a COREMM e com o significado humano por trás da reciclagem."],["📣","Mobilizar a escola inteira com gincanas e campanhas que deixam memória."],["👥","Trabalhar em grupo — o líder facilita, mas cada um é responsável pelo seu registro."],["📊","Contribuir para os indicadores do projeto com ações de qualidade, bem executadas e bem documentadas."]].map(([ic,t])=>(
                <div key={t} style={{ display:"flex", gap:10, alignItems:"center", border:"1px solid #c8e6c9", borderRadius:8, padding:"0.5rem 0.9rem", background:"#fafff9" }}>
                  <span style={{ fontSize:18, minWidth:24 }}>{ic}</span>
                  <span style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333", lineHeight:1.6 }}>{t}</span>
                </div>
              ))}
            </div>
            <OrangeBox title="O que NUNCA fazer:">
              {["Agir de forma independente sem comunicar a coordenação — você faz parte de uma estrutura.","Deixar de registrar qualquer ação — o que não está documentado não existe para o projeto.","Faltar às ações comprometidas — a escola conta com a sua presença. Ausências prejudicam a credibilidade do projeto inteiro.","Usar linguagem ou conteúdo inadequado — você representa o IFPB, a Prefeitura e o MPPB dentro da escola."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
            </OrangeBox>
            <ContinueBtn onClick={()=>advance4(4)} label="Ir para a Avaliação Final →" last={true}/>
          </SectionBlock>

          {/* M4 QUIZ */}
          <SectionBlock id="m4sec-4" visible={m4visible>=4}>
            <div style={{ height:32 }}/>
            <div style={{ background:"#fff", border:"2px solid #2e7d32", borderRadius:16, padding:"1.5rem" }}>
              <SectionTitle icon="🏆">Avaliação Final — Módulo 4</SectionTitle>
              <Body>Esta é a última avaliação da sua formação. Após aprovação, você receberá o <strong>Certificado de Multiplicador Ambiental</strong>. Você precisa de pelo menos <strong>70%</strong>. Tem até <strong>2 tentativas</strong>.</Body>
              <QuizPanel key={m4Tries} tries={m4Tries} onSubmit={handleQuiz4Result} quiz={QUIZ4}/>
            </div>
          </SectionBlock>

        </div>
      </div>
    );
  }

  const pct = Math.round((visible/TOTAL)*100);

  return (
    <div style={{ minHeight:"100vh", background:"#f9fbe7", fontFamily:"'Source Serif 4',Georgia,serif" }}>
      {/* Header */}
      <div style={{ background:"linear-gradient(135deg,#1b5e20,#2e7d32)", padding:"1rem 1.5rem", position:"sticky", top:0, zIndex:100, boxShadow:"0 2px 12px rgba(0,0,0,0.2)" }}>
        <div style={{ maxWidth:780, margin:"0 auto", display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, flexWrap:"wrap" }}>
          <div style={{ display:"flex", alignItems:"center", gap:12 }}>
            <Logo forDark={true} />
            <div>
              <p style={{ margin:0, color:"#a5d6a7", fontSize:"0.7rem", letterSpacing:"0.15em", fontFamily:"monospace" }}>MÓDULO 1</p>
              <p style={{ margin:0, color:"#fff", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.95rem" }}>Conhecendo o Projeto Asa Verde</p>
            </div>
          </div>
          <div style={{ textAlign:"right" }}>
            <p style={{ margin:0, color:"#c8e6c9", fontSize:"0.75rem" }}>Olá, {studentName.split(" ")[0]}</p>
            <div style={{ display:"flex", alignItems:"center", gap:8, marginTop:4 }}>
              <div style={{ width:120, height:5, background:"rgba(255,255,255,0.2)", borderRadius:10, overflow:"hidden" }}>
                <div style={{ width:`${pct}%`, height:"100%", background:"#a5d6a7", borderRadius:10, transition:"width 0.5s" }}/>
              </div>
              <span style={{ color:"#a5d6a7", fontSize:"0.72rem" }}>{pct}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth:780, margin:"0 auto", padding:"2rem 1.2rem 4rem" }}>

        {/* ── SECTION 0: Apresentação ── */}
        <SectionBlock id="sec-0" visible={visible >= 0}>
          <div style={{ textAlign:"center", padding:"1.5rem 0 2rem" }}>
            <Logo />
            <p style={{ fontFamily:"'Playfair Display',serif", fontStyle:"italic", color:"#558b2f", fontSize:"1.05rem", margin:"1rem 0 0.3rem" }}>Formação de Multiplicadores Ambientais</p>
          </div>
          <SectionTitle icon="📘">Apresentação do Curso</SectionTitle>
          <SubTitle>Por que este treinamento existe?</SubTitle>
          <Body>Você foi selecionado para atuar como estagiário no Projeto Asa Verde — uma das iniciativas de educação ambiental mais estruturadas já executadas no município de Santa Rita, na Paraíba. Antes de pisar em qualquer escola, é fundamental que você entenda o que é esse projeto, por que ele existe, como ele funciona e, principalmente, qual é o seu papel nessa história.</Body>
          <Body>Todo ano, um novo grupo de estagiários é formado. Cada turma chega com energia, mas nem sempre com o mesmo nível de conhecimento sobre o projeto e sobre como agir dentro de uma escola pública. Este curso existe para resolver exatamente isso: <strong style={{color:"#2e7d32"}}>nivelar todos os estagiários antes que qualquer ação comece.</strong></Body>
          <SubTitle>O que você vai aprender neste curso?</SubTitle>
          <Body>O treinamento está organizado em 4 módulos, cada um com foco em uma parte essencial da sua atuação:</Body>
          <div style={{ display:"flex", flexDirection:"column", gap:8, margin:"0.5rem 0 1rem" }}>
            {[["1","Conhecendo o Projeto Asa Verde — história, missão, estrutura e o que se espera de você (este módulo)."],["2","Educação Ambiental na Prática — como planejar e conduzir oficinas e palestras nas escolas."],["3","Gincanas, Campanhas e Coleta Seletiva — como engajar alunos e organizar ações de mobilização."],["4","Arborização e Planejamento de Ações — como conduzir plantios e montar seu plano de atuação na escola."]].map(([n,t])=>(
              <div key={n} style={{ display:"flex", gap:12, alignItems:"flex-start", background:"#fff", border:"1px solid #c8e6c9", borderRadius:10, padding:"0.7rem 1rem" }}>
                <span style={{ width:28, height:28, background:"#2e7d32", color:"#fff", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:"0.85rem", flexShrink:0 }}>{n}</span>
                <span style={{ fontFamily:"'Source Serif 4',serif", fontSize:"0.88rem", color:"#333", lineHeight:1.6 }}>{t}</span>
              </div>
            ))}
          </div>
          <BlueBox title="Importante">Ao concluir todos os 4 módulos e passar nas avaliações com nota mínima de <strong>70%</strong>, você recebe o <strong>Certificado de Formação de Multiplicador Ambiental</strong>. Esse certificado é obrigatório para iniciar a atuação nas escolas — sem ele, não há liberação.</BlueBox>
          <ContinueBtn onClick={()=>advance(1)} label="Entender a Origem do Projeto →"/>
        </SectionBlock>

        {/* ── SECTION 1: Origem ── */}
        <SectionBlock id="sec-1" visible={visible >= 1}>
          <div style={{ height:32 }}/>
          <SectionTitle icon="🌱">Seção 1 — Origem e Missão do Projeto</SectionTitle>
          <SubTitle>De onde surgiu o Projeto Asa Verde?</SubTitle>
          <Body>O Projeto Asa Verde não surgiu do acaso. Ele nasceu de uma iniciativa do <strong>Ministério Público do Estado da Paraíba — o MPPB</strong>, que identificou uma lacuna crítica: as escolas públicas de Santa Rita não tinham uma estratégia contínua e estruturada de educação ambiental. As crianças aprendiam sobre meio ambiente de forma esporádica, sem conexão com a realidade do território onde viviam.</Body>
          <Body>A proposta foi criar um projeto que fosse além de palestras isoladas ou atividades pontuais. A ideia era construir uma <strong style={{color:"#2e7d32"}}>presença permanente da educação ambiental dentro das escolas</strong> — integrada ao cotidiano pedagógico, conectada com ações práticas no território e conduzida por jovens que conhecem a realidade local.</Body>
          <Body>Para viabilizar isso, o MPPB articulou uma parceria com a <strong>Prefeitura Municipal de Santa Rita</strong> — que assumiu o financiamento e a gestão local — e com o <strong>Instituto Federal da Paraíba, Campus Santa Rita</strong> — que passou a ser a instituição responsável pela execução, pela formação dos estagiários e pelo acompanhamento das ações nas escolas.</Body>
          <Quote>A educação ambiental planta hoje o mundo que queremos amanhã.</Quote>
          <SubTitle>Qual é a missão do projeto?</SubTitle>
          <Body>A missão do Projeto Asa Verde é simples e poderosa ao mesmo tempo: <strong style={{color:"#2e7d32"}}>transformar escolas em núcleos vivos de educação ambiental</strong>, onde crianças e adolescentes aprendem a entender o território que habitam, a cuidar do meio ambiente e a agir como agentes de mudança na própria comunidade.</Body>
          <Body>Para isso, o projeto não trabalha com ações isoladas. Ele foi desenhado para ser <strong>contínuo</strong>, <strong>integrado</strong> ao calendário escolar e <strong>conectado com a realidade local</strong> de cada escola. As ações do projeto não são "visitas" — são parte da rotina da escola.</Body>
          <GreenBox title="Por que o estagiário é o centro do projeto?">
            <Body style={{margin:"0 0 0.7rem"}}>Diferente de outros projetos que dependem de consultores externos ou professores já sobrecarregados, o Projeto Asa Verde aposta no estagiário como agente principal. Você é jovem, está em formação técnica em Meio Ambiente, conhece o município e tem energia e proximidade com os alunos que um adulto externo raramente consegue ter.</Body>
            <Body style={{margin:0}}>É por isso que a formação que você está recebendo agora importa tanto. <strong>O projeto só funciona se o estagiário entender profundamente o que está fazendo — e por que está fazendo.</strong></Body>
          </GreenBox>
          <ContinueBtn onClick={()=>advance(2)} label="Conhecer os Parceiros →"/>
        </SectionBlock>

        {/* ── SECTION 2: Parceiros ── */}
        <SectionBlock id="sec-2" visible={visible >= 2}>
          <div style={{ height:32 }}/>
          <SectionTitle icon="🤝">Seção 2 — Quem Sustenta o Projeto</SectionTitle>
          <Body>O Projeto Asa Verde é sustentado por uma estrutura de três pilares institucionais. Entender o papel de cada um é importante para você saber a quem recorrer, o que pode ou não pode fazer e como o projeto se organiza.</Body>
          <PartnerCard emoji="⚖️" name="Ministério Público da Paraíba — MPPB" role="IDEALIZADOR E GUARDIÃO DA MISSÃO" desc="Foi o MPPB quem concebeu o Projeto Asa Verde, definiu seus objetivos e articulou as parcerias necessárias para torná-lo realidade. O Ministério Público é o órgão que garante que o projeto mantenha sua essência e seu compromisso com a educação ambiental crítica e de qualidade. O MPPB acompanha os resultados, recebe os relatórios de impacto e avalia se a missão está sendo cumprida. Isso significa que tudo que você faz nas escolas reflete diretamente na imagem do Ministério Público perante a sociedade."/>
          <PartnerCard emoji="🏙️" name="Prefeitura Municipal de Santa Rita" role="FINANCIADORA E GESTORA LOCAL" desc="A Prefeitura de Santa Rita é quem viabiliza financeiramente o projeto, garantindo os recursos para as ações nas escolas, os insumos para o plantio e as condições para o trabalho dos estagiários. Além do financiamento, a Prefeitura é responsável pela articulação com a rede municipal de ensino — é ela que autoriza a entrada do projeto nas escolas, garante o apoio das direções escolares e integra as ações do Asa Verde ao calendário pedagógico municipal."/>
          <PartnerCard emoji="🎓" name="Instituto Federal da Paraíba — Campus Santa Rita" role="INSTITUIÇÃO EXECUTORA — ONDE VOCÊ ESTÁ" desc="O IFPB Campus Santa Rita é responsável por toda a execução do projeto: seleciona os estagiários, oferece a formação técnica (incluindo este curso), coordena as equipes em campo, monitora as ações nas escolas e produz os relatórios de impacto. A coordenação do projeto no IFPB é o seu ponto de referência direto. É com ela que você vai tirar dúvidas, reportar problemas e receber orientações. Mantenha sempre uma comunicação clara e pontual com a coordenação."/>
          <ContinueBtn onClick={()=>advance(3)} label="Ver Onde o Projeto Atua →"/>
        </SectionBlock>

        {/* ── SECTION 3: Território + Números ── */}
        <SectionBlock id="sec-3" visible={visible >= 3}>
          <div style={{ height:32 }}/>
          <SectionTitle icon="📍">Seção 3 — Onde e Como o Projeto Atua</SectionTitle>
          <SubTitle>O território de atuação</SubTitle>
          <Body>O Projeto Asa Verde atua na rede municipal de ensino de Santa Rita, abrangendo escolas da zona urbana e da zona rural. Essa diversidade territorial é intencional: o projeto acredita que a educação ambiental precisa chegar a todos os territórios do município com a mesma qualidade, independentemente de onde a escola está localizada.</Body>
          <Body>Em 2025, o projeto esteve presente em <strong>10 escolas municipais</strong>, distribuídas em 8 bairros. Cada escola recebeu estagiários de forma contínua — não foram visitas esporádicas, mas uma presença permanente integrada ao cotidiano escolar.</Body>

          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, margin:"0.5rem 0 1.2rem" }}>
            {["EMEF Aníbal Limeira","EMEF Emília Cavalcante de Morais Neta","EMEF Estevão José Carneiro da Cunha","EMEF Índio Piragibe","EMEF Monsenhor Rafael de Barros","EMEF Odilon Ribeiro Coutinho","EMEIF Cívico-Militar Capitão Tomaz Panta","EMEIF/EJA Dr. Antônio Pereira de Almeida","EMEIF/EJA Jaime Lacet","EMEIF/EJA Padre João Félix Medeiros"].map((s,i)=>(
              <div key={i} style={{ display:"flex", gap:8, alignItems:"center", background:"#f1f8e9", border:"1px solid #c8e6c9", borderRadius:8, padding:"0.5rem 0.8rem", fontSize:"0.82rem", fontFamily:"'Source Serif 4',serif", color:"#2e7d32" }}>
                <span style={{ fontWeight:700, color:"#1b5e20", minWidth:18 }}>{i+1}.</span>{s}
              </div>
            ))}
          </div>
          <SubTitle>Os resultados de 2025 — o que é possível construir</SubTitle>
          <Body>Esses números representam o trabalho de estagiários como você que vieram antes. Guarde-os: eles vão aparecer nas conversas com professores, diretores e comunidades.</Body>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:10, margin:"0.5rem 0 1rem" }}>
            {STATS.map((s,i)=><StatCard key={i} {...s}/>)}
          </div>
          <BlueBox title="O alcance indireto do projeto">Cada estudante leva o que aprendeu para a família. Considerando um núcleo familiar médio de 3 a 4 pessoas, estima-se que as ações do Projeto Asa Verde em 2025 alcançaram indiretamente entre <strong>14 e 19 mil pessoas</strong> no município de Santa Rita. É o efeito multiplicador que dá nome ao papel que você vai exercer.</BlueBox>
          <ContinueBtn onClick={()=>advance(4)} label="Conhecer os Eixos de Atuação →"/>
        </SectionBlock>

        {/* ── SECTION 4: Três Eixos ── */}
        <SectionBlock id="sec-4" visible={visible >= 4}>
          <div style={{ height:32 }}/>
          <SectionTitle icon="⚡">Seção 4 — Os Três Eixos de Atuação</SectionTitle>
          <Body>O projeto organiza suas ações em três eixos temáticos. Você vai atuar nos três — e é fundamental que entenda o que é esperado em cada um deles.</Body>
          <SubTitle>Eixo 1 — Educação Ambiental</SubTitle>
          <Body>Este é o eixo central e o de maior volume de ações. Ele reúne todas as atividades que levam conhecimento e reflexão ambiental para dentro das salas de aula, dos pátios e das comunidades escolares.</Body>
          <EixoCard icon="🔨" title="Oficina" type="APRENDIZADO PRÁTICO">Aprendizado com mãos na massa. O aluno não só ouve — ele faz, experimenta, produz. Exemplos: construção de composteira, confecção de materiais com recicláveis, montagem de horta. A oficina é o formato mais poderoso para mudança de comportamento porque conecta conhecimento com experiência direta.</EixoCard>
          <EixoCard icon="🎤" title="Palestra" type="SENSIBILIZAÇÃO E DIÁLOGO">Espaço de sensibilização, informação e diálogo. Você apresenta um tema — resíduos, água, clima, biodiversidade — de forma acessível e conectada com a realidade dos alunos. Uma boa palestra não é aula expositiva: é conversa, é pergunta, é provocação.</EixoCard>
          <EixoCard icon="🏆" title="Gincana" type="ENGAJAMENTO LÚDICO">Formato lúdico e competitivo que engaja coletivamente. A gincana ambiental usa desafios, pontuação e trabalho em equipe para fazer os alunos colocarem em prática o que aprenderam. É um dos formatos com maior adesão porque transforma aprendizado em brincadeira e competição saudável.</EixoCard>
          <EixoCard icon="📣" title="Campanha" type="MOBILIZAÇÃO COLETIVA">Mobilização de toda a comunidade escolar em torno de um tema ou meta. Exemplo clássico: campanha de coleta seletiva, onde cada turma compete pela maior coleta de materiais recicláveis. A campanha cria um efeito de onda — o que começa na escola chega em casa.</EixoCard>
          <SubTitle>Eixo 2 — Arborização e Infraestrutura Verde</SubTitle>
          <Body>O plantio de árvores no Projeto Asa Verde não é um evento — é um processo educativo. Cada ação de arborização é planejada para envolver os alunos em todas as etapas: preparo do solo, seleção das mudas, técnica de plantio, irrigação e acompanhamento do crescimento das plantas.</Body>
          <Body>Quando um aluno planta uma árvore com as próprias mãos e acompanha seu crescimento ao longo do ano, ele cria um vínculo de responsabilidade com o ambiente escolar que nenhuma palestra consegue criar sozinha. Todas as espécies utilizadas são <strong>nativas do bioma local</strong> — fortalecem a biodiversidade regional e são mais resistentes ao clima nordestino.</Body>
          <SubTitle>Eixo 3 — Comunicação e Visibilidade</SubTitle>
          <Body>Tudo que acontece no projeto precisa ser registrado, documentado e divulgado. Esse eixo é estratégico: sem registro, não há dados; sem dados, não há como provar impacto; sem impacto demonstrado, é muito mais difícil garantir continuidade e recursos para o projeto.</Body>
          <GreenBox>Sua responsabilidade nesse eixo é clara: <strong>registre todas as suas ações com fotos e dados quantitativos.</strong> Quantos alunos participaram? Quantos quilos de material foram coletados? Quantas mudas foram plantadas? Esses dados alimentam o sistema de monitoramento do projeto.</GreenBox>
          <ContinueBtn onClick={()=>advance(5)} label="Entender Seu Papel →"/>
        </SectionBlock>

        {/* ── SECTION 5: Papel ── */}
        <SectionBlock id="sec-5" visible={visible >= 5}>
          <div style={{ height:32 }}/>
          <SectionTitle icon="🎯">Seção 5 — O Seu Papel e Suas Responsabilidades</SectionTitle>
          <SubTitle>O que significa ser um Multiplicador Ambiental?</SubTitle>
          <Body>O título de Multiplicador Ambiental carrega uma lógica clara: você não é o destino final do conhecimento que vai receber neste treinamento. Você é o <strong style={{color:"#2e7d32"}}>canal</strong> pelo qual esse conhecimento vai chegar a centenas de crianças e adolescentes que, sem o projeto, talvez nunca tivessem contato com educação ambiental de qualidade.</Body>
          <Body>Ser multiplicador significa que você também vai ser avaliado pelo que os outros aprendem com você. Uma oficina bem executada, uma palestra que provoca reflexão, um plantio que os alunos lembram por anos — esses são os resultados do seu trabalho.</Body>
          <SubTitle>O que você vai fazer nas escolas</SubTitle>
          <div style={{ margin:"0.3rem 0 1rem" }}>
            {["Planejar e executar oficinas de educação ambiental adequadas à faixa etária e ao contexto de cada escola, com objetivos claros e materiais preparados com antecedência.","Realizar palestras de sensibilização para turmas, professores e a comunidade escolar — com linguagem acessível, sem jargão técnico desnecessário.","Organizar e conduzir gincanas ambientais e campanhas de coleta seletiva. Você é o responsável pela logística, pelas regras e pelo engajamento das turmas.","Participar das ações de plantio como educador — não apenas como executor. Os alunos devem aprender enquanto plantam.","Registrar todas as ações com fotos, números de participantes e descrição das atividades. Esses dados são entregues periodicamente à coordenação.","Manter comunicação ativa com a direção da escola, informando as ações previstas e alinhando o calendário.","Participar de todos os encontros presenciais de treinamento ao longo do projeto. A presença é obrigatória."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
          </div>
          <OrangeBox title="Comportamentos que comprometem o projeto">
            {["Improvisar ações sem planejamento — uma oficina sem preparo transmite descuido e prejudica a imagem do projeto na escola.","Agir de forma independente sem comunicar a coordenação — você faz parte de uma estrutura. Decisões importantes precisam ser alinhadas.","Deixar de registrar ações — sem dados, o projeto não consegue provar seu impacto nem garantir continuidade.","Usar linguagem inadequada ou conteúdo impreciso — você representa o IFPB, a Prefeitura e o MPPB dentro da escola.","Faltar aos encontros presenciais sem justificativa prévia — a formação contínua é parte do contrato de estágio."].map((t,i)=><Bullet key={i}>{t}</Bullet>)}
          </OrangeBox>
          <SubTitle>Sobre a Carta aos Estagiários</SubTitle>
          <Body>Como parte da sua apresentação nas escolas, você receberá uma <strong>Carta Institucional do Projeto Asa Verde</strong> endereçada à direção e equipe pedagógica. Essa carta apresenta formalmente o projeto e sua função como multiplicador ambiental. Imprima, assine e entregue pessoalmente na primeira visita à escola.</Body>
          <div style={{ textAlign:"center", margin:"0.5rem 0 1rem" }}>
            <a 
              href="https://drive.google.com/file/d/1dal0vEFmHS1NbDL3DdF_XgMb9lsdP_uR/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              style={{ display:"inline-block", background:"#fff", border:"2px solid #2e7d32", color:"#2e7d32", borderRadius:50, padding:"0.6rem 1.6rem", fontFamily:"'Source Serif 4',serif", fontWeight:600, fontSize:"0.88rem", textDecoration:"none", cursor:"pointer" }}>📄 Baixar Carta Institucional (PDF)</a>
          </div>
          <ContinueBtn onClick={()=>advance(6)} label="Ir para a Avaliação →" last={true}/>
        </SectionBlock>

        {/* ── QUIZ ── */}
        <SectionBlock id="sec-6" visible={visible >= 6}>
          <div style={{ height:32 }}/>
          <div style={{ background:"#fff", border:"2px solid #2e7d32", borderRadius:16, padding:"1.5rem" }}>
            <SectionTitle icon="📝">Avaliação do Módulo 1</SectionTitle>
            <Body>Responda as questões abaixo para concluir o Módulo 1 e avançar para o Módulo 2. Você precisa de pelo menos <strong>70%</strong> de aproveitamento. Tem até <strong>2 tentativas</strong>.</Body>
            <QuizPanel key={quizTries} tries={quizTries} onSubmit={handleQuizResult}/>
          </div>
        </SectionBlock>

      </div>
    </div>
  );
}
