import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Languages } from 'lucide-react';
import { useMediaQuery } from '../../hooks/useMediaQuery';

const TerminalApp: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const [history, setHistory] = useState<string[]>([]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const translations = {
    id: {
      welcomeMessage: `
MyOS Terminal v2.4.7
Ketik 'help' untuk melihat perintah yang tersedia.
Selamat datang di matrix, Neo...
`,
      commands: {
        help: () => `
Perintah yang tersedia:
  help          - Tampilkan pesan bantuan ini
  clear         - Bersihkan terminal
  whoami        - Tampilkan informasi pengguna
  projects      - Daftar semua proyek
  skills        - Tampilkan keahlian teknis
  contact       - Tampilkan informasi kontak
  about         - Tampilkan informasi tentang
  neofetch      - Tampilkan informasi sistem
  ls            - Daftar isi direktori
  cat <file>    - Tampilkan isi file
  pwd           - Tampilkan direktori saat ini
  date          - Tampilkan tanggal dan waktu saat ini
  uptime        - Tampilkan waktu aktif sistem
  echo <text>   - Echo teks
  cowsay <text> - Buat sapi mengatakan sesuatu
  matrix        - Masuk ke matrix...
  exit          - Tutup terminal
`,
        whoami: () => `
Muhammad Divaul Aula - Mahasiswa Teknik Informatika
Email: divaulaula2@gmail.com
Lokasi: Blitar, Indonesia
Status: Tersedia untuk peluang
`,
        projects: () => `
Proyek Terbaru:
1. Website Portfolio Bertenaga AI    [React, TypeScript, AI]
2. Sistem Navigasi Kampus Pintar     [Python, OpenCV, React Native]
3. Sistem Voting Blockchain          [Solidity, Web3.js, React]
4. Rekomendasi Musik Berbasis ML     [Python, TensorFlow, Flask]

Gunakan 'cat project-<nomor>' untuk detail.
`,
        skills: () => `
Keahlian Teknis:
Pemrograman: JavaScript (90%), Python (88%), Java (80%), C++ (75%)
Framework: React (92%), Node.js (88%), Laravel (85%), CodeIgniter (80%)
Database: MySQL (85%), SQLite (80%), PostgreSQL (75%)
DevOps: Docker (80%), Git (90%), Linux (85%)
Lainnya: Machine Learning, Blockchain, Pengembangan Mobile
`,
        contact: () => `
Informasi Kontak:
Email: divaulaula2@gmail.com
Telepon: 0812-3357-1998
Portfolio: portofolio-divaul.vercel.app
Lokasi: Blitar, Indonesia
`,
        about: () => `
Tentang Saya:
Saya adalah mahasiswa Teknik Informatika yang penuh semangat dengan pengalaman 2+ tahun
dalam pengembangan full-stack. Saya suka menciptakan solusi inovatif dan bekerja
dengan teknologi terdepan. Saat ini mencari peluang magang untuk mengembangkan
keterampilan saya lebih lanjut dan berkontribusi pada proyek yang bermakna.
`,
        neofetch: () => `
         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄        divaul@myos
       ████████████████████      ─────────────
     ████████████████████████    OS: MyOS v2.4.7
   ████████████████████████████  Host: Personal System
  ██████████████████████████████ Kernel: Linux 5.15.0-myos
 ████████████████████████████████ Uptime: 2 hari, 14 jam
█████████████████████████████████ Shell: zsh 5.8.1
█████████████████████████████████ Terminal: MyOS Terminal
█████████████████████████████████ CPU: Intel i7-12700K
█████████████████████████████████ GPU: NVIDIA RTX 4070
 ████████████████████████████████ Memory: 16GB DDR4
  ██████████████████████████████ Storage: 1TB NVMe SSD
   ████████████████████████████
     ████████████████████████    
       ████████████████████      
         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄        
`,
        ls: () => `
drwxr-xr-x  projects/
drwxr-xr-x  skills/
drwxr-xr-x  documents/
-rw-r--r--  about.txt
-rw-r--r--  contact.txt
-rw-r--r--  cv.pdf
-rw-r--r--  readme.md
`,
        pwd: () => '/home/divaul',
        date: () => new Date().toLocaleString('id-ID'),
        uptime: () => `Sistem telah berjalan selama 2 hari, 14 jam, 32 menit`,
        cowsay: (text: string) => `
 ${' '.repeat((text || 'Halo dari terminal!').length + 2)}
< ${text || 'Halo dari terminal!'} >
 ${' '.repeat((text || 'Halo dari terminal!').length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`,
        matrix: () => `
Bangun, Neo...
Matrix memilikimu...
Ikuti kelinci putih...

[MEMASUKI MODE MATRIX...]
[KONEKSI TERBENTUK]
[REALITY.EXE BERHENTI BEKERJA]
`,
        exit: () => 'Selamat tinggal! Sesi terminal berakhir.'
      }
    },
    en: {
      welcomeMessage: `
MyOS Terminal v2.4.7
Type 'help' to see available commands.
Welcome to the matrix, Neo...
`,
      commands: {
        help: () => `
Available commands:
  help          - Show this help message
  clear         - Clear the terminal
  whoami        - Display user information
  projects      - List all projects
  skills        - Show technical skills
  contact       - Display contact information
  about         - Show about information
  neofetch      - Display system information
  ls            - List directory contents
  cat <file>    - Display file contents
  pwd           - Show current directory
  date          - Show current date and time
  uptime        - Show system uptime
  echo <text>   - Echo text
  cowsay <text> - Make a cow say something
  matrix        - Enter the matrix...
  exit          - Close terminal
`,
        whoami: () => `
Muhammad Divaul Aula - Informatics Engineering Student
Email: divaulaula2@gmail.com
Location: Blitar, Indonesia
Status: Available for opportunities
`,
        projects: () => `
Recent Projects:
1. AI-Powered Portfolio Website    [React, TypeScript, AI]
2. Smart Campus Navigation System  [Python, OpenCV, React Native]
3. Blockchain Voting System        [Solidity, Web3.js, React]
4. ML-Based Music Recommendation   [Python, TensorFlow, Flask]

Use 'cat project-<number>' for details.
`,
        skills: () => `
Technical Skills:
Programming: JavaScript (90%), Python (88%), Java (80%), C++ (75%)
Frameworks: React (92%), Node.js (88%), Laravel (85%), CodeIgniter (80%)
Databases: MySQL (85%), SQLite (80%), PostgreSQL (75%)
DevOps: Docker (80%), Git (90%), Linux (85%)
Other: Machine Learning, Blockchain, Mobile Development
`,
        contact: () => `
Contact Information:
Email: divaulaula2@gmail.com
Phone: 0812-3357-1998
Portfolio: portofolio-divaul.vercel.app
Location: Blitar, Indonesia
`,
        about: () => `
About Me:
I'm a passionate Informatics Engineering student with 2+ years of experience
in full-stack development. I love creating innovative solutions and working
with cutting-edge technologies. Currently seeking internship opportunities
to further develop my skills and contribute to meaningful projects.
`,
        neofetch: () => `
         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄        divaul@myos
       ████████████████████      ─────────────
     ████████████████████████    OS: MyOS v2.4.7
   ████████████████████████████  Host: Personal System
  ██████████████████████████████ Kernel: Linux 5.15.0-myos
 ████████████████████████████████ Uptime: 2 days, 14 hours
█████████████████████████████████ Shell: zsh 5.8.1
█████████████████████████████████ Terminal: MyOS Terminal
█████████████████████████████████ CPU: Intel i7-12700K
█████████████████████████████████ GPU: NVIDIA RTX 4070
 ████████████████████████████████ Memory: 16GB DDR4
  ██████████████████████████████ Storage: 1TB NVMe SSD
   ████████████████████████████
     ████████████████████████    
       ████████████████████      
         ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄        
`,
        ls: () => `
drwxr-xr-x  projects/
drwxr-xr-x  skills/
drwxr-xr-x  documents/
-rw-r--r--  about.txt
-rw-r--r--  contact.txt
-rw-r--r--  cv.pdf
-rw-r--r--  readme.md
`,
        pwd: () => '/home/divaul',
        date: () => new Date().toString(),
        uptime: () => `System has been running for 2 days, 14 hours, 32 minutes`,
        cowsay: (text: string) => `
 ${' '.repeat((text || 'Hello from the terminal!').length + 2)}
< ${text || 'Hello from the terminal!'} >
 ${' '.repeat((text || 'Hello from the terminal!').length + 2)}
        \\   ^__^
         \\  (oo)\\_______
            (__)\\       )\\/\\
                ||----w |
                ||     ||
`,
        matrix: () => `
Wake up, Neo...
The Matrix has you...
Follow the white rabbit...

[ENTERING MATRIX MODE...]
[CONNECTION ESTABLISHED]
[REALITY.EXE STOPPED WORKING]
`,
        exit: () => 'Goodbye! Terminal session ended.'
      }
    }
  };

  const t = translations[language];

  const processCommand = (cmd: string) => {
    const [command, ...args] = cmd.trim().split(' ');
    const commandFunction = t.commands[command as keyof typeof t.commands];
    
    if (commandFunction) {
      return commandFunction(args.join(' '));
    } else if (command.startsWith('cat')) {
      const filename = args[0];
      if (filename === 'about.txt') {
        return t.commands.about();
      } else if (filename === 'contact.txt') {
        return t.commands.contact();
      } else if (filename?.startsWith('project-')) {
        const projectNum = filename.split('-')[1];
        return language === 'id' 
          ? `Detail Proyek ${projectNum}:\n[Ini akan menampilkan informasi detail proyek]`
          : `Project ${projectNum} details:\n[This would show detailed project information]`;
      }
      return language === 'id' 
        ? `cat: ${filename}: File atau direktori tidak ditemukan`
        : `cat: ${filename}: No such file or directory`;
    } else if (command.startsWith('echo')) {
      return args.join(' ');
    } else if (command === '') {
      return '';
    } else if (command === 'clear') {
      setHistory([]);
      return '';
    }
    
    return language === 'id' 
      ? `Perintah tidak ditemukan: ${command}. Ketik 'help' untuk perintah yang tersedia.`
      : `Command not found: ${command}. Type 'help' for available commands.`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCommand.trim()) {
      const output = processCommand(currentCommand);
      setHistory(prev => [...prev, `$ ${currentCommand}`, output]);
      setCommandHistory(prev => [...prev, currentCommand]);
      setCurrentCommand('');
      setHistoryIndex(-1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentCommand('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setHistory([t.welcomeMessage]);
  }, [language]);

  return (
    <div className={`h-full bg-black text-green-400 font-mono ${isMobile ? 'p-2' : 'p-4'} overflow-hidden flex flex-col`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2 text-cyan-400">
          <Terminal className="w-4 h-4" />
          <span className={isMobile ? 'text-xs' : 'text-sm'}>MyOS Terminal</span>
        </div>
        <button
          onClick={() => setLanguage(language === 'id' ? 'en' : 'id')}
          className={`flex items-center space-x-2 ${isMobile ? 'px-2 py-1' : 'px-3 py-2'} bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/30 rounded-lg transition-colors duration-200`}
        >
          <Languages className="w-4 h-4" />
          <span className={isMobile ? 'text-xs' : 'text-sm'}>{language === 'id' ? 'EN' : 'ID'}</span>
        </button>
      </div>
      
      <div 
        ref={terminalRef}
        className={`flex-1 overflow-auto whitespace-pre-wrap ${isMobile ? 'text-xs' : 'text-sm'} leading-relaxed`}
      >
        {history.map((line, index) => (
          <div key={index} className={line.startsWith('$') ? 'text-cyan-400' : 'text-green-400'}>
            {line}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="flex items-center mt-2">
          <span className="text-cyan-400 mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`flex-1 bg-transparent text-green-400 outline-none ${isMobile ? 'text-xs' : ''}`}
            placeholder={language === 'id' ? 'Masukkan perintah...' : 'Enter command...'}
          />
          <span className="text-green-400 animate-pulse">_</span>
        </form>
      </div>
      
      <div className={`${isMobile ? 'text-xs' : 'text-xs'} text-gray-600 mt-2`}>
        {isMobile 
          ? (language === 'id' ? 'Ketuk untuk mengetik perintah' : 'Tap to type commands')
          : (language === 'id' ? 'Gunakan tombol ↑↓ untuk navigasi riwayat perintah' : 'Use ↑↓ arrow keys to navigate command history')
        }
      </div>
    </div>
  );
};

export default TerminalApp;