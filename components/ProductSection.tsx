import React from 'react';
import { ShieldAltIcon, FileAltIcon, ChartBarIcon, LockIcon, BoltIcon, UsersIcon } from './Icons';

interface ProductItem {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  desc: string;
}

const products: ProductItem[] = [
  {
    icon: ShieldAltIcon,
    title: 'Risk Assessment Engine',
    desc: 'Analyzes release pipelines and predicts QA risk scores using AI, helping teams prioritize testing efforts and reduce production defects.',
  },
  {
    icon: FileAltIcon,
    title: 'Multi-format Document Ingestion',
    desc: 'Supports PDF, DOCX, XLSX and more. Upload release notes, test plans, and QA reports for instant AI-powered analysis.',
  },
  {
    icon: ChartBarIcon,
    title: 'Intelligent RAG Pipeline',
    desc: 'Retrieval-Augmented Generation with ChromaDB vector store — answers QA questions grounded in your actual project documentation.',
  },
  {
    icon: LockIcon,
    title: 'Enterprise Security',
    desc: 'JWT authentication, email OTP verification, rate limiting, and encrypted data handling built in from the ground up.',
  },
  {
    icon: BoltIcon,
    title: 'FastAPI Backend',
    desc: 'High-performance Python backend with SQLAlchemy, SQLite, and LangChain — designed for speed, reliability and easy deployment.',
  },
  {
    icon: UsersIcon,
    title: 'Built for Technical Teams',
    desc: 'Designed specifically for technical teams who need fast, reliable risk insights without complexity.',
  },
];

export default function ProductSection() {
  return (
    <section className="site-section" style={{ background: '#020307' }}>
      <div className="container">
        <div style={{ marginBottom: '45px' }}>
          <span className="eyebrow">The Product</span>
          <h2 className="section-title">EmergeAI Risk Radar</h2>
          <p className="section-lead">
            Agentic AI-powered QA Risk Assessment Tool for Modern Software release pipelines. Built by EmergeAI Technologies.
          </p>
        </div>

        <div className="grid-3">
          {products.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="product-card">
                <div className="product-icon-wrap">
                  <Icon style={{ width: 26, height: 26 }} />
                </div>
                <h3 className="product-title">{item.title}</h3>
                <p className="product-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}