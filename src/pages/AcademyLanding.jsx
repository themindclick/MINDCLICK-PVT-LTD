import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Brain, Code, Terminal, Eye, ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const AcademyLanding = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 1. Semantic Architecture Categories
  const categories = [
    { id: 'All', label: 'All Knowledge Base', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'Tech', label: 'Tech & Architecture', icon: <Terminal className="w-4 h-4" /> },
    { id: 'Marketing', label: 'Visibility Engineering', icon: <Eye className="w-4 h-4" /> },
    { id: 'Psychology', label: 'Consumer Psychology', icon: <Brain className="w-4 h-4" /> },
  ];

  // 2. SEO-Friendly Core Article Mock-Structure
  // (You will dynamically plug your databases/markdown files into this schema framework later)
  const articles = [
    {
      id: 1,
      category: 'Tech',
      title: 'ENGINEERING SUB-SECOND UX WITH THE MERN STACK',
      description: 'A deep architectural review on optimizing fast frontend data fetching, multi-tenant MongoDB indices, and reducing initial loading layout latency down to milliseconds.',
      readTime: '6 min read',
      difficulty: 'Intermediate',
      slug: 'mern-stack-sub-second-ux',
      keywords: ['MERN stack optimization', 'React performance', 'MongoDB scaling']
    },
    {
      id: 2,
      category: 'Marketing',
      title: 'THE ALGORITHMIC TIKTOK PIPELINE FOR LOCAL MARKTES',
      description: 'Breaking down how to bypass traditional social media distribution traps by structuring high-retention organic content frame timelines that trigger local indexing hooks.',
      readTime: '4 min read',
      difficulty: 'Beginner',
      slug: 'algorithmic-tiktok-pipeline-local',
      keywords: ['TikTok marketing distribution', 'Organic growth strategy', 'Local SEO hooks']
    },
    {
      id: 3,
      category: 'Psychology',
      title: 'COGNITIVE REFLEXES IN USER ACTION PATTERNS',
      description: 'An evaluation of behavioral conversion layouts. Learn how strategic spatial button arrangements and high-contrast styling triggers instant high-intent user selections.',
      readTime: '8 min read',
      difficulty: 'Advanced',
      slug: 'cognitive-reflexes-user-conversion',
      keywords: ['Consumer psychology marketing', 'Conversion rate UI patterns', 'UX psychology']
    }
  ];

  // Interactive UI Filtering Pipeline
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-white min-h-screen pt-24 pb-20 text-[#000047]">
      
      {/* ── PART 1: MASTER SEARCH & SEO HEADER ── */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#000047]/5 pb-12">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-[#000047]/5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles className="w-3 h-3 text-[#ffd600] fill-[#ffd600]" /> MindClick Open Academy
          </span>
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight uppercase leading-[1.05]"
            style={{ fontFamily: "'Sugo Display', sans-serif" }}
          >
            THE PLATFORM <br />FOR GROWTH INTEL.
          </h1>
          <p className="text-[#000047]/70 text-base sm:text-lg font-medium mt-4 max-w-xl">
            No gatekeeping. Welcome to our live documentation ecosystem mapping consumer psychological structures, modern application codebases, and brand expansion frameworks.
          </p>

          {/* Interactive Global Search bar */}
          <div className="mt-8 max-w-2xl relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#000047]/40 w-5 h-5 group-focus-within:text-[#000047] transition-colors" />
            <input 
              type="text"
              placeholder="Search frameworks, terminal configurations, code paths..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-[#000047]/10 focus:border-[#000047] rounded-2xl outline-none text-sm font-medium bg-white transition-all shadow-inner placeholder-[#000047]/30"
            />
          </div>
        </div>
      </header>

      {/* ── PART 2: THE LMS WORKSPACE CONTENT MATRIX ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* SIDE NAVIGATION PANEL (3 Columns) */}
        <aside className="lg:col-span-3 lg:sticky lg:top-28 space-y-2">
          <h2 className="text-[10px] font-black tracking-widest text-[#000047]/40 uppercase px-3 mb-4">
            Navigation Matrix
          </h2>
          <nav className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-left transition-all shrink-0 lg:w-full border ${
                  activeCategory === cat.id 
                    ? 'bg-[#000047] text-white border-[#000047] shadow-md shadow-[#000047]/10' 
                    : 'bg-transparent text-[#000047]/70 border-transparent hover:bg-[#000047]/5 hover:text-[#000047]'
                }`}
              >
                <span className={activeCategory === cat.id ? 'text-[#ffd600]' : 'text-[#000047]'}>
                  {cat.icon}
                </span>
                <span>{cat.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* COMPACT BENTO KNOWLEDGE FEED (9 Columns) */}
        <section className="lg:col-span-9 space-y-6">
          <div className="flex items-center justify-between border-b border-[#000047]/5 pb-4 mb-4">
            <span className="text-[10px] font-black tracking-widest text-[#000047]/40 uppercase">
              Surfaced Framework Results ({filteredArticles.length})
            </span>
          </div>

          <div className="space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredArticles.length > 0 ? (
                filteredArticles.map((article) => (
                  <motion.article
                    key={article.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white border-2 border-[#000047]/10 hover:border-[#000047] p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative group transition-all duration-300 shadow-sm"
                  >
                    {/* Hidden metadata indicators to help clean scraper tracking maps */}
                    <div className="hidden">
                      {article.keywords.map((kw, idx) => <span key={idx}>{kw}</span>)}
                    </div>

                    <div>
                      {/* Top Meta Attributes Row */}
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <span className="text-[10px] font-bold bg-[#000047]/5 text-[#000047] px-3 py-1 rounded-md uppercase tracking-wider">
                          {article.category}
                        </span>
                        
                        <div className="flex items-center gap-4 text-[11px] font-bold text-[#000047]/40 uppercase tracking-wide">
                          <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readTime}</span>
                          <span>•</span>
                          <span className="text-[#000047]/60">{article.difficulty}</span>
                        </div>
                      </div>

                      {/* Main Interactive Headline Link */}
                      <Link to={`/education/${article.slug}`} className="block group-hover:opacity-80 transition-opacity">
                        <h3 
                          className="text-xl sm:text-2xl text-[#000047] font-normal tracking-tight mb-3 leading-tight"
                          style={{ fontFamily: "'Sugo Display', sans-serif" }}
                        >
                          {article.title}
                        </h3>
                      </Link>

                      <p className="text-[#000047]/70 text-xs sm:text-sm font-medium leading-relaxed max-w-3xl mb-6">
                        {article.description}
                      </p>
                    </div>

                    {/* Footer Access Row */}
                    <div className="pt-4 border-t border-[#000047]/5 flex items-center justify-between">
                      <Link 
                        to={`/education/${article.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#000047] group/link"
                      >
                        <span>Initialize Course Module</span>
                        <ArrowRight className="w-4 h-4 text-[#ffd600] group-hover/link:translate-x-1 transition-transform" />
                      </Link>

                      {/* Code Tag Ornament Decoration */}
                      <div className="opacity-20 group-hover:opacity-100 group-hover:text-[#ffd600] text-[#000047] transition-all duration-300">
                        <Code className="w-4 h-4" />
                      </div>
                    </div>

                  </motion.article>
                ))
              ) : (
                // Safe state message for unmatched search configurations
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16 border-2 border-dashed border-[#000047]/10 rounded-2xl text-[#000047]/50 font-medium text-sm"
                >
                  No system document matches your current search criteria. Try filtering by alternative system terms.
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </section>

      </div>
    </main>
  );
};

export default AcademyLanding;