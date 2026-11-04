import React from 'react';
import { Link } from 'react-router-dom';

interface BrandLogoProps {
  onDark?: boolean;
  width?: number;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ onDark = false, width = 132 }) => {
  return (
    <Link to="/" className="brand-link" aria-label="Ephesus Gatherings Worldwide — Home">
      <span
        className={`brand-mask ${onDark ? 'on-dark' : ''}`}
        style={{ width: `${width}px` }}
        role="img"
        aria-hidden="true"
      />
    </Link>
  );
};
