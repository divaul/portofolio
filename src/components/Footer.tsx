import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Muhammad Divaul Aula
              </div>
              <p className="text-slate-400 mb-6 max-w-md">
                Full Stack Developer & Mahasiswa Teknik Informatika UNISBA yang bersemangat dalam pengembangan web modern dan teknologi inovatif.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/divaul"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <Github size={20} className="text-slate-400 group-hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/divaul-aula-92b990294/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <Linkedin size={20} className="text-slate-400 group-hover:text-white" />
                </a>
                <a
                  href="mailto:divaulaula2@gmail.com"
                  className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <Mail size={20} className="text-slate-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Tautan Cepat</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">Tentang</a>
                </li>
                <li>
                  <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Proyek</a>
                </li>
                <li>
                  <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">Keahlian</a>
                </li>
                <li>
                  <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors">Kontak</a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Sumber Daya</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://drive.google.com/drive/folders/1C-kIf5EtI54oWbgAsra8SYl4-iVjjtti?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    Portfolio Drive
                  </a>
                </li>
                <li>
                  <a href="/cv.pdf" download className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Unduh CV
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Sumber Daya
                  </a>
                </li>
                <li>
                  <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                    Kebijakan Privasi
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-slate-400 text-sm">
                © 2024 Muhammad Divaul Aula. All rights reserved.
              </p>
              <div className="flex items-center space-x-1 text-slate-400 text-sm mt-4 md:mt-0">
                <span>Dibuat dengan</span>
                <Heart size={16} className="text-red-400" />
                <span>menggunakan React & TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;