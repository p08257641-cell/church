import React, { useEffect, useMemo, useState } from 'react';
import {
  Award,
  Bell,
  BookMarked,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Circle,
  Flame
} from 'lucide-react';
import { SCRIPTURE_GEMS, getReadingsForDate } from '../data/ministryData';
import { getVisitorTimezone } from '../utils/time';

type PlanId = '1-year' | '10-month' | '9-month';

export const DailyReadingsPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date());
  const [plan, setPlan] = useState<PlanId>('1-year');
  const [completedIds, setCompletedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('egw-reading-checks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [reminderSaved, setReminderSaved] = useState(false);

  const dayData = useMemo(() => getReadingsForDate(selectedDate), [selectedDate]);
  const todayPassages = dayData.passages[plan];

  useEffect(() => {
    try {
      localStorage.setItem('egw-reading-checks', JSON.stringify(completedIds));
    } catch {
      // ignore
    }
  }, [completedIds]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowLeft') {
        setSelectedDate(d => new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedDate(d => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const togglePassage = (id: string) => {
    setCompletedIds(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]));
  };

  const completedTodayCount = todayPassages.filter(p => completedIds.includes(p.id)).length;
  const formattedDate = selectedDate.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const dateInputVal = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">Feed on the Living Word</span>
            <h1>Daily Bible Readings & Proverbs Challenge</h1>
            <p className="lead">
              Today’s passages from our 1-Year, 10-Month, and 9-Month Bible reading plans, alongside the daily Proverbs wisdom chapter and Book of the Month.
            </p>
          </div>

          <div className="stats-ribbon" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="stat-item">
              <div className="stat-value">Day {dayData.dayOfYear}</div>
              <div className="stat-label">{dayData.percentOfYear}% through the year</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                <Flame size={22} style={{ display: 'inline', color: 'var(--brand-gold)', marginRight: 4 }} />
                {completedIds.length}
              </div>
              <div className="stat-label">Passages Marked Read</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Daily Plan */}
      <section className="section">
        <div className="container">
          {/* Date Controls + Plan Switcher */}
          <div className="filter-bar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setSelectedDate(d => new Date(d.getFullYear(), d.getMonth(), d.getDate() - 1))}
                aria-label="Previous day"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedDate(new Date())}
              >
                Today
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setSelectedDate(d => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1))}
                aria-label="Next day"
              >
                <ChevronRight size={18} />
              </button>
              <input
                type="date"
                className="field-input"
                style={{ width: 'auto', minHeight: 40, paddingBlock: '0.35rem' }}
                value={dateInputVal}
                onChange={e => {
                  if (!e.target.value) return;
                  const [y, m, d] = e.target.value.split('-').map(Number);
                  setSelectedDate(new Date(y, m - 1, d));
                }}
                aria-label="Pick reading date"
              />
            </div>

            <div className="chip-group" role="tablist" aria-label="Reading pace">
              {(
                [
                  { id: '1-year', label: '1-Year Plan' },
                  { id: '10-month', label: '10-Month Plan' },
                  { id: '9-month', label: '9-Month Plan' }
                ] as { id: PlanId; label: string }[]
              ).map(p => (
                <button
                  key={p.id}
                  type="button"
                  className={`chip-btn ${plan === p.id ? 'is-active' : ''}`}
                  onClick={() => setPlan(p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid-2" style={{ alignItems: 'start' }}>
            {/* Left: Today's Passages */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <span className="badge badge-gold" style={{ marginBottom: '0.45rem' }}>
                    {plan.toUpperCase()} TRACK
                  </span>
                  <h2 style={{ fontSize: '1.5rem' }}>{formattedDate}</h2>
                </div>
                <span className={`badge ${completedTodayCount === todayPassages.length ? 'badge-ok' : 'badge-navy'}`}>
                  {completedTodayCount}/{todayPassages.length} Completed
                </span>
              </div>

              <div className="reading-progress-track">
                <div
                  className="reading-progress-fill"
                  style={{ width: `${(completedTodayCount / todayPassages.length) * 100}%` }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '1.25rem' }}>
                {todayPassages.map(item => {
                  const done = completedIds.includes(item.id);
                  return (
                    <div
                      key={item.id}
                      className={`passage-check-row ${done ? 'is-done' : ''}`}
                      onClick={() => togglePassage(item.id)}
                      role="checkbox"
                      aria-checked={done}
                      tabIndex={0}
                      onKeyDown={e => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          togglePassage(item.id);
                        }
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                        {done ? (
                          <CheckCircle2 size={22} style={{ color: 'var(--ok-green)', flexShrink: 0 }} />
                        ) : (
                          <Circle size={22} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
                        )}
                        <div>
                          <strong style={{ fontSize: '1.08rem', display: 'block' }}>{item.reference}</strong>
                          <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>{item.focus}</span>
                        </div>
                      </div>
                      <span className="badge badge-navy">{done ? 'Read' : 'Mark Done'}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Proverbs Challenge + Book of the Month */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                className="card"
                style={{
                  background: 'var(--bg-royal-band)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(212,175,55,0.4)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
                  <span className="badge badge-gold">Daily Wisdom Challenge</span>
                  <Award size={20} style={{ color: 'var(--gold-300)' }} />
                </div>
                <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  Proverbs Chapter {dayData.proverbsChapter}
                </h3>
                <p style={{ color: 'rgba(248,250,252,0.85)', fontSize: '0.94rem' }}>
                  Read one chapter of Proverbs matching today’s calendar date to build supernatural discernment, practical stewardship, and godly counsel.
                </p>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.5rem' }}>
                  <BookMarked size={20} style={{ color: 'var(--brand-royal)' }} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-gold)' }}>
                    Book of the Month · {dayData.bookOfTheMonth.monthName}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{dayData.bookOfTheMonth.title}</h3>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.55rem' }}>
                  {dayData.bookOfTheMonth.author}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  {dayData.bookOfTheMonth.theme}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KJV Scripture Meditation Gems */}
      <section className="section section-stage">
        <div className="container">
          <div style={{ marginBottom: '2rem' }}>
            <span className="eyebrow">Confession & Meditation</span>
            <h2 className="section-title">
              Anchor Scriptures in <span className="accent-serif">Christ’s Finished Work</span>
            </h2>
          </div>

          <div className="grid-2">
            {SCRIPTURE_GEMS.map(gem => (
              <div key={gem.reference} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: 'var(--brand-royal)', fontWeight: 700 }}>
                  <BookOpen size={17} /> {gem.reference}
                </div>
                <p className="scripture-quote" style={{ fontSize: '1.2rem' }}>
                  “{gem.text}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Email Reminder at Your Chosen Hour */}
      <section className="section">
        <div className="container-narrow">
          <div className="card">
            <div style={{ marginBottom: '1.5rem' }}>
              <span className="eyebrow">A Reminder at Your Hour</span>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '0.35rem' }}>
                Receive Today’s Passages in Your Inbox
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                Choose your preferred morning or evening hour in your time zone ({getVisitorTimezone()}).
              </p>
            </div>

            {reminderSaved ? (
              <div style={{ padding: '1.35rem', borderRadius: 'var(--radius-md)', background: 'var(--ok-green-bg)', color: 'var(--ok-green)' }}>
                <CheckCircle2 size={24} style={{ marginBottom: '0.4rem' }} />
                <strong>Daily Reading Reminder Scheduled!</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>
                  Check your inbox for a quick confirmation link—your passages will follow the <strong>{plan}</strong> plan.
                </p>
              </div>
            ) : (
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setReminderSaved(true);
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
                <div>
                  <label className="field-label">Delivery Time (Local)</label>
                  <input type="time" defaultValue="06:30" className="field-input" />
                </div>
                <div>
                  <label className="field-label">Reading Plan</label>
                  <select className="field-select" value={plan} onChange={e => setPlan(e.target.value as PlanId)}>
                    <option value="1-year">1-Year Bible Plan</option>
                    <option value="10-month">10-Month Bible Plan</option>
                    <option value="9-month">9-Month Bible Plan</option>
                  </select>
                </div>
                <div className="form-full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-primary">
                    <Bell size={16} /> Start Daily Email Reminders
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
