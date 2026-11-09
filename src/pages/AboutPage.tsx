import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Headphones,
  Sparkles,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  ARTICLES_OF_FAITH,
  ArticleOfFaith,
  FLAG_URLS,
  FOUNDER_INFO,
  LANGUAGES,
  MOTHER_CHURCH_MINISTRIES,
  getPastoralWelcomeLetter
} from '../data/ministryData';

const PILLARS: ('All' | ArticleOfFaith['pillar'])[] = [
  'All',
  'Godhead & Word',
  'Redemption & Spirit',
  'Ordinances & Life',
  'Kingdom & Mission'
];

export const AboutPage: React.FC = () => {
  const { language, setLanguage, currentLang, t } = useApp();
  const [selectedPillar, setSelectedPillar] = useState<'All' | ArticleOfFaith['pillar']>('All');
  const pastoralLetter = getPastoralWelcomeLetter(language);

  const filteredArticles =
    selectedPillar === 'All'
      ? ARTICLES_OF_FAITH
      : ARTICLES_OF_FAITH.filter(a => a.pillar === selectedPillar);

  return (
    <div>
      {/* Subpage Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">{t('Ephesus Gatherings Worldwide · Mother Sanctuary & Global Family')}</span>
            <h1>{t('Our Story, Our Vision & The People Serving You')}</h1>
            <p className="lead">
              {t('Ephesus Gatherings Worldwide is a Christ-centered training center dedicated to equipping God’s overcomers to fulfill their divine purpose, experience divine health and healing, and make a transformative impact for the Lord Jesus Christ.')}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.6rem' }}>
              {[
                { href: '#welcome', label: 'Pastor’s Welcome' },
                { href: '#vision', label: 'Story & Vision' },
                { href: '#schools', label: '5 Training Schools' },
                { href: '#beliefs', label: '12 Beliefs' },
                { href: '#founder', label: 'Our Founder' },
                { href: '#ministries', label: 'Ministry Arms' },
                { href: '#belong', label: 'Member vs Affiliate' }
              ].map(ch => (
                <a key={ch.href} href={ch.href} className="btn btn-ghost-light btn-sm">
                  {t(ch.label)}
                </a>
              ))}
            </div>
          </div>

          <div className="vision-media-stack" style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
            <img
              src="/images/sanctuary-prayer-worship.jpg"
              alt={t('Ephesus Gatherings Worldwide Sanctuary Congregation')}
            />
          </div>
        </div>
      </section>

      {/* 1. PASTORAL WELCOME LETTER + 9 LANGUAGES */}
      <section id="welcome" className="section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">{pastoralLetter.eyebrow}</span>
              <h2 className="section-title">
                {currentLang.welcomeGreeting} — <span className="accent-serif">{pastoralLetter.subtitle}</span>
              </h2>
            </div>
            <div className="chip-group" aria-label={t('Welcome greetings in 9 languages')}>
              {LANGUAGES.map(l => (
                <button
                  key={l.code}
                  type="button"
                  className={`chip-btn ${language === l.code ? 'is-active' : ''}`}
                  onClick={() => setLanguage(l.code)}
                >
                  <img
                    src={FLAG_URLS[l.flagCode]}
                    alt=""
                    className="flag-mini"
                    style={{ display: 'inline-block', marginRight: 6, verticalAlign: 'middle' }}
                  />
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="card split-card-welcome">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              {pastoralLetter.paragraphs.map((para, idx) => (
                <p key={idx} style={{ fontSize: '1.06rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {para}
                </p>
              ))}
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', display: 'block' }}>
                  {FOUNDER_INFO.name}
                </strong>
                <span style={{ fontSize: '0.86rem', color: 'var(--text-gold)', fontWeight: 700 }}>
                  {pastoralLetter.role}, Ephesus Gatherings Worldwide
                </span>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
              <img
                src={FOUNDER_INFO.portraitWithWife}
                alt={t('Prophet Edem Julius-Cudjoe and his wife')}
                style={{ width: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE & VISION */}
      <section id="vision" className="section section-stage">
        <div className="container">
          <div style={{ maxWidth: 820, marginInline: 'auto', textAlign: 'center', marginBottom: '3rem' }}>
            <span className="eyebrow">{t('Our Mandate')}</span>
            <h2 className="section-title">
              {t('A Training Centre for')} <span className="accent-serif">{t('God’s Overcomers')}</span>
            </h2>
            <p className="scripture-quote" style={{ marginBlock: '1.25rem', color: 'var(--brand-primary)' }}>
              {t('“Ephesus Gatherings Worldwide serves as a training centre for equipping God’s overcomers to take their place on earth for the Lord Jesus Christ.”')}
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              {t('Located at Mikaddo Plaza, Labone Junction, Accra, Ghana, Ephesus Gatherings Worldwide hosts dynamic worship services, offers practical discipleship programs, and connects believers across continents through Spirit-filled worship, sound biblical teaching, and practical ministry training.')}
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '3.5rem' }}>
            {[
              {
                num: '01',
                title: 'Spirit-Filled Worship',
                desc: 'Dynamic worship services every Sunday at 3:00 PM GMT at The Son Place in Accra and streaming live globally where Jesus is exalted and the Holy Spirit moves freely.'
              },
              {
                num: '02',
                title: 'Sound Biblical Teaching',
                desc: 'Discipleship programmes, Daily Bible Readings, and apostolic expositions grounded squarely in the authority of Scripture and Christ’s finished work.'
              },
              {
                num: '03',
                title: 'Practical Ministry Training',
                desc: 'Hands-on fellowship, outreach missions, divine healing, and spiritual equipping that empower every believer to walk in victory on earth.'
              }
            ].map(p => (
              <div key={p.num} className="card">
                <div className="faith-num" style={{ marginBottom: '0.75rem' }}>{p.num}</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{t(p.title)}</h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>{t(p.desc)}</p>
              </div>
            ))}
          </div>

          {/* Education & Training Unit: 5 Specialized Schools */}
          <div id="schools" style={{ paddingTop: '1rem' }}>
            <div style={{ textAlign: 'center', maxWidth: 740, marginInline: 'auto', marginBottom: '2.5rem' }}>
              <span className="eyebrow">{t('Education & Training Unit')}</span>
              <h2 className="section-title">
                {t('Five Schools to')} <span className="accent-serif">{t('Equip Overcomers')}</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                {t('Structured ministerial and discipleship pathways designed to take you from foundational salvation truths into apostolic authority and prevailing faith.')}
              </p>
            </div>

            <div className="grid-3" style={{ marginBottom: '2.5rem' }}>
              {[
                { title: 'Foundation School', badge: 'Level 1', desc: 'Establishing new believers firmly in the grace of God, salvation assurance, and the finished work of the Cross.' },
                { title: 'School of Discipleship', badge: 'Level 2', desc: 'Cruciform character, holy spiritual walk, and cultivating intimate daily communion with the Holy Spirit.' },
                { title: 'School of the Word', badge: 'Level 3', desc: 'In-depth hermeneutics, Christ-centred Scripture exposition, and mastering the New Covenant.' },
                { title: 'School of the Prophets', badge: 'Level 4', desc: 'Hearing the voice of God, discerning spiritual realms, prophetic prayer watches, and operating in spiritual gifts.' },
                { title: 'School of Faith', badge: 'Level 5', desc: 'Unshakable Kingdom dominion, commanding miracles, walking in divine health, and prevailing faith in action.' }
              ].map(sch => (
                <div key={sch.title} className="card card-interactive">
                  <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>{t(sch.badge)}</span>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{t(sch.title)}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t(sch.desc)}</p>
                </div>
              ))}
            </div>

            {/* Outreach Impact Counter Bar */}
            <div className="card split-card-spotlight">
              <div>
                <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>{t('Ephesus Partnership & Outreach')}</span>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.45rem' }}>{t('Reaching Schools, Winning Souls')}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                  {t('The Ephesus Gatherings Partnership Unit supports school outreaches, Bible donations, family welfare, and student scholarships across Ghana and beyond.')}
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', textAlign: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--brand-royal)' }}>6+</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t('Schools Reached')}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--brand-royal)' }}>5,500+</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t('People Reached')}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--brand-royal)' }}>1,250+</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>{t('Scholarships & Bibles')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TWELVE ARTICLES OF FAITH */}
      <section id="beliefs" className="section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">{t('Core Values & Doctrine')}</span>
              <h2 className="section-title">
                {t('Twelve Articles of')} <span className="accent-serif">{t('Faith')}</span>
              </h2>
              <p className="section-lead">
                {t('Stated in the exact order confessed by Ephesus Gatherings Worldwide, with the foundational Scriptures each rests upon.')}
              </p>
            </div>
            <div className="chip-group">
              {PILLARS.map(pillar => (
                <button
                  key={pillar}
                  type="button"
                  className={`chip-btn ${selectedPillar === pillar ? 'is-active' : ''}`}
                  onClick={() => setSelectedPillar(pillar)}
                >
                  {t(pillar)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-3">
            {filteredArticles.map(art => (
              <article key={art.number} className="card card-interactive faith-card">
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span className="faith-num">{art.number}</span>
                    <span className="badge badge-navy">{t(art.pillar)}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.55rem' }}>{t(art.title)}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {t(art.statement)}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    <BookOpen size={12} style={{ display: 'inline', marginRight: 4 }} /> {t('Scripture Foundations')}
                  </div>
                  <div className="scripture-tags">
                    {art.scriptures.map(sc => (
                      <span key={sc} className="scripture-tag">{t(sc)}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEET OUR FOUNDER */}
      <section id="founder" className="section section-royal">
        <div className="container founder-showcase">
          <div className="founder-portrait-frame">
            <img src={FOUNDER_INFO.portraitPrimary} alt={FOUNDER_INFO.name} />
          </div>

          <div>
            <span className="eyebrow eyebrow-light">{t('Meet Our Founder')}</span>
            <h2 style={{ fontSize: 'var(--text-3xl)', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              {FOUNDER_INFO.name}
            </h2>
            <p style={{ color: 'var(--gold-300)', fontWeight: 700, marginBottom: '1.25rem' }}>
              {t(FOUNDER_INFO.role)} · Ephesus Gatherings Worldwide
            </p>
            <p style={{ color: 'rgba(248,250,252,0.9)', marginBottom: '1rem', fontSize: '1.04rem' }}>
              {t(FOUNDER_INFO.shortBio)}
            </p>
            <p style={{ color: 'rgba(248,250,252,0.78)', marginBottom: '1.75rem', fontSize: '0.96rem' }}>
              {t(FOUNDER_INFO.extendedBio)}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={FOUNDER_INFO.podcasts.apple}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold btn-sm"
              >
                <Headphones size={15} /> {t('Apple Podcasts')}
              </a>
              <a
                href={FOUNDER_INFO.podcasts.spotify}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost-light btn-sm"
              >
                Spotify <ExternalLink size={14} />
              </a>
              <a
                href={FOUNDER_INFO.podcasts.youtube}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost-light btn-sm"
              >
                @officialprophetedem <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. MOTHER CHURCH MINISTRIES & ARMS */}
      <section id="ministries" className="section">
        <div id="leaders" style={{ position: 'relative', top: '-80px' }} />
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">{t('Mother Church Ministries & Arms')}</span>
              <h2 className="section-title">
                {t('Six Pillars of')} <span className="accent-serif">{t('Kingdom Impact')}</span>
              </h2>
              <p className="section-lead">
                {t('From our sanctuary at The Son Place in Accra to student outreaches and worldwide digital broadcasts, explore how the ministry strengthens the body of Christ.')}
              </p>
            </div>
            <Link to="/join" className="btn btn-outline">
              {t('Get Involved')} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {MOTHER_CHURCH_MINISTRIES.map(pillar => (
              <article key={pillar.id} className="card card-interactive event-card">
                <div className="event-media">
                  <img src={pillar.image} alt={t(pillar.title)} loading="lazy" />
                </div>
                <div className="event-body">
                  <div>
                    <span className="badge badge-gold" style={{ marginBottom: '0.65rem' }}>
                      {t(pillar.category)}
                    </span>
                    <h3 style={{ fontSize: '1.24rem', lineHeight: 1.35, marginBottom: '0.55rem' }}>
                      {t(pillar.title)}
                    </h3>
                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                      {t(pillar.description)}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.15rem 0', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                      {pillar.highlights.map(hl => (
                        <li key={hl} style={{ fontSize: '0.82rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                          <CheckCircle2 size={13} style={{ color: 'var(--brand-royal)', flexShrink: 0 }} />
                          {t(hl)}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <Link
                      to={pillar.link.to}
                      style={{
                        fontWeight: 700,
                        fontSize: '0.88rem',
                        color: 'var(--brand-primary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      {t(pillar.link.label)} <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BECOME PART OF THE FAMILY: MEMBERS VS AFFILIATES */}
      <section id="belong" className="section section-stage">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 700, marginInline: 'auto', marginBottom: '2.5rem' }}>
            <span className="eyebrow">{t('Become Part of the Family')}</span>
            <h2 className="section-title">
              {t('Two Meaningful Ways to')} <span className="accent-serif">{t('Walk With Us')}</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              {t('Whether Ephesus Gatherings Worldwide is your primary church home or you belong to a local church while staying connected to this stream, you are warmly welcomed.')}
            </p>
          </div>

          <div className="grid-2">
            <div className="card">
              <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
                {t('Primary Spiritual Home')}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t('Members')}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                {t('For believers who have prayerfully chosen Ephesus Gatherings Worldwide as their primary church home for spiritual growth, apostolic shepherding, and kingdom service.')}
              </p>
              <ul className="check-list" style={{ marginBottom: '1.5rem' }}>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Full pastoral care and personal shepherding from EGW leadership')}</li>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Complete access to Foundation School, discipleship tracks & trainings')}</li>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> {t('Serve actively in ministry departments and volunteer teams')}</li>
              </ul>
              <Link to="/join?type=member" className="btn btn-primary">
                <Users size={16} /> {t('Register as a Member')}
              </Link>
            </div>

            <div className="card">
              <span className="badge badge-navy" style={{ marginBottom: '0.75rem' }}>
                {t('Complementary Fellowship')}
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{t('Affiliates')}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                {t('For believers faithfully committed to a local church elsewhere who desire to fellowship occasionally and stay nourished by EGW’s teaching and prayer.')}
              </p>
              <ul className="check-list" style={{ marginBottom: '1.5rem' }}>
                <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> {t('Access to public online services, conferences, and prayer watches')}</li>
                <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> {t('Receive prophetic alerts, daily readings, and event invitations')}</li>
                <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> {t('Encouragement that complements—never replaces—your home church')}</li>
              </ul>
              <Link to="/join?type=affiliate" className="btn btn-outline">
                {t('Register as an Affiliate')} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
