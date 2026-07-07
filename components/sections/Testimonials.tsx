'use client';
import React from 'react';

export default function Testimonials() {
  const testimonials = [
    { name: 'Abba Ibrahim', role: 'Director, HifzTracker', initials: 'AI', text: 'Our Web App revenue grew 180% after launching with this team. They handled design, dev, and social. True partners in every sense.' },
    { name: 'Emmanuel Richard', role: 'CO-Founder, Optimistluxe', initials: 'ER', text: 'Geministudio completely transformed our online presence. Their team is professional, responsive, and delivers results.' },
    { name: 'Ethan Roberts', role: 'Founder, Tradesquare', initials: 'ER', text: 'The brand identity they created was beyond what we imagined. Every element tells our story.' },
    { name: 'Idris Doe', role: 'CEO, Truist', initials: 'ID', text: 'The team at Geministudio is exceptional. They understood our vision and executed flawlessly.' }
  ];

  return (
    <section className="py-24 bg-white dark:bg-obsidian transition-colors duration-500 relative z-10" id="testimonials">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Header Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-emerald/20 bg-gray-50 dark:bg-emerald/5 text-emerald font-bold text-[10px] tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span> TESTIMONIALS
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-obsidian dark:text-white leading-tight">
            What our <span className="text-emerald">clients say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="animate-fade-in-up bg-gray-50 dark:bg-[#111111] p-8 rounded-3xl border border-gray-200 dark:border-white/5 hover:border-emerald/30 transition-all duration-300 hover:scale-[1.02] flex flex-col"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="text-emerald mb-6 text-sm">★★★★★</div>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed italic text-sm md:text-base flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-obsidian flex items-center justify-center text-emerald border border-emerald/20 font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <h4 className="text-obsidian dark:text-white font-bold text-sm">{t.name}</h4>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient Divider */}
      <div className="relative mt-24 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
    </section>
  );
}