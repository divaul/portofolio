import React, { useState } from 'react';
import { Download, Mail, Phone, MapPin, Globe, Github, Linkedin, Calendar, Languages } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const CVApp: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const translations = {
    id: {
      title: "Curriculum Vitae",
      downloadPdf: "Unduh PDF",
      contact: "Kontak",
      profile: "Profil",
      profileText: "Mahasiswa S1 Teknik Informatika (Semester 4) di Universitas Islam Balitar dengan latar belakang kuat di bidang IT Support, System Administration, dan pengembangan web. Teliti, komunikatif, cepat beradaptasi, dan bersemangat menerapkan kemampuan teknis untuk mendukung tim teknologi.",
      technicalSkills: "Keahlian Teknis",
      languagesFrameworks: "Bahasa & Framework",
      database: "Database",
      devopsTools: "DevOps & Tools",
      systemServer: "Sistem & Server",
      webinarCms: "Webinar & CMS",
      networking: "Networking",
      experienceProjects: "Pengalaman & Proyek",
      projects: "Proyek Utama",
      education: "Pendidikan",
      courseCertifications: "Kursus & Sertifikasi",
      interests: "Minat",
      student: "Mahasiswa S1 Teknik Informatika",
      semester: "Semester 4",
      experience: [
        {
          title: "Magang Pemrograman Konten & Data Olahraga",
          company: "Media Sports Company",
          period: "2024",
          location: "Remote",
          achievements: [
            "Manajemen dan penjadwalan konten olahraga di platform CMS",
            "Pemantauan data statistik pertandingan dan integrasi metadata deskriptif",
            "Optimasi workflow konten untuk meningkatkan efisiensi publikasi",
            "Kolaborasi dengan tim editorial untuk standarisasi format data"
          ]
        },
        {
          title: "Magang Pengembangan Web Full Stack",
          company: "Tech Development Company",
          period: "2024",
          location: "Blitar, Jawa Timur",
          achievements: [
            "Pengembangan end-to-end aplikasi web menggunakan Laravel, React.js, dan Node.js",
            "Penerapan MVC, routing, serta optimasi performa frontend dan backend",
            "Kolaborasi tim agile dalam siklus pengembangan fitur",
            "Implementasi best practices dalam pengembangan web modern"
          ]
        },
        {
          title: "Magang Pengembangan Backend",
          company: "Software Solutions",
          period: "2023-2024",
          location: "Blitar, Jawa Timur",
          achievements: [
            "Desain dan implementasi RESTful API, JWT authentication",
            "Pengembangan fitur manajemen produk, transaksi penjualan, dan laporan harian pada aplikasi POS",
            "Optimasi query database dan integrasi payment gateway sederhana",
            "Dokumentasi API dan testing untuk memastikan kualitas kode"
          ]
        },
        {
          title: "Magang IT Support & System Administration",
          company: "Local IT Services",
          period: "2023",
          location: "Blitar, Jawa Timur",
          achievements: [
            "Instalasi, konfigurasi, dan perawatan PC/Server (Windows & Linux)",
            "Setup dan troubleshooting LAN/Wi-Fi serta jaringan internal kecil",
            "Pengelolaan webinar (VMix, OBS Studio) dan dukungan e-learning CMS",
            "Maintenance rutin sistem dan backup data"
          ]
        }
      ],
      educationList: [
        {
          degree: "S1 Teknik Informatika",
          institution: "Universitas Islam Balitar",
          period: "2023 - Sekarang",
          gpa: "Semester 4",
          achievements: [
            "Fokus pada pengembangan web dan system administration",
            "Aktif dalam proyek-proyek pengembangan aplikasi",
            "Menguasai berbagai teknologi modern dalam bidang IT"
          ]
        },
        {
          degree: "Teknik Komputer dan Jaringan",
          institution: "SMKN 1 Nglegok",
          period: "2020 - 2023",
          gpa: "Lulus",
          achievements: [
            "Spesialisasi dalam networking dan troubleshooting",
            "Pengalaman praktis dalam instalasi dan maintenance sistem",
            "Dasar kuat dalam teknologi komputer dan jaringan"
          ]
        }
      ],
      certifications: [
        {
          name: "Pemrograman Java",
          issuer: "Dicoding",
          date: "2024",
          credentialId: "GRX53Y78YZ0M"
        },
        {
          name: "AWS Certified AI-Practitioner",
          issuer: "Amazon Web Services",
          date: "Comming Soon",
          credentialId: "Comming Soon"
        },
        {
          name: "Designing Azure Infrastructure Solutions (AZ-305)",
          issuer: "Microsoft Azure",
          date: "Comming Soon",
          credentialId: "Comming Soon"
        }
      ],
      projectsData: [
        {
          title: "Aplikasi Point-of-Sales",
          description: "Aplikasi POS berbasis Laravel untuk toko kecil dengan role-based authentication dan validasi transaksi",
          technologies: ["Laravel", "MySQL", "Bootstrap"]
        },
        {
          title: "Toko Online Multi-Platform",
          description: "E-commerce menggunakan CodeIgniter 3 dan Joomla 4 dengan fitur katalog, keranjang, dan metadata",
          technologies: ["CodeIgniter", "Joomla", "MySQL", "JavaScript"]
        }
      ],
      interestsData: [
        {
          title: "Sepak Bola",
          description: "Penggemar Manchester United, analisis taktik dan statistik"
        },
        {
          title: "Formula 1",
          description: "Pengikut perkembangan Red Bull Racing dan performa pembalap"
        }
      ]
    },
    en: {
      title: "Curriculum Vitae",
      downloadPdf: "Download PDF",
      contact: "Contact",
      profile: "Profile",
      profileText: "Informatics Engineering student (4th semester) at Universitas Islam Balitar with strong background in IT Support, System Administration, and web development. Detail-oriented, communicative, quick to adapt, and passionate about applying technical skills to support technology teams.",
      technicalSkills: "Technical Skills",
      languagesFrameworks: "Languages & Frameworks",
      database: "Database",
      devopsTools: "DevOps & Tools",
      systemServer: "System & Server",
      webinarCms: "Webinar & CMS",
      networking: "Networking",
      experienceProjects: "Experience & Projects",
      projects: "Main Projects",
      education: "Education",
      courseCertifications: "Courses & Certifications",
      interests: "Interests",
      student: "Informatics Engineering Student",
      semester: "4th Semester",
      experience: [
        {
          title: "Sports Content & Data Programming Internship",
          company: "Media Sports Company",
          period: "2024",
          location: "Remote",
          achievements: [
            "Management and scheduling of sports content on CMS platform",
            "Monitoring match statistics data and descriptive metadata integration",
            "Content workflow optimization to improve publication efficiency",
            "Collaboration with editorial team for data format standardization"
          ]
        },
        {
          title: "Full Stack Web Development Internship",
          company: "Tech Development Company",
          period: "2024",
          location: "Blitar, East Java",
          achievements: [
            "End-to-end web application development using Laravel, React.js, and Node.js",
            "Implementation of MVC, routing, and frontend-backend performance optimization",
            "Agile team collaboration in feature development cycles",
            "Implementation of best practices in modern web development"
          ]
        },
        {
          title: "Backend Development Internship",
          company: "Software Solutions",
          period: "2023-2024",
          location: "Blitar, East Java",
          achievements: [
            "Design and implementation of RESTful API, JWT authentication",
            "Development of product management, sales transaction, and daily report features for POS application",
            "Database query optimization and simple payment gateway integration",
            "API documentation and testing to ensure code quality"
          ]
        },
        {
          title: "IT Support & System Administration Internship",
          company: "Local IT Services",
          period: "2023",
          location: "Blitar, East Java",
          achievements: [
            "Installation, configuration, and maintenance of PC/Server (Windows & Linux)",
            "Setup and troubleshooting of LAN/Wi-Fi and small internal networks",
            "Webinar management (VMix, OBS Studio) and e-learning CMS support",
            "Routine system maintenance and data backup"
          ]
        }
      ],
      educationList: [
        {
          degree: "Bachelor of Informatics Engineering",
          institution: "Universitas Islam Balitar",
          period: "2023 - Present",
          gpa: "4th Semester",
          achievements: [
            "Focus on web development and system administration",
            "Active in application development projects",
            "Mastering various modern technologies in IT field"
          ]
        },
        {
          degree: "Computer and Network Engineering",
          institution: "SMKN 1 Nglegok",
          period: "2020 - 2023",
          gpa: "Graduated",
          achievements: [
            "Specialization in networking and troubleshooting",
            "Practical experience in system installation and maintenance",
            "Strong foundation in computer and network technology"
          ]
        }
      ],
      certifications: [
        {
          name: "Java Programming",
          issuer: "Dicoding",
          date: "2024",
          credentialId: "GRX53Y78YZ0M"
        },
        {
          name: "AWS Certified AI-Practitioner",
          issuer: "Amazon Web Services",
          date: "Comming Soon",
          credentialId: "Comming Soon"
        },
        {
          name: "Designing Azure Infrastructure Solutions (AZ-305)",
          issuer: "Microsoft Azure",
          date: "Comming Soon",
          credentialId: "Comming Soon"
        }
      ],
      projectsData: [
        {
          title: "Point-of-Sales Application",
          description: "Laravel-based POS application for small stores with role-based authentication and transaction validation",
          technologies: ["Laravel", "MySQL", "Bootstrap"]
        },
        {
          title: "Multi-Platform Online Store",
          description: "E-commerce using CodeIgniter 3 and Joomla 4 with catalog, cart, and metadata features",
          technologies: ["CodeIgniter", "Joomla", "MySQL", "JavaScript"]
        }
      ],

      interestsData: [
        {
          title: "Football",
          description: "Manchester United fan, tactical and statistical analysis"
        },
        {
          title: "Formula 1",
          description: "Following Red Bull Racing development and driver performance"
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="h-full bg-gray-900 text-white overflow-auto">
      {/* Header */}
      <div className={`bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`${isMobile ? 'w-16 h-16' : 'w-20 h-20'} rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center`}>
              <span className={`${isMobile ? 'text-xl' : 'text-2xl'} font-bold text-white`}>MDA</span>
            </div>
            <div>
              <h1 className={`${isMobile ? 'text-xl' : 'text-3xl'} font-bold text-white`}>Muhammad Divaul Aula</h1>
              <p className={`text-cyan-400 ${isMobile ? 'text-base' : 'text-lg'}`}>{t.student}</p>
              <p className={`text-gray-400 ${isMobile ? 'text-sm' : ''}`}>Universitas Islam Balitar - {t.semester}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
              className={`flex items-center space-x-2 ${isMobile ? 'px-2 py-1' : 'px-3 py-2'} bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg transition-colors duration-200`}
            >
              <Languages className="w-4 h-4" />
              <span className={isMobile ? 'text-xs' : 'text-sm'}>{language === 'id' ? 'EN' : 'ID'}</span>
            </button>
{/* link download CV */}
{!isMobile && (
  <a
    href="https://drive.google.com/drive/folders/1C-kIf5EtI54oWbgAsra8SYl4-iVjjtti?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/30 rounded-lg transition-colors duration-200"
  >
    <Download className="w-4 h-4" />
    <span>{t.downloadPdf}</span>
  </a>
)}

          </div>
        </div>
      </div>

      <div className={isMobile ? 'p-4' : 'p-6'}>
        {/* Contact Information */}
        <div className={`${isMobile ? 'mb-6' : 'mb-8'} bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-cyan-400 mb-4`}>{t.contact}</h2>
          <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 lg:grid-cols-4 gap-4'}`}>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span className={isMobile ? 'text-xs' : 'text-sm'}>divaulaula2@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span className={isMobile ? 'text-xs' : 'text-sm'}>0812-3357-1998</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span className={isMobile ? 'text-xs' : 'text-sm'}>Blitar, Jawa Timur</span>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-4 h-4 text-cyan-400" />
              <span className={isMobile ? 'text-xs' : 'text-sm'}>portofolio-divaul.vercel.app</span>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className={`${isMobile ? 'mb-6' : 'mb-8'} bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-cyan-400 mb-4`}>{t.profile}</h2>
          <p className={`text-gray-300 leading-relaxed ${isMobile ? 'text-sm' : ''}`}>
            {t.profileText}
          </p>
        </div>

        {/* Technical Skills */}
        <div className={`${isMobile ? 'mb-6' : 'mb-8'} bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-cyan-400 mb-4`}>{t.technicalSkills}</h2>
          <div className="space-y-3">
            <div>
              <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white mb-2`}>{t.languagesFrameworks}</h3>
              <p className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>PHP (Laravel, CodeIgniter), JavaScript (Node.js, Three.js), C# (.NET Core)</p>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white mb-2`}>{t.database}</h3>
              <p className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>MySQL, SQLite</p>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white mb-2`}>{t.devopsTools}</h3>
              <p className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>Git, Docker & Docker Compose, VS Code</p>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white mb-2`}>{t.systemServer}</h3>
              <p className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                {language === 'id' 
                  ? 'Instalasi & pemeliharaan server Linux/Windows, virtualisasi ringan'
                  : 'Installation & maintenance of Linux/Windows servers, light virtualization'
                }
              </p>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white mb-2`}>{t.webinarCms}</h3>
              <p className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                {language === 'id'
                  ? 'VMix, OBS Studio, manajemen konten CMS (upload KV, metadata)'
                  : 'VMix, OBS Studio, CMS content management (KV upload, metadata)'
                }
              </p>
            </div>
            <div>
              <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white mb-2`}>{t.networking}</h3>
              <p className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                {language === 'id'
                  ? 'Troubleshooting PC & printer, perawatan LAN/Wi-Fi, setup jaringan skala kecil'
                  : 'PC & printer troubleshooting, LAN/Wi-Fi maintenance, small-scale network setup'
                }
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className={`${isMobile ? 'mb-6' : 'mb-8'} bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-cyan-400 mb-4`}>{t.experienceProjects}</h2>
          <div className={isMobile ? 'space-y-4' : 'space-y-6'}>
            {t.experience.map((job, index) => (
              <div key={index} className="border-l-2 border-cyan-500/30 pl-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium text-white`}>{job.title}</h3>
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400 flex items-center`}>
                    <Calendar className="w-4 h-4 mr-1" />
                    {job.period}
                  </span>
                </div>
                <div className="flex items-center space-x-2 mb-3">
                  <span className={`text-cyan-400 font-medium ${isMobile ? 'text-sm' : ''}`}>{job.company}</span>
                  <span className="text-gray-400">•</span>
                  <span className={`text-gray-400 ${isMobile ? 'text-sm' : ''}`}>{job.location}</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {job.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className={isMobile ? 'text-xs' : 'text-sm'}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className={`${isMobile ? 'mb-6' : 'mb-8'} bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-cyan-400 mb-4`}>{t.projects}</h2>
          <div className="space-y-4">
            {t.projectsData.map((project, index) => (
              <div key={index} className="border-l-2 border-purple-500/30 pl-4">
                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium text-white mb-2`}>{project.title}</h3>
                <p className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'} mb-2`}>{project.description}</p>
                <div className={`flex flex-wrap ${isMobile ? 'gap-1' : 'gap-2'}`}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={`${isMobile ? 'px-1 py-0.5' : 'px-2 py-1'} bg-purple-500/20 text-purple-400 rounded ${isMobile ? 'text-xs' : 'text-xs'}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className={`${isMobile ? 'mb-6' : 'mb-8'} bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-cyan-400 mb-4`}>{t.education}</h2>
          {t.educationList.map((edu, index) => (
            <div key={index} className="border-l-2 border-cyan-500/30 pl-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className={`${isMobile ? 'text-base' : 'text-lg'} font-medium text-white`}>{edu.degree}</h3>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400 flex items-center`}>
                  <Calendar className="w-4 h-4 mr-1" />
                  {edu.period}
                </span>
              </div>
              <div className="flex items-center space-x-2 mb-3">
                <span className={`text-cyan-400 font-medium ${isMobile ? 'text-sm' : ''}`}>{edu.institution}</span>
                <span className="text-gray-400">•</span>
                <span className={`text-gray-400 ${isMobile ? 'text-sm' : ''}`}>{edu.gpa}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-gray-300">
                {edu.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className={isMobile ? 'text-xs' : 'text-sm'}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`${isMobile ? 'mb-6' : 'mb-8'} bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-cyan-400 mb-4`}>{t.courseCertifications}</h2>
          <div className={`grid grid-cols-1 ${isMobile ? 'gap-3' : 'md:grid-cols-2 gap-4'}`}>
            {t.certifications.map((cert, index) => (
              <div key={index} className={`bg-gray-700/30 rounded-lg ${isMobile ? 'p-3' : 'p-4'} border border-gray-600/30`}>
                <h3 className={`font-medium text-white mb-1 ${isMobile ? 'text-sm' : ''}`}>{cert.name}</h3>
                <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-cyan-400 mb-2`}>{cert.issuer}</p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{cert.date}</span>
                  <span className={isMobile ? 'text-xs' : ''}>ID: {cert.credentialId}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interests */}
        <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-lg' : 'text-xl'} font-semibold text-cyan-400 mb-4`}>{t.interests}</h2>
          <div className="space-y-3">
            {t.interestsData.map((interest, index) => (
              <div key={index}>
                <h3 className={`${isMobile ? 'text-sm' : 'text-base'} font-medium text-white mb-2`}>{interest.title}</h3>
                <p className={`text-gray-300 ${isMobile ? 'text-xs' : 'text-sm'}`}>{interest.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVApp;