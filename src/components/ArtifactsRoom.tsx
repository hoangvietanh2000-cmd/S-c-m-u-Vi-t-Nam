import React, { useState } from 'react';
import { MUSEUM_ARTIFACTS } from '../data/artifactsData';
import { MuseumArtifact } from '../types';
import { Layers, Search, Eye, X, Info, Sparkles, Box } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ArtifactsRoom: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeArtifact, setActiveArtifact] = useState<MuseumArtifact | null>(null);

  const categories = ['ALL', 'Trang phục & Dệt', 'Nhạc cụ', 'Nông cụ & Sinh kế', 'Kiến trúc & Tín ngưỡng'];

  const filteredArtifacts = selectedCategory === 'ALL'
    ? MUSEUM_ARTIFACTS
    : MUSEUM_ARTIFACTS.filter(a => a.category === selectedCategory);

  return (
    <section id="artifacts" className="py-20 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161F33] border border-[#00F2FE]/30 text-xs font-bold text-[#00F2FE] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>[MODULE 6] PHÒNG HIỆN VẬT SỐ BẢO TÀNG</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Bộ sưu tập Hiện vật <span className="text-gradient-cyan">Di sản Văn hóa</span>
          </h2>
          <p className="text-sm text-[#A0AEC0] mt-2">
            Quan sát trực quan các hiện vật tiêu biểu: Khăn Piêu, Khèn Mông, Cồng chiêng Tây Nguyên, Cầu thang Ê Đê...
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00F2FE] text-[#0B0F19] glow-cyan shadow-lg'
                  : 'bg-[#161F33] text-[#A0AEC0] hover:text-white border border-white/10'
              }`}
            >
              {cat === 'ALL' ? 'Tất cả Hiện vật' : cat}
            </button>
          ))}
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArtifacts.map((artifact) => (
            <div
              key={artifact.id}
              onClick={() => setActiveArtifact(artifact)}
              className="bg-[#161F33] rounded-3xl overflow-hidden border border-white/10 glass-panel hover:border-[#00F2FE]/50 transition-all cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={artifact.image}
                    alt={artifact.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161F33] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0B0F19]/80 text-[#00F2FE] text-[10px] font-bold border border-[#00F2FE]/30">
                    {artifact.ethnicGroup}
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-[#A0AEC0] uppercase font-bold block">{artifact.category}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                    {artifact.name}
                  </h3>
                  <p className="text-xs text-[#A0AEC0] line-clamp-2 leading-relaxed">
                    {artifact.description}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="w-full py-2 rounded-xl bg-[#0B0F19] text-xs font-bold text-[#00F2FE] flex items-center justify-center space-x-1.5 group-hover:bg-[#00F2FE] group-hover:text-[#0B0F19] transition-all">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Chi tiết & Soi 3D</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Artifact Modal Lightbox */}
        <AnimatePresence>
          {activeArtifact && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-[#161F33] border border-[#00F2FE]/40 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative overflow-hidden glass-panel space-y-6"
              >
                <button
                  onClick={() => setActiveArtifact(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-[#0B0F19] text-[#A0AEC0] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-xl bg-[#00F2FE]/10 text-[#00F2FE]">
                    <Box className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#00F2FE]">Dân tộc {activeArtifact.ethnicGroup} • {activeArtifact.category}</span>
                    <h3 className="text-2xl font-black text-white">{activeArtifact.name}</h3>
                  </div>
                </div>

                <div className="relative h-64 rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={activeArtifact.image}
                    alt={activeArtifact.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#0B0F19]/90 text-[11px] font-bold text-[#FFD700] rounded-lg border border-[#FFD700]/30">
                    🔍 Chất liệu: {activeArtifact.material}
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-[#A0AEC0] leading-relaxed">
                  <div>
                    <strong className="text-white block mb-1">Mô tả đặc điểm:</strong>
                    <p>{activeArtifact.description}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#0B0F19] border border-[#00F2FE]/20">
                    <strong className="text-[#00F2FE] block mb-1">Giá trị văn hóa & Ý nghĩa biểu tượng:</strong>
                    <p className="text-white">{activeArtifact.culturalSignificance}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
