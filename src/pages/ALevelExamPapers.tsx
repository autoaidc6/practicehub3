/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  ArrowLeft,
  ExternalLink,
  Search
} from 'lucide-react';

interface ExamBoard {
  name: string;
  url: string;
}

interface SubjectPapers {
  subject: string;
  boards: ExamBoard[];
}

const ALEVEL_SUBJECTS: SubjectPapers[] = [
  {
    subject: "Maths",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/mathematics/as-and-a-level/mathematics-7357/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/mathematics-2017.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/mathematics-a-h230-h240-from-2017/assessment/" }
    ]
  },
  {
    subject: "Biology",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/science/as-and-a-level/biology-7401-7402/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/biology-a-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/biology-a-h020-h420-from-2015/assessment/" }
    ]
  },
  {
    subject: "Chemistry",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/science/as-and-a-level/chemistry-7404-7405/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/chemistry-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/chemistry-a-h032-h432-from-2015/assessment/" }
    ]
  },
  {
    subject: "Physics",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/science/as-and-a-level/physics-7407-7408/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/physics-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/physics-a-h156-h556-from-2015/assessment/" }
    ]
  },
  {
    subject: "English Language",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/english/as-and-a-level/english-language-7701-7702/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/english-language-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/english-language-h070-h470-from-2015/assessment/" }
    ]
  },
  {
    subject: "English Literature",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/english/as-and-a-level/english-literature-a-7711-7712/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/english-literature-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/english-literature-h072-h472-from-2015/assessment/" }
    ]
  },
  {
    subject: "Computer Science",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/computer-science-and-it/as-and-a-level/computer-science-7516-7517/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-a-levels/computer-science-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/as-and-a-level/computer-science-h046-h446-from-2015/assessment/" }
    ]
  }
];

export default function ALevelExamPapers({ onBack }: { onBack: () => void }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = ALEVEL_SUBJECTS.filter(s => 
    s.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#48b38d] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-wider uppercase">A-Level Exam Papers</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#48b38d] mb-4 tracking-tight uppercase">A-Level Past Papers & Mark Schemes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-medium">
            Find official past papers and mark schemes from AQA, Edexcel, and OCR.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-12 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search subjects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all font-medium"
          />
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSubjects.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
            >
              <div className="bg-[#48b38d] px-6 py-4">
                <h3 className="text-white font-bold text-xl">{item.subject}</h3>
              </div>
              <div className="p-6 space-y-4 flex-grow">
                <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">Select Exam Board:</p>
                <div className="grid grid-cols-1 gap-3">
                  {item.boards.map((board, bIdx) => (
                    <a
                      key={bIdx}
                      href={board.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-green-50 hover:border-green-200 transition-all group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
                          <FileText className="w-5 h-5 text-[#48b38d]" />
                        </div>
                        <span className="font-bold text-gray-700">{board.name}</span>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#48b38d] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredSubjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg font-medium">No subjects found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  );
}
