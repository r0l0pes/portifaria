import React from 'react';

/**
 * Styled section wrapper providing the card-based layout used by all page sections.
 */
const SectionCard = ({ id, className = "", children, style }: { id?: string, className?: string, children: React.ReactNode, style?: React.CSSProperties }) => (
  <section
    id={id}
    style={style}
    className={`bg-transparent mx-auto max-w-5xl w-full py-16 md:py-24 px-6 md:px-12 relative ${className}`}
  >
    {children}
  </section>
);

export { SectionCard };
