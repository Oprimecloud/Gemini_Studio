'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const services = [
  { title: 'Web Development', price: 'From $1,200', desc: 'High-performance websites and web apps.', features: ['Next.js / React', 'SEO Optimization', 'Responsive Design', 'Speed Optimization'] },
  { title: 'Custom Software Development', price: 'Custom Quote', desc: 'Scalable software solutions to automate your workflow.', features: ['API Development', 'Database Arch', 'Cloud Deployment', 'Internal Tools'] },
  { title: 'E-commerce Solutions', price: 'From $1,500', desc: 'Online stores optimized for conversion and sales.', features: ['Payment Gateway', 'Inventory Mgmt', 'Analytics', 'Dashboard'] },
  { title: 'Social Media Management', price: 'From $400/mo', desc: 'Strategy, content creation, and engagement.', features: ['Scheduling', 'Reports', 'Community Mgmt', 'Trend Strategy'] },
  { title: 'Graphic Design', price: 'From $200', desc: 'Visual assets and UI/UX design components.', features: ['Brand Assets', 'Marketing Flyers', 'Web UI', 'Motion Graphics'] },
  { title: 'Product Management', price: 'From $600', desc: 'Roadmaps and user research for successful products.', features: ['Persona Mapping', 'Roadmap Strategy', 'Market Analysis', 'KPI Tracking'] },
  { title: 'Brand Design', price: 'From $500', desc: 'Complete brand identities and guidelines.', features: ['Logo Creation', 'Brand Voice', 'Typography', 'Usage Guides'] },
  { title: 'Resume Writing', price: '$150', desc: 'ATS-optimized resumes to stand out.', features: ['ATS Formatting', 'Keywords', 'Cover Letter', 'Pro Bio'] }
];

export default function ServicesPage() {
  const [search, setSearch] = useState('');

  const filteredServices = services.filter(s => 
    s.title.toLowerCase().includes(search.toLowerCase()) || 
    s.desc.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('show');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.hidden-card').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [search]);

  return (
    <div className="bg-white dark:bg-obsidian min-h-screen transition-colors duration-500">
      <Navbar />
      <style>{`
        .hidden-card { opacity: 0; transform: translateY(50px); transition: all 0.7s ease-out; }
        .hidden-card.show { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="container mx-auto px-6 md:px-12 max-w-[90rem] pt-32 pb-24">
        
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <nav className="text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-emerald">Home</Link> <span className="mx-2">/</span> <span className="text-emerald font-bold">Services</span>
          </nav>
          <input 
            type="text"
            placeholder="Search for a service..."
            className="w-full md:w-72 bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/10 p-3 rounded-full text-obsidian dark:text-white px-6 focus:border-emerald outline-none"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <header className="mb-20 text-center lg:text-left">
          <h1 className="text-5xl md:text-7xl font-black text-obsidian dark:text-white mb-6">
            Our Core <span className="text-emerald">Services</span>
            <p className="text-lg text-gray-600 dark:text-gray-400 mt-4">
              Comprehensive digital solutions designed to elevate your brand and drive growth
            </p>
          </h1>
        </header>

        {/* Results Grid logic */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((s, idx) => (
              <div key={idx} className="hidden-card bg-gray-50 dark:bg-[#111111] p-8 rounded-[2rem] border border-gray-200 dark:border-white/5 hover:border-emerald/50 transition-all group flex flex-col">
                <span className="text-emerald font-bold text-lg mb-4 block">{s.price}</span>
                <h3 className="text-2xl font-bold text-obsidian dark:text-white mb-4">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{s.desc}</p>
                <ul className="mb-8 space-y-3">
                  {s.features.map((f, i) => (
                    <li key={i} className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                      <span className="text-emerald">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="w-full py-4 rounded-xl bg-emerald text-black font-bold text-center hover:bg-emerald-light transition-colors">Book Service</Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-bold text-obsidian dark:text-white mb-4">Service not found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">We couldn't find what you're looking for, but we're ready to help.</p>
            <Link href="/contact" className="px-8 py-4 bg-emerald text-black font-bold rounded-full hover:bg-emerald-light transition-all">
              Contact Us Instead →
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}