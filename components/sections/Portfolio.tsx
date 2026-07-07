'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['All', 'Web Dev', 'Branding', 'Mobile App', 'Software', 'Resume Writing'];

  const projects = [
    { title: 'Tradesquare', category: 'Software', image: '/tradesquare.png', slug: 'tradesquare', size: 'lg:col-span-1', link: 'https://tradesquare.ng' },
    { title: 'Truist', category: 'Web Dev', image: '/truist.png', slug: 'truist', size: 'lg:col-span-2', link: 'https://truist-fintech.vercel.app/' },
    { title: 'HifzTracker', category: 'Mobile App', image: '/Hifztracker.png', slug: 'hifztracker', size: 'lg:col-span-1', link: 'https://www.optimistcx.space/' },
    { title: 'Optimistluxe', category: 'Branding', image: '/Optimistluxe.png', slug: 'optimistluxe', size: 'lg:col-span-2', link: 'https://optimistluxe.shop' },
    { title: 'ATS Resume', category: 'Resume Writing', image: '/ATS.svg', slug: 'resume', size: 'lg:col-span-1' },
  ];

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section className="py-24 bg-white dark:bg-obsidian transition-colors duration-500 relative z-10" id="work">
      
      {/* Modal Preview Overlay */}
      {previewUrl && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center p-4">
          <button 
            onClick={() => { setPreviewUrl(null); setIsLoading(true); }} 
            className="absolute top-8 right-8 text-white font-bold bg-white/10 px-4 py-2 rounded-full hover:bg-emerald hover:text-black transition-all"
          >
            Close X
          </button>

          {/* Loading State */}
          {isLoading && (
            <div className="absolute flex flex-col items-center text-emerald">
              <div className="w-12 h-12 border-4 border-emerald border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="font-bold tracking-widest text-xs uppercase">Loading Preview...</p>
            </div>
          )}

          {/* Iframe */}
          <iframe 
            src={previewUrl} 
            className={`w-full h-[70vh] rounded-3xl bg-white transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`} 
            title="Preview" 
            onLoad={() => setIsLoading(false)}
          />

          {/* Confidentiality Protocol */}
          <div className="mt-8 text-center max-w-lg">
            <p className="text-emerald font-bold text-sm mb-2">Confidentiality Protocol</p>
            <p className="text-gray-400 text-xs">
              External previews are restricted to protect our client data. 
              Contact us to schedule a guided walkthrough of this project.
            </p>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 md:px-12 max-w-[90rem]">
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-emerald/20 bg-gray-50 dark:bg-emerald/5 text-emerald font-bold text-[10px] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span> OUR WORK
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-obsidian dark:text-white leading-tight">Projects we're proud of</h2>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-bold text-xs transition-all border ${
                activeCategory === cat 
                  ? 'bg-emerald text-black border-emerald' 
                  : 'bg-transparent text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-800 hover:border-emerald'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={idx} className={`relative rounded-[2rem] bg-gray-100 dark:bg-[#111111] border border-gray-200 dark:border-white/5 h-[350px] ${project.size} overflow-hidden group`}>
              <Image src={project.image} alt={project.title} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                <span className="text-emerald font-bold text-[10px] uppercase tracking-widest">{project.category}</span>
                <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <button onClick={() => setPreviewUrl(project.link!)} className="px-4 py-2 bg-emerald text-black rounded-full text-[10px] font-bold">
                      LIVE PREVIEW
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}