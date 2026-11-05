import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion';

/* Brand tokens */
const NAVY = '#000047';
const YELLOW = '#ffd600';
const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/* One config per mood */
const MOODS = {
  happy: {
    eyes: [{ h: 54, rx: 20 }, { h: 54, rx: 20 }],
    brows: { l: { outer: 148, inner: 143 }, r: { outer: 148, inner: 143 } },
    mouth: 'M166 240 Q200 262 234 240',
    offset: { x: 0, y: 0 },
    reticle: false,
    dots: false,
  },
  thinking: {
    eyes: [{ h: 56, rx: 18 }, { h: 34, rx: 14 }],
    brows: { l: { outer: 138, inner: 130 }, r: { outer: 150, inner: 152 } },
    mouth: 'M172 246 Q204 238 230 244',
    offset: { x: -9, y: -10 },
    reticle: false,
    dots: true,
  },
  alert: {
    eyes: [{ h: 62, rx: 9 }, { h: 62, rx: 9 }],
    brows: { l: { outer: 138, inner: 152 }, r: { outer: 138, inner: 152 } },
    mouth: 'M168 244 Q200 244 232 244',
    offset: { x: 0, y: 0 },
    reticle: true,
    dots: false,
  },
  angry: {
    eyes: [{ h: 38, rx: 8 }, { h: 38, rx: 8 }],
    brows: { l: { outer: 132, inner: 158 }, r: { outer: 132, inner: 158 } },
    mouth: 'M170 252 Q200 232 230 252',
    offset: { x: 0, y: 4 },
    reticle: false,
    dots: false,
  },
};

const SPRING = { type: 'spring', stiffness: 220, damping: 22 };

