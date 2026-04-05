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

interface AssessmentSet {
  title: string;
  links: {
    label: string;
    url: string;
    type?: 'question' | 'markscheme' | 'insert' | 'resource';
  }[];
}

const ENGLISH_ASSESSMENTS: AssessmentSet[] = [
  {
    title: "Writing",
    links: [
      { label: "Writing Paper", url: "https://files.cognitoedu.org/files/2%20-%20KS3/1%20-%20English/Writing%20Paper.pdf", type: 'insert' },
      { label: "Answer Booklet", url: "https://files.cognitoedu.org/files/2%20-%20KS3/1%20-%20English/Writing%20Paper%20Answer%20Booklet.pdf", type: 'resource' }
    ]
  },
  {
    title: "Reading",
    links: [
      { label: "A Question of Choice (Insert)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/1%20-%20English/A%20Question%20of%20Choice.pdf", type: 'insert' },
      { label: "Answer Booklet", url: "https://files.cognitoedu.org/files/2%20-%20KS3/1%20-%20English/A%20Question%20of%20Choice%20Answer%20Booklet.pdf", type: 'resource' }
    ]
  },
  {
    title: "Shakespeare",
    links: [
      { label: "The Tempest", url: "https://files.cognitoedu.org/files/2%20-%20KS3/1%20-%20English/Shakespeare%20Paper%20The%20Tempest.pdf", type: 'resource' },
      { label: "Romeo and Juliet", url: "https://files.cognitoedu.org/files/2%20-%20KS3/1%20-%20English/Shakespeare%20Paper%20Romeo%20and%20Juliet.pdf", type: 'resource' }
    ]
  },
  {
    title: "Mark Scheme",
    links: [
      { label: "Full Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20KS3/1%20-%20English/MarkScheme.pdf", type: 'markscheme' }
    ]
  }
];

const MATHS_ASSESSMENTS: AssessmentSet[] = [
  {
    title: "Level 3-5",
    links: [
      { label: "Paper 1 (Non-Calc)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/2%20-%20Maths/ks3-maths-sat-paper-2009_35_Paper1.pdf", type: 'question' },
      { label: "Paper 1 Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20Maths/maths-sat-paper-2009_Paper1_Markscheme.pdf", type: 'markscheme' },
      { label: "Paper 2 (Calc)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/2%20-%20Maths/ks3-maths-sat-paper-2009_35_Paper2.pdf", type: 'question' },
      { label: "Paper 2 Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20Maths/maths-sat-paper-2009_Paper2_Markscheme.pdf", type: 'markscheme' }
    ]
  },
  {
    title: "Level 4-6",
    links: [
      { label: "Paper 1 (Non-Calc)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/2%20-%20Maths/ks3-maths-sat-paper-2009_46_Paper1.pdf", type: 'question' },
      { label: "Paper 1 Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20Maths/maths-sat-paper-2009_Paper1_Markscheme.pdf", type: 'markscheme' },
      { label: "Paper 2 (Calc)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/2%20-%20Maths/ks3-maths-sat-paper-2009_46_Paper2.pdf", type: 'question' },
      { label: "Paper 2 Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20Maths/maths-sat-paper-2009_Paper2_Markscheme.pdf", type: 'markscheme' }
    ]
  },
  {
    title: "Level 5-7",
    links: [
      { label: "Paper 1 (Non-Calc)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/2%20-%20Maths/ks3-maths-sat-paper-2009_57_Paper1.pdf", type: 'question' },
      { label: "Paper 1 Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20Maths/maths-sat-paper-2009_Paper1_Markscheme.pdf", type: 'markscheme' },
      { label: "Paper 2 (Calc)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/2%20-%20Maths/ks3-maths-sat-paper-2009_57_Paper2.pdf", type: 'question' },
      { label: "Paper 2 Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20Maths/maths-sat-paper-2009_Paper2_Markscheme.pdf", type: 'markscheme' }
    ]
  },
  {
    title: "Level 6-8",
    links: [
      { label: "Paper 1 (Non-Calc)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/2%20-%20Maths/ks3-maths-sat-paper-2009_68_Paper1.pdf", type: 'question' },
      { label: "Paper 1 Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20Maths/maths-sat-paper-2009_Paper1_Markscheme.pdf", type: 'markscheme' },
      { label: "Paper 2 (Calc)", url: "https://files.cognitoedu.org/files/2%20-%20KS3/2%20-%20Maths/ks3-maths-sat-paper-2009_68_Paper2.pdf", type: 'question' },
      { label: "Paper 2 Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20Maths/maths-sat-paper-2009_Paper2_Markscheme.pdf", type: 'markscheme' }
    ]
  }
];

