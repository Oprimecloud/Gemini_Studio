'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: 'How long does a typical project take?', a: 'A standard 5-page website takes 2-4 weeks. A custom e-commerce store takes 6-10 weeks. Enterprise software is scoped individually with clear milestones upfront.' },
    { q: 'Do you work with international clients?', a: 'Yes, we collaborate with clients worldwide and are fully equipped to manage remote projects across time zones.' },
    { q: 'What is your payment structure?', a: 'We work on a 50% deposit at kickoff and 50% upon delivery. For larger projects, milestone-based payments are available. We accept bank transfer, Wise, Paypal, and crypto.' },
    { q: 'Will I own the final deliverables?', a: 'Yes, 100%. Upon final payment you receive full ownership of all source files, code, and brand assets.' },
    { q: 'Do you offer ongoing maintenance?', a: 'Yes! We offer monthly retainer packages for hosting, maintenance, content updates, and ongoing development.' },
    { q: 'Can you redesign my existing website?', a: 'Definitely. We audit your current site, identify improvements, and rebuild it with better UX, performance, and conversion.' },
    { q: 'Do you provide content writing services?', a: 'Yes, we have a team of professional copywriters who can craft compelling website copy, blog posts, and marketing content.' },
    { q: 'What if I need a custom feature or integration?', a: 'We specialize in custom development. We can build unique features, integrate third-party services, and create tailored solutions.' },
    { q: 'How do you ensure my project stays on track?', a: 'We use project management tools and regular check-ins to keep you updated. Clear timelines and milestones are established upfront.' },
    { q: 'What industries do you specialize in?', a: 'We have experience across various industries including tech startups, e-commerce, healthcare, finance, and more.' },
    { q: 'What technologies do you work with?', a: 'React, Next.js, Node.js, Python, WordPress, Shopify, WooCommerce, Wix, and more.' },
    { q: 'How do I get started?', a: 'Getting started is easy! Simply reach out to us via our contact form or email to schedule a call.'}
  ];

  return (
    <section className="py-20 bg-[#0B0E14] text-white" id="faq">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sticky Left Column for better UI flow */}
          <div className="lg:w-1/3 lg:sticky lg:top-24 h-fit">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#10B981]/20 bg-[#10B981]/5 text-[#10B981] font-bold text-[10px] tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 bg-[#10B981] rounded-full"></span> FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Got questions?</h2>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              We've answered the most common questions here. Don't see yours? Reach out – we're happy to help.
            </p>
            <Link href="/contact">
              <button className="bg-[#10B981] text-black font-bold px-6 py-2.5 rounded-full text-sm hover:bg-emerald-400 transition-colors">
                Contact Us →
              </button>
            </Link>
          </div>

          {/* Compact Accordion */}
          <div className="lg:w-2/3">
            <div className="space-y-3">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`bg-[#0A0A0A] rounded-xl border transition-all duration-300 ${openIndex === idx ? 'border-[#10B981]/30' : 'border-white/5 hover:border-white/10'}`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full text-left p-5 flex justify-between items-center text-sm font-semibold hover:text-[#10B981] transition-colors"
                  >
                    {faq.q}
                    <span className="text-lg opacity-50 ml-4">{openIndex === idx ? '−' : '+'}</span>
                  </button>
                  {openIndex === idx && (
                    <div className="px-5 pb-5 text-gray-400 text-xs leading-relaxed border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}