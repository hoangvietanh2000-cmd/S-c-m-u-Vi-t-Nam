import React, { useState } from 'react';
import { ETHNIC_PROFILES, LANGUAGE_GROUPS } from '../data/ethnicData';
import { EthnicProfile, LanguageGroup } from '../types';
import { MapPin, Filter, Users, Home, ChevronRight, Sparkles, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface InteractiveMapProps {
  onSelectEthnic: (profile: EthnicProfile) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectEthnic }) => {
  const [selectedLanguageGroup, setSelectedLanguageGroup] = useState<LanguageGroup | 'ALL'>('ALL');
  const [hoveredEthnic, setHoveredEthnic] = useState<EthnicProfile | null>(null);
  const [activePin, setActivePin] = useState<EthnicProfile | null>(ETHNIC_PROFILES[0]);

  const filteredProfiles = selectedLanguageGroup === 'ALL'
    ? ETHNIC_PROFILES
    : ETHNIC_PROFILES.filter(p => p.languageGroup === selectedLanguageGroup);

  const displayPin = hoveredEthnic || activePin || ETHNIC_PROFILES[0];

  return (
    <section id="map" className="py-20 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161F33] border border-[#00F2FE]/30 text-xs font-bold text-[#00F2FE] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>[MODULE 1] BẢN ĐỒ DÂN CƯ & KHÔNG GIAN VĂN HÓA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Bản đồ Tương tác <span className="text-gradient-cyan">15 Dân tộc Việt Nam</span>
          </h2>
          <p className="text-sm text-[#A0AEC0] mt-2">
            Mốc dữ liệu Tổng điều tra Dân số và Nhà ở năm 2019 • Lọc theo 6 Ngữ hệ ngôn ngữ
          </p>
        </div>

        {/* 6 Language Family Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedLanguageGroup('ALL')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedLanguageGroup === 'ALL'
                ? 'bg-[#00F2FE] text-[#0B0F19] glow-cyan shadow-lg'
                : 'bg-[#161F33] text-[#A0AEC0] hover:text-white border border-white/10'
            }`}
          >
            Tất cả 15 Dân tộc (54 Dân tộc)
          </button>
          {LANGUAGE_GROUPS.map((group) => {
            const isActive = selectedLanguageGroup === group.name;
            return (
              <button
                key={group.name}
                onClick={() => setSelectedLanguageGroup(group.name as LanguageGroup)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 border ${
                  isActive
                    ? 'bg-[#161F33] border-[#00F2FE] text-white glow-cyan'
                    : 'bg-[#161F33]/50 border-white/10 text-[#A0AEC0] hover:text-white'
                }`}
              >
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: group.color }} />
                <span>{group.name}</span>
                <span className="text-[10px] bg-black/40 px-1.5 py-0.5 rounded text-[#00F2FE]">
                  {group.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Main Map & Interactive Pin Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* SVG Map Canvas (7 cols) */}
          <div className="lg:col-span-7 relative bg-[#161F33]/60 rounded-3xl p-6 border border-[#00F2FE]/20 glass-panel overflow-hidden min-h-[480px] flex items-center justify-center">
            {/* Background Grid Accent */}
            <div className="absolute inset-0 bg-[radial-gradient(#00F2FE_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            {/* Vietnam Stylized SVG Map Overlay */}
            <div className="relative w-full max-w-[360px] h-[520px] mx-auto">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full drop-shadow-[0_0_15px_rgba(0,242,254,0.15)]"
              >
                {/* Simplified Stylized S-curve Vietnam map polygon */}
                <path
                  d="M 32 10 C 40 8, 55 10, 68 15 C 65 22, 58 26, 45 28 C 35 30, 38 38, 52 42 C 58 46, 56 58, 52 68 C 45 78, 38 85, 30 88 C 34 82, 42 75, 40 65 C 38 52, 30 42, 32 28 Z"
                  fill="none"
                  stroke="#00F2FE"
                  strokeWidth="0.8"
                  strokeDasharray="2 1"
                  className="opacity-40"
                />
                <path
                  d="M 32 10 C 40 8, 55 10, 68 15 C 65 22, 58 26, 45 28 C 35 30, 38 38, 52 42 C 58 46, 56 58, 52 68 C 45 78, 38 85, 30 88 C 34 82, 42 75, 40 65 C 38 52, 30 42, 32 28 Z"
                  fill="rgba(0, 242, 254, 0.05)"
                />

                {/* Hoàng Sa & Trường Sa Islands Indicative Clusters */}
                <circle cx="82" cy="48" r="1.5" fill="#FFD700" className="animate-ping" style={{ animationDuration: '3s' }} />
                <circle cx="82" cy="48" r="1.5" fill="#FFD700" />
                <text x="85" y="49" fill="#FFD700" fontSize="2.5" fontWeight="bold">Quần đảo Hoàng Sa (VN)</text>

                <circle cx="78" cy="72" r="1.5" fill="#FFD700" className="animate-ping" style={{ animationDuration: '4s' }} />
                <circle cx="78" cy="72" r="1.5" fill="#FFD700" />
                <text x="81" y="73" fill="#FFD700" fontSize="2.5" fontWeight="bold">Quần đảo Trường Sa (VN)</text>

                {/* Render Ethnic Location Pins */}
                {filteredProfiles.map((ethnic) => {
                  const isHovered = hoveredEthnic?.id === ethnic.id || activePin?.id === ethnic.id;
                  const coords = ethnic.axis2Distribution.mapCoordinates;

                  return (
                    <g 
                      key={ethnic.id} 
                      className="cursor-pointer group"
                      onMouseEnter={() => setHoveredEthnic(ethnic)}
                      onClick={() => {
                        setActivePin(ethnic);
                        onSelectEthnic(ethnic);
                      }}
                    >
                      {/* Pulse Ring */}
                      {isHovered && (
                        <circle
                          cx={coords.x}
                          cy={coords.y}
                          r="4"
                          fill="none"
                          stroke="#00F2FE"
                          strokeWidth="0.5"
                          className="animate-ping"
                        />
                      )}
                      
                      {/* Pin Circle */}
                      <circle
                        cx={coords.x}
                        cy={coords.y}
                        r={isHovered ? "2.8" : "1.8"}
                        fill={isHovered ? "#00F2FE" : "#FF4D4D"}
                        stroke="#FFFFFF"
                        strokeWidth="0.5"
                        className="transition-all duration-300"
                      />

                      {/* Label Text */}
                      <text
                        x={coords.x + 3}
                        y={coords.y + 1}
                        fill={isHovered ? "#00F2FE" : "#A0AEC0"}
                        fontSize="2.8"
                        fontWeight={isHovered ? "bold" : "normal"}
                        className="pointer-events-none transition-colors"
                      >
                        {ethnic.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            <div className="absolute bottom-4 left-4 text-[11px] text-[#A0AEC0] bg-[#0B0F19]/90 px-3 py-1.5 rounded-xl border border-white/10">
              💡 <span className="text-white">Rê chuột hoặc Bấm vào ghim</span> để xem hồ sơ nhanh dân tộc
            </div>
          </div>

          {/* Floating Pin-Card Popup Details (5 cols) */}
          <div className="lg:col-span-5">
            <AnimatePresence mode="wait">
              {displayPin && (
                <motion.div
                  key={displayPin.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#161F33] rounded-3xl p-6 border border-[#00F2FE]/30 glass-panel shadow-2xl space-y-5"
                >
                  {/* Top Image Preview Frame */}
                  <div className="relative h-48 rounded-2xl overflow-hidden border border-white/10 group">
                    <img 
                      src={displayPin.portraitImage} 
                      alt={displayPin.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent p-4 flex flex-col justify-between">
                      <span className="self-end px-2.5 py-1 rounded-full bg-[#0B0F19]/80 backdrop-blur text-[11px] font-bold text-[#00F2FE] border border-[#00F2FE]/30">
                        {displayPin.languageGroup}
                      </span>
                      <div>
                        <span className="text-xs text-[#FFD700] font-semibold">Tên gọi khác: {displayPin.otherNames || 'Không'}</span>
                        <h3 className="text-2xl font-extrabold text-white">{displayPin.name}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Population Widget */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/10">
                      <div className="flex items-center space-x-1.5 text-xs text-[#A0AEC0]">
                        <Users className="w-3.5 h-3.5 text-[#00F2FE]" />
                        <span>Số dân (2019)</span>
                      </div>
                      <div className="text-lg font-black text-white mt-1">
                        {displayPin.population2019.toLocaleString('vi-VN')}
                        <span className="text-xs text-[#00F2FE] ml-1 font-normal">({displayPin.populationPercent})</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-[#0B0F19] border border-white/10">
                      <div className="flex items-center space-x-1.5 text-xs text-[#A0AEC0]">
                        <Home className="w-3.5 h-3.5 text-[#FF4D4D]" />
                        <span>Kiểu nhà</span>
                      </div>
                      <div className="text-xs font-bold text-white mt-1.5 truncate" title={displayPin.housingType}>
                        {displayPin.housingType}
                      </div>
                    </div>
                  </div>

                  {/* Primary Provinces */}
                  <div>
                    <span className="text-xs font-bold text-[#A0AEC0] uppercase tracking-wider block mb-2">
                      📍 Địa bàn phân bố chính:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {displayPin.axis2Distribution.mainProvinces.map((prov, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-lg bg-[#0B0F19] border border-white/10 text-xs text-white">
                          {prov}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote / Slogan */}
                  <div className="p-3.5 rounded-xl bg-[#0B0F19]/60 border-l-2 border-[#FFD700] italic text-xs text-[#FFD700]">
                    "{displayPin.quote}"
                  </div>

                  {/* CTA Full Modal */}
                  <button
                    onClick={() => onSelectEthnic(displayPin)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00A8FF] text-[#0B0F19] font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center space-x-2 glow-cyan"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Xem Hồ sơ Chi tiết 6 Trục ({displayPin.name})</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
