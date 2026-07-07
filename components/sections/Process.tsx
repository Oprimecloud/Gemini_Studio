'use client';
import React from 'react';

export default function Process() {
  const steps = [
    { number: '01', title: 'Discovery & Analysis', desc: 'We dive deep into understanding your business, market, competitors, and goals to create a solid foundation for strategy.' },
    { number: '02', title: 'Strategy & Planning', desc: 'Based on insights, we develop a comprehensive strategy tailored to your specific needs and business objectives.' },
    { number: '03', title: 'Design & Creation', desc: 'Our creative team brings your vision to life with stunning designs and functional implementations.' },
    { number: '04', title: 'Optimization & Growth', desc: 'We continuously monitor, test, and optimize to ensure maximum performance and ROI for your campaigns.' },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-obsidian transition-colors duration-500" id="process">
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
      `}</style>

      {/* Image Background with Adaptive Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-white/90 dark:bg-obsidian/90 transition-colors duration-500"></div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-emerald/20 bg-gray-50 dark:bg-emerald/5 text-emerald font-bold text-[10px] tracking-widest uppercase mb-6">
            <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span> Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-obsidian dark:text-white leading-tight">
            Our proven <span className="text-emerald">4-step</span> delivery process
          </h2>
        </div>

        {/* Process Flow */}
        <div className="relative flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          <div className="hidden lg:block absolute top-7 left-[5%] w-[90%] h-[1px] bg-gray-200 dark:bg-gray-800 z-0"></div>

          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className="animate-fade-in-up flex flex-row lg:flex-col items-center lg:items-center gap-6 lg:gap-8 flex-1 relative z-10"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 rounded-full border-2 border-emerald flex items-center justify-center text-xl font-black text-emerald shrink-0 bg-white dark:bg-obsidian z-10 shadow-lg">
                {step.number}
              </div>

              <div className="text-left lg:text-center">
                <h3 className="text-lg md:text-xl font-bold text-obsidian dark:text-white mb-1">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed max-w-[250px] lg:mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Modern Gradient Divider */}
      <div className="relative mt-24 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
    </section>
  );
}