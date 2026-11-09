import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Heart,
  Pause,
  Play,
  RotateCcw,
  Sparkles,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const PRAYER_LINES = [
  'Father, I decree, and I declare that indeed,',
  'I am a sinner. I went my own way all these years,',
  'but today I come to You, and I accept all my wrongs.',
  'Because I believe that Your blood',
  'is able to cleanse me of all unrighteousness.',
  'Therefore, I receive You as my Lord and personal Saviour.',
  'Wash me, cleanse me, mould me, and use me for Your Kingdom.',
  'From today, I will follow You wherever You go',
  'with my life, with my time, and with my energy,',
  'till the end of my days. Amen!'
];

export const SalvationPage: React.FC = () => {
  const { t } = useApp();
  const [activeLine, setActiveLine] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveLine(prev => {
        if (prev >= PRAYER_LINES.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 3400);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">{t('Salvation in Jesus Christ · The Gospel')}</span>
            <h1>{t('Jesus — The Way, The Truth, and The Life')}</h1>
            <p className="lead">
              {t('“I am the way, the truth, and the life. No one comes to the Father except through Me.” — John 14:6')}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.6rem', flexWrap: 'wrap' }}>
              <a href="#pray-now" className="btn btn-gold">
                <Heart size={16} /> {t('Pray & Be Saved Today')}
              </a>
              <a href="#connect-believer" className="btn btn-ghost-light">
                {t('Tell Us You Prayed')}
              </a>
            </div>
          </div>

          <div className="vision-media-stack" style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
            <img
              src="/images/worship-surrender.jpg"
              alt={t('Salvation and new life in Jesus Christ')}
            />
          </div>
        </div>
      </section>

      {/* The Good News & 3 Steps */}
      <section className="section">
        <div className="container grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="eyebrow">{t('The Good News')}</span>
            <h2 className="section-title">
              {t('Created for Fellowship,')} <span className="accent-serif">{t('Redeemed by Grace')}</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.03rem' }}>
              {t('At Ephesus Gatherings Worldwide, we proclaim one simple, unshakeable truth: eternal life comes through Jesus Christ alone—not through human religion, personal achievements, or self-effort.')}
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.03rem' }}>
              {t('God created you for a living relationship with Him. Sin separated humanity from His presence, leaving a chasm we could never bridge on our own. Out of boundless love, God sent His Son, Jesus Christ, to die in our place and rise again in victory—offering complete forgiveness, righteousness, and newness of life to everyone who believes.')}
            </p>
          </div>

          <div className="pillar-list" style={{ marginTop: 0 }}>
            {[
              {
                num: '01',
                title: 'Recognise Your Need',
                desc: 'Acknowledge your need for God’s forgiveness and accept that no one can save themselves by works.'
              },
              {
                num: '02',
                title: 'Believe the Finished Work',
                desc: 'Believe in your heart that Jesus died for your sins on the Cross and rose bodily to give you eternal life.'
              },
              {
                num: '03',
                title: 'Confess Jesus as Lord',
                desc: 'Confess Him with your mouth as Lord and Saviour, welcoming the Holy Spirit to make you a new creation.'
              }
            ].map(step => (
              <div key={step.num} className="pillar-row">
                <span className="pillar-num">{step.num}</span>
                <div>
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>{t(step.title)}</h3>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{t(step.desc)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guided Moment of Salvation Prayer */}
      <section id="pray-now" className="section section-stage">
        <div className="container-narrow">
          <div className="prayer-box">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="eyebrow eyebrow-light">{t('Moment of Salvation')}</span>
                <h2 style={{ fontSize: 'var(--text-3xl)', color: '#FFFFFF' }}>{t('Pray From Your Heart')}</h2>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  className="btn btn-gold btn-sm"
                  onClick={() => {
                    if (activeLine >= PRAYER_LINES.length - 1) setActiveLine(0);
                    setIsPlaying(prev => !prev);
                  }}
                >
                  {isPlaying ? <Pause size={15} /> : <Play size={15} fill="currentColor" />}
                  {isPlaying ? t('Pause Guide') : t('Pray It Slowly')}
                </button>
                <button
                  type="button"
                  className="btn btn-ghost-light btn-sm"
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveLine(0);
                  }}
                >
                  <RotateCcw size={14} /> {t('Restart')}
                </button>
              </div>
            </div>

            <div className="prayer-lines">
              {PRAYER_LINES.map((line, idx) => (
                <div
                  key={idx}
                  className={`prayer-line ${
                    idx === activeLine ? 'is-current' : idx < activeLine ? 'is-past' : ''
                  }`}
                  onClick={() => {
                    setIsPlaying(false);
                    setActiveLine(idx);
                  }}
                >
                  {t(line)}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.16)' }}>
              <p style={{ color: 'var(--gold-200)', fontWeight: 600 }}>
                <Sparkles size={16} style={{ display: 'inline', marginRight: 6 }} />
                {t('If you prayed this prayer, all of heaven rejoices over you today!')}
              </p>
              <a href="#connect-believer" className="btn btn-gold btn-sm">
                {t('I Just Prayed This Prayer')} <ArrowRight size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* New Believer Connection Form */}
      <section id="connect-believer" className="section">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span className="eyebrow">{t('You Are Not Alone')}</span>
            <h2 className="section-title">
              {t('We Would Love to')} <span className="accent-serif">{t('Walk With You')}</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              {t('Share your decision below so a pastor on our team can welcome you personally, pray with you, and send you resources for your new walk with Christ.')}
            </p>
          </div>

          <div className="card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '1.75rem' }}>
                <CheckCircle2 size={46} style={{ color: 'var(--ok-green)', marginInline: 'auto', marginBottom: '0.85rem' }} />
                <h3 style={{ fontSize: '1.55rem', marginBottom: '0.45rem' }}>{t('Welcome to the Family of God!')}</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 500, marginInline: 'auto', marginBottom: '1.4rem' }}>
                  {t('Our pastoral care and welfare coordinators have received your message and will reach out personally to celebrate with you and share your next steps.')}
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link to="/daily-readings" className="btn btn-primary btn-sm">
                    {t('Start Daily Readings')}
                  </Link>
                  <Link to="/online-service" className="btn btn-outline btn-sm">
                    {t('Join Sunday Worship')}
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="form-grid"
              >
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
                  <label className="field-label">{t('Country of Residence')} <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder={t('e.g., Canada, UK, USA, Ghana...')} />
                </div>
                <div className="form-full">
                  <label className="field-label">{t('Tell Us Briefly About Your Decision')}</label>
                  <textarea
                    className="field-textarea"
                    placeholder={t('I prayed the salvation prayer today / I am rededicating my life to Jesus...')}
                  />
                </div>
                <div className="form-full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-gold">
                    {t('Send to Pastoral Team')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="section section-stage">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span className="eyebrow">{t('A New Beginning')}</span>
            <h2 className="section-title">{t('Your Next Three Steps in Grace')}</h2>
          </div>

          <div className="grid-3">
            <div className="card">
              <BookOpen size={24} style={{ color: 'var(--brand-royal)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.45rem' }}>{t('Feed on the Word Daily')}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {t('Follow our structured Daily Bible Readings and Proverbs wisdom plan to grow rooted in Christ’s love.')}
              </p>
              <Link to="/daily-readings" className="btn btn-outline btn-sm">
                {t('Open Daily Readings')}
              </Link>
            </div>
            <div className="card">
              <Users size={24} style={{ color: 'var(--brand-royal)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.45rem' }}>{t('Foundation School')}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {t('Enrol in EGW’s foundational discipleship classes led by our Education & Training Coordinator.')}
              </p>
              <Link to="/join" className="btn btn-outline btn-sm">
                {t('Join Foundation Track')}
              </Link>
            </div>
            <div className="card">
              <Heart size={24} style={{ color: 'var(--brand-royal)', marginBottom: '0.75rem' }} />
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.45rem' }}>{t('Fellowship Every Sunday')}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {t('Worship live with believers worldwide every Sunday at 15:00 GMT on our Online Broadcast Stage.')}
              </p>
              <Link to="/online-service" className="btn btn-outline btn-sm">
                {t('Visit Broadcast Stage')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
