import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex flex-col justify-between pt-32 overflow-hidden bg-white dark:bg-obsidian transition-colors duration-500"
      id="home"
    >
      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-scroll { animation: scroll 20s linear infinite; display: flex; width: max-content; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float 8s ease-in-out infinite 2s; }
        .animate-float-slow { animation: float 10s ease-in-out infinite 1s; }
      `}</style>

      {/* Background with Theme-Aware Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2664&auto=format&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-white/80 dark:bg-obsidian-deep/90 transition-colors duration-500 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 dark:from-obsidian-deep/90 via-white/70 dark:via-obsidian/70 to-white/95 dark:to-obsidian-deep/95 transition-colors duration-500"></div>
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-[90rem] mx-auto w-full flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-12">
        
        <div className="flex flex-col items-start pt-10 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald/10 border border-emerald/30 text-emerald font-extrabold text-[11px] md:text-xs tracking-[0.2em] mb-8 uppercase backdrop-blur-sm">
            <span className="w-1.5 h-1.5 bg-emerald rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
            <span>Award-Winning Digital Agency</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6 text-obsidian dark:text-white drop-shadow-sm transition-colors">
            Transform Your <span className="text-emerald">Business</span>{" "}
            <br className="hidden lg:block" />
            with Digital Excellence{" "}
            <br className="hidden lg:block" />
            That Convert
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-lg leading-relaxed font-medium transition-colors">
            From stunning websites to custom software and powerful brand identities – Geministudio crafts solutions that grow your business and delight your customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-5 mb-12 w-full sm:w-auto">
            <Link href="/#services" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-emerald hover:bg-emerald-light text-black font-bold py-3.5 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)] text-base">
              Explore Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
            <Link href="/#work" className="w-full sm:w-auto flex items-center justify-center bg-gray-200 dark:bg-white/5 border border-gray-300 dark:border-white/20 text-obsidian dark:text-white font-bold py-3.5 px-10 rounded-full transition-all backdrop-blur-sm text-base">
              See Our Work
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-9 h-9 rounded-full bg-emerald/80 border-2 border-white dark:border-obsidian flex items-center justify-center text-[9px] font-bold text-white z-40">AJ</div>
              <div className="w-9 h-9 rounded-full bg-emerald border-2 border-white dark:border-obsidian flex items-center justify-center text-[9px] font-bold text-black z-30">KN</div>
              <div className="w-9 h-9 rounded-full bg-emerald/60 border-2 border-white dark:border-obsidian flex items-center justify-center text-[9px] font-bold text-white z-20">RL</div>
            </div>
            <div className="text-xs">
              <p className="font-bold text-obsidian dark:text-white text-sm">50+ happy clients</p>
              <p className="text-gray-500 dark:text-gray-300 font-medium">Trusted by startups & enterprises</p>
            </div>
          </div>
        </div>

        

        {/* RIGHT COLUMN: Floating Cards */}
        <div className="hidden lg:block relative h-[450px] w-full mt-10">
          <div className="absolute bottom-[5%] right-[3%] bg-white/60 dark:bg-obsidian-lighter/60 backdrop-blur-md border border-gray-200 dark:border-white/10 p-5 rounded-2xl shadow-2xl animate-float-slow z-30 transition-colors">
            <div className="flex items-center gap-4">
              <div className="text-yellow-500"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 22a2 2 0 002-2h-4a2 2 0 002 2zm7-11V5h-2V3a1 1 0 00-1-1H8a1 1 0 00-1 1v2H5v6a6 6 0 005.14 5.92L11 20v2H8v2h8v-2h-3v-3l.86-.08A6 6 0 0019 11zM7 5h2v6H7V5zm10 6a4 4 0 01-3.66 3.98L12 15l-1.34-.02A4 4 0 017 11V7h10v4z" /></svg></div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-300 font-medium uppercase tracking-wider">Awards Won</p>
                <p className="font-extrabold text-2xl text-obsidian dark:text-white">5 Awards</p>
              </div>
            </div>
          </div>
          {/* Growth Rate Card */}

<div className="absolute top-[5%] left-[9%] bg-slate-900/60 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl animate-float z-20">

<div className="flex items-center gap-4">

<div className="bg-slate-800/80 p-3 rounded-xl text-[#10B981] shadow-inner">

<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">

<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />

</svg>

</div>

<div>

<p className="text-xs text-gray-300 font-medium uppercase tracking-wider">Growth Rate</p>

<p className="font-extrabold text-2xl text-white drop-shadow-sm">+240%</p>

</div>

</div>

</div>
          {/* Analytics Card */}

<div className="absolute top-[20%] right-[10%] bg-slate-900/60 backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl z-10 w-[320px] animate-float-delayed">

<p className="text-xs text-gray-300 font-bold uppercase tracking-widest mb-3">Project Analytics</p>

<h3 className="text-5xl font-black text-[#10B981] mb-2 leading-none drop-shadow-md">97%</h3>

<p className="text-sm text-gray-300 mb-8 font-medium">Client satisfaction rate</p>

<div className="w-full bg-slate-800/80 h-2.5 rounded-full mb-8 overflow-hidden shadow-inner">

<div className="bg-[#10B981] w-[97%] h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>

</div>

<div className="flex gap-2">

<span className="text-[10px] font-semibold text-gray-200 bg-slate-800/60 px-3 py-1 rounded-full border border-white/10">Web Dev</span>

<span className="text-[10px] font-semibold text-gray-200 bg-slate-800/60 px-3 py-1 rounded-full border border-white/10">Branding</span>

<span className="text-[10px] font-semibold text-gray-200 bg-slate-800/60 px-3 py-1 rounded-full border border-white/10">E-com</span>

</div>

</div>

</div>

</div>

      {/* Glassmorphism Marquee Strip */}

<div className="relative z-10 w-full bg-slate-950/70 backdrop-blur-md py-4 overflow-hidden border-t border-white/10">

<div className="animate-scroll flex items-center gap-12 px-6">

{[...Array(2)].map((_, i) => (

<div key={i} className="flex items-center gap-12 shrink-0">

<span className="text-sm md:text-base font-bold tracking-widest text-white/90 uppercase flex items-center gap-4">

Website Design <span className="text-[#10B981] text-lg">★</span>

</span>

<span className="text-sm md:text-base font-bold tracking-widest text-white/90 uppercase flex items-center gap-4">

Social Media <span className="text-[#10B981] text-lg">★</span>

</span>

<span className="text-sm md:text-base font-bold tracking-widest text-white/90 uppercase flex items-center gap-4">

Custom Software <span className="text-[#10B981] text-lg">★</span>

</span>

<span className="text-sm md:text-base font-bold tracking-widest text-white/90 uppercase flex items-center gap-4">

Graphic Design <span className="text-[#10B981] text-lg">★</span>

</span>

<span className="text-sm md:text-base font-bold tracking-widest text-white/90 uppercase flex items-center gap-4">

SEO Optimization <span className="text-[#10B981] text-lg">★</span>

</span>

<span className="text-sm md:text-base font-bold tracking-widest text-white/90 uppercase flex items-center gap-4">

E-commerce Development <span className="text-[#10B981] text-lg">★</span>

</span>

<span className="text-sm md:text-base font-bold tracking-widest text-white/90 uppercase flex items-center gap-4">

Brand identity <span className="text-[#10B981] text-lg">★</span>

</span>

</div>

))}

</div>

</div>

</section>

);

} 