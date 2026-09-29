import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { InstagramIcon, FacebookIcon, LinkedInIcon, TwitterXIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link href="/" className="site-logo">
              <Image
                src="/images/logo-light-v1.svg"
                alt="EmergeAI Risk Radar"
                width={240}
                height={42}
                style={{ height: 'auto', width: '240px' }}
              />
            </Link>
            <p>
              Leveraging cutting-edge AI technologies into your workflow, driving efficiency, innovation, and growth.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="https://emergeaitech.com/" target="_blank" rel="noopener noreferrer">
                  About Us
                </a>
              </li>
              <li>
                <Link href="/insights-from-our-leaders/">
                  Insights From Our Leaders
                </Link>
              </li>
              <li>
                <Link href="/innovation-team/">
                  Innovation Team
                </Link>
              </li>
              <li>
                <a href="https://emergeaitech.com/connect/" target="_blank" rel="noopener noreferrer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="footer-heading">Support</h3>
            <ul className="footer-links">
              <li>
                <Link href="/privacy-policy/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/term-conditions/">
                  Term &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-links">
              <a
                href="https://www.instagram.com/emerge_ai_technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <InstagramIcon style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://www.facebook.com/emergeai.technologies/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <FacebookIcon style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://www.linkedin.com/company/emergeaitech"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <LinkedInIcon style={{ width: 18, height: 18 }} />
              </a>
              <a
                href="https://x.com/EmergeAI_Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter / X"
              >
                <TwitterXIcon style={{ width: 18, height: 18 }} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <p className="footer-copyright">
          &copy; EmergeAI Risk Radar by EmergeAI Technologies Pvt. Ltd. All Right Reserved 2026.
        </p>
      </div>
    </footer>
  );
}
