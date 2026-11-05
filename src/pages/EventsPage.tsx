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
import { MINISTRY_EVENTS, MinistryEvent } from '../data/ministryData';
import { downloadICS, getVisitorTimezone } from '../utils/time';

const CATEGORIES: ('All' | MinistryEvent['category'])[] = [
  'All',
  'Special Gathering',
  'Weekly Service',
  'Conference & Camp',
  'Prayer & Fasting'
];

export const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | MinistryEvent['category']>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [calMonth, setCalMonth] = useState(() => new Date(2026, 10, 1)); // Nov 2026 default
  const [rsvpEvent, setRsvpEvent] = useState<MinistryEvent | null>(null);
  const [rsvpSubmitted, setRsvpSubmitted] = useState(false);

  const spotlight = MINISTRY_EVENTS[0]; // Night with the King 2026

  const filteredEvents = useMemo(() => {
    return MINISTRY_EVENTS.filter(ev => {
      const catOk = selectedCategory === 'All' || ev.category === selectedCategory;
      const q = searchQuery.trim().toLowerCase();
      const qOk =
        !q ||
        ev.title.toLowerCase().includes(q) ||
        ev.subtitle.toLowerCase().includes(q) ||
        ev.speaker.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [selectedCategory, searchQuery]);

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
      if (dow === 3) svcs.push('Wed 23:59 GMT');
      if (dow === 6) svcs.push('Sat 18:30 GMT');

      let special: string | undefined;
      if (month === 11 && d === 31) special = 'Cross Over Service';
      if (month === 1 && d === 18) special = 'ITFC Camp';

      cells.push({ day: d, services: svcs, special });
    }
    return cells;
  }, [calMonth]);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">Global Programme & Calendar</span>
            <h1>Services, Gatherings & Special Programmes Worldwide</h1>
            <p className="lead">
              Every detail of what is coming up at Ephesus Gatherings Worldwide—shown alongside your local time zone ({getVisitorTimezone()}), with one-tap `.ics` calendar sync and online registration.
            </p>
          </div>
          <div className="card" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(212,175,55,0.4)', color: '#FFFFFF' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>Featured Crossover</span>
            <h3 style={{ color: '#FFFFFF', fontSize: '1.35rem', marginBottom: '0.35rem' }}>{spotlight.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'rgba(248,250,252,0.82)', marginBottom: '1rem' }}>
              {spotlight.dateLabel} · {spotlight.timeGMT} · With {spotlight.speaker}
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn-gold btn-sm"
                onClick={() => {
                  setRsvpEvent(spotlight);
                  setRsvpSubmitted(false);
                }}
              >
                RSVP & Get Link
              </button>
              <button
                type="button"
                className="btn btn-ghost-light btn-sm"
                onClick={() =>
                  downloadICS({
                    title: spotlight.title,
                    description: spotlight.description,
                    startIso: spotlight.startIso,
                    durationMinutes: spotlight.durationMinutes,
                    location: spotlight.location
                  })
                }
              >
                <Bell size={14} /> Add to Calendar
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
            <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', maxHeight: 420 }}>
              <img
                src={spotlight.image}
                alt={spotlight.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.85rem' }}>
                <span className="badge badge-gold"><Sparkles size={13} /> Spotlight Gathering</span>
                <span className="badge badge-navy">{spotlight.dateLabel}</span>
                <span className="badge badge-navy">{spotlight.timeGMT}</span>
              </div>
              <h2 style={{ fontSize: 'var(--text-3xl)', marginBottom: '0.6rem' }}>{spotlight.title}</h2>
              <p style={{ fontWeight: 700, color: 'var(--brand-royal)', marginBottom: '0.85rem' }}>
                Ministering: {spotlight.speaker}
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                {spotlight.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setRsvpEvent(spotlight);
                    setRsvpSubmitted(false);
                  }}
                >
                  Register Free for Stream Alert
                </button>
                <Link to="/online-service" className="btn btn-outline">
                  <Radio size={16} /> View Broadcast Stage
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
              <span className="eyebrow">The Programme</span>
              <h2 className="section-title">
                Browse Services & <span className="accent-serif">Conferences</span>
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
                placeholder="Filter by title or speaker..."
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
                  {cat}
                </button>
              ))}
            </div>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Showing {filteredEvents.length} of {MINISTRY_EVENTS.length} gatherings
            </span>
          </div>

          <div className="grid-3">
            {filteredEvents.map(ev => (
              <article key={ev.id} className="card card-interactive event-card">
                <div className="event-media">
                  <img src={ev.image} alt={ev.title} loading="lazy" />
                </div>
                <div className="event-body">
                  <div>
                    <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.7rem' }}>
                      <span className="badge badge-gold">{ev.category}</span>
                      <span className="badge badge-navy"><Clock size={12} /> {ev.timeGMT}</span>
                    </div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.3rem' }}>{ev.title}</h3>
                    <div style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--brand-royal)', marginBottom: '0.5rem' }}>
                      {ev.dateLabel}
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      {ev.description}
                    </p>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={13} /> {ev.location}
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => {
                        setRsvpEvent(ev);
                        setRsvpSubmitted(false);
                      }}
                    >
                      Remind Me
                    </button>
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
              <span className="eyebrow">Monthly Schedule</span>
              <h2 className="section-title">
                Interactive Ministry <span className="accent-serif">Calendar</span>
              </h2>
              <p className="section-lead">
                Blue markers indicate weekly online services (Sun, Wed, Sat); gold markers highlight special convocations.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setCalMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))}
                aria-label="Previous month"
              >
                <ChevronLeft size={18} />
              </button>
              <strong style={{ minWidth: 155, textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '1.08rem' }}>
                {calMonth.toLocaleString('en-US', { month: 'long', year: 'numeric' })}
              </strong>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setCalMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))}
                aria-label="Next month"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="calendar-shell">
            <div className="calendar-weekdays">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d}>{d}</div>
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
                        ★ {cell.special}
                      </div>
                    )}
                    {cell.services.map(s => (
                      <div key={s} style={{ fontSize: '0.68rem', color: 'var(--brand-royal)', fontWeight: 600 }}>
                        {s}
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
        </div>
      </section>

      {/* Event RSVP Modal */}
      {rsvpEvent && (
        <div className="modal-backdrop" onClick={() => setRsvpEvent(null)} role="dialog" aria-modal="true">
          <div className="modal-panel" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '0.45rem' }}>{rsvpEvent.category}</span>
                <h3 style={{ fontSize: '1.45rem' }}>{rsvpEvent.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {rsvpEvent.dateLabel} · {rsvpEvent.timeGMT}
                </p>
              </div>
              <button type="button" className="icon-btn" onClick={() => setRsvpEvent(null)} aria-label="Close modal">
                <X size={18} />
              </button>
            </div>

            {rsvpSubmitted ? (
              <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', background: 'var(--ok-green-bg)', color: 'var(--ok-green)' }}>
                <CheckCircle2 size={26} style={{ marginBottom: '0.5rem' }} />
                <h4 style={{ fontSize: '1.15rem', marginBottom: '0.3rem' }}>Reminder Registered!</h4>
                <p style={{ fontSize: '0.92rem' }}>
                  We will send you the direct stream link 30 minutes before <strong>{rsvpEvent.title}</strong> begins.
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
                  <label className="field-label">First Name <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder="Your first name" />
                </div>
                <div>
                  <label className="field-label">Email Address <span className="req">*</span></label>
                  <input required type="email" className="field-input" placeholder="you@example.com" />
                </div>
                <div className="form-full">
                  <label className="field-label">WhatsApp Number (Optional for SMS/WhatsApp Alert)</label>
                  <input type="tel" className="field-input" placeholder="+1 / +44 / +233..." />
                </div>
                <div className="form-full" style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                  <button type="button" className="btn btn-outline btn-sm" onClick={() => setRsvpEvent(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-gold btn-sm">
                    Confirm Reminder
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
