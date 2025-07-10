import React from 'react';
import { Code, Database, Globe, Cpu, Palette, Server, Cloud, Monitor } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  icon: React.ReactNode;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Backend
    { name: 'PHP', level: 90, category: 'Backend', icon: <Server size={24} /> },
    { name: 'Laravel', level: 88, category: 'Backend', icon: <Server size={24} /> },
    { name: 'CodeIgniter', level: 85, category: 'Backend', icon: <Server size={24} /> },
    { name: 'C# .NET Core', level: 80, category: 'Backend', icon: <Server size={24} /> },
    { name: 'Node.js', level: 75, category: 'Backend', icon: <Server size={24} /> },
    { name: 'Python', level: 70, category: 'Backend', icon: <Server size={24} /> },
    
    // Frontend
    { name: 'JavaScript', level: 85, category: 'Frontend', icon: <Code size={24} /> },
    { name: 'HTML5', level: 90, category: 'Frontend', icon: <Code size={24} /> },
    { name: 'CSS3', level: 85, category: 'Frontend', icon: <Code size={24} /> },
    { name: 'Three.js', level: 75, category: 'Frontend', icon: <Code size={24} /> },
    { name: 'Next.js', level: 70, category: 'Frontend', icon: <Code size={24} /> },
    { name: 'Alpine.js', level: 65, category: 'Frontend', icon: <Code size={24} /> },
    { name: 'Bootstrap', level: 80, category: 'Frontend', icon: <Code size={24} /> },
    
    // Database
    { name: 'MySQL', level: 85, category: 'Database', icon: <Database size={24} /> },
    { name: 'MariaDB', level: 80, category: 'Database', icon: <Database size={24} /> },
    
    { name: 'SQLite', level: 70, category: 'Database', icon: <Database size={24} /> },
    
    // Cloud & DevOps
    { name: 'AWS', level: 70, category: 'Cloud & DevOps', icon: <Cloud size={24} /> },
    { name: 'Azure', level: 65, category: 'Cloud & DevOps', icon: <Cloud size={24} /> },
    { name: 'Docker', level: 75, category: 'Cloud & DevOps', icon: <Globe size={24} /> },
    { name: 'Git', level: 85, category: 'Cloud & DevOps', icon: <Globe size={24} /> },
    { name: 'GitHub', level: 85, category: 'Cloud & DevOps', icon: <Globe size={24} /> },
    
    // System Administration
    { name: 'Linux Server', level: 80, category: 'System Admin', icon: <Cpu size={24} /> },
    { name: 'Windows Server', level: 75, category: 'System Admin', icon: <Cpu size={24} /> },
    { name: 'Apache', level: 70, category: 'System Admin', icon: <Cpu size={24} /> },
    { name: 'Nginx', level: 68, category: 'System Admin', icon: <Cpu size={24} /> },
    
    // Programming Languages
    { name: 'Java', level: 75, category: 'Programming', icon: <Monitor size={24} /> },
    { name: 'C++', level: 70, category: 'Programming', icon: <Monitor size={24} /> },
    
    // Design & Tools
    { name: 'Figma', level: 75, category: 'Design & Tools', icon: <Palette size={24} /> },
    { name: 'Canva', level: 80, category: 'Design & Tools', icon: <Palette size={24} /> },
    { name: 'Blender', level: 65, category: 'Design & Tools', icon: <Palette size={24} /> }
  ];

  const categories = ['Backend', 'Frontend', 'Database', 'Cloud & DevOps', 'System Admin', 'Programming', 'Design & Tools'];

  const getCategoryColor = (category: string) => {
    const colors = {
      Backend: 'from-purple-400 to-pink-500',
      Frontend: 'from-cyan-400 to-blue-500',
      Database: 'from-green-400 to-teal-500',
      'Cloud & DevOps': 'from-orange-400 to-red-500',
      'System Admin': 'from-indigo-400 to-purple-500',
      Programming: 'from-yellow-400 to-orange-500',
      'Design & Tools': 'from-pink-400 to-rose-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-400 to-gray-500';
  };

  const getCategoryIcon = (category: string) => {
    const icons = {
      Backend: <Server size={24} />,
      Frontend: <Code size={24} />,
      Database: <Database size={24} />,
      'Cloud & DevOps': <Cloud size={24} />,
      'System Admin': <Cpu size={24} />,
      Programming: <Monitor size={24} />,
      'Design & Tools': <Palette size={24} />
    };
    return icons[category as keyof typeof icons] || <Code size={24} />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Keahlian Teknis
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Gambaran komprehensif tentang keahlian teknis dan tingkat kemahiran saya
            </p>
          </div>

          {/* Skills by Category */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              
              if (categorySkills.length === 0) return null;
              
              return (
                <div
                  key={category}
                  className="bg-slate-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${getCategoryColor(category)}`}>
                      {getCategoryIcon(category)}
                    </div>
                    <h3 className="text-xl font-semibold text-white ml-3">{category}</h3>
                  </div>

                  <div className="space-y-4">
                    {categorySkills.map((skill) => (
                      <div key={skill.name} className="group">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-sm text-slate-400">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${getCategoryColor(category)} transition-all duration-1000 group-hover:shadow-lg`}
                            style={{ 
                              width: `${skill.level}%`,
                              animation: `skillProgress 1.5s ease-out forwards`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Keahlian Tambahan</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                'REST APIs', 'JWT Authentication', 'Postman', 'VS Code', 'Virtualisasi',
                'IT Support', 'System Administration', 'MVC Pattern', 'OOP', 'Database Design',
                'Payment Gateway Integration', 'Server Management', 'Web Security', 'API Development'
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-slate-700 text-cyan-400 rounded-full text-sm hover:bg-slate-600 transition-colors cursor-default transform hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">Sertifikat & Kursus</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Pemrograman Java</h4>
                <p className="text-slate-400 text-sm">Dicoding (2025)</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Mastering AI on AWS: Training AWS Certified AI-Practitioner</h4>
                <p className="text-slate-400 text-sm">2024</p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database size={24} className="text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2">Designing Azure Infrastructure Solutions AZ-305</h4>
                <p className="text-slate-400 text-sm">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;