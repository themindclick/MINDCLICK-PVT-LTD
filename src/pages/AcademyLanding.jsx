import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { Search, Brain, Terminal, Eye, ArrowRight, BookOpen, Clock, X, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

/* Brand tokens — unchanged: navy, yellow, white */
const NAVY = '#000047';
const YELLOW = '#ffd600';
const DISPLAY = "'Sugo Display', sans-serif";
const BODY = "'DM Sans', system-ui, sans-serif";
const EASE = [0.16, 1, 0.3, 1];

/* Topics: plain-language names + one line telling people what they'll find */
const topics = [
  { id: 'All', label: 'Everything', hint: 'Browse every guide', icon: BookOpen },
  { id: 'Tech', label: 'Tech & Code', hint: 'Build fast, reliable apps', icon: Terminal },
  { id: 'Marketing', label: 'Get Seen Online', hint: 'Grow your audience', icon: Eye },
  { id: 'Psychology', label: 'Customer Behavior', hint: 'Why people click and buy', icon: Brain },
];

const levels = ['All levels', 'Beginner', 'Intermediate', 'Advanced'];
const levelDots = { Beginner: 1, Intermediate: 2, Advanced: 3 };

const articles = [
  {
    id: 1,
    category: 'Tech',
    title: 'Engineering Sub-Second UX with the MERN Stack',
    description:
      'A deep architectural review on optimizing fast frontend data fetching, multi-tenant MongoDB indices, and reducing initial loading layout latency down to milliseconds.',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    slug: 'mern-stack-sub-second-ux',
    keywords: ['MERN stack optimization', 'React performance', 'MongoDB scaling'],
  },
  {
    id: 2,
    category: 'Marketing',
    title: 'The Algorithmic TikTok Pipeline for Local Markets',
    description:
      'Breaking down how to bypass traditional social media distribution traps by structuring high-retention organic content frame timelines that trigger local indexing hooks.',
    readTime: '4 min read',
    difficulty: 'Beginner',
    slug: 'algorithmic-tiktok-pipeline-local',
    keywords: ['TikTok marketing distribution', 'Organic growth strategy', 'Local SEO hooks'],
  },
  {
    id: 3,
    category: 'Psychology',
    title: 'Cognitive Reflexes in User Action Patterns',
    description:
      'An evaluation of behavioral conversion layouts. Learn how strategic spatial button arrangements and high-contrast styling triggers instant high-intent user selections.',
    readTime: '8 min read',
    difficulty: 'Advanced',
    slug: 'cognitive-reflexes-user-conversion',
    keywords: ['Consumer psychology marketing', 'Conversion rate UI patterns', 'UX psychology'],
  },
];

const topicFor = (id) => topics.find((t) => t.id === id) || topics[0];

/* Three dots = quick visual sense of difficulty, with a text label for clarity */
const LevelBadge = ({ level }) => (
  <span className="inline-flex items-center gap-2 text-xs font-semibold" style={{ color: NAVY, fontFamily: BODY }}>
    <span className="flex gap-1" aria-hidden>
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className="w-2 h-2 rounded-full"
          style={{ background: n <= levelDots[level] ? YELLOW : 'rgba(0,0,71,0.12)', border: n <= levelDots[level] ? `1px solid ${NAVY}` : '1px solid transparent' }}
        />
      ))}
    </span>
    {level}
  </span>
);

