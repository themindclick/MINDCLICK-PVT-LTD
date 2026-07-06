import React from 'react';
// Import your unique custom pages directly
import MernStackOptimization from '../articles/MernStackOptimization';
import TikTokMarketingPipeline from '../articles/TikTokMarketingPipeline';

export const academyArticles = [
  {
    id: 1,
    category: 'Tech',
    title: 'ENGINEERING SUB-SECOND UX WITH THE MERN STACK',
    description: 'A deep architectural review on optimizing fast frontend data fetching, multi-tenant MongoDB indices, and reducing initial loading layout latency down to milliseconds.',
    readTime: '6 min read',
    difficulty: 'Intermediate',
    slug: 'mern-stack-sub-second-ux',
    component: <MernStackOptimization /> // Your unique page file is stored as a view object here
  },
  {
    id: 2,
    category: 'Marketing',
    title: 'THE ALGORITHMIC TIKTOK PIPELINE FOR LOCAL MARKETS',
    description: 'Breaking down how to bypass traditional social media distribution traps by structuring high-retention organic content frame timelines that trigger local indexing hooks.',
    readTime: '4 min read',
    difficulty: 'Beginner',
    slug: 'algorithmic-tiktok-pipeline-local',
    component: <TikTokMarketingPipeline /> // Your custom content pipeline
  }
];