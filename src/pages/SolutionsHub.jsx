import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, Globe, Cpu, Bot, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

/* ─── Animated SVG Persons ─── */

const WalkingPerson = ({ style = {} }) => (
  <svg
    width="72" height="110" viewBox="0 0 72 110"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', bottom: 0, right: 14, opacity: 0.1, pointerEvents: 'none', ...style }}
    aria-hidden="true"
  >
    <style>{`
      @keyframes sh-bob   { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-2px)} }
      @keyframes sh-arm-l { 0%,100%{transform:rotate(-15deg)} 50%{transform:rotate(15deg)} }
      @keyframes sh-arm-r { 0%,100%{transform:rotate(15deg)} 50%{transform:rotate(-15deg)} }
      @keyframes sh-leg-l { 0%,100%{transform:rotate(-12deg)} 50%{transform:rotate(12deg)} }
      @keyframes sh-leg-r { 0%,100%{transform:rotate(12deg)} 50%{transform:rotate(-12deg)} }
      @keyframes sh-wave  { 0%,100%{transform:rotate(0deg)} 25%{transform:rotate(30deg)} 75%{transform:rotate(-10deg)} }
      @keyframes sh-think { 0%,100%{transform:rotate(0deg) translateY(0)} 50%{transform:rotate(-5deg) translateY(-1px)} }
      @keyframes sh-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
      @keyframes sh-run   { 0%,100%{transform:rotate(0deg)} 50%{transform:rotate(4deg)} }
    `}</style>
    <g style={{ animation: 'sh-bob 1.8s ease-in-out infinite', transformOrigin: '36px 55px' }}>
      <circle cx="36" cy="14" r="10" fill="#000047" />
      <rect x="27" y="26" width="18" height="30" rx="6" fill="#000047" />
      <g style={{ transformOrigin: '27px 30px', animation: 'sh-arm-l 1.8s ease-in-out infinite' }}>
        <rect x="16" y="27" width="13" height="5" rx="2.5" fill="#000047" transform="rotate(-20 27 30)" />
        <rect x="12" y="42" width="10" height="4" rx="2" fill="#ffd600" transform="rotate(-20 27 30)" />
      </g>
      <g style={{ transformOrigin: '45px 30px', animation: 'sh-arm-r 1.8s ease-in-out infinite' }}>
        <rect x="45" y="27" width="13" height="5" rx="2.5" fill="#000047" transform="rotate(20 45 30)" />
      </g>
      <g style={{ transformOrigin: '33px 56px', animation: 'sh-leg-l 1.8s ease-in-out infinite' }}>
        <rect x="29" y="55" width="7" height="28" rx="3.5" fill="#000047" />
        <rect x="25" y="79" width="12" height="5" rx="2.5" fill="#000047" />
      </g>
      <g style={{ transformOrigin: '39px 56px', animation: 'sh-leg-r 1.8s ease-in-out infinite', animationDelay: '.9s' }}>
        <rect x="36" y="55" width="7" height="28" rx="3.5" fill="#000047" />
        <rect x="34" y="79" width="12" height="5" rx="2.5" fill="#000047" />
      </g>
    </g>
  </svg>
);

const WavingPerson = ({ style = {} }) => (
  <svg
    width="72" height="110" viewBox="0 0 72 110"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', bottom: 0, right: 14, opacity: 0.1, pointerEvents: 'none', ...style }}
    aria-hidden="true"
  >
    <g style={{ animation: 'sh-float 2.2s ease-in-out infinite', transformOrigin: '36px 55px' }}>
      <circle cx="36" cy="14" r="10" fill="#000047" />
      <rect x="27" y="26" width="18" height="30" rx="6" fill="#000047" />
      <g style={{ transformOrigin: '27px 29px', animation: 'sh-wave 2s ease-in-out infinite' }}>
        <rect x="13" y="24" width="16" height="5" rx="2.5" fill="#000047" />
        <rect x="9" y="19" width="8" height="8" rx="2" fill="#ffd600" />
      </g>
      <g style={{ transformOrigin: '45px 30px', animation: 'sh-arm-r 2.2s ease-in-out infinite' }}>
        <rect x="45" y="27" width="13" height="5" rx="2.5" fill="#000047" transform="rotate(15 45 30)" />
      </g>
      <rect x="29" y="55" width="7" height="28" rx="3.5" fill="#000047" />
      <rect x="25" y="79" width="12" height="5" rx="2.5" fill="#000047" />
      <rect x="36" y="55" width="7" height="28" rx="3.5" fill="#000047" />
      <rect x="34" y="79" width="12" height="5" rx="2.5" fill="#000047" />
    </g>
  </svg>
);

