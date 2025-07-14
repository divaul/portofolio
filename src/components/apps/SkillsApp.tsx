import React, { useState } from 'react';
import { Code, Database, Cpu, Globe, Server, Layout, PaintBucket, Shield, Languages } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const SkillsApp: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const translations = {
    id: {
      title: "Keahlian Teknis",
      subtitle: "Profisiensi saya di berbagai teknologi dan tools",
      programmingLanguages: "Bahasa Pemrograman",
      webTechnologies: "Teknologi Web",
      backendFrameworks: "Framework Backend",
      databases: "Database",
      devopsInfrastructure: "DevOps & Infrastruktur",
      toolsDesign: "Tools & Desain",
      security: "Keamanan",
      additionalCompetencies: "Kompetensi Tambahan",
      competencies: [
        "REST APIs", "JWT Authentication", "Postman", "Virtualisasi",
        "IT Support", "System Administration", "MVC Pattern", "OOP",
        "Database Design", "Payment Gateway Integration", "Server Management", "API Development"
      ]
    },
    en: {
      title: "Technical Skills",
      subtitle: "My proficiency across various technologies and tools",
      programmingLanguages: "Programming Languages",
      webTechnologies: "Web Technologies",
      backendFrameworks: "Backend Frameworks",
      databases: "Databases",
      devopsInfrastructure: "DevOps & Infrastructure",
      toolsDesign: "Tools & Design",
      security: "Security",
      additionalCompetencies: "Additional Competencies",
      competencies: [
        "REST APIs", "JWT Authentication", "Postman", "Virtualization",
        "IT Support", "System Administration", "MVC Pattern", "OOP",
        "Database Design", "Payment Gateway Integration", "Server Management", "API Development"
      ]
    }
  };

  const t = translations[language];

  const skillCategories = [
    {
      title: t.programmingLanguages,
      icon: Code,
      skills: [
        { name: "PHP", level: 90, color: "from-yellow-400 to-yellow-600" },
        { name: "JavaScript", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Python", level: 70, color: "from-green-400 to-green-600" },
        { name: "Java", level: 75, color: "from-red-400 to-red-600" },
        { name: "C++", level: 70, color: "from-purple-400 to-purple-600" },
        { name: "C# .NET Core", level: 80, color: "from-indigo-400 to-indigo-600" }
      ]
    },
    {
      title: t.webTechnologies,
      icon: Globe,
      skills: [
        { name: "HTML5", level: 90, color: "from-orange-400 to-orange-600" },
        { name: "CSS3", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Bootstrap", level: 80, color: "from-purple-400 to-purple-600" },
        { name: "Three.js", level: 75, color: "from-green-400 to-green-600" },
        { name: "Next.js", level: 70, color: "from-gray-400 to-gray-700" },
        { name: "Alpine.js", level: 65, color: "from-gray-400 to-gray-600" }
      ]
    },
    {
      title: t.backendFrameworks,
      icon: Server,
      skills: [
        { name: "Laravel", level: 88, color: "from-red-400 to-red-600" },
        { name: "CodeIgniter", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "Node.js", level: 75, color: "from-green-400 to-green-600" }
      ]
    },
    {
      title: t.databases,
      icon: Database,
      skills: [
        { name: "MySQL", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "MariaDB", level: 80, color: "from-gray-400 to-gray-600" },
        { name: "SQLite", level: 70, color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      title: t.devopsInfrastructure,
      icon: Cpu,
      skills: [
        { name: "Git", level: 85, color: "from-orange-400 to-orange-600" },
        { name: "GitHub", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "Docker", level: 75, color: "from-blue-400 to-blue-700" },
        { name: "Linux Server", level: 80, color: "from-yellow-400 to-yellow-600" },
        { name: "Windows Server", level: 75, color: "from-blue-400 to-blue-600" },
        { name: "Apache", level: 70, color: "from-red-400 to-red-600" },
        { name: "Nginx", level: 68, color: "from-green-400 to-green-600" },
        { name: "AWS", level: 70, color: "from-yellow-400 to-yellow-600" },
        { name: "Azure", level: 65, color: "from-blue-400 to-blue-600" }
      ]
    },
    {
      title: t.toolsDesign,
      icon: PaintBucket,
      skills: [
        { name: "VS Code", level: 95, color: "from-blue-400 to-blue-600" },
        { name: "Figma", level: 75, color: "from-purple-400 to-purple-600" },
        { name: "Canva", level: 80, color: "from-blue-400 to-blue-600" },
        { name: "Blender", level: 65, color: "from-orange-400 to-orange-600" }
      ]
    },
    {
      title: t.security,
      icon: Shield,
      skills: [
        { name: "Web Security", level: 75, color: "from-red-400 to-red-600" },
        { name: "JWT Authentication", level: 85, color: "from-green-400 to-green-600" },
        { name: "API Security", level: 80, color: "from-blue-400 to-blue-600" }
      ]
    }
  ];

  return (
    <div className={`h-full bg-gray-900 text-white ${isMobile ? 'p-3' : 'p-6'} overflow-auto`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-cyan-400 mb-2`}>{t.title}</h1>
          <p className={`text-gray-400 ${isMobile ? 'text-sm' : ''}`}>{t.subtitle}</p>
        </div>
        <button
          onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
          className={`flex items-center space-x-2 ${isMobile ? 'px-2 py-1' : 'px-3 py-2'} bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg transition-colors duration-200`}
        >
          <Languages className="w-4 h-4" />
          <span className={isMobile ? 'text-xs' : 'text-sm'}>{language === 'id' ? 'EN' : 'ID'}</span>
        </button>
      </div>

      <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : isTablet ? 'gap-4' : 'lg:grid-cols-2 xl:grid-cols-3 gap-6'}`}>
        {skillCategories.map((category, categoryIndex) => {
          const IconComponent = category.icon;
          return (
            <div key={categoryIndex} className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center`}>
                  <IconComponent className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-cyan-400`} />
                </div>
                <h2 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-white`}>{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={isMobile ? 'space-y-1' : 'space-y-2'}>
                    <div className="flex items-center justify-between">
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-300`}>{skill.name}</span>
                      <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-cyan-400`}>{skill.level}%</span>
                    </div>
                    <div className={`w-full bg-gray-700/50 rounded-full ${isMobile ? 'h-1.5' : 'h-2'}`}>
                      <div 
                        className={`bg-gradient-to-r ${skill.color} ${isMobile ? 'h-1.5' : 'h-2'} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className={`${isMobile ? 'mt-6' : 'mt-8'} bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
        <h2 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.additionalCompetencies}</h2>
        <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'}`}>
          {t.competencies.map((competency, index) => (
            <div key={index} className={`${isMobile ? 'px-2 py-1' : 'px-3 py-2'} bg-purple-500/20 text-purple-400 rounded-lg ${isMobile ? 'text-xs' : 'text-sm'} text-center`}>
              {competency}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsApp;