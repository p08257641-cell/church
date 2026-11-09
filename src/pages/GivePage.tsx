import React, { useState } from 'react';
import {
  Bell,
  CheckCircle2,
  CreditCard,
  ExternalLink,
  Globe2,
  HeartHandshake,
  Landmark,
  Lock,
  Mail,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CHURCH_INFO } from '../data/ministryData';

const FUNDS = [
  {
    id: 'tithe',
    label: 'Tithe (First 10%)',
    desc: 'Honouring the Lord with the firstfruits of your increase (Malachi 3:10).',
    paystackUrl: 'https://paystack.shop/pay/ephesustithes'
  },
  {
    id: 'offering',
    label: 'Free-Will Offering',
    desc: 'Cheerful worship gifts advancing services, youth groups, and spiritual growth.',
    paystackUrl: 'https://paystack.shop/pay/ephesusofferings'
  },
  {
    id: 'seed',
    label: 'Kingdom Seed',
    desc: 'Sowing in faith for specific harvest, breakthrough, and open doors in Christ.',
    paystackUrl: 'https://paystack.shop/pay/ephesusseeds'
  },
  {
    id: 'prophet',
    label: 'Seed to Prophet',
    desc: 'Honouring the Lead Convener and prophetic office according to Galatians 6:6.',
    paystackUrl: 'https://paystack.shop/pay/forprophetedem'
  },
  {
    id: 'partnership',
    label: 'Ephesus Partnership Unit',
    desc: 'Partnering in school outreaches, Bible distribution, scholarships, and missions.',
    paystackUrl: 'https://forms.gle/yZWzABAiM58dmPqH6'
  }
];