/* A single glowing eye */
const Eye = ({ cx, cfg, blink, reticle, lookX, lookY, hiX, hiY, reduce }) => (
  <motion.g style={{ x: lookX, y: lookY }}>
    <motion.g
      animate={{ scaleY: blink ? 0.08 : 1 }}
      transition={{ duration: 0.09 }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    >
      <motion.rect
        x={cx - 26}
        width={52}
        initial={false}
        animate={{ height: cfg.h, y: 185 - cfg.h / 2, rx: cfg.rx }}
        transition={SPRING}
        fill="url(#rb-eye)"
        filter="url(#rb-glow)"
      />
      <motion.circle cx={cx + 9} cy={170} r={5.5} fill="#fff" opacity={0.85} style={{ x: hiX, y: hiY }} />
      <circle cx={cx - 10} cy={198} r={2.5} fill="#fff" opacity={0.45} />
    </motion.g>
    <motion.circle
      cx={cx}
      cy={185}
      r={40}
      fill="none"
      stroke={YELLOW}
      strokeWidth={1.5}
      strokeDasharray="6 9"
      initial={false}
      animate={{ opacity: reticle ? 0.9 : 0, rotate: reticle && !reduce ? 360 : 0 }}
      transition={{ opacity: { duration: 0.3 }, rotate: { repeat: Infinity, duration: 7, ease: 'linear' } }}
      style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
    />
  </motion.g>
);

export default function RobotHeroFace() {
  const reduce = useReducedMotion();
  const [mood, setMood] = useState('happy');
  const [blink, setBlink] = useState(false);
  const svgRef = useRef(null);
  const norm = useRef({ x: 0, y: 0 });
  const lastMove = useRef(Date.now());
  const lastTouch = useRef(0);          // when the robot was last touched
  const moodRef = useRef(mood);
  const cfg = MOODS[mood];

  const lookX = useSpring(0, { stiffness: 160, damping: 18, mass: 0.6 });
  const lookY = useSpring(0, { stiffness: 160, damping: 18, mass: 0.6 });
  const hiX = useTransform(lookX, (v) => v * 0.3);
  const hiY = useTransform(lookY, (v) => v * 0.3);
  const faceX = useTransform(lookX, (v) => v * 0.35);
  const faceY = useTransform(lookY, (v) => v * 0.35);
  const rotX = useSpring(0, { stiffness: 90, damping: 16 });
  const rotY = useSpring(0, { stiffness: 90, damping: 16 });

  const aim = useCallback(
    (nx, ny) => {
      norm.current = { x: nx, y: ny };
      const off = MOODS[moodRef.current].offset;
      lookX.set(nx * 11 + off.x);
      lookY.set(ny * 8 + off.y);
      rotY.set(nx * 10);
      rotX.set(-ny * 8);
    },
    [lookX, lookY, rotX, rotY]
  );

  /* Normal mood based on pointer position (only used when not angry) */
  const updateMoodFromPointer = useCallback((nx, ny) => {
    // Stay angry for a while after being touched
    if (Date.now() - lastTouch.current < 2800) {
      if (moodRef.current !== 'angry') {
        moodRef.current = 'angry';
        setMood('angry');
      }
      return;
    }

    const dist = Math.sqrt(nx * nx + ny * ny);
    let next = 'happy';

    if (ny < -0.35) {
      next = 'thinking';
    } else if (dist > 0.65 || Math.abs(nx) > 0.7) {
      next = 'alert';
    }

    if (next !== moodRef.current) {
      moodRef.current = next;
      setMood(next);
    }
  }, []);

  useEffect(() => {
    moodRef.current = mood;
    aim(norm.current.x, norm.current.y);
  }, [mood, aim]);

  /* Pointer move – follow + update mood */
  useEffect(() => {
    if (reduce) return undefined;

    const onMove = (e) => {
      lastMove.current = Date.now();
      const r = svgRef.current?.getBoundingClientRect();
      if (!r) return;

      const cx = r.left + r.width / 2;
      const cy = r.top + r.height * 0.42;

      const nx = clamp((e.clientX - cx) / (window.innerWidth * 0.5), -1, 1);
      const ny = clamp((e.clientY - cy) / (window.innerHeight * 0.5), -1, 1);

      aim(nx, ny);
      updateMoodFromPointer(nx, ny);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [aim, reduce, updateMoodFromPointer]);

  /* Touch / click the robot → make him angry */
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onPointerDown = (e) => {
      e.stopPropagation();
      lastTouch.current = Date.now();
      lastMove.current = Date.now();
      moodRef.current = 'angry';
      setMood('angry');
    };

    svg.addEventListener('pointerdown', onPointerDown);
    return () => svg.removeEventListener('pointerdown', onPointerDown);
  }, []);

  /* Idle glancing */
  useEffect(() => {
    if (reduce) return undefined;
    const id = setInterval(() => {
      if (Date.now() - lastMove.current > 3000) {
        const nx = (Math.random() - 0.5) * 1.6;
        const ny = (Math.random() - 0.5) * 1.2;
        aim(nx, ny);
        updateMoodFromPointer(nx, ny);
      }
    }, 2200);
    return () => clearInterval(id);
  }, [aim, reduce, updateMoodFromPointer]);

  /* Natural blinking */
  useEffect(() => {
    if (reduce) return undefined;
    let t1, t2, t3;

    const schedule = () => {
      t1 = setTimeout(() => {
        setBlink(true);
        t2 = setTimeout(() => {
          setBlink(false);
          if (Math.random() < 0.25) {
            t3 = setTimeout(() => {
              setBlink(true);
              setTimeout(() => setBlink(false), 120);
            }, 160);
          }
          schedule();
        }, 130);
      }, 2400 + Math.random() * 3200);
    };
    schedule();
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [reduce]);

  const float = reduce
    ? {}
    : { animate: { y: [0, -6, 0] }, transition: { repeat: Infinity, duration: 5, ease: 'easeInOut' } };

  const pulse = (extra = {}) =>
    reduce ? {} : { transition: { repeat: Infinity, ease: 'easeInOut', ...extra } };

  return (
    <div className="relative w-full max-w-[220px] sm:max-w-[260px] mx-auto flex flex-col items-center p-0 m-0">
      {/* Soft glow */}
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${YELLOW}30 0%, transparent 70%)`, filter: 'blur(16px)' }}
        aria-hidden
      />

      <div className="relative w-full" style={{ perspective: 900 }}>
        <motion.div {...float}>
          <motion.div style={{ rotateX: rotX, rotateY: rotY, transformStyle: 'preserve-3d' }}>
            <svg
              ref={svgRef}
              viewBox="30 30 340 380"
              className="w-full h-auto block overflow-visible cursor-pointer"
              role="img"
              aria-label="Friendly robot assistant"
              style={{ touchAction: 'none' }}
            >
              <defs>
                <linearGradient id="rb-head" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#23239a" />
                  <stop offset="0.45" stopColor={NAVY} />
                  <stop offset="1" stopColor="#00002b" />
                </linearGradient>
                <linearGradient id="rb-screen" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#00001a" />
                  <stop offset="1" stopColor="#000033" />
                </linearGradient>
                <linearGradient id="rb-shine" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity="0.35" />
                  <stop offset="0.6" stopColor="#fff" stopOpacity="0" />
                </linearGradient>
                <radialGradient id="rb-eye" cx="0.5" cy="0.4" r="0.7">
                  <stop offset="0" stopColor="#fff6b8" />
                  <stop offset="0.55" stopColor={YELLOW} />
                  <stop offset="1" stopColor="#e6bc00" />
                </radialGradient>
                <filter id="rb-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="5" result="b" />
                  <feMerge>
                    <feMergeNode in="b" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="rb-soft" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2.5" />
                </filter>
              </defs>

              {/* ground shadow */}
              <motion.ellipse
                cx="200"
                cy="428"
                rx="92"
                ry="9"
                fill={NAVY}
                opacity="0.14"
                filter="url(#rb-soft)"
                {...(reduce ? {} : { animate: { rx: [92, 78, 92], opacity: [0.14, 0.08, 0.14] } })}
                {...pulse({ duration: 5 })}
              />

              {/* shoulders + neck */}
              <rect x="170" y="318" width="60" height="34" rx="10" fill="#00002b" />
              <rect x="170" y="330" width="60" height="5" fill="#000047" opacity="0.8" />
              <path d="M92 428 V392 Q92 350 140 350 H260 Q308 350 308 392 V428 Z" fill="url(#rb-head)" />
              <path
                d="M92 392 Q92 350 140 350 H260 Q308 350 308 392"
                fill="none"
                stroke="#fff"
                strokeOpacity="0.12"
                strokeWidth="2"
              />

              {/* chest light */}
              <circle cx="200" cy="388" r="20" fill="#00001f" />
              <motion.circle
                cx="200"
                cy="388"
                r="9"
                fill={YELLOW}
                filter="url(#rb-glow)"
                {...(reduce ? {} : { animate: { scale: [1, 1.25, 1], opacity: [1, 0.7, 1] } })}
                {...pulse({ duration: 2.4 })}
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              />

              {/* antenna */}
              <rect x="196" y="48" width="8" height="34" rx="4" fill="#00002b" />
              <motion.circle
                cx="200"
                cy="38"
                r="11"
                fill={YELLOW}
                filter="url(#rb-glow)"
                {...(reduce ? {} : { animate: { scale: [1, 1.2, 1] } })}
                {...pulse({ duration: 2 })}
                style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
              />
              <circle cx="196" cy="34" r="3" fill="#fff" opacity="0.8" />

              {/* ears */}
              <rect x="38" y="158" width="30" height="88" rx="14" fill="#00002b" />
              <rect x="332" y="158" width="30" height="88" rx="14" fill="#00002b" />
              <rect x="46" y="180" width="8" height="44" rx="4" fill={YELLOW} opacity="0.9" />
              <rect x="346" y="180" width="8" height="44" rx="4" fill={YELLOW} opacity="0.9" />

              {/* head shell */}
              <rect x="58" y="76" width="284" height="252" rx="74" fill="url(#rb-head)" />
              <rect
                x="59.5"
                y="77.5"
                width="281"
                height="249"
                rx="72.5"
                fill="none"
                stroke="#fff"
                strokeOpacity="0.14"
                strokeWidth="2"
              />

              {/* glossy highlight */}
              <path d="M96 128 Q96 92 138 92 H214 Q140 104 120 150 Q104 176 96 128 Z" fill="url(#rb-shine)" />

              {/* yellow trim light */}
              <rect x="160" y="84" width="80" height="4" rx="2" fill={YELLOW} filter="url(#rb-glow)" />

              {/* face plate */}
              <rect x="88" y="108" width="224" height="170" rx="46" fill="url(#rb-screen)" />
              <rect
                x="88"
                y="108"
                width="224"
                height="170"
                rx="46"
                fill="none"
                stroke="#fff"
                strokeOpacity="0.1"
                strokeWidth="2"
              />

              {/* scanlines */}
              <g opacity="0.18" clipPath="inset(0)">
                {Array.from({ length: 21 }).map((_, i) => (
                  <rect key={i} x="100" y={118 + i * 7.5} width="200" height="1.5" fill="#fff" opacity="0.4" />
                ))}
              </g>

              {/* face contents */}
              <motion.g style={{ x: faceX, y: faceY }}>
                <motion.line
                  strokeWidth="7"
                  strokeLinecap="round"
                  stroke={YELLOW}
                  initial={false}
                  animate={{ x1: 124, x2: 176, y1: cfg.brows.l.outer, y2: cfg.brows.l.inner }}
                  transition={SPRING}
                  opacity="0.95"
                />
                <motion.line
                  strokeWidth="7"
                  strokeLinecap="round"
                  stroke={YELLOW}
                  initial={false}
                  animate={{ x1: 224, x2: 276, y1: cfg.brows.r.inner, y2: cfg.brows.r.outer }}
                  transition={SPRING}
                  opacity="0.95"
                />

                <Eye
                  cx={150}
                  cfg={cfg.eyes[0]}
                  blink={blink}
                  reticle={cfg.reticle}
                  lookX={lookX}
                  lookY={lookY}
                  hiX={hiX}
                  hiY={hiY}
                  reduce={reduce}
                />
                <Eye
                  cx={250}
                  cfg={cfg.eyes[1]}
                  blink={blink}
                  reticle={cfg.reticle}
                  lookX={lookX}
                  lookY={lookY}
                  hiX={hiX}
                  hiY={hiY}
                  reduce={reduce}
                />

                <motion.path
                  fill="none"
                  stroke={YELLOW}
                  strokeWidth="7"
                  strokeLinecap="round"
                  filter="url(#rb-glow)"
                  initial={false}
                  animate={{ d: cfg.mouth }}
                  transition={SPRING}
                />

                {/* thinking dots */}
                <g opacity={cfg.dots ? 1 : 0} style={{ transition: 'opacity 0.3s' }}>
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      cx={262 + i * 14}
                      cy={128}
                      r={3.5}
                      fill={YELLOW}
                      {...(reduce ? {} : { animate: { opacity: [0.2, 1, 0.2], y: [0, -3, 0] } })}
                      {...pulse({ duration: 1.2, delay: i * 0.2 })}
                    />
                  ))}
                </g>
              </motion.g>

              {/* chin LEDs */}
              {[0, 1, 2].map((i) => (
                <motion.circle
                  key={i}
                  cx={178 + i * 22}
                  cy={304}
                  r={4}
                  fill={YELLOW}
                  {...(reduce ? { opacity: 0.8 } : { animate: { opacity: [0.25, 1, 0.25] } })}
                  {...pulse({ duration: 1.6, delay: i * 0.25 })}
                />
              ))}
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}