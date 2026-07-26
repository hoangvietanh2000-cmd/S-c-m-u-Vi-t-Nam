import { EthnicProfile } from '../types';

export const ETHNIC_PROFILES: EthnicProfile[] = [
  {
    id: 'kinh',
    name: 'Kinh',
    otherNames: 'Việt',
    nativeScript: 'Chữ Quốc ngữ / Chữ Nôm',
    languageGroup: 'Việt - Mường',
    population2019: 82085826,
    populationPercent: '85,3%',
    primaryRegions: ['Đồng bằng Bắc Bộ', 'Đồng bằng Sông Cửu Long', 'Duyên hải Mộc mạc', 'Đô thị toàn quốc'],
    housingType: 'Nhà trệt',
    unescoHeritage: 'Tín ngưỡng thờ Mẫu Tam phủ, Hát Xoan, Quan họ Bắc Ninh, Nhã nhạc cung đình Huế',
    axis1Population: {
      count: 82085826,
      rank: '1 / 54 (Chiếm đại đa số dân số Việt Nam)',
      growthNote: 'Địa bàn cư trú phân bố khắp toàn quốc và nước ngoài'
    },
    axis2Distribution: {
      mainProvinces: ['Hà Nội', 'TP. Hồ Chí Minh', 'Hải Phòng', 'Đà Nẵng', 'Cần Thơ', '63 tỉnh thành'],
      terrainType: 'Đồng bằng, duyên hải, các vùng ven sông và trung tâm đô thị lớn',
      mapCoordinates: { x: 48, y: 32 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Á (Nhóm Việt - Mường)',
      socialOrganization: 'Mô hình Làng xã nông nghiệp truyền thống gắn kết chặt chẽ theo dòng họ và xóm giềng',
      distinguishingFeatures: [
        'Truyền thống trồng lúa nước lâu đời kết hợp làm nghề thủ công',
        'Tín ngưỡng thờ cúng tổ tiên, Giỗ Tổ Hùng Vương, thờ Thành hoàng làng',
        'Sử dụng tiếng Việt - ngôn ngữ chính thức quốc gia'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Nông nghiệp lúa nước quy mô lớn, thủy sản, dệt lụa, gốm sứ, thương mại và công nghiệp',
      handicrafts: ['Gốm Bát Tràng / Chu Đậu', 'Dệt lụa Vạn Phúc', 'Mây tre đan Phú Vinh', 'Đúc đồng'],
      attireDescription: 'Áo dài truyền thống biểu tượng quốc phục, Áo tứ thân (Bắc Bộ), Áo bà ba kèm khăn rằn (Nam Bộ)',
      attireDetails: [
        'Áo dài nữ tôn dáng nét thanh lịch duyên dáng',
        'Áo bà ba vải thô nhẹ phù hợp sông nước Nam Bộ',
        'Khăn rằn đen trắng đặc trưng vùng đồng bằng sông Cửu Long'
      ],
      attireImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng tổ tiên là nền tảng cốt lõi; Tín ngưỡng thờ Mẫu Tam phủ, Phật giáo, Công giáo',
      festivals: ['Lễ hội Giỗ Tổ Hùng Vương (10/3 âm lịch)', 'Tết Nguyên Đán', 'Lễ hội Đền Hùng', 'Hội Gióng'],
      folkArts: ['Hát Quan họ Bắc Ninh', 'Hát Xoan', 'Ca trù', 'Đàn tài tử Nam Bộ', 'Múa rối nước'],
      customsDetails: 'Tục ăn trầu, nhuộm răng đen (truyền thống cũ), rước kiệu nghi lễ đình làng, gói bánh chưng bánh giầy'
    },
    axis6Architecture: {
      houseType: 'Nhà trệt',
      materials: ['Gạch nung', 'Ngói sông Cầu / ngói mũi hài', 'Gỗ lim / xoan / bồ đề', 'Mây tre'],
      adaptationEcological: 'Thích ứng môi trường đồng bằng nhiệt đới gió mùa: mái ngói dốc thoát nước mưa nhanh, hiên rộng đón gió mát, quay hướng Nam/Đông Nam',
      structuralDetails: 'Bố cục Nhà 3 gian 2 chái truyền thống, phía trước có sân rộng, ao cá, vườn cây (mô hình Vườn - Cống - Ao - Nhân)',
      houseImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1509030450996-93f2e3d84074?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80',
    quote: 'Dẫu đi đâu về đâu, lòng người Kinh luôn hướng về cội nguồn Giỗ Tổ Hùng Vương và mái đình làng Việt.',
    audioPronunciationText: 'Dân tộc Kinh (Việt)'
  },
  {
    id: 'tay',
    name: 'Tày',
    otherNames: 'Thổ',
    nativeScript: 'Chữ Nôm Tày / Chữ Quốc ngữ',
    languageGroup: 'Tày - Thái',
    population2019: 1845492,
    populationPercent: '1,92%',
    primaryRegions: ['Miền núi & Trung du Bắc Bộ', 'Lạng Sơn', 'Cao Bằng', 'Tuyên Quang', 'Bắc Kạn'],
    housingType: 'Nhà sàn',
    unescoHeritage: 'Thực hành Then của người Tày, Nùng, Thái ở Việt Nam (Di sản phi vật thể Đại diện Nhân loại)',
    axis1Population: {
      count: 1845492,
      rank: '2 / 54 (Dân tộc thiểu số đông nhất Việt Nam)',
      growthNote: 'Dân số phát triển ổn định tại các thung lũng miền núi phía Bắc'
    },
    axis2Distribution: {
      mainProvinces: ['Lạng Sơn', 'Cao Bằng', 'Tuyên Quang', 'Bắc Kạn', 'Lào Cai', 'Hà Giang'],
      terrainType: 'Các thung lũng ven sông suối, chân núi đá vôi miền núi Đông Bắc',
      mapCoordinates: { x: 58, y: 16 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Thái - Kadai (Nhóm Tày - Thái)',
      socialOrganization: 'Bản người Tày (Bản Tày) cư trú tập trung từ vài chục đến hàng trăm ngôi nhà sàn',
      distinguishingFeatures: [
        'Cư trú lâu đời ở thung lũng sông suối',
        'Nghệ thuật hát Then kết hợp cây Đàn Tính đặc sắc',
        'Kỹ thuật dệt thổ cẩm hoa văn hình học cổ truyền'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa nước thung lũng, làm ruộng bậc thang, chăn nuôi gia súc, dệt thổ cẩm',
      handicrafts: ['Dệt thổ cẩm chàm', 'Đan lát mây tre', 'Làm đàn Tính cổ truyền'],
      attireDescription: 'Trang phục màu chàm may bằng vải may đơn sơ, phụ nữ Tày đeo vòng cổ bạc xịn thanh lịch',
      attireDetails: [
        'Áo chàm dài ngang bắp chân không thêu hoa văn sặc sỡ',
        'Trang sức kiềng bạc sáng lấp lánh nổi bật trên nền áo chàm',
        'Khăn đội đầu màu chàm gấp chéo mềm mại'
      ],
      attireImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng tổ tiên, cúng Thần Nông, tín ngưỡng vạn vật hữu linh',
      festivals: ['Lễ hội Lồng Tồng (Lễ xuống đồng)', 'Lễ mừng lúa mới', 'Hội ném còn'],
      folkArts: ['Hát Then gảy đàn Tính', 'Hát Lượn', 'Hát Phong slư'],
      customsDetails: 'Nghi lễ cúng vía, nhảy lửa Then giải hạn, trò chơi ném còn truyền thống vào dịp xuân mới'
    },
    axis6Architecture: {
      houseType: 'Nhà sàn',
      materials: ['Gỗ nghiến / lim', 'Tre nứa', 'Ngói âm dương / lá cọ'],
      adaptationEcological: 'Nhà sàn gỗ dựng tựa lưng vào núi hướng ra cánh đồng thung lũng; gầm sàn cao phòng chống thú dữ, muỗi rừng và lũ quét',
      structuralDetails: 'Cấu trúc nhà sàn 3 hoặc 5 gian, cầu thang gỗ đẽo bậc lẻ (5, 7, 9 bậc), lợp ngói âm dương trầm mặc',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng đàn Tính dây đồng cùng điệu hát Then là nhịp cầu nối tâm hồn người Tày với đất trời bao la.',
    audioPronunciationText: 'Dân tộc Tày'
  },
  {
    id: 'thai',
    name: 'Thái',
    otherNames: 'Táy, Thái Đen, Thái Trắng',
    nativeScript: 'Chữ Thái cổ (Lai Tay)',
    languageGroup: 'Tày - Thái',
    population2019: 1820938,
    populationPercent: '1,89%',
    primaryRegions: ['Tây Bắc Bộ', 'Sơn La', 'Điện Biên', 'Lại Châu', 'Yên Bái', 'Nghệ An'],
    housingType: 'Nhà sàn',
    unescoHeritage: 'Nghệ thuật Xòe Thái (UNESCO Di sản Văn hóa Phi vật thể đại diện nhân loại)',
    axis1Population: {
      count: 1820938,
      rank: '3 / 54',
      growthNote: 'Một trong những dân tộc đông dân và có ảnh hưởng văn hóa sâu rộng ở Tây Bắc'
    },
    axis2Distribution: {
      mainProvinces: ['Sơn La', 'Điện Biên', 'Lái Châu', 'Hòa Bình', 'Yên Bái', 'Nghệ An'],
      terrainType: 'Các cánh đồng thung lũng lớn ở Tây Bắc (Mường Thanh, Mường Lò, Mường Than, Mường Tấc)',
      mapCoordinates: { x: 32, y: 22 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Thái - Kadai (Nhóm Tày - Thái)',
      socialOrganization: 'Chế độ Mường (Mường Thái) do các Phìa Tạo quản lý, phân chia các Bản Thái hòa hợp',
      distinguishingFeatures: [
        'Văn hóa Xòe Thái sôi nổi đoàn kết',
        'Chiếc Khăn Piêu thêu hoa văn tinh xảo của phụ nữ Thái',
        'Hệ thống chữ viết Thái cổ được lưu giữ qua sách lá, sách giấy dó'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa nước hệ thống mương phai lái lịn nổi tiếng, làm mẩy dệt thổ cẩm, săn bắt chăn nuôi',
      handicrafts: ['Thêu Khăn Piêu', 'Dệt thổ cẩm', 'Đan lát mây tre'],
      attireDescription: 'Phụ nữ Thái mặc Áo Cóm bó sát có hàng cúc bạc hình con bướm/vẻ, váy đen dài, đội Khăn Piêu',
      attireDetails: [
        'Khăn Piêu thêu hoa văn ngọn rau dớn, hoa ban và cút piêu',
        'Hàng cúc bạc hình con bướm (Xao Cóm) kết nối 2 vạt áo cóm',
        'Thắt lưng lụa màu xanh ngọc / hồng cánh sen thắt eo mềm mại'
      ],
      attireImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng Tổ tiên, cúng Bản cúng Mường (Lễ Xên Mường), tín ngưỡng Then',
      festivals: ['Lễ hội Xên Mường', 'Lễ hội Hoa Ban', 'Hội Xòe mùa xuân', 'Lễ Cầu Mưa'],
      folkArts: ['Nghệ thuật múa Xòe Thái (6 điệu Xòe cổ)', 'Tập quán Hạn Khuống', 'Khắp Thái (Dân ca Thái)'],
      customsDetails: 'Tục búi tóc ngược (Tằng cẩu) ở phụ nữ Thái Đen sau khi lấy chồng; vung xòe nắm tay quanh đống lửa'
    },
    axis6Architecture: {
      houseType: 'Nhà sàn',
      materials: ['Gỗ lát / phay', 'Nứa / tre', 'Lá cọ / cỏ tranh'],
      adaptationEcological: 'Mái nhà sàn hình khum mai rùa đặc trưng, hai đầu nóc có hoa văn Khau Cút bằng gỗ chạm khắc; thoáng mát tránh ẩm thấp',
      structuralDetails: 'Nhà sàn Thái Trắng mái phẳng có hiên rộng, Nhà sàn Thái Đen mái khum mai rùa có hai đầu Khau Cút độc đáo',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=600&q=80',
    quote: 'Không xòe không vui, không xòe cây lúa không tốt, không xòe trai gái không thành đôi.',
    audioPronunciationText: 'Dân tộc Thái'
  },
  {
    id: 'muong',
    name: 'Mường',
    otherNames: 'Mol, Mual',
    nativeScript: 'Chữ Quốc ngữ / Chữ Mường',
    languageGroup: 'Việt - Mường',
    population2019: 1452095,
    populationPercent: '1,51%',
    primaryRegions: ['Hòa Bình', 'Thanh Hóa', 'Phú Thọ', 'Sơn La'],
    housingType: 'Nhà sàn',
    unescoHeritage: 'Di sản Mo Mường (Đang lập hồ sơ trình UNESCO công nhận di sản phi vật thể)',
    axis1Population: {
      count: 1452095,
      rank: '4 / 54',
      growthNote: 'Người Mường có nguồn gốc chung gần gũi nhất với người Kinh trong nhóm Việt - Mường'
    },
    axis2Distribution: {
      mainProvinces: ['Hòa Bình (Mường Bi, Mường Vang, Mường Thàng, Mường Động)', 'Thanh Hóa', 'Phú Thọ'],
      terrainType: 'Các thung lũng đá vôi gợn sóng giữa núi đồi miền Trung du Bắc Bộ',
      mapCoordinates: { x: 42, y: 28 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Á (Nhóm Việt - Mường)',
      socialOrganization: 'Chế độ Lang đạo (các họ Dinh, Quách, Bạch, Hà) quản lý các Mường',
      distinguishingFeatures: [
        'Sử thi Đẻ đất đẻ nước đồ sộ',
        'Nghi lễ Mo Mường triết lý nhân sinh sâu sắc',
        'Hoa văn Cạp váy Mường tinh xảo đỉnh cao nghệ thuật dệt'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa nước thung lũng, làm nương rẫy, săn bắt, hái lượm sản vật rừng',
      handicrafts: ['Dệt cạp váy thổ cẩm', 'Đan lát mây tre', 'Làm rượu cần'],
      attireDescription: 'Phụ nữ Mường mặc áo pắn ngắn màu trắng, váy đen dài có cạp váy dệt hoa văn hình rồng, mặt trời',
      attireDetails: [
        'Cạp váy Mường thêu họa tiết rồng, phượng, rùa, rùa biểu tượng vũ trụ',
        'Bộ xà tích bạc giắt ngang hông rộn rã tiếng động nhẹ',
        'Khăn đội đầu màu trắng thể hiện sự trong trắng tinh khôi'
      ],
      attireImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng tổ tiên, Mo Mường nghi lễ thực hành tiễn đưa dặn dò linh hồn',
      festivals: ['Lễ hội Khai hạ Mường Bi', 'Lễ mừng lúa mới', 'Hội sắc bùa', 'Lễ cúng vía'],
      folkArts: ['Trình diễn Đội Cồng chiêng Mường', 'Hát Đang', 'Hát Ví', 'Sử thi Đẻ đất đẻ nước'],
      customsDetails: 'Phong tục đánh cồng chiêng trong lễ hội mừng xuân, cúng lúa mới bốc vía'
    },
    axis6Architecture: {
      houseType: 'Nhà sàn',
      materials: ['Gỗ lim / sến / cắm', 'Gỗ bương / nứa', 'Lá cọ / cỏ tranh'],
      adaptationEcological: 'Nhà sàn Mường (Nhà rùa) mô phỏng hình dáng con rùa thần truyền thuyết; gầm sàn cao thông thoáng, cách nhiệt',
      structuralDetails: 'Bộ khung gỗ kết nối mộc mạc, bếp lửa đốt ở trung tâm lòng nhà sàn biểu tượng ấm cúng',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng mo vang vọng giữa núi rừng Mường Bi giữ lấy linh hồn và đạo lý làm người muôn đời.',
    audioPronunciationText: 'Dân tộc Mường'
  },
  {
    id: 'khmer',
    name: 'Khmer',
    otherNames: 'Khmer Krom, Người Việt gốc Miên',
    nativeScript: 'Chữ Khmer cổ / Chữ Khmer hiện đại',
    languageGroup: 'Môn - Khmer',
    population2019: 1319652,
    populationPercent: '1,37%',
    primaryRegions: ['Tây Nam Bộ', 'Sóc Trăng', 'Trà Vinh', 'Kiên Giang', 'An Giang'],
    housingType: 'Nhà trệt',
    unescoHeritage: 'Nghệ thuật Dù kê, Rô băm, Lễ hội Ok Om Bok (Di sản văn hóa phi vật thể quốc gia)',
    axis1Population: {
      count: 1319652,
      rank: '5 / 54',
      growthNote: 'Cộng đồng cư dân lâu đời ở vùng đồng bằng sông Cửu Long'
    },
    axis2Distribution: {
      mainProvinces: ['Sóc Trăng', 'Trà Vinh', 'Kiên Giang', 'An Giang', 'Bạc Liêu', 'Cà Mau'],
      terrainType: 'Đồng bằng phù sa sông nước, các giồng cát cao ven sông rạch Nam Bộ',
      mapCoordinates: { x: 38, y: 82 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Á (Nhóm Môn - Khmer)',
      socialOrganization: 'Sinh hoạt cộng đồng gắn bó chặt chẽ quanh Ngôi Chùa Khmer (Phum Sóc)',
      distinguishingFeatures: [
        'Phật giáo Nam tông (Theravada) là cốt lõi tinh thần',
        'Kiến trúc Ngôi Chùa Khmer rực rỡ mái nhọn hoa văn thần thần Nagar',
        'Đua ghe Ngo kịch tính sôi động ngày hội Ok Om Bok'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa nước vùng sông nước, đánh bắt thủy sản, dệt lụa xà rông, nghề làm đường thốt nốt',
      handicrafts: ['Dệt lụa Sampot / Xà rông', 'Nấu đường thốt nốt', 'Chạm khắc gỗ Phật giáo'],
      attireDescription: 'Trang phục Sampot lụa tơ tơ rực rỡ, áo may lụa cổ tròn kết hợp khăn krama kẻ ô',
      attireDetails: [
        'Sampot lụa quấn kiểu váy truyền thống sang trọng',
        'Khăn Krama ô vuông đỏ trắng đội đầu hoặc vắt vai',
        'Mũ mão hoa văn chạm dát vàng trong điệu múa Rô băm'
      ],
      attireImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Phật giáo Nam tông (Theravada) chi phối mọi mặt đời sống tâm linh, tục xuất gia đi tu ngắn hạn',
      festivals: ['Tết Chôl Chnăm Thmây (Tết mừng năm mới)', 'Lễ hội Ok Om Bok (Cúng Trăng)', 'Lễ Sene Dolta (Đôn-ta)'],
      folkArts: ['Sân khấu Dù kê', 'Múa Rô băm', 'Dàn nhạc Ngũ âm (Pinpeat)', 'Múa Lâm thôn'],
      customsDetails: 'Nghi lễ cúng Trăng Ok Om Bok đút cốm dẹp cho trẻ em, Đua ghe Ngo vượt sóng sông Maspero'
    },
    axis6Architecture: {
      houseType: 'Nhà trệt',
      materials: ['Gỗ sao / dầu', 'Gạch nung', 'Ngói vảy cá / lá dừa nước'],
      adaptationEcological: 'Nhà trệt dựng trên các giồng cát cao thoát nước mùa lũ; không gian thoáng mở hướng ra phum sóc và ngôi chùa',
      structuralDetails: 'Nhà trệt mái lợp ngói vảy cá, tường vôi; cụm nhà nằm yên bình bên dưới tán thốt nốt kề bên Ngôi chùa vàng rực rỡ',
      houseImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    quote: 'Ngôi chùa là trái tim phum sóc, nơi nuôi dưỡng tâm hồn và tri thức người Khmer muôn đời.',
    audioPronunciationText: 'Dân tộc Khmer'
  },
  {
    id: 'nung',
    name: 'Nùng',
    otherNames: 'Nồng',
    nativeScript: 'Chữ Nôm Nùng / Chữ Quốc ngữ',
    languageGroup: 'Tày - Thái',
    population2019: 1083298,
    populationPercent: '1,13%',
    primaryRegions: ['Lạng Sơn', 'Cao Bằng', 'Bắc Giang', 'Thái Nguyên'],
    housingType: 'Nhà sàn',
    unescoHeritage: 'Hát Sli (Di sản văn hóa phi vật thể quốc gia), Thực hành Then',
    axis1Population: {
      count: 1083298,
      rank: '6 / 54',
      growthNote: 'Cùng với người Tày tạo nên diện mạo văn hóa chàm đặc sắc núi rừng Đông Bắc'
    },
    axis2Distribution: {
      mainProvinces: ['Lạng Sơn', 'Cao Bằng', 'Bắc Giang', 'Thái Nguyên', 'Bắc Kạn'],
      terrainType: 'Đồi núi sát biên giới, các thung lũng đá vôi Đông Bắc',
      mapCoordinates: { x: 62, y: 14 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Thái - Kadai (Nhóm Tày - Thái)',
      socialOrganization: 'Bản Nùng sinh sống hiền hòa, giữ gìn nghề rèn kim khí nổi tiếng',
      distinguishingFeatures: [
        'Dân ca giao duyên Hát Sli thanh tao',
        'Làng nghề Rèn Phúc Sen nổi tiếng toàn quốc',
        'Kiến trúc Nhà trình tường đất kiên cố chống rét ẩm'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa thung lũng, làm nương rẫy, trồng hoa hồi, làm nghề rèn đúc thủ công',
      handicrafts: ['Rèn đúc dao kéo Phúc Sen', 'Dệt nhuộm chàm', 'Làm giấy dó'],
      attireDescription: 'Trang phục vải nhuộm chàm đậm ngắn tay hoặc dài tay, cổ áo đơm hàng viền may sặc sỡ nhẹ nhàng',
      attireDetails: [
        'Áo chàm đơm khuy vải chéo thanh lịch',
        'Trang sức kiềng bạc tròn đeo cổ',
        'Vải nhuộm chàm củ nâu giặt kỹ mịn bóng'
      ],
      attireImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng tổ tiên, cúng thần bản, tín ngưỡng Then, Mo',
      festivals: ['Lễ hội Lồng Tồng', 'Lễ hội Tảo mộ (3/3 âm lịch)', 'Lễ cúng Thần Nông'],
      folkArts: ['Hát Sli đối đáp giao duyên', 'Hát Then', 'Hát Nàng Oọc'],
      customsDetails: 'Đôi nam nữ Nùng hát Sli trao duyên bên triền núi xuân, trao khăn chàm làm kỷ niệm'
    },
    axis6Architecture: {
      houseType: 'Nhà sàn',
      materials: ['Gỗ lim / sến', 'Đất sét đầm nén (Nhà trình tường)', 'Ngói âm dương'],
      adaptationEcological: 'Kết hợp Nhà sàn gỗ truyền thống và Nhà trình tường đất vách dày 40-50cm giữ ấm mùa đông băng giá',
      structuralDetails: 'Nhà trình tường đất đầm tay chắc chắn lợp ngói âm dương có gác lửng chứa lương thực',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng hát Sli ngân vang qua vách núi trao gửi tình yêu hiền hòa chân phương của người Nùng.',
    audioPronunciationText: 'Dân tộc Nùng'
  },
  {
    id: 'mong',
    name: 'Mông',
    otherNames: 'Hmong, Mèo',
    nativeScript: 'Chữ Mông Latinh / Chữ Quốc ngữ',
    languageGroup: 'Hmông - Dao',
    population2019: 1393547,
    populationPercent: '1,45%',
    primaryRegions: ['Hà Giang', 'Lào Cai', 'Sơn La', 'Điện Biên', 'Lại Châu'],
    housingType: 'Nhà trệt',
    unescoHeritage: 'Nghệ thuật Khèn Mông, Kỹ thuật thêu hoa văn thổ cẩm Mông (Di sản văn hóa phi vật thể quốc gia)',
    axis1Population: {
      count: 1393547,
      rank: '7 / 54',
      growthNote: 'Cư dân sinh sống ở độ cao cao nhất trên các dãy núi đá hẻm vực phía Bắc'
    },
    axis2Distribution: {
      mainProvinces: ['Hà Giang (Cao nguyên đá Đồng Văn)', 'Lào Cai (Sapa, Bắc Hà)', 'Sơn La (Mộc Châu)', 'Điện Biên'],
      terrainType: 'Vùng núi cao từ 800 - 1500m trở lên, các đỉnh núi đá vôi hùng vĩ',
      mapCoordinates: { x: 38, y: 12 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Hmong - Mien',
      socialOrganization: 'Dòng họ Mông gắn kết keo sơn (Họ Giàng, Thào, Vàng, Mùa, Lầu)',
      distinguishingFeatures: [
        'Tiếng Khèn Mông vũ điệu uyển chuyển lãng mạn',
        'Cánh đồng Ruộng bậc thang kiệt tác canh tác',
        'Kỹ thuật vẽ sáp ong dệt nhuộm chàm hoa văn rực rỡ'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng ngô trên hốc đá (Thổ canh hốc đá), trồng lúa ruộng bậc thang, dệt lanh nhuộm chàm',
      handicrafts: ['Dệt vải lanh', 'Vẽ hoa văn sáp ong', 'Rèn đúc cơ khí thủ công', 'Chế tác Khèn Mông'],
      attireDescription: 'Trang phục thổ cẩm rực rỡ màu sắc (Mông Hoa, Mông Đỏ, Mông Đen, Mông Trắng) kèm xà cạp leg-warmer',
      attireDetails: [
        'Váy xòe xếp nếp thêu hoa văn hình ốc, mặt trời',
        'Thắt lưng lụa đơm đồng tiền bạc lóng lánh',
        'Chiếc vòng cổ bạc tròn xịn xò chạm trổ'
      ],
      attireImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng Ma nhà (Xừ cang), Ma cửa, tín ngưỡng vạn vật hữu linh',
      festivals: ['Lễ hội Gầu Tào (Cầu phúc cầu may)', 'Chợ tình Sapa / Khâu Vai', 'Tết Mông (tháng 12 âm lịch)'],
      folkArts: ['Tiếng Khèn Mông', 'Thổi lá kết duyên', 'Hát Ống', 'Múa Khèn quay tròn'],
      customsDetails: 'Chàng trai Mông thổi khèn quay nhảy điệu nghệ tỏ tình với cô gái trong hội Gầu Tào'
    },
    axis6Architecture: {
      houseType: 'Nhà trệt',
      materials: ['Đất sét trình tường', 'Gỗ pơ mu / sa mộc', 'Cỏ tranh / ngói ngói vảy cá'],
      adaptationEcological: 'Nhà trình tường đất vách dày 50-60cm chịu rét âm độ mùa đông núi cao; cửa chính gỗ chốt chắc chắn',
      structuralDetails: 'Nhà trệt 3 gian không gian kín ấm áp, cột kê trên đá tảng hình chân cột tròn',
      houseImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng khèn Mông cất lên gọi bạn tình, vượt qua đỉnh núi sương giăng kết nối muôn trái tim.',
    audioPronunciationText: 'Dân tộc Mông'
  },
  {
    id: 'dao',
    name: 'Dao',
    otherNames: 'Kìm Miền, Mán',
    nativeScript: 'Chữ Nôm Dao',
    languageGroup: 'Hmông - Dao',
    population2019: 891151,
    populationPercent: '0,93%',
    primaryRegions: ['Hà Giang', 'Tuyên Quang', 'Lào Cai', 'Yên Bái', 'Quảng Ninh'],
    housingType: 'Nhà trệt',
    unescoHeritage: 'Lễ Cấp Sắc của người Dao (Di sản văn hóa phi vật thể quốc gia)',
    axis1Population: {
      count: 891151,
      rank: '8 / 54',
      growthNote: 'Chia thành nhiều nhóm cư trú đa dạng: Dao Đỏ, Dao Tiền, Dao Quần Chẹt, Dao Áo Dài'
    },
    axis2Distribution: {
      mainProvinces: ['Hà Giang', 'Tuyên Quang', 'Lào Cai', 'Yên Bái', 'Quảng Ninh', 'Bắc Kạn'],
      terrainType: 'Sườn núi nửa đồi nửa núi, các thung lũng khe suối miền núi phía Bắc',
      mapCoordinates: { x: 44, y: 14 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Hmong - Mien',
      socialOrganization: 'Làng Dao sinh sống theo dòng họ, bảo tồn tri thức Y học dân gian thảo dược',
      distinguishingFeatures: [
        'Nghi lễ Cấp sắc đánh dấu sự trưởng thành nam giới',
        'Bài thuốc tắm lá thuốc cổ truyền nổi tiếng',
        'Tranh thờ Đạo giáo cổ chạm vẽ độc đáo'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa rẫy, ruộng bậc thang, thu hái thuốc thảo dược rừng, trồng quế, hồi',
      handicrafts: ['Thêu hoa văn thổ cẩm', 'Chế tác trang sức bạc', 'Bào chế bài thuốc tắm lá Dao'],
      attireDescription: 'Trang phục rực rỡ đặc trưng từng nhóm: Dao Đỏ với chiếc mũ đỏ bông lớn, Dao Tiền dệt cườm bạc lóng lánh',
      attireDetails: [
        'Mũ đỏ tua rua to của phụ nữ Dao Đỏ nổi bật sương mù',
        'Xà cạp quấn chân cẩn thận tránh vắt rừng',
        'Hoa văn đơm cúc bạc hình tròn đồng tiền tượng trưng sự sung túc'
      ],
      attireImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng Bàn Vương (Tổ tiên tối cao của người Dao), Đạo giáo Tam Thanh',
      festivals: ['Lễ Cấp Sắc (Lễ Tẩu Sai)', 'Tết Nhảy (Tết Bàn Vương)', 'Lễ Cầu Mùa'],
      folkArts: ['Sách cổ Nôm Dao', 'Múa Chuông', 'Múa Bát', 'Tranh thờ Đạo giáo cổ'],
      customsDetails: 'Lễ Cấp sắc cấp từ 3 đèn đến 7 đèn chứng nhận phẩm giá trưởng thành cho người nam'
    },
    axis6Architecture: {
      houseType: 'Nhà trệt',
      materials: ['Gỗ gỗ nghiến / bương', 'Đất trình tường', 'Ngói âm dương / cỏ tranh'],
      adaptationEcological: 'Đa dạng từ Nhà trệt đất, Nhà sàn đến Nhà nửa sàn nửa đất thích ứng địa hình sườn dốc',
      structuralDetails: 'Nhà trệt đất vách kín chống gió rét mountain chill, trung tâm đặt bàn thờ Bàn Vương linh thiêng',
      houseImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng chuông múa Cấp sắc vang rộn nhắc nhở con cháu giữ trọn tâm lành đạo hiếu Bàn Vương.',
    audioPronunciationText: 'Dân tộc Dao'
  },
  {
    id: 'hoa',
    name: 'Hoa',
    otherNames: 'Khách, Hán',
    nativeScript: 'Chữ Hán Phồn thể / Giản thể',
    languageGroup: 'Hán',
    population2019: 749466,
    populationPercent: '0,78%',
    primaryRegions: ['TP. Hồ Chí Minh (Chợ Lớn)', 'Đồng Nai', 'Sóc Trăng', 'Kiên Giang', 'Hải Phòng'],
    housingType: 'Nhà trệt',
    unescoHeritage: 'Múa Lân-Sư-Rồng, Tết Nguyên tiêu Quận 5 Chợ Lớn (Di sản văn hóa phi vật thể quốc gia)',
    axis1Population: {
      count: 749466,
      rank: '9 / 54',
      growthNote: 'Tập trung chủ yếu tại các trung tâm đô thị sầm uất và thị xã thương mại'
    },
    axis2Distribution: {
      mainProvinces: ['TP. Hồ Chí Minh (Quận 5, 6, 11)', 'Đồng Nai', 'Sóc Trăng', 'Kiên Giang'],
      terrainType: 'Đô thị, thị trấn thương cảng, đường phố kinh doanh sầm uất',
      mapCoordinates: { x: 42, y: 78 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Hán - Tạng (Nhóm Hán)',
      socialOrganization: 'Hội quánBang hội (Quảng Đông, Triều Châu, Phúc Kiến, Hải Nam, Sùng Chính)',
      distinguishingFeatures: [
        'Truyền thống thương mại ẩm thực phong phú',
        'Kiến trúc Hội quán lâu đời nguy nga',
        'Nghệ thuật Múa Lân Sư Rồng đỉnh cao kỹ thuật'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Thương mại dịch vụ, sản xuất thủ công nghiệp, gốm sứ, đông y ẩm thực',
      handicrafts: ['Gốm sứ Cây Mai / Đồng Nai', 'Đông y thảo dược', 'Chế biến thực phẩm (bánh trung thu, mì gia)'],
      attireDescription: 'Trang phục Sườn xám (nữ), Áo xẻ tà đơm cúc vải cổ đứng (nam) mặc dịp tết lễ hội',
      attireDetails: [
        'Sườn xám lụa may thêu gấm hoa văn sang trọng',
        'Tông màu đỏ vàng tượng trưng may mắn phát tài',
        'Hàng cúc vải tết thủ công tinh xảo'
      ],
      attireImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ Quan Công, Thần Tài, Bà Thiên Hậu (Tín ngưỡng thờ Bà Mẫu Sinh)',
      festivals: ['Tết Nguyên tiêu (Rằm tháng Giêng)', 'Vía Bà Thiên Hậu', 'Tết Trung thu'],
      folkArts: ['Múa Lân - Sư - Rồng', 'Hát Triều kịch', 'Hát Quảng kịch', 'Thư pháp Hán'],
      customsDetails: 'Đoàn Lân Sư Rồng nhảy trên mai hoa thung rộn rã tiếng trống hội dịp Tết Nguyên tiêu Chợ Lớn'
    },
    axis6Architecture: {
      houseType: 'Nhà trệt',
      materials: ['Gạch gốm nung', 'Ngói âm dương gốm tráng men xanh', 'Gỗ chạm khắc'],
      adaptationEcological: 'Mô hình Nhà - Cửa hiệu (Shop-house) mặt tiền kinh doanh, phía sau và gác xép sinh hoạt tiện lợi',
      structuralDetails: 'Bố cục chữ Môn hay chữ Khẩu, mái lợp ngói gốm Cây Mai chạm trổ lưỡng long chầu nguyệt',
      houseImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng trống lân rộn rã Tết Nguyên tiêu thắp sáng niềm tin thịnh vượng hòa đồng.',
    audioPronunciationText: 'Dân tộc Hoa'
  },
  {
    id: 'gia-rai',
    name: 'Gia Rai',
    otherNames: 'Jarai',
    nativeScript: 'Chữ Gia Rai Latinh',
    languageGroup: 'Nam Đảo',
    population2019: 513930,
    populationPercent: '0,53%',
    primaryRegions: ['Tây Nguyên', 'Gia Lai', 'Kon Tum', 'Đắk Lắk'],
    housingType: 'Nhà sàn',
    unescoHeritage: 'Không gian văn hóa Cồng chiêng Tây Nguyên (UNESCO Di sản kiệt tác truyền miệng & phi vật thể nhân loại)',
    axis1Population: {
      count: 513930,
      rank: '10 / 54',
      growthNote: 'Dân tộc đông dân nhất vùng đất Tây Nguyên hùng vĩ'
    },
    axis2Distribution: {
      mainProvinces: ['Gia Lai (Pleiku, An Khê)', 'Kon Tum', 'Đắk Lắk'],
      terrainType: 'Cao nguyên đất đỏ bazan bao la ngút ngàn',
      mapCoordinates: { x: 52, y: 56 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Đảo (Malayo-Polynesian)',
      socialOrganization: 'Xã hội Mẫu hệ truyền thống, con cái mang họ mẹ, con gái bắt chồng',
      distinguishingFeatures: [
        'Nghệ thuật Tạc tượng gỗ Nhà mồ độc nhất vô nhị',
        'Dàn Cồng chiêng vang vọng núi rừng Tây Nguyên',
        'Lễ bỏ mả Pơ Thi thần bí thấm đượm triết lý nhân sinh'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa nương, cà phê, hồ tiêu, cao su, chăn nuôi gia súc, tạc tượng gỗ',
      handicrafts: ['Dệt thổ cẩm tông đen đỏ', 'Tạc tượng gỗ', 'Đan lát gùi tre'],
      attireDescription: 'Nữ mặc váy tấm quấn dài tông đen sọc ngang, nam đóng khổ thổ cẩm vạt dài hoa văn hình thoi',
      attireDetails: [
        'Váy thổ cẩm quấn dệt sọc đỏ xanh trắng nổi trên nền vải chàm đen',
        'Vòng đồng chuỗi cườm đeo cổ tay',
        'Khổ nam dệt tua rua buông dài khỏe khoắn'
      ],
      attireImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng Yang (Thần linh: Yang Bri - Thần rừng, Yang Pơtao - Thần Vua Bày Nước)',
      festivals: ['Lễ bỏ mả (Pơ Thi)', 'Lễ cúng bến nước', 'Lễ mừng lúa mới (Mơnam Yăng)'],
      folkArts: ['Không gian văn hóa Cồng chiêng', 'Múa Xoang', 'Nghệ thuật tạc tượng nhà mồ'],
      customsDetails: 'Nghi lễ Pơ Thi giải phóng linh hồn người chết về với thế giới tổ tiên cùng nhịp cồng chiêng quay múa xoang'
    },
    axis6Architecture: {
      houseType: 'Nhà sàn',
      materials: ['Gỗ cà chít / sến', 'Tre nứa / mây', 'Mái cỏ tranh'],
      adaptationEcological: 'Nhà sàn gia đình hướng Bắc - Nam tránh gió chướng Tây Nguyên; quần thể Khu nhà mồ đặt ngoài mép rừng buôn',
      structuralDetails: 'Nhà sàn gỗ nối dài theo thế hệ mẫu hệ, gầm sàn thoáng chứa nông cụ gùi nương',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng cồng chiêng Gia Rai vang vọng cao nguyên là lời đối thoại giữa con người và Thần Yang cao cả.',
    audioPronunciationText: 'Dân tộc Gia Rai'
  },
  {
    id: 'e-de',
    name: 'Ê Đê',
    otherNames: 'Rade, Kpă',
    nativeScript: 'Chữ Ê Đê Latinh',
    languageGroup: 'Nam Đảo',
    population2019: 398671,
    populationPercent: '0,41%',
    primaryRegions: ['Tây Nguyên', 'Đắk Lắk', 'Phú Yên', 'Gia Lai'],
    housingType: 'Nhà dài',
    unescoHeritage: 'Không gian văn hóa Cồng chiêng Tây Nguyên, Sử thi Khan Ê Đê (Di sản văn hóa phi vật thể quốc gia)',
    axis1Population: {
      count: 398671,
      rank: '11 / 54',
      growthNote: 'Chủ nhân kiến trúc Nhà Dài độc đáo nhất vùng cao nguyên Đắk Lắk'
    },
    axis2Distribution: {
      mainProvinces: ['Đắk Lắk (Buôn Ma Thuột, Cư M’gar, Krông Băng)', 'Phú Yên', 'Gia Lai'],
      terrainType: 'Cao nguyên Đắk Lắk bạt ngàn đất đỏ bazan và sông Sêrêpôk',
      mapCoordinates: { x: 50, y: 64 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Đảo (Malayo-Polynesian)',
      socialOrganization: 'Chế độ Mẫu hệ nghiêm ngặt; quyền chủ hộ thuộc về người phụ nữ (Khoa Sang)',
      distinguishingFeatures: [
        'Cầu thang gỗ đẽo hình đôi ngực phụ nữ & vầng trăng khuyết',
        'Ngôi Nhà Dài hàng chục mét kéo dài theo đời người con gái lấy chồng',
        'Sử thi Đăm Săn (Khan Ê Đê) ngân vang đêm lửa buôn làng'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng cà phê, hồ tiêu, lúa nương, chăn nuôi voi / gia súc, dệt thổ cẩm',
      handicrafts: ['Dệt thổ cẩm hoa văn hình rùa hình sóng', 'Đan lát gùi Kpă', 'Tạc gỗ cầu thang'],
      attireDescription: 'Mặc áo quấn váy thổ cẩm màu chàm thêu đường viền đỏ nổi bật, đeo chuỗi cườm hạt',
      attireDetails: [
        'Áo nữ Ê Đê cổ xẻ hình thuyền sang trọng',
        'Váy quấn viền đỏ dệt tỉ mỉ hoa văn truyền thống',
        'Trang sức kiềng đồng vòng bạc kiêu hãnh'
      ],
      attireImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng Thần linh Yang (Yang H’rê - Thần Lúa, Yang Êđê)',
      festivals: ['Lễ cúng bến nước (Cung Buôn)', 'Lễ mừng lúa mới', 'Lễ cúng voi', 'Lễ thổi tai trẻ sơ sinh'],
      folkArts: ['Đàn Đing Năm', 'Đàn Đing Tút', 'Cồng chiêng Ê Đê (Bộ Chiêng Knah)', 'Sử thi Khan Đăm Săn'],
      customsDetails: 'Khi người con gái Ê Đê cưới chồng, ngôi Nhà Dài được nối thêm một gian dài ra (Nhà Dài Ê Đê)'
    },
    axis6Architecture: {
      houseType: 'Nhà dài',
      materials: ['Gỗ gõ / cà chít', 'Tre nứa đập dạt', 'Mái cỏ tranh dầy 20cm'],
      adaptationEcological: 'Kiến trúc Nhà Dài sàn gỗ dài từ 30m đến cả 100m; đầu nhà hướng Bắc quay về bến nước; sàn gỗ thoáng khí mát rượi mùa nắng',
      structuralDetails: 'Phía trước có Sàn sân Gah rộng rãi, Cầu thang đực & Cầu thang cái đẽo hình Đôi ngực phụ nữ dũng mãnh biểu tượng quyền Mẫu hệ',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
    quote: 'Mỗi lần có người con gái lấy chồng, ngôi nhà dài Ê Đê lại nối thêm một gian về phía mặt trời lặn.',
    audioPronunciationText: 'Dân tộc Ê Đê'
  },
  {
    id: 'ba-na',
    name: 'Ba Na',
    otherNames: 'Bahnar',
    nativeScript: 'Chữ Ba Na Latinh',
    languageGroup: 'Môn - Khmer',
    population2019: 286910,
    populationPercent: '0,30%',
    primaryRegions: ['Tây Nguyên', 'Gia Lai', 'Kon Tum', 'Bình Định'],
    housingType: 'Nhà cộng đồng (Nhà Rông / Gươl)',
    unescoHeritage: 'Không gian văn hóa Cồng chiêng Tây Nguyên (UNESCO Di sản nhân loại)',
    axis1Population: {
      count: 286910,
      rank: '12 / 54',
      growthNote: 'Chủ nhân của những ngôi Nhà Rông Ba Na cao vút uy nghi bậc nhất Tây Nguyên'
    },
    axis2Distribution: {
      mainProvinces: ['Gia Lai', 'Kon Tum', 'Bình Định', 'Phú Yên'],
      terrainType: 'Vùng cao nguyên Kon Tum và thung lũng sông Ba',
      mapCoordinates: { x: 54, y: 50 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Á (Nhóm Môn - Khmer)',
      socialOrganization: 'Làng Ba Na (Pơlei) do Già làng đứng đầu quản lý theo luật tục',
      distinguishingFeatures: [
        'Mái Nhà Rông Ba Na vút cao như lưỡi rìu vươn lên bầu trời',
        'Lễ hội Đâm trâu / Mừng lúa mới sôi động cây Nêu',
        'Bộ cồng chiêng hòa tấu âm thanh trầm hùng'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa nương rẫy, lúa nước, đan lát mây tre thủ công, làm rượu cần',
      handicrafts: ['Dệt thổ cẩm đen đỏ', 'Đan gùi tre hoa văn', 'Chế tác cồng chiêng'],
      attireDescription: 'Trang phục thổ cẩm hoa văn hoa dại dệt tỉ mỉ, tông màu đen-đỏ chủ đạo',
      attireDetails: [
        'Áo chui đầu nam đơm tua rua đỏ khỏe khoắn',
        'Váy quấn nữ thêu hoa văn đối xứng',
        'Gùi tre khoác vai nhịp nhàng ra nương'
      ],
      attireImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ thần Yang (Thần Rừng, Thần Núi, Thần Sông)',
      festivals: ['Lễ Mừng nhà Rông mới', 'Lễ Mừng lúa mới (Et Đông)', 'Lễ cúng bến nước'],
      folkArts: ['Âm nhạc Cồng chiêng Ba Na', 'Điệu múa Xoang', 'Hát Hơmon (Sử thi Ba Na)'],
      customsDetails: 'Sinh hoạt cộng đồng họp làng, xử kiện luật tục, hòa tấu cồng chiêng đều diễn ra tại Nhà Rông'
    },
    axis6Architecture: {
      houseType: 'Nhà cộng đồng (Nhà Rông / Gươl)',
      materials: ['Gỗ trò chỉ / lim', 'Tre bương / nứa', 'Mái cỏ tranh dầy 30cm'],
      adaptationEcological: 'Nhà Rông Ba Na mái cao 15-20m vút thẳng đứng chống chọi gió lốc cao nguyên; chân cột lớn đứng vững chãi',
      structuralDetails: 'Không gian Nhà Rông uốn cong hình lưỡi rìu, phía trong treo đầu sọ muông thú, cồng chiêng thần thiêng',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
    quote: 'Mái nhà Rông vút cao như ngọn đuốc thần, tập hợp sức mạnh đoàn kết của toàn buôn làng Ba Na.',
    audioPronunciationText: 'Dân tộc Ba Na'
  },
  {
    id: 'cham',
    name: 'Chăm',
    otherNames: 'Chàm, Chiêm Thành',
    nativeScript: 'Chữ Chăm cổ (Akhar Thrah)',
    languageGroup: 'Nam Đảo',
    population2019: 178948,
    populationPercent: '0,19%',
    primaryRegions: ['Ninh Thuận', 'Bình Thuận', 'An Giang', 'TP. Hồ Chí Minh'],
    housingType: 'Nhà trệt',
    unescoHeritage: 'Nghệ thuật làm Gốm của người Chăm (UNESCO Di sản văn hóa phi vật thể cần bảo vệ khẩn cấp), Lễ hội Katê',
    axis1Population: {
      count: 178948,
      rank: '13 / 54',
      growthNote: 'Chủ nhân di sản văn hóa vương quốc Champa cổ kính lịch sử'
    },
    axis2Distribution: {
      mainProvinces: ['Ninh Thuận (Phan Rang)', 'Bình Thuận', 'An Giang (Chăm Islam ven sông)', 'Tây Ninh'],
      terrainType: 'Vùng ven biển bán khô hạn Duyên hải Nam Trung Bộ và sông nước Tây Nam Bộ',
      mapCoordinates: { x: 56, y: 70 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Đảo (Malayo-Polynesian)',
      socialOrganization: 'Chế độ Mẫu hệ (Chăm Ninh Thuận) & Cộng đồng Chăm Islam (An Giang)',
      distinguishingFeatures: [
        'Cụm Tháp Chăm gạch nung đỏ bí ẩn kiệt tác kiến trúc',
        'Làng gốm Bàu Trúc nung lộ thiên độc đáo',
        'Lễ hội Katê rực rỡ múa quạt dưới chân tháp cổ'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa nước, làm gốm thủ công Bàu Trúc, dệt thổ cẩm Mỹ Nghiệp, chăn nuôi gia súc',
      handicrafts: ['Gốm Bàu Trúc nung ngoài trời', 'Dệt thổ cẩm Mỹ Nghiệp', 'Làm trang sức bạc'],
      attireDescription: 'Thiếu nữ Chăm mặc Áo dài quấn (Kihan) thắt lưng viền vàng, đội khăn chùm đầu dịu dàng duyên dáng',
      attireDetails: [
        'Áo dài Chăm không xẻ tà trùm qua đầu mềm mại',
        "Khăn Mat'ra đội đầu lụa trắng",
        'Thắt lưng dệt hoa văn hoa văn Chăm dát chỉ kim tuyến'
      ],
      attireImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Bà La Môn giáo (Chăm Balamon) & Hồi giáo (Chăm Bàni, Chăm Islam)',
      festivals: ['Lễ hội Katê (tháng 7 lịch Chăm tại Tháp Po Klong Garai)', 'Lễ Ramawan', 'Lễ Rija Nưgar'],
      folkArts: ['Điệu múa Quạt Chăm', 'Múa Đội nước', 'Kèn Saranai', 'Trống Ginăng', 'Trống Paranưng'],
      customsDetails: 'Điệu múa quạt dịu dàng hòa nhịp trống Ginăng cất lên trong Lễ hội Katê đón trang phục Nữ thần Po Inư Nưgar'
    },
    axis6Architecture: {
      houseType: 'Nhà trệt',
      materials: ['Gạch đất nung', 'Gỗ sao', 'Ngói gốm / lá'],
      adaptationEcological: 'Khuôn viên nhà ở Mẫu hệ gồm nhiều ngôi nhà trệt nhỏ (Thang Yoeb, Thang Tơng...) quay mặt vào sân trong che chắn gió cát nắng nóng khô hạn',
      structuralDetails: 'Quần thể nhà trệt trong khuôn viên mẫu hệ kín đáo mát mẻ; đối sánh với Tháp Chăm gạch nung sừng sững',
      houseImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng kèn Saranai bay qua ngọn tháp rêu phong gạch đỏ vĩnh hằng cùng thời gian.',
    audioPronunciationText: 'Dân tộc Chăm'
  },
  {
    id: 'kho-mu',
    name: 'Khơ Mú',
    otherNames: 'Xá, Tày Hay',
    nativeScript: 'Chữ Quốc ngữ / Chữ Khơ Mú',
    languageGroup: 'Môn - Khmer',
    population2019: 90612,
    populationPercent: '0,09%',
    primaryRegions: ['Nghệ An', 'Điện Biên', 'Sơn La', 'Lai Châu'],
    housingType: 'Nhà sàn',
    unescoHeritage: 'Múa Ống dập (Tăng bu) của người Khơ Mú (Di sản văn hóa phi vật thể quốc gia)',
    axis1Population: {
      count: 90612,
      rank: '14 / 54',
      growthNote: 'Dân tộc lâu đời ở vùng dải núi Trường Sơn - Tây Bắc'
    },
    axis2Distribution: {
      mainProvinces: ['Nghệ An (Kỳ Sơn, Tương Dương)', 'Điện Biên', 'Sơn La', 'Lai Châu'],
      terrainType: 'Sườn núi dốc miền Tây Nghệ An và miền núi Tây Bắc',
      mapCoordinates: { x: 38, y: 32 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Á (Nhóm Môn - Khmer)',
      socialOrganization: 'Bản Khơ Mú gắn bó sinh hoạt theo dòng họ động vật (Họ Chim, Họ Khỉ, Họ Rắn)',
      distinguishingFeatures: [
        'Nghệ thuật Nhạc cụ Ống dập Tăng bu độc đáo',
        'Kỹ thuật đan lát mây tre đan tinh xảo',
        'Lễ Mừng lúa mới (Greh) tri ân hạt giống'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa rẫy bằng chọc lỗ tra hạt, trồng ngô, đan lát gùi tre đan mây',
      handicrafts: ['Đan lát mây tre đan siêu bền', 'Làm ống dập nứa', 'Dệt túi đan'],
      attireDescription: 'Trang phục tiếp biến văn hóa với người Thái nhưng đơm cúc bạc và hoa văn riêng biệt',
      attireDetails: [
        'Áo ngắn đơm hàng cúc bạc sáng',
        'Váy dệt thổ cẩm đơm hoa văn hình cây cỏ',
        'Khăn chùm đầu màu chàm hoa văn mảnh'
      ],
      attireImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ cúng Tổ tiên dòng họ, thờ Thần Nương rẫy, tín ngưỡng vạn vật hữu linh',
      festivals: ['Lễ Mừng lúa mới (Greh)', 'Lễ cúng bản', 'Lễ cầu mưa'],
      folkArts: ['Múa Ống dập (Tăng bu)', 'Thổi sáo Ống nứa (Cúc boong)', 'Múa Xoè Khơ Mú'],
      customsDetails: 'Trong lễ Mừng lúa mới, các cô gái Khơ Mú cầm ống nứa Tăng bu gõ dập xuống sàn gỗ tạo nhịp rộn rã'
    },
    axis6Architecture: {
      houseType: 'Nhà sàn',
      materials: ['Gỗ rừng / bương nứa', 'Mây buộc không đục mộng', 'Mái cỏ tranh'],
      adaptationEcological: 'Nhà sàn nhỏ dốc nhẹ theo sườn núi; cột gỗ buộc dây mây dẻo dai chịu đựng rung chấn động đất nhẹ mộc mạc',
      structuralDetails: 'Vách nứa đập dạt thông thoáng, bếp lửa đun nấu sưởi ấm quanh năm giữa lòng nhà',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
    quote: 'Tiếng ống dập Tăng bu vang lên rộn rã tạ ơn hạt lúa vàng ban sự sống cho bản làng.',
    audioPronunciationText: 'Dân tộc Khơ Mú'
  },
  {
    id: 'co-tu',
    name: 'Cơ Tu',
    otherNames: 'Katu, Ca Tu',
    nativeScript: 'Chữ Cơ Tu Latinh',
    languageGroup: 'Môn - Khmer',
    population2019: 74173,
    populationPercent: '0,08%',
    primaryRegions: ['Quảng Nam', 'Thừa Thiên Huế', 'Đà Nẵng'],
    housingType: 'Nhà cộng đồng (Nhà Rông / Gươl)',
    unescoHeritage: 'Điệu múa Tung tung da dá (Vũ điệu dâng trời) của người Cơ Tu (Di sản văn hóa phi vật thể quốc gia)',
    axis1Population: {
      count: 74173,
      rank: '15 / 54',
      growthNote: 'Cư dân vùng đại ngàn dải đại Trường Sơn hùng vĩ'
    },
    axis2Distribution: {
      mainProvinces: ['Quảng Nam (Nam Giang, Tây Giang, Đông Giang)', 'Thừa Thiên Huế (A Lưới)'],
      terrainType: 'Đỉnh núi cao và thung lũng sông Bung dọc dải Trường Sơn',
      mapCoordinates: { x: 52, y: 44 }
    },
    axis3Characteristics: {
      languageFamily: 'Ngữ hệ Nam Á (Nhóm Môn - Khmer)',
      socialOrganization: 'Sinh hoạt buôn làng vây quanh Ngôi Nhà Gươl oval trạm khắc độc đáo',
      distinguishingFeatures: [
        'Vũ điệu Tung tung da dá dâng trời hùng tráng',
        'Thổ cẩm dệt hạt cườm chì thủ công đỉnh cao',
        'Kiến trúc Nhà Gươl hình oval trạm khắc đầu trâu và kỳ đà'
      ]
    },
    axis4LivelihoodAndAttire: {
      livelihood: 'Trồng lúa rẫy, săn bắt, hái lượm, dệt thổ cẩm hạt cườm chì, đan gùi',
      handicrafts: ['Dệt thổ cẩm đệm cườm chì', 'Chạm khắc gỗ đầu trâu', 'Đan gùi mây'],
      attireDescription: 'Mặc thổ cẩm đệm cườm chì tỉ mỉ, nam đóng khổ ngắn, nữ mặc váy quấn đơm cườm lóng lánh',
      attireDetails: [
        'Hạt cườm chì được xỏ trực tiếp vào từng sợi chỉ trong quá trình dệt',
        'Họa tiết hoa văn múa dâng trời đơm trên nền vải đỏ đen',
        'Vòng kiềng bạc đeo cổ và tai kiêu hãnh'
      ],
      attireImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=80'
    },
    axis5CustomsAndFestivals: {
      beliefs: 'Thờ thần Giàng (Giàng Trời, Giàng Núi, Giàng Rừng)',
      festivals: ['Lễ Ăn hái lúa mới (Cha haaroamee)', 'Lễ Mừng nhà Gươl mới', 'Lễ cúng Thần Nước'],
      folkArts: ['Điệu múa Tung tung (Nam) da dá (Nữ)', 'Nói lý - Hát lý', 'Đàn Abel'],
      customsDetails: 'Nam giới Tung tung giơ đao khiên mạnh mẽ, nữ giới Da dá giơ hai tay dâng lễ vật lên Thần Giàng'
    },
    axis6Architecture: {
      houseType: 'Nhà cộng đồng (Nhà Rông / Gươl)',
      materials: ['Gỗ sến / lim Trường Sơn', 'Tre nứa', 'Lá nón / cỏ tranh'],
      adaptationEcological: 'Kiến trúc Ngôi Nhà Gươl hình oval/chữ nhật mái cong mềm mại chịu sức gió ngàn Trường Sơn; chạm khắc đầu trâu xua đuổi tà khí',
      structuralDetails: 'Cột trụ chính chạm khắc đầu trâu, kỳ đà, tượng người múa; xung quanh là các ngôi nhà sàn gia đình tròn trịa',
      houseImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80'
    },
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
    portraitImage: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=600&q=80',
    quote: 'Điệu múa Da dá đưa đôi tay nữ giới dâng lên trời xanh lời nguyện cầu bình an ấm no cho buôn làng.',
    audioPronunciationText: 'Dân tộc Cơ Tu'
  }
];

export const LANGUAGE_GROUPS = [
  { name: 'Việt - Mường', color: '#00F2FE', count: 2, desc: 'Ngữ hệ Nam Á - Dân số chiếm trên 86% toàn quốc' },
  { name: 'Tày - Thái', color: '#FFD700', count: 3, desc: 'Ngữ hệ Thái - Kadai - Cư trú chủ yếu vùng thung lũng miền núi phía Bắc' },
  { name: 'Hmông - Dao', color: '#FF4D4D', count: 2, desc: 'Ngữ hệ Hmong - Mien - Cư trú vùng núi cao hùng vĩ' },
  { name: 'Hán', color: '#E056FD', count: 1, desc: 'Ngữ hệ Hán - Tạng - Tập trung thương mại tại các đô thị' },
  { name: 'Nam Đảo', color: '#10B981', count: 3, desc: 'Ngữ hệ Austronesian - Chủ nhân Cồng chiêng Tây Nguyên & Tháp Chăm' },
  { name: 'Môn - Khmer', color: '#F97316', count: 4, desc: 'Ngữ hệ Nam Á - Cư dân lâu đời Tây Nguyên, Nam Bộ & Trường Sơn' }
];
