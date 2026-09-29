const cards = [
  ['◈','RAG-Powered','Contextual answers from your docs'],
  ['▣','Multi-format','PDF, DOCX, XLSX ready'],
  ['◉','Enterprise Ready','Secure & robust architecture'],
  ['✦','AI Insights','Predictive risk scoring models'],
];
export default function Innovation() {
 return <section id="innovation" className="innovation section">
   <div className="section-heading"><div className="eyebrow">Innovation by EmergeAI Technologies</div><h2>Explore how EmergeAI’s innovative AI solutions are transforming businesses, solving complex challenges, and delivering measurable impact.</h2></div>
   <div className="intro-copy">EmergeAI Risk Radar is an AI-powered software risk assessment tool built for QA and release teams. It analyzes requirements, bug reports, and code changes together grounded in your own project documentation through retrieval-augmented generation to flag release risk before it reaches production and auto-generate the test cases needed to close the gaps.</div>
   <div className="feature-grid">{cards.map(([icon,title,text])=><div className="feature-card" key={title}><div className="feature-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>)}</div>
 </section>;
}
