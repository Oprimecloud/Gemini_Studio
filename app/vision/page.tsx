'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function VisionPage() {
  return (
    <div className="bg-white dark:bg-obsidian min-h-screen transition-colors duration-500">
      <Navbar />
      
      <main className="container mx-auto px-6 md:px-12 max-w-[90rem] pt-32 pb-24">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex mb-12 text-sm text-gray-500 dark:text-gray-400" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><Link href="/" className="hover:text-emerald transition-colors">Home</Link></li>
            <li><span className="mx-2">/</span></li>
            <li className="text-emerald font-bold">Vision</li>
          </ol>
        </nav>

        {/* Vision Header */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-32"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald/20 bg-emerald/5 text-emerald font-bold text-[10px] tracking-widest uppercase mb-8">
            <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span> OUR VISION
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-obsidian dark:text-white mb-10 leading-tight">
            Redefining the <span className="text-emerald">relationship</span> <br /> between tech and business.
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            Geministudio was built on the premise that digital assets should not just be "built"—they should be engineered to act as the primary growth engine for your organization. We move beyond standard development to build partners in your success.
          </p>
        </motion.section>

        {/* The Three Pillars */}
        <section className="grid md:grid-cols-3 gap-8 mb-32">
          {[
            { title: 'Technical Excellence', desc: 'Modern, high-performance architecture built for scale.' },
            { title: 'Strategic Growth', desc: 'Data-informed decisions that move the needle on revenue.' },
            { title: 'True Partnership', desc: 'We integrate with your team, not just your task list.' }
          ].map((pillar, i) => (
            <div key={i} className="p-8 rounded-[2rem] bg-gray-50 dark:bg-[#111111] border border-gray-200 dark:border-white/5">
              <h3 className="text-xl font-bold text-emerald mb-4">{pillar.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{pillar.desc}</p>
            </div>
          ))}
        </section>

       { /* Methodology Teaser */}
<section className="border-t border-gray-200 dark:border-white/10 pt-20">
  <h2 className="text-3xl font-black text-obsidian dark:text-white mb-12">Our Philosophy</h2>
  <div className="grid lg:grid-cols-2 gap-16 items-center">
     <div className="text-gray-600 dark:text-gray-400 space-y-6 text-lg">
        <p>We believe your website should be your hardest-working employee.</p>
        <p>In a world of automated templates, we focus on bespoke digital ecosystems that adapt to your user's behavior. From technical implementation to creative strategy, we ensure your brand doesn't just exist online—it leads.</p>
     </div>
     
     {/* ADDED: 'hidden lg:flex' to hide on mobile, show on large screens */}
     <div className="hidden lg:flex h-[300px] rounded-[2rem] bg-gradient-to-br from-emerald/20 to-transparent items-center justify-center border border-emerald/20">
        <span className="text-emerald font-black text-6xl opacity-20 uppercase tracking-tighter">Vision</span>
     </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
}