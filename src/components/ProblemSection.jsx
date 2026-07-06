import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, AlertCircle, EyeOff, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const painPoints = [
  {
    icon: EyeOff,
    number: '01',
    tag: 'Visibility Architecture',
    title: 'The Invisible Presence',
    description:
      'Small businesses frequently struggle with highly inconsistent or completely non-existent digital visibility. We eliminate this with tailored platform architectures and high-impact organic content execution pipelines like TikTok to build standalone market identity.',
    stat: '74',
    statLabel: 'of growing brands struggle with organic distribution bottlenecks',
  },
  {
    icon: Layers,
    number: '02',
    tag: 'Value Engineering',
    title: 'The Flatline Storefront',
    description:
      'Most corporate websites sit completely dead online because they lack distinctive core brand value statements and clear structural calls to action. We engineer high-performance platforms designed to communicate real authority and drive user intent.',
    stat: '92',
    statLabel: 'of incoming traffic bounces due to weak conversion signals',
  },
  {
    icon: Cpu,
    number: '03',
    tag: 'Core IT Infrastructure',
    title: 'The Backend Bottleneck',
    description:
      'As business scales, managing multi-tenant database logic, cloud pipelines, or complex API connections becomes highly chaotic. We handle the heavy lifting entirely by stepping in as your dedicated external IT development partner.',
    stat: '85',
    statLabel: 'of scaling startups face structural engineering fragmentation',
  },
];

const useCounter = (target, inView, duration = 1600) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    window.规律 = requestAnimationFrame(step);
  }, [inView, target, duration]);
  return val;
};

const StatCounter = ({ stat, label, inView }) => {
  const count = useCounter(parseInt(stat), inView);
  return (
    <div className="mt-6 pt-5" style={{ borderTop: '1px solid rgba(0,0,71,0.08)' }}>
      <div className="flex items-end gap-1">
        <span style={{
          fontSize: '2.4rem',
          fontWeight: 700,
          color: '#000047',
          lineHeight: 1,
          fontFamily: "'Sugo Display', sans-serif",
        }}>
          {count}
          <span style={{ color: '#ffd600' }}>%</span>
        </span>
      </div>
      <p style={{ color: '#000047', opacity: 0.5, fontSize: '0.78rem', marginTop: '5px', lineHeight: 1.5 }}>
        {label}
      </p>
    </div>
  );
};

