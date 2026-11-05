import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Eye, Layers, Cpu, Check } from 'lucide-react';

/* Brand tokens — unchanged: navy, yellow, white */
const NAVY = '#000047';
const YELLOW = '#ffd600';
const WHITE = '#ffffff';

const EASE = [0.16, 1, 0.3, 1];
const BODY = "'DM Sans', system-ui, sans-serif";
const DISPLAY = "'Sugo Display', sans-serif";

/* Helper: looping animation that switches off for reduced-motion users */
const useLoop = () => {
  const reduce = useReducedMotion();
  return (animate, transition) => (reduce ? {} : { animate, transition: { repeat: Infinity, ease: 'easeInOut', ...transition } });
};

/* ─────────────────────────────────────────────
   MOTION GRAPHIC 1 — Distribution
   Broadcast rings + bars rising + retention line drawing
───────────────────────────────────────────── */
const DistributionGraphic = () => {
  const loop = useLoop();
  const heights = [44, 66, 58, 96, 124, 150, 184];
  const bx = (i) => 62 + i * 44;

  const linePath = heights
    .map((h, i) => `${i === 0 ? 'M' : 'L'}${bx(i) + 11} ${244 - h}`)
    .join(' ');

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" role="img" aria-label="Animated chart of audience growth">
      {/* baseline */}
      <line x1="44" y1="244" x2="360" y2="244" stroke={WHITE} strokeOpacity="0.25" strokeWidth="1.5" />

      {/* broadcast rings */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={i}
          cx="74"
          cy="64"
          r="12"
          fill="none"
          stroke={YELLOW}
          strokeWidth="1.5"
          {...loop({ r: [12, 52], opacity: [0.7, 0] }, { duration: 3, delay: i * 1, ease: 'easeOut' })}
        />
      ))}
      <circle cx="74" cy="64" r="16" fill={YELLOW} />
      <path d="M69 57 L82 64 L69 71 Z" fill={NAVY} />

      {/* bars */}
      {heights.map((h, i) => (
        <motion.rect
          key={i}
          x={bx(i)}
          y={244 - h}
          width="22"
          height={h}
          rx="5"
          fill={i === heights.length - 1 ? YELLOW : WHITE}
          fillOpacity={i === heights.length - 1 ? 1 : 0.16}
          style={{ transformBox: 'fill-box', transformOrigin: '50% 100%' }}
          {...loop({ scaleY: [0, 1, 1, 0] }, { duration: 6, delay: i * 0.1, times: [0, 0.3, 0.85, 1] })}
        />
      ))}

      {/* trend line */}
      <motion.path
        d={linePath}
        fill="none"
        stroke={YELLOW}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...loop({ pathLength: [0, 1, 1, 0] }, { duration: 6, delay: 0.4, times: [0, 0.4, 0.85, 1] })}
      />

      {/* end-point pulse */}
      <motion.circle
        cx={bx(6) + 11}
        cy={244 - heights[6]}
        r="6"
        fill={WHITE}
        {...loop({ opacity: [0, 0, 1, 1, 0], scale: [0.4, 0.4, 1, 1, 0.4] }, { duration: 6, delay: 0.4, times: [0, 0.38, 0.45, 0.85, 1] })}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
      />
    </svg>
  );
};

