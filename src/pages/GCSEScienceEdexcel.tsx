/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, Search, ArrowLeft } from 'lucide-react';

interface Topic {
  name: string;
  videoUrl?: string;
  questionsUrl?: string;
  solutionsUrl?: string;
  grade: string;
}

const TOPICS: Topic[] = [
  { name: "Biology: Cell Structure", grade: "8+", videoUrl: "#", questionsUrl: "#", solutionsUrl: "#" },
  { name: "Chemistry: Atomic Structure", grade: "7", videoUrl: "#", questionsUrl: "#", solutionsUrl: "#" },
  { name: "Physics: Energy Transfers", grade: "6", videoUrl: "#", questionsUrl: "#", solutionsUrl: "#" }
];

export default function GCSEScienceEdexcel({ onBack }: { onBack: () => void }) {
  const [search, setSearch] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);
  const filteredTopics = TOPICS.filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(search.toLowerCase());
    const matchesGrade = selectedGrades.length === 0 || selectedGrades.includes(topic.grade);
    return matchesSearch && matchesGrade;
  });
  const toggleGrade = (grade: string) => {
    setSelectedGrades(prev => prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]);
  };
  const grades = ["8+", "7", "6", "5", "4", "3", "2", "1"];

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#3498db] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-wider uppercase">GCSE Science (Edexcel)</h1>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#3498db] mb-4 tracking-tight uppercase">GCSE Science Revision</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">Comprehensive Science revision resources for Edexcel.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input type="text" placeholder="Search topics..." value={search} onChange={(e) => setSearch(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db]/20 focus:border-[#3498db] transition-all" />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {grades.map(grade => (
                <button key={grade} onClick={() => toggleGrade(grade)} className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${selectedGrades.includes(grade) ? 'bg-[#3498db] text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>{grade}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#3498db] text-white">
                  <th className="p-4 font-bold uppercase tracking-wider border-r border-white/20">Topic</th>
                  <th className="p-4 font-bold uppercase tracking-wider border-r border-white/20 text-center w-24">Grade</th>
                  <th className="p-4 font-bold uppercase tracking-wider border-r border-white/20 text-center w-40">Video Explanation</th>
                  <th className="p-4 font-bold uppercase tracking-wider border-r border-white/20 text-center w-32">Exam Questions</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-center w-32">Solutions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTopics.map((topic, index) => (
                  <tr key={index} className={`border-b border-gray-100 hover:bg-blue-50/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                    <td className="p-4 border-r border-[#3498db]/20 font-bold text-[#2c3e50]">{topic.name}</td>
                    <td className="p-4 border-r border-[#3498db]/20 text-center">
                      <span className="inline-block px-3 py-1 rounded-md text-sm font-black bg-blue-100 text-blue-700">{topic.grade}</span>
                    </td>
                    <td className="p-4 border-r border-[#3498db]/20 text-center">
                      <a href={topic.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform">
                        <img src="https://static.wixstatic.com/media/9f3fb0_134b96c2706f423fae833562af058b88~mv2.png/v1/fit/w_157,h_50/9f3fb0_134b96c2706f423fae833562af058b88~mv2.png" alt="Video" className="h-8 w-auto" referrerPolicy="no-referrer" />
                      </a>
                    </td>
                    <td className="p-4 border-r border-[#3498db]/20 text-center">
                      <button className="bg-gray-400 text-white p-2 rounded cursor-not-allowed inline-flex flex-col items-center"><FileText className="w-6 h-6" /><span className="text-[8px] font-bold">PDF</span></button>
                    </td>
                    <td className="p-4 text-center">
                      <button className="bg-gray-400 text-white p-2 rounded cursor-not-allowed inline-flex flex-col items-center"><FileText className="w-6 h-6" /><span className="text-[8px] font-bold">PDF</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
