import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Cpu, CheckCircle2 } from 'lucide-react';

/* ─────────────────────────────────────────────
   CARTOON SVG CHARACTERS  (all brand-colored)
───────────────────────────────────────────── */

const BrainCharacter = () => (
  <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" width="120" height="130">
    {/* Body */}
    <ellipse cx="60" cy="72" rx="28" ry="32" fill="#000047" />
    {/* Arms */}
    <path d="M32 68 Q18 60 14 48" stroke="#000047" strokeWidth="7" strokeLinecap="round"/>
    <path d="M88 68 Q102 60 106 48" stroke="#000047" strokeWidth="7" strokeLinecap="round"/>
    {/* Hands */}
    <circle cx="13" cy="45" r="7" fill="#ffd600"/>
    <circle cx="107" cy="45" r="7" fill="#ffd600"/>
    {/* Legs */}
    <path d="M48 100 Q45 115 42 124" stroke="#000047" strokeWidth="7" strokeLinecap="round"/>
    <path d="M72 100 Q75 115 78 124" stroke="#000047" strokeWidth="7" strokeLinecap="round"/>
    {/* Feet */}
    <ellipse cx="40" cy="126" rx="10" ry="5" fill="#ffd600"/>
    <ellipse cx="80" cy="126" rx="10" ry="5" fill="#ffd600"/>
    {/* Brain head */}
    <ellipse cx="60" cy="38" rx="30" ry="26" fill="#ffd600"/>
    {/* Brain folds */}
    <path d="M38 32 Q44 24 52 30 Q58 20 66 28 Q74 18 80 28 Q86 22 88 32" stroke="#000047" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    <path d="M36 40 Q42 48 52 42 Q58 50 66 42 Q72 50 82 42 Q86 36 90 40" stroke="#000047" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Eyes */}
    <circle cx="50" cy="35" r="5" fill="#000047"/>
    <circle cx="70" cy="35" r="5" fill="#000047"/>
    <circle cx="52" cy="33" r="2" fill="white"/>
    <circle cx="72" cy="33" r="2" fill="white"/>
    {/* Smile */}
    <path d="M50 46 Q60 54 70 46" stroke="#000047" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Blush */}
    <ellipse cx="43" cy="42" rx="5" ry="3" fill="rgba(255,100,100,0.35)"/>
    <ellipse cx="77" cy="42" rx="5" ry="3" fill="rgba(255,100,100,0.35)"/>
    {/* Tie */}
    <polygon points="60,56 55,68 60,72 65,68" fill="#ffd600"/>
    <polygon points="57,56 63,56 61,62 59,62" fill="#ffd600"/>
    <rect x="58" y="54" width="4" height="4" rx="1" fill="#ffd600"/>
  </svg>
);

const RocketCharacter = () => (
  <svg viewBox="0 0 90 150" fill="none" xmlns="http://www.w3.org/2000/svg" width="90" height="150">
    {/* Flame */}
    <ellipse cx="45" cy="138" rx="14" ry="10" fill="#ffd600" opacity="0.6"/>
    <ellipse cx="45" cy="132" rx="10" ry="8" fill="#ffd600"/>
    {/* Rocket body */}
    <rect x="30" y="58" width="30" height="65" rx="6" fill="#000047"/>
    {/* Nose cone */}
    <path d="M30 58 Q45 10 60 58Z" fill="#000047"/>
    {/* Yellow stripe */}
    <rect x="30" y="80" width="30" height="8" fill="#ffd600"/>
    {/* Window */}
    <circle cx="45" cy="68" r="10" fill="white"/>
    <circle cx="45" cy="68" r="7" fill="#ffd600"/>
    {/* Face in window */}
    <circle cx="43" cy="66" r="2" fill="#000047"/>
    <circle cx="49" cy="66" r="2" fill="#000047"/>
    <path d="M42 71 Q46 74 50 71" stroke="#000047" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    {/* Fins */}
    <path d="M30 105 L16 128 L30 120Z" fill="#ffd600"/>
    <path d="M60 105 L74 128 L60 120Z" fill="#ffd600"/>
    {/* Stars around rocket */}
    <polygon points="10,40 11.8,45.5 17.6,45.5 12.9,48.9 14.7,54.4 10,51 5.3,54.4 7.1,48.9 2.4,45.5 8.2,45.5" fill="#ffd600" opacity="0.7" transform="scale(0.6) translate(5,5)"/>
    <polygon points="78,20 79.2,23.6 83,23.6 80,25.8 81.2,29.4 78,27.2 74.8,29.4 76,25.8 73,23.6 76.8,23.6" fill="#ffd600" opacity="0.5"/>
  </svg>
);

