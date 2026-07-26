import React, { useState } from 'react';
import { Volume2, VolumeX, Compass, MapPin, Grid, Layers, Sparkles, BookOpen, FileText, Search, Menu, X } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenSearch }) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleToggleAudio = () => {
    audioSynth.toggleAmbientMusic((playing) => setIsPlayingAudio(playing));
  };

  const navItems = [
    { id: 'hero', label: 'Trang chủ', icon: Compass },
    { id: 'map', label: 'Bản đồ Dân tộc', icon: MapPin },
    { id: 'grid', label: '15 Hồ sơ', icon: Grid },
    { id: 'material', label: 'Đời sống Vật chất', icon: Layers },
    { id: 'spiritual', label: 'Đời sống Tinh thần', icon: Sparkles },
    { id: 'comparison', label: 'So sánh Nhà ở', icon: BookOpen },
    { id: 'artifacts', label: 'Hiện vật Số', icon: Layers },
    { id: 'tasks', label: 'Nhiệm vụ Học tập', icon: FileText },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0B0F19]/80 backdrop-blur-md border-b border-[#00F2FE]/20 px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo & Title */}
        <div 
          onClick={() => onNavigate('hero')}
          className="flex items-center space-x-3 cursor-pointer group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00F2FE] via-[#161F33] to-[#FF4D4D] p-[1px] glow-cyan">
            <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
              <span className="text-xl font-black text-gradient-cyan">54</span>
            </div>
          </div>
          <div>
            <h1 className="text-lg lg:text-xl font-bold tracking-tight text-white group-hover:text-[#00F2FE] transition-colors">
              SẮC MÀU VIỆT NAM
            </h1>
            <p className="text-[11px] text-[#A0AEC0] font-medium hidden sm:block">
              Bảo tàng số 15 Dân tộc Việt Nam • Bài 12
            </p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center space-x-1 bg-[#161F33]/60 p-1.5 rounded-2xl border border-white/10">
          {navItems.slice(0, 7).map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'bg-[#00F2FE] text-[#0B0F19] shadow-lg shadow-[#00F2FE]/20 font-bold'
                    : 'text-[#A0AEC0] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Search Trigger Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-[#161F33] hover:bg-[#1E293B] border border-[#00F2FE]/30 text-white text-xs font-medium transition-all group"
            title="Tìm kiếm dân tộc / hiện vật (Ctrl+K)"
          >
            <Search className="w-4 h-4 text-[#00F2FE] group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Tìm kiếm</span>
            <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] bg-[#0B0F19] text-[#00F2FE] rounded border border-[#00F2FE]/20">
              Ctrl K
            </kbd>
          </button>

          {/* Audio Ambience Synthesizer Toggle */}
          <button
            onClick={handleToggleAudio}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
              isPlayingAudio
                ? 'bg-[#FF4D4D]/20 border-[#FF4D4D] text-[#FF4D4D] glow-red animate-pulse'
                : 'bg-[#161F33] border-white/10 text-[#A0AEC0] hover:text-white hover:border-white/20'
            }`}
            title="Bật/Tắt nhạc không gian bảo tàng số"
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-4 h-4 text-[#FF4D4D]" />
                <span className="hidden sm:inline">Nhạc bảo tàng</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4" />
                <span className="hidden sm:inline">Âm thanh</span>
              </>
            )}
          </button>

          {/* Task Quick Link */}
          <button
            onClick={() => onNavigate('tasks')}
            className="hidden sm:flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#FF4D4D] text-[#0B0F19] font-bold text-xs hover:opacity-90 transition-opacity glow-cyan"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Nhiệm vụ</span>
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl bg-[#161F33] text-white border border-white/10"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden mt-3 p-4 bg-[#161F33] rounded-2xl border border-[#00F2FE]/20 grid grid-cols-2 gap-2 animate-fadeIn">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center space-x-2 p-2.5 rounded-xl text-xs font-medium text-left ${
                  isActive
                    ? 'bg-[#00F2FE] text-[#0B0F19] font-bold'
                    : 'text-[#A0AEC0] hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
