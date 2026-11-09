import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  CheckCircle2,
  Clock,
  Lock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Shield
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { WEEKLY_SERVICES, formatGMTServiceInLocal } from '../utils/time';

const REASONS = [
  { id: 'prayer', label: 'Prayer Request', email: 'welfare@ephesusgatheringsworldwide.org' },
  { id: 'general', label: 'General Enquiry', email: 'admin@ephesusgatheringsworldwide.org' },
  { id: 'support', label: 'Pastoral Support / Helpline', email: 'welfare@ephesusgatheringsworldwide.org' },
  { id: 'volunteer', label: 'Volunteer in a Team', email: 'service@ephesusgatheringsworldwide.org' },
  { id: 'academy', label: 'Education & Training Schools', email: 'academy@ephesusgatheringsworldwide.org' },
  { id: 'partnership', label: 'Partnership & Giving', email: 'admin@ephesusgatheringsworldwide.org' }
];

export const ContactPage: React.FC = () => {
  const { t, locale } = useApp();
  const [searchParams] = useSearchParams();
  const [reason, setReason] = useState('prayer');
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const topic = searchParams.get('topic');
    if (topic && REASONS.some(r => r.id === topic)) {
      setReason(topic);
    }
  }, [searchParams]);

  const activeDept = REASONS.find(r => r.id === reason) || REASONS[0];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">{t('Pastoral Care, Prayer & Enquiries')}</span>
            <h1>{t('We Are Here to Pray & Walk With You')}</h1>
            <p className="lead">
              {t('Whether you are sharing a confidential prayer request, seeking pastoral counsel, volunteering in a ministry department, or asking a question—our team reads every message personally.')}
            </p>
          </div>

          <div
            className="card"
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(212,175,55,0.45)',
              color: '#FFFFFF',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem'
            }}
          >
            <div style={{ fontWeight: 700, color: 'var(--gold-300)', fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {t('Direct Sanctuary Helpline & Pastoral Desk')}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Phone size={18} style={{ color: 'var(--gold-300)' }} />
              <a href="tel:+233201944006" style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                {t('+233 20 194 4006 (Ghana Sanctuary & HQ)')}
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Phone size={18} style={{ color: 'var(--gold-300)' }} />
              <a href="tel:+17809537153" style={{ fontWeight: 600 }}>
                {t('+1 (780) 953-7153 (International Inquiries)')}
              </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
              <Mail size={18} style={{ color: 'var(--gold-300)' }} />
              <a href="mailto:admin@ephesusgatheringsworldwide.org">
                admin@ephesusgatheringsworldwide.org
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Prayer Form + Promises */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          {/* Left: Form */}
          <div className="card">
            <span className="eyebrow">{t('Send Us a Message')}</span>
            <h2 style={{ fontSize: '1.65rem', marginBottom: '0.4rem' }}>{t('Tell Us What Brings You Here')}</h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {t('Routing directly to:')} <strong style={{ color: 'var(--brand-royal)' }}>{activeDept.email}</strong>
            </p>

            {sent ? (
              <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', background: 'var(--ok-green-bg)', color: 'var(--ok-green)' }}>
                <CheckCircle2 size={32} style={{ marginBottom: '0.5rem' }} />
                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{t('Thank You — Message Received!')}</h3>
                <p style={{ fontSize: '0.92rem', marginBottom: '1rem' }}>
                  {t('Your {topic} has been delivered to our EGW team and will be answered or prayed over promptly.', {
                    topic: t(activeDept.label)
                  })}
                </p>
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setSent(false)}>
                  {t('Send Another Message')}
                </button>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="form-grid"
              >
                <div className="form-full">
                  <label className="field-label">{t('Topic / Department')} <span className="req">*</span></label>
                  <div className="chip-group">
                    {REASONS.map(r => (
                      <button
                        key={r.id}
                        type="button"
                        className={`chip-btn ${reason === r.id ? 'is-active' : ''}`}
                        onClick={() => setReason(r.id)}
                      >
                        {t(r.label)}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="field-label">{t('First Name')} <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder={t('First name')} />
                </div>
                <div>
                  <label className="field-label">{t('Last Name')}</label>
                  <input type="text" className="field-input" placeholder={t('Last name')} />
                </div>
                <div>
                  <label className="field-label">{t('Email Address')} <span className="req">*</span></label>
                  <input required type="email" className="field-input" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="field-label">{t('Phone / WhatsApp (Optional)')}</label>
                  <input type="tel" className="field-input" placeholder="+1 / +44 / +233..." />
                </div>
                <div className="form-full">
                  <label className="field-label">
                    {reason === 'prayer' ? t('Your Prayer Request') : t('Your Message')} <span className="req">*</span>
                  </label>
                  <textarea
                    required
                    className="field-textarea"
                    placeholder={
                      reason === 'prayer'
                        ? t('Share how our pastors and intercessors can stand in faith with you...')
                        : t('Write a few sentences and our team will get right back to you...')
                    }
                  />
                </div>
                <div className="form-full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-gold">
                    <Send size={15} /> {t('Send Message')}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Where Your Message Goes & Offices */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="card">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.85rem' }}>{t('Our Pastoral Care Guarantee')}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Lock size={19} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem' }}>{t('Prayer Requests Held in Confidence')}</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      {t('Shared strictly with our pastoral prayer team—never published without explicit testimony consent.')}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Clock size={19} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem' }}>{t('Prompt Personal Follow-Up')}</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      {t('For urgent pastoral matters, call our direct line at +1 (780) 953-7153 for immediate assistance.')}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Shield size={19} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong style={{ display: 'block', fontSize: '0.95rem' }}>{t('Kept Within the EGW Team')}</strong>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      {t('Your personal details are used solely to answer your request with care and integrity.')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{t('Sanctuary & Correspondence')}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <MapPin size={18} style={{ color: 'var(--brand-royal)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>{t('Mother Church Sanctuary (The Son Place)')}</strong>
                    <div style={{ color: 'var(--text-secondary)' }}>
                      {t('Mikaddo Plaza, Labone Junction, Accra, Ghana')}
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '0.6rem' }}>
                  <MapPin size={18} style={{ color: 'var(--brand-royal)', flexShrink: 0, marginTop: 2 }} />
                  <div>
                    <strong>{t('International Correspondence (Canada)')}</strong>
                    <div style={{ color: 'var(--text-secondary)' }}>
                      10620 99 Ave NW, Unit 407, Edmonton, AB T5K 0L3, {t('Canada')}
                    </div>
                  </div>
                </div>
                <a
                  href="https://www.whatsapp.com/channel/0029VaAKoAFDZ4LUxGNPze0t"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline btn-sm"
                  style={{ alignSelf: 'flex-start', marginTop: '0.35rem' }}
                >
                  <MessageCircle size={15} /> {t('Join Official WhatsApp Channel')}
                </a>
              </div>
            </div>

            <div className="card" style={{ background: 'var(--bg-stage)' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem' }}>{t('When We Gather Online & In Person')}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {WEEKLY_SERVICES.map(s => {
                  const local = formatGMTServiceInLocal(s.dayOfWeek, s.hourGMT, s.minuteGMT, undefined, { t, locale });
                  return (
                    <div key={s.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.86rem' }}>
                      <div>
                        <strong style={{ display: 'block' }}>{t(s.title)}</strong>
                        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          {s.scheduleLabel ? t(s.scheduleLabel) : t('Every {day}', { day: local.localDayFull })}
                        </span>
                      </div>
                      <span style={{ color: 'var(--brand-royal)', fontWeight: 600, textAlign: 'right', whiteSpace: 'nowrap' }}>
                        {local.isSameAsGMT ? local.gmt : `${local.localTime} ${local.shortTz} (${local.gmt})`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
