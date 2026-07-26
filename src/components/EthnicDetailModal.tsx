import React, { useState } from 'react';
import { EthnicProfile } from '../types';
import { X, Volume2, Users, MapPin, Sparkles, Shirt, Flame, Home, Award, ChevronRight } from 'lucide-react';
import { audioSynth } from '../utils/audioSynth';
import { motion, AnimatePresence } from 'framer-motion';

interface EthnicDetailModalProps {
  profile: EthnicProfile | null;
  onClose: () => void;
}

export const EthnicDetailModal: React.FC<EthnicDetailModalProps> = ({ profile, onClose }) => {
  const [activeAxisTab, setActiveAxisTab] = useState<number>(1);

  if (!profile) return null;

  const axisTabs = [
    { id: 1, name: '1. Dân số', icon: Users },
    { id: 2, name: '2. Phân bố', icon: MapPin },
    { id: 3, name: '3. Nhận diện', icon: Sparkles },
    { id: 4, name: '4. Sinh kế & Y phục', icon: Shirt },
    { id: 5, name: '5. Phong tục & Lễ hội', icon: Flame },
    { id: 6, name: '6. Kiến trúc Nhà', icon: Home }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#161F33] border border-[#00F2FE]/40 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden glass-panel shadow-2xl my-auto"
        >
          {/* Header Bar */}
          <div className="relative p-6 bg-gradient-to-r from-[#0B0F19] via-[#161F33] to-[#0B0F19] border-b border-white/10 shrink-0">
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#161F33] text-[#A0AEC0] hover:text-white border border-white/10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#00F2FE]/20 text-[#00F2FE] text-xs font-bold border border-[#00F2FE]/30">
                {profile.languageGroup}
              </span>

              {profile.unescoHeritage && (
                <span className="px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] text-xs font-extrabold border border-[#FFD700]/30 flex items-center space-x-1">
                  <Award className="w-3.5 h-3.5" />
                  <span>{profile.unescoHeritage}</span>
                </span>
              )}
            </div>

            <div className="mt-3 flex items-center space-x-3">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">{profile.name}</h2>
              {profile.otherNames && (
                <span className="text-sm font-normal text-[#A0AEC0]">({profile.otherNames})</span>
              )}

              <button
                onClick={() => audioSynth.speakEthnicName(profile.name)}
                className="p-2 rounded-full bg-[#00F2FE]/10 text-[#00F2FE] hover:bg-[#00F2FE] hover:text-[#0B0F19] transition-all"
                title="Nghe phát âm chuẩn tên dân tộc"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs italic text-[#FFD700] font-serif-heritage mt-2">"{profile.quote}"</p>
          </div>

          {/* 6 Axis Tab Navigation */}
          <div className="flex overflow-x-auto border-b border-white/10 bg-[#0B0F19] p-2 space-x-1 shrink-0 no-scrollbar">
            {axisTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeAxisTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveAxisTab(tab.id)}
                  className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-[#00F2FE] text-[#0B0F19] shadow-md'
                      : 'text-[#A0AEC0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.name}</span>
                </button>
              );
            })}
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-[#A0AEC0]">
            {/* AXIS 1: DÂN SỐ */}
            {activeAxisTab === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-[#00F2FE]/30">
                    <span className="text-xs text-[#A0AEC0] block">Số dân (2019)</span>
                    <strong className="text-2xl font-black text-white">{profile.axis1Population.count.toLocaleString('vi-VN')}</strong>
                    <span className="text-xs text-[#00F2FE] block mt-0.5">Chiếm {profile.populationPercent} dân số cả nước</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10">
                    <span className="text-xs text-[#A0AEC0] block">Thứ hạng quy mô</span>
                    <strong className="text-base font-bold text-white mt-1 block">{profile.axis1Population.rank}</strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10">
                    <span className="text-xs text-[#A0AEC0] block">Ghi chú biến động</span>
                    <p className="text-xs text-white mt-1">{profile.axis1Population.growthNote}</p>
                  </div>
                </div>
              </div>
            )}

            {/* AXIS 2: PHÂN BỐ CƯ TRÚ */}
            {activeAxisTab === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-[#00F2FE]">Địa bàn tỉnh thành tập trung chính:</span>
                  <div className="flex flex-wrap gap-2">
                    {profile.axis2Distribution.mainProvinces.map((prov, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-[#161F33] border border-white/10 text-white text-xs font-semibold">
                        {prov}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-1">
                  <span className="text-xs font-bold text-[#FFD700]">Đặc điểm Môi trường Địa hình Cư trú:</span>
                  <p className="text-white leading-relaxed">{profile.axis2Distribution.terrainType}</p>
                </div>
              </div>
            )}

            {/* AXIS 3: ĐẶC ĐIỂM NHẬN DIỆN */}
            {activeAxisTab === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-[#00F2FE]">Tổ chức Xã hội & Làng bản:</span>
                  <p className="text-white">{profile.axis3Characteristics.socialOrganization}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-[#FFD700]">3 Đặc điểm Nhận diện Nổi bật nhất:</span>
                  <ul className="space-y-1.5 list-disc list-inside text-white">
                    {profile.axis3Characteristics.distinguishingFeatures.map((feat, i) => (
                      <li key={i}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* AXIS 4: SINH KẾ & TRANG PHỤC */}
            {activeAxisTab === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center animate-fadeIn">
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-1">
                    <span className="text-xs font-bold text-[#00F2FE]">Phương thức Sinh kế & Nông nghiệp:</span>
                    <p className="text-white">{profile.axis4LivelihoodAndAttire.livelihood}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-1">
                    <span className="text-xs font-bold text-[#FFD700]">Làng nghề Thủ công:</span>
                    <p className="text-white">{profile.axis4LivelihoodAndAttire.handicrafts.join(', ')}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-1">
                    <span className="text-xs font-bold text-[#FF4D4D]">Đặc điểm Trang phục Truyền thống:</span>
                    <p className="text-white leading-relaxed">{profile.axis4LivelihoodAndAttire.attireDescription}</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                  <img
                    src={profile.axis4LivelihoodAndAttire.attireImage}
                    alt={profile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {/* AXIS 5: PHONG TỤC & LỄ HỘI */}
            {activeAxisTab === 5 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-1">
                  <span className="text-xs font-bold text-[#00F2FE]">Tín ngưỡng & Tâm linh:</span>
                  <p className="text-white">{profile.axis5CustomsAndFestivals.beliefs}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-[#FFD700]">Lễ hội Tiêu biểu:</span>
                  <div className="flex flex-wrap gap-2">
                    {profile.axis5CustomsAndFestivals.festivals.map((fest, i) => (
                      <span key={i} className="px-3 py-1 rounded-lg bg-[#161F33] text-white text-xs font-bold border border-[#FFD700]/30">
                        {fest}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-1">
                  <span className="text-xs font-bold text-[#FF4D4D]">Nghệ thuật Diễn xướng Dân gian:</span>
                  <p className="text-white">{profile.axis5CustomsAndFestivals.folkArts.join(', ')}</p>
                </div>
              </div>
            )}

            {/* AXIS 6: KIẾN TRÚC NHÀ Ở */}
            {activeAxisTab === 6 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center animate-fadeIn">
                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-[#00F2FE]/30 space-y-1">
                    <span className="text-xs font-bold text-[#00F2FE]">Loại hình Kiến trúc:</span>
                    <strong className="text-lg font-black text-white block">{profile.axis6Architecture.houseType}</strong>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-1">
                    <span className="text-xs font-bold text-[#FFD700]">Giải thích Thích nghi Môi trường Sinh thái:</span>
                    <p className="text-white leading-relaxed">{profile.axis6Architecture.adaptationEcological}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-1">
                    <span className="text-xs font-bold text-white">Vật liệu chính:</span>
                    <p className="text-[#A0AEC0]">{profile.axis6Architecture.materials.join(', ')}</p>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/10 h-64">
                  <img
                    src={profile.axis6Architecture.houseImage}
                    alt={profile.housingType}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 bg-[#0B0F19] border-t border-white/10 flex items-center justify-between text-xs shrink-0">
            <span className="text-[#A0AEC0]">Mốc dữ liệu TCTK 2019 • Bài 12 Lịch sử & Địa lý</span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-[#00F2FE] text-[#0B0F19] font-bold hover:opacity-90 transition-opacity"
            >
              Đóng Hồ sơ
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
