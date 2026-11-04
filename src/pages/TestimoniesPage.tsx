import React, { useMemo, useState } from 'react';
import {
  BookOpenCheck,
  CheckCircle2,
  LayoutGrid,
  List,
  PlusCircle,
  Quote,
  Search,
  Sparkles,
  X
} from 'lucide-react';
import { FLAG_URLS, TESTIMONIES_DATA, Testimony } from '../data/ministryData';

export const TestimoniesPage: React.FC = () => {
  const [stories, setStories] = useState<Testimony[]>(TESTIMONIES_DATA);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>(() => {
    try {
      return localStorage.getItem('egw-testimonies-view') === 'list' ? 'list' : 'grid';
    } catch {
      return 'grid';
    }
  });
  const [readIds, setReadIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('egw-read-testimonies');
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [activeStory, setActiveStory] = useState<Testimony | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Submission fields
  const [authorName, setAuthorName] = useState('');
  const [country, setCountry] = useState('Canada');
  const [storyTitle, setStoryTitle] = useState('');
  const [storyCategory, setStoryCategory] = useState('Healing');
  const [storyBody, setStoryBody] = useState('');

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    stories.forEach(s => s.categories.forEach(c => set.add(c)));
    return ['All', ...Array.from(set)];
  }, [stories]);

  const filtered = useMemo(() => {
    return stories.filter(s => {
      const catOk = selectedCategory === 'All' || s.categories.includes(selectedCategory);
      const q = searchQuery.trim().toLowerCase();
      const qOk =
        !q ||
        s.title.toLowerCase().includes(q) ||
        s.summary.toLowerCase().includes(q) ||
        s.country.toLowerCase().includes(q) ||
        s.author.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [stories, selectedCategory, searchQuery]);

  const toggleViewMode = (mode: 'grid' | 'list') => {
    setViewMode(mode);
    try {
      localStorage.setItem('egw-testimonies-view', mode);
    } catch {
      // ignore
    }
  };

  const openStoryModal = (story: Testimony) => {
    setActiveStory(story);
    if (!readIds.includes(story.id)) {
      const updated = [...readIds, story.id];
      setReadIds(updated);
      try {
        localStorage.setItem('egw-read-testimonies', JSON.stringify(updated));
      } catch {
        // ignore
      }
    }
  };

  const handleShareSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!storyTitle.trim() || !storyBody.trim()) return;
    const flagMap: Record<string, string> = {
      Canada: 'ca',
      'United Kingdom': 'gb',
      'United States': 'us',
      Ghana: 'gh',
      Germany: 'de',
      Kenya: 'ke'
    };
    const newItem: Testimony = {
      id: `user-${Date.now()}`,
      title: storyTitle,
      author: authorName.trim() || 'EGW Family Member',
      country,
      flagCode: flagMap[country] || 'gb',
      year: String(new Date().getFullYear()),
      categories: [storyCategory],
      summary: storyBody.slice(0, 175) + (storyBody.length > 175 ? '...' : ''),
      closingQuote: 'To God alone be all the glory for His faithfulness!',
      paragraphs: storyBody.split('\n').filter(Boolean)
    };
    setStories(prev => [newItem, ...prev]);
    setSubmitSuccess(true);
    setStoryTitle('');
    setStoryBody('');
  };

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">Psalm 66:5 · Come and See What God Has Done</span>
            <h1>Testimonies of Healing, Fulfilled Prophecy & Grace</h1>
            <p className="lead">
              Verified stories from the Ephesus Gatherings Worldwide family across Ghana, Canada, the USA, the UK, and Kenya. Read what Jesus has done—and add your own testimony to build faith across the nations.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.6rem', flexWrap: 'wrap' }}>
              <a href="#wall" className="btn btn-gold">
                Browse Testimonies
              </a>
              <a href="#share-story" className="btn btn-ghost-light">
                <PlusCircle size={16} /> Share Your Testimony
              </a>
            </div>
          </div>

          <div className="stats-ribbon" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="stat-item">
              <div className="stat-value">15+</div>
              <div className="stat-label">Documented Stories</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5</div>
              <div className="stat-label">Nations Represented</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{readIds.length}</div>
              <div className="stat-label">Read on Your Device</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">100%</div>
              <div className="stat-label">Glory to Jesus</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimony Wall */}
      <section id="wall" className="section">
        <div className="container">
          <div className="filter-bar">
            <div className="chip-group">
              {allCategories.map(cat => (
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

            <div className="testimonies-controls">
              <div className="search-filter-box">
                <Search size={15} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  className="field-input"
                  style={{ paddingLeft: '2.2rem', minHeight: 40, borderRadius: 'var(--radius-pill)', width: '100%' }}
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', gap: '0.45rem' }}>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => toggleViewMode('grid')}
                  aria-label="Grid view"
                  style={viewMode === 'grid' ? { borderColor: 'var(--brand-gold)', color: 'var(--brand-primary)' } : undefined}
                >
                  <LayoutGrid size={17} />
                </button>
                <button
                  type="button"
                  className="icon-btn"
                  onClick={() => toggleViewMode('list')}
                  aria-label="List view"
                  style={viewMode === 'list' ? { borderColor: 'var(--brand-gold)', color: 'var(--brand-primary)' } : undefined}
                >
                  <List size={17} />
                </button>
              </div>
            </div>
          </div>

          <div className={viewMode === 'grid' ? 'grid-2' : ''} style={viewMode === 'list' ? { display: 'flex', flexDirection: 'column', gap: '1.15rem' } : undefined}>
            {filtered.map(story => {
              const isRead = readIds.includes(story.id);
              return (
                <article
                  key={story.id}
                  className="card card-interactive"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.15rem' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.8rem' }}>
                      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                        {story.featured && (
                          <span className="badge badge-gold"><Sparkles size={12} /> Featured</span>
                        )}
                        {story.categories.map(c => (
                          <span key={c} className="badge badge-navy">{c}</span>
                        ))}
                      </div>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', fontWeight: 600 }}>
                        {FLAG_URLS[story.flagCode] && (
                          <img src={FLAG_URLS[story.flagCode]} alt="" className="flag-mini" />
                        )}
                        {story.country} · {story.year}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.35rem', marginBottom: '0.55rem' }}>{story.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', marginBottom: '0.9rem' }}>
                      {story.summary}
                    </p>
                    <blockquote
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontStyle: 'italic',
                        fontSize: '1.08rem',
                        paddingLeft: '0.85rem',
                        borderLeft: '3px solid var(--brand-gold)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      “{story.closingQuote}”
                    </blockquote>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      {story.author} {isRead && '· ✓ Read'}
                    </span>
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => openStoryModal(story)}
                    >
                      <BookOpenCheck size={15} /> Read Full Testimony
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Share Your Testimony Form */}
      <section id="share-story" className="section section-stage">
        <div className="container-narrow">
          <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
            <span className="eyebrow">Revelation 12:11</span>
            <h2 className="section-title">
              Share Your <span className="accent-serif">Testimony</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)' }}>
              Your story of God’s faithfulness encourages believers across our global community and glorifies the name of Jesus.
            </p>
          </div>

          <div className="card">
            {submitSuccess ? (
              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <CheckCircle2 size={42} style={{ color: 'var(--ok-green)', marginInline: 'auto', marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1.45rem', marginBottom: '0.4rem' }}>Your Testimony Is With Our Team!</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                  Thank you for glorifying the Lord—your story has also been added to the top of your Testimony Wall preview above.
                </p>
                <button type="button" className="btn btn-outline btn-sm" onClick={() => setSubmitSuccess(false)}>
                  Share Another Testimony
                </button>
              </div>
            ) : (
              <form onSubmit={handleShareSubmit} className="form-grid">
                <div>
                  <label className="field-label">Your Name <span className="req">*</span></label>
                  <input
                    required
                    type="text"
                    className="field-input"
                    value={authorName}
                    onChange={e => setAuthorName(e.target.value)}
                    placeholder="Full name or 'EGW Member'"
                  />
                </div>
                <div>
                  <label className="field-label">Country of Residence <span className="req">*</span></label>
                  <select className="field-select" value={country} onChange={e => setCountry(e.target.value)}>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Germany</option>
                    <option>Ghana</option>
                    <option>Kenya</option>
                  </select>
                </div>
                <div>
                  <label className="field-label">Testimony Headline <span className="req">*</span></label>
                  <input
                    required
                    type="text"
                    className="field-input"
                    value={storyTitle}
                    onChange={e => setStoryTitle(e.target.value)}
                    placeholder="e.g., Complete Healing After Prayer"
                  />
                </div>
                <div>
                  <label className="field-label">Category</label>
                  <select className="field-select" value={storyCategory} onChange={e => setStoryCategory(e.target.value)}>
                    <option>Healing</option>
                    <option>Divine Provision</option>
                    <option>Breakthrough</option>
                    <option>Family Restoration</option>
                    <option>Favour & Excellence</option>
                    <option>Speedy Breakthrough</option>
                  </select>
                </div>
                <div className="form-full">
                  <label className="field-label">What Did the Lord Do? <span className="req">*</span></label>
                  <textarea
                    required
                    className="field-textarea"
                    style={{ minHeight: 150 }}
                    value={storyBody}
                    onChange={e => setStoryBody(e.target.value)}
                    placeholder="Tell your story in your own words..."
                  />
                </div>
                <div className="form-full" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="submit" className="btn btn-gold">
                    Submit Testimony
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Full Testimony Reader Modal */}
      {activeStory && (
        <div className="modal-backdrop" onClick={() => setActiveStory(null)} role="dialog" aria-modal="true">
          <div className="modal-panel" onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                  {activeStory.categories.map(c => (
                    <span key={c} className="badge badge-gold">{c}</span>
                  ))}
                </div>
                <h2 style={{ fontSize: '1.6rem' }}>{activeStory.title}</h2>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                  Shared by <strong>{activeStory.author}</strong> · {activeStory.country} ({activeStory.year})
                </p>
              </div>
              <button type="button" className="icon-btn" onClick={() => setActiveStory(null)} aria-label="Close">
                <X size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
              {activeStory.paragraphs.map((p, i) => (
                <p key={i} style={{ fontSize: '1.02rem', lineHeight: 1.75, color: 'var(--text-secondary)' }}>
                  {p}
                </p>
              ))}
            </div>

            <div
              style={{
                padding: '1.15rem 1.35rem',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-stage)',
                borderLeft: '4px solid var(--brand-gold)',
                display: 'flex',
                gap: '0.75rem',
                alignItems: 'flex-start'
              }}
            >
              <Quote size={22} style={{ color: 'var(--brand-gold)', flexShrink: 0, marginTop: 2 }} />
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.18rem' }}>
                {activeStory.closingQuote}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
