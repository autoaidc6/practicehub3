/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Search,
  ArrowLeft
} from 'lucide-react';

import topicsData from '../data/gcse_edexcel_maths.json';

interface Topic {
  name: string;
  videoUrl?: string;
  questionsUrl?: string;
  solutionsUrl?: string;
  grade: string;
}

const TOPICS: Topic[] = topicsData;

export default function GCSEEdexcel({ onBack }: { onBack: () => void }) {
  const [search, setSearch] = useState("");
  const [selectedGrades, setSelectedGrades] = useState<string[]>([]);

  const filteredTopics = TOPICS.filter(topic => {
    const matchesSearch = topic.name.toLowerCase().includes(search.toLowerCase());
    const matchesGrade = selectedGrades.length === 0 || selectedGrades.includes(topic.grade);
    return matchesSearch && matchesGrade;
  });

  const toggleGrade = (grade: string) => {
    setSelectedGrades(prev => 
      prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]
    );
  };

  const grades = ["8+", "7", "6", "5", "4", "3", "2", "1"];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Navigation */}
      <div className="bg-[#3498db] p-4 flex items-center gap-4 text-white">
        <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">GCSE Revision (Edexcel)</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Booklet Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a 
            href="https://www.1stclassmaths.com/_files/ugd/9f3fb0_7f4e332e9ee34e54bc4d1810ec108e2d.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#3498db] text-white p-6 rounded-lg shadow-lg hover:bg-[#2980b9] transition-all group"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold">The Ultimate Foundation</h2>
              <p className="text-xl">Revision Booklet</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent group-hover:translate-x-2 transition-transform" />
              <div className="bg-red-600 p-3 rounded flex flex-col items-center">
                <FileText className="w-8 h-8" />
                <span className="text-[10px] font-bold">PDF</span>
              </div>
            </div>
          </a>

          <a 
            href="https://www.1stclassmaths.com/_files/ugd/9f3fb0_7c9b3f07eb934c26bc9fee56346be737.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-[#3498db] text-white p-6 rounded-lg shadow-lg hover:bg-[#2980b9] transition-all group"
          >
            <div className="text-left">
              <h2 className="text-2xl font-bold">The Ultimate Higher</h2>
              <p className="text-xl">Revision Booklet</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-0 h-0 border-t-[15px] border-t-transparent border-l-[25px] border-l-white border-b-[15px] border-b-transparent group-hover:translate-x-2 transition-transform" />
              <div className="bg-red-600 p-3 rounded flex flex-col items-center">
                <FileText className="w-8 h-8" />
                <span className="text-[10px] font-bold">PDF</span>
              </div>
            </div>
          </a>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input 
              type="text"
              placeholder="Search for topics here..."
              className="w-full pl-10 pr-4 py-3 border-2 border-[#3498db] rounded focus:outline-none focus:ring-2 focus:ring-[#3498db]/20"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#3498db] font-bold text-sm">Filter by Grade</span>
            <div className="flex flex-wrap gap-2">
              {grades.map(grade => (
                <button
                  key={grade}
                  onClick={() => toggleGrade(grade)}
                  className={`w-8 h-8 flex items-center justify-center rounded text-white font-bold text-sm transition-all ${
                    selectedGrades.includes(grade) ? 'bg-[#2980b9] scale-110' : 'bg-[#3498db] hover:bg-[#2980b9]'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Topics Table */}
        <div className="overflow-x-auto border border-[#3498db] rounded">
          <table className="w-full text-left border-collapse">
            <thead className="bg-[#3498db] text-white">
              <tr>
                <th className="p-4 border-r border-white/20">Topic</th>
                <th className="p-4 border-r border-white/20 text-center">Video Explanation</th>
                <th className="p-4 border-r border-white/20 text-center">Exam Questions</th>
                <th className="p-4 border-r border-white/20 text-center">Solutions</th>
                <th className="p-4 text-center">Grade</th>
              </tr>
            </thead>
            <tbody>
              {filteredTopics.map((topic, idx) => (
                <tr key={idx} className="border-b border-[#3498db]/20 hover:bg-blue-50 transition-colors">
                  <td className="p-4 border-r border-[#3498db]/20 font-bold text-[#3498db]">{topic.name}</td>
                  <td className="p-4 border-r border-[#3498db]/20 text-center">
                    <a 
                      href={topic.videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-transform inline-block"
                    >
                      <img 
                        src="https://static.wixstatic.com/media/9f3fb0_134b96c2706f423fae833562af058b88~mv2.png/v1/fit/w_157,h_50/9f3fb0_134b96c2706f423fae833562af058b88~mv2.png" 
                        alt="Video Explanation" 
                        className="h-8 w-auto"
                        referrerPolicy="no-referrer"
                      />
                    </a>
                  </td>
                  <td className="p-4 border-r border-[#3498db]/20 text-center">
                    {topic.questionsUrl ? (
                      <a 
                        href={topic.questionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white p-2 rounded hover:scale-110 transition-transform inline-flex flex-col items-center"
                      >
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-bold">PDF</span>
                      </a>
                    ) : (
                      <button className="bg-gray-400 text-white p-2 rounded cursor-not-allowed inline-flex flex-col items-center">
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-bold">PDF</span>
                      </button>
                    )}
                  </td>
                  <td className="p-4 border-r border-[#3498db]/20 text-center">
                    {topic.solutionsUrl ? (
                      <a 
                        href={topic.solutionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 text-white p-2 rounded hover:scale-110 transition-transform inline-flex flex-col items-center"
                      >
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-bold">PDF</span>
                      </a>
                    ) : (
                      <button className="bg-gray-400 text-white p-2 rounded cursor-not-allowed inline-flex flex-col items-center">
                        <FileText className="w-6 h-6" />
                        <span className="text-[8px] font-bold">PDF</span>
                      </button>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    <div className="inline-block border-4 border-black p-1 font-bold text-2xl leading-none">
                      {topic.grade}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
