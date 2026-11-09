import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, Clock, Globe2, Sparkles, UserCheck, Users } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { GALLERY_PHOTOS } from '../data/ministryData';

export const JoinPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { openLightbox, t } = useApp();
  const [pathType, setPathType] = useState<'member' | 'affiliate'>('member');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const typeParam = searchParams.get('type');
    if (typeParam === 'affiliate') setPathType('affiliate');
    if (typeParam === 'member') setPathType('member');
  }, [searchParams]);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">{t('Become Part of Our Global Family')}</span>
            <h1>{t('Begin Your Journey With Ephesus Gatherings Worldwide')}</h1>
            <p className="lead">
              {t('Whether Ephesus Gatherings Worldwide will be your primary spiritual home as a Member (in-person at The Son Place or online worldwide) or a stream where you occasionally fellowship as an Affiliate, there is a place prepared for you.')}
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--gold-200)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Clock size={16} /> {t('Takes 2 minutes')}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <UserCheck size={16} /> {t('Pastoral welcome within 48 hours')}
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
                <Globe2 size={16} /> {t('Accra, Ghana & Global Family Worldwide')}
              </span>
            </div>
          </div>

          <div className="vision-media-stack" style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
            <img
              src="/images/sanctuary-corporate-worship.jpg"
              alt={t('Congregation and fellowship at Ephesus Gatherings Worldwide')}
            />
          </div>
        </div>
      </section>

      {/* Interactive Path Selector: Member vs Affiliate */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 680, marginInline: 'auto', marginBottom: '2.5rem' }}>
            <span className="eyebrow">{t('Step 1 · Choose Your Relationship')}</span>
            <h2 className="section-title">
              {t('Two Ways to')} <span className="accent-serif">{t('Walk With Us')}</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              {t('Click either card below to select how you would like to walk with Ephesus Gatherings Worldwide.')}
            </p>
          </div>

          <div className="grid-2" style={{ marginBottom: '3.5rem' }}>
            <div
              className={`card path-selector-card ${pathType === 'member' ? 'is-chosen' : ''}`}
              onClick={() => setPathType('member')}
              role="radio"
              aria-checked={pathType === 'member'}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') setPathType('member');
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-gold">{t('EGW Is My Spiritual Home')}</span>
                  {pathType === 'member' && <span className="badge badge-ok">{t('Selected ✓')}</span>}
                </div>
                <h3 style={{ fontSize: '1.55rem', marginBottom: '0.45rem' }}>{t('Register as a Member')}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                  {t('You have prayerfully decided to make Ephesus Gatherings Worldwide your primary church family—committed to growing, fellowshipping, and serving in the ministry.')}
                </p>
                <ul className="check-list">
                  <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Full pastoral care, welfare support, and personal shepherding')}</li>
                  <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Full access to Foundation School, trainings, and discipleship tracks')}</li>
                  <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Opportunity to serve in Media, Worship, Service, or Welfare teams')}</li>
                </ul>
              </div>
              <a href="#onboarding-form" className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start' }}>
                {t('Continue as Member')}
              </a>
            </div>

            <div
              className={`card path-selector-card ${pathType === 'affiliate' ? 'is-chosen' : ''}`}
              onClick={() => setPathType('affiliate')}
              role="radio"
              aria-checked={pathType === 'affiliate'}
              tabIndex={0}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') setPathType('affiliate');
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span className="badge badge-navy">{t('My Primary Church Is Elsewhere')}</span>
                  {pathType === 'affiliate' && <span className="badge badge-ok">{t('Selected ✓')}</span>}
                </div>
                <h3 style={{ fontSize: '1.55rem', marginBottom: '0.45rem' }}>{t('Register as an Affiliate')}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                  {t('You have a local home church you remain faithfully committed to, and desire to stay connected to the teaching, prayer watches, and family of EGW.')}
                </p>
                <ul className="check-list">
                  <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> {t('Access to public online services, conferences, and devotionals')}</li>
                  <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> {t('Receive ministry updates, prayer points, and camp invitations')}</li>
                  <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> {t('Encouragement that complements—never replaces—your local church')}</li>
                </ul>
              </div>
              <a href="#onboarding-form" className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start' }}>
                {t('Continue as Affiliate')}
              </a>
            </div>
          </div>

          {/* 4-Step What Happens Next */}
          <div className="grid-4">
            {[
              { step: '01', title: 'Tell Us About You', desc: 'Complete the short form below from any phone or computer.' },
              { step: '02', title: 'Pastoral Review', desc: 'Our pastoral team reviews your registration promptly.' },
              { step: '03', title: 'Personal Welcome', desc: 'A coordinator reaches out by email or WhatsApp to greet you.' },
              { step: '04', title: 'Connected in Family', desc: 'Step smoothly into weekly worship, discipleship, and community.' }
            ].map(item => (
              <div key={item.step} className="card">
                <div className="faith-num" style={{ marginBottom: '0.5rem' }}>{item.step}</div>
                <h4 style={{ fontSize: '1.08rem', marginBottom: '0.3rem' }}>{t(item.title)}</h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)' }}>{t(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="onboarding-form" className="section section-stage">
        <div className="container-narrow">
          <div className="card">
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="eyebrow">{t('Step 2 · Member & Affiliate Registration')}</span>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '0.35rem' }}>
                {t('Tell Us a Little About You ({path})', {
                  path: pathType === 'member' ? t('Member') : t('Affiliate')
                })}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                {t('We’ll review your request and reach out within 48 hours to walk you through your next steps.')}
              </p>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '1.75rem' }}>
                <CheckCircle2 size={46} style={{ color: 'var(--ok-green)', marginInline: 'auto', marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.4rem' }}>{t('Thank You for Reaching Out!')}</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 480, marginInline: 'auto', marginBottom: '1.25rem' }}>
                  {pathType === 'member'
                    ? t('Your registration as an EGW Member is with our pastoral team. Expect a warm personal welcome within 48 hours!')
                    : t('Your registration as an EGW Affiliate is with our pastoral team. Expect a warm personal welcome within 48 hours!')}
                </p>
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setSubmitted(false)}>
                  {t('Update Another Record')}
                </button>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="form-grid"
              >
                <div className="form-full">
                  <label className="field-label">{t('Registering As')} <span className="req">*</span></label>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className={`chip-btn ${pathType === 'member' ? 'is-active' : ''}`}
                      onClick={() => setPathType('member')}
                    >
                      <Users size={14} style={{ display: 'inline', marginRight: 5 }} />
                      {t('Member (Primary Spiritual Home)')}
                    </button>
                    <button
                      type="button"
                      className={`chip-btn ${pathType === 'affiliate' ? 'is-active' : ''}`}
                      onClick={() => setPathType('affiliate')}
                    >
                      {t('Affiliate (Occasional Fellowship)')}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="field-label">{t('Title')} <span className="req">*</span></label>
                  <select required className="field-select" defaultValue="Mr">
                    <option value="Mr">{t('Mr')}</option>
                    <option value="Mrs">{t('Mrs')}</option>
                    <option value="Ms">{t('Ms')}</option>
                    <option value="Dr">{t('Dr')}</option>
                    <option value="Pastor / Rev">{t('Pastor / Rev')}</option>
                  </select>
                </div>

                <div>
                  <label className="field-label">{t('Country of Residence')} <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder={t('e.g., Canada, UK, USA, Germany...')} />
                </div>

                <div>
                  <label className="field-label">{t('First Name')} <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder={t('First name')} />
                </div>

                <div>
                  <label className="field-label">{t('Last Name')} <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder={t('Last name')} />
                </div>

                <div>
                  <label className="field-label">{t('Email Address')} <span className="req">*</span></label>
                  <input required type="email" className="field-input" placeholder="you@example.com" />
                </div>

                <div>
                  <label className="field-label">{t('WhatsApp / Phone Number')} <span className="req">*</span></label>
                  <input required type="tel" className="field-input" placeholder="+1 / +44 / +49..." />
                </div>

                <div className="form-full">
                  <label className="field-label">{t('How Did You Hear About EGW?')}</label>
                  <select className="field-select" defaultValue="Friend or Family Invite">
                    <option value="Friend or Family Invite">{t('Friend or Family Invite')}</option>
                    <option value="YouTube / Online Broadcast">{t('YouTube / Online Broadcast')}</option>
                    <option value="The Emergence Podcast">{t('The Emergence Podcast')}</option>
                    <option value="Mother Church in Ghana">{t('Mother Church in Ghana')}</option>
                    <option value="Instagram / Facebook / WhatsApp">{t('Instagram / Facebook / WhatsApp')}</option>
                  </select>
                </div>

                <div className="form-full">
                  <label className="field-label">{t('Anything Else You’d Like Our Pastors to Know?')}</label>
                  <textarea
                    className="field-textarea"
                    placeholder={t('Optional—share your city, ministry gifts, or prayer needs...')}
                  />
                </div>

                <div className="form-full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-gold">
                    {t('Complete Registration')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Family Gallery */}
      <section className="section">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">{t('Photos From the Family')}</span>
            <h2 className="section-title">
              {t('Moments Where God Met')} <span className="accent-serif">{t('With His People')}</span>
            </h2>
          </div>

          <div className="gallery-grid">
            {GALLERY_PHOTOS.slice(0, 4).map(photo => (
              <div key={photo.id} className="gallery-tile" onClick={() => openLightbox(photo)}>
                <img src={photo.src} alt={t(photo.caption)} loading="lazy" />
                <div className="gallery-tile-caption">
                  <span style={{ fontSize: '0.72rem', color: 'var(--gold-300)', fontWeight: 700 }}>
                    {t(photo.category)}
                  </span>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{t(photo.location)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
