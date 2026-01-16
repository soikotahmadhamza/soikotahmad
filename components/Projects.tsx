
import React from 'react';

const ProjectCard: React.FC<{ title: string; desc: string; tags: string[]; img: string }> = ({ title, desc, tags, img }) => (
  <div className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 shadow-lg">
    <div className="relative h-56 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
        <button className="p-3 bg-white text-slate-950 rounded-full hover:bg-cyan-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
        </button>
        <button className="p-3 bg-white text-slate-950 rounded-full hover:bg-cyan-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        </button>
      </div>
    </div>
    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 px-2 py-1 bg-cyan-500/10 rounded">
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Dashboard',
      desc: 'A robust admin panel for managing inventory, tracking sales data, and monitoring customer feedback with real-time charts.',
      tags: ['React', 'D3.js', 'Tailwind'],
      img: 'https://picsum.photos/id/20/600/400'
    },
    {
      title: 'SkyCast Weather App',
      desc: 'A beautiful weather forecasting application featuring dynamic backgrounds based on conditions and 7-day detailed insights.',
      tags: ['JavaScript', 'API', 'Animation'],
      img: 'https://picsum.photos/id/15/600/400'
    },
    {
      title: 'TaskFlow Planner',
      desc: 'A collaborative task management tool with drag-and-drop functionality, priority levels, and team assignment features.',
      tags: ['TypeScript', 'Firebase', 'Next.js'],
      img: 'https://picsum.photos/id/26/600/400'
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">My Projects</h2>
          <div className="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
