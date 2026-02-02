import React, { useEffect } from 'react';
import { X, ChevronRight, Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '@/constants';
import { BlogPost } from '@/types';
import { logEvent } from '../../components/Analytics';
import { SectionCard } from '../layout/SectionCard';

/**
 * Full-screen modal for reading a single blog post.
 * @param {{ post: BlogPost, onClose: () => void }} props
 * @param {BlogPost} props.post - Blog post data to render
 * @param {() => void} props.onClose - Close the modal
 * @returns {React.ReactElement} Blog post reader overlay
 */
const BlogPostView = ({ post, onClose }: { post: BlogPost; onClose: () => void }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex justify-center items-end md:items-center bg-[#FFFF00]/95 dark:bg-[#0B1120]/95 backdrop-blur-none p-0 md:p-6 overflow-y-auto">
      <div className="bg-white dark:bg-[#162032] w-full max-w-4xl border-2 border-black dark:border-white/20 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_#00CCFF] relative flex flex-col max-h-[95vh] md:max-h-[90vh] h-full md:h-auto rounded-t-3xl md:rounded-3xl overflow-hidden">

        {/* Header */}
        <div className="sticky top-0 bg-white dark:bg-[#162032] z-10 p-6 md:p-8 border-b-2 border-black dark:border-white/10 flex justify-between items-center">
          <button onClick={onClose} className="text-xs md:text-sm font-bold uppercase tracking-widest text-black dark:text-white hover:text-[#00CCFF] flex items-center gap-2">
            <ChevronRight size={16} className="rotate-180" /> Back to Writings
          </button>
          <button onClick={onClose} className="p-2 bg-black dark:bg-white text-white dark:text-black hover:bg-[#00CCFF] hover:text-black transition-colors rounded-full">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-16 overflow-y-auto custom-scrollbar bg-white dark:bg-[#162032]">
          <article className="max-w-2xl mx-auto">
            <header className="mb-8 md:mb-12 text-center border-b-2 border-black/5 dark:border-white/10 pb-8 md:pb-12">
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-[10px] md:text-xs font-black text-black uppercase tracking-widest mb-4 md:mb-6">
                {post.tags.map(tag => <span key={tag} className="bg-[#FFFF00] dark:bg-[#00CCFF] text-black px-2 py-1 rounded-sm">{tag}</span>)}
              </div>
              <h1 className="text-3xl md:text-6xl font-black text-[#00CCFF] dark:text-white mb-4 md:mb-6 leading-none uppercase">{post.title}</h1>
              <div className="flex justify-center items-center gap-4 md:gap-6 text-[#4466FF] dark:text-gray-400 font-bold text-xs md:text-sm uppercase tracking-wide">
                <span className="flex items-center gap-2"><Calendar size={14} /> {post.date}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {post.readTime}</span>
              </div>
            </header>

            <div className="space-y-6 md:space-y-8 text-[#4466FF] dark:text-gray-300 leading-relaxed text-base md:text-lg font-medium">
              {post.content.map((block, idx) => {
                if (block.type === 'heading') {
                  return <h2 key={idx} className="text-2xl md:text-3xl font-black text-black dark:text-white mt-8 md:mt-12 mb-2 md:mb-4 uppercase">{block.text}</h2>;
                }
                if (block.type === 'list') {
                  return (
                    <ul key={idx} className="list-disc pl-6 space-y-2 md:space-y-3 my-6 md:my-8 text-black dark:text-white font-medium">
                      {(block as any).items.map((item: string, i: number) => <li key={i}>{item}</li>)}
                    </ul>
                  );
                }
                return <p key={idx}>{block.text}</p>;
              })}
            </div>

            <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t-2 border-black/10 dark:border-white/10 text-center">
              <p className="text-black dark:text-white font-bold uppercase tracking-widest text-xs">Thanks for reading.</p>
            </div>
          </article>
        </div>

      </div>
    </div>
  );
};

/**
 * Writings section with a featured post and a grid of recent articles.
 * @param {{ onReadPost: (post: BlogPost) => void, onViewArchive: () => void }} props
 * @param {(post: BlogPost) => void} props.onReadPost - Callback to open a post in the reader
 * @param {() => void} props.onViewArchive - Callback to navigate to the full archive view
 * @returns {React.ReactElement} Writings section content
 */
const BlogContent = ({ onReadPost, onViewArchive }: { onReadPost: (post: BlogPost) => void, onViewArchive: () => void }) => {
  const featuredPost = BLOG_POSTS[0];
  const otherPosts = BLOG_POSTS.slice(1, 3);
  const totalReadTime = BLOG_POSTS.reduce((acc, post) => acc + parseInt(post.readTime), 0);

  return (
    <div className="relative">
      {/* Subtle background treatment */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00CCFF]/5 to-transparent dark:via-[#00CCFF]/10 -mx-6 md:-mx-12 px-6 md:px-12 rounded-3xl"></div>

      <div className="relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-black text-[#00CCFF] uppercase tracking-wide flex items-center gap-4 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#FFFF00] border-[3px] border-black"></div>
              Writings
            </h2>
            <p className="text-[#4466FF] dark:text-gray-400 text-sm md:text-base font-medium max-w-md">
              Thinking out loud about product strategy, emerging tech, and lessons learned.
            </p>
            {/* Metadata (article count) removed as requested */}
          </div>
          <button onClick={onViewArchive} className="hidden md:flex items-center gap-2 px-5 py-3 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-widest text-xs hover:bg-[#00CCFF] hover:text-black transition-all rounded-sm shadow-[4px_4px_0px_0px_#FFFF00] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
            View All Writings <ArrowRight size={16} />
          </button>
        </div>

        {/* Featured Post - Large Card */}
        <div
          onClick={() => {
            logEvent('Blog', 'View Post', featuredPost.title);
            onReadPost(featuredPost);
          }}
          className="group bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 p-8 md:p-12 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#4466FF] dark:hover:shadow-[12px_12px_0px_0px_#FFFF00] rounded-xl mb-6 md:mb-8 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            {/* Featured badge removed as requested */}
          </div>
          <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
            {featuredPost.tags.map((tag) => (
              <span key={tag} className="px-2 py-1 bg-[#00CCFF]/10 dark:bg-[#00CCFF]/20 text-[#00CCFF] text-xs font-bold rounded">
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-black dark:text-white mb-4 md:mb-6 group-hover:text-[#00CCFF] transition-colors leading-tight">
            {featuredPost.title}
          </h3>
          <p className="text-[#4466FF] dark:text-gray-400 text-base md:text-lg leading-relaxed mb-6 md:mb-8 max-w-3xl">
            {featuredPost.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-black/50 dark:text-white/50 text-sm font-medium">
              <span>{featuredPost.date}</span>
              <span>·</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <div className="flex items-center gap-2 text-[#00CCFF] text-sm font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
              Read Article <ArrowRight size={18} />
            </div>
          </div>
        </div>

        {/* Other Posts - Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {otherPosts.map((post, index) => (
            <div
              key={post.id}
              onClick={() => {
                logEvent('Blog', 'View Post', post.title);
                onReadPost(post);
              }}
              className="group bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 p-6 md:p-8 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#4466FF] dark:hover:shadow-[8px_8px_0px_0px_#FFFF00] rounded-xl relative"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="px-2 py-1 bg-black/5 dark:bg-white/10 text-black/60 dark:text-white/60 text-xs font-medium rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-lg md:text-xl font-black text-black dark:text-white mb-3 md:mb-4 group-hover:text-[#00CCFF] transition-colors leading-tight">
                {post.title}
              </h3>
              <p className="text-[#4466FF] dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-black/40 dark:text-white/40 text-xs font-medium">{post.date} · {post.readTime}</span>
                <div className="flex items-center gap-2 text-[#00CCFF] text-xs font-bold uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center md:hidden">
          <button onClick={onViewArchive} className="px-8 py-4 bg-black text-white dark:bg-white dark:text-black border-2 border-black dark:border-white font-bold uppercase tracking-widest text-xs hover:bg-[#00CCFF] hover:text-black w-full rounded-sm shadow-[4px_4px_0px_0px_#FFFF00] hover:shadow-none">
            View All Writings
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * Full archive page listing all blog posts in a responsive grid.
 * @param {{ onReadPost: (post: BlogPost) => void, onBack: () => void }} props
 * @param {(post: BlogPost) => void} props.onReadPost - Callback to open a post in the reader
 * @param {() => void} props.onBack - Callback to return to the home view
 * @returns {React.ReactElement} Archive page content
 */
const ArchiveView = ({ onReadPost, onBack }: { onReadPost: (post: BlogPost) => void, onBack: () => void }) => (
  <SectionCard className="min-h-[80vh]">
    <div>
      <div className="mb-12 md:mb-16">
        <button onClick={onBack} className="text-black dark:text-white hover:text-[#00CCFF] flex items-center gap-2 mb-6 md:mb-8 text-xs font-bold uppercase tracking-widest transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </button>
        <h1 className="text-4xl md:text-7xl font-black text-[#00CCFF] mb-4 uppercase">Archive</h1>
        <p className="text-[#4466FF] dark:text-gray-400 text-lg md:text-xl font-medium max-w-xl">All writings, thoughts, and field notes.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {BLOG_POSTS.map((post) => (
          <div
            key={post.id}
            onClick={() => {
              logEvent('Blog', 'View Post', post.title);
              onReadPost(post);
            }}
            className="group bg-white dark:bg-[#1E293B] border-2 border-black dark:border-white/10 p-6 md:p-8 cursor-pointer transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_#4466FF] dark:hover:shadow-[8px_8px_0px_0px_#FFFF00] rounded-xl"
          >
            <div className="flex justify-between items-start mb-4 md:mb-6 border-b-2 border-black/5 dark:border-white/10 pb-4">
              <span className="text-xs font-bold font-mono text-black dark:text-white">{post.date}</span>
              <span className="text-xs font-bold text-[#4466FF] dark:text-[#00CCFF] uppercase">{post.readTime}</span>
            </div>
            <h3 className="text-lg md:text-xl font-black text-[#00CCFF] mb-3 md:mb-4 group-hover:text-black dark:group-hover:text-white transition-colors uppercase leading-tight">
              {post.title}
            </h3>
            <p className="text-[#4466FF] dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-2 text-black dark:text-white text-xs font-bold uppercase tracking-widest mt-auto group-hover:gap-3 transition-all">
              Read Story <ArrowRight size={16} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </SectionCard>
);

export { BlogPostView, BlogContent, ArchiveView };
