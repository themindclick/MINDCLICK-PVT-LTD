import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Target, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-[#000047]" />,
      title: "BEHAVIORAL PSYCHOLOGY",
      description: "We evaluate how target consumers absorb digital value signals. We decode friction triggers, optimize user focus tracking paths, and structure spatial content architectures to align seamlessly with buyer intent."
    },
    {
      icon: <Cpu className="w-5 h-5 text-white" />,
      title: "FULL-STACK ENGINEERING",
      description: "We are software engineers at our core. We build high-speed web platforms, scalable multi-tenant database infrastructures, and complex systems designed to deliver sub-second response times without fragmentation errors."
    },
    {
      icon: <Target className="w-5 h-5 text-[#000047]" />,
      title: "GROWTH AUTOMATION",
      description: "We eliminate slower, manual operations that drop sales traffic. By writing automated database synchronizations and instant smartphone messaging pipelines, your company captures incoming actions 24/7."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-[#000047] pt-24 pb-16">
      
      {/* ── SECTION 1: HERO NARRATIVE ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-[#000047]/5 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Zap className="w-3 h-3 text-[#ffd600] fill-[#ffd600]" /> Operational Manifesto
          </span>
          <h1 
            className="text-4xl sm:text-5xl lg:text-7xl font-normal tracking-tight uppercase leading-[1.05]"
            style={{ fontFamily: "'Sugo Display', sans-serif" }}
          >
            FUSING COGNITIVE INTENT <br />
            WITH HIGH-END TECH.
          </h1>
          <p className="text-[#000047]/70 text-base sm:text-lg font-medium mt-4 max-w-xl leading-relaxed">
            MindClick was built to replace legacy, traditional marketing models that rely on superficial visibility metrics. We approach corporate expansion as an exact science combining behavioral consumer psychology with scalable full-stack software development.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: THE TRIPLE COUPLING PILLARS ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {pillars.map((pillar, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="border-2 border-[#000047]/10 bg-white p-6 sm:p-8 rounded-3xl flex flex-col justify-between hover:border-[#000047] transition-all duration-300 shadow-sm"
          >
            <div>
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 border border-[#000047]/10 ${
                pillar.title === "FULL-STACK ENGINEERING" ? 'bg-[#000047]' : 'bg-[#000047]/5'
              }`}>
                {pillar.title === "FULL-STACK ENGINEERING" ? (
                  <Cpu className="w-5 h-5 text-[#ffd600]" />
                ) : pillar.icon}
              </div>
              <h2 
                className="text-lg font-normal uppercase tracking-tight mb-3"
                style={{ fontFamily: "'Sugo Display', sans-serif" }}
              >
                {pillar.title}
              </h2>
              <p className="text-[#000047]/70 text-xs sm:text-sm font-medium leading-relaxed">
                {pillar.description}
              </p>
            </div>
            
            <div className="h-1 w-12 bg-[#000047]/5 rounded mt-6" />
          </motion.div>
        ))}
      </section>

      {/* ── SECTION 3: THE MINDCLICK OPERATING STANDARD (BENTO SPLIT) ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 border-2 border-[#000047]/10 rounded-3xl p-6 sm:p-10 flex flex-col justify-between bg-white">
            <div className="space-y-4">
              <span className="text-[10px] font-black tracking-widest text-[#000047]/40 uppercase block">
                The Architecture Focus
              </span>
              <h3 
                className="text-2xl sm:text-3xl text-[#000047] font-normal tracking-tight uppercase"
                style={{ fontFamily: "'Sugo Display', sans-serif" }}
              >
                Why we do not build flat digital business cards
              </h3>
              <p className="text-[#000047]/80 text-sm font-medium leading-relaxed pt-2">
                Most agencies present a beautiful interface design and walk away, leaving your platform disconnected from backend monitoring, user-intent databases, or algorithmic content distribution trees. 
              </p>
              <p className="text-[#000047]/80 text-sm font-medium leading-relaxed">
                MindClick acts as your external technology partner. We secure your core infrastructure dependencies, optimize data mutations, and build distribution logic directly into your custom applications, making sure no incoming lead drops off.
              </p>
            </div>

            <div className="pt-8 border-t border-[#000047]/5 mt-6">
              <Link to="/solution" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#000047] group">
                <span>View our integrated frameworks</span>
                <ArrowRight className="w-4 h-4 text-[#ffd600] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Action Block (Solid Accent Anchor) */}
          <div className="lg:col-span-5 bg-[#000047] text-white rounded-3xl p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-md">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd600]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-[#ffd600] uppercase block">
                Ecosystem Standard
              </span>
              <h3 
                className="text-2xl sm:text-3xl font-normal tracking-tight uppercase leading-snug"
                style={{ fontFamily: "'Sugo Display', sans-serif" }}
              >
                READY FOR A DIAGNOSTIC STRATEGY AUDIT?
              </h3>
              <p className="text-white/70 text-xs sm:text-sm font-medium leading-relaxed">
                Let's run an intensive evaluation of your current platform latency, visibility structures, and core backend data pipelines. Completely free of retail retainers.
              </p>
              
              <ul className="space-y-2 text-[11px] font-bold tracking-wider uppercase text-white/60 pt-2">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ffd600] shrink-0" /> Real-time data leak checks
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#ffd600] shrink-0" /> Algorithmic visibility metrics
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link to="/contact" className="block w-full text-center">
                <button className="w-full bg-[#ffd600] text-[#000047] hover:bg-white text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-sm">
                  Initialize Client Session
                </button>
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default About;