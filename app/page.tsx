import AlertBanner from "@/components/AlertBanner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompaniesSection from "@/components/CompaniesSection";
import ChatWidgetPreview from "@/components/ChatWidgetPreview";
import FeaturesSection from "@/components/FeaturesSection";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";
import HowItWorksSection from "@/components/HowItWorksSection";
import DeploymentSection from "@/components/DeploymentSection";
import SectionConnector from "@/components/SectionConnector";
import InfrastructurePlanner from "@/components/InfrastructurePlanner";
import CommunitySection from "@/components/CommunitySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="floating-orb w-96 h-96 bg-primary/20 absolute top-0 right-0 -translate-y-1/2 translate-x-1/2" />
      <div className="floating-orb w-96 h-96 bg-accent/10 absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2" />
      
      {/* <AlertBanner /> */}
      <Header />
      <HeroSection />
      {/* <CompaniesSection /> */}
      <ChatWidgetPreview />
      <FeaturesSection />
      <ArchitectureDiagram />
      <HowItWorksSection />
      <DeploymentSection />
      <SectionConnector />
      {/* <InfrastructurePlanner /> */}
      <CommunitySection />
      <CTASection />
      <Footer />
    </div>
  );
}
