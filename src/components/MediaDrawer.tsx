import React from 'react';
import { ExternalLink, MapPin, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const GlobalOverlays: React.FC = () => {
  const { activeMedia, closeMedia, lightboxPhoto, closeLightbox } = useApp();

  return (
    <>
      {activeMedia && (
        <aside className="media-drawer" aria-label="Media Player">
          <div className="media-drawer-header">
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-300)', fontWeight: 700 }}>
                {activeMedia.category}
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {activeMedia.title}
              </div>
            </div>
            <button
              type="button"
              onClick={closeMedia}
              style={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                color: '#FFFFFF',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
              aria-label="Close media player"
            >
              <X size={16} />
            </button>
          </div>

          <div className="media-drawer-frame">
            {activeMedia.youtubeId ? (
              <iframe
                src={`https://www.youtube.com/embed/${activeMedia.youtubeId}?autoplay=1&rel=0`}
                title={activeMedia.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : activeMedia.videoUrl ? (
              <video src={activeMedia.videoUrl} controls autoPlay playsInline poster={activeMedia.thumbnail} />
            ) : (
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.25rem',
                  textAlign: 'center',
                  gap: '0.85rem',
                  backgroundImage: `linear-gradient(rgba(6,16,36,0.82), rgba(6,16,36,0.92)), url(${activeMedia.thumbnail})`,
                  backgroundSize: 'cover'
                }}
              >
                <p style={{ fontSize: '0.88rem', color: 'rgba(255,255,255,0.86)' }}>{activeMedia.description}</p>
                {activeMedia.externalUrl && (
                  <a
                    href={activeMedia.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-gold btn-sm"
                  >
                    Open on Official Channel <ExternalLink size={14} />
                  </a>
                )}
              </div>
            )}
          </div>
          <div style={{ padding: '0.7rem 1rem', fontSize: '0.8rem', color: 'rgba(248,250,252,0.75)', display: 'flex', justifyContent: 'space-between' }}>
            <span>{activeMedia.speaker}</span>
            <span>{activeMedia.duration}</span>
          </div>
        </aside>
      )}

      {lightboxPhoto && (
        <div className="modal-backdrop" onClick={closeLightbox} role="dialog" aria-modal="true">
          <div className="lightbox-figure" onClick={e => e.stopPropagation()}>
            <img src={lightboxPhoto.src} alt={lightboxPhoto.caption} />
            <div className="lightbox-caption">
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--gold-300)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.2rem' }}>
                  {lightboxPhoto.category} · <MapPin size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /> {lightboxPhoto.location}
                </div>
                <p style={{ fontSize: '0.95rem' }}>{lightboxPhoto.caption}</p>
              </div>
              <button
                type="button"
                className="btn btn-ghost-light btn-sm"
                onClick={closeLightbox}
              >
                <X size={16} /> Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
