import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import { academyArticles } from '../data/academyArticles';

const ArticleView = () => {
  const { slug } = useParams();
  
  // Find the requested record structure
  const article = academyArticles.find(item => item.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8 text-center">
        <div>
          <h2 className="text-xl font-bold text-[#000047]">Module Archive Not Configured</h2>
          <Link to="/education" className="text-sm font-bold text-[#ffd600] mt-4 block underline">
            Return to Academy Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pt-28 pb-20 text-[#000047]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Action Backwards */}
        <Link to="/education" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#000047]/60 hover:text-[#000047] mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Open Catalog</span>
        </Link>

        {/* Global Structural Article Header */}
        <header className="space-y-4 mb-12 pb-8 border-b border-[#000047]/10">
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-wider">
            <span className="bg-[#000047] text-white px-3 py-1 rounded">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-[#000047]/50">
              <Clock className="w-3.5 h-3.5" /> {article.readTime}
            </span>
            <span className="text-[#000047]/40">•</span>
            <span className="text-[#ffd600] font-black">{article.difficulty}</span>
          </div>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight uppercase tracking-tight"
            style={{ fontFamily: "'Sugo Display', sans-serif" }}
          >
            {article.title}
          </h1>
        </header>

        {/* Dynamic Page Injected Here! */}
        {/* This outputs whatever specific HTML/JSX structures you code inside your unique files */}
        <div className="w-full">
          {article.component}
        </div>

      </div>
    </article>
  );
};

export default ArticleView;