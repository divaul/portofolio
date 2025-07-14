import React from 'react';

interface AnimeWallpaperProps {
  wallpaper: string;
}

const AnimeWallpaper: React.FC<AnimeWallpaperProps> = ({ wallpaper }) => {
  const isGradientOrSolid = (url: string) => {
    return url.startsWith('linear-gradient') || url.startsWith('#');
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Static Background */}
      {isGradientOrSolid(wallpaper) ? (
        <div
          className="absolute inset-0"
          style={{ background: wallpaper }}
        />
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${wallpaper})`,
           filter: 'saturate(1.3) contrast(1.2) brightness(1.1)',
          }}
        />
      )}

      {/* Simple Cyberpunk Overlay - No Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/30 to-pink-900/20" />
      
      {/* Static Grid Overlay - No Animation */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 245, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 245, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
    </div>
  );
};

export default AnimeWallpaper;