import React, { useState } from 'react';
import { BookOpen, Home, HelpCircle, CheckCircle, Info, ChevronRight, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ComparisonMatrix: React.FC = () => {
  const [selectedType, setSelectedType] = useState<number>(0);

  const houses = [
    {
      id: 0,
      title: 'Nhà trệt',
      subTitle: 'Đồng bằng, Đô thị & Núi cao (Kinh, Mông, Hoa, Khmer, Chăm)',
      artifactSource: 'Tranh ảnh Nhà 3 gian Bắc Bộ, Nhà trình tường Mông, Shop-house Chợ Lớn',
      observationQuestion: 'Tại sao cùng là "Nhà trệt" nhưng nhà người Kinh lợp ngói rộng hiên, còn nhà người Mông lại đầm đất tường dầy 60cm?',
      ecologicalExplanation: 'Nhà trệt người Kinh ở đồng bằng thiết kế hiên rộng đón gió mát, mái dốc thoát nước mưa nhanh. Trong khi đó, người Mông sống trên cao nguyên đá âm độ giá lạnh nên đầm đất tường trình dày giữ ấm tuyệt đối.',
      educationalConclusion: 'Nhà trệt thể hiện tính linh hoạt thích ứng tuyệt vời: nương theo nhiệt độ, sức gió và nguồn vật liệu sẵn có của từng vùng sinh thái.',
      representatives: ['Dân tộc Kinh', 'Dân tộc Mông', 'Dân tộc Hoa', 'Dân tộc Khmer', 'Dân tộc Dao (phân nhóm)'],
      image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80',
      materials: 'Gạch nung, ngói sông Cầu, đất sét trình tường, tre gỗ'
    },
    {
      id: 1,
      title: 'Nhà sàn',
      subTitle: 'Thung lũng & Sườn núi (Tày, Thái, Mường, Nùng, Gia Rai, Khơ Mú)',
      artifactSource: 'Mô hình Nhà sàn khum mai rùa Thái Đen có hoa văn Khau Cút, Nhà sàn Mường',
      observationQuestion: 'Vì sao hầu hết các dân tộc sinh sống vùng thung lũng miền núi lại làm nhà sàn cao khỏi mặt đất?',
      ecologicalExplanation: 'Gầm sàn cao giúp tránh hơi ẩm bốc lên từ mặt đất, chống muỗi rừng, côn trùng và thú dữ. Đồng thời gầm sàn là nơi chứa nông cụ, cối giã gạo và gùi nương.',
      educationalConclusion: 'Nhà sàn là phát minh kiến trúc sinh thái đỉnh cao của cư dân miền núi phương Nam để chung sống an toàn với rừng núi.',
      representatives: ['Dân tộc Tày', 'Dân tộc Thái', 'Dân tộc Mường', 'Dân tộc Nùng', 'Dân tộc Gia Rai', 'Dân tộc Khơ Mú'],
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      materials: 'Gỗ lim/sến, nứa đập dạt, mái ngói âm dương / lá cọ / cỏ tranh'
    },
    {
      id: 2,
      title: 'Nhà dài',
      subTitle: 'Tây Nguyên & Chế độ Mẫu hệ (Dân tộc Ê Đê)',
      artifactSource: 'Cầu thang đôi đẽo hình Đôi ngực phụ nữ & vầng trăng khuyết, Sàn Gah',
      observationQuestion: 'Vì sao ngôi nhà dài của người Ê Đê lại có chiều dài lên tới 50-100m và cầu thang có hình đôi ngực phụ nữ?',
      ecologicalExplanation: 'Nhà dài Ê Đê đại diện cho xã hội Mẫu hệ. Khi người con gái trong đại gia đình lấy chồng, ngôi nhà lại được nối thêm một gian về phía mặt trời lặn. Cầu thang cái chạm đôi ngực tôn vinh người Mẹ.',
      educationalConclusion: 'Kiến trúc Nhà Dài không chỉ đáp ứng công năng ở mà còn là biểu tượng vật thể hóa của trật tự xã hội Mẫu hệ kiêu hãnh.',
      representatives: ['Dân tộc Ê Đê (Đắk Lắk)'],
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      materials: 'Gỗ gõ nguyên khối, tre nứa đập dạt, mái cỏ tranh dầy 20cm'
    },
    {
      id: 3,
      title: 'Nhà cộng đồng (Nhà Rông / Gươl)',
      subTitle: 'Tây Nguyên & Trường Sơn (Ba Na, Cơ Tu, Xơ Đăng)',
      artifactSource: 'Mái Nhà Rông Ba Na vút cao như lưỡi rìu, Nhà Gươl Cơ Tu chạm đầu trâu',
      observationQuestion: 'Vai trò của Ngôi Nhà Rông / Gươl có điểm gì khác biệt so với nhà ở gia đình thông thường?',
      ecologicalExplanation: 'Nhà Rông / Gươl là trái tim của buôn làng: nơi diễn ra họp làng, xử kiện luật tục, tiếp khách quý, tổ chức lễ hội cồng chiêng và thờ cúng thần linh chung.',
      educationalConclusion: 'Nhà cộng đồng là đỉnh cao mỹ thuật và tinh thần đoàn kết keo sơn của toàn bộ thành viên trong buôn làng.',
      representatives: ['Dân tộc Ba Na', 'Dân tộc Cơ Tu', 'Dân tộc Xơ Đăng', 'Dân tộc Giẻ Triêng'],
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80',
      materials: 'Cột gỗ to lớn, tre bương, mái cỏ tranh uốn cao 15-20m'
    }
  ];

  const currentHouse = houses[selectedType];

  return (
    <section id="comparison" className="py-20 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161F33] border border-[#00F2FE]/30 text-xs font-bold text-[#00F2FE] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>[MODULE 5] GÓC SO SÁNH TƯƠNG TÁC KIẾN TRÚC</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Phân loại Kiến trúc Nhà ở & <span className="text-gradient-cyan">Thích nghi Môi trường</span>
          </h2>
          <p className="text-sm text-[#A0AEC0] mt-2">
            Áp dụng Công thức Sư phạm: Tư liệu Nguồn → Câu hỏi Quan sát → Giải thích Sinh thái → Kết luận Dạy học
          </p>
        </div>

        {/* 4 Housing Type Selector Buttons */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {houses.map((house) => {
            const isActive = selectedType === house.id;
            return (
              <button
                key={house.id}
                onClick={() => setSelectedType(house.id)}
                className={`p-4 rounded-2xl text-left transition-all border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#161F33] border-[#00F2FE] text-white glow-cyan shadow-xl scale-105'
                    : 'bg-[#161F33]/40 border-white/10 text-[#A0AEC0] hover:text-white hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Home className={`w-5 h-5 ${isActive ? 'text-[#00F2FE]' : 'text-[#A0AEC0]'}`} />
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isActive ? 'bg-[#00F2FE] text-[#0B0F19]' : 'bg-black/30'}`}>
                    Loại {house.id + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{house.title}</h3>
                  <p className="text-[11px] text-[#A0AEC0] line-clamp-1 mt-0.5">{house.subTitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Pedagogy Content Display Frame */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHouse.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-[#161F33] rounded-3xl p-6 sm:p-8 border border-[#00F2FE]/30 glass-panel shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Image Frame (5 cols) */}
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-white/10 h-72 lg:h-full min-h-[280px]">
                <img 
                  src={currentHouse.image} 
                  alt={currentHouse.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent p-5 flex flex-col justify-end">
                  <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider block mb-1">
                    Vật liệu chủ yếu:
                  </span>
                  <p className="text-xs text-white/90">{currentHouse.materials}</p>
                </div>
              </div>

              {/* Pedagogy Formula Steps (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <span className="text-xs font-extrabold text-[#00F2FE] uppercase tracking-wider">
                    LOẠI HÌNH KIẾN TRÚC: {currentHouse.title.toUpperCase()}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">{currentHouse.subTitle}</h3>
                </div>

                {/* Step 1: Material / Artifact Source */}
                <div className="p-4 rounded-xl bg-[#0B0F19] border border-white/10 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#00F2FE]">
                    <Eye className="w-4 h-4" />
                    <span>1. Nguồn Tư liệu / Hiện vật Quan sát:</span>
                  </div>
                  <p className="text-xs text-[#A0AEC0] pl-6">{currentHouse.artifactSource}</p>
                </div>

                {/* Step 2: Observational Question */}
                <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#FF4D4D]/30 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#FF4D4D]">
                    <HelpCircle className="w-4 h-4" />
                    <span>2. Câu hỏi Quan sát Hướng dẫn:</span>
                  </div>
                  <p className="text-xs text-white italic pl-6">"{currentHouse.observationQuestion}"</p>
                </div>

                {/* Step 3: Ecological Explanation */}
                <div className="p-4 rounded-xl bg-[#0B0F19] border border-[#FFD700]/30 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#FFD700]">
                    <Info className="w-4 h-4" />
                    <span>3. Giải thích Thích nghi Sinh thái:</span>
                  </div>
                  <p className="text-xs text-[#A0AEC0] leading-relaxed pl-6">{currentHouse.ecologicalExplanation}</p>
                </div>

                {/* Step 4: Educational Conclusion */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#00F2FE]/10 via-[#0B0F19] to-[#00F2FE]/10 border border-[#00F2FE]/40 space-y-1">
                  <div className="flex items-center space-x-2 text-xs font-bold text-[#00F2FE]">
                    <CheckCircle className="w-4 h-4" />
                    <span>4. Kết luận Sư phạm Bài học:</span>
                  </div>
                  <p className="text-xs text-white font-medium pl-6">{currentHouse.educationalConclusion}</p>
                </div>

                {/* Representatives List */}
                <div className="pt-2">
                  <span className="text-xs font-bold text-[#A0AEC0] block mb-2">
                    Các Dân tộc Tiêu biểu sử dụng kiểu nhà này:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {currentHouse.representatives.map((rep, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-[#0B0F19] border border-[#00F2FE]/30 text-xs font-bold text-[#00F2FE]">
                        {rep}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
