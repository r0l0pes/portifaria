import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '@/constants';
import { BlurFade } from '../ui/BlurFade';

const BlogContent = () => (
  <div>
    <BlurFade delay={0.1}>
      <div className="mb-10 md:mb-14">
        <h2 className="text-3xl md:text-4xl font-black text-terracotta font-display mb-2">Writing</h2>
        <p className="text-ink-muted text-sm md:text-base">
          Product strategy, emerging tech, and lessons learned. Published on{' '}
          <a href="https://substack.com/@r0l0pes" target="_blank" rel="noreferrer" className="text-terracotta hover:underline">
            Substack
          </a>.
        </p>
      </div>
    </BlurFade>

    <div className="divide-y divide-ink/[0.08]">
      {BLOG_POSTS.slice(0, 5).map((post, i) => (
        <BlurFade key={post.id} delay={0.2 + i * 0.1} yOffset={10}>
          <motion.a
            href="https://substack.com/@r0l0pes"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between gap-4 py-5 -mx-4 px-4 rounded-xl transition-colors relative"
            whileHover={{ backgroundColor: '#EDE7D9', x: 4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          >
            <div className="min-w-0 flex items-center gap-5">
              <span className="text-sm font-bold text-terracotta/40 font-display tabular-nums shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <div className="text-xs text-ink-muted mb-1">{post.date} · {post.readTime}</div>
                <div className="text-base md:text-lg font-semibold text-ink group-hover:text-terracotta transition-colors leading-snug">
                  {post.title}
                </div>
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.2, rotate: -10 }} transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              <ArrowUpRight size={20} className="text-ink/30 group-hover:text-terracotta transition-colors shrink-0" />
            </motion.div>
          </motion.a>
        </BlurFade>
      ))}
    </div>
  </div>
);

export { BlogContent };
