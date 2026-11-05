import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  onDark?: boolean;
  width?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ onDark = false, width = 148 }) => {
  return (
    <Link
      to="/"
      className={`brand-link ${onDark ? 'force-dark' : ''}`}
      aria-label="Ephesus Gatherings Worldwide — Home"
      style={{ '--logo-w': `${width}px` } as React.CSSProperties}
    >
      <img
        src="/brand/egw-main-dark.png"
        alt="Ephesus Gatherings Worldwide"
        className="brand-img logo-dark-ink"
        width="1600"
        height="485"
        loading="eager"
      />
      <img
        src="/brand/egw-main-white.png"
        alt="Ephesus Gatherings Worldwide"
        className="brand-img logo-white-ink"
        width="1600"
        height="485"
        loading="eager"
      />
    </Link>
  );
};
