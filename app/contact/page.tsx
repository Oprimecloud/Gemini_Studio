'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="bg-white dark:bg-obsidian min-h-screen transition-colors duration-500">
      <Navbar />
      
      <section className="py-24 relative" id="contact">
        <style>{`
          @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
          .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        `}</style>

        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          {/* Added Breadcrumb */}
          <nav className="mb-12 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-emerald transition-colors">Home</Link> <span className="mx-2">/</span> <span className="text-emerald font-bold">Contact</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-16 items-start animate-fade-in-up">
            
            {/* Header + New Info Section */}
            <div className="space-y-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 dark:border-emerald/20 bg-gray-50 dark:bg-emerald/5 text-emerald font-bold text-[10px] tracking-widest uppercase mb-6">
                  <span className="w-1.5 h-1.5 bg-emerald rounded-full"></span> LET'S WORK TOGETHER
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-obsidian dark:text-white">
                  Ready to transform <br />
                  <span className="text-emerald">your business?</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  Share your idea and we'll get back to you within 24 hours with a plan and a free quote.
                </p>
              </div>

              {/* Added Contact Details Section */}
              <div className="space-y-6 text-obsidian dark:text-gray-300">
                <div>
                  <h4 className="font-bold mb-1">Work Model</h4>
                  <p className="text-sm text-gray-500">We work remotely with clients internationally and locally, offering flexible collaboration worldwide.</p>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-sm text-gray-500">Monday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-500">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-sm text-gray-500">Sunday: 24-hour</p>
                </div>
              </div>
            </div>

            {/* Form - Backend logic untouched */}
            <div className="bg-gray-50 dark:bg-[#111111] p-8 md:p-10 rounded-[2rem] border border-gray-200 dark:border-white/5 shadow-xl">
              <form 
                action="https://docs.google.com/forms/d/e/1FAIpQLSdqOrCCj61o72tSXRZwL48Qn4pCdX8GXM-RAXXDCF1_ZicRuA/formResponse"
                method="POST"
                target="hidden_iframe"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="text" name="entry.1917424205" placeholder="Your Name" required className="w-full bg-white dark:bg-obsidian border border-gray-200 dark:border-white/10 p-4 rounded-xl text-obsidian dark:text-white focus:border-emerald outline-none transition-all" />
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input type="email" name="entry.1839785389" placeholder="Your Email" required className="w-full bg-white dark:bg-obsidian border border-gray-200 dark:border-white/10 p-4 rounded-xl text-obsidian dark:text-white focus:border-emerald outline-none" />
                  <input type="tel" name="entry.502763001" placeholder="Phone Number" required className="w-full bg-white dark:bg-obsidian border border-gray-200 dark:border-white/10 p-4 rounded-xl text-obsidian dark:text-white focus:border-emerald outline-none" />
                </div>

                <select name="entry.2099580202" required className="w-full bg-white dark:bg-obsidian border border-gray-200 dark:border-white/10 p-4 rounded-xl text-gray-500 dark:text-gray-400 focus:border-emerald outline-none">
                  <option value="">Select Service</option>
                  <option value="Web Design">Web Design</option>
                  <option value="SEO">SEO</option>
                  <option value="Paid Advertising">Paid Advertising</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Branding">Branding</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="Resume Writing">Resume Writing</option>
                  <option value="Other">Other</option>
                </select>

                <textarea name="entry.1863589637" placeholder="Tell us about your project..." rows={4} required className="w-full bg-white dark:bg-obsidian border border-gray-200 dark:border-white/10 p-4 rounded-xl text-obsidian dark:text-white focus:border-emerald outline-none"></textarea>

                {!loading && !success && (
                  <button type="submit" className="w-full bg-emerald text-black font-bold p-4 rounded-xl hover:bg-emerald-light transition-all">
                    Send Message
                  </button>
                )}

                {loading && <div className="text-emerald font-bold text-center">Sending your message...</div>}
                {success && <div className="text-emerald font-bold text-center">✅ Message sent successfully!</div>}
              </form>
            </div>
          </div>
        </div>
        <iframe name="hidden_iframe" className="hidden" />
      </section>
      
      <Footer />
    </div>
  );
}