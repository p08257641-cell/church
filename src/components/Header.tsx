import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  ChevronDown,
  ChevronRight,
  Compass,
  Globe,
  Heart,
  Menu,
  Moon,
  Radio,
  Search,
  Sparkles,
  Sun,
  SunMoon,
  Users,
  X
} from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { ThemeMode, useApp } from '../context/AppContext';
import { FLAG_URLS, FOUNDER_INFO, LANGUAGES } from '../data/ministryData';

export const Header: React.FC = () => {
  const {
    themeMode,
    setThemeMode,
    language,
    currentLang,
    setLanguage,
    nextGathering,
    openSearch
  } = useApp();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openPopover, setOpenPopover] = useState<'lang' | 'theme' | null>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setOpenPopover(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setOpenPopover(null);
      }
    };
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  const themeIcon = () => {
    if (themeMode === 'dark') return <Moon size={17} />;
    if (themeMode === 'light') return <Sun size={17} />;
    return <SunMoon size={17} />;
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-strip">
        <div className="container top-strip-inner">
          <div className="top-strip-left">
            <Link to="/online-service" className="top-strip-service-link">
              {nextGathering.isLive && <span className="top-strip-live-dot" aria-hidden="true" />}
              <span>
                {nextGathering.isLive ? (
                  <>
                    <strong>Live now:</strong> {nextGathering.service.title}
                  </>
                ) : (
                  <>
                    <strong>{nextGathering.service.title}</strong>
                    <span style={{ opacity: 0.55 }}> · </span>
                    {nextGathering.humanWhen}
                  </>
                )}
              </span>
              <span className="join-cta">
                {nextGathering.isLive ? 'Watch stream →' : 'Join online →'}
              </span>
            </Link>
          </div>

          <div className="top-strip-right">
            <Link to="/salvation" className="top-strip-link">
              Receive Jesus
            </Link>
            <span className="top-strip-sep" aria-hidden="true">/</span>
            <Link to="/daily-readings" className="top-strip-link">
              Daily Readings
            </Link>
            <span className="top-strip-sep" aria-hidden="true">/</span>
            <Link to="/contact" className="top-strip-link">
              Prayer &amp; Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <div className="container header-inner">
          <BrandLogo width={132} />

          {/* Desktop Navigation with Rich Mega Menus */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {currentLang.nav.home}
            </NavLink>

            <div className="nav-item-wrap">
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                {currentLang.nav.about} <ChevronDown size={14} />
              </NavLink>
              <div className="mega-menu">
                <div className="mega-links">
                  <Link to="/about#welcome" className="mega-link-item">
                    <span className="mega-icon"><Sparkles size={18} /></span>
                    <div>
                      <div className="mega-link-title">Pastor’s Welcome Letter</div>
                      <div className="mega-link-desc">A personal word of grace in 9 languages</div>
                    </div>
                  </Link>
                  <Link to="/about#vision" className="mega-link-item">
                    <span className="mega-icon"><Compass size={18} /></span>
                    <div>
                      <div className="mega-link-title">Our Story & Vision</div>
                      <div className="mega-link-desc">Mother Church in Ghana & global Diaspora mandate</div>
                    </div>
                  </Link>
                  <Link to="/about#beliefs" className="mega-link-item">
                    <span className="mega-icon"><BookOpen size={18} /></span>
                    <div>
                      <div className="mega-link-title">12 Articles of Faith</div>
                      <div className="mega-link-desc">What we believe with full Scripture foundations</div>
                    </div>
                  </Link>
                  <Link to="/about#leaders" className="mega-link-item">
                    <span className="mega-icon"><Users size={18} /></span>
                    <div>
                      <div className="mega-link-title">Founder & Global Leaders</div>
                      <div className="mega-link-desc">Meet our Lead Convener & 7 Diaspora Coordinators</div>
                    </div>
                  </Link>
                </div>

                <div className="mega-feature-card">
                  <div>
                    <span className="badge badge-gold" style={{ marginBottom: '0.6rem' }}>
                      Founder & Lead Convener
                    </span>
                    <h4>{FOUNDER_INFO.name}</h4>
                    <p style={{ marginTop: '0.35rem' }}>
                      Equipping God’s overcomers to rest in Christ’s finished work and reign in life.
                    </p>
                  </div>
                  <Link to="/about#founder" className="btn btn-gold btn-sm">
                    Read Full Profile <ChevronRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/online-service" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {currentLang.nav.online}
            </NavLink>

            <NavLink to="/events" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {currentLang.nav.events}
            </NavLink>

            <NavLink to="/testimonies" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {currentLang.nav.testimonies}
            </NavLink>

            <div className="nav-item-wrap">
              <NavLink to="/resources" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Grow & Connect <ChevronDown size={14} />
              </NavLink>
              <div className="mega-menu">
                <div className="mega-links">
                  <Link to="/daily-readings" className="mega-link-item">
                    <span className="mega-icon"><BookOpen size={18} /></span>
                    <div>
                      <div className="mega-link-title">{currentLang.nav.readings}</div>
                      <div className="mega-link-desc">1-Year, 10-Month & 9-Month plans + Proverbs streak</div>
                    </div>
                  </Link>
                  <Link to="/salvation" className="mega-link-item">
                    <span className="mega-icon"><Heart size={18} /></span>
                    <div>
                      <div className="mega-link-title">{currentLang.nav.salvation}</div>
                      <div className="mega-link-desc">Jesus the Only Way & guided salvation prayer</div>
                    </div>
                  </Link>
                  <Link to="/join" className="mega-link-item">
                    <span className="mega-icon"><Users size={18} /></span>
                    <div>
                      <div className="mega-link-title">Join as Member or Affiliate</div>
                      <div className="mega-link-desc">48-hour pastoral onboarding across the diaspora</div>
                    </div>
                  </Link>
                  <Link to="/resources" className="mega-link-item">
                    <span className="mega-icon"><Calendar size={18} /></span>
                    <div>
                      <div className="mega-link-title">All Ministry Resources</div>
                      <div className="mega-link-desc">Podcasts, WhatsApp channel, volunteer teams & tools</div>
                    </div>
                  </Link>
                </div>

                <div className="mega-feature-card">
                  <div>
                    <div style={{ fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold-300)', fontWeight: 700, marginBottom: '0.45rem' }}>
                      {nextGathering.isLive ? 'Live Broadcast' : 'Upcoming Service'}
                    </div>
                    <h4>{nextGathering.service.title}</h4>
                    <p style={{ marginTop: '0.35rem' }}>
                      {nextGathering.humanWhen}
                    </p>
                  </div>
                  <Link to="/online-service" className="btn btn-gold btn-sm">
                    <Radio size={15} /> Open Broadcast Stage
                  </Link>
                </div>
              </div>
            </div>

            <NavLink to="/give" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
              {currentLang.nav.give}
            </NavLink>
          </nav>

          {/* Header Controls */}
          <div className="header-actions" ref={popoverRef}>
            <button
              type="button"
              className="icon-btn"
              onClick={openSearch}
              title="Search (Ctrl+K)"
              aria-label="Open global search"
            >
              <Search size={17} />
            </button>

            {/* 9-Language Switcher */}
            <div className="popover-wrap">
              <button
                type="button"
                className="icon-btn"
                onClick={() => setOpenPopover(prev => (prev === 'lang' ? null : 'lang'))}
                title={`Language: ${currentLang.label}`}
                aria-label="Choose language"
              >
                <Globe size={17} />
              </button>
              {openPopover === 'lang' && (
                <div className="popover-panel" role="menu">
                  <div style={{ padding: '0.4rem 0.7rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>
                    Ministry Languages (9)
                  </div>
                  {LANGUAGES.map(l => (
                    <button
                      key={l.code}
                      type="button"
                      className={`popover-option ${language === l.code ? 'is-selected' : ''}`}
                      onClick={() => {
                        setLanguage(l.code);
                        setOpenPopover(null);
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}>
                        <img src={FLAG_URLS[l.flagCode]} alt="" className="flag-mini" />
                        <span>{l.label}</span>
                      </span>
                      <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>{l.code.toUpperCase()}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Mode Switcher */}
            <div className="popover-wrap">
              <button
                type="button"
                className="icon-btn"
                onClick={() => setOpenPopover(prev => (prev === 'theme' ? null : 'theme'))}
                title={`Theme: ${themeMode}`}
                aria-label="Appearance mode"
              >
                {themeIcon()}
              </button>
              {openPopover === 'theme' && (
                <div className="popover-panel" role="menu" style={{ minWidth: 190 }}>
                  {(
                    [
                      { id: 'light', label: 'Sanctuary Light', icon: <Sun size={15} /> },
                      { id: 'dark', label: 'Midnight Navy', icon: <Moon size={15} /> },
                      { id: 'auto', label: 'Auto (Day / Night)', icon: <SunMoon size={15} /> }
                    ] as { id: ThemeMode; label: string; icon: React.ReactNode }[]
                  ).map(opt => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`popover-option ${themeMode === opt.id ? 'is-selected' : ''}`}
                      onClick={() => {
                        setThemeMode(opt.id);
                        setOpenPopover(null);
                      }}
                    >
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}>
                        {opt.icon} {opt.label}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Link to="/join" className="btn btn-outline btn-sm hide-tablet">
              {currentLang.nav.join}
            </Link>

            <Link to="/online-service" className="btn btn-primary btn-sm">
              <span>{currentLang.nav.watchLive}</span>
            </Link>

            <button
              type="button"
              className="icon-btn mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mobile-drawer" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer-panel" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <BrandLogo width={120} />
              <button type="button" className="icon-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
            </div>

            <div className="mobile-nav-list">
              {[
                { to: '/', label: currentLang.nav.home },
                { to: '/about', label: `${currentLang.nav.about} & Leaders` },
                { to: '/online-service', label: currentLang.nav.online },
                { to: '/events', label: currentLang.nav.events },
                { to: '/testimonies', label: currentLang.nav.testimonies },
                { to: '/daily-readings', label: currentLang.nav.readings },
                { to: '/salvation', label: currentLang.nav.salvation },
                { to: '/give', label: currentLang.nav.give },
                { to: '/join', label: currentLang.nav.join },
                { to: '/resources', label: currentLang.nav.resources },
                { to: '/contact', label: `${currentLang.nav.contact} & Prayer` }
              ].map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                >
                  <span>{link.label}</span>
                  <ChevronRight size={16} />
                </NavLink>
              ))}
            </div>

            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <Link to="/online-service" className="btn btn-gold" style={{ width: '100%' }}>
                <Radio size={17} /> {currentLang.nav.watchLive}
              </Link>
              <Link to="/join" className="btn btn-primary" style={{ width: '100%' }}>
                Become a Member or Affiliate
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
