const items = [
 ['01','Risk Assessment Engine','Analyzes release pipelines and predicts QA risk scores using AI, helping teams prioritize testing efforts and reduce production defects.'],
 ['02','Multi-format Document Ingestion','Supports PDF, DOCX, XLSX and more. Upload release notes, test plans, and QA reports for instant AI-powered analysis.'],
 ['03','Intelligent RAG Pipeline','Retrieval-Augmented Generation with ChromaDB vector store — answers QA questions grounded in your actual project documentation.'],
 ['04','Enterprise Security','JWT authentication, email OTP verification, rate limiting, and encrypted data handling built in from the ground up.'],
 ['05','FastAPI Backend','High-performance Python backend with SQLAlchemy, SQLite, and LangChain — designed for speed, reliability and easy deployment.'],
 ['06','Built for Technical Teams','Designed specifically for technical teams who need fast, reliable risk insights without complexity.'],
];
export default function Product(){return <section className="product section"><div className="section-heading center"><div className="eyebrow">The Product</div><h2>EmergeAI Risk Radar</h2><p>Agentic AI-powered QA Risk Assessment Tool for Modern Software release pipelines. Built by EmergeAI Technologies.</p></div><div className="product-grid">{items.map(([n,t,d])=><article className="product-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contact">Learn more <b>→</b></a></article>)}</div></section>}
