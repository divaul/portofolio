import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  currentSection: string;
}

const Header: React.FC<HeaderProps> = ({ currentSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Beranda' },
    { id: 'about', label: 'Tentang' },
    { id: 'projects', label: 'Proyek' },
    { id: 'skills', label: 'Keahlian' },
    { id: 'contact', label: 'Kontak' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Divaul
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  currentSection === item.id ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/divaul-aula-92b990294/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-slate-800/90 backdrop-blur-lg rounded-lg border border-slate-700">
            <nav className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-cyan-400 ${
                    currentSection === item.id ? 'text-cyan-400' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-slate-700">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/divaul-aula-92b990294/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contact@example.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;