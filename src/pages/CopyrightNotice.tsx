/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowLeft } from 'lucide-react';

export default function CopyrightNotice({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-[#3498db] text-white p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center gap-4">
          <button onClick={onBack} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold tracking-wider uppercase">Copyright Notice</h1>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
          <h2 className="text-3xl font-black text-[#3498db] mb-8 uppercase tracking-tight">Copyright Notice</h2>
          
          <div className="prose prose-blue max-w-none space-y-6 text-gray-600 font-medium leading-relaxed">
            <p>
              All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, 
              data compilations, and software, is the property of PracticeHub or its content suppliers and protected by 
              international copyright laws.
            </p>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">1. Ownership of Copyright</h3>
              <p>
                The copyright in this website and the material on this website (including without limitation the text, 
                computer code, artwork, photographs, images, music, audio material, video material and audio-visual 
                material on this website) is owned by PracticeHub and its licensors.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">2. Copyright License</h3>
              <p>
                PracticeHub grants to you a worldwide non-exclusive royalty-free revocable license to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>view this website and the material on this website on a computer or mobile device via a web browser;</li>
                <li>copy and store this website and the material on this website in your web browser cache memory; and</li>
                <li>print pages from this website for your own personal and non-commercial use.</li>
              </ul>
              <p>
                PracticeHub does not grant you any other rights in relation to this website or the material on this website. 
                In other words, all other rights are reserved.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">3. Data Mining</h3>
              <p>
                The automated and/or systematic collection of data from this website is prohibited.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">4. Permissions</h3>
              <p>
                You may request permission to use the copyright materials on this website by writing to 
                <a href="mailto:support@practicehub.com" className="text-[#3498db] hover:underline ml-1">support@practicehub.com</a>.
              </p>
            </section>

            <section className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 uppercase tracking-wide">5. Enforcement of Copyright</h3>
              <p>
                PracticeHub takes the protection of its copyright very seriously. If PracticeHub discovers that you have 
                used its copyright materials in contravention of the license above, PracticeHub may bring legal 
                proceedings against you seeking monetary damages and an injunction to stop you using those materials. 
                You could also be ordered to pay legal costs.
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
