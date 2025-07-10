import React from 'react';
import { GraduationCap, Calendar, MapPin, Coffee } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tentang Saya
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Bersemangat dalam menciptakan solusi inovatif dan mendorong batas-batas teknologi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image & Quick Facts */}
            <div className="space-y-8">
              {/* Profile Image Placeholder */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
                  <div className="w-72 h-72 bg-slate-700 rounded-xl flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-teal-500 rounded-full flex items-center justify-center animate-pulse">
                  <Coffee size={24} className="text-white" />
                </div>
              </div>

              {/* Quick Facts */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <GraduationCap className="text-cyan-400" size={20} />
                  <span>Full Stack Developer & Mahasiswa TI</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Calendar className="text-cyan-400" size={20} />
                  <span>Semester 4 – IPK sementara: 3.44</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="text-cyan-400" size={20} />
                  <span>Kabupaten Blitar, Jawa Timur</span>
                </div>
              </div>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <div className="prose prose-lg text-slate-300">
                <p className="mb-6">
                  Full Stack Developer dengan pengalaman dalam pengembangan aplikasi web end-to-end. Mahasiswa semester 4 Teknik Informatika 
                  di Universitas Islam Balitar, mahir dalam teknologi frontend dan backend modern termasuk React, Laravel, Node.js, dan database management.
                </p>
                
                <p className="mb-6">
                  Berpengalaman dalam membangun aplikasi web responsif dengan React dan Three.js di frontend, serta mengembangkan API robust 
                  dengan Laravel dan Node.js di backend. Memahami DevOps practices dengan Docker, Git, dan cloud deployment.
                </p>

                <p className="mb-6">
                  Passionate dalam menciptakan user experience yang menarik di frontend sambil memastikan performa dan keamanan optimal di backend. 
                  Selalu eager untuk belajar teknologi baru dan berkontribusi dalam proyek-proyek inovatif.
                </p>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Minat Saat Ini</h3>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Laravel', 'Node.js', 'Three.js', 'TypeScript', 'RESTful API', 'MySQL', 'Docker'].map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm hover:bg-slate-600 transition-colors cursor-default"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;