export type LanguageGroup =
  | 'Việt - Mường'
  | 'Tày - Thái'
  | 'Hmông - Dao'
  | 'Hán'
  | 'Nam Đảo'
  | 'Môn - Khmer';

export type HousingType =
  | 'Nhà trệt'
  | 'Nhà sàn'
  | 'Nhà dài'
  | 'Nhà cộng đồng (Nhà Rông / Gươl)';

export type Region =
  | 'Đồng bằng Bắc Bộ & Duyên hải'
  | 'Miền núi & Trung du Bắc Bộ'
  | 'Tây Nguyên'
  | 'Duyên hải Nam Trung Bộ'
  | 'Nam Bộ';

export interface EthnicProfile {
  id: string;
  name: string; // e.g. Kinh
  otherNames?: string; // e.g. Việt
  nativeScript?: string;
  languageGroup: LanguageGroup;
  population2019: number; // Census 2019
  populationPercent: string;
  primaryRegions: string[];
  housingType: HousingType;
  unescoHeritage?: string; // e.g. "Tín ngưỡng thờ Mẫu Tam phủ", "Hát Then", "Xoè Thái"
  
  // 6-Axis Data Points
  axis1Population: {
    count: number;
    rank: string;
    growthNote: string;
  };
  axis2Distribution: {
    mainProvinces: string[];
    terrainType: string; // e.g. "Đồng bằng, ven biển, đô thị"
    mapCoordinates: { x: number; y: number }; // Percentage coords for Vietnam SVG map
  };
  axis3Characteristics: {
    languageFamily: string;
    socialOrganization: string; // e.g. Làng xã, Phum sóc, Buôn làng
    distinguishingFeatures: string[];
  };
  axis4LivelihoodAndAttire: {
    livelihood: string;
    handicrafts: string[];
    attireDescription: string;
    attireDetails: string[];
    attireImage: string;
  };
  axis5CustomsAndFestivals: {
    beliefs: string;
    festivals: string[];
    folkArts: string[];
    customsDetails: string;
  };
  axis6Architecture: {
    houseType: HousingType;
    materials: string[];
    adaptationEcological: string;
    structuralDetails: string;
    houseImage: string;
  };

  heroImage: string;
  portraitImage: string;
  quote: string;
  audioPronunciationText: string;
}

export interface MuseumArtifact {
  id: string;
  name: string;
  ethnicGroup: string;
  category: 'Trang phục & Dệt' | 'Nhạc cụ' | 'Nông cụ & Sinh kế' | 'Kiến trúc & Tín ngưỡng';
  material: string;
  description: string;
  culturalSignificance: string;
  image: string;
  threeDModelPlaceholder?: string;
}

export interface Harvest321Data {
  discoveries: [string, string, string];
  comparisons: [string, string];
  action: string;
  studentName: string;
  className: string;
  timestamp?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  relatedEthnicId?: string;
}
