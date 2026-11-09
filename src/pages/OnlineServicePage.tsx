import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  Check,
  CheckCircle2,
  Copy,
  Download,
  ExternalLink,
  Headphones,
  Heart,
  MessageSquareHeart,
  NotebookPen,
  Play,
  Radio,
  Search,
  Share2,
  Youtube
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { FOUNDER_INFO, MEDIA_LIBRARY, SERMON_CATEGORIES } from '../data/ministryData';
import {
  WEEKLY_SERVICES,
  downloadICS,
  formatGMTServiceInLocal,
  getNextServiceOccurrence,
  isTopMissionOverrideMonth
} from '../utils/time';

const LATEST_SERVICE = MEDIA_LIBRARY.find(m => m.id === 'yt--5wUHKAsoHA') || MEDIA_LIBRARY[1];

type ConsoleTab = 'notes' | 'prayer' | 'salvation' | 'share';

export const OnlineServicePage: React.FC = () => {
  const { nextGathering, playMedia } = useApp();
  const [stageYoutubeId, setStageYoutubeId] = useState<string | null>(null);
  const [consoleTab, setConsoleTab] = useState<ConsoleTab>('notes');
  const [notes, setNotes] = useState<string>(() => {
    try {
      return localStorage.getItem('egw-service-notes') || '';
    } catch {
      return '';
    }
  });
  const [prayerName, setPrayerName] = useState('');
  const [prayerText, setPrayerText] = useState('');
  const [prayerSent, setPrayerSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedLibCat, setSelectedLibCat] = useState<string>('All');
  const [searchLib, setSearchLib] = useState<string>('');

  const filteredMedia = useMemo(() => {
    return MEDIA_LIBRARY.filter(item => {
      const catOk = selectedLibCat === 'All' || item.category === selectedLibCat;
      const q = searchLib.trim().toLowerCase();
      const qOk =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.speaker.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [selectedLibCat, searchLib]);

  useEffect(() => {
    try {
      localStorage.setItem('egw-service-notes', notes);
    } catch {
      // ignore
    }
  }, [notes]);

  const handleDownloadNotes = () => {
    const content = `Ephesus Gatherings Worldwide — Service Notes (${new Date().toLocaleDateString()})\n\n${notes || 'No notes recorded yet.'}`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `egw-service-notes-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prayerText.trim()) return;
    setPrayerSent(true);
    setPrayerText('');
  };

  const handleCopyInvite = () => {
    const shareUrl = window.location.href;
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ paddingBottom: '2.75rem' }}>
        <div className="container">
          <span className="eyebrow eyebrow-light">Live Broadcast Sanctuary · Open to All</span>
          <h1>Worship With Us Live, Every Week, From Wherever You Are</h1>
          <p className="lead">
            No account required. Open this stage a few minutes early, take live sermon notes, send prayer requests in real time, and worship alongside believers across the nations.
          </p>
        </div>
      </section>

      {/* Main Broadcast Stage + Interactive Sanctuary Console */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="broadcast-layout">
            {/* Left: Video / Countdown Stage */}
            <div className="broadcast-stage-screen">
              <div className="stage-video-area">
                {stageYoutubeId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${stageYoutubeId}?autoplay=1&rel=0`}
                    title="EGW Broadcast Stage"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src="https://ephesusgatheringsworldwide.org/wp-content/uploads/2025/07/PWWC-4243-scaled-1.jpg"
                      alt="Ephesus Gatherings Worldwide Sanctuary Broadcast"
                      className="poster"
                    />
                    <div className="stage-center-overlay">
                      <div style={{ fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: nextGathering.isLive ? '#F87171' : 'var(--gold-300)', fontWeight: 700, marginBottom: '0.55rem' }}>
                        {nextGathering.isLive ? '● Live Broadcast In Progress' : `Next Service · Starts ${nextGathering.compactCountdown}`}
                      </div>

                      <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', color: '#FFFFFF', marginBottom: '0.35rem' }}>
                        {nextGathering.service.title}
                      </h2>
                      <p style={{ color: 'rgba(248,250,252,0.85)', marginBottom: '1.35rem', maxWidth: 460, fontSize: '0.98rem' }}>
                        {nextGathering.humanWhen}
                      </p>

                      {!nextGathering.isLive && (
                        <div className="countdown-boxes" style={{ width: 'min(360px, 100%)', marginBottom: '1.35rem' }}>
                          <div className="countdown-cell"><span className="countdown-num">{nextGathering.days}</span><span className="countdown-lbl">Days</span></div>
                          <div className="countdown-cell"><span className="countdown-num">{nextGathering.hours}</span><span className="countdown-lbl">Hrs</span></div>
                          <div className="countdown-cell"><span className="countdown-num">{nextGathering.minutes}</span><span className="countdown-lbl">Min</span></div>
                          <div className="countdown-cell"><span className="countdown-num">{nextGathering.seconds}</span><span className="countdown-lbl">Sec</span></div>
                        </div>
                      )}

                      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.7rem' }}>
                        <button
                          type="button"
                          className="btn btn-gold btn-sm"
                          onClick={() => setStageYoutubeId(LATEST_SERVICE.youtubeId || '-5wUHKAsoHA')}
                        >
                          <Play size={15} fill="currentColor" /> Watch Latest Sunday Service (Overcomers 6)
                        </button>
                        <a
                          href="https://ephesus-radio.mixlr.com/events/4361028"
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-ghost-light btn-sm"
                        >
                          <Radio size={16} /> Open Mixlr Audio
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Stage Footer Bar */}
              <div
                style={{
                  padding: '0.95rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  color: '#F8FAFC',
                  background: '#09142A'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.88rem' }}>
                  <Radio size={17} style={{ color: 'var(--gold-400)' }} />
                  <span>
                    {stageYoutubeId
                      ? `Now Playing on Stage: ${(MEDIA_LIBRARY.find(m => m.youtubeId === stageYoutubeId) || LATEST_SERVICE).title}`
                      : `Up Next: ${nextGathering.service.title} (${nextGathering.gmtFormatted})`}
                  </span>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  {stageYoutubeId && (
                    <button
                      type="button"
                      className="btn btn-ghost-light btn-sm"
                      onClick={() => setStageYoutubeId(null)}
                    >
                      Back to Live Countdown
                    </button>
                  )}
                  <button
                    type="button"
                    className="btn btn-ghost-light btn-sm"
                    onClick={() =>
                      downloadICS({
                        title: `EGW — ${nextGathering.service.title}`,
                        description: nextGathering.service.description,
                        startIso: nextGathering.targetDate.toISOString(),
                        durationMinutes: nextGathering.service.durationMinutes
                      })
                    }
                  >
                    <Bell size={14} /> Set Reminder
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Interactive Companion Console */}
            <aside className="stage-console-panel" aria-label="Interactive Service Companion">
              <div className="console-tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={consoleTab === 'notes'}
                  className={`console-tab ${consoleTab === 'notes' ? 'active' : ''}`}
                  onClick={() => setConsoleTab('notes')}
                >
                  <NotebookPen size={14} style={{ display: 'inline', marginRight: 4 }} /> Notes
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={consoleTab === 'prayer'}
                  className={`console-tab ${consoleTab === 'prayer' ? 'active' : ''}`}
                  onClick={() => setConsoleTab('prayer')}
                >
                  <MessageSquareHeart size={14} style={{ display: 'inline', marginRight: 4 }} /> Prayer
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={consoleTab === 'salvation'}
                  className={`console-tab ${consoleTab === 'salvation' ? 'active' : ''}`}
                  onClick={() => setConsoleTab('salvation')}
                >
                  <Heart size={14} style={{ display: 'inline', marginRight: 4 }} /> Altar
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={consoleTab === 'share'}
                  className={`console-tab ${consoleTab === 'share' ? 'active' : ''}`}
                  onClick={() => setConsoleTab('share')}
                >
                  <Share2 size={14} style={{ display: 'inline', marginRight: 4 }} /> Invite
                </button>
              </div>

              <div className="console-body">
                {consoleTab === 'notes' && (
                  <>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Personal Sermon Notes</h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        Saved automatically on your device as you type.
                      </p>
                    </div>
                    <textarea
                      className="field-textarea"
                      style={{ flex: 1, minHeight: 190 }}
                      value={notes}
                      onChange={e => setNotes(e.target.value)}
                      placeholder="Write Scripture references, prophetic declarations, and personal takeaways..."
                    />
                    <button type="button" className="btn btn-outline btn-sm" onClick={handleDownloadNotes}>
                      <Download size={15} /> Export Notes (.txt)
                    </button>
                  </>
                )}

                {consoleTab === 'prayer' && (
                  <>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.2rem' }}>Live Prayer Desk</h3>
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                        Held in confidence and lifted up by our intercessory team.
                      </p>
                    </div>
                    {prayerSent ? (
                      <div style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--ok-green-bg)', color: 'var(--ok-green)' }}>
                        <CheckCircle2 size={22} style={{ marginBottom: '0.4rem' }} />
                        <strong style={{ display: 'block' }}>Your prayer request has been received.</strong>
                        <p style={{ fontSize: '0.85rem', marginTop: '0.25rem' }}>
                          Our pastors and prayer coordinators are standing in faith with you.
                        </p>
                        <button
                          type="button"
                          className="btn btn-outline btn-sm"
                          style={{ marginTop: '0.85rem' }}
                          onClick={() => setPrayerSent(false)}
                        >
                          Send Another Request
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handlePrayerSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <div>
                          <label className="field-label">Your Name</label>
                          <input
                            type="text"
                            className="field-input"
                            value={prayerName}
                            onChange={e => setPrayerName(e.target.value)}
                            placeholder="Optional or first name"
                          />
                        </div>
                        <div>
                          <label className="field-label">How can we pray with you? <span className="req">*</span></label>
                          <textarea
                            required
                            className="field-textarea"
                            value={prayerText}
                            onChange={e => setPrayerText(e.target.value)}
                            placeholder="Share your prayer point..."
                          />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm">
                          Send to Prayer Team
                        </button>
                      </form>
                    )}
                  </>
                )}

                {consoleTab === 'salvation' && (
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1, gap: '1rem' }}>
                    <div>
                      <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>Altar Call</span>
                      <h3 style={{ fontSize: '1.2rem', marginBottom: '0.45rem' }}>Ready to Receive Jesus?</h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.85rem' }}>
                        “For with the heart one believes unto righteousness, and with the mouth confession is made unto salvation.” — Romans 10:10
                      </p>
                      <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        If the Holy Spirit is tugging at your heart right now during the broadcast, we have prepared a guided salvation prayer and a pastoral welcome gift for you.
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      <Link to="/salvation" className="btn btn-gold btn-sm">
                        <Heart size={15} /> Pray the Salvation Prayer Now
                      </Link>
                      <Link to="/give" className="btn btn-outline btn-sm">
                        Honour the Lord with Tithes / Offering
                      </Link>
                    </div>
                  </div>
                )}

                {consoleTab === 'share' && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem' }}>Invite Someone to Worship</h3>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        A single link can bring healing, peace, and direction to a friend or family member today.
                      </p>
                    </div>
                    <button type="button" className="btn btn-primary btn-sm" onClick={handleCopyInvite}>
                      {copied ? <Check size={15} /> : <Copy size={15} />}
                      {copied ? 'Broadcast Link Copied!' : 'Copy Broadcast Stage Link'}
                    </button>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent('Worship live with us at Ephesus Gatherings Worldwide: https://ephesusgatheringsworldwide.org/online-service/')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline btn-sm"
                    >
                      Share via WhatsApp <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* How to Join in 3 Steps */}
      <section className="section section-stage">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 680, marginInline: 'auto', marginBottom: '2.5rem' }}>
            <span className="eyebrow">Simple & Accessible</span>
            <h2 className="section-title">
              Three Steps, <span className="accent-serif">Zero Sign-Up Barriers</span>
            </h2>
          </div>

          <div className="grid-3">
            {[
              {
                step: '01',
                title: 'Open a Few Minutes Early',
                desc: 'Visit this page from any phone, tablet, or computer. Set a calendar reminder below so you never miss the start.'
              },
              {
                step: '02',
                title: 'Press Watch Live on Stage',
                desc: 'As soon as our sanctuary stream goes live, the badge turns red and video plays right inside the Stage or on YouTube.'
              },
              {
                step: '03',
                title: 'Take Part Wholeheartedly',
                desc: 'Prepare Communion elements at home, write notes in the companion console, and send prayer points in real time.'
              }
            ].map(s => (
              <div key={s.step} className="card">
                <div className="faith-num" style={{ marginBottom: '0.65rem' }}>{s.step}</div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Sanctuary & Monthly Schedule Row */}
          <div className="grid-2" style={{ marginTop: '1.5rem' }}>
            {WEEKLY_SERVICES.map(svc => {
              const nextDate = getNextServiceOccurrence(svc);
              const t = formatGMTServiceInLocal(nextDate.getUTCDay(), svc.hourGMT, svc.minuteGMT, nextDate);
              return (
                <div key={svc.id} className="card" style={{ padding: '1.25rem 1.4rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '1.08rem', marginBottom: '0.25rem' }}>{svc.title}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-gold)', fontWeight: 600 }}>
                    {svc.id === 'top-mission-service' && isTopMissionOverrideMonth(nextDate)
                      ? 'This Month: Tue, Nov 10 & Wed, Nov 11'
                      : svc.scheduleLabel || `Every ${t.localDayFull}`}{' '}
                    · {t.isSameAsGMT ? t.gmt : `${t.localTime} ${t.shortTz} (${t.gmt})`}
                  </div>
                  {svc.location && (
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                      {svc.location}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Past Services, Sermons, Worship & Podcast Library */}
      <section id="library" className="section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">Ephesus Broadcast & Archive</span>
              <h2 className="section-title">
                Watch Again, Worship Songs & <span className="accent-serif">The Emergence Podcast</span>
              </h2>
              <p className="section-lead">
                Stream messages and live worship right in our floating player while you browse the site.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <a
                href={FOUNDER_INFO.podcasts.spotify}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
              >
                <Headphones size={15} /> Spotify Podcast
              </a>
              <a
                href={FOUNDER_INFO.podcasts.apple}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline btn-sm"
              >
                Apple Podcasts <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Series / Category Filter & Search Bar */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              marginBottom: '2rem'
            }}
          >
            <div className="filter-bar" style={{ margin: 0 }}>
              <div className="chip-group">
                {SERMON_CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    type="button"
                    className={`chip-btn ${selectedLibCat === cat ? 'is-active' : ''}`}
                    onClick={() => setSelectedLibCat(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <div className="search-filter-box" style={{ maxWidth: 360, width: '100%', position: 'relative' }}>
                <Search
                  size={15}
                  style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
                />
                <input
                  type="text"
                  className="field-input"
                  style={{ paddingLeft: '2.4rem', borderRadius: 'var(--radius-pill)', width: '100%' }}
                  placeholder="Filter messages by topic or series..."
                  value={searchLib}
                  onChange={e => setSearchLib(e.target.value)}
                />
              </div>
              <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                Showing {filteredMedia.length} of {MEDIA_LIBRARY.length} messages & songs
              </span>
            </div>
          </div>

          <div className="grid-2">
            {filteredMedia.map(item => (
              <article
                key={item.id}
                className="card card-interactive media-row-card"
              >
                <div style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', aspectRatio: '16 / 10', background: 'var(--navy-900)' }}>
                  <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <span className="badge badge-navy" style={{ marginBottom: '0.45rem' }}>
                    {item.category} · {item.duration}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.25rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => playMedia(item)}
                    >
                      <Play size={14} fill="currentColor" /> Play in Drawer
                    </button>
                    {item.youtubeId && (
                      <button
                        type="button"
                        className="btn btn-outline btn-sm"
                        onClick={() => {
                          setStageYoutubeId(item.youtubeId!);
                          window.scrollTo({ top: 180, behavior: 'smooth' });
                        }}
                      >
                        Play on Main Stage
                      </button>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
