import React from 'react';
import { Eye, Film } from 'lucide-react';

const TikTokMarketingPipeline = () => {
  return (
    <div className="space-y-8 font-medium text-[#000047]/80">
      <p className="text-lg leading-relaxed font-bold text-[#000047]">
        Short-form social algorithms do not prioritize aesthetic production. They track retentive pacing signals.
      </p>

      <h2 className="text-2xl font-normal tracking-tight text-[#000047]" style={{ fontFamily: "'Sugo Display', sans-serif" }}>
        THE RETENTION HOOK MATRIX
      </h2>
      <p>
        To command authority for consumer brands, structural frame switches must occur within the first 1.8 seconds of view time...
      </p>

      {/* Completely distinct UI container for a different look and feel */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="p-5 border-2 border-[#000047] rounded-xl bg-white">
          <span className="block font-bold text-[#000047] mb-1">✓ Algorithmic Index Hook</span>
          <p className="text-xs text-[#000047]/60">Immediate context text banner overlays.</p>
        </div>
        <div className="p-5 border-2 border-[#000047]/10 rounded-xl bg-white">
          <span className="block font-bold text-[#000047]/40 mb-1">✗ Traditional Intro Hook</span>
          <p className="text-xs text-[#000047]/40">Generic title sequences that increase dropout velocity.</p>
        </div>
      </div>
    </div>
  );
};

export default TikTokMarketingPipeline;