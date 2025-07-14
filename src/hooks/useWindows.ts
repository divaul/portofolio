import { useState, useCallback } from 'react';
import { WindowState, AppConfig } from '../types';

export const useWindows = () => {
  const [windows, setWindows] = useState<WindowState[]>([]);
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [nextZIndex, setNextZIndex] = useState(1000);

  const openWindow = useCallback((appConfig: AppConfig, screenInfo?: { isMobile: boolean; isTablet: boolean }) => {
    const existingWindow = windows.find(w => w.id === appConfig.id);
    
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        setWindows(prev => prev.map(w => 
          w.id === appConfig.id 
            ? { ...w, isMinimized: false, zIndex: nextZIndex }
            : w
        ));
        setNextZIndex(prev => prev + 1);
      }
      setActiveWindowId(appConfig.id);
      return;
    }

    const { isMobile = false, isTablet = false } = screenInfo || {};
    
    // Smart window positioning and sizing
    let windowSize = appConfig.defaultSize;
    let windowPosition;

    if (isMobile) {
      windowSize = { 
        width: Math.min(window.innerWidth - 20, 400), 
        height: Math.min(window.innerHeight - 100, 500) 
      };
      windowPosition = { x: 10, y: 10 };
    } else if (isTablet) {
      windowSize = { 
        width: Math.min(window.innerWidth - 40, 600), 
        height: Math.min(window.innerHeight - 120, 600) 
      };
      windowPosition = { x: 20, y: 20 };
    }
    else {
      // Desktop: Smart cascading window positioning
      const existingWindowsCount = windows.length;
      
      // Center the first window, then cascade others
      let baseX, baseY;
      if (existingWindowsCount === 0) {
        // Center the first window
        baseX = (globalThis.window.innerWidth - windowSize.width) / 2;
        baseY = (globalThis.window.innerHeight - windowSize.height - 60) / 2; // Account for taskbar
      } else {
        // Use previous window position as base for cascading
        const lastWindow = windows[windows.length - 1];
        baseX = lastWindow.position.x;
        baseY = lastWindow.position.y;
      }
      
      const offsetX = existingWindowsCount * 30;
      const offsetY = existingWindowsCount * 30;
      
      windowPosition = {
        x: Math.max(50, baseX + offsetX),
        y: Math.max(50, baseY + offsetY)
      };
      
      // Ensure window fits on screen
      if (windowPosition.x + windowSize.width > globalThis.window.innerWidth) {
        windowPosition.x = globalThis.window.innerWidth - windowSize.width - 20;
      }
      if (windowPosition.y + windowSize.height > globalThis.window.innerHeight - 60) {
        windowPosition.y = globalThis.window.innerHeight - windowSize.height - 80;
      }
      
      // If cascading goes too far, reset to center with small offset
      if (windowPosition.x < 50 || windowPosition.y < 50) {
        windowPosition = {
          x: (globalThis.window.innerWidth - windowSize.width) / 2 + (existingWindowsCount % 5) * 20,
          y: (globalThis.window.innerHeight - windowSize.height - 60) / 2 + (existingWindowsCount % 5) * 20
        };
      }
    }

    const newWindow: WindowState = {
      id: appConfig.id,
      title: appConfig.title,
      component: appConfig.component,
      isOpen: true,
      isMinimized: false,
      isMaximized: false,
      position: windowPosition,
      size: windowSize,
      zIndex: nextZIndex,
      icon: appConfig.icon
    };

    setWindows(prev => [...prev, newWindow]);
    setActiveWindowId(appConfig.id);
    setNextZIndex(prev => prev + 1);
  }, [windows, nextZIndex]);

  const closeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.filter(w => w.id !== windowId));
    if (activeWindowId === windowId) {
      setActiveWindowId(null);
    }
  }, [activeWindowId]);

  const minimizeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, isMinimized: true } : w
    ));
    if (activeWindowId === windowId) {
      setActiveWindowId(null);
    }
  }, [activeWindowId]);

  const maximizeWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId 
        ? { 
            ...w, 
            isMaximized: !w.isMaximized,
            position: w.isMaximized ? w.position : { x: 0, y: 0 },
            size: w.isMaximized ? w.size : { width: window.innerWidth, height: window.innerHeight - 60 }
          }
        : w
    ));
  }, []);

  const focusWindow = useCallback((windowId: string) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, zIndex: nextZIndex } : w
    ));
    setActiveWindowId(windowId);
    setNextZIndex(prev => prev + 1);
  }, [nextZIndex]);

  const updateWindowPosition = useCallback((windowId: string, position: { x: number; y: number }) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, position } : w
    ));
  }, []);

  const updateWindowSize = useCallback((windowId: string, size: { width: number; height: number }) => {
    setWindows(prev => prev.map(w => 
      w.id === windowId ? { ...w, size } : w
    ));
  }, []);

  return {
    windows,
    activeWindowId,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
    updateWindowSize
  };
};