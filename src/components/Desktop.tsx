import React, { useState, useEffect } from 'react';
import Taskbar from './Taskbar';
import StartMenu from './StartMenu';
import Window from './Window';
import WallpaperSettings from './WallpaperSettings';
import { useWindows } from '../hooks/useWindows';
import { AppConfig, DesktopIcon } from '../types';
import { Folder, FileText, User, Mail, Code, Terminal, Settings } from 'lucide-react';
import AnimeWallpaper from './AnimeWallpaper';

// Import app components
import ProjectsApp from './apps/ProjectsApp';
import SkillsApp from './apps/SkillsApp';
import AboutApp from './apps/AboutApp';
import CVApp from './apps/CVApp';
import ContactApp from './apps/ContactApp';
import TerminalApp from './apps/TerminalApp';

const Desktop: React.FC = () => {
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [wallpaperSettingsOpen, setWallpaperSettingsOpen] = useState(false);
  const [systemTime, setSystemTime] = useState(new Date());
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [currentWallpaper, setCurrentWallpaper] = useState(
    'https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/pixel-jeff-mario.gif'
  );
  const windowManager = useWindows();

  const appConfigs: AppConfig[] = [
    {
      id: 'projects',
      title: 'Projects.exe',
      icon: 'Folder',
      component: ProjectsApp,
      defaultSize: { width: 800, height: 600 },
      minSize: { width: 400, height: 300 }
    },
    {
      id: 'skills',
      title: 'Skills.exe',
      icon: 'Code',
      component: SkillsApp,
      defaultSize: { width: 700, height: 500 },
      minSize: { width: 400, height: 300 }
    },
    {
      id: 'about',
      title: 'About.exe',
      icon: 'User',
      component: AboutApp,
      defaultSize: { width: 600, height: 500 },
      minSize: { width: 400, height: 300 }
    },
    {
      id: 'cv',
      title: 'CV.pdf',
      icon: 'FileText',
      component: CVApp,
      defaultSize: { width: 650, height: 550 },
      minSize: { width: 400, height: 500 }
    },
    {
      id: 'contact',
      title: 'Contact.exe',
      icon: 'Mail',
      component: ContactApp,
      defaultSize: { width: 500, height: 600 },
      minSize: { width: 350, height: 400 }
    },
    {
      id: 'terminal',
      title: 'Terminal.exe',
      icon: 'Terminal',
      component: TerminalApp,
      defaultSize: { width: 700, height: 400 },
      minSize: { width: 400, height: 200 }
    }
  ];

  // Add settings app
  const settingsApp: AppConfig = {
    id: 'settings',
    title: 'Settings.exe',
    icon: 'Settings',
    component: () => <div className="p-4 text-white">Settings Panel</div>,
    defaultSize: { width: 400, height: 300 },
    minSize: { width: 300, height: 200 }
  };

  const allApps = [...appConfigs, settingsApp];

  const getDesktopIcons = (): DesktopIcon[] => {
    if (isMobile) {
      // Mobile: 2 columns, closer spacing
      return [
        { id: 'projects', title: 'Projects', icon: 'Folder', position: { x: 20, y: 20 }, appId: 'projects' },
        { id: 'skills', title: 'Skills', icon: 'Code', position: { x: 120, y: 20 }, appId: 'skills' },
        { id: 'about', title: 'About Me', icon: 'User', position: { x: 20, y: 120 }, appId: 'about' },
        { id: 'cv', title: 'My CV', icon: 'FileText', position: { x: 120, y: 120 }, appId: 'cv' },
        { id: 'contact', title: 'Contact', icon: 'Mail', position: { x: 20, y: 220 }, appId: 'contact' },
        { id: 'terminal', title: 'Terminal', icon: 'Terminal', position: { x: 120, y: 220 }, appId: 'terminal' },
        { id: 'settings', title: 'Settings', icon: 'Settings', position: { x: 20, y: 320 }, appId: 'settings' }
      ];
    } else if (isTablet) {
      // Tablet: 3 columns
      return [
        { id: 'projects', title: 'Projects', icon: 'Folder', position: { x: 30, y: 30 }, appId: 'projects' },
        { id: 'skills', title: 'Skills', icon: 'Code', position: { x: 150, y: 30 }, appId: 'skills' },
        { id: 'about', title: 'About Me', icon: 'User', position: { x: 270, y: 30 }, appId: 'about' },
        { id: 'cv', title: 'My CV', icon: 'FileText', position: { x: 30, y: 150 }, appId: 'cv' },
        { id: 'contact', title: 'Contact', icon: 'Mail', position: { x: 150, y: 150 }, appId: 'contact' },
        { id: 'terminal', title: 'Terminal', icon: 'Terminal', position: { x: 270, y: 150 }, appId: 'terminal' },
        { id: 'settings', title: 'Settings', icon: 'Settings', position: { x: 30, y: 270 }, appId: 'settings' }
      ];
    } else {
      // Desktop: optimized layout - 2 columns on left side
      return [
        { id: 'projects', title: 'Projects', icon: 'Folder', position: { x: 30, y: 30 }, appId: 'projects' },
        { id: 'skills', title: 'Skills', icon: 'Code', position: { x: 150, y: 30 }, appId: 'skills' },
        { id: 'about', title: 'About Me', icon: 'User', position: { x: 30, y: 150 }, appId: 'about' },
        { id: 'cv', title: 'My CV', icon: 'FileText', position: { x: 150, y: 150 }, appId: 'cv' },
        { id: 'contact', title: 'Contact', icon: 'Mail', position: { x: 30, y: 270 }, appId: 'contact' },
        { id: 'terminal', title: 'Terminal', icon: 'Terminal', position: { x: 150, y: 270 }, appId: 'terminal' },
        { id: 'settings', title: 'Settings', icon: 'Settings', position: { x: 30, y: 390 }, appId: 'settings' }
      ];
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSystemTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleIconDoubleClick = (appId: string) => {
    if (appId === 'settings') {
      setWallpaperSettingsOpen(true);
      return;
    }
    
    const appConfig = allApps.find(app => app.id === appId);
    if (appConfig) {
      windowManager.openWindow(appConfig);
    }
  };

  const getIconComponent = (iconName: string) => {
    const icons = {
      Folder,
      FileText,
      User,
      Mail,
      Code,
      Terminal,
      Settings
    };
    return icons[iconName as keyof typeof icons] || Folder;
  };

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Static Wallpaper */}
      <AnimeWallpaper wallpaper={currentWallpaper} />

      {/* Desktop Icons */}
      <div className={`absolute inset-0 ${isMobile ? 'p-2' : 'p-4'}`}>
        {getDesktopIcons().map((icon) => {
          const IconComponent = getIconComponent(icon.icon);
          return (
            <div
              key={icon.id}
              className="absolute cursor-pointer group"
              style={{ left: icon.position.x, top: icon.position.y }}
              onDoubleClick={() => handleIconDoubleClick(icon.appId)}
            >
              <div className={`flex flex-col items-center ${isMobile ? 'p-1' : 'p-2'} rounded-lg hover:bg-white/10 transition-colors duration-200`}>
                <div className={`${isMobile ? 'p-2' : 'p-3'} rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 border border-cyan-400 group-hover:border-cyan-300 transition-all duration-200 glow-hover shadow-lg`}>
                  <IconComponent className={`${isMobile ? 'w-6 h-6' : 'w-8 h-8'} text-white`} />
                </div>
                <span className={`text-white ${isMobile ? 'text-xs' : 'text-xs'} ${isMobile ? 'mt-1' : 'mt-2'} text-center bg-black/50 px-2 py-1 rounded max-w-16 truncate`}>
                  {icon.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Windows */}
      {windowManager.windows.filter(w => !w.isMinimized).map((window) => (
        <Window
          key={window.id}
          windowState={window}
          onClose={() => windowManager.closeWindow(window.id)}
          onMinimize={() => windowManager.minimizeWindow(window.id)}
          onMaximize={() => windowManager.maximizeWindow(window.id)}
          onFocus={() => windowManager.focusWindow(window.id)}
          onPositionChange={(position) => windowManager.updateWindowPosition(window.id, position)}
          onSizeChange={(size) => windowManager.updateWindowSize(window.id, size)}
          isActive={windowManager.activeWindowId === window.id}
        />
      ))}

      {/* Start Menu */}
      {startMenuOpen && (
        <StartMenu
          onClose={() => setStartMenuOpen(false)}
          onOpenApp={(appId) => {
            if (appId === 'settings') {
              setWallpaperSettingsOpen(true);
              setStartMenuOpen(false);
              return;
            }
            
            const appConfig = allApps.find(app => app.id === appId);
            if (appConfig) {
              windowManager.openWindow(appConfig, { isMobile, isTablet });
            }
            setStartMenuOpen(false);
          }}
          apps={allApps}
          isMobile={isMobile}
        />
      )}

      {/* Taskbar */}
      <Taskbar
        onStartMenuToggle={() => setStartMenuOpen(!startMenuOpen)}
        startMenuOpen={startMenuOpen}
        openWindows={windowManager.windows}
        onWindowClick={(windowId) => {
          const window = windowManager.windows.find(w => w.id === windowId);
          if (window?.isMinimized) {
            windowManager.openWindow(allApps.find(app => app.id === windowId)!, { isMobile, isTablet });
          } else {
            windowManager.focusWindow(windowId);
          }
        }}
        systemTime={systemTime}
        isMobile={isMobile}
      />

      {/* Wallpaper Settings */}
      {wallpaperSettingsOpen && (
        <WallpaperSettings
          onClose={() => setWallpaperSettingsOpen(false)}
          currentWallpaper={currentWallpaper}
          onWallpaperChange={setCurrentWallpaper}
        />
      )}
    </div>
  );
};

export default Desktop;