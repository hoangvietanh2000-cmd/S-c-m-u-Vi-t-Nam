import React from 'react';
import { Sparkles, Award, Flame, Music, Sun } from 'lucide-react';

export const SpiritualLife: React.FC = () => {
  const heritageList = [
    {
      title: 'Nghệ thuật Xòe Thái',
      type: 'UNESCO Di sản đại diện nhân loại (2021)',
      ethnic: 'Dân tộc Thái',
      desc: 'Biểu tượng đoàn kết gắn bó cộng đồng với 6 điệu xòe cổ uyển chuyển nhịp nhàng quanh đống lửa.',
      image: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Thực hành Then',
      type: 'UNESCO Di sản đại diện nhân loại (2019)',
      ethnic: 'Tày • Nùng • Thái',
      desc: 'Nghi lễ âm nhạc diễn xướng dân gian kết hợp tiếng Đàn Tính êm dịu giải hạn cầu an.',
      image: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Không gian văn hóa Cồng chiêng Tây Nguyên',
      type: 'UNESCO Kiệt tác Di sản truyền miệng (2005)',
      ethnic: 'Gia Rai • Ê Đê • Ba Na • Mơ Nông',
      desc: 'Âm thanh cồng chiêng vang vọng núi rừng gắn liền với mọi nghi lễ vòng đời người và cây lúa.',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Tín ngưỡng thờ Mẫu Tam phủ',
      type: 'UNESCO Di sản đại diện nhân loại (2016)',
      ethnic: 'Dân tộc Kinh (Việt)',
      desc: 'Nghi lễ hầu đồng diễn xướng âm nhạc chầu văn tôn vinh các vị Thánh Mẫu cai quản đất trời sông núi.',
      image: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <section id="spiritual" className="py-20 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161F33] border border-[#FFD700]/30 text-xs font-bold text-[#FFD700] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>[MODULE 4] ĐỜI SỐNG TINH THẦN & DI SẢN VĂN HÓA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Tín ngưỡng, Lễ hội & <span className="text-gradient-gold">Di sản UNESCO</span>
          </h2>
          <p className="text-sm text-[#A0AEC0] mt-2">
            Nơi hội tụ triết lý nhân sinh, lòng biết ơn cội nguồn tổ tiên và kho tàng nghệ thuật diễn xướng dân gian
          </p>
        </div>

        {/* Top 4 UNESCO Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {heritageList.map((item, index) => (
            <div 
              key={index}
              className="bg-[#161F33] rounded-3xl overflow-hidden border border-[#FFD700]/20 glass-panel hover:border-[#FFD700]/50 transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161F33] via-transparent to-transparent opacity-90" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#FFD700] text-[#0B0F19] text-[10px] font-extrabold flex items-center space-x-1">
                    <Award className="w-3 h-3" />
                    <span>UNESCO</span>
                  </span>
                </div>

                <div className="p-4 space-y-2">
                  <span className="text-[10px] text-[#00F2FE] font-bold block">{item.ethnic}</span>
                  <h3 className="text-base font-bold text-white group-hover:text-[#FFD700] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#A0AEC0] line-clamp-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Festival & Ritual Highlights */}
        <div className="bg-[#161F33] rounded-3xl p-6 sm:p-8 border border-white/10 glass-panel">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center space-x-2">
            <Flame className="w-5 h-5 text-[#FF4D4D]" />
            <span>Các Lễ hội & Tập quán Tiêu biểu theo Vùng miền</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
              <span className="text-xs font-bold text-[#00F2FE]">Lễ hội Xuống đồng (Lồng Tồng)</span>
              <h4 className="text-sm font-bold text-white">Miền núi Đông - Tây Bắc (Tày, Nùng, Thái)</h4>
              <p className="text-xs text-[#A0AEC0] leading-relaxed">
                Cầu mùa màng bội thu, khởi đầu mùa vụ mới với trò chơi ném còn, chọi trâu, hát sli, hát lượn.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
              <span className="text-xs font-bold text-[#FFD700]">Lễ hội Ok Om Bok & Katê</span>
              <h4 className="text-sm font-bold text-white">Nam Bộ & Duyên hải Nam Trung Bộ (Khmer, Chăm)</h4>
              <p className="text-xs text-[#A0AEC0] leading-relaxed">
                Lễ cúng Trăng đút cốm dẹp Ok Om Bok và Đua ghe Ngo kịch tính của người Khmer; Lễ Katê dưới chân tháp cổ người Chăm.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-2">
              <span className="text-xs font-bold text-[#FF4D4D]">Lễ Bỏ Mả (Pơ Thi) & Cúng Bến Nước</span>
              <h4 className="text-sm font-bold text-white">Tây Nguyên (Gia Rai, Ê Đê, Ba Na)</h4>
              <p className="text-xs text-[#A0AEC0] leading-relaxed">
                Nghi lễ tiễn đưa vĩnh viễn linh hồn người quá cố về cội nguồn tổ tiên cùng nhịp cồng chiêng xoang quay thần thiêng.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
