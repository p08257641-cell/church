import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, BookOpen, Calendar, Heart, Play, Search, Sparkles, X } from 'lucide-react';
import { useApp } from '../context/AppContext';
import {
  ARTICLES_OF_FAITH,
  MEDIA_LIBRARY,
  MINISTRY_EVENTS,
  TESTIMONIES_DATA
} from '../data/ministryData';

interface SearchEntry {
  id: string;
  title: string;
  subtitle: string;
  kind: 'Page' | 'Belief' | 'Event' | 'Testimony' | 'Media';
  route?: string;
  mediaIndex?: number;
}

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, playMedia } = useApp();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setQuery('');
      window.setTimeout(() => inputRef.current?.focus(), 40);
    }
  }, [isSearchOpen]);

  const allEntries = useMemo<SearchEntry[]>(() => {
    const pages: SearchEntry[] = [
      { id: 'p-home', title: 'Home', subtitle: 'Overview, service countdown, vision & gallery', kind: 'Page', route: '/' },
      { id: 'p-online', title: 'Online Service & Live Stage', subtitle: 'Watch Sunday 12:30 GMT, Wednesday & Saturday live', kind: 'Page', route: '/online-service' },
      { id: 'p-about', title: 'About Us, Founder & Leadership', subtitle: 'Prophet Edem Julius-Cudjoe, 12 Beliefs & Diaspora Leaders', kind: 'Page', route: '/about' },
      { id: 'p-events', title: 'Events & Global Calendar', subtitle: 'Night with the King, ITFC Camp & weekly schedule', kind: 'Page', route: '/events' },
      { id: 'p-testimonies', title: 'Testimonies Wall', subtitle: 'Stories of healing, restoration & provision', kind: 'Page', route: '/testimonies' },
      { id: 'p-readings', title: 'Daily Bible Readings', subtitle: '1-Year, 10-Month & 9-Month plans + Proverbs challenge', kind: 'Page', route: '/daily-readings' },
      { id: 'p-salvation', title: 'Salvation — Receive Jesus', subtitle: 'The Gospel & guided salvation prayer', kind: 'Page', route: '/salvation' },
      { id: 'p-give', title: 'Give — Tithes & Kingdom Partnership', subtitle: 'Safe stewardship, giving principles & notifications', kind: 'Page', route: '/give' },
      { id: 'p-join', title: 'Join Us — Member or Affiliate', subtitle: 'Become part of the EGW global family', kind: 'Page', route: '/join' },
      { id: 'p-resources', title: 'Ministry Ecosystem & Resources', subtitle: 'Podcasts, WhatsApp channel, volunteer teams & tools', kind: 'Page', route: '/resources' },
      { id: 'p-contact', title: 'Contact & Prayer Requests', subtitle: 'Confidential pastoral prayer & helpline', kind: 'Page', route: '/contact' }
    ];

    const beliefs: SearchEntry[] = ARTICLES_OF_FAITH.map(b => ({
      id: `b-${b.number}`,
      title: `Article ${b.number}: ${b.title}`,
      subtitle: b.scriptures.join(' · '),
      kind: 'Belief',
      route: '/about#beliefs'
    }));

    const events: SearchEntry[] = MINISTRY_EVENTS.map(ev => ({
      id: `e-${ev.id}`,
      title: ev.title,
      subtitle: `${ev.dateLabel} · ${ev.timeGMT}`,
      kind: 'Event',
      route: '/events'
    }));

    const testimonies: SearchEntry[] = TESTIMONIES_DATA.map(t => ({
      id: `t-${t.id}`,
      title: t.title,
      subtitle: `${t.author} · ${t.country}`,
      kind: 'Testimony',
      route: '/testimonies'
    }));

    const media: SearchEntry[] = MEDIA_LIBRARY.map((m, idx) => ({
      id: `m-${m.id}`,
      title: m.title,
      subtitle: `${m.category} · ${m.speaker}`,
      kind: 'Media',
      mediaIndex: idx
    }));

    return [...pages, ...media, ...events, ...testimonies, ...beliefs];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allEntries.slice(0, 9);
    return allEntries
      .filter(
        item =>
          item.title.toLowerCase().includes(q) ||
          item.subtitle.toLowerCase().includes(q) ||
          item.kind.toLowerCase().includes(q)
      )
      .slice(0, 14);
  }, [query, allEntries]);

  if (!isSearchOpen) return null;

  const handleSelect = (entry: SearchEntry) => {
    closeSearch();
    if (entry.mediaIndex !== undefined) {
      playMedia(MEDIA_LIBRARY[entry.mediaIndex]);
      return;
    }
    if (entry.route) {
      navigate(entry.route);
    }
  };

  const renderIcon = (kind: SearchEntry['kind']) => {
    switch (kind) {
      case 'Media':
        return <Play size={16} />;
      case 'Event':
        return <Calendar size={16} />;
      case 'Belief':
        return <BookOpen size={16} />;
      case 'Testimony':
        return <Heart size={16} />;
      default:
        return <Sparkles size={16} />;
    }
  };

  return (
    <div className="modal-backdrop" onClick={closeSearch} role="dialog" aria-modal="true" aria-label="Search site">
      <div className="search-modal-panel" onClick={e => e.stopPropagation()}>
        <div className="search-input-bar">
          <Search size={20} style={{ color: 'var(--brand-gold)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search pages, sermons, beliefs, events, testimonies..."
            aria-label="Search query"
          />
          <button type="button" className="icon-btn" onClick={closeSearch} aria-label="Close search">
            <X size={17} />
          </button>
        </div>

        <div className="search-results-list">
          {filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              No matches for "{query}". Try searching for "Sunday", "Prayer", "Salvation", or "Healing".
            </div>
          ) : (
            filtered.map(item => (
              <button
                key={item.id}
                type="button"
                className="search-result-row"
                onClick={() => handleSelect(item)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <span className="mega-icon">{renderIcon(item.kind)}</span>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.subtitle}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                  <span className="badge badge-navy">{item.kind}</span>
                  <ArrowRight size={15} style={{ color: 'var(--text-muted)' }} />
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
