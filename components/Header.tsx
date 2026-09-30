'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDownIcon, MenuIcon, CloseIcon } from './Icons';
import { APP_URL } from '@/lib/site';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [whoWeAreOpen, setWhoWeAreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className="site-header"
        style={{
          position: scrolled ? 'fixed' : 'absolute',
          background: scrolled ? 'rgba(2, 3, 7, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          paddingTop: scrolled ? '16px' : '30px',
          paddingBottom: scrolled ? '16px' : '0',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <div className="site-header-inner">
          <Link href="/" className="site-logo" aria-label="EmergeAI Risk Radar">
            <Image
              src="/images/logo-light-v1.svg"
              alt="EmergeAI Risk Radar"
              width={260}
              height={45}
              priority
              style={{ height: 'auto', width: '260px' }}
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-menu">
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link"
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
                  onClick={() => setWhoWeAreOpen(!whoWeAreOpen)}
                  onMouseEnter={() => setWhoWeAreOpen(true)}
                  aria-expanded={whoWeAreOpen}
                >
                  <span>Who We Are</span>
                  <ChevronDownIcon
                    style={{
                      width: 14,
                      height: 14,
                      transform: whoWeAreOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  />
                </button>

                <ul
                  className="dropdown-menu"
                  style={{
                    opacity: whoWeAreOpen ? 1 : undefined,
                    visibility: whoWeAreOpen ? 'visible' : undefined,
                    transform: whoWeAreOpen ? 'translateY(0)' : undefined,
                  }}
                  onMouseLeave={() => setWhoWeAreOpen(false)}
                >
                  <li>
                    <a
                      href="https://emergeaitech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-link"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <Link href="/insights-from-our-leaders/" className="dropdown-link">
                      Insights From Our Leaders
                    </Link>
                  </li>
                  <li>
                    <Link href="/innovation-team/" className="dropdown-link">
                      Innovation Team
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <Link
                  href="/innovation/"
                  className={`nav-link ${pathname === '/innovation/' ? 'active' : ''}`}
                >
                  Innovation
                </Link>
              </li>

              <li className="nav-item" style={{ marginLeft: '12px' }}>
                <a
                  href={`${APP_URL}/login`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn hover-gradient"
                  style={{ padding: '10px 24px', fontSize: '15px' }}
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <MenuIcon style={{ width: 28, height: 28 }} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-head">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <Image
              src="/images/logo-light-v1.svg"
              alt="EmergeAI Risk Radar"
              width={200}
              height={35}
              style={{ height: 'auto', width: '200px' }}
            />
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              width: 38,
              height: 38,
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <CloseIcon style={{ width: 20, height: 20 }} />
          </button>
        </div>

        <div className="mobile-drawer-links">
          <div>
            <div className="mobile-submenu-title">Who We Are</div>
            <div className="mobile-submenu">
              <a
                href="https://emergeaitech.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </a>
              <Link
                href="/insights-from-our-leaders/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Insights From Our Leaders
              </Link>
              <Link
                href="/innovation-team/"
                onClick={() => setMobileMenuOpen(false)}
              >
                Innovation Team
              </Link>
            </div>
          </div>

          <Link href="/innovation/" onClick={() => setMobileMenuOpen(false)}>
            Innovation
          </Link>

          <div style={{ marginTop: '20px' }}>
            <a
              href={`${APP_URL}/login`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hover-gradient"
              style={{ width: '100%' }}
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
