import React from 'react';
import PageHero from '@/components/PageHero';

export default function TermsPage() {
  return (
    <>
      <PageHero title="Term & Conditions" />

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
            These Terms &amp; Conditions govern access to and use of the EmergeAI Risk Radar website, platform, products and services. By accessing or using the website or services, users agree to these Terms.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            1. Use of the Website
          </h2>
          <p>
            Services must be used only for lawful purposes. Users must not attempt unauthorised access, disrupt service operation, introduce malicious code, reproduce protected content without permission, misuse automated systems, misrepresent identity, or violate applicable law.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            2. Intellectual Property
          </h2>
          <p>
            Website text, graphics, logos, icons, images, designs, software, interfaces, documentation, analytics presentations, trademarks and branding are owned by or licensed to EmergeAI Risk Radar and protected by applicable intellectual-property laws.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            3. User Information
          </h2>
          <p>
            Information submitted through contact forms, demo requests and enquiries should be accurate and supplied with appropriate rights. Users are responsible for ensuring submissions do not violate third-party rights or applicable laws.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            4. AI and Risk Information
          </h2>
          <p>
            AI, machine learning, analytics and automated processing may generate risk-related insights, scores, reports and recommendations. These outputs support business analysis and decision-making and should not replace professional legal, financial, regulatory, security or other specialised advice.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            5. Availability and Accuracy
          </h2>
          <p>
            The company aims to maintain reliable access but does not guarantee continuous availability, completeness, accuracy or error-free operation. Results may depend on data sources, algorithms, configurations and third-party services.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            6. Security and Confidentiality
          </h2>
          <p>
            Users are responsible for protecting account credentials and promptly reporting suspected unauthorised access. Confidential or sensitive information should not be submitted through publicly accessible forms unless authorised.
          </p>

          <h2 style={{ color: '#FFFFFF', fontSize: '24px', margin: '36px 0 12px 0' }}>
            7. Fees, Disclaimer and Liability
          </h2>
          <p>
            Certain services may be subject to fees or separate agreements. Services are provided on an as-available basis to the extent permitted by law, and users remain responsible for determining suitability for their requirements.
          </p>
        </div>
      </section>
    </>
  );
}
