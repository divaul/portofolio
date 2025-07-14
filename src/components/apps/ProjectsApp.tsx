import React, { useState } from 'react';
import { ExternalLink, Github, Star, Calendar, Languages } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const ProjectsApp: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const translations = {
    id: {
      title: "Portfolio Proyek",
      subtitle: "Showcase proyek teknis dan kontribusi saya",
      completed: "Selesai",
      inProgress: "Sedang Berlangsung",
      research: "Penelitian",
      code: "Kode",
      demo: "Demo",
      projects: [
        // Project 1: Project Kasir Laravel
        {
          id: 1,
          title: "Project Kasir Laravel",
          description: "Aplikasi POS Full Stack dengan backend Laravel dan frontend responsif. Fitur: manajemen produk, inventory real-time, dashboard analytics, autentikasi berbasis role, dan ekspor laporan PDF.",
          technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
          image: "https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/gambar1.png",
          status: "Selesai",
          date: "2023-11",
          github: "https://github.com/hydarlm/Project-Kasir-Laravel",
          demo: null,
          stars: 15
        },
        // Project 2: E-Commerce Multi-Platform
        {
          id: 2,
          title: "E-Commerce Multi-Platform",
          description: "Platform E-Commerce Full Stack menggunakan CodeIgniter untuk backend dan frontend modern. Fitur: katalog produk, keranjang belanja, integrasi payment gateway, dashboard admin, dan desain responsif.",
          technologies: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "Bootstrap", "Payment API"],
          image: "https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/gambar2.png",
          status: "Selesai",
          date: "2023-12",
          github: "https://github.com/divaul/ecommerce-codelnigter-3-jommla-4",
          demo: "https://prestige.mkz.my.id/",
          stars: 20
        },
        // Project 3: 3D Website
        {
          id: 3,
          title: "3D Website",
          description: "Website interaktif 3D menggunakan Three.js untuk frontend dan Node.js untuk backend (form kontak). Fitur: model 3D, animasi smooth, desain responsif, dan performa cepat dengan lazy loading.",
          technologies: ["Three.js", "React", "Node.js", "Express", "WebGL"],
          image: "https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/gambar3.png",
          status: "Sedang Berlangsung",
          date: "2024-04",
          github: null,
          demo: null,
          stars: 0
        },
        // Tambahkan proyek lain jika diperlukan...
      ]
    },
    en: {
      title: "Projects Portfolio",
      subtitle: "Showcase of my technical projects and contributions",
      completed: "Completed",
      inProgress: "In Progress",
      research: "Research",
      code: "Code",
      demo: "Demo",
      projects: [
        // Project 1: Laravel Cashier Project
        {
          id: 1,
          title: "Laravel Cashier Project",
          description: "Full Stack POS application with Laravel backend and responsive frontend. Features: product management, real-time inventory, analytics dashboard, role-based authentication, and PDF report export.",
          technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
          image: "https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/gambar1.png",
          status: "Completed",
          date: "2023-11",
          github: "https://github.com/hydarlm/Project-Kasir-Laravel",
          demo: null,
          stars: 15
        },
        // Project 2: Multi-Platform E-Commerce
        {
          id: 2,
          title: "Multi-Platform E-Commerce",
          description: "Full Stack E-Commerce platform using CodeIgniter for backend and modern frontend. Features: product catalog, shopping cart, payment gateway integration, admin dashboard, and responsive design.",
          technologies: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "Bootstrap", "Payment API"],
          image: "https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/gambar2.png",
          status: "Completed",
          date: "2023-12",
          github: "https://github.com/divaul/ecommerce-codelnigter-3-jommla-4",
          demo: "https://prestige.mkz.my.id/",
          stars: 20
        },
        // Project 3: 3D Website
        {
          id: 3,
          title: "3D Website",
          description: "Interactive 3D website using Three.js for frontend and Node.js for backend (contact form). Features: 3D models, smooth animations, responsive design, and fast performance with lazy loading.",
          technologies: ["Three.js", "React", "Node.js", "Express", "WebGL"],
          image: "https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/gambar3.png",
          status: "In Progress",
          date: "2024-04",
          github: null,
          demo: null,
          stars: 0
        },
        // Add other projects as needed...
      ]
    }
  };

  const t = translations[language];

  const getStatusColor = (status: string) => {
    const statusMap = {
      [t.completed]: 'text-green-400 bg-green-500/20',
      [t.inProgress]: 'text-yellow-400 bg-yellow-500/20',
      [t.research]: 'text-blue-400 bg-blue-500/20'
    };
    return statusMap[status] || 'text-gray-400 bg-gray-500/20';
  };

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

      <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : isTablet ? 'gap-4' : 'md:grid-cols-2 gap-6'}`}>
        {t.projects.map((project) => (
          <div key={project.id} className="bg-gray-800/50 rounded-lg border border-cyan-500/30 overflow-hidden hover:border-cyan-400/50 transition-all duration-200">
            <div className={`relative ${isMobile ? 'h-32' : 'h-48'} overflow-hidden`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>
            </div>
            
            <div className={isMobile ? 'p-3' : 'p-4'}>
              <div className="flex items-center justify-between mb-2">
                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-white`}>{project.title}</h3>
                <div className="flex items-center space-x-1 text-yellow-400">
                  <Star className="w-4 h-4" />
                  <span className={isMobile ? 'text-xs' : 'text-sm'}>{project.stars}</span>
                </div>
              </div>
              
              <p className={`text-gray-400 ${isMobile ? 'text-xs' : 'text-sm'} mb-3`}>{project.description}</p>
              
              <div className="flex items-center space-x-2 mb-3">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{project.date}</span>
              </div>
              
              <div className={`flex flex-wrap ${isMobile ? 'gap-1' : 'gap-2'} mb-4`}>
                {project.technologies.map((tech, index) => (
                  <span key={index} className={`${isMobile ? 'px-1 py-0.5' : 'px-2 py-1'} bg-purple-500/20 text-purple-400 rounded ${isMobile ? 'text-xs' : 'text-xs'}`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className={`flex ${isMobile ? 'space-x-1' : 'space-x-2'}`}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-1 ${isMobile ? 'px-2 py-1' : 'px-3 py-1'} bg-gray-700/50 hover:bg-gray-600/50 rounded transition-colors duration-200`}
                  >
                    <Github className="w-4 h-4" />
                    <span className={isMobile ? 'text-xs' : 'text-sm'}>{t.code}</span>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-1 ${isMobile ? 'px-2 py-1' : 'px-3 py-1'} bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded transition-colors duration-200`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className={isMobile ? 'text-xs' : 'text-sm'}>{t.demo}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsApp;