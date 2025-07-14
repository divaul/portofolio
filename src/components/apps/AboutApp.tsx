import React, { useState } from 'react';
import { MapPin, Calendar, GraduationCap, Award, Coffee, Music, Camera, TowerControl, Languages } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const AboutApp: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const translations = {
    id: {
      title: "Tentang Saya",
      subtitle: "Mengenal saya lebih dekat",
      name: "Muhammad Divaul Aula",
      role: "Mahasiswa Teknik Informatika",
      location: "Blitar, Indonesia",
      age: "21 tahun",
      graduation: "Perkiraan lulus: 2025",
      myStory: "Kisah Saya",
      philosophy: "Filosofi",
      achievements: "Pencapaian",
      interests: "Minat",
      quickStats: "Statistik Singkat",
      projectsCompleted: "Proyek Selesai",
      linesOfCode: "Baris Kode",
      technologiesUsed: "Teknologi Digunakan",
      coffeeConsumed: "Kopi Dikonsumsi",
      story: [
        "Saya adalah mahasiswa Teknik Informatika yang penuh semangat dengan kecintaan mendalam terhadap teknologi dan inovasi. Perjalanan saya dalam pemrograman dimulai ketika saya berusia 16 tahun, dan sejak itu, saya terpesona oleh kemungkinan tak terbatas yang dapat diciptakan oleh kode.",
        "Saat ini menempuh pendidikan dengan fokus pada pengembangan full-stack, machine learning, dan teknologi blockchain. Saya percaya dalam membangun solusi yang membuat perbedaan nyata dalam kehidupan orang-orang.",
        "Ketika tidak sedang coding, Anda dapat menemukan saya menjelajahi teknologi baru, berkontribusi pada proyek open-source, atau mengerjakan proyek pribadi yang menantang saya untuk tumbuh sebagai developer."
      ],
      philosophyText: "Kode bukan hanya tentang memecahkan masalah—ini tentang menciptakan pengalaman, membangun komunitas, dan membuat yang mustahil menjadi mungkin. Setiap baris kode adalah kesempatan untuk membuat dunia sedikit lebih baik.",
      achievementsList: [
        {
          title: "comming soon",
          description: "comming soon",
          date: "comming soon"
        },
        // {
        //   title: "Daftar Dekan",
        //   description: "Penghargaan Keunggulan Akademik selama 4 semester berturut-turut",
        //   date: "2023-2024"
        // },
        // {
        //   title: "Pemenang Hackathon",
        //   description: "Juara 1 dalam Tantangan Inovasi Teknologi Universitas",
        //   date: "2024"
        // },
        // {
        //   title: "Kontributor Open Source",
        //   description: "Kontributor aktif pada 15+ proyek open source",
        //   date: "2023-Sekarang"
        // }
      ],
      interestsList: [
        { name: "Coding", icon: Coffee, color: "from-yellow-400 to-yellow-600" },
        { name: "Listening to music", icon: Music, color: "from-purple-400 to-purple-600" },
        { name: "Fotografi", icon: Camera, color: "from-blue-400 to-blue-600" },
        { name: "Gaming", icon: TowerControl, color: "from-green-400 to-green-600" }
      ]
    },
    en: {
      title: "About Me",
      subtitle: "Get to know me better",
      name: "Muhammad Divaul Aula",
      role: "Informatics Engineering Student",
      location: "Blitar, Indonesia",
      age: "21 years old",
      graduation: "Expected graduation: 2025",
      myStory: "My Story",
      philosophy: "Philosophy",
      achievements: "Achievements",
      interests: "Interests",
      quickStats: "Quick Stats",
      projectsCompleted: "Projects Completed",
      linesOfCode: "Lines of Code",
      technologiesUsed: "Technologies Used",
      coffeeConsumed: "Coffee Consumed",
      story: [
        "I'm a passionate Informatics Engineering student with a deep love for technology and innovation. My journey in programming started when I was 16, and since then, I've been fascinated by the endless possibilities that code can create.",
        "Currently pursuing my degree with a focus on full-stack development, machine learning, and blockchain technology. I believe in building solutions that make a real difference in people's lives.",
        "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or working on personal projects that challenge me to grow as a developer."
      ],
      philosophyText: "Code is not just about solving problems—it's about creating experiences, building communities, and making the impossible possible. Every line of code is an opportunity to make the world a little bit better.",
      achievementsList: [
                {
          title: "comming soon",
          description: "comming soon",
          date: "comming soon"
        },
        // {
        //   title: "Dean's List",
        //   description: "Academic Excellence Award for 4 consecutive semesters",
        //   date: "2023-2024"
        // },
        // {
        //   title: "Hackathon Winner",
        //   description: "1st place in University Tech Innovation Challenge",
        //   date: "2024"
        // },
        // {
        //   title: "Open Source Contributor",
        //   description: "Active contributor to 15+ open source projects",
        //   date: "2023-Present"
        // }
      ],
      interestsList: [
        { name: "Coding", icon: Coffee, color: "from-yellow-400 to-yellow-600" },
        { name: "Music Production", icon: Music, color: "from-purple-400 to-purple-600" },
        { name: "Photography", icon: Camera, color: "from-blue-400 to-blue-600" },
        { name: "Gaming", icon: TowerControl, color: "from-green-400 to-green-600" }
      ]
    }
  };

  const t = translations[language];

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

      <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : isTablet ? 'lg:grid-cols-2 gap-4' : 'lg:grid-cols-3 gap-6'}`}>
        {/* Profile Section */}
        <div className={`${!isMobile && !isTablet ? 'lg:col-span-2' : ''} ${isMobile ? 'space-y-4' : 'space-y-6'}`}>
          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <div className="flex items-center space-x-4 mb-4">
              <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center`}>
                <span className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-white`}>MDA</span>
              </div>
              <div>
                <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-white`}>{t.name}</h2>
                <p className={`text-cyan-400 ${isMobile ? 'text-sm' : ''}`}>{t.role}</p>
              </div>
            </div>
            
            <div className={`${isMobile ? 'space-y-2' : 'space-y-3'} text-gray-300`}>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className={isMobile ? 'text-sm' : ''}>{t.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span className={isMobile ? 'text-sm' : ''}>{t.age}</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span className={isMobile ? 'text-sm' : ''}>{t.graduation}</span>
              </div>
            </div>
          </div>

          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.myStory}</h3>
            <div className={`${isMobile ? 'space-y-3' : 'space-y-4'} text-gray-300`}>
              {t.story.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.philosophy}</h3>
            <blockquote className="text-gray-300 italic border-l-4 border-cyan-500/30 pl-4">
              {t.philosophyText}
            </blockquote>
          </div>
        </div>

        {/* Side Panel */}
        <div className={isMobile ? 'space-y-4' : 'space-y-6'}>
          {/* Achievements */}
          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.achievements}</h3>
            <div className="space-y-4">
              {t.achievementsList.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 border border-yellow-500/30 flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">{achievement.title}</h4>
                    <p className="text-xs text-gray-400 mb-1">{achievement.description}</p>
                    <span className="text-xs text-cyan-400">{achievement.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.interests}</h3>
            <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-2 gap-3'}`}>
              {t.interestsList.map((interest, index) => {
                const IconComponent = interest.icon;
                return (
                  <div key={index} className="flex flex-col items-center space-y-2 p-3 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-colors duration-200">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${interest.color} flex items-center justify-center`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs text-gray-300 text-center">{interest.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stats */}
          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.quickStats}</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{t.projectsCompleted}</span>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-white`}>25+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{t.linesOfCode}</span>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-white`}>50,000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{t.technologiesUsed}</span>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-white`}>30+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{t.coffeeConsumed}</span>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-medium text-white`}>∞</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutApp;