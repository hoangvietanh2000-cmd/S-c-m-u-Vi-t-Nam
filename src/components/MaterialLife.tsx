import React, { useState } from 'react';
import { Layers, Wheat, Shirt, Hammer, Navigation, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const MaterialLife: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'AGRI' | 'HANDICRAFT' | 'ATTIRE' | 'TRANSPORT'>('AGRI');

  const topics = [
    { id: 'AGRI', name: 'Nông nghiệp & Sinh kế', icon: Wheat },
    { id: 'HANDICRAFT', name: 'Làng nghề & Thủ công', icon: Hammer },
    { id: 'ATTIRE', name: 'Trang phục & Dệt thổ cẩm', icon: Shirt },
    { id: 'TRANSPORT', name: 'Giao thông & Phương tiện', icon: Navigation }
  ];

  return (
    <section id="material" className="py-20 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161F33] border border-[#00F2FE]/30 text-xs font-bold text-[#00F2FE] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>[MODULE 3] ĐỜI SỐNG VẬT CHẤT CÁC DÂN TỘC</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Nông nghiệp, Trang phục & <span className="text-gradient-cyan">Thích nghi Sinh thái</span>
          </h2>
          <p className="text-sm text-[#A0AEC0] mt-2">
            Tìm hiểu sự thích ứng đa dạng của con người với môi trường tự nhiên từ Đồng bằng đến Cao nguyên núi đá
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {topics.map((topic) => {
            const Icon = topic.icon;
            const isActive = activeTab === topic.id;
            return (
              <button
                key={topic.id}
                onClick={() => setActiveTab(topic.id as any)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all border ${
                  isActive
                    ? 'bg-[#00F2FE] text-[#0B0F19] border-[#00F2FE] glow-cyan shadow-lg scale-105'
                    : 'bg-[#161F33] text-[#A0AEC0] border-white/10 hover:text-white hover:border-white/20'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{topic.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <div className="bg-[#161F33] rounded-3xl p-6 sm:p-8 border border-[#00F2FE]/20 glass-panel">
          {activeTab === 'AGRI' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#00F2FE] uppercase tracking-wider">
                  🌾 Canh tác Lúa nước & Nương rẫy
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Phương thức sản xuất gắn liền với điều kiện tự nhiên
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#A0AEC0] leading-relaxed">
                  <p>
                    <strong className="text-white">Trồng lúa nước:</strong> Tiêu biểu ở người Kinh, Khmer, Thái, Tày, Mường. Sử dụng hệ thống đê điều (đồng bằng) và mương - phai - lái - lịn dẫn nước suối về thung lũng (người Thái).
                  </p>
                  <p>
                    <strong className="text-white">Nương rẫy & Ruộng bậc thang:</strong> Cư dân núi cao như người Mông, Dao, Gia Rai, Ê Đê, Cơ Tu trồng lúa nương, ngô bằng phương pháp chọc lỗ tra hạt trên hốc đá hoặc kiến tạo ruộng bậc thang tuyệt mỹ trên sườn núi dốc.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
                <img
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
                  alt="Nông nghiệp lúa nước"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {activeTab === 'HANDICRAFT' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider">
                  🔨 Làng nghề Truyền thống Bạt ngàn
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Chế tác đồ vật thủ công đỉnh cao nghệ thuật
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#A0AEC0] leading-relaxed">
                  <p>
                    <strong className="text-white">Gốm Bàu Trúc (Người Chăm):</strong> Làm hoàn toàn bằng tay không dùng bàn xoay, nung ngoài trời bằng rơm củi (UNESCO Di sản khẩn cấp).
                  </p>
                  <p>
                    <strong className="text-white">Rèn Phúc Sen (Người Nùng):</strong> Kỹ thuật rèn nhíp xe ô tô hỏa lò độc đáo làm dao kéo sắc bén nổi danh toàn quốc.
                  </p>
                  <p>
                    <strong className="text-white">Gốm Bát Tràng (Người Kinh):</strong> Dệt lụa Vạn Phúc, mây tre đan Phú Vinh.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
                <img
                  src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
                  alt="Gốm Bàu Trúc Chăm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {activeTab === 'ATTIRE' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#FF4D4D] uppercase tracking-wider">
                  👘 Nghệ thuật Dệt Thổ cẩm & Trang phục
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Chàm, Lanh, Lụa & Trang sức Kiềng Bạc
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#A0AEC0] leading-relaxed">
                  <p>
                    <strong className="text-white">Kỹ thuật dệt nhuộm chàm & sáp ong:</strong> Người Mông, Dao, Tày, Nùng dệt vải lanh, vẽ hoa văn sáp ong tỉ mỉ rồi nhuộm chàm nhiều lần tạo màu đen thẫm mịn màng.
                  </p>
                  <p>
                    <strong className="text-white">Khăn Piêu & Áo Cóm (Thái):</strong> Hàng cúc bạc hình con bướm, khăn piêu thêu ngọn rau dớn duyên dáng.
                  </p>
                  <p>
                    <strong className="text-white">Trang phục Sàn gòn / Sampot (Khmer):</strong> Áo dài (Kinh), Khăn rằn (Nam Bộ).
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
                <img
                  src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80"
                  alt="Trang phục thổ cẩm"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}

          {activeTab === 'TRANSPORT' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <span className="text-xs font-bold text-[#10B981] uppercase tracking-wider">
                  🚣 Phương tiện Vận chuyển & Đi lại
                </span>
                <h3 className="text-2xl font-bold text-white">
                  Khít khao với môi trường Địa hình cư trú
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-[#A0AEC0] leading-relaxed">
                  <p>
                    <strong className="text-white">Chiếc Gùi khoác vai (Tây Nguyên / Miền núi):</strong> Gùi tre, gùi mây có nắp hoặc không nắp đồng hành cùng bà con lên nương xuống chợ.
                  </p>
                  <p>
                    <strong className="text-white">Ghe, Xuồng, Cầu khỉ (Vùng Sông nước Nam Bộ):</strong> Xuồng ba lá, ghe Ngo đua hội Ok Om Bok vượt sóng kênh rạch sông Mê Kông.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10 h-72">
                <img
                  src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80"
                  alt="Đua ghe Ngo Khmer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
