import React, { useState, useEffect } from 'react';
import { Monitor, Cpu, HardDrive, Wifi, Shield } from 'lucide-react';

interface BootScreenProps {
  onBootComplete: () => void;
}

const BootScreen: React.FC<BootScreenProps> = ({ onBootComplete }) => {
  const [bootStage, setBootStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const bootMessages = [
    "SistemKu v2.4.7 - Sistem Operasi Personal",
    "Menginisialisasi prosesor quantum...",
    "Memuat driver jaringan neural...",
    "Menghubungkan ke matrix...",
    "Mengkalibrasi mesin realitas...",
    "Mengaktifkan modul portfolio...",
    "Selamat datang di SistemKu!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setTimeout(onBootComplete, 1000);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, [onBootComplete]);

  useEffect(() => {
    const messageTimer = setInterval(() => {
      setBootStage(prev => Math.min(prev + 1, bootMessages.length - 1));
    }, 800);

    return () => clearInterval(messageTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center font-mono">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-green-900/20" />
      
      {/* Scan lines effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent animate-pulse" />
      </div>

      <div className="relative z-10 text-center max-w-2xl px-8">
        <div className="mb-8">
          <div className="text-4xl font-bold text-cyan-400 mb-2 glow">
            SistemKu
          </div>
          <div className="text-cyan-300 text-sm">Sistem Operasi Personal</div>
        </div>

        <div className="mb-8 space-y-4">
          <div className="flex justify-center space-x-8 text-cyan-400">
            <div className="flex items-center space-x-2">
              <Cpu className="w-5 h-5" />
              <span className="text-sm">Neural Core</span>
            </div>
            <div className="flex items-center space-x-2">
              <HardDrive className="w-5 h-5" />
              <span className="text-sm">Memory Banks</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="w-5 h-5" />
              <span className="text-sm">Network Interface</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm">Security Module</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="w-full bg-gray-800 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full transition-all duration-300 glow"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="text-cyan-400 text-sm">{Math.round(progress)}%</div>
        </div>

        <div className="text-left bg-black/50 p-4 rounded border border-cyan-500/30 min-h-[200px]">
          {bootMessages.slice(0, bootStage + 1).map((message, index) => (
            <div 
              key={index}
              className={`text-green-400 text-sm mb-1 ${
                index === bootStage ? 'animate-pulse' : ''
              }`}
            >
              {index === bootStage && progress < 100 ? (
                <>
                  {message}
                  <span className="animate-pulse">_</span>
                </>
              ) : (
                message
              )}
            </div>
          ))}
        </div>

        {progress >= 100 && (
          <div className="mt-4 text-cyan-400 text-sm animate-pulse">
            Press any key to continue...
          </div>
        )}
      </div>
    </div>
  );
};

export default BootScreen;