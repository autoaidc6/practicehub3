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

import papersData from '../data/ks2_past_papers.json';

interface PaperSet {
  year: string;
  links: {
    label: string;
    url: string;
  }[];
}

const ENGLISH_PAPERS: PaperSet[] = papersData.ENGLISH_PAPERS;
const MATHS_PAPERS: PaperSet[] = papersData.MATHS_PAPERS;
const SPAG_PAPERS: PaperSet[] = papersData.SPAG_PAPERS;

export default function KS2PastPapers({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'maths' | 'english' | 'spag'>('maths');

  const renderPapers = (papers: PaperSet[]) => (
    <div className="space-y-8">
      {papers.map((set, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#3498db] px-6 py-3">
            <h3 className="text-white font-bold text-lg">{set.year}</h3>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {set.links.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 border border-gray-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <div className="bg-red-50 p-3 rounded-full mb-3 group-hover:bg-red-100 transition-colors">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <span className="text-sm font-bold text-gray-700 text-center">{link.label}</span>
                <div className="mt-2 flex items-center gap-1 text-[10px] font-black text-blue-600 uppercase tracking-wider">
                  <Download className="w-3 h-3" />
                  Download PDF
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#3498db] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-wider uppercase">KS2 Past Papers</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#3498db] mb-4 tracking-tight uppercase">KS2 SATs Past Papers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Download official KS2 SATs past papers for Maths, English, and SPaG.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { id: 'maths', label: 'Mathematics' },
            { id: 'english', label: 'English Reading' },
            { id: 'spag', label: 'SPaG' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all shadow-sm ${
                activeTab === tab.id 
                  ? 'bg-[#3498db] text-white scale-105 shadow-md' 
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'maths' && renderPapers(MATHS_PAPERS)}
          {activeTab === 'english' && renderPapers(ENGLISH_PAPERS)}
          {activeTab === 'spag' && renderPapers(SPAG_PAPERS)}
        </motion.div>
      </main>
    </div>
  );
}
