'use client';
import React from 'react';
import Link from 'next/link';

export default function Services() {
  const serviceItems = [
    { id: 'custom-software', title: 'Custom Software Development', description: 'Tailored software that automates your workflow and solves unique business challenges.', icon: '⚙️', link: '/services#custom-software' },
    { id: 'e-commerce', title: 'E-commerce Solutions', description: 'End-to-end online stores with seamless checkout and integrations.', icon: '🛒', link: '/services#ecommerce' },
    { id: 'social-media', title: 'Social Media Management', description: 'Strategy, content creation, and analytics - we manage your brand.', icon: '📱', link: '/services#social-media' },
    { id: 'graphic-design', title: 'Graphic Design', description: 'Marketing collateral and UI assets that stop thumbs and communicate.', icon: '🎨', link: '/services#graphic-design' },
    { id: 'product-management', title: 'Product Management', description: 'Roadmaps and user research to deliver products your customers love.', icon: '📦', link: '/services#product-management' },
    { id: 'brand-design', title: 'Brand Design', description: 'Complete brand identities, typography, and guidelines.', icon: '✨', link: '/services#brand-design' },
    { id: 'Resume', title: 'Resume Writing', description: 'Professional resume writing services to stand out in the job market.', icon: '📝', link: '/services#resume' }
  ];

  return (
    <section className="py-24 bg-white dark:bg-obsidian transition-colors duration-500 relative z-10 overflow-hidden" id="services">
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Ambient Gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-emerald/5 blur-[160px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[90rem] relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700/50 bg-gray-50 dark:bg-[#111111]/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 font-bold text-[10px] tracking-widest mb-6 uppercase shadow-sm">
            <span className="text-emerald font-black text-sm leading-none">&gt;</span> OUR SERVICES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-obsidian dark:text-white leading-tight tracking-tight max-w-3xl">
            Everything you need to <span className="text-emerald">dominate online</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-6 max-w-xl text-lg">
            Comprehensive digital solutions designed to elevate your brand and drive growth.
          </p>
        </div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Featured Card */}
          <div className="animate-fade-in-up group relative p-10 rounded-[2rem] bg-gray-50 dark:bg-[#111111]/80 border border-gray-200 dark:border-white/5 hover:border-emerald/50 transition-all duration-300 flex flex-col lg:row-span-2 hover:scale-[1.02]">
            <h3 className="text-2xl font-bold text-obsidian dark:text-white mb-4">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
              Blazing fast, SEO-optimised, pixel-perfect websites that scale.
            </p>
            <ul className="space-y-4 mb-10 flex-grow">
              {['Landing Pages', 'Web Applications', 'CMS Integration', 'SEO Optimisation'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                  <span className="text-emerald">→</span> {item}
                </li>
              ))}
            </ul>
            <Link href="/services#web-development" className="text-sm font-bold text-emerald hover:text-emerald-dark transition-colors">Learn more →</Link>
          </div>

          {/* Standard Cards */}
          {serviceItems.map((service, index) => (
            <div 
              key={service.id} 
              className="animate-fade-in-up group relative p-8 rounded-[2rem] bg-gray-50 dark:bg-[#111111]/80 border border-gray-200 dark:border-white/5 hover:border-emerald/50 transition-all duration-300 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-obsidian dark:text-white mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <Link href={service.link} className="text-sm font-bold text-emerald hover:text-emerald-dark transition-colors">Learn more →</Link>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-20 border-t border-gray-200 dark:border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-12 bg-gray-50/50 dark:bg-emerald/5 rounded-[2rem]">
          {[ {num: '245+', label: 'Projects'}, {num: '97%', label: 'Satisfaction'}, {num: '8+', label: 'Years'}, {num: '15+', label: 'Experts'} ].map((stat) => (
            <div key={stat.label}>
              <h4 className="text-4xl font-black text-emerald mb-1">{stat.num}</h4>
              <p className="text-obsidian dark:text-white font-bold text-xs uppercase">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Gradient Divider */}
      <div className="relative mt-24 h-px w-full bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
    </section>
  );
}