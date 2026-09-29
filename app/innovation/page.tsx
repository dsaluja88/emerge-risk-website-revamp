import React from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';

const steps = [
  {
    num: '01',
    title: 'Select a Requirement File',
    desc: 'Upload and select requirement documents to provide the platform with the functional and business requirements of the project. These requirements become part of the analysis and help identify potential risks and coverage gaps.',
    img: '/images/screens/select-requirement-file-screen.png',
  },
  {
    num: '02',
    title: 'Select a Bug Report File',
    desc: 'Upload bug reports containing previous or current defects related to the project. The platform uses this information to identify recurring issues and understand potential risk areas associated with the release.',
    img: '/images/screens/select-bug-report-file-screen.png',
  },
  {
    num: '03',
    title: 'Select a Test Cases File',
    desc: 'Upload existing test cases to help the platform evaluate current test coverage. This allows the system to identify requirements that may be untested or only partially covered.',
    img: '/images/screens/select-test-case-file-screen.png',
  },
  {
    num: '04',
    title: 'Add GitHub and Jira Credentials',
    desc: 'Connect GitHub and Jira based on project requirements to include additional development and defect information in the analysis. GitHub integration helps identify relevant source-code references, while Jira can provide stories and defect information.',
    img: '/images/screens/add-credentials-jira-and-github-screen.png',
  },
  {
    num: '05',
    title: 'Add Files to the Historical Knowledge Base',
    desc: 'Upload previous project artefacts to build a historical knowledge base. Historical requirements, defects, and test information can provide valuable context and help identify recurring patterns and risks during future analyses.',
    img: '/images/screens/historical-knowledge-base-screen.png',
  },
  {
    num: '06',
    title: 'Run Risk Analysis',
    desc: 'Users can add an optional query to provide additional context or focus the analysis on a specific area. After selecting the required documents and information, the Analyze function generates an AI-powered assessment of potential release risks.',
    img: '/images/screens/analyze-button-screen.png',
  },
  {
    num: '07',
    title: 'Review and Download the Risk Analysis Report',
    desc: 'The platform presents a structured risk analysis containing important findings, risk information, and recommendations. Users can also download the generated risk analysis report as a PDF.',
    img: '/images/screens/downloadble-pdf-copy-screen.png',
  },
  {
    num: '08',
    title: 'Generate Test Assets Using Specialized AI Agents',
    desc: 'Based on the identified risks, coverage gaps, and supporting information, the platform can generate various test assets using specialized AI agents.',
    img: '/images/screens/specialized-agents-screen.png',
  },
  {
    num: '09',
    title: 'Review and Download Generated Test Assets',
    desc: 'Users can review the generated test cases and other testing assets directly within the platform. The generated assets can be downloaded and used by quality assurance teams.',
    img: '/images/screens/better-risk-analysis-screen.png',
  },
  {
    num: '10',
    title: 'Access Historical Reports',
    desc: 'After completing an analysis, previous reports are stored in the Historical Reports section for easier access.',
    img: '/images/screens/historical-reports-screen.png',
  },
  {
    num: '11',
    title: 'AI Observability',
    desc: "The AI Observability section provides visibility into the platform's AI analysis and monitoring information. It helps users review AI-related activity and identify potential risks involving sensitive or personal information.",
    img: '/images/screens/ai-observability-screen.png',
  },
  {
    num: '12',
    title: 'Feedback & Reviews',
    desc: 'Users can provide feedback and reviews on the platform and its generated outputs. This feedback is stored and reviewed to help evaluate user experience and support continuous improvement.',
    img: '/images/screens/feedback-and-reviews-screen.png',
  },
];

export default function InnovationPage() {
  return (
    <>
      <PageHero title="Innovation" />

      <section className="site-section" style={{ background: '#020307' }}>
        <div className="container">
          <div style={{ maxWidth: '850px', marginBottom: '40px' }}>
            <span className="eyebrow">Platform Capabilities</span>
            <h2 className="section-title">EmergeAI Risk Radar</h2>
            <p className="section-lead">
              EmergeAI Risk Radar is an AI-powered software risk assessment tool built for QA and release teams. It analyzes requirements, bug reports, and code changes together grounded in your own project documentation through retrieval-augmented generation to flag release risk before it reaches production and auto-generate the test cases needed to close the gaps.
            </p>
          </div>

          {/* Access Callout Banner */}
          <div
            className="elementor-card"
            style={{
              padding: '36px 32px',
              marginBottom: '70px',
              display: 'flex',
              flexDirection: 'column',
              gap: '14px',
            }}
          >
            <h3 style={{ fontSize: '22px', fontWeight: 600, color: '#FFFFFF', margin: 0 }}>
              Request Access / Login
            </h3>
            <p style={{ color: 'var(--color-text)', margin: 0, lineHeight: 1.6, maxWidth: '750px' }}>
              Users can request access to the EmergeAI Risk Radar platform by providing the required information. Once access is approved, authorized users can securely log in and use the platform for AI-powered release risk analysis.
            </p>
            <div style={{ marginTop: '8px' }}>
              <a
                href="https://www.aiqariskradar.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="btn hover-gradient"
              >
                Login
              </a>
            </div>
          </div>

          {/* 12 Workflow Steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '65px' }}>
            {steps.map((item) => (
              <div key={item.num} className="step-item">
                <div className="step-badge">{item.num}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <div style={{ position: 'relative', width: '100%', maxWidth: '960px' }}>
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={960}
                      height={540}
                      className="step-screen-img"
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
