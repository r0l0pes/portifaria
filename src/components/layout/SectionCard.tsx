import React from 'react';

/**
 * Styled section wrapper providing the card-based layout used by all page sections.
 * @param {{ id?: string, className?: string, children: React.ReactNode, style?: React.CSSProperties }} props
 * @param {string} [props.id] - Section anchor ID for navigation
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.ReactNode} props.children - Section content
 * @param {React.CSSProperties} [props.style] - Inline styles
 * @returns {React.ReactElement} Styled section element
 */
const SectionCard = ({ id, className = "", children, style }: { id?: string, className?: string, children: React.ReactNode, style?: React.CSSProperties }) => (
  <section
    id={id}
    style={style}
    className={`bg-white dark:bg-[#162032] rounded-[1.5rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-sm border border-black/5 dark:border-white/5 mx-auto max-w-7xl w-full mb-6 last:mb-0 relative overflow-hidden transition-transform duration-500 ${className}`}
  >
    {children}
  </section>
);

export { SectionCard };
