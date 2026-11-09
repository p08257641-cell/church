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
import { useApp } from '../context/AppContext';
import { SCRIPTURE_GEMS, getReadingsForDate } from '../data/ministryData';
import { getVisitorTimezone } from '../utils/time';

type PlanId = '1-year' | '10-month' | '9-month';

const WEEKDAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS_FULL = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const DailyReadingsPage: React.FC = () => {
  const { t } = useApp();
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
  const formattedDate = t('{weekday}, {day} {month} {year}', {
    weekday: t(WEEKDAYS_FULL[selectedDate.getDay()]),
    day: selectedDate.getDate(),
    month: t(MONTHS_FULL[selectedDate.getMonth()]),
    year: selectedDate.getFullYear()
  });

  const trackBadgeLabel =
    plan === '1-year'
      ? t('1-YEAR TRACK')
      : plan === '10-month'
        ? t('10-MONTH TRACK')
        : t('9-MONTH TRACK');

  const planDisplayLabel =
    plan === '1-year'
      ? t('1-Year Bible Plan')
      : plan === '10-month'
        ? t('10-Month Bible Plan')
        : t('9-Month Bible Plan');

  const dateInputVal = `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2, '0')}-${String(selectedDate.getDate()).padStart(2, '0')}`;

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">{t('Feed on the Living Word')}</span>
            <h1>{t('Daily Bible Readings & Proverbs Challenge')}</h1>
            <p className="lead">
              {t('Today’s passages from our 1-Year, 10-Month, and 9-Month Bible reading plans, alongside the daily Proverbs wisdom chapter and Book of the Month.')}
            </p>
          </div>

          <div className="stats-ribbon" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="stat-item">
              <div className="stat-value">{t('Day {day}', { day: dayData.dayOfYear })}</div>
              <div className="stat-label">{t('{percent}% through the year', { percent: dayData.percentOfYear })}</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                <Flame size={22} style={{ display: 'inline', color: 'var(--brand-gold)', marginRight: 4 }} />
                {completedIds.length}
              </div>
              <div className="stat-label">{t('Passages Marked Read')}</div>
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
                aria-label={t('Previous day')}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setSelectedDate(new Date())}
              >
                {t('Today')}
              </button>
              <button
                type="button"
                className="icon-btn"
                onClick={() => setSelectedDate(d => new Date(d.getFullYear(), d.getMonth(), d.getDate() + 1))}
                aria-label={t('Next day')}
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
                aria-label={t('Pick reading date')}
              />
            </div>

            <div className="chip-group" role="tablist" aria-label={t('Reading pace')}>
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
                  {t(p.label)}
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
                    {trackBadgeLabel}
                  </span>
                  <h2 style={{ fontSize: '1.5rem' }}>{formattedDate}</h2>
                </div>
                <span className={`badge ${completedTodayCount === todayPassages.length ? 'badge-ok' : 'badge-navy'}`}>
                  {t('{done}/{total} Completed', { done: completedTodayCount, total: todayPassages.length })}
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
                          <strong style={{ fontSize: '1.08rem', display: 'block' }}>
                            {t(item.book)} {item.chapters}
                          </strong>
                          <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>{t(item.focus)}</span>
                        </div>
                      </div>
                      <span className="badge badge-navy">{done ? t('Read') : t('Mark Done')}</span>
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
                  <span className="badge badge-gold">{t('Daily Wisdom Challenge')}</span>
                  <Award size={20} style={{ color: 'var(--gold-300)' }} />
                </div>
                <h3 style={{ fontSize: '1.45rem', color: '#FFFFFF', marginBottom: '0.4rem' }}>
                  {t('Proverbs Chapter {chapter}', { chapter: dayData.proverbsChapter })}
                </h3>
                <p style={{ color: 'rgba(248,250,252,0.85)', fontSize: '0.94rem' }}>
                  {t('Read one chapter of Proverbs matching today’s calendar date to build supernatural discernment, practical stewardship, and godly counsel.')}
                </p>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.5rem' }}>
                  <BookMarked size={20} style={{ color: 'var(--brand-royal)' }} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-gold)' }}>
                    {t('Book of the Month')} · {t(dayData.bookOfTheMonth.monthName)}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{t(dayData.bookOfTheMonth.title)}</h3>
                <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.55rem' }}>
                  {t(dayData.bookOfTheMonth.author)}
                </p>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                  {t(dayData.bookOfTheMonth.theme)}
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
            <span className="eyebrow">{t('Confession & Meditation')}</span>
            <h2 className="section-title">
              {t('Anchor Scriptures in')} <span className="accent-serif">{t('Christ’s Finished Work')}</span>
            </h2>
          </div>

          <div className="grid-2">
            {SCRIPTURE_GEMS.map(gem => (
              <div key={gem.reference} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.6rem', color: 'var(--brand-royal)', fontWeight: 700 }}>
                  <BookOpen size={17} /> {t(gem.reference)}
                </div>
                <p className="scripture-quote" style={{ fontSize: '1.2rem' }}>
                  “{t(gem.text)}”
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
              <span className="eyebrow">{t('A Reminder at Your Hour')}</span>
              <h2 style={{ fontSize: '1.65rem', marginBottom: '0.35rem' }}>
                {t('Receive Today’s Passages in Your Inbox')}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {t('Choose your preferred morning or evening hour in your time zone ({tz}).', {
                  tz: getVisitorTimezone()
                })}
              </p>
            </div>

            {reminderSaved ? (
              <div style={{ padding: '1.35rem', borderRadius: 'var(--radius-md)', background: 'var(--ok-green-bg)', color: 'var(--ok-green)' }}>
                <CheckCircle2 size={24} style={{ marginBottom: '0.4rem' }} />
                <strong>{t('Daily Reading Reminder Scheduled!')}</strong>
                <p style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>
                  {t('Check your inbox for a quick confirmation link—your passages will follow the {plan} plan.', {
                    plan: planDisplayLabel
                  })}
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
                  <label className="field-label">{t('First Name')} <span className="req">*</span></label>
                  <input required type="text" className="field-input" placeholder={t('Your first name')} />
                </div>
                <div>
                  <label className="field-label">{t('Email Address')} <span className="req">*</span></label>
                  <input required type="email" className="field-input" placeholder="you@example.com" />
                </div>
                <div>
                  <label className="field-label">{t('Delivery Time (Local)')}</label>
                  <input type="time" defaultValue="06:30" className="field-input" />
                </div>
                <div>
                  <label className="field-label">{t('Reading Plan')}</label>
                  <select className="field-select" value={plan} onChange={e => setPlan(e.target.value as PlanId)}>
                    <option value="1-year">{t('1-Year Bible Plan')}</option>
                    <option value="10-month">{t('10-Month Bible Plan')}</option>
                    <option value="9-month">{t('9-Month Bible Plan')}</option>
                  </select>
                </div>
                <div className="form-full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-primary">
                    <Bell size={16} /> {t('Start Daily Email Reminders')}
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
