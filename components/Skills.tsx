
import React, { useEffect, useState, useRef } from 'react';

interface SkillProps {
  name: string;
  percentage: number;
}

const SkillBar: React.FC<SkillProps> = ({ name, percentage }) => {
  const [width, setWidth] = useState(0);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => setWidth(percentage), 200);
      }
    }, { threshold: 0.1 });

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [percentage]);

  return (
    <div className="space-y-2" ref={barRef}>
      <div className="flex justify-between text-sm font-medium">
        <span className="text-slate-300 uppercase tracking-wide">{name}</span>
        <span className="text-cyan-400">{percentage}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skills = [
    { name: 'HTML5 / CSS3', percentage: 95 },
    { name: 'JavaScript (ES6+)', percentage: 90 },
    { name: 'React / Next.js', percentage: 85 },
    { name: 'Tailwind CSS', percentage: 90 },
    { name: 'Node.js', percentage: 70 },
    { name: 'TypeScript', percentage: 75 },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-16">
          <h2 className="text-3xl font-bold text-white uppercase tracking-wider">My Skills</h2>
          <div className="h-[1px] bg-slate-700 flex-grow"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10">
          {skills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} percentage={skill.percentage} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
