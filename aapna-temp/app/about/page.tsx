import React from 'react';
import PageHero from '../../components/PageHero';
import aboutData from '../../data/about.json';
import Image from 'next/image';

export default function AboutPage() {
  // Filter out the footer contact noise at the end (usually "Contact Us" section containing scripts)
  const contentSections = aboutData.sections.filter(s => 
    s.heading !== 'Contact  Us' && 
    !s.paragraphs.some(p => p.includes('jQuery.fn.stars'))
  );

  return (
    <main>
      <PageHero title="About Us" subtitle="Who We Are" />
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {contentSections.map((section, idx) => (
              <div key={idx} style={{ marginBottom: '4rem' }}>
                {section.heading && (
                  <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-main)' }}>
                    {section.heading}
                  </h2>
                )}
                
                {section.paragraphs.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                
                {section.images.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
                    {section.images.map((img, imgIdx) => (
                      <div key={imgIdx} style={{ position: 'relative', height: '300px', flex: '1 1 300px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                        <Image 
                          src={img.url} 
                          alt={img.alt || 'About Image'} 
                          fill
                          style={{ objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
          </div>
        </div>
      </section>
    </main>
  );
}
