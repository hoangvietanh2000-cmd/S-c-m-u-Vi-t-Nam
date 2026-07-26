import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { InteractiveMap } from './components/InteractiveMap';
import { EthnicGrid } from './components/EthnicGrid';
import { MaterialLife } from './components/MaterialLife';
import { SpiritualLife } from './components/SpiritualLife';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { ArtifactsRoom } from './components/ArtifactsRoom';
import { StudentTasks } from './components/StudentTasks';
import { AcademicReferences } from './components/AcademicReferences';
import { EthnicDetailModal } from './components/EthnicDetailModal';
import { SearchModal } from './components/SearchModal';
import { EthnicProfile } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedEthnicProfile, setSelectedEthnicProfile] = useState<EthnicProfile | null>(null);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ScrollSpy listener to update active section link
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'map', 'grid', 'material', 'spiritual', 'comparison', 'artifacts', 'tasks', 'references'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#A0AEC0] font-sans selection:bg-[#00F2FE] selection:text-[#0B0F19]">
      {/* Global Top Navbar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchModalOpen(true)}
      />

      {/* Main Museum Page Sections */}
      <main>
        {/* Module 0: Hero Banner */}
        <HeroBanner onNavigate={handleNavigate} />

        {/* Module 1: Interactive Vietnam Map */}
        <InteractiveMap onSelectEthnic={(profile) => setSelectedEthnicProfile(profile)} />

        {/* Module 2: 15 Representative Ethnic Grid */}
        <EthnicGrid onSelectEthnic={(profile) => setSelectedEthnicProfile(profile)} />

        {/* Module 3: Material Life Exploration */}
        <MaterialLife />

        {/* Module 4: Spiritual Life & UNESCO Heritages */}
        <SpiritualLife />

        {/* Module 5: Housing Architecture Comparison Matrix */}
        <ComparisonMatrix />

        {/* Module 6: Digital Artifacts Museum Room */}
        <ArtifactsRoom />

        {/* Module 7: Student Tasks & 3-2-1 Harvest Form */}
        <StudentTasks />

        {/* Module 8: Academic References & Disclaimers */}
        <AcademicReferences />
      </main>

      {/* Ethnic Detail Modal (6-Axis View) */}
      <EthnicDetailModal
        profile={selectedEthnicProfile}
        onClose={() => setSelectedEthnicProfile(null)}
      />

      {/* Quick Search Overlay Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onSelectEthnic={(profile) => setSelectedEthnicProfile(profile)}
      />
    </div>
  );
}
