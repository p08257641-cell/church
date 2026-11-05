import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  Headphones,
  Mail,
  Sparkles,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  ARTICLES_OF_FAITH,
  ArticleOfFaith,
  DIASPORA_LEADERS,
  FLAG_URLS,
  FOUNDER_INFO,
  LANGUAGES
} from '../data/ministryData';

const PILLARS: ('All' | ArticleOfFaith['pillar'])[] = [
  'All',
  'Godhead & Word',
  'Redemption & Spirit',
  'Ordinances & Life',
  'Kingdom & Mission'
];

export const AboutPage: React.FC = () => {
  const { language, setLanguage, currentLang } = useApp();
  const [selectedPillar, setSelectedPillar] = useState<'All' | ArticleOfFaith['pillar']>('All');

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
            <span className="eyebrow eyebrow-light">Ephesus Gatherings Worldwide · Mother Sanctuary & Global Family</span>
            <h1>Our Story, Our Vision & The People Serving You</h1>
            <p className="lead">
              Ephesus Gatherings Worldwide is a Christ-centered training center dedicated to equipping God’s overcomers to fulfill their divine purpose, experience divine health and healing, and make a transformative impact for the Lord Jesus Christ.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.6rem' }}>
              {[
                { href: '#welcome', label: 'Pastor’s Welcome' },
                { href: '#vision', label: 'Story & Vision' },
                { href: '#schools', label: '5 Training Schools' },
                { href: '#beliefs', label: '12 Beliefs' },
                { href: '#founder', label: 'Our Founder' },
                { href: '#leaders', label: 'Ministry Leaders' },
                { href: '#belong', label: 'Member vs Affiliate' }
              ].map(ch => (
                <a key={ch.href} href={ch.href} className="btn btn-ghost-light btn-sm">
                  {ch.label}
                </a>
              ))}
            </div>
          </div>

          <div className="vision-media-stack" style={{ borderColor: 'rgba(212,175,55,0.4)' }}>
            <img
              src="/images/sanctuary-prayer-worship.jpg"
              alt="Ephesus Gatherings Worldwide Sanctuary Congregation"
            />
          </div>
        </div>
      </section>

      {/* 1. PASTORAL WELCOME LETTER + 9 LANGUAGES */}
      <section id="welcome" className="section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">So Glad You Are Here</span>
              <h2 className="section-title">
                {currentLang.welcomeGreeting} — <span className="accent-serif">A Word From Our Founder</span>
              </h2>
            </div>
            <div className="chip-group" aria-label="Welcome greetings in 9 languages">
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
              {FOUNDER_INFO.welcomeLetter.map((para, idx) => (
                <p key={idx} style={{ fontSize: '1.06rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
                  {para}
                </p>
              ))}
              <div style={{ paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                <strong style={{ fontFamily: 'var(--font-serif)', fontSize: '1.35rem', display: 'block' }}>
                  {FOUNDER_INFO.name}
                </strong>
                <span style={{ fontSize: '0.86rem', color: 'var(--text-gold)', fontWeight: 700 }}>
                  {FOUNDER_INFO.role}, Ephesus Gatherings Worldwide
                </span>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--border-gold)' }}>
              <img
                src={FOUNDER_INFO.portraitWithWife}
                alt="Prophet Edem Julius-Cudjoe and his wife"
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
            <span className="eyebrow">Our Mandate</span>
            <h2 className="section-title">
              A Training Centre for <span className="accent-serif">God’s Overcomers</span>
            </h2>
            <p className="scripture-quote" style={{ marginBlock: '1.25rem', color: 'var(--brand-primary)' }}>
              “Ephesus Gatherings Worldwide serves as a training centre for equipping God’s overcomers to take their place on earth for the Lord Jesus Christ.”
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Located at Mikaddo Plaza, Labone Junction, Accra, Ghana, Ephesus Gatherings Worldwide hosts dynamic worship services, offers practical discipleship programs, and connects believers across continents through Spirit-filled worship, sound biblical teaching, and practical ministry training.
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
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{p.title}</h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Education & Training Unit: 5 Specialized Schools */}
          <div id="schools" style={{ paddingTop: '1rem' }}>
            <div style={{ textAlign: 'center', maxWidth: 740, marginInline: 'auto', marginBottom: '2.5rem' }}>
              <span className="eyebrow">Education &amp; Training Unit</span>
              <h2 className="section-title">
                Five Schools to <span className="accent-serif">Equip Overcomers</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)' }}>
                Structured ministerial and discipleship pathways designed to take you from foundational salvation truths into apostolic authority and prevailing faith.
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
                  <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>{sch.badge}</span>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{sch.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{sch.desc}</p>
                </div>
              ))}
            </div>

            {/* Outreach Impact Counter Bar */}
            <div className="card split-card-spotlight">
              <div>
                <span className="badge badge-navy" style={{ marginBottom: '0.5rem' }}>Ephesus Partnership &amp; Outreach</span>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.45rem' }}>Reaching Schools, Winning Souls</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem' }}>
                  The Ephesus Gatherings Partnership Unit supports school outreaches, Bible donations, family welfare, and student scholarships across Ghana and beyond.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', textAlign: 'center' }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--brand-royal)' }}>6+</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>Schools Reached</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--brand-royal)' }}>5,500+</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>People Reached</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.1rem', fontWeight: 700, color: 'var(--brand-royal)' }}>1,250+</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}>Scholarships &amp; Bibles</div>
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
              <span className="eyebrow">Core Values & Doctrine</span>
              <h2 className="section-title">
                Twelve Articles of <span className="accent-serif">Faith</span>
              </h2>
              <p className="section-lead">
                Stated in the exact order confessed by Ephesus Gatherings Worldwide, with the foundational Scriptures each rests upon.
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
                  {pillar}
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
                    <span className="badge badge-navy">{art.pillar}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.55rem' }}>{art.title}</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {art.statement}
                  </p>
                </div>

                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '0.35rem' }}>
                    <BookOpen size={12} style={{ display: 'inline', marginRight: 4 }} /> Scripture Foundations
                  </div>
                  <div className="scripture-tags">
                    {art.scriptures.map(sc => (
                      <span key={sc} className="scripture-tag">{sc}</span>
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
            <span className="eyebrow eyebrow-light">Meet Our Founder</span>
            <h2 style={{ fontSize: 'var(--text-3xl)', color: '#FFFFFF', marginBottom: '0.4rem' }}>
              {FOUNDER_INFO.name}
            </h2>
            <p style={{ color: 'var(--gold-300)', fontWeight: 700, marginBottom: '1.25rem' }}>
              {FOUNDER_INFO.role} · Ephesus Gatherings Worldwide
            </p>
            <p style={{ color: 'rgba(248,250,252,0.9)', marginBottom: '1rem', fontSize: '1.04rem' }}>
              {FOUNDER_INFO.shortBio}
            </p>
            <p style={{ color: 'rgba(248,250,252,0.78)', marginBottom: '1.75rem', fontSize: '0.96rem' }}>
              {FOUNDER_INFO.extendedBio}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={FOUNDER_INFO.podcasts.apple}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold btn-sm"
              >
                <Headphones size={15} /> Apple Podcasts
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

      {/* 5. DIASPORA LEADERSHIP TEAM (ALL 7 COORDINATORS) */}
      <section id="leaders" className="section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">Servant Leadership</span>
              <h2 className="section-title">
                The Team Serving the <span className="accent-serif">Global Family</span>
              </h2>
              <p className="section-lead">
                Dedicated coordinators and department leaders across administration, welfare, online service, and the Education &amp; Training Unit.
              </p>
            </div>
            <Link to="/contact" className="btn btn-outline">
              Contact Leadership <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-4">
            {DIASPORA_LEADERS.map(leader => (
              <article key={leader.id} className="card card-interactive leader-card">
                <div className="leader-photo-wrap">
                  <img src={leader.image} alt={leader.name} className="portrait" loading="lazy" />
                  <span className="leader-country-badge">
                    <img src={FLAG_URLS[leader.flagCode]} alt="" className="flag-mini" />
                    {leader.country}
                  </span>
                </div>
                <div className="leader-body">
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-gold)' }}>
                    {leader.role}
                  </div>
                  <h3 style={{ fontSize: '1.18rem' }}>{leader.name}</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', flex: 1 }}>
                    {leader.focus}
                  </p>
                  <a
                    href={`mailto:${leader.email}`}
                    style={{
                      marginTop: '0.65rem',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: 'var(--brand-royal)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem'
                    }}
                  >
                    <Mail size={13} /> {leader.email}
                  </a>
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
            <span className="eyebrow">Become Part of the Family</span>
            <h2 className="section-title">
              Two Meaningful Ways to <span className="accent-serif">Walk With Us</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Whether Ephesus Gatherings Worldwide is your primary church home or you belong to a local church while staying connected to this stream, you are warmly welcomed.
            </p>
          </div>

          <div className="grid-2">
            <div className="card">
              <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
                Primary Spiritual Home
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Members</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                For believers outside Ghana who have prayerfully chosen EGW as their primary church family for growth, shepherding, and service.
              </p>
              <ul className="check-list" style={{ marginBottom: '1.5rem' }}>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> Full pastoral care and personal shepherding from EGW leadership</li>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> Complete access to Foundation School, discipleship tracks & trainings</li>
                <li><CheckCircle2 size={17} style={{ color: 'var(--ok-green)', flexShrink: 0, marginTop: 3 }} /> Serve actively in ministry departments and volunteer teams</li>
              </ul>
              <Link to="/join?type=member" className="btn btn-primary">
                <Users size={16} /> Register as a Member
              </Link>
            </div>

            <div className="card">
              <span className="badge badge-navy" style={{ marginBottom: '0.75rem' }}>
                Complementary Fellowship
              </span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Affiliates</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.1rem' }}>
                For believers faithfully committed to a local church elsewhere who desire to fellowship occasionally and stay nourished by EGW’s teaching and prayer.
              </p>
              <ul className="check-list" style={{ marginBottom: '1.5rem' }}>
                <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> Access to public online services, conferences, and prayer watches</li>
                <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> Receive prophetic alerts, daily readings, and event invitations</li>
                <li><Sparkles size={17} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 3 }} /> Encouragement that complements—never replaces—your home church</li>
              </ul>
              <Link to="/join?type=affiliate" className="btn btn-outline">
                Register as an Affiliate <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