const ThinkingPerson = ({ style = {} }) => (
  <svg
    width="72" height="110" viewBox="0 0 72 110"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', bottom: 0, right: 14, opacity: 0.1, pointerEvents: 'none', ...style }}
    aria-hidden="true"
  >
    <g style={{ animation: 'sh-think 2.6s ease-in-out infinite', transformOrigin: '36px 40px' }}>
      <circle cx="36" cy="14" r="10" fill="#000047" />
      <circle cx="43" cy="10" r="4" fill="#ffd600" />
      <rect x="27" y="26" width="18" height="30" rx="6" fill="#000047" />
      <rect x="14" y="27" width="15" height="5" rx="2.5" fill="#000047" transform="rotate(-10 27 30)" />
      <rect x="10" y="38" width="8" height="5" rx="2.5" fill="#000047" />
      <rect x="45" y="27" width="13" height="5" rx="2.5" fill="#000047" transform="rotate(10 45 30)" />
      <rect x="29" y="55" width="7" height="28" rx="3.5" fill="#000047" />
      <rect x="28" y="79" width="10" height="5" rx="2.5" fill="#000047" />
      <rect x="36" y="55" width="7" height="28" rx="3.5" fill="#000047" />
      <rect x="35" y="79" width="10" height="5" rx="2.5" fill="#000047" />
    </g>
  </svg>
);

const RunningPerson = ({ style = {} }) => (
  <svg
    width="72" height="110" viewBox="0 0 72 110"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', bottom: 0, right: 14, opacity: 0.1, pointerEvents: 'none', ...style }}
    aria-hidden="true"
  >
    <g style={{ animation: 'sh-run 1.2s ease-in-out infinite', transformOrigin: '36px 50px' }}>
      <circle cx="36" cy="14" r="10" fill="#000047" />
      <rect x="27" y="26" width="18" height="28" rx="6" fill="#000047" transform="rotate(-8 36 40)" />
      <g style={{ transformOrigin: '27px 29px', animation: 'sh-arm-l 1.2s ease-in-out infinite' }}>
        <rect x="10" y="26" width="18" height="5" rx="2.5" fill="#000047" transform="rotate(-35 27 29)" />
      </g>
      <g style={{ transformOrigin: '45px 29px', animation: 'sh-arm-r 1.2s ease-in-out infinite' }}>
        <rect x="45" y="26" width="18" height="5" rx="2.5" fill="#ffd600" transform="rotate(35 45 29)" />
      </g>
      <g style={{ transformOrigin: '33px 54px', animation: 'sh-leg-l 1.2s ease-in-out infinite' }}>
        <rect x="29" y="53" width="7" height="26" rx="3.5" fill="#000047" transform="rotate(-15 33 54)" />
        <rect x="22" y="74" width="14" height="5" rx="2.5" fill="#000047" transform="rotate(-15 33 54)" />
      </g>
      <g style={{ transformOrigin: '39px 54px', animation: 'sh-leg-r 1.2s ease-in-out infinite', animationDelay: '.6s' }}>
        <rect x="36" y="53" width="7" height="26" rx="3.5" fill="#000047" transform="rotate(20 39 54)" />
        <rect x="36" y="74" width="14" height="5" rx="2.5" fill="#000047" transform="rotate(20 39 54)" />
      </g>
    </g>
  </svg>
);

const FooterPerson = () => (
  <svg
    width="80" height="120" viewBox="0 0 80 120"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    style={{ position: 'absolute', right: 200, bottom: 0, opacity: 0.35, pointerEvents: 'none' }}
    aria-hidden="true"
  >
    <g style={{ animation: 'sh-float 2.4s ease-in-out infinite', transformOrigin: '40px 60px' }}>
      <circle cx="40" cy="16" r="12" fill="white" />
      <rect x="30" y="30" width="20" height="34" rx="7" fill="white" />
      <g style={{ transformOrigin: '30px 34px', animation: 'sh-wave 2s ease-in-out infinite' }}>
        <rect x="13" y="28" width="19" height="6" rx="3" fill="white" />
        <rect x="8" y="20" width="10" height="10" rx="3" fill="#ffd600" />
      </g>
      <rect x="50" y="30" width="17" height="6" rx="3" fill="white" transform="rotate(20 50 34)" />
      <rect x="32" y="63" width="8" height="32" rx="4" fill="white" />
      <rect x="27" y="90" width="14" height="6" rx="3" fill="white" />
      <rect x="40" y="63" width="8" height="32" rx="4" fill="white" />
      <rect x="38" y="90" width="14" height="6" rx="3" fill="white" />
    </g>
  </svg>
);

/* ─── Card Data ─── */

