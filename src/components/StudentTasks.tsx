import React, { useState } from 'react';
import { FileText, Users, CheckCircle, Award, Printer, Send, Sparkles, HelpCircle } from 'lucide-react';
import { Harvest321Data } from '../types';
import { QUIZ_QUESTIONS } from '../data/quizData';
import confetti from 'canvas-confetti';

export const StudentTasks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'TASKS' | 'HARVEST' | 'QUIZ'>('HARVEST');

  // Form State for 3-2-1 Harvest
  const [formData, setFormData] = useState<Harvest321Data>({
    discoveries: ['', '', ''],
    comparisons: ['', ''],
    action: '',
    studentName: '',
    className: ''
  });

  const [submittedNotes, setSubmittedNotes] = useState<Harvest321Data[]>([]);

  // Quiz State
  const [quizAnswers, setQuizAnswers] = useState<{ [key: number]: number }>({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  const handleHarvestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName || !formData.action) return;

    const newNote: Harvest321Data = {
      ...formData,
      timestamp: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    };

    setSubmittedNotes([newNote, ...submittedNotes]);

    // Trigger celebration confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Reset fields
    setFormData({
      discoveries: ['', '', ''],
      comparisons: ['', ''],
      action: '',
      studentName: formData.studentName,
      className: formData.className
    });
  };

  const calculateQuizScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (quizAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  return (
    <section id="tasks" className="py-20 bg-[#0B0F19] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#161F33] border border-[#00F2FE]/30 text-xs font-bold text-[#00F2FE] mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>[MODULE 7] NHIỆM VỤ HỌC TẬP & PHIẾU THU HOẠCH 3-2-1</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            Góc Thảo luận Group & <span className="text-gradient-cyan">Thu hoạch 3-2-1</span>
          </h2>
          <p className="text-sm text-[#A0AEC0] mt-2">
            Thực hành trải nghiệm học tập tích cực, ghi nhận phát hiện mới và đề xuất hành động bảo tồn di sản
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center space-x-3 mb-10">
          <button
            onClick={() => setActiveTab('HARVEST')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'HARVEST'
                ? 'bg-[#00F2FE] text-[#0B0F19] glow-cyan shadow-lg'
                : 'bg-[#161F33] text-[#A0AEC0] border border-white/10'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Mẫu Phiếu Thu hoạch 3-2-1</span>
          </button>

          <button
            onClick={() => setActiveTab('TASKS')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'TASKS'
                ? 'bg-[#00F2FE] text-[#0B0F19] glow-cyan shadow-lg'
                : 'bg-[#161F33] text-[#A0AEC0] border border-white/10'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>4 Nhóm Nhiệm vụ Thảo luận</span>
          </button>

          <button
            onClick={() => setActiveTab('QUIZ')}
            className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'QUIZ'
                ? 'bg-[#00F2FE] text-[#0B0F19] glow-cyan shadow-lg'
                : 'bg-[#161F33] text-[#A0AEC0] border border-white/10'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>Trắc nghiệm Tự đánh giá</span>
          </button>
        </div>

        {/* TAB 1: HARVEST FORM 3-2-1 */}
        {activeTab === 'HARVEST' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form Input (7 cols) */}
            <div className="lg:col-span-7 bg-[#161F33] rounded-3xl p-6 sm:p-8 border border-[#00F2FE]/30 glass-panel">
              <form onSubmit={handleHarvestSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-white block mb-1">Họ và tên Học sinh *</label>
                    <input
                      type="text"
                      required
                      placeholder="Nguyễn Văn A"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:border-[#00F2FE] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-white block mb-1">Lớp học</label>
                    <input
                      type="text"
                      placeholder="Lớp 12A1"
                      value={formData.className}
                      onChange={(e) => setFormData({ ...formData, className: e.target.value })}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:border-[#00F2FE] focus:outline-none"
                    />
                  </div>
                </div>

                {/* 3 Discoveries */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#00F2FE] uppercase tracking-wider block">
                    💡 3 Phát hiện mới ấn tượng nhất của em:
                  </span>
                  {[0, 1, 2].map((i) => (
                    <input
                      key={i}
                      type="text"
                      placeholder={`Phát hiện ${i + 1} (Ví dụ: Sự độc đáo của Nhà Dài Ê Đê Mẫu hệ...)`}
                      value={formData.discoveries[i]}
                      onChange={(e) => {
                        const newD = [...formData.discoveries] as [string, string, string];
                        newD[i] = e.target.value;
                        setFormData({ ...formData, discoveries: newD });
                      }}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:border-[#00F2FE] focus:outline-none"
                    />
                  ))}
                </div>

                {/* 2 Comparative Observations */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-[#FFD700] uppercase tracking-wider block">
                    ⚖️ 2 Điểm so sánh đối chiếu kiến trúc / sinh kế:
                  </span>
                  {[0, 1].map((i) => (
                    <input
                      key={i}
                      type="text"
                      placeholder={`So sánh ${i + 1} (Ví dụ: So sánh Nhà sàn thung lũng với Nhà trệt vùng núi cao...)`}
                      value={formData.comparisons[i]}
                      onChange={(e) => {
                        const newC = [...formData.comparisons] as [string, string];
                        newC[i] = e.target.value;
                        setFormData({ ...formData, comparisons: newC });
                      }}
                      className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-3.5 py-2 text-xs text-white focus:border-[#00F2FE] focus:outline-none"
                    />
                  ))}
                </div>

                {/* 1 Action for Preservation */}
                <div>
                  <span className="text-xs font-bold text-[#FF4D4D] uppercase tracking-wider block mb-1">
                    🌱 1 Hành động cụ thể của em để góp phần bảo tồn văn hóa:
                  </span>
                  <textarea
                    required
                    rows={2}
                    placeholder="Đề xuất hành động (Ví dụ: Tôn trọng trang phục dân tộc, tìm hiểu di sản, không kỳ thị văn hóa...)"
                    value={formData.action}
                    onChange={(e) => setFormData({ ...formData, action: e.target.value })}
                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl p-3 text-xs text-white focus:border-[#00F2FE] focus:outline-none"
                  />
                </div>

                <div className="flex items-center space-x-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00A8FF] text-[#0B0F19] font-bold text-xs hover:opacity-95 transition-all flex items-center justify-center space-x-2 glow-cyan"
                  >
                    <Send className="w-4 h-4" />
                    <span>Nộp Phiếu Thu hoạch Số</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="px-4 py-3 rounded-xl bg-[#0B0F19] border border-white/10 text-white text-xs font-bold hover:bg-white/5 transition-colors flex items-center space-x-1.5"
                  >
                    <Printer className="w-4 h-4 text-[#FFD700]" />
                    <span>In Phiếu</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Sticky Notes Wall Preview (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-[#FFD700]" />
                <span>Bức Tường Ghi Chú Số (Sticky Wall)</span>
              </h3>

              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {submittedNotes.length === 0 ? (
                  <div className="p-8 text-center rounded-2xl bg-[#161F33]/40 border border-dashed border-white/10 text-xs text-[#A0AEC0]">
                    Chưa có phiếu nộp. Hãy hoàn thành biểu mẫu bên cạnh để ghi tên mình lên bức tường di sản!
                  </div>
                ) : (
                  submittedNotes.map((note, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-[#161F33] border border-[#00F2FE]/30 space-y-2">
                      <div className="flex items-center justify-between border-b border-white/10 pb-2">
                        <span className="text-xs font-bold text-[#00F2FE]">{note.studentName} ({note.className || 'Học sinh'})</span>
                        <span className="text-[10px] text-[#A0AEC0]">{note.timestamp}</span>
                      </div>
                      <p className="text-xs text-white italic">"Hành động: {note.action}"</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: 4 GROUP TASKS */}
        {activeTab === 'TASKS' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-[#161F33] border border-[#00F2FE]/30 glass-panel space-y-3">
              <span className="px-2.5 py-1 rounded bg-[#00F2FE] text-[#0B0F19] text-[10px] font-extrabold">NHÓM 1</span>
              <h3 className="text-lg font-bold text-white">Sinh kế & Môi trường Sinh thái</h3>
              <p className="text-xs text-[#A0AEC0] leading-relaxed">
                Nghiên cứu sự thích ứng của người Kinh (đồng bằng lúa nước), người Thái (thung lũng), người Mông (thổ canh hốc đá) với điều kiện tự nhiên cư trú.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#161F33] border border-[#FFD700]/30 glass-panel space-y-3">
              <span className="px-2.5 py-1 rounded bg-[#FFD700] text-[#0B0F19] text-[10px] font-extrabold">NHÓM 2</span>
              <h3 className="text-lg font-bold text-white">Ăn, Mặc, Ở & Thích nghi</h3>
              <p className="text-xs text-[#A0AEC0] leading-relaxed">
                So sánh 4 kiểu kiến trúc nhà ở (Nhà trệt, Nhà sàn, Nhà dài, Nhà Rông) và trang phục vải chàm/thổ cẩm thích ứng khí hậu.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#161F33] border border-[#FF4D4D]/30 glass-panel space-y-3">
              <span className="px-2.5 py-1 rounded bg-[#FF4D4D] text-[#0B0F19] text-[10px] font-extrabold">NHÓM 3</span>
              <h3 className="text-lg font-bold text-white">Tín ngưỡng, Phong tục & Gia đình</h3>
              <p className="text-xs text-[#A0AEC0] leading-relaxed">
                Tìm hiểu Tín ngưỡng thờ cúng tổ tiên, chế độ Mẫu hệ (Ê Đê, Gia Rai) và tục xuất gia đi tu ngắn hạn (Khmer).
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#161F33] border border-[#10B981]/30 glass-panel space-y-3">
              <span className="px-2.5 py-1 rounded bg-[#10B981] text-[#0B0F19] text-[10px] font-extrabold">NHÓM 4</span>
              <h3 className="text-lg font-bold text-white">Lễ hội & Bảo tồn Di sản</h3>
              <p className="text-xs text-[#A0AEC0] leading-relaxed">
                Thống kê các Di sản UNESCO ghi danh (Xòe Thái, Then, Cồng chiêng) và đề xuất giải pháp truyền thừa văn hóa trẻ.
              </p>
            </div>
          </div>
        )}

        {/* TAB 3: QUIZ */}
        {activeTab === 'QUIZ' && (
          <div className="bg-[#161F33] rounded-3xl p-6 sm:p-8 border border-[#00F2FE]/30 glass-panel max-w-3xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center justify-between">
              <span>Trắc nghiệm Tự đánh giá (5 Cầu hỏi Bài 12)</span>
              {showQuizResults && (
                <span className="px-3 py-1 rounded-full bg-[#00F2FE] text-[#0B0F19] text-xs font-black">
                  Kết quả: {calculateQuizScore()} / 5
                </span>
              )}
            </h3>

            <div className="space-y-6">
              {QUIZ_QUESTIONS.map((q) => (
                <div key={q.id} className="p-4 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-3">
                  <p className="text-xs font-bold text-white">Câu {q.id}: {q.question}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = quizAnswers[q.id] === optIdx;
                      const isCorrect = q.correctAnswer === optIdx;

                      return (
                        <button
                          key={optIdx}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: optIdx })}
                          className={`p-3 rounded-xl text-xs font-medium text-left border transition-all ${
                            isSelected
                              ? 'bg-[#00F2FE]/20 border-[#00F2FE] text-white font-bold'
                              : 'bg-[#161F33]/60 border-white/5 text-[#A0AEC0] hover:text-white'
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {showQuizResults && (
                    <div className="p-3 rounded-xl bg-[#161F33] border border-[#00F2FE]/30 text-xs text-[#00F2FE]">
                      💡 <strong>Giải thích:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setShowQuizResults(true);
                if (calculateQuizScore() >= 4) {
                  confetti({ particleCount: 120, spread: 80 });
                }
              }}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#00F2FE] to-[#00A8FF] text-[#0B0F19] font-bold text-xs hover:opacity-95 transition-all glow-cyan"
            >
              Xem Đáp án & Giải thích Chi tiết
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
