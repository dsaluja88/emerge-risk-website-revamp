import React from 'react';
import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CTASection from '@/components/CTASection';

interface MemberItem {
  name: string;
  role: string;
  image: string;
}

const team: MemberItem[] = [
  {
    name: 'Ira Agarwal',
    role: 'Founder & Board Chair',
    image: '/images/team/ira-agarwal-profile.png',
  },
  {
    name: 'Hanish Suri',
    role: 'Senior Technical Advisor',
    image: '/images/team/hanish-suri-profile-v1.png',
  },
  {
    name: 'Mohit Sharma',
    role: 'AI Developer',
    image: '/images/team/mohit-sharma-profile.png',
  },
  {
    name: 'Tushar Jangra',
    role: 'AI Developer',
    image: '/images/team/tushar-profile.png',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero title="Innovation Team" />

      <section className="site-section" style={{ background: '#020307' }}>
        <div className="container">
          <div style={{ marginBottom: '45px' }}>
            <span className="eyebrow">Meet Our Innovators</span>
            <h2 className="section-title" style={{ maxWidth: '850px' }}>
              A team of thinkers, creators, and technologists building smarter solutions for a rapidly evolving world.
            </h2>
          </div>

          <div className="grid-4" style={{ marginBottom: '80px' }}>
            {team.map((person) => (
              <article key={person.name} className="leader-card">
                <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5', marginBottom: '20px' }}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center', borderRadius: '16px' }}
                  />
                </div>
                <h3 className="leader-name">{person.name}</h3>
                <div className="leader-role" style={{ marginBottom: 0 }}>
                  {person.role}
                </div>
              </article>
            ))}
          </div>

          <CTASection />
        </div>
      </section>
    </>
  );
}