const AcademyLanding = () => {
  const [activeTopic, setActiveTopic] = useState('All');
  const [activeLevel, setActiveLevel] = useState('All levels');
  const [searchQuery, setSearchQuery] = useState('');

  const counts = useMemo(() => {
    const c = { All: articles.length };
    articles.forEach((a) => (c[a.category] = (c[a.category] || 0) + 1));
    return c;
  }, []);

  const filtered = articles.filter((a) => {
    const q = searchQuery.trim().toLowerCase();
    const matchesTopic = activeTopic === 'All' || a.category === activeTopic;
    const matchesLevel = activeLevel === 'All levels' || a.difficulty === activeLevel;
    const matchesSearch =
      !q ||
      a.title.toLowerCase().includes(q) ||
      a.description.toLowerCase().includes(q) ||
      a.keywords.some((k) => k.toLowerCase().includes(q));
    return matchesTopic && matchesLevel && matchesSearch;
  });

  const hasFilters = activeTopic !== 'All' || activeLevel !== 'All levels' || searchQuery !== '';
  const reset = () => {
    setActiveTopic('All');
    setActiveLevel('All levels');
    setSearchQuery('');
  };

  return (
    <MotionConfig reducedMotion="user">
      <main className="bg-white min-h-screen pt-24 pb-24" style={{ color: NAVY, fontFamily: BODY }}>
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          {/* ── Header: one job — say what this is and let people search ── */}
          <header className="max-w-3xl">
            <p
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5"
              style={{ background: YELLOW }}
            >
              MindClick Academy
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl uppercase leading-[1.05] tracking-tight"
              style={{ fontFamily: DISPLAY, fontWeight: 700 }}
            >
              Learn what helps your business grow.
            </h1>
            <p className="mt-5 text-base sm:text-lg font-medium max-w-xl" style={{ opacity: 0.7, lineHeight: 1.7 }}>
              Free, practical guides on tech, online visibility and customer behavior. Pick a topic or search for what you need.
            </p>

            {/* Search */}
            <div className="relative mt-8 max-w-2xl">
              <label htmlFor="academy-search" className="sr-only">
                Search guides
              </label>
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" style={{ opacity: 0.45 }} />
              <input
                id="academy-search"
                type="text"
                inputMode="search"
                autoComplete="off"
                placeholder="Search guides, e.g. TikTok, React, conversions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white text-base font-medium outline-none transition-shadow placeholder:text-[#000047]/40"
                style={{ border: '2px solid rgba(0,0,71,0.15)' }}
                onFocus={(e) => {
                  e.target.style.borderColor = NAVY;
                  e.target.style.boxShadow = `0 0 0 4px ${YELLOW}66`;
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'rgba(0,0,71,0.15)';
                  e.target.style.boxShadow = 'none';
                }}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#000047]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#000047]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </header>

          {/* ── Step 1: choose a topic ── */}
          <section className="mt-14" aria-labelledby="topic-heading">
            <h2 id="topic-heading" className="text-lg font-bold mb-4">
              1. Choose a topic
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {topics.map((t) => {
                const Icon = t.icon;
                const active = activeTopic === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActiveTopic(t.id)}
                    aria-pressed={active}
                    className="relative text-left rounded-2xl p-4 sm:p-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000047]"
                    style={{
                      background: active ? NAVY : '#fff',
                      color: active ? '#fff' : NAVY,
                      border: `2px solid ${active ? NAVY : 'rgba(0,0,71,0.12)'}`,
                    }}
                  >
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: active ? YELLOW : 'rgba(0,0,71,0.06)' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: NAVY }} />
                    </span>
                    <span className="block font-bold text-sm sm:text-base leading-tight">{t.label}</span>
                    <span className="block text-xs sm:text-[13px] mt-1 font-medium" style={{ opacity: active ? 0.75 : 0.6 }}>
                      {t.hint}
                    </span>
                    <span
                      className="absolute top-3 right-3 text-[11px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: active ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,71,0.06)' }}
                    >
                      {counts[t.id] || 0}
                    </span>
                    {active && (
                      <motion.span
                        layoutId="topic-underline"
                        className="absolute left-5 right-5 bottom-0 h-[4px] rounded-t-full"
                        style={{ background: YELLOW }}
                        transition={{ duration: 0.4, ease: EASE }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Step 2: pick a level ── */}
          <section className="mt-10" aria-labelledby="level-heading">
            <h2 id="level-heading" className="text-lg font-bold mb-4">
              2. Pick your level
            </h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by level">
              {levels.map((lvl) => {
                const active = activeLevel === lvl;
                return (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setActiveLevel(lvl)}
                    aria-pressed={active}
                    className="px-4 py-2 rounded-full text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000047]"
                    style={{
                      background: active ? YELLOW : '#fff',
                      color: NAVY,
                      border: `2px solid ${active ? NAVY : 'rgba(0,0,71,0.12)'}`,
                    }}
                  >
                    {lvl}
                  </button>
                );
              })}
            </div>
          </section>

          {/* ── Results ── */}
          <section className="mt-12" aria-live="polite">
            <div className="flex items-center justify-between pb-4 mb-6" style={{ borderBottom: '1px solid rgba(0,0,71,0.1)' }}>
              <p className="text-sm font-semibold" style={{ opacity: 0.65 }}>
                {filtered.length} {filtered.length === 1 ? 'guide' : 'guides'} found
              </p>
              {hasFilters && (
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-1.5 text-sm font-bold underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#000047] rounded"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Reset filters
                </button>
              )}
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <AnimatePresence mode="popLayout">
                {filtered.map((a) => {
                  const T = topicFor(a.category);
                  const Icon = T.icon;
                  return (
                    <motion.article
                      key={a.id}
                      layout
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="group"
                    >
                      <Link
                        to={`/education/${a.slug}`}
                        className="flex flex-col h-full rounded-2xl p-6 bg-white transition-all duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000047]"
                        style={{ border: '2px solid rgba(0,0,71,0.12)' }}
                        onMouseEnter={(e) => (e.currentTarget.style.borderColor = NAVY)}
                        onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(0,0,71,0.12)')}
                      >
                        {/* hidden keywords kept for SEO / scraping */}
                        <span className="hidden">{a.keywords.join(', ')}</span>

                        <div className="flex items-center justify-between mb-5">
                          <span className="inline-flex items-center gap-2 text-xs font-bold">
                            <span className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: NAVY }}>
                              <Icon className="w-4 h-4" style={{ color: YELLOW }} />
                            </span>
                            {T.label}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ opacity: 0.55 }}>
                            <Clock className="w-3.5 h-3.5" /> {a.readTime}
                          </span>
                        </div>

                        <h3
                          className="text-xl leading-snug mb-3"
                          style={{ fontFamily: DISPLAY, fontWeight: 700 }}
                        >
                          {a.title}
                        </h3>

                        <p className="text-sm font-medium leading-relaxed mb-6 line-clamp-4" style={{ opacity: 0.68 }}>
                          {a.description}
                        </p>

                        <div className="mt-auto pt-4 flex items-center justify-between" style={{ borderTop: '1px solid rgba(0,0,71,0.08)' }}>
                          <LevelBadge level={a.difficulty} />
                          <span className="inline-flex items-center gap-2 text-sm font-bold">
                            Read guide
                            <span
                              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
                              style={{ background: YELLOW }}
                            >
                              <ArrowRight className="w-4 h-4" style={{ color: NAVY }} />
                            </span>
                          </span>
                        </div>
                      </Link>
                    </motion.article>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Empty state: say what happened and what to do next */}
            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 rounded-2xl"
                style={{ border: '2px dashed rgba(0,0,71,0.15)' }}
              >
                <p className="font-bold text-lg">No guides match your search.</p>
                <p className="text-sm font-medium mt-1" style={{ opacity: 0.6 }}>
                  Try a shorter word, or choose a different topic or level.
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#000047]"
                  style={{ background: YELLOW, color: NAVY }}
                >
                  <RotateCcw className="w-4 h-4" /> Show all guides
                </button>
              </motion.div>
            )}
          </section>
        </div>
      </main>
    </MotionConfig>
  );
};

export default AcademyLanding;