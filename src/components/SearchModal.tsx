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
import {
  WEEKLY_SERVICES,
  getNextServiceOccurrence,
  isTopMissionOverrideMonth
} from '../utils/time';

interface SearchEntry {
  id: string;
  title: string;
  subtitle: string;
  kind: 'Page' | 'Belief' | 'Event' | 'Testimony' | 'Media';
  route?: string;
  mediaIndex?: number;
  searchText: string;
}

export const SearchModal: React.FC = () => {
  const { isSearchOpen, closeSearch, playMedia, t } = useApp();
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
    const pagesRaw: Array<{ id: string; title: string; subtitle: string; route: string }> = [
      { id: 'p-home', title: 'Home', subtitle: 'Overview, service countdown, vision & gallery', route: '/' },
      { id: 'p-online', title: 'Online Service & Live Stage', subtitle: 'Watch Sunday 15:00 GMT & Monthly Top Mission Service (Tue & Wed 18:30 GMT) live', route: '/online-service' },
      { id: 'p-about', title: 'About Us, Founder & Leadership', subtitle: 'Prophet Edem Julius-Cudjoe, 5 Schools, 12 Beliefs & Leaders', route: '/about' },
      { id: 'p-events', title: 'Events & Global Calendar', subtitle: 'Sunday Worship, Monthly Top Mission Service & Global Calendar', route: '/events' },
      { id: 'p-testimonies', title: 'Testimonies Wall', subtitle: 'Stories of healing, restoration & provision', route: '/testimonies' },
      { id: 'p-readings', title: 'Daily Bible Readings', subtitle: '1-Year, 10-Month & 9-Month plans + Proverbs challenge', route: '/daily-readings' },
      { id: 'p-salvation', title: 'Salvation — Receive Jesus', subtitle: 'The Gospel & guided salvation prayer', route: '/salvation' },
      { id: 'p-give', title: 'Give — Tithes & Kingdom Partnership', subtitle: 'Safe stewardship, giving principles & notifications', route: '/give' },
      { id: 'p-join', title: 'Join Us — Member or Affiliate', subtitle: 'Become part of the EGW global family', route: '/join' },
      { id: 'p-resources', title: 'Ministry Ecosystem & Resources', subtitle: 'Podcasts, WhatsApp channel, volunteer teams & tools', route: '/resources' },
      { id: 'p-contact', title: 'Contact & Prayer Requests', subtitle: 'Confidential pastoral prayer & helpline', route: '/contact' }
    ];

    const pages: SearchEntry[] = pagesRaw.map(p => {
      const title = t(p.title);
      const subtitle = t(p.subtitle);
      return {
        id: p.id,
        title,
        subtitle,
        kind: 'Page',
        route: p.route,
        searchText: `${p.title} ${p.subtitle} ${title} ${subtitle} Page ${t('Page')}`.toLowerCase()
      };
    });

    const beliefs: SearchEntry[] = ARTICLES_OF_FAITH.map(b => {
      const trTitle = `${t('Article')} ${b.number}: ${t(b.title)}`;
      const trSub = b.scriptures.map(s => t(s)).join(' · ');
      return {
        id: `b-${b.number}`,
        title: trTitle,
        subtitle: trSub,
        kind: 'Belief',
        route: '/about#beliefs',
        searchText: `Article ${b.number} ${b.title} ${trTitle} ${b.statement} ${t(b.statement)} ${b.scriptures.join(' ')} ${trSub} Belief ${t('Belief')}`.toLowerCase()
      };
    });

    const topMissionOverride = isTopMissionOverrideMonth(getNextServiceOccurrence(WEEKLY_SERVICES[1]));
    const events: SearchEntry[] = MINISTRY_EVENTS.map(ev => {
      const title = t(ev.title);
      const dateStr = ev.id === 'top-mission-service' && topMissionOverride
        ? t('This Month: Wed, Nov 11 Only')
        : t(ev.dateLabel);
      const subtitle = `${dateStr} · ${t(ev.timeGMT)}`;
      return {
        id: `e-${ev.id}`,
        title,
        subtitle,
        kind: 'Event',
        route: '/events',
        searchText: `${ev.title} ${ev.dateLabel} ${title} ${subtitle} ${ev.timeGMT} Event ${t('Event')}`.toLowerCase()
      };
    });

    const testimonies: SearchEntry[] = TESTIMONIES_DATA.map(tm => {
      const title = t(tm.title);
      const subtitle = `${tm.author} · ${t(tm.country)}`;
      return {
        id: `t-${tm.id}`,
        title,
        subtitle,
        kind: 'Testimony',
        route: '/testimonies',
        searchText: `${tm.title} ${tm.country} ${tm.author} ${title} ${subtitle} Testimony ${t('Testimony')}`.toLowerCase()
      };
    });

    const media: SearchEntry[] = MEDIA_LIBRARY.map((m, idx) => {
      const title = t(m.title);
      const subtitle = `${t(m.category)} · ${m.speaker}`;
      return {
        id: `m-${m.id}`,
        title,
        subtitle,
        kind: 'Media',
        mediaIndex: idx,
        searchText: `${m.title} ${m.category} ${m.speaker} ${title} ${subtitle} Media ${t('Media')}`.toLowerCase()
      };
    });

    return [...pages, ...media, ...events, ...testimonies, ...beliefs];
  }, [t]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allEntries.slice(0, 9);
    return allEntries.filter(item => item.searchText.includes(q)).slice(0, 14);
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
    <div className="modal-backdrop" onClick={closeSearch} role="dialog" aria-modal="true" aria-label={t('Search site')}>
      <div className="search-modal-panel" onClick={e => e.stopPropagation()}>
        <div className="search-input-bar">
          <Search size={20} style={{ color: 'var(--brand-gold)', flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={t('Search pages, sermons, beliefs, events, testimonies...')}
            aria-label={t('Search query')}
          />
          <button type="button" className="icon-btn" onClick={closeSearch} aria-label={t('Close search')}>
            <X size={17} />
          </button>
        </div>

        <div className="search-results-list">
          {filtered.length === 0 ? (
            <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
              {t('No matches for "{query}". Try searching for "Sunday", "Prayer", "Salvation", or "Healing".', {
                query
              })}
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
                  <span className="badge badge-navy">{t(item.kind)}</span>
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
