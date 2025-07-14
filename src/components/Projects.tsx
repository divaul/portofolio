import React, { useState } from 'react';
import { ExternalLink, Github, Play, Code, Database, Globe, Cpu } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
  category: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Project Kasir Laravel",
      description: "Full Stack POS Application dengan Laravel backend dan responsive frontend. Fitur lengkap: manajemen produk, real-time inventory, dashboard analytics, role-based authentication, dan export laporan PDF.",
      image: "https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/gambar1.png",
      technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Chart.js"],
      github: "https://github.com/hydarlm/Project-Kasir-Laravel",
      live: "#",
      category: "Full Stack Web App",
      icon: <Globe className="text-cyan-400" size={24} />
    },
    {
      id: 2,
      title: "E-Commerce Multi-Platform",
      description: "Full Stack E-Commerce platform dengan CodeIgniter backend dan modern frontend. Fitur: product catalog, shopping cart, payment gateway integration, admin dashboard, dan responsive design untuk semua device.",
      image: "https://iili.io/FEOBvet.png",
      technologies: ["CodeIgniter", "PHP", "MySQL", "JavaScript", "Bootstrap", "Payment API"],
      github: "https://github.com/divaul/ecommerce-codelnigter-3-jommla-4",
      live: "https://prestige.mkz.my.id/",
      category: "Full Stack E-Commerce",
      icon: <Code className="text-purple-400" size={24} />
    },
    // {
    //   id: 3,
    //   title: "Student Management System",
    //   description: "Full Stack web application untuk manajemen data mahasiswa dengan React frontend dan Laravel API backend. Fitur: CRUD operations, JWT authentication, role management, dan real-time notifications.",
    //   image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    //   technologies: ["React", "Laravel", "MySQL", "JWT", "REST API", "Tailwind CSS"],
    //   github: "https://github.com/divaul",
    //   live: "#",
    //   category: "Full Stack SPA",
    //   icon: <Database className="text-green-400" size={24} />
    // },
    {
      id: 4,
      title: "3D  Website",
      description: "Interactive 3D  website dengan Three.js frontend dan Node.js backend untuk contact form. Fitur: 3D models, smooth animations, responsive design, dan optimized performance dengan lazy loading.",
      image: "https://iili.io/FEegTen.png",
      technologies: ["Three.js", "React", "Node.js", "Express", "WebGL"],
      github: "#",
      live: "#",
      category: "Full Stack 3D Web",
      icon: <Cpu className="text-pink-400" size={24} />
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Proyek Unggulan
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Showcase keahlian teknis dan kemampuan pemecahan masalah kreatif saya
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-slate-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                  
                  {/* Project Category Icon */}
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-sm rounded-lg p-2">
                    {project.icon}
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-slate-900/80 flex items-center justify-center space-x-4 transition-opacity duration-300 ${
                    activeProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-slate-700 rounded-full hover:bg-slate-600 transition-colors"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-cyan-500 rounded-full hover:bg-cyan-600 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="text-xs text-slate-400 px-2 py-1 bg-slate-700 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-slate-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-slate-700 text-cyan-400 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
              Lihat Semua Proyek
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;