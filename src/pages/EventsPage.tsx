import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  Calendar as CalendarIcon,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Radio,
  Search,
  Sparkles,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { MINISTRY_EVENTS, MinistryEvent } from '../data/ministryData';
import {
  WEEKLY_SERVICES,
  computeServiceCountdown,
  downloadICS,
  getNextServiceOccurrence,
  getVisitorTimezone,
  isTopMissionDateUTC,
  isTopMissionOverrideMonth
} from '../utils/time';

const CATEGORIES: ('All' | MinistryEvent['category'])[] = [
  'All',
  'Monthly Convocation',
  'Weekly Service',
  'Special Gathering',
  'Conference & Camp'
];

export const EventsPage: React.FC = () => {
  const { t, locale } = useApp(); // Subscribes to 1s tick & locale updates
  const [selectedCategory, setSelectedCategory] = useState<'All' | MinistryEvent['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [calMonth, setCalMonth] = useState(() => new Date(2026, 10, 1)); // Nov 2026 default
  const [rsvpEvent, setRsvpEvent] = useState<MinistryEvent | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const spotlight = MINISTRY_EVENTS.find(e => e.id === 'top-mission-service') || MINISTRY_EVENTS[0];
  const topMissionTimer = computeServiceCountdown(WEEKLY_SERVICES[1], Date.now(), { t, locale });

  const filteredEvents = useMemo(() => {
    return MINISTRY_EVENTS.filter(ev => {
      const catOk = selectedCategory === 'All' || ev.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const qOk =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        t(ev.title).toLowerCase().includes(q) ||
        ev.subtitle.toLowerCase().includes(q) ||
        t(ev.subtitle).toLowerCase().includes(q) ||
        ev.speaker.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [selectedCategory, searchQuery, t]);

  // Build calendar grid for calMonth
  const calendarCells = useMemo(() => {
    const year = calMonth.getFullYear();
    const month = calMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: { day: number | null; services: string[]; special?: string }[] = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push({ day: null, services: [] });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const dateObj = new Date(year, month, d);
      const dow = dateObj.getDay();
      const svcs: string[] = [];
      if (dow === 0) svcs.push('Sun 15:00 GMT');
      if (isTopMissionDateUTC(year, month, d)) svcs.push('Top Mission 18:30 GMT');

      let special: string | undefined;
      if (month === 11 && d === 31) special = 'Cross Over Service';
      if (month === 1 && d === 18) special = 'ITFC Camp';

      cells.push({ day: d, services: svcs, special });
    }
    return cells;
  }, [calMonth]);

  const monthAgenda = useMemo(() => {
    const year = calMonth.getFullYear();
    const month = calMonth.getMonth();
    const fmt = new Intl.DateTimeFormat(locale, {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: 'UTC'
    });
    return calendarCells
      .filter(c => c.day !== null && (c.services.length > 0 || Boolean(c.special)))
      .map(c => ({
        day: c.day as number,
        dateText: fmt.format(new Date(Date.UTC(year, month, c.day as number))),
        services: c.services,
        special: c.special
      }));
  }, [calendarCells, calMonth, locale]);

  const getEventStartIso = (ev: MinistryEvent) => {
    if (ev.id === 'sunday-main-sanctuary') return getNextServiceOccurrence(WEEKLY_SERVICES[0]).toISOString();
    if (ev.id === 'top-mission-service') return getNextServiceOccurrence(WEEKLY_SERVICES[1]).toISOString();
    return ev.startIso;
  };

  const monthEnLong = calMonth.toLocaleString('en-US', { month: 'long' });

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">{t('Global Programme & Calendar')}</span>
            <h1>{t('Services, Gatherings & Special Programmes Worldwide')}</h1>
            <p className="lead">
              {t('Every detail of what is coming up at Ephesus Gatherings Worldwide—shown alongside your local time zone ({tz}), with one-tap `.ics` calendar sync and online registration.', {
                tz: getVisitorTimezone()
              })}
            </p>
          </div>
          <div className="card" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(212,175,55,0.4)', color: '#FFFFFF' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>{t(spotlight.category)}</span>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.35rem' }}>{t(spotlight.title)}</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(248,250,252,0.82)', marginBottom: '1rem' }}>
              {isTopMissionOverrideMonth(topMissionTimer.targetDate)
                ? t('This Month: Tue, Nov 10 & Wed, Nov 11')
                : t(spotlight.dateLabel)}{' '}
              · {t(spotlight.timeGMT)} · {t('With {speaker}', { speaker: spotlight.speaker })}
            </p>
            <div className="events-hero-actions">
              <button
                type="button"
                className="btn btn-gold btn-sm"
                onClick={() => {
                  setRsvpEvent(spotlight);
                  setRsvpSubmitted(false);
                }}
              >
                {t('RSVP & Get Link')}
              </button>
              <button
                type="button"
                className="btn btn-ghost-light btn-sm"
                onClick={() =>
                  downloadICS({
                    title: t(spotlight.title),
                    description: t(spotlight.description),
                    startIso: getEventStartIso(spotlight),
                    durationMinutes: spotlight.durationMinutes,
                    location: spotlight.location
                  })
                }
              >
                <Bell size={14} /> {t('Add to Calendar')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Spotlight Banner */}
      <section className="section">
        <div className="container">
          <div
            className="card split-card-spotlight"
            style={{
              borderColor: 'var(--border-gold)'
            }}
          >
            <div className={`events-spotlight-media ${spotlight.id === 'top-mission-service' ? 'is-square' : ''}`}>
              <img
                src={spotlight.image}
                alt={t(spotlight.title)}
              />
            </div>
            <div>
              <div className="events-spotlight-badges">
                <span className="badge badge-gold"><Sparkles size={13} /> {t('Spotlight Gathering')}</span>
                <span className="badge badge-navy">{t(spotlight.dateLabel)}</span>
                {isTopMissionOverrideMonth(topMissionTimer.targetDate) && (
                  <span
                    className="badge"
                    style={{
                      background: '#071226',
                      color: 'var(--gold-300)',
                      borderColor: 'rgba(212,175,55,0.45)'
                    }}
                  >
                    {t('This Month: Tue, Nov 10 & Wed, Nov 11')}
                  </span>
                )}
                <span className="badge badge-navy">{t(spotlight.timeGMT)}</span>
              </div>
              <h2 className="events-spotlight-title">{t(spotlight.title)}</h2>
              <p style={{ fontWeight: 700, color: 'var(--brand-royal)', marginBottom: '0.85rem' }}>
                {t('Ministering: {speaker} · Grace Grounds (Mikaddo Conference Centre, Labone Junction)', {
                  speaker: spotlight.speaker
                })}
              </p>

              <div className="flyer-timer-panel">
                <div className="flyer-timer-head">
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      letterSpacing: '0.09em',
                      textTransform: 'uppercase',
                      color: topMissionTimer.isLive ? '#F87171' : 'var(--gold-300)'
                    }}
                  >
                    {topMissionTimer.isLive
                      ? t('● Top Mission Live Right Now')
                      : t('Next Top Mission Service Timer')}
                  </span>
                  <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(248,250,252,0.88)' }}>
                    {topMissionTimer.targetDateFormatted} ·{' '}
                    {topMissionTimer.isSameAsGMT
                      ? topMissionTimer.gmtFormatted
                      : `${topMissionTimer.localTimeFormatted} (${topMissionTimer.gmtFormatted})`}
                  </span>
                </div>
                {topMissionTimer.isLive ? (
                  <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1.05rem' }}>
                    {t('Live now at Grace Grounds & on the Online Broadcast Stage.')}
                  </div>
                ) : (
                  <div className="countdown-boxes" role="timer" aria-live="off">
                    <div className="countdown-cell">
                      <span className="countdown-num">{topMissionTimer.days}</span>
                      <span className="countdown-lbl">{t('Days')}</span>
                    </div>
                    <div className="countdown-cell">
                      <span className="countdown-num">{topMissionTimer.hours}</span>
                      <span className="countdown-lbl">{t('Hrs')}</span>
                    </div>
                    <div className="countdown-cell">
                      <span className="countdown-num">{topMissionTimer.minutes}</span>
                      <span className="countdown-lbl">{t('Min')}</span>
                    </div>
                    <div className="countdown-cell">
                      <span className="countdown-num">{topMissionTimer.seconds}</span>
                      <span className="countdown-lbl">{t('Sec')}</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="events-spotlight-actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setRsvpEvent(spotlight);
                    setRsvpSubmitted(false);
                  }}
                >
                  {t('Register Free for Stream Alert')}
                </button>
                <Link to="/online-service" className="btn btn-outline">
                  <Radio size={16} /> {t('View Broadcast Stage')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Programme Grid */}
      <section className="section section-stage">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">{t('The Programme')}</span>
              <h2 className="section-title">
                {t('Browse Services &')} <span className="accent-serif">{t('Conferences')}</span>
              </h2>
            </div>

            <div className="search-filter-box">
              <Search
                size={16}
                style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}
              />
              <input
                type="text"
                className="field-input"
                style={{ paddingLeft: '2.4rem', borderRadius: 'var(--radius-pill)' }}
                placeholder={t('Filter by title or speaker...')}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="filter-bar">
            <div className="chip-group">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`chip-btn ${selectedCategory === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {t(cat)}
                </button>
              ))}
            </div>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              {t('Showing {shown} of {total} gatherings', {
                shown: filteredEvents.length,
                total: MINISTRY_EVENTS.length
              })}
            </span>
          </div>

          <div className="grid-3">
            {filteredEvents.map(ev => (
              <article key={ev.id} className="card card-interactive event-card">
                <div
                  className="event-media"
                  style={ev.id === 'top-mission-service' ? { background: '#050b14' } : undefined}
                >
                  <img
                    src={ev.image}
                    alt={t(ev.title)}
                    loading="lazy"
                    style={
                      ev.id === 'top-mission-service'
                        ? { objectFit: 'contain', objectPosition: 'center' }
                        : undefined
                    }
                  />
                </div>
                <div className="event-body">
                  <div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.7rem' }}>
                      <span className="badge badge-gold">{t(ev.category)}</span>
                      <span className="badge badge-navy"><Clock size={12} /> {t(ev.timeGMT)}</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.3rem' }}>{t(ev.title)}</h3>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--brand-royal)', marginBottom: '0.5rem' }}>
                      {ev.id === 'top-mission-service' && isTopMissionOverrideMonth(topMissionTimer.targetDate)
                        ? `${t(ev.dateLabel)} · ${t('This Month: Tue, Nov 10 & Wed, Nov 11')}`
                        : t(ev.dateLabel)}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      {t(ev.description)}
                    </p>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={13} /> {t(ev.location)}
                    </div>
                  </div>

                  <div className="events-card-actions">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        setRsvpEvent(ev);
                        setRsvpSubmitted(false);
                      }}
                    >
                      {t('Remind Me')}
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() =>
                        downloadICS({
                          title: t(ev.title),
                          description: t(ev.description),
                          startIso: getEventStartIso(ev),
                          durationMinutes: ev.durationMinutes,
                          location: ev.location
                        })
                      }
                    >
                      <CalendarIcon size={14} /> .ICS
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Monthly Ministry Calendar */}
      <section className="section">
        <div className="container">
          <div className="section-head-split">
            <div>
              <span className="eyebrow">{t('Monthly Schedule')}</span>
              <h2 className="section-title">
                {t('Interactive Ministry')} <span className="accent-serif">{t('Calendar')}</span>
              </h2>
              <p className="section-lead">
                {t('Blue markers indicate Sunday Service (every Sunday, 15:00 GMT) and Top Mission Service (1st week monthly · Tue & Wed, 18:30 GMT); gold markers highlight special convocations.')}
              </p>
            </div>
            <div className="calendar-month-nav">
              <button
                type="button"
                className="icon-btn"
                onClick={() => setCalMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
                aria-label={t('Previous month')}
              >
                <ChevronLeft size={18} />
              </button>
              <strong className="calendar-month-label">
                {t('{month} {year}', { month: t(monthEnLong), year: calMonth.getFullYear() })}
              </strong>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setCalMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
                aria-label={t('Next month')}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="calendar-shell">
            <div className="calendar-desktop-view">
              <div className="calendar-weekdays">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d}>{t(d)}</div>
                ))}
              </div>
              <div className="calendar-days">
                {calendarCells.map((cell, idx) => (
                  <div
                    key={idx}
                    className={`cal-day-cell ${cell.day === null ? 'is-muted' : ''} ${
                      cell.services.length > 0 || cell.special ? 'has-service' : ''
                    }`}
                  >
                    <span style={{ fontWeight: 700 }}>{cell.day ?? ''}</span>
                    <div>
                      {cell.special && (
                        <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-gold)', lineHeight: 1.2, marginBottom: 2 }}>
                          ★ {t(cell.special)}
                        </div>
                      )}
                      {cell.services.map(s => (
                        <div key={s} style={{ fontSize: '0.68rem', color: 'var(--brand-royal)', fontWeight: 600 }}>
                          {t(s)}
                        </div>
                      ))}
                      <div className="cal-dot-row" style={{ marginTop: 3 }}>
                        {cell.services.length > 0 && <span className="cal-dot" />}
                        {cell.special && <span className="cal-dot gold" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="calendar-mobile-view">
              <div className="cal-mini-weekdays">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                  <div key={d}>{t(d)}</div>
                ))}
              </div>
              <div className="cal-mini-days">
                {calendarCells.map((cell, idx) => (
                  <div
                    key={idx}
                    className={`cal-mini-cell ${cell.day === null ? 'is-muted' : ''} ${
                      cell.services.length > 0 || cell.special ? 'has-service' : ''
                    }`}
                  >
                    <span className="cal-mini-num">{cell.day ?? ''}</span>
                    <div className="cal-dot-row" style={{ justifyContent: 'center' }}>
                      {cell.services.length > 0 && <span className="cal-dot" />}
                      {cell.special && <span className="cal-dot gold" />}
                    </div>
                  </div>
                ))}
              </div>

              {monthAgenda.length > 0 && (
                <div className="cal-agenda-list">
                  {monthAgenda.map(item => (
                    <div key={item.day} className="cal-agenda-row">
                      <span className="cal-agenda-date">{item.dateText}</span>
                      <div className="cal-agenda-tags">
                        {item.special && (
                          <span className="badge badge-gold">★ {t(item.special)}</span>
                        )}
                        {item.services.map(s => (
                          <span key={s} className="badge badge-navy">{t(s)}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Event RSVP Modal */}
      {rsvpEvent && (
        <div className="modal-backdrop" onClick={() => setRsvpEvent(null)} role="dialog" aria-modal="true">
          <div className="modal-panel" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.45rem' }}>{t(rsvpEvent.category)}</span>
                <h3 style={{ fontSize: '1.45rem' }}>{t(rsvpEvent.title)}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {t(rsvpEvent.dateLabel)} · {t(rsvpEvent.timeGMT)}
                </p>
              </div>
              <button type="button" className="icon-btn" onClick={() => setRsvpEvent(null)} aria-label={t('Close modal')}>
                <X size={18} />
              </button>
            </div>

            {rsvpSubmitted ? (
              <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', background: 'var(--ok-green-bg)', color: 'var(--ok-green)' }}>
                <CheckCircle2 size={26} style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>{t('Reminder Registered!')}</h4>
                <p style={{ fontSize: '0.92rem' }}>
                  {t('We will send you the direct stream link 30 minutes before {title} begins.', {
                    title: t(rsvpEvent.title)
                  })}
                </p>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setRsvpSubmitted(true);
                }}
                className="form-grid"
              >
                <div>
                  <label className="field-label">{t('First Name')} <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder={t('Your first name')} />
                </div>
                <div>
                  <label className="field-label">{t('Email Address')} <span className="req">*</span></label>
                  <input required type="email" className="field-input" placeholder="you@example.com" />
                </div>
                <div className="form-full">
                  <label className="field-label">{t('WhatsApp Number (Optional for SMS/WhatsApp Alert)')}</label>
                  <input type="tel" className="field-input" placeholder="+1 / +44 / +233..." />
                </div>
                <div className="form-full" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', flexWrap: 'wrap' }}>
                  <button type="button" className="btn btn-outline btn-sm" onClick={() => setRsvpEvent(null)}>
                    {t('Cancel')}
                  </button>
                  <button type="submit" className="btn btn-gold btn-sm">
                    {t('Confirm Reminder')}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
