/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  Database, 
  Github, 
  RefreshCw, 
  ArrowLeft,
  FileJson,
  CheckCircle2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import * as topics from '../data/topics';

export default function AdminDashboard({ onBack }: { onBack: () => void }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'data' | 'cicd'>('overview');

  const resourceStats = [
    { name: 'GCSE Maths', count: 120 }, // Estimated from JSON
    { name: 'KS3 Assessments', count: 45 },
    { name: 'KS2 Past Papers', count: 30 },
    { name: 'GCSE Past Papers', count: 25 },
  ];

  const totalResources = resourceStats.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#2c3e50] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-2">
              <LayoutDashboard className="w-6 h-6 text-blue-400" />
              <h1 className="text-xl font-bold tracking-wider uppercase">Admin Dashboard</h1>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold bg-green-500/20 text-green-400 px-3 py-1 rounded-full border border-green-500/30">
            <RefreshCw className="w-3 h-3 animate-spin" />
            LIVE SYNC ACTIVE
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex gap-4 mb-12">
          {[
            { id: 'overview', label: 'Overview', icon: LayoutDashboard },
            { id: 'data', label: 'Data Manager', icon: Database },
            { id: 'cicd', label: 'CI/CD Config', icon: Github }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === tab.id 
                  ? 'bg-[#2c3e50] text-white shadow-lg scale-105' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Total Resources</p>
                <p className="text-5xl font-black text-[#2c3e50]">{totalResources}</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">Active Subjects</p>
                <p className="text-5xl font-black text-blue-600">6</p>
              </div>
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-2">System Status</p>
                <div className="flex items-center gap-2 text-green-600 text-3xl font-black">
                  <CheckCircle2 className="w-8 h-8" />
                  HEALTHY
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h3 className="font-bold text-gray-700 uppercase tracking-wider">Resource Distribution</h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {resourceStats.map((stat, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <span className="text-gray-600 font-medium">{stat.name}</span>
                      <div className="flex items-center gap-4 flex-1 mx-8">
                        <div className="h-2 bg-gray-100 rounded-full flex-1 overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: `${(stat.count / totalResources) * 100}%` }}
                            className="h-full bg-blue-500"
                          />
                        </div>
                        <span className="text-gray-400 text-xs font-bold w-8">{stat.count}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl flex gap-4">
              <AlertCircle className="w-6 h-6 text-blue-600 shrink-0" />
              <div>
                <h4 className="font-bold text-blue-900 mb-1 uppercase text-sm">GitOps Workflow</h4>
                <p className="text-blue-700 text-sm">
                  This project uses a GitOps approach. To update resources, modify the JSON files in your GitHub repository. 
                  The CI/CD pipeline will automatically rebuild and deploy the changes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-gray-800 uppercase tracking-wider flex items-center gap-2">
                    <FileJson className="w-5 h-5 text-orange-500" />
                    Export Current Data
                  </h3>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Copy this JSON to update your <code>src/data/resources.json</code> file.
                </p>
                <div className="bg-gray-900 rounded-xl p-4 overflow-x-auto">
                  <pre className="text-green-400 text-xs font-mono">
                    {JSON.stringify(topics, null, 2).substring(0, 500)}...
                  </pre>
                </div>
                <button className="w-full mt-6 bg-gray-800 text-white py-3 rounded-xl font-bold text-sm hover:bg-gray-700 transition-colors">
                  Copy Full JSON
                </button>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-800 uppercase tracking-wider mb-6 flex items-center gap-2">
                  <RefreshCw className="w-5 h-5 text-blue-500" />
                  Update Instructions
                </h3>
                <ul className="space-y-4 text-sm text-gray-600">
                  <li className="flex gap-3">
                    <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0">1</span>
                    <span>Navigate to your GitHub repository.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0">2</span>
                    <span>Edit the files in <code>src/data/</code>.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0">3</span>
                    <span>Commit and push your changes.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="bg-blue-100 text-blue-600 w-6 h-6 rounded-full flex items-center justify-center font-bold shrink-0">4</span>
                    <span>Wait ~2 minutes for the CI/CD pipeline to deploy.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'cicd' && (
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="font-bold text-gray-800 uppercase tracking-wider mb-8 flex items-center gap-2">
              <Github className="w-6 h-6" />
              GitHub Actions Configuration
            </h3>
            
            <div className="space-y-8">
              <section>
                <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">Recommended Repo Structure</h4>
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 font-mono text-sm text-gray-700">
                  <pre>{`practicehub-auto/
├── .github/workflows/deploy.yml
├── public/
├── src/
│   ├── components/
│   ├── data/
│   │   ├── gcse_edexcel_maths.json
│   │   └── ks3_assessments.json
│   ├── pages/
│   └── App.tsx
├── package.json
└── vite.config.ts`}</pre>
                </div>
              </section>

              <section>
                <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-4">GitHub Action (deploy.yml)</h4>
                <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
                  <pre className="text-blue-300 text-xs font-mono">
{`name: Deploy to Production
on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install Dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Deploy to Cloud Run
        uses: google-github-actions/deploy-cloudrun@v1
        with:
          service: practice-hub
          region: europe-west2
          source: .`}
                  </pre>
                </div>
              </section>

              <div className="flex justify-center">
                <a 
                  href="https://github.com/features/actions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                  Learn more about GitHub Actions
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
