import React from 'react';
import { Power, Volume2, Wifi, Battery, Monitor } from 'lucide-react';
import { WindowState } from '../types';

interface TaskbarProps {
  onStartMenuToggle: () => void;
  startMenuOpen: boolean;
  openWindows: WindowState[];
  onWindowClick: (windowId: string) => void;
  systemTime: Date;
  isMobile: boolean;
}

const Taskbar: React.FC<TaskbarProps> = ({
  onStartMenuToggle,
  startMenuOpen,
  openWindows,
  onWindowClick,
  systemTime,
  isMobile
}) => {
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
  };

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${isMobile ? 'h-12' : 'h-14'} bg-black/80 backdrop-blur-sm border-t border-cyan-500/30 flex items-center ${isMobile ? 'px-1' : 'px-2'} z-50`}>
      {/* Start Button */}
      <button
        onClick={onStartMenuToggle}
        className={`${isMobile ? 'h-8 px-2' : 'h-10 px-4'} rounded-lg flex items-center ${isMobile ? 'space-x-1' : 'space-x-2'} transition-all duration-200 ${
          startMenuOpen 
            ? 'bg-cyan-500/30 border border-cyan-400/50 glow' 
            : 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:border-cyan-400/50 hover:glow'
        }`}
      >
        <div className={`${isMobile ? 'w-4 h-4' : 'w-6 h-6'} rounded bg-gradient-to-br from-cyan-400 to-purple-400 flex items-center justify-center`}>
          <Monitor className={`${isMobile ? 'w-2 h-2' : 'w-4 h-4'} text-white`} />
        </div>
        {!isMobile && <span className="text-white text-sm font-medium">SistemKu</span>}
      </button>

      {/* Window Buttons */}
      <div className={`flex-1 flex items-center ${isMobile ? 'space-x-1 ml-2' : 'space-x-2 ml-4'} overflow-x-auto`}>
        {openWindows.map((window) => (
          <button
            key={window.id}
            onClick={() => onWindowClick(window.id)}
            className={`${isMobile ? 'h-8 px-2' : 'h-10 px-3'} rounded-lg flex items-center ${isMobile ? 'space-x-1' : 'space-x-2'} transition-all duration-200 flex-shrink-0 ${
              window.isMinimized 
                ? 'bg-gray-700/50 border border-gray-600/50' 
                : 'bg-cyan-500/20 border border-cyan-500/30 hover:border-cyan-400/50'
            }`}
          >
            <div className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} rounded bg-gradient-to-br from-cyan-400 to-purple-400`} />
            {!isMobile && <span className="text-white text-sm max-w-32 truncate">{window.title}</span>}
          </button>
        ))}
      </div>

      {/* System Tray */}
      <div className={`flex items-center ${isMobile ? 'space-x-2 ml-2' : 'space-x-4 ml-4'}`}>
        {!isMobile && (
          <div className="flex items-center space-x-2 text-cyan-400">
            <Wifi className="w-4 h-4" />
            <Volume2 className="w-4 h-4" />
            <Battery className="w-4 h-4" />
          </div>
        )}
        
        <div className="text-right">
          <div className={`text-white ${isMobile ? 'text-xs' : 'text-sm'} font-medium`}>
            {formatTime(systemTime)}
          </div>
          {!isMobile && (
            <div className="text-cyan-400 text-xs">
              {formatDate(systemTime)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Taskbar;