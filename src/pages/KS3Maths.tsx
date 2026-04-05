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

interface Topic {
  name: string;
  videoUrl?: string;
  questionsUrl?: string;
  solutionsUrl?: string;
  grade: string;
}

const TOPICS: Topic[] = [
  { 
    name: "Number: Place Value", 
    grade: "Year 7", 
    videoUrl: "#",
    questionsUrl: "#",
    solutionsUrl: "#"
  },
  { 
    name: "Algebra: Simplifying Expressions", 
    grade: "Year 7", 
    videoUrl: "#",
    questionsUrl: "#",
    solutionsUrl: "#"
  },
  { 
    name: "Geometry: Angles in Triangles", 
    grade: "Year 8", 
    videoUrl: "#",
    questionsUrl: "#",
    solutionsUrl: "#"
  },
  { 
    name: "Ratio: Sharing in a Ratio", 
    grade: "Year 8", 
    videoUrl: "#",
    questionsUrl: "#",
    solutionsUrl: "#"
  },
  { 
    name: "Algebra: Solving Linear Equations", 
    grade: "Year 9", 
    videoUrl: "#",
    questionsUrl: "#",
    solutionsUrl: "#"
  },
  { 
    name: "Number: Standard Form", 
    grade: "Year 9", 
    videoUrl: "#",
    questionsUrl: "#",
    solutionsUrl: "#"
  },
  { 
    name: "Statistics: Probability Trees", 
    grade: "Year 9", 
    videoUrl: "#",
    questionsUrl: "#",
    solutionsUrl: "#"
  }
];

export default function KS3Maths({ onBack }: { onBack: () => void }) {
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

  const grades = ["Year 9", "Year 8", "Year 7"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-[#3498db] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button 
            onClick={onBack}
            className="hover:bg-white/10 p-2 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-wider uppercase">KS3 Maths Revision</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#3498db] mb-4 tracking-tight">
            KS3 MATHS REVISION
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Essential KS3 Maths topics for Year 7, 8, and 9 students.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text"
                placeholder="Search topics..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3498db]/20 focus:border-[#3498db] transition-all"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="text-sm font-bold text-gray-400 uppercase tracking-wider mr-2 self-center">Filter by Year:</span>
              {grades.map(grade => (
                <button
                  key={grade}
                  onClick={() => toggleGrade(grade)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold transition-all ${
                    selectedGrades.includes(grade)
                      ? 'bg-[#3498db] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Topics Table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#3498db] text-white">
                  <th className="p-4 font-bold uppercase tracking-wider border-r border-white/20">Topic</th>
                  <th className="p-4 font-bold uppercase tracking-wider border-r border-white/20 text-center w-24">Year</th>
                  <th className="p-4 font-bold uppercase tracking-wider border-r border-white/20 text-center w-40">Video Explanation</th>
                  <th className="p-4 font-bold uppercase tracking-wider border-r border-white/20 text-center w-32">Exam Questions</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-center w-32">Solutions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTopics.map((topic, index) => (
                  <tr 
                    key={index}
                    className={`border-b border-gray-100 hover:bg-blue-50/30 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                  >
                    <td className="p-4 border-r border-[#3498db]/20 font-bold text-[#2c3e50]">
                      {topic.name}
                    </td>
                    <td className="p-4 border-r border-[#3498db]/20 text-center">
                      <span className={`inline-block px-3 py-1 rounded-md text-sm font-black ${
                        topic.grade === 'Year 9' ? 'bg-red-100 text-red-700' : 
                        topic.grade === 'Year 8' ? 'bg-green-100 text-green-700' : 
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {topic.grade}
                      </span>
                    </td>
                    <td className="p-4 border-r border-[#3498db]/20 text-center">
                      <a 
                        href={topic.videoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block hover:scale-105 transition-transform"
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
                      {topic.questionsUrl && topic.questionsUrl !== "#" ? (
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
                    <td className="p-4 text-center">
                      {topic.solutionsUrl && topic.solutionsUrl !== "#" ? (
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
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredTopics.length === 0 && (
            <div className="p-12 text-center text-gray-500 font-medium">
              No topics found matching your search.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
