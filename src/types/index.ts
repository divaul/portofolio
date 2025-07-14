export interface WindowState {
  id: string;
  title: string;
  component: React.ComponentType<any>;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  position: { x: number; y: number };
  size: { width: number; height: number };
  zIndex: number;
  icon: string;
}

export interface AppConfig {
  id: string;
  title: string;
  icon: string;
  component: React.ComponentType<any>;
  defaultSize: { width: number; height: number };
  minSize: { width: number; height: number };
}

export interface TerminalCommand {
  command: string;
  description: string;
  execute: (args: string[]) => string;
}

export interface SystemState {
  isBooted: boolean;
  startMenuOpen: boolean;
  windows: WindowState[];
  activeWindowId: string | null;
  desktopIcons: DesktopIcon[];
  systemTime: Date;
}

export interface DesktopIcon {
  id: string;
  title: string;
  icon: string;
  position: { x: number; y: number };
  appId: string;
}