/* ─────────────────────────────────────────────
   MOTION GRAPHIC 2 — Website
   Browser, cursor clicks CTA, new lead pops in
───────────────────────────────────────────── */
const WebsiteGraphic = () => {
  const loop = useLoop();
  const T = { duration: 5, times: [0, 0.2, 0.45, 0.52, 0.6, 0.9, 1] };

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" role="img" aria-label="Animated website converting a visitor into a lead">
      {/* window */}
      <rect x="44" y="40" width="312" height="220" rx="14" fill={WHITE} fillOpacity="0.07" stroke={WHITE} strokeOpacity="0.25" strokeWidth="1.5" />
      <line x1="44" y1="68" x2="356" y2="68" stroke={WHITE} strokeOpacity="0.2" />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={62 + i * 14} cy="54" r="3.5" fill={i === 2 ? YELLOW : WHITE} fillOpacity={i === 2 ? 1 : 0.35} />
      ))}

      {/* headline skeleton, shimmering */}
      {[
        { y: 92, w: 150 },
        { y: 108, w: 112 },
        { y: 130, w: 96 },
      ].map((l, i) => (
        <motion.rect
          key={i}
          x="68"
          y={l.y}
          width={l.w}
          height={i < 2 ? 9 : 6}
          rx="3"
          fill={WHITE}
          fillOpacity="0.4"
          {...loop({ fillOpacity: [0.2, 0.5, 0.2] }, { duration: 2.4, delay: i * 0.25 })}
        />
      ))}

      {/* CTA button + pulse */}
      <motion.rect
        x="68"
        y="156"
        width="104"
        height="34"
        rx="17"
        fill={YELLOW}
        opacity="0.5"
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        {...loop({ scale: [1, 1.25], opacity: [0.5, 0] }, { duration: 1.8, ease: 'easeOut' })}
      />
      <motion.rect
        x="68"
        y="156"
        width="104"
        height="34"
        rx="17"
        fill={YELLOW}
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        {...loop({ scale: [1, 1, 1, 0.94, 1, 1, 1] }, T)}
      />
      <rect x="86" y="170" width="52" height="6" rx="3" fill={NAVY} />
      <path d="M150 173 h10 m-4 -4 l4 4 l-4 4" stroke={NAVY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* side cards */}
      {[0, 1].map((i) => (
        <rect key={i} x="212" y={90 + i * 62} width="120" height="50" rx="10" fill={WHITE} fillOpacity="0.1" />
      ))}
      <rect x="224" y="104" width="44" height="6" rx="3" fill={WHITE} fillOpacity="0.45" />
      <rect x="224" y="118" width="70" height="6" rx="3" fill={WHITE} fillOpacity="0.25" />

      {/* lead chip */}
      <motion.g
        {...loop(
          { opacity: [0, 0, 0, 0, 1, 1, 0], y: [8, 8, 8, 8, 0, 0, 8] },
          T
        )}
      >
        <rect x="212" y="152" width="120" height="50" rx="10" fill={YELLOW} />
        <circle cx="234" cy="177" r="10" fill={NAVY} />
        <path d="M229.5 177.5 l3 3 l5.5 -6" stroke={YELLOW} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <rect x="252" y="170" width="64" height="6" rx="3" fill={NAVY} />
        <rect x="252" y="182" width="40" height="5" rx="2.5" fill={NAVY} fillOpacity="0.5" />
      </motion.g>

      {/* cursor */}
      <motion.g
        {...loop(
          { x: [300, 300, 118, 118, 118, 300, 300], y: [236, 236, 176, 176, 176, 236, 236] },
          { ...T, ease: 'easeInOut' }
        )}
      >
        <path d="M0 0 L0 20 L5.5 15 L9 23 L12.5 21.5 L9 14 L16 14 Z" fill={WHITE} stroke={NAVY} strokeWidth="1.5" strokeLinejoin="round" />
      </motion.g>
    </svg>
  );
};

/* ─────────────────────────────────────────────
   MOTION GRAPHIC 3 — IT infrastructure
   Nodes linked by lines with data packets flowing
───────────────────────────────────────────── */
const InfraGraphic = () => {
  const loop = useLoop();

  const links = [
    { x1: 78, y1: 150, x2: 150, y2: 150, d: 0 },
    { x1: 190, y1: 150, x2: 250, y2: 92, d: 0.5 },
    { x1: 190, y1: 150, x2: 250, y2: 208, d: 0.8 },
    { x1: 290, y1: 92, x2: 336, y2: 142, d: 1.3 },
    { x1: 290, y1: 208, x2: 336, y2: 158, d: 1.6 },
  ];

  const Node = ({ x, y, label, active }) => (
    <g>
      <rect
        x={x - 40}
        y={y - 22}
        width="80"
        height="44"
        rx="12"
        fill={active ? YELLOW : WHITE}
        fillOpacity={active ? 1 : 0.1}
        stroke={active ? 'none' : WHITE}
        strokeOpacity="0.3"
        strokeWidth="1.5"
      />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="1.2"
        fill={active ? NAVY : WHITE}
      >
        {label}
      </text>
    </g>
  );

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" role="img" aria-label="Animated data flowing between backend services">
      {/* links */}
      {links.map((l, i) => (
        <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke={WHITE} strokeOpacity="0.25" strokeWidth="1.5" strokeDasharray="4 5" />
      ))}

      {/* packets */}
      {links.map((l, i) => (
        <motion.circle
          key={i}
          r="4.5"
          fill={YELLOW}
          initial={{ cx: l.x1, cy: l.y1, opacity: 0 }}
          {...loop(
            { cx: [l.x1, l.x2], cy: [l.y1, l.y2], opacity: [0, 1, 1, 0] },
            { duration: 1.6, delay: l.d, repeatDelay: 1.2, ease: 'linear', times: [0, 0.1, 0.9, 1] }
          )}
        />
      ))}

      {/* nodes */}
      <Node x={46} y={150} label="APP" />
      <Node x={170} y={150} label="API" active />
      <Node x={270} y={92} label="DATA" />
      <Node x={270} y={208} label="CLOUD" />
      <Node x={356} y={150} label="SYNC" />

      {/* heartbeat on the API node */}
      <motion.rect
        x="130"
        y="128"
        width="80"
        height="44"
        rx="12"
        fill="none"
        stroke={YELLOW}
        strokeWidth="1.5"
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        {...loop({ scale: [1, 1.35], opacity: [0.8, 0] }, { duration: 2.4, ease: 'easeOut' })}
      />
    </svg>
  );
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
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
    Graphic: DistributionGraphic,
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
    Graphic: WebsiteGraphic,
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
    Graphic: InfraGraphic,
  },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
