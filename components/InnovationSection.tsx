import React from 'react';
import { BoltIcon, FileAltIcon, ShieldAltIcon, ChartBarIcon } from './Icons';

interface FeatureItem {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  title: string;
  desc: string;
}

const features: FeatureItem[] = [
  {
    icon: BoltIcon,
    title: 'RAG-Powered',
    desc: 'Contextual answers from your docs',
  },
  {
    icon: FileAltIcon,
    title: 'Multi-format',
    desc: 'PDF, DOCX, XLSX ready',
  },
  {
    icon: ShieldAltIcon,
    title: 'Enterprise Ready',
    desc: 'Secure & robust architecture',
  },
  {
    icon: ChartBarIcon,
    title: 'AI Insights',
    desc: 'Predictive risk scoring models',
  },
];

export default function InnovationSection() {
  return (
    <section id="sec-innovation" className="site-section" style={{ background: 'radial-gradient(at center top, #013169 0%, #020307 70%)' }}>
      <div className="container">
        <div>
          <span className="eyebrow">Innovation by EmergeAI Technologies</span>
          <p className="section-lead" style={{ fontSize: '18px', maxWidth: '800px', marginBottom: '24px' }}>
            Explore how EmergeAI’s innovative AI solutions are transforming businesses, solving complex challenges, and delivering measurable impact.
          </p>

          <div className="highlight-text-banner">
            <h2>
              <span className="highlight-span">EmergeAI Risk Radar</span> is an AI-powered software risk assessment tool built for QA and release teams. It analyzes requirements, bug reports, and code changes together grounded in your own project documentation through retrieval-augmented generation to flag release risk before it reaches production and auto-generate the test cases needed to close the gaps.
            </h2>
          </div>
        </div>

        <div className="grid-4">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="feature-box">
                <div className="feature-icon-wrap">
                  <Icon style={{ width: 26, height: 26 }} />
                </div>
                <h3 className="feature-title">{item.title}</h3>
                <p className="feature-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
