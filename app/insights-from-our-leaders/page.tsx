import React from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

interface LeaderItem {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const leaders: LeaderItem[] = [
  {
    name: 'Ira Agarwal',
    role: 'Founder & Board Chair',
    image: '/emergeai-risk-radar/images/team/ira-agarwal-profile.png',
    quote:
      'EmergeAI Risk Radar is an exceptional Agentic AI Platform with the potential to transform the software quality landscape. Its advanced capabilities empower businesses to innovate, streamline operations, and drive sustainable growth through cutting-edge automation and intelligent decision-making.',
  },
  {
    name: 'Hanish Suri',
    role: 'Senior Technical Advisor',
    image: '/emergeai-risk-radar/images/team/hanish-suri-profile-v1.png',
    quote:
      'EmergeAI serves as a genuine partner—uplifting innovations, speeding meaningful outcomes, and guiding organizations toward lasting advancement. With its agentic approach, this platform is reshaping the way QA teams envision, create, and achieve future success.',
  },
  {
    name: 'Sunil Khokhar',
    role: 'Co-Founder & Board Chair',
    image: '/emergeai-risk-radar/images/team/sunil-khokhar-profile.png',
    quote:
      'EmergeAI Risk Radar is an advanced Agentic AI platform designed to transform the way organizations identify, assess, and manage risks. By combining intelligent automation with advanced AI capabilities, it empowers businesses to make informed decisions, streamline processes, and proactively address emerging challenges.',
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero title="Insights From Our Leaders" />

      <section className="site-section" style={{ background: '#020307' }}>
        <div className="container">
          <div style={{ marginBottom: '45px' }}>
            <span className="eyebrow">Voices of Our Leaders</span>
            <h2 className="section-title" style={{ maxWidth: '850px' }}>
              Discover the ideas and perspectives of the leaders transforming AI into meaningful business innovation.
            </h2>
          </div>

          <div className="grid-3" style={{ marginBottom: '80px' }}>
            {leaders.map((person) => (
              <article key={person.name} className="leader-card">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', marginBottom: '20px' }}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center', borderRadius: '16px' }}
                  />
                </div>
                <h3 className="leader-name">{person.name}</h3>
                <div className="leader-role">{person.role}</div>
                <blockquote className="leader-quote">
                  &ldquo;{person.quote}&rdquo;
                </blockquote>
              </article>
            ))}
          </div>

          <CTASection />
        </div>
      </section>
    </>
  );
}
