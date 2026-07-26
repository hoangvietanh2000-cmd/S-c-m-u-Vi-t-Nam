import React from 'react';
import { BookOpen, ShieldCheck, FileText, Info, Award } from 'lucide-react';

export const AcademicReferences: React.FC = () => {
  return (
    <section id="references" className="py-16 bg-[#0B0F19] relative border-t border-white/10 text-xs">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-3xl bg-[#161F33] border border-[#00F2FE]/20 glass-panel">
          <div className="flex items-center space-x-3">
            <div className="p-3 rounded-2xl bg-[#00F2FE]/10 text-[#00F2FE]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">[MODULE 8] NGUỒN TƯ LIỆU HỌC THUẬT & QUY CHUẨN TRÍCH DẪN</h3>
              <p className="text-[#A0AEC0] mt-0.5">Cam kết tính chính xác học thuật, tôn trọng sự thật lịch sử và تن quy chuẩn dữ liệu quốc gia</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-[11px] font-bold text-[#FFD700] bg-black/40 px-3 py-1.5 rounded-xl border border-[#FFD700]/30">
            <Award className="w-4 h-4" />
            <span>Mốc Số liệu Chuẩn 2019</span>
          </div>
        </div>

        {/* Citations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#161F33]/50 border border-white/5 space-y-2">
            <span className="text-[10px] font-bold text-[#00F2FE] uppercase tracking-wider block">1. Số liệu Dân số & Địa bàn</span>
            <h4 className="text-sm font-bold text-white">Tổng cục Thống kê Việt Nam (GSO)</h4>
            <p className="text-[#A0AEC0] leading-relaxed">
              Trích xuất từ kết quả "Tổng điều tra Dân số và Nhà ở năm 2019" công bố chính thức ngày 19/12/2019 bởi Ban Chỉ đạo Tổng điều tra dân số Trung ương.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#161F33]/50 border border-white/5 space-y-2">
            <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-wider block">2. Chương trình GDPT Bài 12</span>
            <h4 className="text-sm font-bold text-white">NXB Giáo dục Việt Nam</h4>
            <p className="text-[#A0AEC0] leading-relaxed">
              Dựa theo Chương trình Sách giáo khoa Lịch sử & Địa lý (Bài 12: Cộng đồng các dân tộc Việt Nam) - Bộ sách Kết nối tri thức / Cánh diều / Chân trời sáng tạo.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#161F33]/50 border border-white/5 space-y-2">
            <span className="text-[10px] font-bold text-[#FF4D4D] uppercase tracking-wider block">3. Trưng bày Hiện vật & UNESCO</span>
            <h4 className="text-sm font-bold text-white">Bảo tàng DTH Việt Nam & UNESCO</h4>
            <p className="text-[#A0AEC0] leading-relaxed">
              Tư liệu hiện vật, ảnh di sản và danh mục Di sản văn hóa phi vật thể từ Bảo tàng Dân tộc học Việt Nam và Cục Di sản Văn hóa (Bộ VHTTDL).
            </p>
          </div>
        </div>

        {/* Resolution 202 Note */}
        <div className="p-4 rounded-2xl bg-[#0B0F19] border border-[#FFD700]/30 flex items-start space-x-3 text-[#FFD700] text-[11px] leading-relaxed">
          <Info className="w-5 h-5 shrink-0 mt-0.5 text-[#FFD700]" />
          <div>
            <strong>Lưu ý về bối cảnh địa chính trị - hành chính:</strong> Địa bàn phân bố tỉnh thành của các dân tộc được cập nhật định danh địa danh theo hệ thống hành chính chính thức hiện hành và lưu ý tinh thần Nghị quyết 202/2025/QH15 của Quốc hội về sắp xếp đơn vị hành chính.
          </div>
        </div>

        {/* Footer Credits */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#A0AEC0] text-[11px]">
          <div>
            © 2026 Bảo tàng số <strong className="text-white">"SẮC MÀU VIỆT NAM"</strong> • Dự án Sáng tạo Giáo dục Lịch sử - Địa lý
          </div>
          <div className="flex items-center space-x-4">
            <span>Chính sách Bảo mật</span>
            <span>•</span>
            <span>Điều khoản Sử dụng</span>
          </div>
        </div>
      </div>
    </section>
  );
};
