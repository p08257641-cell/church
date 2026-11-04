import React, { useState } from 'react';
import {
  Bell,
  CheckCircle2,
  CreditCard,
  Globe2,
  HeartHandshake,
  Landmark,
  Lock,
  Mail,
  ShieldCheck,
  Smartphone
} from 'lucide-react';

const FUNDS = [
  { id: 'tithe', label: 'Tithe (First 10%)', desc: 'Honouring the Lord with the firstfruits of your increase (Malachi 3:10).' },
  { id: 'offering', label: 'Free-Will Offering', desc: 'Cheerful worship gifts advancing weekly broadcasts and discipleship.' },
  { id: 'missions', label: 'Global Missions & Welfare', desc: 'Supporting diaspora family care, outreach, and urgent community needs.' },
  { id: 'camp', label: 'ITF Camp & Special Projects', desc: 'Partnering in global convocations, media ministry, and sanctuary growth.' }
];

export const GivePage: React.FC = () => {
  const [selectedFund, setSelectedFund] = useState(FUNDS[0].id);
  const [pledgeSaved, setPledgeSaved] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">Tithes, Offerings & Kingdom Partnership</span>
            <h1>Experience the Joy of Worship Through Giving</h1>
            <p className="lead">
              Giving is an act of worship, gratitude, and covenant partnership in advancing the Gospel of Jesus Christ across the nations.
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
            <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>Malachi 3:10</span>
            <p className="scripture-quote" style={{ color: '#FFFFFF', fontSize: '1.2rem' }}>
              “Bring the whole tithe into the storehouse, that there may be food in My house… and see if I will not throw open the floodgates of heaven.”
            </p>
          </div>
        </div>
      </section>

      {/* Why We Give + Kingdom Stewardship Portal */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'start' }}>
          {/* Left: Biblical Foundation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <span className="eyebrow">Kingdom Principles</span>
              <h2 className="section-title">
                Your Generosity <span className="accent-serif">Makes an Eternal Difference</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Through faithful tithes and free-will offerings, lives are reached online across continents, families receive pastoral care, and believers are trained in the Word.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>What Are Tithes?</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)' }}>
                The first 10% of your income, returned to the Lord in faith, covenant honour, and gratitude for His provision.
              </p>
            </div>

            <div className="card">
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>What Are Offerings?</h3>
              <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)' }}>
                Additional spirit-led gifts beyond your tithe that fuel missions, media broadcasts, welfare support, and special Kingdom initiatives.
              </p>
            </div>

            <div className="card" style={{ background: 'var(--bg-stage)' }}>
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.65rem' }}>How Your Partnership Impacts Lives</h4>
              <ul className="check-list">
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> Powers live weekly online broadcasts across all time zones</li>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> Equips new believers with Foundation School & study materials</li>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> Supports urgent welfare & pastoral assistance across the family</li>
              </ul>
            </div>
          </div>

          {/* Right: Interactive Stewardship & Portal Launch Card */}
          <div className="card" style={{ borderColor: 'var(--border-gold)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-gold">
                <Lock size={12} /> Official Giving Desk
              </span>
              <span className="badge badge-navy">Portal Verification Finalising</span>
            </div>

            <h3 style={{ fontSize: '1.45rem', marginBottom: '0.45rem' }}>
              Select Designation & Connect With Stewardship
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Automated card and app checkouts are completing final banking verification for international currencies. Choose your gift purpose below to be notified the moment instant checkout opens—or coordinate directly with our official administration office.
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
                      <span>{fund.label}</span>
                      {active && <span style={{ color: 'var(--text-gold)' }}>Selected ✓</span>}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 2 }}>
                      {fund.desc}
                    </div>
                  </button>
                );
              })}
            </div>

            {pledgeSaved ? (
              <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--ok-green-bg)', color: 'var(--ok-green)' }}>
                <CheckCircle2 size={24} style={{ marginBottom: '0.4rem' }} />
                <strong>Thank You for Your Heart to Give!</strong>
                <p style={{ fontSize: '0.88rem', marginTop: '0.25rem' }}>
                  You are registered for priority alert as soon as the online giving gateway goes live, and our stewardship team is available at <strong>admin@ephesusgatheringsworldwide.com</strong>.
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
                  <label className="field-label">Full Name <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder="Your name" />
                </div>
                <div>
                  <label className="field-label">Email Address <span className="req">*</span></label>
                  <input required type="email" className="field-input" placeholder="you@example.com" />
                </div>
                <div className="form-full" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <button type="submit" className="btn btn-gold" style={{ flex: 1 }}>
                    <Bell size={16} /> Notify Me When Portal Opens
                  </button>
                  <a
                    href="mailto:admin@ephesusgatheringsworldwide.com?subject=Kingdom%20Giving%20Enquiry"
                    className="btn btn-outline"
                  >
                    <Mail size={16} /> Email Finance Desk
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Upcoming Channels & Security */}
      <section className="section section-stage">
        <div className="container">
          <div style={{ marginBottom: '2.25rem' }}>
            <span className="eyebrow">Channels & Protection</span>
            <h2 className="section-title">
              Ways to Give & <span className="accent-serif">Online Giving Safety</span>
            </h2>
          </div>

          <div className="grid-4" style={{ marginBottom: '2.25rem' }}>
            {[
              { icon: <CreditCard size={22} />, title: 'Online Portal', desc: 'Secure multi-currency card & digital wallet giving right on this page.' },
              { icon: <Smartphone size={22} />, title: 'Ephesus Mobile App', desc: 'Integrated giving with full personal receipt history inside your account.' },
              { icon: <Landmark size={22} />, title: 'Direct Bank Transfer', desc: 'Verified church bank details published exclusively on this official page.' },
              { icon: <Globe2 size={22} />, title: 'Mobile Money / EFT', desc: 'Convenient regional transfers for members across Africa & the diaspora.' }
            ].map(ch => (
              <div key={ch.title} className="card">
                <div className="mega-icon" style={{ marginBottom: '0.85rem' }}>{ch.icon}</div>
                <h3 style={{ fontSize: '1.12rem', marginBottom: '0.35rem' }}>{ch.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{ch.desc}</p>
              </div>
            ))}
          </div>

          {/* 5-Point Security Promise */}
          <div className="card split-card-spotlight">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--ok-green)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <ShieldCheck size={22} /> Security & Financial Integrity
              </div>
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.5rem' }}>Five Golden Rules for Safe Giving</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                Ephesus Gatherings Worldwide holds financial stewardship to the highest biblical and institutional standards. Never send offerings to private personal accounts or unsolicited DMs.
              </p>
            </div>

            <ul className="check-list">
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>Use Official Information Only:</strong> Official details are published solely on ephesusgatheringsworldwide.com.</li>
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>Double-Check Account Names:</strong> Always verify Ephesus Gatherings Worldwide before authorising any transfer.</li>
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>Include Clear References:</strong> Label gifts (e.g., Tithe, Offering, Missions) for accurate stewardship records.</li>
              <li><HeartHandshake size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> <strong>Be Alert to Impersonators:</strong> Pastors and coordinators will never solicit private gifts via social DMs.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};
