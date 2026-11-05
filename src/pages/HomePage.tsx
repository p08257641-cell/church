import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  Globe2,
  Heart,
  Music,
  Play,
  Quote,
  Users
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  FLAG_URLS,
  FOUNDER_INFO,
  GALLERY_PHOTOS,
  HERO_SLIDES,
  MEDIA_LIBRARY,
  MINISTRY_EVENTS,
  TESTIMONIES_DATA
} from '../data/ministryData';
import {
  WEEKLY_SERVICES,
  downloadICS,
  formatGMTServiceInLocal
} from '../utils/time';

export const HomePage: React.FC = () => {
  const { nextGathering, playMedia, openLightbox } = useApp();
  const [slideIdx, setSlideIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setSlideIdx(prev => (prev + 1) % HERO_SLIDES.length);
    }, 7200);
    return () => window.clearInterval(id);
  }, [paused]);

  const currentSlide = HERO_SLIDES[slideIdx];
  const featuredTestimony = TESTIMONIES_DATA[0];
  const worshipTrack = MEDIA_LIBRARY[0]; // By My Side (Live)
  const campClip = MEDIA_LIBRARY[3]; // ITFC 2026 Clip
  const sundayTime = formatGMTServiceInLocal(0, 15, 0);

  const handleHeroReminder = () => {
    downloadICS({
      title: `EGW — ${nextGathering.service.title}`,
      description: nextGathering.service.description,
      startIso: nextGathering.targetDate.toISOString(),
      durationMinutes: nextGathering.service.durationMinutes
    });
  };

  return (
    <div>
      {/* 1. EDITORIAL FULL-BLEED SANCTUARY HERO */}
      <section
        className="hero-showcase"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="hero-bg-layer" aria-hidden="true">
          {HERO_SLIDES.map((s, idx) => (
            <div key={s.id} className={`hero-bg-slide ${idx === slideIdx ? 'is-active' : ''}`}>
              <img
                src={s.image}
                alt=""
                style={{ objectPosition: s.imagePosition || 'center 25%' }}
              />
            </div>
          ))}
          <div className="hero-overlay" />
        </div>

        <div className="container hero-editorial-frame">
          <div className="hero-copy-block">
            <div className="hero-kicker">{currentSlide.eyebrow}</div>

            <h1 className="hero-title">{currentSlide.title}</h1>

            <p className="hero-desc">{currentSlide.description}</p>

            <div className="hero-cta-row">
              <Link to={currentSlide.primaryCta.to} className="btn btn-white">
                {currentSlide.primaryCta.label} <ArrowRight size={16} />
              </Link>
              <Link to={currentSlide.secondaryCta.to} className="btn btn-ghost-light">
                {currentSlide.secondaryCta.label}
              </Link>
            </div>

            {currentSlide.scripture && (
              <p className="hero-scripture-note">{currentSlide.scripture}</p>
            )}
          </div>

          <div className="hero-Controls" aria-label="Slide navigation">
            <div className="hero-counter-row">
              <span>
                {String(slideIdx + 1).padStart(2, '0')} / {String(HERO_SLIDES.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="hero-arrow-btn"
                onClick={() => setSlideIdx(prev => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
                aria-label="Previous slide"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                className="hero-arrow-btn"
                onClick={() => setSlideIdx(prev => (prev + 1) % HERO_SLIDES.length)}
                aria-label="Next slide"
              >
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="hero-bars" role="tablist">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === slideIdx}
                  aria-label={`Slide ${idx + 1}: ${s.title}`}
                  className={`hero-bar ${idx === slideIdx ? 'is-active' : ''}`}
                  onClick={() => setSlideIdx(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOCKED ARCHITECTURAL SANCTUARY LEDGER */}
      <section className="hero-ledger-band" aria-label="Key ministry details">
        <div className="container hero-ledger-grid">
          <div className="hero-ledger-cell">
            <div>
              <div className="ledger-meta">
                {nextGathering.isLive ? (
                  <span style={{ color: 'var(--live-red)' }}>● Live Broadcast Now</span>
                ) : (
                  <>
                    <span>Up Next</span>
                    <span>·</span>
                    <span style={{ color: 'var(--text-gold)' }}>Starts {nextGathering.compactCountdown}</span>
                  </>
                )}
              </div>
              <div className="ledger-title">{nextGathering.service.title}</div>
              <div className="ledger-sub">{nextGathering.humanWhen}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.1rem', flexWrap: 'wrap' }}>
              <Link to="/online-service" className="ledger-link">
                Join online service <ArrowRight size={14} />
              </Link>
              <button
                type="button"
                onClick={handleHeroReminder}
                style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600 }}
              >
                + Save reminder (.ics)
              </button>
            </div>
          </div>

          <div className="hero-ledger-cell">
            <div>
              <div className="ledger-meta">Main Sanctuary Worship</div>
              <div className="ledger-title">Sunday Service &amp; Global Broadcast</div>
              <div className="ledger-sub">
                Every Sunday · 15:00 GMT · In-Person &amp; Online ({sundayTime.isSameAsGMT ? sundayTime.gmt : `${sundayTime.localTime} ${sundayTime.shortTz}`})
              </div>
            </div>
            <Link to="/events" className="ledger-link">
              See full weekly schedule <ArrowRight size={14} />
            </Link>
          </div>

          <div className="hero-ledger-cell">
            <div>
              <div className="ledger-meta">Education &amp; Training Unit</div>
              <div className="ledger-title">5 Specialized Schools</div>
              <div className="ledger-sub">
                From Foundation School to School of the Prophets—equipping God’s overcomers.
              </div>
            </div>
            <Link to="/about#schools" className="ledger-link">
              Explore the 5 Schools <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. WEEKLY ONLINE SERVICES IN VISITOR'S TIMEZONE */}
      <section className="section section-stage">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">Gather Every Week</span>
              <h2 className="section-title">
                Three Weekly Online Services, <span className="accent-serif">Synchronised to You</span>
              </h2>
              <p className="section-lead">
                Every service streams online for our global family—automatically shown in GMT and your device’s time zone ({nextGathering.timezoneName}).
              </p>
            </div>
            <Link to="/online-service" className="btn btn-primary">
              How to Join in 3 Steps <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {WEEKLY_SERVICES.map(svc => {
              const local = formatGMTServiceInLocal(svc.dayOfWeek, svc.hourGMT, svc.minuteGMT);
              return (
                <article key={svc.id} className="card card-interactive service-card">
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.9rem' }}>
                      <span className="badge badge-navy">{svc.category}</span>
                      <Clock size={17} style={{ color: 'var(--brand-gold)' }} />
                    </div>
                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.35rem' }}>{svc.title}</h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{svc.description}</p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div className="time-callout">
                      <div>
                        <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', fontWeight: 700 }}>
                          Every {local.localDayFull}
                        </div>
                        <strong>{local.gmt}</strong>
                      </div>
                      {!local.isSameAsGMT && (
                        <div style={{ textAlign: 'right' }}>
                          <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-gold)', fontWeight: 700 }}>
                            Your Time
                          </div>
                          <strong style={{ color: 'var(--brand-royal)' }}>
                            {local.localTime} {local.shortTz}
                          </strong>
                        </div>
                      )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Link
                        to="/online-service"
                        style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                      >
                        Watch on Stage <ArrowRight size={15} />
                      </Link>
                      <button
                        type="button"
                        className="btn btn-outline btn-sm"
                        onClick={() =>
                          downloadICS({
                            title: `EGW — ${svc.title}`,
                            description: svc.description,
                            startIso: new Date().toISOString(),
                            durationMinutes: svc.durationMinutes
                          })
                        }
                      >
                        + Calendar
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. VISION & THREE PILLARS + VIDEO HIGHLIGHT */}
      <section className="section">
        <div className="container vision-split">
          <div>
            <span className="eyebrow">Who We Are & Why We Exist</span>
            <h2 className="section-title">
              A Christ-Centred Extension of Our <span className="accent-serif">Mother Church in Ghana</span>
            </h2>
            <blockquote
              className="scripture-quote"
              style={{
                padding: '1.15rem 1.35rem',
                borderLeft: '4px solid var(--brand-gold)',
                background: 'var(--bg-stage)',
                borderRadius: '0 var(--radius-md) var(--radius-md) 0',
                marginBlock: '1.25rem'
              }}
            >
              “Ephesus Gatherings Worldwide serves as a training centre for equipping God’s overcomers to take their place on earth for the Lord Jesus Christ.”
            </blockquote>
            <p style={{ color: 'var(--text-secondary)' }}>
              Located at Mikaddo Plaza, Labone Junction, Accra, Ghana, Ephesus Gatherings Worldwide hosts dynamic worship services, offers practical discipleship programs, and connects believers across continents through Spirit-filled worship and sound biblical training.
            </p>

            <div className="pillar-list">
              <div className="pillar-row">
                <span className="pillar-num">01</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Spirit-Filled Worship</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Dynamic weekly online gatherings saturated with the tangible presence and gifts of the Holy Spirit.
                  </p>
                </div>
              </div>
              <div className="pillar-row">
                <span className="pillar-num">02</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Sound Biblical Teaching</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Christ-exalting exposition and discipleship tracks anchored in the finished work of the Cross.
                  </p>
                </div>
              </div>
              <div className="pillar-row">
                <span className="pillar-num">03</span>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.2rem' }}>Practical Ministry Training</h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Fellowship, intercession, and equipping that empower every believer to transform their sphere of influence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="vision-media-stack">
              <img
                src="/images/sanctuary-corporate-worship.jpg"
                alt="Worship and fellowship at Ephesus Gatherings Worldwide"
              />
              <div className="vision-play-overlay">
                <div style={{ maxWidth: '72%' }}>
                  <span className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>
                    Ministry Moment
                  </span>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>
                    Watch Corporate Prayer & Fellowship at ITFC 2026
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-gold"
                  onClick={() => playMedia(campClip)}
                  aria-label="Play fellowship video highlight"
                >
                  <Play size={18} fill="currentColor" /> Watch
                </button>
              </div>
            </div>

            <div
              className="card"
              style={{
                marginTop: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                <Globe2 size={28} style={{ color: 'var(--brand-royal)', flexShrink: 0 }} />
                <div>
                  <strong style={{ display: 'block' }}>Two Ways to Belong</strong>
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                    Join as a primary <strong>Member</strong> or walk alongside us as an <strong>Affiliate</strong>.
                  </span>
                </div>
              </div>
              <Link to="/join" className="btn btn-outline btn-sm">
                Explore Paths <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER SPOTLIGHT + ORIGINAL WORSHIP MUSIC ("BY MY SIDE") */}
      <section className="section section-royal">
        <div className="container founder-showcase">
          <div className="founder-portrait-frame">
            <img src={FOUNDER_INFO.portraitSquare} alt={FOUNDER_INFO.name} />
          </div>

          <div>
            <span className="eyebrow eyebrow-light">Founder & Lead Convener</span>
            <h2 style={{ fontSize: 'var(--text-3xl)', color: '#FFFFFF', marginBottom: '1rem' }}>
              {FOUNDER_INFO.name}
            </h2>
            <p style={{ fontSize: '1.08rem', color: 'rgba(248,250,252,0.9)', marginBottom: '1rem' }}>
              {FOUNDER_INFO.shortBio}
            </p>
            <p style={{ fontSize: '0.96rem', color: 'rgba(248,250,252,0.78)', marginBottom: '1.65rem' }}>
              “{FOUNDER_INFO.welcomeLetter[0]}”
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
              <Link to="/about#welcome" className="btn btn-gold">
                Read Pastor’s Full Letter <ArrowRight size={16} />
              </Link>
              <a
                href={FOUNDER_INFO.podcasts.spotify}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost-light"
              >
                The Emergence Podcast <ExternalLink size={15} />
              </a>
            </div>

            {/* Inline Worship Player Trigger Card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(212,175,55,0.38)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.1rem 1.25rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.95rem' }}>
                <img
                  src={worshipTrack.thumbnail}
                  alt={worshipTrack.title}
                  style={{ width: 76, height: 50, objectFit: 'cover', borderRadius: 8 }}
                />
                <div>
                  <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-300)', fontWeight: 700 }}>
                    <Music size={12} style={{ display: 'inline', marginRight: 4 }} /> Featured Worship Song
                  </div>
                  <strong style={{ color: '#FFFFFF', fontSize: '1rem' }}>{worshipTrack.title}</strong>
                  <div style={{ fontSize: '0.8rem', color: 'rgba(248,250,252,0.72)' }}>
                    {worshipTrack.speaker} · {worshipTrack.duration}
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-gold btn-sm"
                onClick={() => playMedia(worshipTrack)}
              >
                <Play size={15} fill="currentColor" /> Play Live Worship
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. UPCOMING GATHERINGS & SPECIAL SERIES (CURATED, ZERO DUPLICATES) */}
      <section className="section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">Gatherings & Programmes</span>
              <h2 className="section-title">
                Upcoming Moments on the <span className="accent-serif">Global Calendar</span>
              </h2>
              <p className="section-lead">
                From weekly prophetic prayer watches to global crossover convocations—join from anywhere.
              </p>
            </div>
            <Link to="/events" className="btn btn-outline">
              <Calendar size={16} /> View Full Calendar
            </Link>
          </div>

          <div className="grid-3">
            {[MINISTRY_EVENTS[0], MINISTRY_EVENTS[4], MINISTRY_EVENTS[5]].map(ev => (
              <article key={ev.id} className="card card-interactive event-card">
                <div className="event-media">
                  <img src={ev.image} alt={ev.title} />
                </div>
                <div className="event-body">
                  <div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                      <span className="badge badge-gold">{ev.category}</span>
                      <span className="badge badge-navy">{ev.timeGMT}</span>
                    </div>
                    <h3 style={{ fontSize: '1.28rem', marginBottom: '0.35rem' }}>{ev.title}</h3>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-royal)', marginBottom: '0.55rem' }}>
                      {ev.dateLabel}
                    </p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{ev.description}</p>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <Link
                      to="/events"
                      style={{ fontWeight: 700, fontSize: '0.88rem', color: 'var(--brand-primary)', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                    >
                      Event Details <ArrowRight size={14} />
                    </Link>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() =>
                        downloadICS({
                          title: ev.title,
                          description: ev.description,
                          startIso: ev.startIso,
                          durationMinutes: ev.durationMinutes,
                          location: ev.location
                        })
                      }
                    >
                      Save Date
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TESTIMONY SPOTLIGHT & SPIRITUAL GROWTH */}
      <section className="section section-stage">
        <div className="container grid-2">
          {/* Featured Testimony */}
          <div className="card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.25rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <span className="badge badge-gold">Featured Testimony</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.82rem', fontWeight: 600 }}>
                  <img src={FLAG_URLS[featuredTestimony.flagCode]} alt="" className="flag-mini" />
                  {featuredTestimony.country}
                </span>
              </div>
              <Quote size={28} style={{ color: 'var(--brand-gold)', marginBottom: '0.6rem' }} />
              <h3 style={{ fontSize: '1.45rem', marginBottom: '0.65rem' }}>{featuredTestimony.title}</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                {featuredTestimony.summary}
              </p>
              <blockquote
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.15rem',
                  color: 'var(--text-primary)',
                  paddingLeft: '0.9rem',
                  borderLeft: '3px solid var(--brand-gold)'
                }}
              >
                “{featuredTestimony.closingQuote}”
              </blockquote>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                — {featuredTestimony.author}
              </span>
              <Link to="/testimonies" className="btn btn-primary btn-sm">
                Read All Testimonies <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Daily Word & Salvation Action Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div
              className="card"
              style={{
                background: 'var(--bg-royal-band)',
                color: '#FFFFFF',
                border: '1px solid rgba(212,175,55,0.4)'
              }}
            >
              <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>
                The Greatest Decision
              </span>
              <h3 style={{ fontSize: '1.5rem', color: '#FFFFFF', marginBottom: '0.5rem' }}>
                Jesus Christ — The Way, The Truth, and The Life
              </h3>
              <p style={{ color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem', marginBottom: '1.2rem' }}>
                Salvation is not earned by human works—it is a living relationship with Jesus, received freely by grace through faith. Pray the guided salvation prayer today and let our pastors walk with you.
              </p>
              <Link to="/salvation" className="btn btn-gold btn-sm">
                <Heart size={15} /> Receive Jesus Today
              </Link>
            </div>

            <div className="card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                  <BookOpen size={20} style={{ color: 'var(--brand-royal)' }} />
                  <h3 style={{ fontSize: '1.25rem' }}>Daily Bible Readings & Proverbs Streak</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.93rem' }}>
                  Feed on God’s Word daily with our 1-Year, 10-Month, or 9-Month plans, track your streak right on your device, and explore the Book of the Month.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link to="/daily-readings" className="btn btn-outline btn-sm">
                  Open Today’s Passages <ArrowRight size={15} />
                </Link>
                <Link to="/give" className="btn btn-outline btn-sm">
                  Kingdom Stewardship
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. GLOBAL FAMILY PHOTO GALLERY WITH LIGHTBOX */}
      <section className="section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">Moments of Unity</span>
              <h2 className="section-title">
                One Global Family <span className="accent-serif">In Worship & Fellowship</span>
              </h2>
              <p className="section-lead">
                Click any photograph from our sanctuary services, Ignite The Fire Camp, and global outreach missions to view in full screen.
              </p>
            </div>
            <Link to="/join" className="btn btn-primary">
              <Users size={16} /> Join the EGW Family
            </Link>
          </div>

          <div className="gallery-grid">
            {GALLERY_PHOTOS.map(photo => (
              <div
                key={photo.id}
                className="gallery-tile"
                onClick={() => openLightbox(photo)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') openLightbox(photo);
                }}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <div className="gallery-tile-caption">
                  <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--gold-300)', fontWeight: 700 }}>
                    {photo.category}
                  </span>
                  <span style={{ fontSize: '0.84rem', fontWeight: 600, lineHeight: 1.3 }}>
                    {photo.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
