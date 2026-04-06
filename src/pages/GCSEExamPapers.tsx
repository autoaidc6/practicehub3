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

const GCSE_SUBJECTS: SubjectPapers[] = [
  {
    subject: "Maths",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/mathematics/gcse/mathematics-8300/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/mathematics-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/gcse/mathematics-j560-from-2015/assessment/" }
    ]
  },
  {
    subject: "English Language",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/english/gcse/english-language-8700/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-language-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/gcse/english-language-j351-from-2015/assessment/" }
    ]
  },
  {
    subject: "English Literature",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/english/gcse/english-literature-8702/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/english-literature-2015.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/gcse/english-literature-j352-from-2015/assessment/" }
    ]
  },
  {
    subject: "Combined Science",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/science/gcse/combined-science-trilogy-8464/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/sciences-2016.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/gcse/gateway-science-suite-combined-science-a-j250-from-2016/assessment/" }
    ]
  },
  {
    subject: "Computer Science",
    boards: [
      { name: "AQA", url: "https://www.aqa.org.uk/subjects/computer-science-and-it/gcse/computer-science-8525/past-papers-and-mark-schemes" },
      { name: "Edexcel", url: "https://qualifications.pearson.com/en/qualifications/edexcel-gcses/computer-science-2020.coursematerials.html#filterQuery=category:Pearson-UK:Category%2FSpecification-and-sample-assessments" },
      { name: "OCR", url: "https://www.ocr.org.uk/qualifications/gcse/computer-science-j277-from-2020/assessment/" }
    ]
  }
];

export default function GCSEExamPapers({ 
  onBack, 
  onEdexcelClick 
}: { 
  onBack: () => void;
  onEdexcelClick?: (subject: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSubjects = GCSE_SUBJECTS.filter(s => 
    s.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#3498db] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-wider uppercase">GCSE Exam Papers</h1>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-[#3498db] mb-4 tracking-tight uppercase">GCSE Past Papers & Mark Schemes</h2>
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
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-full shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-medium"
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
              <div className="bg-[#4b2c7d] px-6 py-4">
                <h3 className="text-white font-bold text-xl">{item.subject}</h3>
              </div>
              <div className="p-6 space-y-4 flex-grow">
                <p className="text-sm text-gray-500 font-medium mb-4 uppercase tracking-wider">Select Exam Board:</p>
                <div className="grid grid-cols-1 gap-3">
                  {item.boards.map((board, bIdx) => {
                    const isInternal = board.name === "Edexcel" && (item.subject === "Maths" || item.subject === "Combined Science");
                    
                    return (
                      <button
                        key={bIdx}
                        onClick={() => {
                          if (isInternal) {
                            onEdexcelClick?.(item.subject);
                          } else {
                            window.open(board.url, '_blank', 'noopener,noreferrer');
                          }
                        }}
                        className="w-full flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:bg-purple-50 hover:border-purple-200 transition-all group text-left"
                      >
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 p-2 rounded-lg group-hover:bg-purple-200 transition-colors">
                            <FileText className="w-5 h-5 text-[#4b2c7d]" />
                          </div>
                          <span className="font-bold text-gray-700">{board.name}</span>
                        </div>
                        {isInternal ? (
                          <span className="text-[10px] font-black text-purple-600 uppercase tracking-widest bg-purple-100 px-2 py-1 rounded">View Papers</span>
                        ) : (
                          <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-[#4b2c7d] transition-colors" />
                        )}
                      </button>
                    );
                  })}
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
