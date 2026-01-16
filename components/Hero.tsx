
import React from 'react';
//import Image from '../public/img/soikot.jpg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-cyan-400 font-mono tracking-wider">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
            Soikot <span className="block text-slate-400">Web Developer.</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-lg">
            A passionate front-end developer specializing in building modern, performant, and highly interactive user interfaces.
          </p>
          <div className="flex space-x-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all transform hover:-translate-y-1">
              View My Work
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-700 hover:border-cyan-400 text-white font-medium rounded-lg transition-all">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden md:flex justify-center">
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-cyan-500 rounded-2xl rotate-6 opacity-20 blur-2xl animate-pulse"></div>
            <div className="relative w-full h-full bg-slate-800 rounded-3xl overflow-hidden border border-slate-700">
               <img src="https://scontent.frjh9-1.fna.fbcdn.net/v/t39.30808-6/494379070_997222155925775_8950546451794012582_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=YV243qO0wPQQ7kNvwGerReZ&_nc_oc=Admxgg6WMpIVW8sPwYOCggjC_DhM_mIKiI9yURsqbMKI59UPEJKOgDkKmHHLKlYN6y4&_nc_zt=23&_nc_ht=scontent.frjh9-1.fna&_nc_gid=FQ-quJoEzGTEmXSQSY2CNw&oh=00_AfqUj6eJODJ1C5bykDerSQd7gTKav3E8g20OczLznAj5RA&oe=697034AE" 
                 alt="Soikot" 
                 className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
