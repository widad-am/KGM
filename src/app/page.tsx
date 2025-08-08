import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ExploreLineup from '@/components/ExploreLineup';
import BrandSection from '@/components/BrandSection';
import InsideKGM from '@/components/InsideKGM';
import Newsroom from '@/components/Newsroom';
import KGMBanner from '@/components/KGMBanner';
import QuickAccess from '@/components/QuickAccess';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <Layout>
      {/* Hero with bottom gradient overlay to transition into dark section */}
      <div className="relative">
        <HeroSection />
        <div className="pointer-events-none absolute inset-x-0 -bottom-px h-24 bg-gradient-to-b from-transparent to-[#0b0d16]" />
      </div>

      {/* Explore KGM Lineup (dark mode section) */}
      <ExploreLineup />

      {/* Brand section */}
      <BrandSection />

      {/* Inside KGM section */}
      <InsideKGM />

      {/* Newsroom section */}
      <Newsroom />

      {/* KGM Banner section */}
      <KGMBanner />

      {/* Quick Access section */}
      <QuickAccess />

      {/* Existing demo sections can remain or be removed if not needed */}

     
      <Footer />
    </Layout>
  );
} 