import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone
} from 'lucide-react';

const footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Solutions Matrix", path: "/shop1" },
    { name: "MindClick Academy", path: "/education" },
    { name: "About Agency", path: "/about" },
    { name: "Initiate Audit", path: "/contact" }
  ];

  const solutions = [
    { name: "Visibility Architecture", path: "/shop1" },
    { name: "Value Web Platforms", path: "/shop1" },
    { name: "Core IT Partnerships", path: "/shop1" }
  ];

  return (
    <footer className="bg-[#000047] text-white border-t border-white/10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Strategic Positioning (4/12 Columns) */}
          <div className="md:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <h2 
                className="text-3xl font-normal tracking-tight text-white" 
                style={{ fontFamily: "'Sugo Display', sans-serif" }}
              >
                MINDCLICK<span className="text-[#ffd600]">.</span>
              </h2>
            </Link>
            <p className="text-white/70 text-sm font-medium leading-relaxed max-w-sm">
              We structure distinct market visibility, high-converting digital storefronts, and robust software architectures for modern growth loops.
            </p>
            
            {/* Social Signal Handles */}
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ffd600] hover:text-[#000047] flex items-center justify-center transition-all text-white" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ffd600] hover:text-[#000047] flex items-center justify-center transition-all text-white" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#ffd600] hover:text-[#000047] flex items-center justify-center transition-all text-white" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2/12 Columns) */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs font-black tracking-widest text-white/40 uppercase">
              Navigation
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    to={link.path} 
                    className="text-xs sm:text-sm font-bold text-white/70 hover:text-[#ffd600] transition-colors uppercase tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Solutions Vectors (3/12 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-black tracking-widest text-white/40 uppercase">
              Core Ecosystems
            </h3>
            <ul className="space-y-3">
              {solutions.map((item, idx) => (
                <li key={idx}>
                  <Link 
                    to={item.path} 
                    className="text-xs sm:text-sm font-bold text-white/70 hover:text-[#ffd600] transition-colors uppercase tracking-wide"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Communication Channels (3/12 Columns) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-black tracking-widest text-white/40 uppercase">
              Secure Interface
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-xs sm:text-sm font-bold text-white/80">
                <Mail className="w-4 h-4 text-white/40 shrink-0" />
                <a href="mailto:hello@themindclick.com" className="hover:text-[#ffd600] transition-colors break-all">
                  hello@themindclick.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-xs sm:text-sm font-bold text-white/80">
                <Phone className="w-4 h-4 text-white/40 shrink-0" />
                <a href="tel:+94707780749" className="hover:text-[#ffd600] transition-colors">
                  +94 70 77 80749
                </a>
              </li>
            </ul>
            
            {/* Contextual Live Status Label */}
            <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-wider text-white/60">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Ecosystem Operational 2026</span>
            </div>
          </div>

        </div>

        {/* ── LOWER CLOSING STRIP ── */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-bold uppercase tracking-wider text-white/40">
          <div>
            © {currentYear} MINDCLICK GROWTH SYSTEMS. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Security Protocol</span>
            <span className="hover:text-white cursor-pointer">Terms of Architecture</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default footer;