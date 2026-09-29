import React from 'react';
import PageHero from '../../components/PageHero';
import servicesData from '../../data/services.json';
import Image from 'next/image';

export default function ServicesPage() {
  const contentSections = servicesData.sections.filter(s => 
    s.heading !== 'Contact  Us' && 
    !s.paragraphs.some(p => p.includes('jQuery.fn.stars'))
  );

  return (
    <main>
      <PageHero title="Our Services" subtitle="What We Do" />
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            {contentSections.map((section, idx) => (
              <div key={idx} style={{ 
                marginBottom: '4rem', 
                backgroundColor: 'white', 
                padding: '3rem', 
                borderRadius: '16px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
              }}>
                {section.heading && (
                  <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--primary-green)' }}>
                    {section.heading}
                  </h2>
                )}
                
                {section.paragraphs.length > 0 && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} style={{ fontSize: '1.05rem', color: 'var(--text-main)', lineHeight: 1.7 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                
                {section.images.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', marginTop: '2rem' }}>
                    {section.images.map((img, imgIdx) => (
                      <div key={imgIdx} style={{ position: 'relative', height: '200px', flex: '1 1 200px', borderRadius: '8px', overflow: 'hidden' }}>
                        <Image 
                          src={img.url} 
                          alt={img.alt || 'Service Image'} 
                          fill
                          style={{ objectFit: 'contain' }}
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