export const GivePage: React.FC = () => {
  const { t } = useApp();
  const [selectedFund, setSelectedFund] = useState(FUNDS[0].id);
  const [pledgeSaved, setPledgeSaved] = useState(false);

  const activeFundObj = FUNDS.find(f => f.id === selectedFund) || FUNDS[0];

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">{t('Tithes, Offerings & Kingdom Partnership')}</span>
            <h1>{t('Give with a Grateful Heart')}</h1>
            <p className="lead">
              {t('“Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver.” – 2 Corinthians 9:7')}
            </p>
          </div>

          <div
            className="card"
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(212,175,55,0.45)',
              color: '#FFFFFF'
            }}
          >
            <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>{t('Malachi 3:10')}</span>
            <p className="scripture-quote" style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>
              {t('“Bring the whole tithe into the storehouse, that there may be food in My house… and see if I will not throw open the floodgates of heaven.”')}
            </p>
          </div>
        </div>
      </section>

      {/* Why We Give + Kingdom Stewardship Portal */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          {/* Left: Biblical Foundation & Where Your Gift Goes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <span className="eyebrow">{t('Where Your Gift Goes')}</span>
              <h2 className="section-title">
                {t('Your Generosity')} <span className="accent-serif">{t('Fuels the Mission')}</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t('Your generosity fuels our mission and touches lives across the globe through worship services, educational discipleship, and benevolent school outreach.')}
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{t('Schools & Community Outreach')}</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)' }}>
                {t('Your gift helps us organize high school outreaches, donate Bibles, give domestic support to needy families, and award educational scholarships.')}
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{t('Services & Training Programs')}</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)' }}>
                {t('You support our weekly services, live online broadcasts, youth groups, and the 5 specialized schools of the Education & Training Unit.')}
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{t('Sanctuary Maintenance & Projects')}</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)' }}>
                {t('You help maintain our physical sanctuary at The Son Place (Mikaddo Plaza, Labone, Accra), ensuring it remains an anointed, welcoming house of prayer for all.')}
              </p>
            </div>

            <div className="card" style={{ background: 'var(--bg-stage)' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem' }}>{t('How Your Giving Impacts Lives')}</h4>
              <ul className="check-list">
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Powers weekly live broadcasts reaching believers in over 20 nations')}</li>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Distributes free Bibles and study materials through school outreach teams')}</li>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Funds urgent welfare, compassionate care, and student scholarships')}</li>
              </ul>
            </div>
          </div>

          {/* Right: Interactive Stewardship & Instant Paystack Gateway Card */}
          <div className="card" style={{ borderColor: 'var(--border-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-gold">
                <Lock size={12} /> {t('Official Giving Channels')}
              </span>
              <span className="badge badge-navy">{t('Instant Paystack Verified')}</span>
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.45rem' }}>
              {t('Select Fund & Give Securely Online')}
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {t('Choose your designation below to give directly via the official church Paystack gateway, or register for assistance with our finance team.')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.35rem' }}>
              {FUNDS.map(fund => {
                const active = selectedFund === fund.id;
                return (
                  <button
                    key={fund.id}
                    type="button"
                    onClick={() => setSelectedFund(fund.id)}
                    style={{
                      textAlign: 'left',
                      padding: '0.85rem 1rem',
                      borderRadius: 'var(--radius-sm)',
                      border: active ? '2px solid var(--brand-gold)' : '1px solid var(--border-subtle)',
                      background: active ? 'var(--bg-card-alt)' : 'var(--bg-page)',
                      transition: 'all 0.16s ease'
                    }}
                  >
                    <div style={{ fontWeight: 700, fontSize: '0.96rem', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{t(fund.label)}</span>
                      {active && <span style={{ color: 'var(--text-gold)' }}>{t('Selected ✓')}</span>}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>
                      {t(fund.desc)}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct Paystack Action Button for Selected Fund */}
            <div style={{ marginBottom: '1.35rem' }}>
              <a
                href={activeFundObj.paystackUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center', fontSize: '1rem' }}
              >
                <CreditCard size={18} /> {t('Give {fund} via Paystack', { fund: t(activeFundObj.label) })} <ExternalLink size={16} />
              </a>
              <span style={{ display: 'block', textAlign: 'center', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.45rem' }}>
                {t('Secured by 256-bit SSL · Accepts Visa, Mastercard & Mobile Money (MTN, Telecel, AT)')}
              </span>
            </div>

            <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.25rem' }}>
              <h4 style={{ fontSize: '1.02rem', marginBottom: '0.45rem' }}>{t('Request Banking Details or Assistance')}</h4>
              {pledgeSaved ? (
                <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--ok-green-bg)', color: 'var(--ok-green)' }}>
                  <CheckCircle2 size={24} style={{ marginBottom: '0.4rem' }} />
                  <strong>{t('Thank You for Your Heart to Give!')}</strong>
                  <p style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                    {t('Our stewardship desk has received your note and will assist you at')} <strong>{CHURCH_INFO.contact.emailAdmin}</strong>.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    setPledgeSaved(true);
                  }}
                  className="form-grid"
                >
                  <div>
                    <label className="field-label">{t('Full Name')} <span className="req">*</span></label>
                    <input required type="text" className="field-input" placeholder={t('Your name')} />
                  </div>
                  <div>
                    <label className="field-label">{t('Email Address')} <span className="req">*</span></label>
                    <input required type="email" className="field-input" placeholder="you@example.com" />
                  </div>
                  <div className="form-full" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button type="submit" className="btn btn-outline" style={{ flex: 1 }}>
                      <Bell size={16} /> {t('Request Transfer Info')}
                    </button>
                    <a
                      href={`mailto:${CHURCH_INFO.contact.emailAdmin}?subject=Kingdom%20Giving%20Enquiry`}
                      className="btn btn-outline"
                    >
                      <Mail size={16} /> {t('Email Finance Desk')}
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Channels & Security */}
      <section className="section section-stage">
        <div className="container">
          <div style={{ marginBottom: '2.25rem' }}>
            <span className="eyebrow">{t('Channels & Protection')}</span>
            <h2 className="section-title">
              {t('Ways to Give &')} <span className="accent-serif">{t('Online Giving Safety')}</span>
            </h2>
          </div>

          <div className="grid-4" style={{ marginBottom: '2.25rem' }}>
            {[
              { icon: <CreditCard size={22} />, title: 'Paystack Gateway', desc: 'Instant card & mobile money payments for tithes, offerings, and seeds.' },
              { icon: <Globe2 size={22} />, title: 'Partnership Unit', desc: 'Monthly covenants supporting high school outreaches and Bible distribution.' },
              { icon: <Landmark size={22} />, title: 'Direct Bank Transfer', desc: 'Verified church bank accounts available on request from our finance desk.' },
              { icon: <Smartphone size={22} />, title: 'Mobile Money', desc: 'Convenient transfers via Ghana MTN, Telecel, and AT MoMo networks.' }
            ].map(ch => (
              <div key={ch.title} className="card">
                <div className="mega-icon" style={{ marginBottom: '0.85rem' }}>{ch.icon}</div>
                <h3 style={{ fontSize: '1.12rem', marginBottom: '0.35rem' }}>{t(ch.title)}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{t(ch.desc)}</p>
              </div>
            ))}
          </div>

          {/* 5-Point Security Promise */}
          <div className="card split-card-spotlight">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ok-green)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <ShieldCheck size={22} /> {t('Security & Financial Integrity')}
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>{t('Five Golden Rules for Safe Giving')}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                {t('Ephesus Gatherings Worldwide holds financial stewardship to the highest biblical and institutional standards. Never send offerings to private personal accounts or unsolicited DMs.')}
              </p>
            </div>

            <ul className="check-list">
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>{t('Use Official Channels Only:')}</strong> {t('Official giving gateways are linked exclusively from ephesusgatheringsworldwide.org.')}</li>
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>{t('Double-Check Account Names:')}</strong> {t('Always verify Ephesus Gatherings Worldwide before authorising any transfer.')}</li>
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>{t('Include Clear References:')}</strong> {t('Label gifts (e.g., Tithe, Offering, Seed) for accurate stewardship records.')}</li>
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>{t('Be Alert to Impersonators:')}</strong> {t('Pastors and coordinators will never solicit private gifts via social media DMs.')}</li>
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>{t('Receipts & Confirmation:')}</strong> {t('Receive automated receipts via Paystack and personal pastoral acknowledgment upon request.')}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
