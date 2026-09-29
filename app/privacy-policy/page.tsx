import React from 'react';
import PageHero from '@/components/PageHero';

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />

      <section className="site-section" style={{ background: '#020307', padding: '80px 0' }}>
        <div
          className="container elementor-card"
          style={{
            maxWidth: '900px',
            padding: '50px 40px',
            lineHeight: 1.75,
            color: 'var(--color-text)',
          }}
        >
          <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginTop: 0 }}>
            Effective Date: August 27, 2026
          </p>
          <p>
            EmergeAI Risk Radar respects your privacy and is committed to protecting personal and business information. This page explains how information may be collected, used, stored, protected and managed when you visit the website, request a demonstration, contact the company, or use its products and services.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            1. Information We Collect
          </h2>
          <p>
            Depending on how you interact with the service, information may include name, job title, company or organisation, email address, phone number, business contact details and information submitted through forms. Technical information may include IP address, browser and device details, pages visited, referral sources, timestamps and cookies.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            2. How Information Is Used
          </h2>
          <p>
            Information may be used to respond to enquiries, provide demonstrations, deliver and support products, understand customer requirements, improve services, communicate updates, maintain security, prevent misuse and comply with applicable law.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            3. AI and Risk Analytics
          </h2>
          <p>
            The platform uses AI, machine learning, analytics and risk-monitoring technologies. Processing may vary by service configuration, contractual terms and deployment model. Sensitive personal or confidential information should not be submitted through public forms unless specifically requested and authorised.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            4. Cookies
          </h2>
          <p>
            Cookies and similar technologies may support essential functionality, security, analytics, performance and preferences. Browser settings can be used to control cookies.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            5. Sharing and Security
          </h2>
          <p>
            Personal information is not sold or rented. Information may be shared with trusted service providers where necessary to operate infrastructure, analytics, CRM, email and communications, or to meet legal obligations. Reasonable technical, organisational and administrative measures are used to protect information, although no electronic system can be guaranteed completely secure.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            6. Your Rights
          </h2>
          <p>
            Depending on applicable law, users may have rights to request access, correction, deletion, restriction, objection, withdrawal of consent or portability. Identity verification may be required.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            7. Contact
          </h2>
          <p>
            <strong>EmergeAI Risk Radar</strong><br />
            Email: <a href="mailto:info@emergeaitech.com" style={{ color: 'var(--color-primary)' }}>info@emergeaitech.com</a><br />
            Website: <a href="https://www.aiqariskradar.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>www.aiqariskradar.com</a>
          </p>
        </div>
      </section>
    </>
  );
}
