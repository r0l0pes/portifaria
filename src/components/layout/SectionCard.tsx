import React from 'react';

/**
 * Styled section wrapper providing the card-based layout used by all page sections.
 */
const SectionCard = ({ id, className = "", children, style }: { id?: string, className?: string, children: React.ReactNode, style?: React.CSSProperties }) => (
  <section
    id={id}
    style={style}
    className={`bg-[#FAF6EE] rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-sm border border-ink/[0.06] mx-auto max-w-7xl w-full mb-4 last:mb-0 relative overflow-hidden ${className}`}
  >
    {children}
  </section>
);

export { SectionCard };
