import React, { useState } from 'react';
import { ETHNIC_PROFILES } from '../data/ethnicData';
import { EthnicProfile, LanguageGroup, HousingType } from '../types';
import { Users, Home, Search, Award, Sparkles, Filter, ChevronRight, Volume2 } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { motion } from 'framer-motion';

interface EthnicGridProps {
  onSelectEthnic: (profile: EthnicProfile) => void;
}

export const EthnicGrid: React.FC<EthnicGridProps> = ({ onSelectEthnic }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('ALL');
  const [selectedHousing, setSelectedHousing] = useState<string>('ALL');

  const filteredList = ETHNIC_PROFILES.filter((ethnic) => {
    const matchesSearch = 
      ethnic.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ethnic.otherNames && ethnic.otherNames.toLowerCase().includes(searchQuery.toLowerCase())) ||
      ethnic.primaryRegions.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesLanguage = selectedLanguage === 'ALL' || ethnic.languageGroup === selectedLanguage;
    const matchesHousing = selectedHousing === 'ALL' || ethnic.housingType === selectedHousing;

    return matchesSearch && matchesLanguage && matchesHousing;
  });

  return (
    <section id="grid" className="py-20 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161F33] border border-[#00F2FE]/30 text-xs font-bold text-[#00F2FE] mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>[MODULE 2] LƯỚI HỒ SƠ DÂN TỘC VIỆT NAM</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            15 Hồ sơ Dân tộc <span className="text-gradient-cyan">Đại diện Tiêu biểu</span>
          </h2>
          <p className="text-sm text-[#A0AEC0] mt-2">
            Hệ thống dữ liệu chuẩn hóa 6 Trục (Dân số 2019, Cư trú, Nhận diện, Sinh kế/Trang phục, Phong tục, Kiến trúc)
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="bg-[#161F33] p-4 sm:p-6 rounded-2xl border border-[#00F2FE]/20 glass-panel mb-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Text Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-[#00F2FE] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Tìm tên dân tộc, tỉnh thành, từ khóa..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-[#A0AEC0] focus:border-[#00F2FE] focus:outline-none transition-colors"
              />
            </div>

            {/* Language Group Select */}
            <div>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#00F2FE] focus:outline-none"
              >
                <option value="ALL">Tất cả Ngữ hệ Ngôn ngữ (6 Nhóm)</option>
                <option value="Việt - Mường">Ngữ hệ Việt - Mường</option>
                <option value="Tày - Thái">Ngữ hệ Tày - Thái</option>
                <option value="Hmông - Dao">Ngữ hệ Hmông - Dao</option>
                <option value="Hán">Ngữ hệ Hán</option>
                <option value="Nam Đảo">Ngữ hệ Nam Đảo (Austronesian)</option>
                <option value="Môn - Khmer">Ngữ hệ Môn - Khmer</option>
              </select>
            </div>

            {/* Housing Type Select */}
            <div>
              <select
                value={selectedHousing}
                onChange={(e) => setSelectedHousing(e.target.value)}
                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white focus:border-[#00F2FE] focus:outline-none"
              >
                <option value="ALL">Tất cả Kiểu kiến trúc Nhà ở (4 Loại)</option>
                <option value="Nhà trệt">Nhà trệt</option>
                <option value="Nhà sàn">Nhà sàn</option>
                <option value="Nhà dài">Nhà dài</option>
                <option value="Nhà cộng đồng (Nhà Rông / Gươl)">Nhà cộng đồng (Nhà Rông / Gươl)</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-[#A0AEC0] pt-1">
            <span>Hiển thị <strong className="text-[#00F2FE]">{filteredList.length}</strong> / 15 Hồ sơ dân tộc chọn lọc</span>
            {(searchQuery || selectedLanguage !== 'ALL' || selectedHousing !== 'ALL') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLanguage('ALL');
                  setSelectedHousing('ALL');
                }}
                className="text-[#FF4D4D] hover:underline"
              >
                Xóa bộ lọc
              </button>
            )}
          </div>
        </div>

        {/* 3x5 Desktop Responsive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredList.map((ethnic, index) => (
            <motion.div
              key={ethnic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => onSelectEthnic(ethnic)}
              className="bg-[#161F33] rounded-3xl overflow-hidden border border-white/10 glass-panel-hover cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={ethnic.portraitImage}
                    alt={ethnic.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161F33] via-transparent to-transparent opacity-90" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full bg-[#0B0F19]/80 backdrop-blur text-[10px] font-bold text-[#00F2FE] border border-[#00F2FE]/30">
                      {ethnic.languageGroup}
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        audioSynth.speakEthnicName(ethnic.name);
                      }}
                      className="p-1.5 rounded-full bg-[#0B0F19]/80 text-[#FFD700] hover:scale-110 transition-transform"
                      title="Nghe phát âm chuẩn tên dân tộc"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* UNESCO Heritage Badge */}
                  {ethnic.unescoHeritage && (
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-[#FFD700]/90 text-[#0B0F19] text-[10px] font-extrabold truncate max-w-full">
                        <Award className="w-3 h-3 shrink-0" />
                        <span className="truncate">UNESCO Di sản</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Main Info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-xl font-extrabold text-white group-hover:text-[#00F2FE] transition-colors flex items-center justify-between">
                      <span>{ethnic.name}</span>
                      {ethnic.otherNames && (
                        <span className="text-xs font-normal text-[#A0AEC0]">({ethnic.otherNames})</span>
                      )}
                    </h3>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#0B0F19]/80 border border-white/5">
                      <span className="text-[10px] text-[#A0AEC0] block">Số dân (2019)</span>
                      <strong className="text-white font-black text-sm">
                        {ethnic.population2019.toLocaleString('vi-VN')}
                      </strong>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#0B0F19]/80 border border-white/5">
                      <span className="text-[10px] text-[#A0AEC0] block">Kiểu nhà ở</span>
                      <strong className="text-[#00F2FE] font-bold text-xs truncate block" title={ethnic.housingType}>
                        {ethnic.housingType}
                      </strong>
                    </div>
                  </div>

                  {/* Livelihood snippet */}
                  <p className="text-xs text-[#A0AEC0] line-clamp-2 leading-relaxed">
                    <strong className="text-white">Sinh kế chính:</strong> {ethnic.axis4LivelihoodAndAttire.livelihood}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA */}
              <div className="px-5 pb-5 pt-2">
                <div className="w-full py-2.5 rounded-xl bg-[#0B0F19] group-hover:bg-[#00F2FE] group-hover:text-[#0B0F19] border border-white/10 group-hover:border-[#00F2FE] text-white text-xs font-bold transition-all flex items-center justify-center space-x-1.5">
                  <span>Khám phá Hồ sơ 6 Trục</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
