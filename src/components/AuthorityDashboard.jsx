import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Percent, TrendingUp, Sparkles, HelpCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AuthorityDashboard = () => {
  // Simulator State values initialized for mid-sized business prospects
  const [monthlyTraffic, setMonthlyTraffic] = useState(5000);
  const [averageOrderValue, setAverageOrderValue] = useState(4500); // e.g., in LKR or equivalent base units

  // Consumer behavioral calculation metrics
  const standardConversionRate = 0.01; // 1% market average standard rate
  const mindclickConversionRate = 0.035; // 3.5% optimized conversion platform rate

  // Financial system conversions
  const standardRevenue = Math.round(monthlyTraffic * standardConversionRate * averageOrderValue);
  const mindclickRevenue = Math.round(monthlyTraffic * mindclickConversionRate * averageOrderValue);
  const revenueLeaked = mindclickRevenue - standardRevenue;

  return (
    <section className="bg-white py-20 lg:py-28 relative overflow-hidden border-t border-[#000047]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#000047] font-bold text-xs uppercase tracking-widest bg-[#000047]/5 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-[#ffd600] fill-[#ffd600]" /> Real-Time Analytics
          </span>
          <h2 
            className="text-3xl sm:text-4xl lg:text-5xl text-[#000047] mt-4 font-normal tracking-tight"
            style={{ fontFamily: "'Sugo Display', sans-serif" }}
          >
            STOP GUESSING. MEASURE THE IMPACT.
          </h2>
          <p className="text-[#000047]/70 text-sm sm:text-base mt-3 font-medium">
            Drag the sliders below to see the baseline gap between a standard business card website and an optimized behavioral marketing platform.
          </p>
        </div>

        {/* Master Interactive Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT: The Interactive Interactive Simulator Engine (7 Columns) */}
          <div className="lg:col-span-7 bg-white border-2 border-[#000047] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
            <div className="absolute top-0 left-6 right-6 h-[4px] bg-[#ffd600]" />
            
            <div>
              <h3 className="text-sm font-bold text-[#000047] uppercase tracking-wider mb-8 flex items-center gap-2">
                <span>Value Pipeline Calculator</span>
              </h3>

              {/* Slider 1: Traffic Control */}
              <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-sm font-bold text-[#000047]">
                  <span className="flex items-center gap-1.5 text-[#000047]/70">Monthly Visitors</span>
                  <span className="bg-[#000047]/5 px-3 py-1 rounded text-[#000047]">{monthlyTraffic.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="500"
                  value={monthlyTraffic} 
                  onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                  className="w-full accent-[#000047] h-2 bg-[#000047]/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Slider 2: Value Control */}
              <div className="space-y-3 mb-10">
                <div className="flex justify-between items-center text-sm font-bold text-[#000047]">
                  <span className="flex items-center gap-1.5 text-[#000047]/70">Average Deal / Product Value</span>
                  <span className="bg-[#000047]/5 px-3 py-1 rounded text-[#000047]">{averageOrderValue.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="25000" 
                  step="250"
                  value={averageOrderValue} 
                  onChange={(e) => setAverageOrderValue(Number(e.target.value))}
                  className="w-full accent-[#000047] h-2 bg-[#000047]/10 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>

            {/* Results Output Console */}
            <div className="bg-[#000047]/5 rounded-xl p-5 border border-[#000047]/10">
              <div className="grid grid-cols-2 gap-4 text-center pb-4 border-b border-[#000047]/10">
                <div>
                  <span className="block text-[10px] font-bold text-[#000047]/50 uppercase tracking-wider">Standard Setup (1%)</span>
                  <span className="text-base font-bold text-[#000047]">{standardRevenue.toLocaleString()}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-[#000047]/50 uppercase tracking-wider">MindClick System (3.5%)</span>
                  <span className="text-base font-bold text-emerald-600">+{mindclickRevenue.toLocaleString()}</span>
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="text-center sm:text-left">
                  <span className="text-xs font-bold text-red-600 block uppercase tracking-wider">Your Monthly Revenue Leak</span>
                  <p className="text-xs font-medium text-[#000047]/60">Capital left unprotected without conversion tracking.</p>
                </div>
                <span className="text-2xl font-black text-red-600" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
                  {revenueLeaked.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Real Agency Core Authority Metrics (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            
            {/* Metric Box 1 */}
            <div className="bg-white border-2 border-[#000047]/10 hover:border-[#000047] transition-colors p-6 rounded-2xl flex items-center justify-between group">
              <div>
                <span className="block text-3xl font-normal text-[#000047]" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
                  3.5×
                </span>
                <span className="text-sm font-bold text-[#000047] block mt-1">Average Conversion Lift</span>
                <p className="text-xs font-medium text-[#000047]/60 mt-1">Compared to legacy standard landing pages.</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#ffd600]/20 flex items-center justify-center text-[#000047]">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>

            {/* Metric Box 2 */}
            <div className="bg-white border-2 border-[#000047]/10 hover:border-[#000047] transition-colors p-6 rounded-2xl flex items-center justify-between group">
              <div>
                <span className="block text-3xl font-normal text-[#000047]" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
                  24/7
                </span>
                <span className="text-sm font-bold text-[#000047] block mt-1">Automated Lead Coverage</span>
                <p className="text-xs font-medium text-[#000047]/60 mt-1">Instant WhatsApp and database synchronization engines.</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[#ffd600]/20 flex items-center justify-center text-[#000047]">
                <Percent className="w-5 h-5" />
              </div>
            </div>

            {/* Bottom Strategic Direct Callout Action block */}
            <div className="bg-[#000047] text-white p-6 rounded-2xl flex flex-col justify-between flex-1 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#ffd600]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <h4 className="text-lg font-normal tracking-wide text-white leading-tight mb-2" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
                  READY TO PLUG YOUR REVENUE LEAKS?
                </h4>
                <p className="text-white/80 text-xs font-medium leading-relaxed max-w-sm">
                  Let’s deploy automated tracking and behavioral funnels to capture the prospects you are currently driving away.
                </p>
              </div>

              <div className="pt-6">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-[#ffd600] text-[#000047] font-bold text-xs uppercase tracking-widest px-5 py-3 rounded-xl hover:bg-white transition-colors">
                  <span>Claim Your Full System Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AuthorityDashboard;