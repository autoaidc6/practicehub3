/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import GCSEEdexcel from './pages/GCSEEdexcel';
import KS2SATs from './pages/KS2SATs';
import KS3Maths from './pages/KS3Maths';
import KS2PastPapers from './pages/KS2PastPapers';
import KS3Assessments from './pages/KS3Assessments';
import GCSEExamPapers from './pages/GCSEExamPapers';
import ALevelExamPapers from './pages/ALevelExamPapers';
import GCSEEdexcelPastPapers from './pages/GCSEEdexcelPastPapers';
import AdminDashboard from './pages/AdminDashboard';
import CopyrightNotice from './pages/CopyrightNotice';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RevisionPage from './components/RevisionPage';
import { 
  GCSE_ENGLISH_EDEXCEL_TOPICS,
  GCSE_SCIENCE_EDEXCEL_TOPICS,
  KS3_ENGLISH_TOPICS,
  KS3_SCIENCE_TOPICS,
  KS2_READING_TOPICS,
  KS2_GPS_TOPICS
} from './data/topics';
import { 
  Youtube, 
  Instagram, 
  Twitter, 
  ChevronDown,
  Coffee,
  ExternalLink,
  ArrowLeft
} from 'lucide-react';

// Custom TikTok icon since Lucide doesn't have it
const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-6 h-6"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.81.33-.85.51-1.44 1.43-1.58 2.41-.14.99.13 2.02.74 2.82.71.94 1.81 1.56 2.99 1.61 1.13.04 2.24-.46 2.95-1.34.63-.78.83-1.8.84-2.8.02-2.52-.02-5.04.01-7.56V0h-.01z"/>
  </svg>
);

interface NavItemProps {
  label: string;
  items?: string[];
  onItemClick?: (item: string) => void;
  onLabelClick?: () => void;
}

