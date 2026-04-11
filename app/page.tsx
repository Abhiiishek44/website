import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import ChatWidgetPreview from "@/components/ChatWidgetPreview";
import AIAgentSection from "@/components/AIAgentSection";
import DeploymentSection from "@/components/DeploymentSection";
import SaaSCoreSection from "@/components/SaaSCoreSection";
import QuickFeaturesSection from "@/components/QuickFeaturesSection";
import PricingDifferenceSection from "@/components/PricingDifferenceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="selection:bg-primary selection:text-white">
      <Header />
      <main className="pt-20 pb-24">
        <HeroSection />
        <ArchitectureSection />
        <ChatWidgetPreview />
        <AIAgentSection />
        <DeploymentSection />
        <SaaSCoreSection />
        <QuickFeaturesSection />
        <PricingDifferenceSection />
      </main>
      <Footer />
    </div>
  );
}
