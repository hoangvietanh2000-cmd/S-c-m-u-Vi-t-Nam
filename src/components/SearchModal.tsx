import React, { useState, useEffect } from 'react';
import { ETHNIC_PROFILES } from '../data/ethnicData';
import { MUSEUM_ARTIFACTS } from '../data/artifactsData';
import { EthnicProfile, MuseumArtifact } from '../types';
import { Search, X, Users, Box, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEthnic: (profile: EthnicProfile) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectEthnic }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredEthnics = ETHNIC_PROFILES.filter(
    (e) =>
      e.name.toLowerCase().includes(query.toLowerCase()) ||
      (e.otherNames && e.otherNames.toLowerCase().includes(query.toLowerCase())) ||
      e.languageGroup.toLowerCase().includes(query.toLowerCase()) ||
      e.housingType.toLowerCase().includes(query.toLowerCase()) ||
      e.primaryRegions.some((r) => r.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredArtifacts = MUSEUM_ARTIFACTS.filter(
    (a) =>
      a.name.toLowerCase().includes(query.toLowerCase()) ||
      a.ethnicGroup.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-[#161F33] border border-[#00F2FE]/40 rounded-3xl max-w-2xl w-full p-6 relative overflow-hidden glass-panel shadow-2xl space-y-4"
        >
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2 text-[#00F2FE]">
              <Search className="w-5 h-5" />
              <span className="text-sm font-bold text-white">Tìm kiếm nhanh Bảo tàng Số</span>
            </div>
            <button onClick={onClose} className="p-1.5 rounded-full bg-[#0B0F19] text-[#A0AEC0] hover:text-white">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Search Input Field */}
          <div className="relative">
            <input
              type="text"
              autoFocus
              placeholder="Nhập tên dân tộc, tỉnh thành, ngữ hệ, hiện vật (Khăn Piêu, Khèn Mông...)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-[#0B0F19] border border-[#00F2FE]/30 rounded-2xl px-4 py-3 text-xs text-white placeholder-[#A0AEC0] focus:outline-none focus:border-[#00F2FE]"
            />
          </div>

          {/* Results List */}
          <div className="max-h-[360px] overflow-y-auto space-y-4 pr-1">
            {/* Ethnic Profiles Section */}
            <div>
              <span className="text-[10px] font-bold text-[#00F2FE] uppercase tracking-wider block mb-2 flex items-center space-x-1">
                <Users className="w-3.5 h-3.5" />
                <span>Hồ sơ Dân tộc ({filteredEthnics.length})</span>
              </span>

              <div className="space-y-2">
                {filteredEthnics.map((ethnic) => (
                  <div
                    key={ethnic.id}
                    onClick={() => {
                      onSelectEthnic(ethnic);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-[#0B0F19] border border-white/5 hover:border-[#00F2FE]/40 transition-all cursor-pointer flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white group-hover:text-[#00F2FE] transition-colors">
                        Dân tộc {ethnic.name} {ethnic.otherNames && `(${ethnic.otherNames})`}
                      </h4>
                      <p className="text-[11px] text-[#A0AEC0]">
                        {ethnic.languageGroup} • Số dân 2019: {ethnic.population2019.toLocaleString('vi-VN')}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#A0AEC0] group-hover:text-[#00F2FE] transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* Artifacts Section */}
            <div>
              <span className="text-[10px] font-bold text-[#FFD700] uppercase tracking-wider block mb-2 flex items-center space-x-1">
                <Box className="w-3.5 h-3.5" />
                <span>Hiện vật Bảo tàng ({filteredArtifacts.length})</span>
              </span>

              <div className="space-y-2">
                {filteredArtifacts.map((artifact) => (
                  <div
                    key={artifact.id}
                    className="p-3 rounded-xl bg-[#0B0F19] border border-white/5 flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-bold text-white">{artifact.name}</h4>
                      <p className="text-[11px] text-[#A0AEC0]">
                        Dân tộc {artifact.ethnicGroup} • {artifact.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
