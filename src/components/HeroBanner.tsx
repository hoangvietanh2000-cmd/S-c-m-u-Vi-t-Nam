import React from 'react';
import { Compass, Scale, Sparkles, MapPin, Award, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroBannerProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate }) => {
  const regions = [
    {
      id: 'center',
      title: 'Đại ngàn Tây Nguyên & Cồng chiêng',
      ethnic: 'Gia Rai • Ê Đê • Ba Na',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      badge: 'Di sản Cồng chiêng'
    },
    {
      id: 'top-left',
      title: 'Đồng bằng & Sông nước Nam Bộ',
      ethnic: 'Kinh • Khmer',
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      badge: 'Kiến trúc Chùa Khmer'
    },
    {
      id: 'bottom-left',
      title: 'Đỉnh núi cao sương giăng',
      ethnic: 'Mông • Dao',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80',
      badge: 'Thổ cẩm & Ruộng bậc thang'
    },
    {
      id: 'top-right',
      title: 'Thung lũng Đông - Tây Bắc',
      ethnic: 'Tày • Thái • Mường • Nùng',
      image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80',
      badge: 'Nhà sàn & Xòe Thái'
    },
    {
      id: 'bottom-right',
      title: 'Duyên hải Nam Trung Bộ',
      ethnic: 'Chăm • Cơ Tu',
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      badge: 'Tháp Chăm & Nhà Gươl'
    }
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#0B0F19] via-[#111827] to-[#0B0F19]">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#00F2FE]/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#FF4D4D]/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full my-auto z-10">
        {/* Top Header Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#161F33] border border-[#00F2FE]/30 text-xs font-semibold text-[#00F2FE] shadow-lg shadow-[#00F2FE]/10">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD700] animate-spin" style={{ animationDuration: '6s' }} />
            <span>BÀI 12: CỘNG ĐỒNG CÁC DÂN TỘC VIỆT NAM • LỊCH SỬ & ĐỊA LÝ</span>
            <Award className="w-3.5 h-3.5 text-[#FFD700]" />
          </div>
        </motion.div>

        {/* Main Title & Slogan */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            SẮC MÀU VIỆT NAM
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-gradient-cyan font-bold mt-2">
              Khám phá đời sống cộng đồng các dân tộc
            </span>
          </motion.h1>

          {/* Slogan Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-1"
          >
            <span className="inline-block px-5 py-2 rounded-xl bg-gradient-to-r from-[#FF4D4D]/20 via-[#161F33] to-[#00F2FE]/20 border border-[#FF4D4D]/30 text-sm sm:text-lg font-serif-heritage italic text-[#FFD700] font-semibold shadow-md">
              "54 dân tộc – Nhiều bản sắc – Một cộng đồng Việt Nam"
            </span>
          </motion.div>

          {/* Central Pedagogical Question Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 p-5 sm:p-6 rounded-2xl glass-panel border border-[#00F2FE]/30 max-w-3xl mx-auto text-left relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-[#00F2FE] via-[#FFD700] to-[#FF4D4D]" />
            <div className="flex items-start space-x-3">
              <div className="p-2 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE] mt-0.5 shrink-0">
                <Compass className="w-5 h-5 animate-pulse" />
              </div>
              <div>
                <span className="text-[11px] font-bold tracking-widest text-[#00F2FE] uppercase block mb-1">
                  CÂU HỎI TRUNG TÂM BÀI HỌC (PEDAGOGICAL CORE)
                </span>
                <p className="text-sm sm:text-base text-white/95 font-medium leading-relaxed italic">
                  "Điều kiện tự nhiên, lịch sử cư trú và quá trình giao lưu đã tạo nên những nét riêng và điểm chung trong đời sống của các dân tộc như thế nào?"
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 pt-4"
          >
            <button
              onClick={() => onNavigate('grid')}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00A8FF] text-[#0B0F19] font-bold text-sm hover:opacity-95 transition-all shadow-xl shadow-[#00F2FE]/20 glow-cyan hover:scale-[1.02]"
            >
              <Compass className="w-4 h-4" />
              <span>🧭 Khám phá 15 Dân tộc</span>
            </button>

            <button
              onClick={() => onNavigate('comparison')}
              className="flex items-center space-x-2.5 px-6 py-3.5 rounded-xl bg-[#161F33] hover:bg-[#1E293B] border border-[#FF4D4D]/40 text-white font-bold text-sm transition-all hover:scale-[1.02] glow-red"
            >
              <Scale className="w-4 h-4 text-[#FF4D4D]" />
              <span>⚖️ Vào Góc So sánh</span>
            </button>
          </motion.div>
        </div>

        {/* 5-Region Visual Collage Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
        >
          {/* Main Hero Card (Center/Primary) */}
          <div className="lg:col-span-1 lg:row-span-2 relative group overflow-hidden rounded-2xl border border-[#00F2FE]/30 bg-[#161F33] min-h-[280px] lg:min-h-full">
            <img 
              src={regions[0].image} 
              alt={regions[0].title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent p-5 flex flex-col justify-end">
              <span className="inline-block px-2.5 py-1 bg-[#00F2FE] text-[#0B0F19] text-[10px] font-extrabold rounded-md w-max mb-2">
                {regions[0].badge}
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                {regions[0].title}
              </h3>
              <p className="text-xs text-[#A0AEC0] mt-1">{regions[0].ethnic}</p>
            </div>
          </div>

          {/* 4 Surrounding Sub-Cards */}
          {regions.slice(1).map((region) => (
            <div 
              key={region.id}
              onClick={() => onNavigate('map')}
              className="relative group overflow-hidden rounded-2xl border border-white/10 bg-[#161F33] h-[160px] cursor-pointer hover:border-[#00F2FE]/50 transition-all"
            >
              <img 
                src={region.image} 
                alt={region.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-75"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/30 to-transparent p-4 flex flex-col justify-end">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#FFD700] bg-[#0B0F19]/80 px-2 py-0.5 rounded border border-[#FFD700]/30">
                    {region.badge}
                  </span>
                  <MapPin className="w-3.5 h-3.5 text-[#00F2FE] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="text-sm font-bold text-white mt-1 group-hover:text-[#00F2FE] transition-colors">
                  {region.title}
                </h4>
                <p className="text-[11px] text-[#A0AEC0]">{region.ethnic}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="text-center pt-8 pb-2">
        <button 
          onClick={() => onNavigate('map')}
          className="inline-flex flex-col items-center text-xs text-[#A0AEC0] hover:text-[#00F2FE] transition-colors group"
        >
          <span>Khám phá Bản đồ Dân cư</span>
          <ChevronDown className="w-4 h-4 mt-1 animate-bounce text-[#00F2FE]" />
        </button>
      </div>
    </section>
  );
};