const ProblemSection = () => {
  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const statsInView = useInView(sectionRef, { once: true, margin: '-60px' });

  // Subtle motion background engine
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);

    const orbs = [
      { x: 0.08, y: 0.15, r: 220, hue: 51,  sat: 100, light: 50, alpha: 0.07, dx:  0.13, dy:  0.09 },
      { x: 0.90, y: 0.80, r: 200, hue: 240, sat: 100, light: 14, alpha: 0.05, dx: -0.11, dy: -0.10 },
      { x: 0.60, y: 0.10, r: 160, hue: 240, sat: 100, light: 14, alpha: 0.04, dx:  0.09, dy:  0.13 },
      { x: 0.20, y: 0.85, r: 140, hue: 51,  sat: 100, light: 50, alpha: 0.05, dx:  0.12, dy: -0.08 },
    ].map(o => ({ ...o, x: o.x * (canvas.width || 1200), y: o.y * (canvas.height || 600) }));

    const dots = Array.from({ length: 48 }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  0.8 + Math.random() * 1.1,
      dx: (Math.random() - 0.5) * 0.22,
      dy: (Math.random() - 0.5) * 0.22,
      alpha: 0.07 + Math.random() * 0.12,
      gold: Math.random() > 0.55,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach(o => {
        o.x += o.dx; o.y += o.dy;
        if (o.x < -o.r) o.x = canvas.width + o.r;
        if (o.x > canvas.width + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = canvas.height + o.r;
        if (o.y > canvas.height + o.r) o.y = -o.r;
        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, `hsla(${o.hue},${o.sat}%,${o.light}%,${o.alpha})`);
        g.addColorStop(1, `hsla(${o.hue},${o.sat}%,${o.light}%,0)`);
        ctx.beginPath(); ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g; ctx.fill();
      });

      dots.forEach(p => {
        p.x += p.dx; p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width)  p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(255,214,0,${p.alpha})`
          : `rgba(0,0,71,${p.alpha})`;
        ctx.fill();
      });

      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 105) {
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y);
            const isGold = a.gold || b.gold;
            ctx.strokeStyle = isGold
              ? `rgba(255,214,0,${0.07 * (1 - dist / 105)})`
              : `rgba(0,0,71,${0.06 * (1 - dist / 105)})`;
            ctx.lineWidth = 0.65; ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.13 } },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-20 lg:py-32"
      style={{ background: '#ffffff', fontFamily: "'Sugo Display', sans-serif", borderTop: '1px solid rgba(0,0,71,0.06)' }}
    >
      {/* Canvas motion bg */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -52deg,
            transparent,
            transparent 38px,
            rgba(0,0,71,0.016) 38px,
            rgba(0,0,71,0.016) 39px
          )`,
        }}
      />

      {/* Radial color washes */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 50% 55% at 0% 5%, rgba(255,214,0,0.08) 0%, transparent 100%)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 45% 50% at 100% 95%, rgba(0,0,71,0.06) 0%, transparent 100%)' }} />

      {/* Top accent rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(255,214,0,0.6) 40%, rgba(0,0,71,0.3) 70%, transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-60px' }}
          className="max-w-3xl mb-16 lg:mb-20"
        >
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{ background: 'rgba(0,0,71,0.06)', border: '1px solid rgba(0,0,71,0.14)', color: '#000047' }}
            >
              <AlertCircle className="w-3 h-3" />
              The Infrastructure Matrix
            </span>
            <div style={{ height: '2px', width: '40px', background: '#ffd600', borderRadius: '2px' }} />
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
            REMAKING DIGITAL VISION
            <br />
            <span style={{ position: 'relative', display: 'inline-block' }}>
              <span
                style={{
                  background: '#000047',
                  color: '#ffd600',
                  padding: '0 12px 2px',
                  display: 'inline-block',
                  transform: 'skewX(-2deg)',
                  borderRadius: '4px',
                }}
              >
                WITH TECHNOLOGY.
              </span>
            </span>
          </h2>

          <p
            style={{
              color: '#000047',
              opacity: 0.6,
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginTop: '18px',
              maxWidth: '520px',
              fontFamily: "'DM Sans', system-ui, sans-serif",
              fontWeight: 500,
            }}
          >
            We don't just patch software defects. We restructure your visibility, frontend value layer, and core architecture to dominate modern digital landscapes.
          </p>
        </motion.div>

        {/* ── Cards Grid ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
        >
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -7, transition: { duration: 0.22 } }}
                className="group relative rounded-3xl p-7 flex flex-col overflow-hidden cursor-default"
                style={{
                  background: '#fff',
                  border: '1.5px solid rgba(0,0,71,0.1)',
                  boxShadow: '0 2px 4px rgba(0,0,71,0.03), 0 12px 36px rgba(0,0,71,0.05)',
                  transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#ffd600';
                  e.currentTarget.style.boxShadow = '0 12px 48px rgba(0,0,71,0.1), 0 0 0 1px rgba(255,214,0,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,0,71,0.1)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,71,0.03), 0 12px 36px rgba(0,0,71,0.05)';
                }}
              >
                {/* Hover bg gradient flash */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                  style={{ background: 'linear-gradient(135deg, rgba(255,214,0,0.05) 0%, transparent 55%)' }}
                />

                {/* Top tracking line */}
                <div className="flex items-start justify-between mb-5 relative z-10">
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      letterSpacing: '0.14em',
                      color: '#000047',
                      opacity: 0.3,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {point.number}
                  </span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                    style={{
                      background: 'rgba(255,214,0,0.15)',
                      color: '#000047',
                      border: '1px solid rgba(255,214,0,0.4)',
                      fontSize: '0.64rem',
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {point.tag}
                  </span>
                </div>

                {/* Modern Icon Frame */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 relative z-10"
                  style={{ background: 'rgba(0,0,71,0.05)', border: '1px solid rgba(0,0,71,0.1)' }}
                >
                  <Icon className="w-5 h-5" style={{ color: '#000047' }} />
                </div>

                {/* Content Area */}
                <div className="flex-1 relative z-10">
                  <h3
                    style={{
                      fontFamily: "'Sugo Display', sans-serif",
                      color: '#000047',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      marginBottom: '10px',
                      lineHeight: 1.2,
                      textTransform: 'uppercase',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {point.title}
                  </h3>
                  <p style={{ color: '#000047', opacity: 0.6, fontSize: '0.9rem', lineHeight: 1.75, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                    {point.description}
                  </p>
                </div>

                {/* Live Stat Counter Frame */}
                <div className="relative z-10">
                  <StatCounter stat={point.stat} label={point.statLabel} inView={statsInView} />
                </div>

                {/* Bottom design track accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-3xl"
                  style={{ background: 'linear-gradient(90deg, #ffd600, rgba(255,214,0,0.2))' }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* ── Action Trigger Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.65 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl px-8 py-6"
          style={{
            background: 'rgba(0,0,71,0.03)',
            border: '1.5px solid rgba(0,0,71,0.08)',
          }}
        >
          <div>
            <p style={{ color: '#000047', fontWeight: 700, fontSize: '1rem', marginBottom: '3px', fontFamily: "'Sugo Display', sans-serif", textTransform: 'uppercase', letterSpacing: '0.02em' }}>
              Ready to claim your unique market space?
            </p>
            <p style={{ color: '#000047', opacity: 0.55, fontSize: '0.88rem', fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              We transform weak positioning into robust, high-converting technology pipelines from day one.
            </p>
          </div>

          <Link to="/solution" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(255,214,0,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold"
              style={{
                background: '#ffd600',
                color: '#000047',
                fontSize: '0.9rem',
                border: '2px solid #ffd600',
                cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(255,214,0,0.3)',
                fontFamily: "'Sugo Display', sans-serif",
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                transition: 'background 0.25s ease, color 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#000047';
                e.currentTarget.style.color = '#ffd600';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#ffd600';
                e.currentTarget.style.color = '#000047';
              }}
            >
              See our frameworks
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.button>
          </Link>
        </motion.div>

      </div>

      {/* Decorative clean viewport exit vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(248,250,252,0.4), transparent)' }} />
    </section>
  );
};

export default ProblemSection;