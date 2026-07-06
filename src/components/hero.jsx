import React, { useEffect, useRef } from 'react';
import { Brain, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/assets/logo.png";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Floating soft orbs
    const orbs = [
      { x: 0.15, y: 0.2,  r: 180, hue: 210, alpha: 0.07, dx: 0.18, dy: 0.12 },
      { x: 0.75, y: 0.15, r: 220, hue: 220, alpha: 0.06, dx: -0.14, dy: 0.18 },
      { x: 0.85, y: 0.7,  r: 160, hue: 45,  alpha: 0.08, dx: -0.20, dy: -0.10 },
      { x: 0.35, y: 0.8,  r: 140, hue: 205, alpha: 0.05, dx: 0.16, dy: -0.14 },
      { x: 0.55, y: 0.45, r: 120, hue: 50,  alpha: 0.06, dx: -0.10, dy: 0.22 },
    ].map(o => ({
      ...o,
      x: o.x * (canvas.width || 1200),
      y: o.y * (canvas.height || 800),
    }));

    // Fine network dots
    const dots = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: 0.9 + Math.random() * 1.1,
      dx: (Math.random() - 0.5) * 0.28,
      dy: (Math.random() - 0.5) * 0.28,
      alpha: 0.1 + Math.random() * 0.16,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Orbs
      orbs.forEach(o => {
        o.x += o.dx;
        o.y += o.dy;
        if (o.x < -o.r) o.x = canvas.width + o.r;
        if (o.x > canvas.width + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = canvas.height + o.r;
        if (o.y > canvas.height + o.r) o.y = -o.r;

        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, `hsla(${o.hue}, 75%, 60%, ${o.alpha})`);
        g.addColorStop(1, `hsla(${o.hue}, 75%, 60%, 0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      // Dots
      dots.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(30, 64, 175, ${p.alpha})`;
        ctx.fill();
      });

      // Lines between close dots
      dots.forEach((a, i) => {
        dots.slice(i + 1).forEach(b => {
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 115) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(30, 64, 175, ${0.065 * (1 - dist / 115)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.11 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <div
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: '#ffffff', fontFamily: "'DM Sans', system-ui, sans-serif" }}
    >
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Subtle grain overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          opacity: 0.02,
        }}
      />

      {/* Top accent rule */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(30,64,175,0.3) 35%, rgba(234,179,8,0.5) 65%, transparent 100%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-20 lg:py-28">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* LEFT */}
          <div className="flex-1 space-y-7 text-center lg:text-left z-10">

            {/* Badge */}
            <motion.div variants={fadeUp} className="inline-flex justify-center lg:justify-start">
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
                style={{
                  background: 'rgba(30,64,175,0.06)',
                  border: '1px solid rgba(30,64,175,0.15)',
                  color: '#1e40af',
                  letterSpacing: '0.09em',
                }}
              >
                <Brain className="w-3.5 h-3.5" />
                Behavioral Psychology × Growth Technology
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: '#0f172a',
                lineHeight: 1.07,
                fontSize: 'clamp(2.7rem, 6vw, 5.2rem)',
                fontWeight: 400,
                letterSpacing: '-0.025em',
              }}
            >
              We engineer
              <br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                <span style={{ color: '#1d4ed8' }}>the next level</span>
                <motion.svg
                  viewBox="0 0 320 10"
                  preserveAspectRatio="none"
                  style={{ position: 'absolute', bottom: '-5px', left: 0, width: '100%', height: '8px' }}
                >
                  <motion.path
                    d="M0 6 Q80 1 160 6 Q240 11 320 5"
                    stroke="#eab308"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.85, duration: 1, ease: 'easeOut' }}
                  />
                </motion.svg>
              </span>
              <br />for your business.
            </motion.h1>

            {/* Body */}
            <motion.p
              variants={fadeUp}
              style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.78, maxWidth: '460px', margin: '0 auto' }}
              className="lg:mx-0"
            >
              Stop burning budget on ads that guess. We fuse consumer psychology with
              smart automation to turn cold clicks into predictable, compounding revenue.
            </motion.p>

            {/* Stats */}
            <motion.div variants={fadeUp} className="flex gap-8 justify-center lg:justify-start pt-1">
              {[
                { icon: TrendingUp, value: '3.8×', label: 'Avg. ROAS lift' },
                { icon: Zap, value: '< 30d', label: 'Time to results' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-xl"
                    style={{ background: 'rgba(30,64,175,0.07)', border: '1px solid rgba(30,64,175,0.13)' }}
                  >
                    <Icon className="w-4 h-4" style={{ color: '#1d4ed8' }} />
                  </div>
                  <div>
                    <div style={{ color: '#0f172a', fontWeight: 700, fontSize: '1.15rem', lineHeight: 1 }}>{value}</div>
                    <div style={{ color: '#94a3b8', fontSize: '0.72rem', marginTop: '3px' }}>{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center lg:justify-start pt-2"
            >
              <Link to="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 32px rgba(234,179,8,0.38)' }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full group flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #eab308, #ca8a04)',
                    color: '#0f172a',
                    fontSize: '0.95rem',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(234,179,8,0.28)',
                  }}
                >
                  Scale Your System
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>
              </Link>

              <Link to="/shop1" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ background: 'rgba(30,64,175,0.05)', scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold"
                  style={{
                    background: 'transparent',
                    border: '1.5px solid rgba(30,64,175,0.22)',
                    color: '#1d4ed8',
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                  }}
                >
                  View Case Studies
                </motion.button>
              </Link>

              <Link to="/education" className="w-full sm:w-auto flex items-center justify-center">
                <motion.span
                  whileHover={{ color: '#0f172a' }}
                  className="flex items-center gap-1 font-medium transition-colors duration-200"
                  style={{ color: '#94a3b8', fontSize: '0.88rem', cursor: 'pointer' }}
                >
                  MindClick Academy
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT — Logo */}
          <motion.div
            variants={fadeUp}
            className="flex-1 flex justify-center items-center relative"
          >
            {/* Halo */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '380px',
                height: '380px',
                background: 'radial-gradient(circle, rgba(234,179,8,0.09) 0%, rgba(30,64,175,0.05) 55%, transparent 75%)',
              }}
            />

            {/* Spinning dashed ring */}
            <motion.svg
              viewBox="0 0 340 340"
              className="absolute pointer-events-none"
              style={{ width: '340px', height: '340px', opacity: 0.18 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="170" cy="170" r="158"
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="1"
                strokeDasharray="6 14"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Counter-spinning outer ring */}
            <motion.svg
              viewBox="0 0 380 380"
              className="absolute pointer-events-none"
              style={{ width: '380px', height: '380px', opacity: 0.1 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            >
              <circle
                cx="190" cy="190" r="178"
                fill="none"
                stroke="#eab308"
                strokeWidth="1.5"
                strokeDasharray="3 20"
                strokeLinecap="round"
              />
            </motion.svg>

            {/* Card */}
            <div
              className="relative flex items-center justify-center rounded-3xl p-10"
              style={{
                background: 'rgba(248,250,252,0.9)',
                border: '1px solid rgba(30,64,175,0.09)',
                boxShadow:
                  '0 2px 4px rgba(0,0,0,0.02), 0 20px 60px rgba(30,64,175,0.08), inset 0 1px 0 rgba(255,255,255,1)',
                backdropFilter: 'blur(12px)',
              }}
            >
              {/* Corner accents */}
              {[
                { top: 14, left: 14 },
                { top: 14, right: 14 },
                { bottom: 14, left: 14 },
                { bottom: 14, right: 14 },
              ].map((pos, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{ ...pos, background: i % 2 === 0 ? 'rgba(234,179,8,0.55)' : 'rgba(30,64,175,0.18)' }}
                />
              ))}

              <motion.img
                src={logo}
                alt="MINDCLICK Logo"
                className="object-contain"
                style={{
                  width: '260px',
                  height: 'auto',
                  filter: 'drop-shadow(0 6px 20px rgba(30,64,175,0.1))',
                }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(248,250,252,0.6), transparent)' }}
      />
    </div>
  );
};

export default Hero;