const GearCharacter = () => (
  <svg viewBox="0 0 130 140" fill="none" xmlns="http://www.w3.org/2000/svg" width="130" height="140">
    {/* Big gear body */}
    <g transform="translate(65,55)">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
        <rect key={i} x="-6" y="-44" width="12" height="14" rx="3" fill="#000047"
          transform={`rotate(${deg})`}/>
      ))}
      <circle r="38" fill="#000047"/>
      <circle r="24" fill="#ffd600"/>
      <circle r="10" fill="#000047"/>
    </g>
    {/* Face */}
    <circle cx="58" cy="50" r="5" fill="white"/>
    <circle cx="72" cy="50" r="5" fill="white"/>
    <circle cx="60" cy="48" r="2" fill="#000047"/>
    <circle cx="74" cy="48" r="2" fill="#000047"/>
    <path d="M57 60 Q65 67 73 60" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
    {/* Legs */}
    <rect x="52" y="90" width="10" height="30" rx="5" fill="#000047"/>
    <rect x="68" y="90" width="10" height="30" rx="5" fill="#000047"/>
    {/* Feet */}
    <ellipse cx="57" cy="122" rx="11" ry="6" fill="#ffd600"/>
    <ellipse cx="73" cy="122" rx="11" ry="6" fill="#ffd600"/>
    {/* Arms */}
    <rect x="22" y="62" width="28" height="10" rx="5" fill="#000047"/>
    <rect x="80" y="62" width="28" height="10" rx="5" fill="#000047"/>
    {/* Small gear hands */}
    <circle cx="18" cy="67" r="10" fill="#ffd600"/>
    <circle cx="18" cy="67" r="5" fill="#000047"/>
    <circle cx="112" cy="67" r="10" fill="#ffd600"/>
    <circle cx="112" cy="67" r="5" fill="#000047"/>
  </svg>
);

