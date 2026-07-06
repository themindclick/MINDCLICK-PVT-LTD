import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  // 1. PERFECT SEAMLESS LOGO LOOP DATA
  // Replace these text paths with your exact public asset locations (e.g., "/assets/logos/ts.png")
  const clientLogos = [
    { name: "Ahangama Tours", src: "/assets/logo1.png" },
    { name: "Salon Mood", src: "/assets/logo2.png" },
    { name: "T&S Marketing", src: "/assets/logo3.png" },
    { name: "CSE InvestorHub", src: "/assets/logo4.png" },
    { name: "MindClick Academy", src: "/assets/logo5.png" },
  ];

  // Triplicate the array structure to secure flawless overflow coverage for massive displays
  const infiniteLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // 2. CASE STUDIES DATA
  const studies = [
    {
      tag: "Automated Tourism Web Platform",
      title: "AHANGAMA TAXI SERVICE",
      description: "Transformed a manual booking process into a fully automated, multi-day tour package booking funnel featuring custom digital marketing scaling.",
      metric: "+180% Bookings",
      metricLabel: "In under 45 days",
      link: "/shop1"
    },
    {
      tag: "Startup Growth Solution",
      title: "THE WHATSAPP SMART PLATFORM",
      description: "Engineered a fast, low-friction entry website system that instantly captures traffic and pairs it with immediate smartphone messaging workflows.",
      metric: "5.2× Lead Rate",
      metricLabel: "Average conversion lift",
      link: "/shop1"
    },
    {
      tag: "Fintech Interface System",
      title: "CSE INVESTORHUB",
      description: "Designed a real-time tracking dashboard ecosystem with optimized information layout patterns to handle intense data parsing cleanly.",
      metric: "< 1.2s Load Time",
      metricLabel: "React architecture speed",
      link: "/shop1"
    }
  ];

  // 3. ULTRA-MODERN BENTO REVIEWS
  const customerGridReviews = [
    {
      quote: "MindClick completely re-engineered our operational workflow. We went from taking bookings manually via endless phone calls to running a completely automated 24/7 digital engine.",
      author: "S. Fernando",
      role: "Managing Director, T&S Tours",
      highlight: true // Visually maps as a prominent layout card
    },
    {
      quote: "Our new web system doesn't just look fast—it completely changed how we capture demand. The WhatsApp pipeline instantly converts visitors before they run away.",
      author: "N. Perera",
      role: "Founder, Salon Mood",
      highlight: false
    },
    {
      quote: "The frontend responsiveness matched with their core backend database optimization solved our severe load fragmentation issues completely.",
      author: "CSE Investor",
      role: "Fintech Platform Lead",
      highlight: false
    }
  ];

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden border-t border-[#000047]/5">
      
      {/* ── PART 1: FLAWLESS ZERO-GAP INFINITE LOOP ── */}
      <div className="w-full overflow-hidden pb-20 relative">
        {/* Modern blur vignettes to mask side entry/exit elegantly */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          className="flex whitespace-nowrap gap-20 items-center w-max"
          animate={{ x: [0, -1200] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear", // Hard linear requirement for true stutterless execution
            },
          }}
        >
          {infiniteLogos.map((logo, idx) => (
            <div key={idx} className="inline-block shrink-0 transition-opacity duration-300 hover:opacity-100 opacity-60">
              <img 
                src={logo.src} 
                alt={logo.name}
                onError={(e) => {
                  // Fallback safely to stylized branding typography if the path is missing
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
                className="h-9 w-auto object-contain max-w-[140px]" 
              />
              <span className="hidden text-xs font-black tracking-[0.25em] text-[#000047]/30" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
                {logo.name.toUpperCase()}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── PART 2: CASE STUDIES MATRIX ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-[#000047] font-bold text-xs uppercase tracking-widest bg-[#000047]/5 px-4 py-1.5 rounded-full">
              Validated Execution
            </span>
            <h2 
              className="text-3xl sm:text-4xl lg:text-5xl text-[#000047] mt-4 font-normal tracking-tight"
              style={{ fontFamily: "'Sugo Display', sans-serif" }}
            >
              REAL ARCHITECTURE.<br />MEASURABLE METRICS.
            </h2>
          </div>
          <p className="text-[#000047]/70 text-sm sm:text-base font-medium max-w-sm mt-4 md:mt-0">
            We judge digital agency success by growth metrics, not vanity designs. Here is how our engineering handles user behavior.
          </p>
        </div>

        {/* Case Studies Stagger Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-28">
          {studies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white border-2 border-[#000047]/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:border-[#000047] hover:shadow-lg hover:shadow-[#000047]/5"
            >
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#000047]/50 uppercase block mb-2">
                  {item.tag}
                </span>
                <h3 
                  className="text-xl sm:text-2xl text-[#000047] font-normal tracking-tight mb-4"
                  style={{ fontFamily: "'Sugo Display', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#000047]/70 text-xs sm:text-sm font-medium leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <div className="bg-[#000047] text-white p-4 rounded-xl mb-6 relative overflow-hidden">
                  <div className="absolute top-0 bottom-0 left-0 w-[4px] bg-[#ffd600]" />
                  <span className="block text-2xl font-bold tracking-tight text-[#ffd600]">
                    {item.metric}
                  </span>
                  <span className="text-[10px] font-bold text-white/70 uppercase tracking-wider block mt-0.5">
                    {item.metricLabel}
                  </span>
                </div>

                <Link 
                  to={item.link} 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#000047] group/link hover:opacity-80"
                >
                  <span>Explore Strategy</span>
                  <ArrowRight className="w-4 h-4 text-[#ffd600] group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── PART 3: MINIMALIST BENTO REVIEWS GRAPH (GOOGLE-INSPIRED TECH STYLE) ── */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#000047]/40 uppercase tracking-widest inline-flex items-center gap-2">
              <Layers className="w-3 h-3 text-[#ffd600]" /> Peer Verification
            </span>
            <h3 className="text-2xl font-bold text-[#000047] tracking-tight mt-2">What founders say about our infrastructure</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {customerGridReviews.map((rev, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-2xl p-6 border-2 flex flex-col justify-between transition-all duration-300 ${
                  rev.highlight 
                    ? 'border-[#000047] md:col-span-1 shadow-md bg-white relative' 
                    : 'border-[#000047]/10 bg-white hover:border-[#000047]'
                }`}
              >
                {rev.highlight && (
                  <div className="absolute top-0 left-10 right-10 h-[3px] bg-[#ffd600]" />
                )}
                
                <div>
                  {/* Clean star indicators */}
                  <div className="flex gap-0.5 mb-4 text-[#ffd600]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#ffd600]" />
                    ))}
                  </div>

                  <p className="text-[#000047]/90 text-sm font-medium leading-relaxed mb-6">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#000047]/5 flex items-center justify-between">
                  <div>
                    <span className="block font-bold text-xs text-[#000047]">{rev.author}</span>
                    <span className="block text-[10px] font-bold text-[#000047]/40 uppercase tracking-wider mt-0.5">{rev.role}</span>
                  </div>
                  
                  {/* Subtle Google-style check mark badge */}
                  <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-[10px] font-bold">
                    ✓
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;