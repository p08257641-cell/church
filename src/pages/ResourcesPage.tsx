import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Layers, Search, Sparkles } from 'lucide-react';
import { ECOSYSTEM_RESOURCES, EcosystemResource } from '../data/ministryData';

const CATS: ('All' | EcosystemResource['category'])[] = [
  'All',
  'Spiritual Growth',
  'Community',
  'Media',
  'Services',
  'Resources'
];

export const ResourcesPage: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<'All' | EcosystemResource['category']>('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return ECOSYSTEM_RESOURCES.filter(r => {
      const catOk = selectedCat === 'All' || r.category === selectedCat;
      const q = query.trim().toLowerCase();
      const qOk =
        !q ||
        r.name.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.category.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [selectedCat, query]);

  return (
    <div>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <div>
            <span className="eyebrow eyebrow-light">Ephesus Ecosystem & Extras</span>
            <h1>Your Gateway to Every EGW Ministry Resource</h1>
            <p className="lead">
              Explore live broadcasts, daily reading trackers, confidential prayer care, WhatsApp alerts, volunteer departments, and upcoming Ephesus platforms—all in one place with zero dead links.
            </p>
          </div>
          <div className="stats-ribbon" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="stat-item">
              <div className="stat-value">
                {ECOSYSTEM_RESOURCES.filter(r => r.status === 'Available Now').length}
              </div>
              <div className="stat-label">Active Today</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">
                {ECOSYSTEM_RESOURCES.filter(r => r.status !== 'Available Now').length}
              </div>
              <div className="stat-label">In Preview / Opening</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-bar">
            <div className="chip-group">
              {CATS.map(cat => (
                <button
                  key={cat}
                  type="button"
                  className={`chip-btn ${selectedCat === cat ? 'is-active' : ''}`}
                  onClick={() => setSelectedCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="search-filter-box">
              <Search size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                className="field-input"
                style={{ paddingLeft: '2.35rem', minHeight: 42, borderRadius: 'var(--radius-pill)' }}
                placeholder="Search resources..."
                value={query}
                onChange={e => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid-3">
            {filtered.map(res => {
              const isLiveNow = res.status === 'Available Now';
              return (
                <article
                  key={res.id}
                  className="card card-interactive"
                  style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '1.15rem' }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem', gap: '0.5rem' }}>
                      <span className="badge badge-navy">
                        <Layers size={12} /> {res.category}
                      </span>
                      <span className={`badge ${isLiveNow ? 'badge-ok' : 'badge-gold'}`}>
                        {isLiveNow ? 'Available Now' : <><Sparkles size={11} /> Preview</>}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '1.22rem', marginBottom: '0.4rem' }}>{res.name}</h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{res.description}</p>
                  </div>

                  <div>
                    {res.externalUrl ? (
                      <a
                        href={res.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        {res.actionLabel} <ExternalLink size={14} />
                      </a>
                    ) : (
                      <Link
                        to={res.internalRoute || '/contact'}
                        className={`btn ${isLiveNow ? 'btn-primary' : 'btn-outline'} btn-sm`}
                      >
                        {res.actionLabel} <ArrowRight size={14} />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
