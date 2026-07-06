import React from 'react';
import { Terminal, Cpu } from 'lucide-react';
// Import your custom images easily here
// import dashboardMockup from '../assets/images/dashboard-mockup.png';

const MernStackOptimization = () => {
  return (
    <div className="space-y-8 font-medium text-[#000047]/80">
      <p className="text-lg leading-relaxed font-bold text-[#000047]">
        When engineering full-stack financial applications for fast markets, optimizing server render speeds transforms raw data into immediate user value.
      </p>

      {/* Modern custom layout component inside the article */}
      <div className="bg-[#000047]/5 border-2 border-[#000047] rounded-2xl p-6 flex flex-col sm:flex-row gap-6 items-center">
        <div className="w-12 h-12 rounded-xl bg-[#000047] flex items-center justify-center shrink-0">
          <Cpu className="w-6 h-6 text-[#ffd600]" />
        </div>
        <div>
          <h4 className="font-bold text-[#000047] uppercase tracking-wide">Infrastructure Target</h4>
          <p className="text-xs text-[#000047]/70 mt-1">Achieving sub-second First Contentful Paint times using strategic indexes.</p>
        </div>
      </div>

      <h2 className="text-2xl font-normal tracking-tight text-[#000047]" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
        1. DATABASE INDEX MAPPING
      </h2>
      <p>
        Standard sequential queries fail dramatically under massive read requests. By building compound indexing structures, execution paths become direct pathways...
      </p>

      {/* Example of adding custom image placements freely anywhere */}
      <div className="border-2 border-[#000047]/10 rounded-2xl p-2 bg-[#000047]/5">
        <div className="bg-white rounded-xl p-8 text-center border border-dashed border-[#000047]/20">
          <span className="text-xs uppercase font-bold tracking-widest opacity-40">[ Custom Graph/Image Placeholder ]</span>
          {/* <img src={dashboardMockup} alt="Database Indexing Map" className="mx-auto rounded-lg" /> */}
        </div>
      </div>
    </div>
  );
};

export default MernStackOptimization;