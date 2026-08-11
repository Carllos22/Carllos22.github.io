import React from 'react';

export const SpotlightCard = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`shadcn-card group ${className}`}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
};
