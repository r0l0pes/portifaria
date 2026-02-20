import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';

const BlogContent = () => {
  return (
    <div>
      <div className="flex justify-between items-end mb-10 md:mb-14">
        <div>
          <h2 className="text-3xl md:text-4xl font-black text-terracotta font-display mb-2">Writing</h2>
          <p className="text-ink-muted text-sm md:text-base">
            Product strategy, emerging tech, and lessons learned. Published on{' '}
            <a
              href="https://substack.com/@rodrigolopes"
              target="_blank"
              rel="noreferrer"
              className="text-terracotta hover:underline"
            >
              Substack
            </a>
            .
          </p>
        </div>
      </div>

      <div className="divide-y divide-ink/[0.06]">
        {BLOG_POSTS.slice(0, 5).map((post) => (
          <a
            key={post.id}
            href={`https://substack.com/@rodrigolopes`}
            target="_blank"
            rel="noreferrer"
            className="group flex items-start justify-between gap-4 py-5 hover:bg-ink/[0.02] -mx-2 px-2 rounded-lg transition-colors"
          >
            <div className="min-w-0">
              <div className="text-xs text-ink-muted mb-1">{post.date} &middot; {post.readTime}</div>
              <div className="text-base md:text-lg font-semibold text-ink group-hover:text-terracotta transition-colors leading-snug">
                {post.title}
              </div>
            </div>
            <ArrowUpRight size={18} className="text-ink-muted group-hover:text-terracotta transition-colors shrink-0 mt-1" />
          </a>
        ))}
      </div>
    </div>
  );
};

export { BlogContent };
