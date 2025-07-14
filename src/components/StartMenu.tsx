import React from 'react';
import { Power, Settings, User, Search, Folder, FileText, Mail, Code, Terminal } from 'lucide-react';
import { AppConfig } from '../types';

interface StartMenuProps {
  onClose: () => void;
  onOpenApp: (appId: string) => void;
  apps: AppConfig[];
  isMobile: boolean;
}

const StartMenu: React.FC<StartMenuProps> = ({ onClose, onOpenApp, apps, isMobile }) => {
  const getIconComponent = (iconName: string) => {
    const icons = {
      Folder,
      FileText,
      User,
      Mail,
      Code,
      Terminal,
    };
    return icons[iconName as keyof typeof icons] || Folder;
  };

  return (
    <div className="fixed inset-0 z-40" onClick={onClose}>
      <div 
        className={`absolute ${isMobile ? 'bottom-12 left-2 right-2' : 'bottom-14 left-4 w-80'} bg-black/90 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 border-b border-cyan-500/30">
          <div className="flex items-center space-x-3">
            <div className={`${isMobile ? 'w-8 h-8' : 'w-10 h-10'} rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center`}>
              <User className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'} text-white`} />
            </div>
            <div>
              <div className={`text-white font-medium ${isMobile ? 'text-sm' : ''}`}>Muhammad Divaul Aula</div>
              <div className={`text-cyan-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>Mahasiswa Teknik Informatika</div>
            </div>
          </div>
        </div>

        {/* Search */}
        {!isMobile && (
          <div className="p-3 border-b border-cyan-500/30">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search applications..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
              />
            </div>
          </div>
        )}

        {/* Applications */}
        <div className="p-3">
          <div className={`text-cyan-400 ${isMobile ? 'text-xs' : 'text-sm'} font-medium mb-2`}>Applications</div>
          <div className={`${isMobile ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-1 gap-1'}`}>
            {apps.map((app) => {
              const IconComponent = getIconComponent(app.icon);
              return (
                <button
                  key={app.id}
                  onClick={() => onOpenApp(app.id)}
                  className={`w-full flex ${isMobile ? 'flex-col items-center p-2' : 'items-center space-x-3 p-2'} rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group`}
                >
                  <div className={`${isMobile ? 'w-6 h-6 mb-1' : 'w-6 h-6'} rounded bg-gradient-to-br from-cyan-500 to-purple-500 border border-cyan-400 group-hover:border-cyan-300 flex items-center justify-center transition-all duration-200 shadow-md`}>
                    <IconComponent className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} text-white`} />
                  </div>
                  <span className={`text-white ${isMobile ? 'text-xs text-center' : 'text-sm'}`}>{isMobile ? app.title.replace('.exe', '').replace('.pdf', '') : app.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* System Options */}
        {!isMobile && (
          <div className="p-3 border-t border-cyan-500/30">
            <div className="flex items-center justify-between">
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200">
                <Settings className="w-4 h-4 text-cyan-400" />
                <span className="text-white text-sm">Settings</span>
              </button>
              <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-red-500/10 transition-colors duration-200">
                <Power className="w-4 h-4 text-red-400" />
                <span className="text-white text-sm">Shutdown</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StartMenu;