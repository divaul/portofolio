import React, { useState } from 'react';
import { Image, Upload, Settings, X, Check, RotateCcw, Monitor } from 'lucide-react';

interface WallpaperSettingsProps {
  onClose: () => void;
  currentWallpaper: string;
  onWallpaperChange: (wallpaper: string) => void;
}

const WallpaperSettings: React.FC<WallpaperSettingsProps> = ({
  onClose,
  currentWallpaper,
  onWallpaperChange
}) => {
  const [selectedWallpaper, setSelectedWallpaper] = useState(currentWallpaper);

  // Predefined wallpapers - mudah untuk diubah
  const wallpapers = [
    {
      id: 'cyberpunk1',
      name: 'Cyberpunk City',
      url: 'https://github.com/divaul/divaul/raw/main/pixel/Cyberpunk%20City.jpg',
      preview: 'https://github.com/divaul/divaul/raw/main/pixel/Cyberpunk%20City.jpg'
    },
    {
      id: 'neon1',
      name: 'Ramen Pixel',
      url: 'https://github.com/divaul/divaul/raw/main/pixel/pixel-jeff-noodles.gif',
      preview: 'https://github.com/divaul/divaul/raw/main/pixel/pixel-jeff-noodles.gif'
    },
    {
      id: 'tech1',
      name: 'Mario Pixel',
      url: 'https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/pixel-jeff-mario.gif',
      preview: 'https://raw.githubusercontent.com/divaul/divaul/refs/heads/main/pixel/pixel-jeff-mario.gif'
    },
    {
      id: 'matrix1',
      name: 'Gorilla Pixel',
      url: 'https://camo.githubusercontent.com/c1db2af8ce5defe459f930a8f7881a37235908ce5c9b2b499b870af08fad5282/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f66732f6634383163373139333938343033312e363566343638643961306235642e676966',
      preview: 'https://camo.githubusercontent.com/c1db2af8ce5defe459f930a8f7881a37235908ce5c9b2b499b870af08fad5282/68747470733a2f2f6d69722d73332d63646e2d63662e626568616e63652e6e65742f70726f6a6563745f6d6f64756c65732f66732f6634383163373139333938343033312e363566343638643961306235642e676966'
    },
    {
      id: 'space1',
      name: 'Space Dark',
      url: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      preview: 'https://images.pexels.com/photos/1169754/pexels-photo-1169754.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop'
    },
    {
      id: 'gradient1',
      name: 'Purple Gradient',
      url: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      preview: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 'gradient2',
      name: 'Cyan Gradient',
      url: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
      preview: 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)'
    },
    {
      id: 'solid1',
      name: 'Dark Blue',
      url: '#0f172a',
      preview: '#0f172a'
    }
  ];

  const handleApply = () => {
    onWallpaperChange(selectedWallpaper);
    onClose();
  };

  const isGradientOrSolid = (url: string) => {
    return url.startsWith('linear-gradient') || url.startsWith('#');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gray-900/95 backdrop-blur-sm border border-cyan-500/30 rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/30">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center">
              <Monitor className="w-4 h-4 text-cyan-400" />
            </div>
            <h2 className="text-lg font-semibold text-white">Wallpaper Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-red-500/20 hover:bg-red-500/30 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-4 h-4 text-red-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          <div className="mb-6">
            <h3 className="text-cyan-400 font-medium mb-3">Choose Wallpaper</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {wallpapers.map((wallpaper) => (
                <div
                  key={wallpaper.id}
                  className={`relative cursor-pointer rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    selectedWallpaper === wallpaper.url
                      ? 'border-cyan-400 shadow-lg shadow-cyan-400/20'
                      : 'border-gray-600/50 hover:border-cyan-500/50'
                  }`}
                  onClick={() => setSelectedWallpaper(wallpaper.url)}
                >
                  <div className="aspect-video relative">
                    {isGradientOrSolid(wallpaper.preview) ? (
                      <div
                        className="w-full h-full"
                        style={{ background: wallpaper.preview }}
                      />
                    ) : (
                      <img
                        src={wallpaper.preview}
                        alt={wallpaper.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    {selectedWallpaper === wallpaper.url && (
                      <div className="absolute inset-0 bg-cyan-400/20 flex items-center justify-center">
                        <Check className="w-6 h-6 text-cyan-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-2 bg-gray-800/50">
                    <p className="text-white text-xs text-center truncate">{wallpaper.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Custom URL Input */}
          <div className="mb-6">
            <h3 className="text-cyan-400 font-medium mb-3">Custom Wallpaper URL</h3>
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Enter image URL or CSS gradient..."
                value={selectedWallpaper}
                onChange={(e) => setSelectedWallpaper(e.target.value)}
                className="flex-1 px-3 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
              />
              <button
                onClick={() => setSelectedWallpaper('')}
                className="px-3 py-2 bg-gray-700/50 hover:bg-gray-600/50 border border-gray-600/50 rounded-lg transition-colors duration-200"
              >
                <RotateCcw className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-2">
              Contoh: https://example.com/image.jpg atau linear-gradient(135deg, #667eea 0%, #764ba2 100%)
            </p>
          </div>

          {/* Preview */}
          <div className="mb-6">
            <h3 className="text-cyan-400 font-medium mb-3">Preview</h3>
            <div className="w-full h-32 rounded-lg border border-gray-600/50 overflow-hidden">
              {isGradientOrSolid(selectedWallpaper) ? (
                <div
                  className="w-full h-full"
                  style={{ background: selectedWallpaper }}
                />
              ) : (
                <img
                  src={selectedWallpaper}
                  alt="Preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-4 border-t border-cyan-500/30">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 text-white rounded-lg transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white rounded-lg transition-all duration-200"
          >
            Apply Wallpaper
          </button>
        </div>
      </div>
    </div>
  );
};

export default WallpaperSettings;