const LightbulbCharacter = () => (
  <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg" width="100" height="140">
    {/* Glow rings */}
    <circle cx="50" cy="45" r="38" fill="rgba(255,214,0,0.12)"/>
    <circle cx="50" cy="45" r="28" fill="rgba(255,214,0,0.18)"/>
    {/* Bulb glass */}
    <path d="M25 42 Q25 18 50 12 Q75 18 75 42 Q75 60 62 68 L62 78 L38 78 L38 68 Q25 60 25 42Z" fill="#ffd600"/>
    {/* Filament inside */}
    <path d="M40 50 Q45 42 50 50 Q55 42 60 50" stroke="#000047" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <line x1="50" y1="50" x2="50" y2="62" stroke="#000047" strokeWidth="2" strokeLinecap="round"/>
    {/* Base rings */}
    <rect x="36" y="78" width="28" height="7" rx="3" fill="#000047"/>
    <rect x="38" y="85" width="24" height="7" rx="3" fill="#000047"/>
    {/* Base cap */}
    <rect x="38" y="92" width="24" height="5" rx="2.5" fill="#ffd600"/>
    {/* Eyes */}
    <circle cx="43" cy="40" r="5" fill="#000047"/>
    <circle cx="57" cy="40" r="5" fill="#000047"/>
    <circle cx="45" cy="38" r="2" fill="white"/>
    <circle cx="59" cy="38" r="2" fill="white"/>
    {/* Smile */}
    <path d="M43 52 Q50 58 57 52" stroke="#000047" strokeWidth="2" strokeLinecap="round" fill="none"/>
    {/* Legs */}
    <path d="M44 97 Q41 114 38 124" stroke="#000047" strokeWidth="7" strokeLinecap="round"/>
    <path d="M56 97 Q59 114 62 124" stroke="#000047" strokeWidth="7" strokeLinecap="round"/>
    {/* Feet */}
    <ellipse cx="36" cy="126" rx="10" ry="5" fill="#ffd600"/>
    <ellipse cx="64" cy="126" rx="10" ry="5" fill="#ffd600"/>
    {/* Shine lines */}
    <line x1="78" y1="18" x2="86" y2="12" stroke="#ffd600" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
    <line x1="82" y1="28" x2="92" y2="26" stroke="#ffd600" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="22" y1="18" x2="14" y2="12" stroke="#ffd600" strokeWidth="2.5" strokeLinecap="round" opacity="0.8"/>
    <line x1="18" y1="28" x2="8" y2="26" stroke="#ffd600" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const StarBurst = ({ size = 40 }) => (
  <svg viewBox="0 0 60 60" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="30,4 34.7,22.3 53,22.3 38.6,33.7 43.4,52 30,40.6 16.6,52 21.4,33.7 7,22.3 25.3,22.3" fill="#ffd600"/>
  </svg>
);

const FloatingDot = ({ size = 12, color = '#ffd600' }) => (
  <svg viewBox="0 0 20 20" width={size} height={size} fill="none">
    <circle cx="10" cy="10" r="8" fill={color} />
  </svg>
);

/* ─────────────────────────────────────────────
   BACKGROUND LAYER
───────────────────────────────────────────── */
const BackgroundCharacters = () => {
  const items = [
    { component: <BrainCharacter />,    top: '4%',  left: '2%',   rotate: '-8deg',  duration: 6,   delay: 0,   scale: 0.85, opacity: 0.13 },
    { component: <RocketCharacter />,   top: '10%', right: '3%',  rotate: '10deg',  duration: 7,   delay: 1,   scale: 0.8,  opacity: 0.12 },
    { component: <GearCharacter />,     top: '42%', left: '1%',   rotate: '-5deg',  duration: 8,   delay: 0.5, scale: 0.75, opacity: 0.11 },
    { component: <LightbulbCharacter />,top: '55%', right: '2%',  rotate: '7deg',   duration: 6.5, delay: 1.5, scale: 0.8,  opacity: 0.12 },
    { component: <BrainCharacter />,    top: '80%', left: '3%',   rotate: '12deg',  duration: 7.5, delay: 2,   scale: 0.7,  opacity: 0.09 },
    { component: <RocketCharacter />,   top: '75%', right: '4%',  rotate: '-12deg', duration: 6,   delay: 0.8, scale: 0.7,  opacity: 0.10 },
    { component: <StarBurst size={50} />, top: '20%', left: '14%', rotate: '20deg', duration: 5,   delay: 0,   scale: 1,    opacity: 0.18 },
    { component: <StarBurst size={32} />, top: '65%', right: '12%',rotate: '-15deg',duration: 4.5, delay: 1.2, scale: 1,    opacity: 0.15 },
    { component: <StarBurst size={24} />, top: '38%', right: '16%',rotate: '30deg', duration: 5.5, delay: 0.4, scale: 1,    opacity: 0.12 },
    { component: <FloatingDot size={18} color="#ffd600" />, top: '30%', left: '10%', rotate: '0deg', duration: 4, delay: 0.3, scale: 1, opacity: 0.4 },
    { component: <FloatingDot size={12} color="#000047" />, top: '50%', left: '18%', rotate: '0deg', duration: 5, delay: 1,   scale: 1, opacity: 0.2 },
    { component: <FloatingDot size={14} color="#ffd600" />, top: '70%', right: '18%',rotate: '0deg', duration: 6, delay: 0.6, scale: 1, opacity: 0.35 },
    { component: <FloatingDot size={10} color="#000047" />, top: '15%', right: '22%',rotate: '0deg', duration: 4.5,delay: 1.8,scale: 1, opacity: 0.2 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            opacity: item.opacity,
            transform: `rotate(${item.rotate}) scale(${item.scale})`,
          }}
          animate={{ y: [0, -16, 0], rotate: [item.rotate, `calc(${item.rotate} + 6deg)`, item.rotate] }}
          transition={{ duration: item.duration, delay: item.delay, repeat: Infinity, ease: 'easeInOut' }}
        >
          {item.component}
        </motion.div>
      ))}
    </div>
  );
};

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Solutions = () => {
  const frameworks = [
    {
      icon: Eye,
      tag: 'Visibility Architecture',
      title: 'ORGANIC BRAND DISTRIBUTION SYSTEMS',
      description:
        "We don't just post content; we engineer algorithmic distribution. We design precise platform setups and focused organic content engines (including high-retention TikTok pipelines) to secure your unique brand identity.",
      bullets: [
        'High-retention video structures',
        'TikTok & social growth frameworks',
        'Algorithmic trend matching analytics',
      ],
    },
    {
      icon: Layers,
      tag: 'Value Engineering',
      title: 'CUSTOMER-CONVERTING WEBSITES',
      description:
        "We eliminate flat digital business cards. Our team builds high-speed frontend architectures structured explicitly around your brand's unique value statement, turning passive scrollers into high-intent active leads.",
      bullets: [
        'Distinct brand value positioning',
        'High-conversion CTA engineering',
        'Sub-second UX responsiveness',
      ],
    },
    {
      icon: Cpu,
      tag: 'Core IT Infrastructure',
      title: 'EXTERNAL IT DEVELOPMENT PARTNERSHIP',
      description:
        'Hand over the heavy lifting of backend infrastructure. We step in as your primary software engineering team, structuring scalable databases, clean API management integrations, and zero-downtime cloud pipelines.',
      bullets: [
        'Robust backend system deployment',
        'Multi-tenant database scaling architectures',
        'Seamless cross-platform API sync',
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 42 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      className="relative overflow-hidden py-20 lg:py-32"
      style={{ background: '#ffffff', fontFamily: "'Sugo Display', sans-serif", borderTop: '1px solid rgba(0,0,71,0.06)' }}
    >
      {/* Cartoon background */}
      <BackgroundCharacters />

      {/* Subtle dot grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(0,0,71,0.07) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.6,
        }}
      />

      {/* Top rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, #ffd600 40%, rgba(0,0,71,0.4) 70%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <div className="flex items-center gap-3 mb-5">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: '#ffd600', color: '#000047', fontFamily: "'DM Sans', sans-serif" }}
            >
              Our Fixes
            </span>
            <div style={{ height: '2px', width: '36px', background: '#000047', borderRadius: '2px', opacity: 0.2 }} />
          </div>

          <h2
            style={{
              fontFamily: "'Sugo Display', sans-serif",
              color: '#000047',
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.07,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            WE BUILD INTEGRATED
            <br />
            <span
              style={{
                background: '#ffd600',
                color: '#000047',
                padding: '2px 14px 4px',
                display: 'inline-block',
                transform: 'skewX(-2deg)',
                borderRadius: '4px',
              }}
            >
              GROWTH MACHINES
            </span>
          </h2>

          <p
            style={{
              color: '#000047',
              opacity: 0.6,
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginTop: '18px',
              maxWidth: '500px',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            A weak identity or a broken application slows expansion. We run{' '}
            <span style={{ color: '#000047', opacity: 1, fontWeight: 700 }}>three technological pillars</span>{' '}
            to maximise your company&apos;s potential.
          </p>
        </motion.div>

        {/* ── Framework Pillars ── */}
        <div className="space-y-10 lg:space-y-14">
          {frameworks.map((pillar, index) => {
            const Icon = pillar.icon;
            const flipped = index % 2 === 1;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className={`flex flex-col lg:flex-row gap-6 lg:gap-10 items-stretch ${flipped ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* ── Text side ── */}
                <div
                  className="flex-1 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
                  style={{
                    background: '#000047',
                    boxShadow: '0 8px 40px rgba(0,0,71,0.15)',
                  }}
                >
                  {/* Cartoon character watermark inside card */}
                  <div className="absolute bottom-0 right-4 opacity-[0.07] pointer-events-none select-none" style={{ transform: 'scale(1.1)', transformOrigin: 'bottom right' }}>
                    {index === 0 ? <BrainCharacter /> : index === 1 ? <LightbulbCharacter /> : <GearCharacter />}
                  </div>

                  {/* Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: '#ffd600' }}
                    >
                      <Icon className="w-5 h-5" style={{ color: '#000047' }} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: '#ffd600',
                        opacity: 0.75,
                        textTransform: 'uppercase',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: "'Sugo Display', sans-serif",
                      color: 'white',
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      lineHeight: 1.15,
                      marginBottom: '14px',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: '0.93rem',
                      lineHeight: 1.78,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                      maxWidth: '420px',
                    }}
                  >
                    {pillar.description}
                  </p>

                  {/* Yellow accent bar */}
                  <div
                    style={{ height: '3px', width: '48px', background: '#ffd600', borderRadius: '2px', marginTop: '24px', opacity: 0.7 }}
                  />
                </div>

                {/* ── Bullets side ── */}
                <div
                  className="flex-1 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden"
                  style={{
                    background: '#fff',
                    border: '2px solid rgba(0,0,71,0.1)',
                    boxShadow: '0 4px 24px rgba(0,0,71,0.05)',
                  }}
                >
                  {/* Top yellow strip */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: '32px',
                      right: '32px',
                      height: '4px',
                      background: '#ffd600',
                      borderRadius: '0 0 4px 4px',
                    }}
                  />

                  {/* Index number watermark */}
                  <div
                    className="absolute bottom-4 right-6 select-none pointer-events-none"
                    style={{
                      fontFamily: "'Sugo Display', sans-serif",
                      fontSize: '7rem',
                      fontWeight: 900,
                      color: 'rgba(0,0,71,0.04)',
                      lineHeight: 1,
                    }}
                  >
                    0{index + 1}
                  </div>

                  <p
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      letterSpacing: '0.14em',
                      color: '#000047',
                      opacity: 0.4,
                      textTransform: 'uppercase',
                      fontFamily: "'DM Sans', sans-serif",
                      marginBottom: '20px',
                    }}
                  >
                    Key Deliverable Targets
                  </p>

                  <ul className="space-y-5 relative z-10">
                    {pillar.bullets.map((bullet, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: flipped ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.15 + idx * 0.1, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="flex items-start gap-4"
                      >
                        <span
                          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5"
                          style={{ background: '#ffd600' }}
                        >
                          <CheckCircle2 className="w-4 h-4" style={{ color: '#000047' }} />
                        </span>
                        <span
                          style={{
                            color: '#000047',
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            lineHeight: 1.5,
                            fontFamily: "'DM Sans', system-ui, sans-serif",
                          }}
                        >
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.6), transparent)' }}
      />
    </section>
  );
};

export default Solutions;