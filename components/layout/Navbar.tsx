"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Process', href: '/#process' },
    { name: 'Work', href: '/#work' },
    { name: 'FAQ', href: '/#faq' },
  ];

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-[70] flex justify-between items-center px-6 lg:px-12 py-6 bg-transparent">
        
        {/* Logo */}
        <Link href="/" onClick={closeMenu} className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-1 text-dark hover:opacity-90 transition-opacity">
          Gemini<span className="text-emerald">studio</span> 
          <span className="w-2 h-2 rounded-full bg-emerald mt-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
        </Link>

        {/* DESKTOP: Center Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="text-gray-400 hover:text-white font-medium text-sm transition-colors uppercase tracking-widest">
              {link.name}
            </Link>
          ))}
        </div>

        {/* DESKTOP: Right Action Controls */}
        <div className="hidden lg:flex items-center gap-5">
          <button 
            onClick={() => document.documentElement.classList.toggle('dark')}
            className="w-12 h-12 rounded-full border border-gray-700/60 flex items-center justify-center text-emerald hover:bg-white/10 transition-all bg-obsidian/40 backdrop-blur-md"
          >
            ☀️
          </button>
          
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-emerald hover:bg-emerald-light text-black font-bold py-3 px-6 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            Get Started
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>

        {/* MOBILE: Right Action Controls */}
        <div className="flex lg:hidden items-center gap-3">
          <button onClick={() => document.documentElement.classList.toggle('dark')} className="w-10 h-10 rounded-full border border-gray-700/60 flex items-center justify-center text-emerald bg-obsidian/40 backdrop-blur-md">
            ☀️
          </button>
          
          <button 
            onClick={toggleMenu}
            className="w-10 h-10 rounded-xl border border-gray-700/60 flex flex-col items-center justify-center gap-1.5 bg-obsidian/40 backdrop-blur-md"
            aria-label="Toggle navigation"
          >
            <span className={`w-5 h-[2px] bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* MOBILE: Overlay Menu */}
      <div className={`fixed inset-0 bg-obsidian z-[60] flex flex-col pt-32 px-6 pb-8 transition-all duration-300 lg:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col gap-6">
          {navLinks.map((item) => (
            <Link key={item.name} href={item.href} onClick={closeMenu} className="text-3xl font-black text-white border-b border-white/10 py-5">
              {item.name}
            </Link>
          ))}
          <Link href="/contact" onClick={closeMenu} className="w-full text-center bg-emerald text-black font-black py-4 rounded-full text-xl">
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}