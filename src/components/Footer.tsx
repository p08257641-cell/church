import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUp,
  CheckCircle2,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { useApp } from '../context/AppContext';
import {
  WEEKLY_SERVICES,
  getNextServiceOccurrence,
  isTopMissionOverrideMonth
} from '../utils/time';

const TOPICS = ['Sunday Service Links', 'Daily Readings', 'Events & Camps', 'Prophetic Updates'];

export const Footer: React.FC = () => {
  const { t } = useApp();
  const [selectedTopics, setSelectedTopics] = useState<string[]>(['Sunday Service Links', 'Events & Camps']);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const toggleTopic = (topic: string) => {
    setSelectedTopics(prev =>
      prev.includes(topic) ? prev.filter(item => item !== topic) : [...prev, topic]
    );
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="container">
        {/* Interactive Ministry Updates Banner */}
        <div className="footer-newsletter">
          <div>
            <span className="eyebrow eyebrow-light">{t('Stay Connected Worldwide')}</span>
            <h3 style={{ fontSize: 'var(--text-2xl)', color: '#FFFFFF', marginBottom: '0.45rem' }}>
              {t('Receive Service Links, Readings & Prophetic Alerts')}
            </h3>
            <p style={{ color: 'rgba(248,250,252,0.78)', fontSize: '0.94rem' }}>
              {t('Choose the updates you want in your inbox—tailored to your walk with Christ.')}
            </p>
            <div className="topic-chips" role="group" aria-label={t('Email topics')}>
              {TOPICS.map(topic => {
                const active = selectedTopics.includes(topic);
                return (
                  <button
                    key={topic}
                    type="button"
                    className={`topic-chip ${active ? 'active' : ''}`}
                    onClick={() => toggleTopic(topic)}
                  >
                    {active ? '✓ ' : '+ '}
                    {t(topic)}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            {subscribed ? (
              <div
                style={{
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(13, 122, 67, 0.25)',
                  border: '1px solid rgba(74, 222, 128, 0.45)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}
              >
                <CheckCircle2 size={24} style={{ color: '#4ADE80', flexShrink: 0 }} />
                <div>
                  <strong>{t('You are on the list!')}</strong>
                  <div style={{ fontSize: '0.85rem', opacity: 0.88 }}>
                    {t('Subscribed to: {topics}.', {
                      topics: selectedTopics.map(item => t(item)).join(', ') || t('General Ministry Updates')
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                <div className="newsletter-form-row">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t('Enter your email address...')}
                    className="newsletter-input"
                    aria-label={t('Email address')}
                  />
                  <button type="submit" className="btn btn-gold">
                    {t('Subscribe')}
                  </button>
                </div>
                <span style={{ fontSize: '0.76rem', color: 'rgba(248,250,252,0.6)' }}>
                  {t('Sent only by Ephesus Gatherings Worldwide. Unsubscribe anytime with one click.')}
                </span>
              </form>
            )}
          </div>
        </div>

        {/* Main 4-Column Footer */}
        <div className="footer-grid">
          <div>
            <BrandLogo onDark width={152} />
            <p style={{ marginTop: '1rem', fontSize: '0.92rem', color: 'rgba(248,250,252,0.75)', lineHeight: 1.65 }}>
              {t('A Christ-centred training centre equipping God’s overcomers across Ghana and the nations to fulfill their divine purpose, experience divine health, and make a transformative impact for the Lord Jesus Christ.')}
            </p>
            <div className="social-row">
              <a
                href="https://web.facebook.com/people/Ephesus-Gatherings/61558894460389/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="Facebook"
                title={t('Facebook (Ephesus Gatherings)')}
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="https://www.instagram.com/ephesusgatheringsworldwide/"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label="Instagram"
                title="Instagram (@ephesusgatheringsworldwide)"
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="https://ephesus-radio.mixlr.com/events/4361028"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label={t('Ephesus Radio Mixlr')}
                title={t('Mixlr Live Broadcast')}
              >
                <ExternalLink size={16} />
              </a>
              <a
                href="https://www.whatsapp.com/channel/0029VaAKoAFDZ4LUxGNPze0t"
                target="_blank"
                rel="noreferrer"
                className="social-pill"
                aria-label={t('WhatsApp Channel')}
                title={t('Official WhatsApp Channel')}
              >
                <MessageCircle size={17} />
              </a>
              <a
                href="mailto:admin@ephesusgatheringsworldwide.org"
                className="social-pill"
                aria-label={t('Email EGW')}
                title={t('Email Us')}
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{t('Worship & Word')}</h4>
            <div className="footer-links">
              <Link to="/online-service">{t('Online Broadcast Stage')}</Link>
              <Link to="/events">{t('Events & Service Calendar')}</Link>
              <Link to="/daily-readings">{t('Daily Bible Readings')}</Link>
              <Link to="/testimonies">{t('Testimonies & Good Reports')}</Link>
              <Link to="/salvation">{t('Salvation — Receive Jesus')}</Link>
              <a
                href="https://ephesus-radio.mixlr.com/events/4361028"
                target="_blank"
                rel="noreferrer"
              >
                {t('Ephesus Radio Mixlr')} <ExternalLink size={12} />
              </a>
              <a
                href="https://open.spotify.com/show/76wjFskbcoaJiCzwPTc7yG"
                target="_blank"
                rel="noreferrer"
              >
                {t('The Emergence Podcast')} <ExternalLink size={12} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{t('Ministry & Schools')}</h4>
            <div className="footer-links">
              <Link to="/about">{t('Our Story & Vision')}</Link>
              <Link to="/about#schools">{t('Education & Training Unit')}</Link>
              <Link to="/about#beliefs">{t('12 Articles of Faith')}</Link>
              <Link to="/about#founder">Prophet Edem Julius-Cudjoe</Link>
              <Link to="/about#ministries">{t('Mother Church Ministry Arms')}</Link>
              <Link to="/join">{t('Join as Member or Partner')}</Link>
              <Link to="/give">{t('Tithes, Offerings & Partnership')}</Link>
              <Link to="/resources">{t('All Resources & Outreach')}</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-heading">{t('Sanctuary & Contact')}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'rgba(248,250,252,0.8)' }}>
              <div style={{ display: 'flex', gap: '0.6rem' }}>
                <MapPin size={17} style={{ color: 'var(--gold-300)', flexShrink: 0, marginTop: 3 }} />
                <div>
                  <strong style={{ color: '#FFFFFF', display: 'block' }}>{t('The Son Place (Grace Grounds)')}</strong>
                  {t('Mikaddo Plaza, Labone Junction, Accra, Ghana')}
                  <div style={{ color: 'var(--gold-200)', fontSize: '0.82rem', marginTop: 2 }}>
                    {isTopMissionOverrideMonth(getNextServiceOccurrence(WEEKLY_SERVICES[1]))
                      ? t('Sundays 3:00 PM GMT · Top Mission: This Month Wed, Nov 11 Only (6:30 PM Prompt)')
                      : t('Sundays 3:00 PM GMT · Top Mission: 1st Week Monthly (Tue & Wed, 6:30 PM Prompt)')}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Phone size={16} style={{ color: 'var(--gold-300)', flexShrink: 0 }} />
                <a href="tel:+233201944006">{t('+233 20 194 4006 (Office)')}</a>
                <span style={{ opacity: 0.4 }}>·</span>
                <a href="tel:+17809537153">+1 (780) 953-7153</a>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <Mail size={16} style={{ color: 'var(--gold-300)', flexShrink: 0 }} />
                <a href="mailto:admin@ephesusgatheringsworldwide.org">
                  admin@ephesusgatheringsworldwide.org
                </a>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'rgba(248,250,252,0.6)', marginTop: 2 }}>
                {t('Global Fellowship & Worldwide Family connecting believers across Ghana, Africa & the Nations.')}
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            {t('© {year} EPHESUS GATHERINGS WORLDWIDE. All rights reserved.', { year: new Date().getFullYear() })}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <Link to="/contact" style={{ color: 'rgba(248,250,252,0.75)' }}>
              {t('Confidential Prayer Desk')}
            </Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: 'var(--gold-300)',
                fontWeight: 600
              }}
            >
              {t('Back to top')} <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
