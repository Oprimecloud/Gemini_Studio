'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-24 bg-white dark:bg-obsidian transition-colors duration-500 relative z-10 overflow-hidden" id="about">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      {/* Decorative ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 max-w-[90rem] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Text Content */}
          <div className="flex flex-col animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-emerald/20 bg-gray-50 dark:bg-emerald/5 text-emerald font-bold text-[10px] tracking-widest mb-6 uppercase">
              <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span>
              ABOUT GEMINISTUDIO
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-obsidian dark:text-white leading-tight mb-8">
              We don't just build, <br />
              <span className="text-emerald">we partner for growth.</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              Geministudio was born from a passion for bridging the gap between complex technical development and high-converting digital strategy. We believe that your website should be your hardest-working employee.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10">
              Our approach combines data-driven strategies with creative excellence. We don't just build websites or run ads—we partner with you to achieve measurable business results.
            </p>

            <Link 
              href="/vision" 
              className="inline-flex items-center gap-3 text-obsidian dark:text-white font-bold hover:text-emerald transition-colors text-lg"
            >
              Learn more about our vision <span>→</span>
            </Link>
          </div>

          {/* RIGHT: Visual Element */}
          <div className="relative group hidden lg:block animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute -inset-1 bg-gradient-to-tr from-emerald to-emerald-600 rounded-[2rem] opacity-20 blur transition-opacity group-hover:opacity-40"></div>
            <div className="relative bg-gray-100 dark:bg-[#111111] border border-gray-200 dark:border-white/10 rounded-[2rem] p-4">
              <div className="w-full h-[500px] rounded-[1.5rem] bg-gray-200 dark:bg-obsidian-deep flex items-center justify-center overflow-hidden relative">
                <Image 
                  src="/team.JPG" 
                  alt="Team" 
                  fill
                  className="object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Gradient Divider */}
      <div className="relative mt-24 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
    </section>
  );
}