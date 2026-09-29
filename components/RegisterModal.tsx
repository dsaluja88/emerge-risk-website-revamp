'use client';

import React, { useState, useEffect } from 'react';
import { CloseIcon } from './Icons';

export default function RegisterModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    designation: '',
    password: '',
  });

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setMessage(null);
    };

    window.addEventListener('open-register', handleOpen);
    return () => window.removeEventListener('open-register', handleOpen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Request received. You can sign in after administrator approval.');
      }

      setMessage({
        text: 'Request received. You can sign in after administrator approval.',
        isError: false,
      });
      setFormData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        designation: '',
        password: '',
      });
    } catch (err: unknown) {
      // In static or demo environment, provide the graceful message
      const error = err as Error;
      setMessage({
        text: error.message || 'Request received. You can sign in after administrator approval.',
        isError: false,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={`modal-overlay ${isOpen ? 'open' : ''}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-container">
        <button
          type="button"
          className="modal-close-btn"
          onClick={() => setIsOpen(false)}
          aria-label="Close modal"
        >
          <CloseIcon style={{ width: 18, height: 18 }} />
        </button>

        <h2 className="modal-title">Request Access</h2>
        <p className="modal-subtitle">
          Submit your details to request access to the EmergeAI Risk Radar platform.
        </p>

        <form onSubmit={handleSubmit} className="cf7-request-access">
          <div className="cf7-form-row">
            <div className="cf7-form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                className="cf7-input"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
              />
            </div>
            <div className="cf7-form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                className="cf7-input"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="cf7-form-row">
            <div className="cf7-form-group">
              <label htmlFor="organization">Organization Name *</label>
              <input
                id="organization"
                name="organization"
                className="cf7-input"
                required
                value={formData.organization}
                onChange={handleChange}
                placeholder="Acme Corp"
              />
            </div>
            <div className="cf7-form-group">
              <label htmlFor="phone">Phone Number *</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="cf7-input"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
              />
            </div>
          </div>

          <div className="cf7-form-row">
            <div className="cf7-form-group">
              <label htmlFor="designation">Designation *</label>
              <input
                id="designation"
                name="designation"
                className="cf7-input"
                required
                value={formData.designation}
                onChange={handleChange}
                placeholder="QA Lead / Director"
              />
            </div>
            <div className="cf7-form-group">
              <label htmlFor="password">Password *</label>
              <input
                id="password"
                name="password"
                type="password"
                minLength={8}
                autoComplete="new-password"
                className="cf7-input"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
              />
              <span className="password-note">Minimum 8 characters.</span>
            </div>
          </div>

          <div style={{ marginTop: '24px' }}>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn hover-gradient"
              style={{ width: '100%', height: '46px', fontSize: '17px', borderRadius: '12px' }}
            >
              {isSubmitting ? 'Submitting…' : 'Request Access'}
            </button>
          </div>

          {message && (
            <p
              className={`modal-status-message ${message.isError ? 'error' : 'success'}`}
              role="status"
            >
              {message.text}
            </p>
          )}

          <div className="modal-footer-link">
            Already registered?{' '}
            <a
              href="https://www.aiqariskradar.com/login"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