const SCIENCE_ASSESSMENTS = {
  biology: [
    {
      title: "Level 3-6",
      links: [
        { label: "Paper 1", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-36P1-2009.pdf", type: 'question' },
        { label: "Paper 2", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-36P2-2009.pdf", type: 'question' },
        { label: "Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-MarkScheme-2009.pdf", type: 'markscheme' }
      ]
    },
    {
      title: "Level 5-7",
      links: [
        { label: "Paper 1", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-57P1-2009.pdf", type: 'question' },
        { label: "Paper 2", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-57P2-2009.pdf", type: 'question' },
        { label: "Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-MarkScheme-2009.pdf", type: 'markscheme' }
      ]
    }
  ],
  chemistry: [
    {
      title: "Level 3-6",
      links: [
        { label: "Paper 1", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-36P1-2009.pdf", type: 'question' },
        { label: "Paper 2", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-36P2-2009.pdf", type: 'question' },
        { label: "Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-MarkScheme-2009.pdf", type: 'markscheme' }
      ]
    },
    {
      title: "Level 5-7",
      links: [
        { label: "Paper 1", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-57P1-2009.pdf", type: 'question' },
        { label: "Paper 2", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-57P2-2009.pdf", type: 'question' },
        { label: "Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-MarkScheme-2009.pdf", type: 'markscheme' }
      ]
    }
  ],
  physics: [
    {
      title: "Level 3-6",
      links: [
        { label: "Paper 1", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-36P1-2009.pdf", type: 'question' },
        { label: "Paper 2", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-36P2-2009.pdf", type: 'question' },
        { label: "Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-MarkScheme-2009.pdf", type: 'markscheme' }
      ]
    },
    {
      title: "Level 5-7",
      links: [
        { label: "Paper 1", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-57P1-2009.pdf", type: 'question' },
        { label: "Paper 2", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-57P2-2009.pdf", type: 'question' },
        { label: "Mark Scheme", url: "https://files.cognitoedu.org/files/2%20-%20KS3/3%20-%20Science/key-stage-3-ks3-science-MarkScheme-2009.pdf", type: 'markscheme' }
      ]
    }
  ]
};

export default function KS3Assessments({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'maths' | 'english' | 'science'>('maths');
  const [activeScienceTab, setActiveScienceTab] = useState<'biology' | 'chemistry' | 'physics'>('biology');

  const renderAssessmentGrid = (assessments: AssessmentSet[]) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {assessments.map((set, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-[#3498db] px-6 py-3">
            <h3 className="text-white font-bold text-lg">{set.title}</h3>
          </div>
          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {set.links.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <div className={`p-2 rounded-full ${
                  link.type === 'markscheme' ? 'bg-green-50 text-green-600' : 
                  link.type === 'insert' ? 'bg-purple-50 text-purple-600' :
                  'bg-red-50 text-red-600'
                }`}>
                  <FileText className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-gray-700">{link.label}</span>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-wider flex items-center gap-1">
                    <Download className="w-3 h-3" />
                    Download
                  </span>
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
          <h1 className="text-xl font-bold tracking-wider uppercase">KS3 Assessments</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#3498db] mb-4 tracking-tight uppercase">KS3 Assessment Papers</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Access official KS3 assessment questions and mark schemes for Maths, English, and Science.
          </p>
        </div>

        {/* Main Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          {[
            { id: 'maths', label: 'Mathematics' },
            { id: 'english', label: 'English' },
            { id: 'science', label: 'Science' }
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
                    ? 'bg-gray-800 text-white' 
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        {/* Content */}
        <motion.div
          key={activeTab + (activeTab === 'science' ? activeScienceTab : '')}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8"
        >
          {activeTab === 'maths' && renderAssessmentGrid(MATHS_ASSESSMENTS)}
          {activeTab === 'english' && renderAssessmentGrid(ENGLISH_ASSESSMENTS)}
          {activeTab === 'science' && renderAssessmentGrid(SCIENCE_ASSESSMENTS[activeScienceTab])}
        </motion.div>
      </main>
    </div>
  );
}
