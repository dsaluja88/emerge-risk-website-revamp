import React from 'react';
import Link from 'next/link';

interface PageHeroProps {
  title: string;
  eyebrow?: string;
}

export default function PageHero({ title }: PageHeroProps) {
  return (
    <section className="subpage-hero">
      <div className="container">
        <div style={{ color: 'var(--color-text)', fontSize: '14px', marginBottom: '14px' }}>
          <Link href="/" style={{ color: 'var(--color-primary)' }}>
            Home
          </Link>{' '}
          <span style={{ margin: '0 8px', opacity: 0.5 }}>/</span>{' '}
          <span>{title}</span>
        </div>
        <h1 className="subpage-title">{title}</h1>
      </div>
    </section>
  );
}
