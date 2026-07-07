'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  // Separate state for individual legal items
  const [openLegal, setOpenLegal] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const FooterColumn = ({ title, children, id }: { title: string, children: React.ReactNode, id: string }) => (
    <div className="border-b border-white/5 md:border-0 pb-4 md:pb-0">
      <button onClick={() => toggleSection(id)} className="flex justify-between items-center w-full md:cursor-default">
        <h4 className="text-white font-bold mb-0 md:mb-6">{title}</h4>
        <span className="md:hidden text-[#10B981]">{openSection === id ? '−' : '+'}</span>
      </button>
      <div className={`${openSection === id ? 'block' : 'hidden'} md:block pt-4 md:pt-0`}>
        <ul className="space-y-4 text-gray-500 text-sm">{children}</ul>
      </div>
    </div>
  );

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 mb-8 md:mb-0">
            <h3 className="text-white font-bold mb-6">Geministudio</h3>
            <p className="text-gray-500 text-sm leading-relaxed">Your trusted partner for digital transformation and growth.</p>
          </div>
          
          <FooterColumn title="Company" id="company">
            <li><Link href="#about" className="hover:text-[#10B981]">About Us</Link></li>
            <li><Link href="#services" className="hover:text-[#10B981]">Services</Link></li>
            <li><Link href="#work" className="hover:text-[#10B981]">Portfolio</Link></li>
          </FooterColumn>

          <FooterColumn title="Services" id="services">
            <li>Web Development</li><li>UI/UX Design</li><li>Social Media Management</li>
            <li>Custom Software</li><li>Branding & Identity</li><li>Resume Writing</li>
          </FooterColumn>

          {/* New Interactive Legal Section */}
          <div className="border-b border-white/5 md:border-0 pb-4 md:pb-0">
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-gray-500 text-sm">
              {[
                { id: 'privacy', title: 'Privacy Policy', content: 'We value your privacy. Geministudio collects only necessary information to provide our services. We do not sell or share your data with third parties except as required for service delivery or by law.' },
                { id: 'terms', title: 'Terms of Service', content: 'By using Geministudio services, you agree to our terms: all content and services are provided as-is. Payment terms, project timelines, and deliverables are agreed upon before project start.' },
                { id: 'cookie', title: 'Cookie Policy', content: 'Geministudio uses cookies to improve website experience and analyze traffic. You may disable cookies in your browser settings, but some features may not work as intended.' }
              ].map((item) => (
                <li key={item.id}>
                  <button onClick={() => setOpenLegal(openLegal === item.id ? null : item.id)} className="hover:text-[#10B981] transition-colors w-full text-left">
                    {item.title}
                  </button>
                  {openLegal === item.id && (
                    <div className="mt-2 p-4 bg-[#111] rounded-lg text-xs text-gray-400 border border-white/5">
                      {item.content}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-gray-600 text-xs text-center">
          <p>© 2026 Geministudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}