const Solutions = () => {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-32"
      style={{ background: WHITE, fontFamily: DISPLAY }}
    >
      {/* thin brand rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] pointer-events-none"
        style={{ background: `linear-gradient(90deg, transparent, ${YELLOW} 40%, rgba(0,0,71,0.4) 70%, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative">
        {/* ── Header ── */}
        <div className="max-w-3xl mb-16 lg:mb-28">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE }}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: YELLOW, color: NAVY, fontFamily: BODY }}
          >
            Our Fixes
          </motion.span>

          <h2
            style={{
              color: NAVY,
              fontSize: 'clamp(2.2rem, 5vw, 4rem)',
              fontWeight: 700,
              lineHeight: 1.07,
              letterSpacing: '-0.01em',
              textTransform: 'uppercase',
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ display: 'block' }}
            >
              We build integrated
            </motion.span>
            <span style={{ display: 'inline-block', position: 'relative', marginTop: 6 }}>
              {/* yellow highlight wipes in left → right */}
              <motion.span
                aria-hidden
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: EASE }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: YELLOW,
                  borderRadius: 4,
                  transformOrigin: 'left center',
                }}
              />
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{ position: 'relative', display: 'inline-block', padding: '2px 14px 4px' }}
              >
                Growth machines
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.65 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              color: NAVY,
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginTop: 20,
              maxWidth: 520,
              fontFamily: BODY,
              fontWeight: 500,
            }}
          >
            A weak identity or a broken application slows expansion. We run{' '}
            <strong style={{ fontWeight: 700 }}>three technological pillars</strong> to maximise
            your company&apos;s potential.
          </motion.p>
        </div>

        {/* ── Pillars ── */}
        <div className="space-y-20 lg:space-y-32">
          {frameworks.map((pillar, index) => {
            const Icon = pillar.icon;
            const Graphic = pillar.Graphic;
            const flipped = index % 2 === 1;

            return (
              <div
                key={pillar.title}
                className={`grid gap-8 lg:gap-16 items-center lg:grid-cols-2`}
              >
                {/* Text */}
                <motion.div
                  initial={{ opacity: 0, x: flipped ? 32 : -32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: EASE }}
                  className={flipped ? 'lg:order-2' : ''}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: NAVY }}
                    >
                      <Icon className="w-5 h-5" style={{ color: YELLOW }} />
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: NAVY,
                        opacity: 0.55,
                        textTransform: 'uppercase',
                        fontFamily: BODY,
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>

                  <h3
                    style={{
                      color: NAVY,
                      fontSize: 'clamp(1.5rem, 2.8vw, 2.1rem)',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      lineHeight: 1.12,
                      marginBottom: 16,
                      letterSpacing: '0.005em',
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      color: NAVY,
                      opacity: 0.68,
                      fontSize: '1rem',
                      lineHeight: 1.75,
                      fontFamily: BODY,
                      maxWidth: 480,
                    }}
                  >
                    {pillar.description}
                  </p>

                  <ul className="mt-8 space-y-3">
                    {pillar.bullets.map((bullet, idx) => (
                      <motion.li
                        key={bullet}
                        initial={{ opacity: 0, x: -14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.25 + idx * 0.1, duration: 0.5, ease: EASE }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ background: YELLOW }}
                        >
                          <Check className="w-3.5 h-3.5" strokeWidth={3} style={{ color: NAVY }} />
                        </span>
                        <span style={{ color: NAVY, fontWeight: 600, fontSize: '0.95rem', fontFamily: BODY }}>
                          {bullet}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Motion graphic panel */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.9, ease: EASE }}
                  className={`relative rounded-3xl overflow-hidden ${flipped ? 'lg:order-1' : ''}`}
                  style={{
                    background: NAVY,
                    aspectRatio: '4 / 3',
                    boxShadow: '0 20px 50px rgba(0,0,71,0.18)',
                  }}
                >
                  {/* quiet dot grid inside the panel */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: 'radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)',
                      backgroundSize: '24px 24px',
                    }}
                  />
                  <div className="absolute inset-0 p-4 sm:p-6">
                    <Graphic />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;