import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Globe, Languages } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const ContactApp: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const translations = {
    id: {
      title: "Hubungi Saya",
      subtitle: "Mari terhubung dan diskusikan peluang",
      contactInformation: "Informasi Kontak",
      email: "Email",
      phone: "Telepon",
      location: "Lokasi",
      website: "Website",
      availability: "Ketersediaan",
      socialMedia: "Media Sosial",
      sendMessage: "Kirim Pesan",
      name: "Nama",
      subject: "Subjek",
      message: "Pesan",
      namePlaceholder: "Nama Anda",
      emailPlaceholder: "email.anda@contoh.com",
      subjectPlaceholder: "Tentang apa ini?",
      messagePlaceholder: "Pesan Anda...",
      availabilityItems: [
        "Tersedia untuk proyek freelance",
        "Terbuka untuk kolaborasi",
        "Saat ini mencari peluang magang"
      ]
    },
    en: {
      title: "Get In Touch",
      subtitle: "Let's connect and discuss opportunities",
      contactInformation: "Contact Information",
      email: "Email",
      phone: "Phone",
      location: "Location",
      website: "Website",
      availability: "Availability",
      socialMedia: "Social Media",
      sendMessage: "Send Message",
      name: "Name",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "your.email@example.com",
      subjectPlaceholder: "What's this about?",
      messagePlaceholder: "Your message...",
      availabilityItems: [
        "Available for freelance projects",
        "Open to collaboration",
        "Currently seeking internship opportunities"
      ]
    }
  };

  const t = translations[language];

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const { name, email, subject, message } = formData;
  const body = `Name: ${name} Email: ${email} Message: ${message}`;
  const mailtoLink = `mailto:divaulaula2@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  window.location.href = mailtoLink;
  setFormData({ name: '', email: '', subject: '', message: '' });
};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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

      <div className={`grid grid-cols-1 ${isMobile ? 'gap-4' : isTablet ? 'gap-4' : 'lg:grid-cols-2 gap-6'}`}>
        {/* Contact Information */}
        <div className={isMobile ? 'space-y-4' : 'space-y-6'}>
          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <h2 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.contactInformation}</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center`}>
                  <Mail className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-cyan-400`} />
                </div>
                <div>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{t.email}</p>
                  <p className={`text-white ${isMobile ? 'text-sm' : ''}`}>divaulaula2@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center`}>
                  <Phone className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-cyan-400`} />
                </div>
                <div>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{t.phone}</p>
                  <p className={`text-white ${isMobile ? 'text-sm' : ''}`}>0812-3357-1998</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center`}>
                  <MapPin className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-cyan-400`} />
                </div>
                <div>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{t.location}</p>
                  <p className={`text-white ${isMobile ? 'text-sm' : ''}`}>Blitar, Indonesia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center`}>
                  <Globe className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5'} text-cyan-400`} />
                </div>
                <div>
                  <p className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-400`}>{t.website}</p>
                  <p className={`text-white ${isMobile ? 'text-sm' : ''}`}>portofolio-divaul.vercel.app</p>
                </div>
              </div>
            </div>
          </div>

          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <h2 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.availability}</h2>
            <div className="space-y-3">
              {t.availabilityItems.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  {index === 0 && <Calendar className="w-4 h-4 text-cyan-400" />}
                  {index === 1 && <MessageCircle className="w-4 h-4 text-cyan-400" />}
                  {index === 2 && <span className="w-2 h-2 bg-green-400 rounded-full"></span>}
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-gray-300`}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
            <h2 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.socialMedia}</h2>
            <div className={`flex ${isMobile ? 'space-x-2' : 'space-x-4'}`}>
              <a href="#" className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center hover:border-cyan-400/50 transition-colors duration-200`}>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold text-white`}>LI</span>
              </a>
              <a href="#" className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center hover:border-cyan-400/50 transition-colors duration-200`}>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold text-white`}>GH</span>
              </a>
              <a href="#" className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center hover:border-cyan-400/50 transition-colors duration-200`}>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold text-white`}>TW</span>
              </a>
              <a href="#" className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-lg bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 flex items-center justify-center hover:border-cyan-400/50 transition-colors duration-200`}>
                <span className={`${isMobile ? 'text-xs' : 'text-sm'} font-bold text-white`}>IG</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className={`bg-gray-800/50 rounded-lg border border-cyan-500/30 ${isMobile ? 'p-4' : 'p-6'}`}>
          <h2 className={`${isMobile ? 'text-base' : 'text-lg'} font-semibold text-cyan-400 mb-4`}>{t.sendMessage}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-300 mb-1`}>
                {t.name}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full ${isMobile ? 'px-2 py-1.5' : 'px-3 py-2'} bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 ${isMobile ? 'text-sm' : ''}`}
                placeholder={t.namePlaceholder}
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-300 mb-1`}>
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full ${isMobile ? 'px-2 py-1.5' : 'px-3 py-2'} bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 ${isMobile ? 'text-sm' : ''}`}
                placeholder={t.emailPlaceholder}
              />
            </div>
            
            <div>
              <label htmlFor="subject" className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-300 mb-1`}>
                {t.subject}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full ${isMobile ? 'px-2 py-1.5' : 'px-3 py-2'} bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 ${isMobile ? 'text-sm' : ''}`}
                placeholder={t.subjectPlaceholder}
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block ${isMobile ? 'text-xs' : 'text-sm'} font-medium text-gray-300 mb-1`}>
                {t.message}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={isMobile ? 4 : 6}
                className={`w-full ${isMobile ? 'px-2 py-1.5' : 'px-3 py-2'} bg-gray-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 transition-colors duration-200 resize-none ${isMobile ? 'text-sm' : ''}`}
                placeholder={t.messagePlaceholder}
              />
            </div>
            
            <button
              type="submit"
              className={`w-full flex items-center justify-center space-x-2 ${isMobile ? 'px-3 py-2' : 'px-4 py-2'} bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 rounded-lg transition-all duration-200 glow-hover`}
            >
              <Send className="w-4 h-4" />
              <span className={isMobile ? 'text-sm' : ''}>{t.sendMessage}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;