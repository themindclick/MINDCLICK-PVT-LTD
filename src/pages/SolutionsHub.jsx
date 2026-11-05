import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Eye, Globe, Cpu, Bot, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const NAVY = '#000047';
const YELLOW = '#ffd600';
const EASE = [0.16, 1, 0.3, 1];

/* ─────────────────────────────────────────────
   MOTION GRAPHICS  (viewBox 400 x 200, drawn on navy)
───────────────────────────────────────────── */

/* 1. Digital marketing: reach rings, growth bars, trend line */
const MarketingGraphic = () => {
  const bars = [28, 46, 38, 62, 54, 82];
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="110"
          cy="100"
          r="26"
          stroke={YELLOW}
          strokeWidth="2"
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          animate={{ scale: [1, 3.1], opacity: [0.7, 0] }}
          transition={{ duration: 3.2, delay: i * 1.05, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}
      <circle cx="110" cy="100" r="28" fill={YELLOW} />
      <motion.path
        d="M101 87 L101 113 L124 100 Z"
        fill={NAVY}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.g
        style={{ transformOrigin: '110px 100px' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      >
        <circle cx="110" cy="58" r="4" fill="#fff" />
      </motion.g>

      <g transform="translate(236 168)">
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={i * 24}
            y={-h}
            width="12"
            height={h}
            rx="6"
            fill={i === bars.length - 1 ? YELLOW : 'rgba(255,255,255,0.85)'}
            style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}
            animate={{ scaleY: [0.25, 1, 0.25] }}
            transition={{ duration: 3.6, delay: i * 0.18, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </g>
      <motion.path
        d="M236 100 C 266 92, 282 76, 308 70 S 350 44, 372 26"
        stroke={YELLOW}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.5, 0.85, 1], ease: 'easeInOut' }}
      />
    </svg>
  );
};

