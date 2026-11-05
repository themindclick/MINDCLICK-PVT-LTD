import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ArrowRight, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Logo component with reliable image fallback handling
const LogoItem = ({ logo }) => {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="inline-block shrink-0 transition-opacity duration-300 hover:opacity-100 opacity-70">
      {!hasError ? (
        <img 
          src={logo.src} 
          alt={logo.name}
          onError={() => setHasError(true)}
          className="h-7 sm:h-8 w-auto object-contain max-w-[110px]" 
        />
      ) : (
        <span 
          className="text-[11px] font-black tracking-[0.2em] text-[#000047]/60 border border-[#000047]/10 px-2.5 py-1 rounded-lg bg-[#000047]/5 inline-block"
          style={{ fontFamily: "'Sugo Display', sans-serif" }}
        >
          {logo.name.toUpperCase()}
        </span>
      )}
    </div>
  );
};

const CaseStudies = () => {
  const clientLogos = [
    { name: "Ahangama Tours", src: "/assets/taxi_logo.png" },
    { name: "Soper Foods", src: "/assets/butterlogo.png" },
    { name: "T&S Tours", src: "/assets/logo.jpeg" },
    { name: "CSE InvestorHub", src: "/assets/investerhub.png" },
    { name: "Lanka Spice", src: "/assets/spice.png" },
    { name: "Electric Lanka", src: "/assets/electric.png" },
    { name: "Global odyssey", src: "/assets/agency.png" },
  ];

  const infiniteLogos = [...clientLogos, ...clientLogos, ...clientLogos];

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

  // Dynamic reviews pool (Random Sri Lankans + Foreign Clients mentioning MindClick & Sri Lanka)
  const allReviews = [
    {
      quote: "Working with MindClick completely transformed our digital footprint. Their team based in Sri Lanka delivered world-class web architecture and automated funnels that blew our international expectations out of the water.",
      author: "Marcus Vance",
      location: "New York, USA",
      type: "International Client"
    },
    {
      quote: "We went from taking bookings manually via endless phone calls to running a completely automated 24/7 digital engine. Outstanding execution from start to finish.",
      author: "Chaminda Perera",
      location: "Colombo, Sri Lanka",
      type: "Local Partner"
    },
    {
      quote: "Outsourcing our platform development to MindClick in Sri Lanka was the best decision we made this year. The code quality, speed, and automated WhatsApp workflows are simply phenomenal.",
      author: "Oliver Thorne",
      location: "London, UK",
      type: "International Client"
    },
    {
      quote: "Our new web system doesn't just look fast it completely changed how we capture local demand. The automated pipeline instantly converts visitors before they drop off.",
      author: "Nimesh Jayasinghe",
      location: "Kandy, Sri Lanka",
      type: "Local Partner"
    },
    {
      quote: "The frontend responsiveness matched with their core backend optimization solved our severe load fragmentation issues completely. Highly professional team!",
      author: "Anusha Ratnayake",
      location: "Galle, Sri Lanka",
      type: "Local Partner"
    }
  ];

  // State for dynamic review cycling
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % allReviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [allReviews.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % allReviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + allReviews.length) % allReviews.length);
  };

  return (
    <section className="bg-white py-20 lg:py-32 relative overflow-hidden border-t border-[#000047]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ── PART 1: CASE STUDIES MATRIX ── */}
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

        {/* ── PART 2: FLAWLESS ZERO-GAP INFINITE CLIENT LOGO LOOP ── */}
        <div className="my-20 relative">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#000047]/40 uppercase tracking-widest inline-flex items-center gap-2">
              Trusted By Local & International Founders
            </span>
          </div>

          <div className="w-full overflow-hidden py-4 relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
            
            <motion.div 
              className="flex whitespace-nowrap gap-16 items-center w-max"
              animate={{ x: [0, -1200] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {infiniteLogos.map((logo, idx) => (
                <LogoItem key={idx} logo={logo} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* ── PART 3: DYNAMIC CHANGING REVIEWS SECTION ── */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-[#000047]/40 uppercase tracking-widest inline-flex items-center gap-2">
              <Layers className="w-3 h-3 text-[#ffd600]" /> Global & Local Feedback
            </span>
            <h3 className="text-2xl font-bold text-[#000047] tracking-tight mt-2">What founders say about our systems</h3>
          </div>

          {/* Dynamic Review Card Container with AnimatePresence */}
          <div className="relative bg-white border-2 border-[#000047] rounded-3xl p-8 sm:p-12 shadow-xl overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#ffd600]" />

            <div className="absolute top-6 right-6 flex items-center gap-2">
              <button 
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#000047] hover:text-white transition-colors flex items-center justify-center text-slate-700"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-[#000047] hover:text-white transition-colors flex items-center justify-center text-slate-700"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="flex gap-1 mb-6 text-[#ffd600]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#ffd600]" />
                    ))}
                  </div>

                  <p className="text-[#000047] text-base sm:text-lg font-medium leading-relaxed mb-8">
                    "{allReviews[currentIndex].quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-[#000047]/10 flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <span className="block font-bold text-sm text-[#000047]">{allReviews[currentIndex].author}</span>
                    <span className="block text-xs font-semibold text-[#000047]/50 mt-0.5">{allReviews[currentIndex].location}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 bg-[#000047]/5 text-[#000047] rounded-full border border-[#000047]/10">
                      {allReviews[currentIndex].type}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-xs font-bold">
                      ✓
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {allReviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-[#000047]' : 'w-2 bg-[#000047]/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CaseStudies;