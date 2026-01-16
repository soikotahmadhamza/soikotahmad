
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-12">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">About Me</h2>
          <div className="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-6">
            <p className="text-slate-400 leading-relaxed text-lg">
              I am a dedicated web developer with a keen eye for design and a love for clean code. My journey in tech started with a curiosity for how websites work, and it has evolved into a career of building responsive and user-friendly digital experiences.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              I believe in lifelong learning and constantly explore new technologies to stay at the forefront of the industry. When I'm not coding, you'll find me exploring UI/UX trends or contributing to open-source projects.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-cyan-400 font-bold text-2xl">2+</p>
                <p className="text-sm text-slate-500">Years of Experience</p>
              </div>
              <div className="p-4 bg-slate-900 rounded-xl border border-slate-800">
                <p className="text-cyan-400 font-bold text-2xl">20+</p>
                <p className="text-sm text-slate-500">Projects Completed</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
             <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
               <h3 className="text-white font-semibold mb-4">My Core Values</h3>
               <ul className="space-y-3 text-slate-400">
                 <li className="flex items-center space-x-2">
                   <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                   <span>User-Centric Design</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                   <span>Performance First</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                   <span>Clean & Scalable Code</span>
                 </li>
                 <li className="flex items-center space-x-2">
                   <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                   <span>Continuous Growth</span>
                 </li>
               </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