const systems = [
  {
    title: 'DIGITAL MARKETING',
    subtitle: 'Visibility Architecture',
    description:
      "We don't buy empty metrics. We deploy behavioral customer acquisition funnels that track organic trends, structure audience retention, and build high-intent distribution layers across TikTok, Meta, and Search channels.",
    icon: <Eye className="w-4 h-4 text-[#000047]" />,
    size: 'lg:col-span-6',
    tags: ['Algorithmic Distribution', 'Retention Engineering', 'ROAS Scaling'],
    darkIcon: false,
    Person: WalkingPerson,
  },
  {
    title: 'BUSINESS WEBSITES',
    subtitle: 'Frontend Value Layers',
    description:
      "Engineering blazing-fast digital frontpages built explicitly around your brand's unique marketplace definition. Designed to eliminate bounce rates and smoothly guide cold traffic directly into solid conversion loops.",
    icon: <Globe className="w-4 h-4 text-[#000047]" />,
    size: 'lg:col-span-6',
    tags: ['React Frontend Speed', 'Psychological UX', 'Responsive Intent'],
    darkIcon: false,
    Person: WavingPerson,
  },
  {
    title: 'SOFTWARE SOLUTIONS',
    subtitle: 'Custom Full-Stack Engineering',
    description:
      "Robust database orchestration and secure application infrastructure designed to solve real operational complexities. We engineer scalable MERN systems, dynamic dashboard metrics, and custom multi-tenant platforms built to handle intense business scaling.",
    icon: <Cpu className="w-4 h-4 text-[#ffd600]" />,
    size: 'lg:col-span-7',
    tags: ['MERN Architecture', 'Database Optimization', 'AWS Cloud Management'],
    darkIcon: true,
    Person: ThinkingPerson,
  },
  {
    title: 'AI AUTOMATIONS',
    subtitle: 'Intelligent Workflow Systems',
    description:
      "Eliminating human friction bottleneck constraints. We build and sync custom AI processing pipelines and instant automated WhatsApp communication workflows to capture, filter, and lock down incoming customer actions 24/7.",
    icon: <Bot className="w-4 h-4 text-[#000047]" />,
    size: 'lg:col-span-5',
    tags: ['WhatsApp Pipeline Sync', 'AI Response Parsing', 'Zero-Drop Automation'],
    darkIcon: false,
    Person: RunningPerson,
  },
];

/* ─── Page Component ─── */

const SolutionsHub = () => {
  return (
    <section className="bg-white py-20 lg:py-28 min-h-screen text-[#000047]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <span className="text-[#000047] font-bold text-xs uppercase tracking-widest bg-[#000047]/5 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <Layers className="w-3 h-3 text-[#ffd600]" />
            Integrated Systems Architecture
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight uppercase mt-4 leading-[1.05]"
            style={{ fontFamily: "'Sugo Display', sans-serif" }}
          >
            ENGINEERING VALUE <br />
            OVER COMMODITIES.
          </h1>
          <p className="text-[#000047]/70 text-base sm:text-lg font-medium mt-4 max-w-xl">
            We don't rent out commoditized service hours or pack designs into fixed boxes. We evaluate
            your baseline operational friction and deploy custom technology engines built to capture
            real market share.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {systems.map(({ title, subtitle, description, icon, size, tags, darkIcon, Person }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className={`border-2 border-[#000047]/10 bg-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:border-[#000047] hover:shadow-lg hover:shadow-[#000047]/5 ${size}`}
            >
              {/* Animated SVG person — decorative */}
              <Person />

              <div>
                {/* Top row */}
                <div className="flex items-center justify-between mb-6">
                  <div className="leading-none">
                    <span className="text-[10px] font-black tracking-widest text-[#000047]/40 uppercase block mb-1">
                      {subtitle}
                    </span>
                    <h2
                      className="text-xl sm:text-2xl text-[#000047] font-normal tracking-tight"
                      style={{ fontFamily: "'Sugo Display', sans-serif" }}
                    >
                      {title}
                    </h2>
                  </div>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border border-[#000047]/10 flex-shrink-0 ${
                      darkIcon ? 'bg-[#000047]' : 'bg-[#000047]/5'
                    }`}
                  >
                    {icon}
                  </div>
                </div>

                <p className="text-[#000047]/80 text-xs sm:text-sm font-medium leading-relaxed mb-8">
                  {description}
                </p>
              </div>

              {/* Bottom */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#000047]/5 rounded-md text-[#000047]/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-px bg-[#000047]/5" />

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#000047] group/link"
                >
                  <span>Diagnose System Friction</span>
                  <ArrowRight className="w-4 h-4 text-[#ffd600] group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <div className="mt-16 bg-[#000047] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-md">
          {/* Animated person in footer */}
          <FooterPerson />

          <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd600]/5 rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left z-10">
            <span className="text-[9px] font-bold tracking-widest uppercase bg-white/10 text-[#ffd600] px-3 py-1 rounded-full border border-white/5 inline-flex items-center gap-1.5">
              <Sparkles className="w-2.5 h-2.5 fill-[#ffd600]" />
              Adaptive Engineering
            </span>
            <h3
              className="text-xl font-normal tracking-wide uppercase"
              style={{ fontFamily: "'Sugo Display', sans-serif" }}
            >
              Seeking a Combined Custom Architecture?
            </h3>
            <p className="text-white/70 text-xs font-medium max-w-xl leading-relaxed">
              True conversion doesn't stay inside a single box. We compound marketing networks,
              frontend value placements, and cloud microservices into a unified growth engine for
              your brand.
            </p>
          </div>

          <Link to="/contact" className="shrink-0 z-10 w-full md:w-auto">
            <button className="w-full md:w-auto bg-[#ffd600] text-[#000047] hover:bg-white text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl transition-colors shadow-sm">
              Initialize Strategic Session
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SolutionsHub;