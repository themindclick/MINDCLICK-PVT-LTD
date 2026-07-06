import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Database, ShieldCheck, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const FinalCTA = () => {
  return (
    <section className="bg-white py-16 lg:py-24 relative overflow-hidden border-t border-[#000047]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Deep Navy High-Impact Anchor Box */}
        <div className="bg-[#000047] rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-xl text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Decorative Subtle Branding Grid Element */}
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
          
          <div className="space-y-6 max-w-2xl z-10">
            <span className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-white/10">
              <Sparkles className="w-3 h-3 text-[#ffd600] fill-[#ffd600]" /> Secure Your Strategy Allocation
            </span>
            
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl text-white font-normal tracking-tight leading-tight"
              style={{ fontFamily: "'Sugo Display', sans-serif" }}
            >
              READY TO ENGINEER YOUR <br />
              NEXT REVENUE LEVEL?
            </h2>
            
            <p className="text-white/70 text-sm sm:text-base font-medium max-w-xl leading-relaxed mx-auto lg:mx-0">
              Stop letting system friction drop premium clients. Let's audit your existing landing paths, tracking setups, and advertising structures completely free.
            </p>

            {/* Micro Trust Indicators */}
            <div className="pt-4 flex flex-wrap gap-6 justify-center lg:justify-start text-[11px] font-bold tracking-wider uppercase text-white/50">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#ffd600]" /> Zero Cost Audit</span>
              <span className="flex items-center gap-1.5"><Cpu className="w-4 h-4 text-[#ffd600]" /> Architecture Review</span>
              <span className="flex items-center gap-1.5"><Database className="w-4 h-4 text-[#ffd600]" /> Data Leak Analysis</span>
            </div>
          </div>

          {/* Core Conversion Catalyst Button */}
          <div className="w-full lg:w-auto shrink-0 z-10">
            <Link to="/contact" className="block w-full sm:inline-block">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto group bg-[#ffd600] hover:bg-white text-[#000047] px-8 py-5 rounded-2xl font-black uppercase tracking-wider text-sm transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-black/20"
              >
                <span>Claim Your Free Audit</span>
                <ArrowRight className="w-5 h-5 text-[#000047] group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;