const NavItem = ({ label, items, onItemClick, onLabelClick }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button 
        onClick={onLabelClick}
        className="flex items-center gap-1 px-4 py-4 text-sm font-bold tracking-wider text-white uppercase hover:bg-white/10 transition-colors"
      >
        {label}
        {items && <ChevronDown className="w-4 h-4" />}
      </button>
      
      <AnimatePresence>
        {items && isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 top-full w-64 bg-[#3498db] shadow-xl z-50 border-t border-white/20"
          >
            {items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => {
                  onItemClick?.(item);
                  setIsOpen(false);
                }}
                className="w-full text-left block px-4 py-3 text-sm font-bold text-white hover:bg-white/20 transition-colors border-b border-white/10 last:border-0"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface CardProps {
  title: string;
  subtitle?: string;
  color: 'purple' | 'black' | 'green' | 'red' | 'blue';
  onClick?: () => void;
}

const Card = ({ title, subtitle, color, onClick }: CardProps) => {
  const colorClasses = {
    purple: 'bg-[#4b2c7d] hover:bg-[#5d3a9b]',
    black: 'bg-black hover:bg-gray-900',
    green: 'bg-[#48b38d] hover:bg-[#56c7a0]',
    red: 'bg-[#f44336] hover:bg-[#ff5252]',
    blue: 'bg-[#3498db] hover:bg-[#4aa3df]'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${colorClasses[color]} w-full p-6 min-h-[120px] flex flex-col items-center justify-center text-center text-white rounded-sm shadow-md transition-all`}
    >
      <span className="text-xl font-bold leading-tight">{title}</span>
      {subtitle && <span className="text-lg font-semibold mt-1">{subtitle}</span>}
    </motion.button>
  );
};

type Page = 
  | 'home' 
  | 'subject-selection' 
  | 'gcse-edexcel-maths' 
  | 'gcse-edexcel-english' 
  | 'gcse-edexcel-science'
  | 'gcse-aqa-maths'
  | 'gcse-aqa-english'
  | 'gcse-aqa-science'
  | 'ks3-maths' 
  | 'ks3-english' 
  | 'ks3-science'
  | 'ks2-maths' 
  | 'ks2-reading' 
  | 'ks2-gps'
  | 'ks2-past-papers'
  | 'ks3-assessments'
  | 'gcse-exam-papers'
  | 'gcse-edexcel-past-papers'
  | 'alevel-exam-papers'
  | 'admin-dashboard'
  | 'copyright-notice'
  | 'privacy-policy';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedStage, setSelectedStage] = useState<{ id: string; name: string } | null>(null);

  const revisionItems = [
    "KS2 SATs Revision",
    "KS3 Revision",
    "GCSE (Edexcel)",
    "GCSE (AQA)",
    "A-Level"
  ];

  const examPaperItems = [
    "KS2 Past Papers",
    "KS3 Assessments",
    "GCSE",
    "A-LEVEL"
  ];

  const handleStageClick = (id: string, name: string) => {
    setSelectedStage({ id, name });
    setCurrentPage('subject-selection');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'gcse-edexcel-maths':
        return <GCSEEdexcel onBack={() => setCurrentPage('subject-selection')} />;
      case 'gcse-edexcel-english':
        return (
          <RevisionPage 
            title="GCSE English (Edexcel)" 
            topics={GCSE_ENGLISH_EDEXCEL_TOPICS} 
            grades={["8+", "7", "6", "5", "4", "3", "2", "1"]} 
            onBack={() => setCurrentPage('subject-selection')} 
          />
        );
      case 'gcse-edexcel-science':
        return (
          <RevisionPage 
            title="GCSE Science (Edexcel)" 
            topics={GCSE_SCIENCE_EDEXCEL_TOPICS} 
            grades={["8+", "7", "6", "5", "4", "3", "2", "1"]} 
            onBack={() => setCurrentPage('subject-selection')} 
          />
        );
      case 'ks3-maths':
        return <KS3Maths onBack={() => setCurrentPage('subject-selection')} />;
      case 'ks3-english':
        return (
          <RevisionPage 
            title="KS3 English" 
            topics={KS3_ENGLISH_TOPICS} 
            grades={["Year 9", "Year 8", "Year 7"]} 
            onBack={() => setCurrentPage('subject-selection')} 
            gradeLabel="Year"
          />
        );
      case 'ks3-science':
        return (
          <RevisionPage 
            title="KS3 Science" 
            topics={KS3_SCIENCE_TOPICS} 
            grades={["Year 9", "Year 8", "Year 7"]} 
            onBack={() => setCurrentPage('subject-selection')} 
            gradeLabel="Year"
          />
        );
      case 'ks2-maths':
        return <KS2SATs onBack={() => setCurrentPage('subject-selection')} />;
      case 'ks2-reading':
        return (
          <RevisionPage 
            title="KS2 Reading" 
            topics={KS2_READING_TOPICS} 
            grades={["Greater Depth", "Expected"]} 
            onBack={() => setCurrentPage('subject-selection')} 
            gradeLabel="Level"
          />
        );
      case 'ks2-gps':
        return (
          <RevisionPage 
            title="KS2 GPS" 
            topics={KS2_GPS_TOPICS} 
            grades={["Greater Depth", "Expected"]} 
            onBack={() => setCurrentPage('subject-selection')} 
            gradeLabel="Level"
          />
        );
      case 'ks2-past-papers':
        return <KS2PastPapers onBack={() => setCurrentPage('home')} />;
      case 'ks3-assessments':
        return <KS3Assessments onBack={() => setCurrentPage('home')} />;
      case 'gcse-exam-papers':
        return (
          <GCSEExamPapers 
            onBack={() => setCurrentPage('home')} 
            onEdexcelClick={(subject) => {
              if (subject === 'Maths' || subject === 'Combined Science') {
                setCurrentPage('gcse-edexcel-past-papers');
              }
            }}
          />
        );
      case 'gcse-edexcel-past-papers':
        return <GCSEEdexcelPastPapers onBack={() => setCurrentPage('gcse-exam-papers')} />;
      case 'admin-dashboard':
        return <AdminDashboard onBack={() => setCurrentPage('home')} />;
      case 'alevel-exam-papers':
        return <ALevelExamPapers onBack={() => setCurrentPage('home')} />;
      case 'copyright-notice':
        return <CopyrightNotice onBack={() => setCurrentPage('home')} />;
      case 'privacy-policy':
        return <PrivacyPolicy onBack={() => setCurrentPage('home')} />;
      default:
        return null;
    }
  };

  if (currentPage !== 'home' && currentPage !== 'subject-selection') {
    return renderPage();
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-[#3498db] sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-center items-center">
          <NavItem 
            label="HOME" 
            onLabelClick={() => setCurrentPage('home')} 
          />
          <NavItem 
            label="REVISION" 
            items={revisionItems} 
            onItemClick={(item) => {
              if (item === "GCSE (Edexcel)") handleStageClick('gcse-edexcel', 'GCSE (Edexcel)');
              if (item === "KS2 SATs Revision") handleStageClick('ks2-sats', 'KS2 SATs');
              if (item === "KS3 Revision") handleStageClick('ks3-maths', 'KS3');
            }}
          />
          <NavItem 
            label="EXAM PAPERS" 
            items={examPaperItems} 
            onItemClick={(item) => {
              if (item === "GCSE") setCurrentPage('gcse-exam-papers');
              if (item === "KS2 Past Papers") setCurrentPage('ks2-past-papers');
              if (item === "KS3 Assessments") setCurrentPage('ks3-assessments');
              if (item === "A-LEVEL") setCurrentPage('alevel-exam-papers');
            }}
          />
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          {currentPage === 'home' ? (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {/* KS2 & KS3 Section */}
              <Card 
                title="KS2 SATs" 
                subtitle="Revision" 
                color="blue" 
                onClick={() => handleStageClick('ks2-sats', 'KS2 SATs')}
              />
              <Card 
                title="KS3" 
                subtitle="Revision" 
                color="blue" 
                onClick={() => handleStageClick('ks3-maths', 'KS3')}
              />
              <Card 
                title="KS2 Past Papers" 
                subtitle="(all years)" 
                color="blue" 
                onClick={() => setCurrentPage('ks2-past-papers')}
              />
              <Card 
                title="KS3 Assessments" 
                subtitle="(all boards)" 
                color="blue" 
                onClick={() => setCurrentPage('ks3-assessments')}
              />

              {/* GCSE Section */}
              <Card 
                title="GCSE Revision" 
                subtitle="(Edexcel)" 
                color="purple" 
                onClick={() => handleStageClick('gcse-edexcel', 'GCSE (Edexcel)')}
              />
              <Card 
                title="GCSE Revision" 
                subtitle="(AQA)" 
                color="purple" 
                onClick={() => handleStageClick('gcse-aqa', 'GCSE (AQA)')}
              />
              <Card 
                title="GCSE Past Papers" 
                subtitle="(all boards)" 
                color="purple" 
                onClick={() => setCurrentPage('gcse-exam-papers')}
              />

              {/* A-Level Section */}
              <Card title="A-Level Revision" color="green" />
              <Card 
                title="A-Level Past Papers" 
                subtitle="(all boards)" 
                color="green" 
                onClick={() => setCurrentPage('alevel-exam-papers')}
              />

              {/* Buy Me a Coffee */}
              <div className="lg:col-start-2 lg:col-span-2 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#ff5f5f] hover:bg-[#ff7a7a] text-white px-6 py-3 rounded-full flex items-center gap-2 font-bold shadow-lg text-lg"
                >
                  <Coffee className="w-6 h-6" />
                  Buy Me a Coffee
                </motion.button>
              </div>
            </motion.div>
          ) : currentPage === 'subject-selection' ? (
            <motion.div
              key="subject-selection"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-8">
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="hover:bg-gray-200 p-2 rounded-full transition-colors"
                >
                  <ArrowLeft className="w-6 h-6 text-gray-600" />
                </button>
                <h2 className="text-3xl font-black text-[#3498db] uppercase tracking-tight">
                  Select Subject for {selectedStage?.name}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {selectedStage?.id === 'ks2-sats' ? (
                  <>
                    <Card title="Maths" color="blue" onClick={() => setCurrentPage('ks2-maths')} />
                    <Card title="Reading" color="red" onClick={() => setCurrentPage('ks2-reading')} />
                    <Card title="GPS" color="green" onClick={() => setCurrentPage('ks2-gps')} />
                  </>
                ) : (
                  <>
                    <Card 
                      title="Maths" 
                      color="blue" 
                      onClick={() => {
                        if (selectedStage?.id === 'gcse-edexcel') setCurrentPage('gcse-edexcel-maths');
                        if (selectedStage?.id === 'gcse-aqa') alert('AQA Maths coming soon!');
                        if (selectedStage?.id === 'ks3-maths') setCurrentPage('ks3-maths');
                      }} 
                    />
                    <Card 
                      title="English" 
                      color="red" 
                      onClick={() => {
                        if (selectedStage?.id === 'gcse-edexcel') setCurrentPage('gcse-edexcel-english');
                        if (selectedStage?.id === 'gcse-aqa') alert('AQA English coming soon!');
                        if (selectedStage?.id === 'ks3-maths') setCurrentPage('ks3-english');
                      }} 
                    />
                    <Card 
                      title="Science" 
                      color="green" 
                      onClick={() => {
                        if (selectedStage?.id === 'gcse-edexcel') setCurrentPage('gcse-edexcel-science');
                        if (selectedStage?.id === 'gcse-aqa') alert('AQA Science coming soon!');
                        if (selectedStage?.id === 'ks3-maths') setCurrentPage('ks3-science');
                      }} 
                    />
                  </>
                )}
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-[#3498db] text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-8">
          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="bg-red-600 p-2 rounded-md hover:scale-110 transition-transform">
              <Youtube className="w-8 h-8" />
            </a>
            <a href="#" className="bg-blue-400 p-2 rounded-md hover:scale-110 transition-transform">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="#" className="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-2 rounded-md hover:scale-110 transition-transform">
              <Instagram className="w-8 h-8" />
            </a>
            <a href="#" className="bg-black p-2 rounded-md hover:scale-110 transition-transform">
              <TikTokIcon />
            </a>
          </div>

          {/* Copyright Info */}
          <div className="text-center space-y-2">
            <p className="font-bold text-sm md:text-base">
              Copyright © 2026 PracticeHub. All rights reserved.
              <span className="mx-2">|</span>
              <button onClick={() => setCurrentPage('copyright-notice')} className="underline hover:text-gray-200">Copyright Notice</button>
              <span className="mx-2">|</span>
              <button onClick={() => setCurrentPage('privacy-policy')} className="underline hover:text-gray-200">Privacy Policy</button>
              <span className="mx-2">|</span>
              <button onClick={() => setCurrentPage('admin-dashboard')} className="underline hover:text-gray-200">Admin</button>
              <span className="mx-2">|</span>
              Contact: <a href="mailto:support@practicehub.com" className="underline hover:text-gray-200">support@practicehub.com</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
