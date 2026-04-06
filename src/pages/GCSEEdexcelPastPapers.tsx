/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  ArrowLeft,
  Download
} from 'lucide-react';

interface Paper {
  name: string;
  paperUrl: string;
  msUrl: string;
}

interface PaperGroup {
  year: string;
  tier: 'Foundation' | 'Higher';
  papers: Paper[];
}

const MATHS_PAPERS: PaperGroup[] = [
  {
    year: "Nov 2024",
    tier: "Foundation",
    papers: [
      { name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1f-que-20241105.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1f-rms-20241105.pdf" },
      { name: "Paper 2", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2f-que-20241107.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2f-rms-20241107.pdf" },
      { name: "Paper 3", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3f-que-20241112.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3f-rms-20241112.pdf" }
    ]
  },
  {
    year: "Nov 2024",
    tier: "Higher",
    papers: [
      { name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1h-que-20241105.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1h-rms-20241105.pdf" },
      { name: "Paper 2", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2h-que-20241107.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2h-rms-20241107.pdf" },
      { name: "Paper 3", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3h-que-20241112.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3h-rms-20241112.pdf" }
    ]
  },
  {
    year: "June 2024",
    tier: "Foundation",
    papers: [
      { name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1f-que-20240516.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1f-rms-20240822.pdf" },
      { name: "Paper 2", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2f-que-20240529.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2f-rms-20240822.pdf" },
      { name: "Paper 3", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3f-que-20240610.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3f-rms-20240822.pdf" }
    ]
  },
  {
    year: "June 2024",
    tier: "Higher",
    papers: [
      { name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1h-que-20240516.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1h-rms-20240822.pdf" },
      { name: "Paper 2", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2h-que-20240529.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2h-rms-20240822.pdf" },
      { name: "Paper 3", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3h-que-20240610.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3h-rms-20240822.pdf" }
    ]
  },
  {
    year: "Nov 2023",
    tier: "Foundation",
    papers: [
      { name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1f-que-20231114.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1f-rms-20240111.pdf" },
      { name: "Paper 2", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2f-que-20231116.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2f-rms-20240111.pdf" },
      { name: "Paper 3", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3f-que-20231121.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-3f-rms-20240111.pdf" }
    ]
  },
  {
    year: "Nov 2023",
    tier: "Higher",
    papers: [
      { name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1h-que-20231114.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-1h-rms-20240111.pdf" },
      { name: "Paper 2", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2h-que-20231116.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Mathematics/2015/Exam-materials/1ma1-2h-rms-20240111.pdf" }
    ]
  }
];

const SCIENCE_PAPERS = {
  biology: [
    {
      year: "June 2020",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bf-que-20200513.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bf-rms-20200513.pdf" }]
    },
    {
      year: "June 2020",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bh-que-20200513.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bh-rms-20200513.pdf" }]
    },
    {
      year: "June 2019",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bf-que-20190516.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bf-rms-20190516.pdf" }]
    },
    {
      year: "June 2019",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bh-que-20190516.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bh-rms-20190516.pdf" }]
    },
    {
      year: "June 2018",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bf-que-20180517.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bf-rms-20180517.pdf" }]
    },
    {
      year: "June 2018",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bh-que-20180517.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1bh-rms-20180517.pdf" }]
    }
  ],
  chemistry: [
    {
      year: "June 2020",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1cf-que-20200514.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1cf-rms-20200514.pdf" }]
    },
    {
      year: "June 2020",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ch-que-20200514.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ch-rms-20200514.pdf" }]
    },
    {
      year: "June 2019",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1cf-que-20190517.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1cf-rms-20190517.pdf" }]
    },
    {
      year: "June 2019",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ch-que-20190517.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ch-rms-20190517.pdf" }]
    },
    {
      year: "June 2018",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1cf-que-20180518.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1cf-rms-20180518.pdf" }]
    },
    {
      year: "June 2018",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ch-que-20180518.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ch-rms-20180518.pdf" }]
    }
  ],
  physics: [
    {
      year: "June 2020",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1pf-que-20200515.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1pf-rms-20200515.pdf" }]
    },
    {
      year: "June 2020",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ph-que-20200515.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ph-rms-20200515.pdf" }]
    },
    {
      year: "June 2019",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1pf-que-20190520.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1pf-rms-20190520.pdf" }]
    },
    {
      year: "June 2019",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ph-que-20190520.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ph-rms-20190520.pdf" }]
    },
    {
      year: "June 2018",
      tier: "Foundation",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1pf-que-20180522.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1pf-rms-20180522.pdf" }]
    },
    {
      year: "June 2018",
      tier: "Higher",
      papers: [{ name: "Paper 1", paperUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ph-que-20180522.pdf", msUrl: "https://qualifications.pearson.com/content/dam/pdf/GCSE/Science/2016/Exam-materials/1sc0-1ph-rms-20180522.pdf" }]
    }
  ]
};

export default function GCSEEdexcelPastPapers({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'maths' | 'science'>('maths');
  const [activeScienceTab, setActiveScienceTab] = useState<'biology' | 'chemistry' | 'physics'>('biology');
  const [activeTier, setActiveTier] = useState<'Foundation' | 'Higher'>('Higher');

  const renderPapers = (groups: any[]) => {
    const filteredGroups = groups.filter(g => g.tier === activeTier);
    
    return (
      <div className="space-y-6">
        {filteredGroups.map((group, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-[#4b2c7d] px-6 py-3 flex justify-between items-center">
              <h3 className="text-white font-bold text-lg">{group.year}</h3>
              <span className="text-white/80 text-xs font-black uppercase tracking-widest">{group.tier} Tier</span>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.papers.map((paper: any, pIdx: number) => (
                  <div key={pIdx} className="p-4 border border-gray-100 rounded-xl bg-gray-50/50">
                    <h4 className="font-black text-gray-900 mb-3 text-sm uppercase tracking-tight">{paper.name}</h4>
                    <div className="flex flex-col gap-2">
                      <a
                        href={paper.paperUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-all group"
                      >
                        <span className="text-xs font-bold text-gray-600">Question Paper</span>
                        <Download className="w-4 h-4 text-purple-600" />
                      </a>
                      <a
                        href={paper.msUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-all group"
                      >
                        <span className="text-xs font-bold text-gray-600">Mark Scheme</span>
                        <Download className="w-4 h-4 text-green-600" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#4b2c7d] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-wider uppercase">Edexcel GCSE Past Papers</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#4b2c7d] mb-4 tracking-tight uppercase">Edexcel GCSE Papers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Direct access to official Edexcel GCSE Maths and Combined Science past papers.
          </p>
        </div>

        {/* Main Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { id: 'maths', label: 'Mathematics' },
            { id: 'science', label: 'Combined Science' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all shadow-sm ${
                activeTab === tab.id 
                  ? 'bg-[#4b2c7d] text-white scale-105 shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tier Selection */}
        <div className="flex justify-center gap-2 mb-8">
          {['Foundation', 'Higher'].map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveTier(tier as any)}
              className={`px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest transition-all ${
                activeTier === tier 
                  ? 'bg-black text-white' 
                  : 'bg-gray-200 text-gray-500 hover:bg-gray-300'
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        {/* Science Sub-Tabs */}
        {activeTab === 'science' && (
          <div className="flex justify-center gap-3 mb-12">
            {[
              { id: 'biology', label: 'Biology' },
              { id: 'chemistry', label: 'Chemistry' },
              { id: 'physics', label: 'Physics' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveScienceTab(tab.id as any)}
                className={`px-6 py-2 rounded-full font-bold text-xs transition-all ${
                  activeScienceTab === tab.id 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <motion.div
          key={activeTab + (activeTab === 'science' ? activeScienceTab : '') + activeTier}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'maths' && renderPapers(MATHS_PAPERS)}
          {activeTab === 'science' && renderPapers(SCIENCE_PAPERS[activeScienceTab])}
        </motion.div>
      </main>
    </div>
  );
}
