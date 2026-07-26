import { QuizQuestion } from '../types';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Dân tộc thiểu số nào có quy mô dân số đông nhất tại Việt Nam theo Tổng điều tra dân số năm 2019?',
    options: ['Dân tộc Thái', 'Dân tộc Tày', 'Dân tộc Mường', 'Dân tộc Khmer'],
    correctAnswer: 1,
    explanation: 'Theo TCTK 2019, dân tộc Tày là dân tộc thiểu số đông nhất Việt Nam với 1.845.492 người (chiếm 1,92% dân số cả nước).',
    relatedEthnicId: 'tay'
  },
  {
    id: 2,
    question: 'Kiểu kiến trúc nhà ở truyền thống nào gắn liền với chế độ Mẫu hệ của người Ê Đê, với đặc điểm "mỗi lần có người con gái lấy chồng lại nối thêm một gian"?',
    options: ['Nhà trệt trình tường', 'Nhà sàn khum mai rùa', 'Nhà Dài sàn gỗ', 'Nhà Rông cao vút'],
    correctAnswer: 2,
    explanation: 'Người Ê Đê sinh sống trong các ngôi Nhà Dài sàn gỗ. Khi người con gái trong đại gia đình lấy chồng, ngôi nhà lại được nối dài thêm.',
    relatedEthnicId: 'e-de'
  },
  {
    id: 3,
    question: 'Nghệ thuật Xòe Thái và Thực hành Then của người Tày, Nùng, Thái đã được tổ chức nào vinh danh là Di sản Văn hóa Phi vật thể đại diện của Nhân loại?',
    options: ['UNESCO', 'UNICEF', 'ASEAN Culture Foundation', 'Ministry of Culture'],
    correctAnswer: 0,
    explanation: 'Cả Thực hành Then (2019) và Nghệ thuật Xòe Thái (2021) đều được UNESCO ghi danh là Di sản văn hóa phi vật thể đại diện của nhân loại.',
    relatedEthnicId: 'thai'
  },
  {
    id: 4,
    question: 'Yếu tố môi trường sinh thái nào giải thích vì sao người Mông ở cao nguyên đá vùng núi cao thường làm "Nhà trình tường đất vách dầy 50-60cm"?',
    options: [
      'Để tránh lũ quét sông rạch',
      'Để chịu đựng cái lạnh âm độ và gió bão rét mùa đông núi cao',
      'Để chống mối mọt dệt vải',
      'Để phục vụ chăn nuôi thủy sản'
    ],
    correctAnswer: 1,
    explanation: 'Địa bàn cư trú của người Mông là núi đá cao sương giăng giá lạnh. Tường đất trình nén dày giữ ấm cực tốt mùa đông.',
    relatedEthnicId: 'mong'
  },
  {
    id: 5,
    question: 'Trong 6 nhóm ngữ hệ cư trú tại Việt Nam, nhóm ngữ hệ nào bao gồm các dân tộc Kinh và Mường?',
    options: ['Nhóm Tày - Thái', 'Nhóm Việt - Mường (Ngữ hệ Nam Á)', 'Nhóm Nam Đảo', 'Nhóm Hmông - Dao'],
    correctAnswer: 1,
    explanation: 'Người Kinh và người Mường cùng thuộc Nhóm Việt - Mường (Ngữ hệ Nam Á), có sự gần gũi lâu đời về nguồn gốc ngôn ngữ và văn hóa.',
    relatedEthnicId: 'kinh'
  }
];
