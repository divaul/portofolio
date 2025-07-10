import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Hubungi Saya
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Siap mewujudkan ide Anda? Mari diskusikan bagaimana kita bisa bekerja sama
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Mari Terhubung</h3>
                <p className="text-slate-300 mb-8">
                  Saya selalu antusias untuk mendiskusikan peluang baru, berkolaborasi dalam proyek menarik, 
                  atau sekadar berbincang tentang teknologi dan inovasi.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-lg">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Email</p>
                    <p className="text-white">divaulaula2@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Telepon</p>
                    <p className="text-white">+62 812-3357-1998</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-lg">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">Lokasi</p>
                    <p className="text-white">Kabupaten Blitar, Jawa Timur</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Ikuti Saya</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/divaul"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
                  >
                    <Github size={20} className="text-slate-300 group-hover:text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/divaul-aula-92b990294/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
                  >
                    <Linkedin size={20} className="text-slate-300 group-hover:text-white" />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-700 rounded-lg hover:bg-slate-600 transition-colors group"
                  >
                    <Twitter size={20} className="text-slate-300 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800 rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                      Nama
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                      placeholder="Nama Anda"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                      placeholder="email@anda.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
                    placeholder="Tentang apa ini?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50 flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Kirim Pesan</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;