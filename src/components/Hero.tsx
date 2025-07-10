import React, { useEffect, useState } from 'react';
import { ChevronDown, Code, Database, Cpu } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-20 animate-pulse"
          style={{
            top: '20%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotateX(45deg) rotateY(45deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 animate-bounce"
          style={{
            top: '60%',
            right: '15%',
            transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        <div 
          className="absolute w-12 h-12 bg-gradient-to-r from-green-400 to-teal-500 rounded-lg opacity-20"
          style={{
            top: '30%',
            right: '20%',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px) rotateZ(45deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Muhammad Divaul Aula
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Mahasiswa Teknik Informatika UNISBA & Full Stack Developer
          </p>

          {/* 3D Tech Icons */}
          <div className="flex justify-center items-center space-x-8 mb-12">
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-lg transform hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
                <Code size={32} className="text-white group-hover:animate-pulse" />
              </div>
              <p className="text-sm text-slate-400 mt-2">Frontend</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg transform hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50">
                <Database size={32} className="text-white group-hover:animate-pulse" />
              </div>
              <p className="text-sm text-slate-400 mt-2">Backend</p>
            </div>
            <div className="group cursor-pointer">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-lg transform hover:scale-110 hover:rotate-12 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/50">
                <Cpu size={32} className="text-white group-hover:animate-pulse" />
              </div>
              <p className="text-sm text-slate-400 mt-2">DevOps</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50"
            >
              Jelajahi Karya Saya
            </button>
            <a
              href="https://drive.google.com/drive/folders/1C-kIf5EtI54oWbgAsra8SYl4-iVjjtti?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transform hover:scale-105 transition-all duration-300"
            >
              Unduh CV
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-slate-400 hover:text-cyan-400 transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;