/* 2. Business websites: wireframe, cursor click on CTA */
const WebsiteGraphic = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="22" width="220" height="158" rx="14" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
    <line x1="50" y1="48" x2="270" y2="48" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
    <circle cx="68" cy="35" r="3.5" fill={YELLOW} />
    <circle cx="80" cy="35" r="3.5" fill="rgba(255,255,255,0.5)" />
    <circle cx="92" cy="35" r="3.5" fill="rgba(255,255,255,0.5)" />

    {[
      { y: 66, w: 140 },
      { y: 82, w: 104 },
      { y: 98, w: 122 },
    ].map((l, i) => (
      <motion.rect
        key={i}
        x="70"
        y={l.y}
        width={l.w}
        height="7"
        rx="3.5"
        fill="rgba(255,255,255,0.55)"
        animate={{ opacity: [0.25, 0.8, 0.25] }}
        transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
      />
    ))}

    <motion.rect
      x="70"
      y="128"
      width="88"
      height="30"
      rx="15"
      fill={YELLOW}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      animate={{ scale: [1, 1, 0.94, 1, 1] }}
      transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.45, 0.55, 0.65, 1] }}
    />
    <rect x="90" y="140" width="48" height="6" rx="3" fill={NAVY} />

    <motion.circle
      cx="114"
      cy="143"
      r="12"
      stroke="#fff"
      strokeWidth="2"
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      animate={{ scale: [0.4, 0.4, 2.2], opacity: [0, 0.9, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.5, 0.8], ease: 'easeOut' }}
    />
    <motion.g
      animate={{ x: [200, 200, 110, 110, 200], y: [165, 165, 140, 140, 165] }}
      transition={{ duration: 4.5, repeat: Infinity, times: [0, 0.1, 0.45, 0.8, 1], ease: 'easeInOut' }}
    >
      <path d="M0 0 L0 20 L5.5 15.5 L9 24 L13 22 L9.5 14 L17 14 Z" fill="#fff" stroke={NAVY} strokeWidth="1.2" strokeLinejoin="round" />
    </motion.g>

    <g transform="translate(300 40)">
      {[
        { w: 70, c: 'rgba(255,255,255,0.85)' },
        { w: 52, c: 'rgba(255,255,255,0.6)' },
        { w: 34, c: 'rgba(255,255,255,0.4)' },
        { w: 20, c: YELLOW },
      ].map((b, i) => (
        <motion.rect
          key={i}
          x={(70 - b.w) / 2}
          y={i * 34}
          width={b.w}
          height="24"
          rx="8"
          fill={b.c}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          animate={{ scaleX: [0.6, 1, 0.6] }}
          transition={{ duration: 3.2, delay: i * 0.25, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </g>
  </svg>
);

/* 3. Software solutions: hub and nodes with data packets */
const SoftwareGraphic = () => {
  const hub = { x: 200, y: 100 };
  const nodes = [
    { x: 70, y: 44 },
    { x: 330, y: 44 },
    { x: 56, y: 156 },
    { x: 344, y: 156 },
    { x: 200, y: 22 },
  ];
  return (
    <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {nodes.map((n, i) => (
        <motion.line
          key={`l${i}`}
          x1={hub.x}
          y1={hub.y}
          x2={n.x}
          y2={n.y}
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          animate={{ strokeDashoffset: [0, -22] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={`p${i}`}
          r="4"
          fill={YELLOW}
          animate={{ cx: [hub.x, n.x], cy: [hub.y, n.y], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 2.6, delay: i * 0.5, repeat: Infinity, ease: 'easeInOut', times: [0, 0.15, 0.85, 1] }}
        />
      ))}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r="16"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1.5"
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
            animate={{ scale: [1, 1.4], opacity: [0.6, 0] }}
            transition={{ duration: 2.4, delay: i * 0.4, repeat: Infinity, ease: 'easeOut' }}
          />
          <circle cx={n.x} cy={n.y} r="13" fill={NAVY} stroke="#fff" strokeWidth="2" />
          <circle cx={n.x} cy={n.y} r="4" fill={i % 2 === 0 ? YELLOW : '#fff'} />
        </g>
      ))}
      <motion.g
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      >
        <rect x="170" y="70" width="60" height="60" rx="17" fill={YELLOW} />
        <ellipse cx="200" cy="88" rx="16" ry="6" fill={NAVY} />
        <path d="M184 88 V101 C184 104 191 106 200 106 C209 106 216 104 216 101 V88" stroke={NAVY} strokeWidth="2.6" fill="none" />
        <path d="M184 101 V113 C184 116 191 118 200 118 C209 118 216 116 216 113 V101" stroke={NAVY} strokeWidth="2.6" fill="none" />
      </motion.g>
    </svg>
  );
};

/* 4. AI automations: messages flow into AI core, resolved outputs pop out */
const AutomationGraphic = () => (
  <svg viewBox="0 0 400 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* incoming messages */}
    {[0, 1, 2].map((i) => (
      <motion.g
        key={`m${i}`}
        animate={{ x: [-16, 0, 0, 40], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.6, delay: i * 1.2, repeat: Infinity, times: [0, 0.2, 0.7, 1], ease: 'easeInOut' }}
      >
        <rect x="26" y={36 + i * 46} width="86" height="30" rx="15" fill="rgba(255,255,255,0.9)" />
        <rect x="42" y={47 + i * 46} width="40" height="5" rx="2.5" fill={NAVY} opacity="0.7" />
        <rect x="42" y={55 + i * 46} width="26" height="4" rx="2" fill={NAVY} opacity="0.35" />
      </motion.g>
    ))}

    {/* flow lines */}
    {[48, 100, 152].map((y, i) => (
      <motion.path
        key={`a${i}`}
        d={`M118 ${y} C 150 ${y}, 150 100, 168 100`}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        animate={{ strokeDashoffset: [0, -22] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
      />
    ))}
    {[48, 100, 152].map((y, i) => (
      <motion.path
        key={`b${i}`}
        d={`M232 100 C 250 100, 250 ${y}, 282 ${y}`}
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="1.5"
        strokeDasharray="5 6"
        animate={{ strokeDashoffset: [0, -22] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
      />
    ))}

    {/* AI core */}
    <motion.circle
      cx="200"
      cy="100"
      r="34"
      stroke={YELLOW}
      strokeWidth="2"
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      animate={{ scale: [1, 1.5], opacity: [0.7, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
    />
    <motion.rect
      x="170"
      y="70"
      width="60"
      height="60"
      rx="18"
      fill={YELLOW}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      animate={{ rotate: [0, 0, 90, 90, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.path
      d="M200 84 L204 96 L216 100 L204 104 L200 116 L196 104 L184 100 L196 96 Z"
      fill={NAVY}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      animate={{ scale: [1, 1.18, 1], rotate: [0, 20, 0] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    />

    {/* resolved outputs */}
    {[48, 100, 152].map((y, i) => (
      <motion.g
        key={`o${i}`}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 3.6, delay: 0.9 + i * 1.2, repeat: Infinity, times: [0, 0.2, 0.75, 1], ease: 'easeOut' }}
      >
        <circle cx="304" cy={y} r="16" fill={YELLOW} />
        <path d={`M296 ${y} L302 ${y + 6} L313 ${y - 6}`} stroke={NAVY} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    ))}
    <text x="344" y="104" fill="#fff" opacity="0.75" fontSize="12" fontWeight="700" letterSpacing="2" fontFamily="'DM Sans', sans-serif">
      24/7
    </text>
  </svg>
);

/* Footer: orbiting rings and a pulsing core */
const FooterOrbit = () => (
  <div className="absolute right-6 md:right-56 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block" style={{ opacity: 0.9 }}>
    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" aria-hidden="true">
      <circle cx="75" cy="75" r="62" stroke="rgba(255,255,255,0.14)" strokeWidth="1.5" strokeDasharray="3 7" />
      <circle cx="75" cy="75" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
      <motion.g style={{ transformOrigin: '75px 75px' }} animate={{ rotate: 360 }} transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}>
        <circle cx="75" cy="13" r="5" fill={YELLOW} />
      </motion.g>
      <motion.g style={{ transformOrigin: '75px 75px' }} animate={{ rotate: -360 }} transition={{ duration: 9, repeat: Infinity, ease: 'linear' }}>
        <circle cx="75" cy="35" r="4" fill="#fff" />
      </motion.g>
      <motion.circle
        cx="75"
        cy="75"
        r="12"
        fill={YELLOW}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        animate={{ scale: [1, 1.25, 1] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  </div>
);

/* ─────────────────────────────────────────────
   BACKGROUND
───────────────────────────────────────────── */
const AmbientBackground = ({ progress }) => {
  const yA = useTransform(progress, [0, 1], [0, -140]);
  const yB = useTransform(progress, [0, 1], [0, 110]);
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,71,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,71,0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse at center, #000 28%, transparent 76%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, #000 28%, transparent 76%)',
        }}
      />
      <motion.div
        style={{
          y: yA,
          position: 'absolute',
          top: '4%',
          right: '-8%',
          width: 440,
          height: 440,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,214,0,0.2), transparent 68%)',
        }}
      />
      <motion.div
        style={{
          y: yB,
          position: 'absolute',
          bottom: '6%',
          left: '-10%',
          width: 480,
          height: 480,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,214,0,0.14), transparent 68%)',
        }}
      />
      {[
        { top: '12%', left: '6%', size: 90, d: 14 },
        { top: '60%', right: '5%', size: 130, d: 18 },
      ].map((r, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{ top: r.top, left: r.left, right: r.right, width: r.size, height: r.size, border: '1.5px solid rgba(0,0,71,0.1)' }}
          animate={{ y: [0, -22, 0], scale: [1, 1.06, 1] }}
          transition={{ duration: r.d, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────
   CARD DATA
───────────────────────────────────────────── */

const systems = [
  {
    title: 'DIGITAL MARKETING',
    subtitle: 'Visibility Architecture',
    description:
      "We don't buy empty metrics. We deploy behavioral customer acquisition funnels that track organic trends, structure audience retention, and build distribution layers that attract buyers with real intent across TikTok, Meta, and Search channels.",
    icon: <Eye className="w-4 h-4 text-[#000047]" />,
    size: 'lg:col-span-6',
    tags: ['Algorithmic Distribution', 'Retention Engineering', 'ROAS Scaling'],
    darkIcon: false,
    Graphic: MarketingGraphic,
  },
  {
    title: 'BUSINESS WEBSITES',
    subtitle: 'Frontend Value Layers',
    description:
      "Engineering blazing fast digital frontpages built explicitly around your brand's unique marketplace definition. Designed to eliminate bounce rates and smoothly guide cold traffic directly into solid conversion loops.",
    icon: <Globe className="w-4 h-4 text-[#000047]" />,
    size: 'lg:col-span-6',
    tags: ['React Frontend Speed', 'Psychological UX', 'Responsive Intent'],
    darkIcon: false,
    Graphic: WebsiteGraphic,
  },
  {
    title: 'SOFTWARE SOLUTIONS',
    subtitle: 'Custom Full Stack Engineering',
    description:
      'Robust database orchestration and secure application infrastructure designed to solve real operational complexities. We engineer scalable MERN systems, dynamic dashboard metrics, and custom platforms for many tenants, built to handle intense business scaling.',
    icon: <Cpu className="w-4 h-4 text-[#ffd600]" />,
    size: 'lg:col-span-7',
    tags: ['MERN Architecture', 'Database Optimization', 'AWS Cloud Management'],
    darkIcon: true,
    Graphic: SoftwareGraphic,
  },
  {
    title: 'AI AUTOMATIONS',
    subtitle: 'Intelligent Workflow Systems',
    description:
      'Eliminating human friction bottleneck constraints. We build and sync custom AI processing pipelines and instant automated WhatsApp communication workflows to capture, filter, and lock down incoming customer actions 24/7.',
    icon: <Bot className="w-4 h-4 text-[#000047]" />,
    size: 'lg:col-span-5',
    tags: ['WhatsApp Pipeline Sync', 'AI Response Parsing', 'No Drop Automation'],
    darkIcon: false,
    Graphic: AutomationGraphic,
  },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */

const SolutionsHub = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white py-20 lg:py-28 min-h-screen text-[#000047]">
      <AmbientBackground progress={scrollYProgress} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <span className="text-[#000047] font-bold text-xs uppercase tracking-widest bg-[#000047]/5 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <motion.span
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="inline-flex"
            >
              <Layers className="w-3 h-3 text-[#ffd600]" />
            </motion.span>
            Integrated Systems Architecture
          </span>

          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight uppercase mt-4 leading-[1.05]"
            style={{ fontFamily: "'Sugo Display', sans-serif" }}
          >
            ENGINEERING{' '}
            <span className="relative inline-block px-2">
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
                className="absolute inset-0 bg-[#ffd600] rounded-md origin-left"
              />
              <span className="relative">VALUE</span>
            </span>
            <br />
            OVER COMMODITIES.
          </h1>

          <p className="text-[#000047]/70 text-base sm:text-lg font-medium mt-5 max-w-xl">
            We don't rent out commoditized service hours or pack designs into fixed boxes. We evaluate
            your baseline operational friction and deploy custom technology engines built to capture
            real market share.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {systems.map(({ title, subtitle, description, icon, size, tags, darkIcon, Graphic }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, delay: (index % 2) * 0.08, ease: EASE }}
              whileHover={{ y: -6 }}
              className={`group border-2 border-[#000047]/10 bg-white rounded-3xl p-4 sm:p-5 flex flex-col relative overflow-hidden transition-colors duration-300 hover:border-[#000047] hover:shadow-xl hover:shadow-[#000047]/10 ${size}`}
            >
              {/* Animated yellow top strip */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
                className="absolute top-0 left-8 right-8 h-1 bg-[#ffd600] rounded-b origin-left z-20"
              />

              {/* Motion graphic panel */}
              <div className="relative rounded-2xl overflow-hidden bg-[#000047] h-44 sm:h-52">
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <motion.div
                  className="absolute top-0 bottom-0 pointer-events-none"
                  style={{ width: '35%', background: 'linear-gradient(90deg, transparent, rgba(255,214,0,0.1), transparent)' }}
                  animate={{ left: ['-40%', '120%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
                />
                <span
                  className="absolute top-3 left-4 z-10 text-[10px] font-black tracking-widest text-[#ffd600]"
                >
                  0{index + 1}
                </span>
                <div className="relative w-full h-full flex items-center justify-center px-3 py-2">
                  <Graphic />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1 px-2 sm:px-3 pt-6 pb-3">
                <div>
                  <div className="flex items-center justify-between mb-5">
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
                    <motion.div
                      whileHover={{ rotate: 8, scale: 1.08 }}
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border border-[#000047]/10 flex-shrink-0 ${
                        darkIcon ? 'bg-[#000047]' : 'bg-[#ffd600]'
                      }`}
                    >
                      {icon}
                    </motion.div>
                  </div>

                  <p className="text-[#000047]/80 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                    {description}
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, tIdx) => (
                      <motion.span
                        key={tIdx}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + tIdx * 0.08, duration: 0.4, ease: EASE }}
                        className="text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#000047]/5 rounded-md text-[#000047]/70"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="h-px bg-[#000047]/10" />

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#000047] group/link"
                  >
                    <span>Diagnose System Friction</span>
                    <ArrowRight className="w-4 h-4 text-[#ffd600] group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer strip */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-16 bg-[#000047] text-white rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden shadow-xl shadow-[#000047]/20"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
            }}
          />
          <motion.div
            className="absolute top-0 right-0 w-40 h-40 bg-[#ffd600]/10 rounded-full blur-2xl pointer-events-none"
            animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <FooterOrbit />

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
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full md:w-auto bg-[#ffd600] text-[#000047] hover:bg-white text-xs font-black uppercase tracking-widest px-6 py-4 rounded-xl transition-colors shadow-sm"
            >
              Initialize Strategic Session
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsHub;