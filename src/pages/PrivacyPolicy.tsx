/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#3498db] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-wider uppercase">Privacy Policy</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-black text-[#3498db] mb-8 uppercase tracking-tight">Privacy Policy</h2>
          
          <div className="prose prose-blue max-w-none space-y-6 text-gray-600 font-medium leading-relaxed">
            <p>
              At PracticeHub, we are committed to protecting your privacy. This Privacy Policy describes how we 
              collect, use, and share information when you use our website.
            </p>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">1. Information We Collect</h3>
              <p>
                We may collect certain information about you when you use our website, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Usage data (e.g., pages visited, time spent on the site);</li>
                <li>Device information (e.g., browser type, operating system); and</li>
                <li>Contact information (e.g., email address if you contact us).</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">2. How We Use Your Information</h3>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our website;</li>
                <li>Improve and personalize your experience;</li>
                <li>Communicate with you; and</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">3. Sharing Your Information</h3>
              <p>
                We do not sell your personal information to third parties. We may share your information with 
                third-party service providers who help us operate our website, or when required by law.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">4. Data Security</h3>
              <p>
                We take reasonable measures to protect your information from unauthorized access, use, or 
                disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">5. Your Choices</h3>
              <p>
                You can choose not to provide certain information, but this may limit your ability to use 
                certain features of our website. You can also opt-out of receiving certain communications 
                from us.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">6. Changes to This Policy</h3>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by 
                posting the new Privacy Policy on this page.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">7. Contact Us</h3>
              <p>
                If you have any questions about this Privacy Policy, please contact us at 
                <a href="mailto:support@practicehub.com" className="text-[#3498db] hover:underline ml-1">support@practicehub.com</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
