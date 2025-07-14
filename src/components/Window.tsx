import React, { useState, useRef, useEffect } from 'react';
import { X, Minus, Square, RotateCcw } from 'lucide-react';
import { WindowState } from '../types';

interface WindowProps {
  windowState: WindowState;
  onClose: () => void;
  onMinimize: () => void;
  onMaximize: () => void;
  onFocus: () => void;
  onPositionChange: (position: { x: number; y: number }) => void;
  onSizeChange: (size: { width: number; height: number }) => void;
  isActive: boolean;
}

const Window: React.FC<WindowProps> = ({
  windowState,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onPositionChange,
  onSizeChange,
  isActive
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const windowRef = useRef<HTMLDivElement>(null);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = globalThis.window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    globalThis.window.addEventListener('resize', checkScreenSize);
    return () => globalThis.window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && !isMobile) {
        // Constrain window position to screen bounds
        const newX = Math.max(0, Math.min(e.clientX - dragOffset.x, globalThis.window.innerWidth - windowState.size.width));
        const newY = Math.max(0, Math.min(e.clientY - dragOffset.y, globalThis.window.innerHeight - windowState.size.height - 60));
        
        onPositionChange({
          x: newX,
          y: newY
        });
      }
      
      if (isResizing && !isMobile) {
        const deltaX = e.clientX - resizeStart.x;
        const deltaY = e.clientY - resizeStart.y;
        
        // Constrain window size to screen bounds and minimum size
        const maxWidth = globalThis.window.innerWidth - windowState.position.x;
        const maxHeight = globalThis.window.innerHeight - windowState.position.y - 60;
        
        onSizeChange({
          width: Math.max(400, Math.min(maxWidth, resizeStart.width + deltaX)),
          height: Math.max(200, Math.min(maxHeight, resizeStart.height + deltaY))
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = 'none'; // Prevent text selection while dragging
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.userSelect = '';
    };
  }, [isDragging, isResizing, dragOffset, resizeStart, onPositionChange, onSizeChange, isMobile, windowState.position, windowState.size]);

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only allow dragging on desktop (not mobile/tablet)
    if (!isMobile && !isTablet) {
      e.preventDefault();
      onFocus();
      setIsDragging(true);
      setDragOffset({
        x: e.clientX - windowState.position.x,
        y: e.clientY - windowState.position.y
      });
    }
  };

  const handleResizeStart = (e: React.MouseEvent) => {
    if (isMobile || isTablet) return;
    e.preventDefault();
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: windowState.size.width,
      height: windowState.size.height
    });
  };

  const Component = windowState.component;

  // Mobile/Tablet specific styles
  const getWindowStyles = () => {
    if (isMobile) {
      return {
        left: 0,
        top: 0,
        width: '100vw',
        height: 'calc(100vh - 48px)', // Account for taskbar
        zIndex: windowState.zIndex
      };
    } else if (isTablet) {
      return {
        left: Math.max(0, windowState.position.x),
        top: Math.max(0, windowState.position.y),
        width: Math.min(windowState.size.width, globalThis.window.innerWidth - 40),
        height: Math.min(windowState.size.height, globalThis.window.innerHeight - 100),
        zIndex: windowState.zIndex
      };
    } else {
      return {
        left: windowState.position.x,
        top: windowState.position.y,
        width: windowState.size.width,
        height: windowState.size.height,
        zIndex: windowState.zIndex
      };
    }
  };

  return (
    <div
      ref={windowRef}
      className={`${isMobile ? 'fixed' : 'absolute'} bg-gray-900/95 backdrop-blur-sm border ${isMobile ? 'rounded-none' : 'rounded-lg'} shadow-xl transition-all duration-200 ${
        isActive 
          ? 'border-cyan-500/50 shadow-cyan-500/20' 
          : 'border-gray-600/50'
      }`}
      style={getWindowStyles()}
      onClick={onFocus}
    >
      {/* Title Bar */}
      <div
        className={`${isMobile ? 'h-12' : 'h-10'} flex items-center justify-between px-4 ${isMobile ? 'rounded-none' : 'rounded-t-lg'} ${!isMobile ? 'cursor-move' : ''} ${
          isActive 
            ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border-b border-cyan-500/30' 
            : 'bg-gray-800/50 border-b border-gray-600/50'
        }`}
        onMouseDown={handleMouseDown}
        style={{ userSelect: 'none' }}
      >
        <div className="flex items-center space-x-2">
          <div className={`${isMobile ? 'w-5 h-5' : 'w-4 h-4'} rounded bg-gradient-to-br from-cyan-400 to-purple-400`} />
          <span className={`text-white ${isMobile ? 'text-base' : 'text-sm'} font-medium truncate`}>
            {windowState.title}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          {!isMobile && !isTablet && (
            <>
              <button
                onClick={onMinimize}
                className="w-6 h-6 rounded bg-yellow-500/20 hover:bg-yellow-500/30 flex items-center justify-center transition-colors duration-200"
              >
                <Minus className="w-3 h-3 text-yellow-400" />
              </button>
              <button
                onClick={onMaximize}
                className="w-6 h-6 rounded bg-green-500/20 hover:bg-green-500/30 flex items-center justify-center transition-colors duration-200"
              >
                {windowState.isMaximized ? (
                  <RotateCcw className="w-3 h-3 text-green-400" />
                ) : (
                  <Square className="w-3 h-3 text-green-400" />
                )}
              </button>
            </>
          )}
          <button
            onClick={onClose}
            className={`${isMobile ? 'w-8 h-8' : 'w-6 h-6'} rounded bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors duration-200`}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <X className={`${isMobile ? 'w-4 h-4' : 'w-3 h-3'} text-red-400`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden" style={{ height: isMobile ? 'calc(100vh - 96px)' : (windowState.size.height - (isMobile ? 48 : 40)) }}>
        <Component />
      </div>

      {/* Resize Handle */}
      {!windowState.isMaximized && !isMobile && !isTablet && (
        <div
          className="absolute bottom-0 right-0 w-4 h-4 cursor-nw-resize"
          onMouseDown={handleResizeStart}
          style={{ userSelect: 'none' }}
        >
          <div className="absolute bottom-1 right-1 w-2 h-2 bg-cyan-500/30 rounded-tl" />
        </div>
      )}
    </div>
  );
};

export default Window;