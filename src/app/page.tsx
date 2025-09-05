import HeroSection from '@/app/sections/HeroSection';
import DesignPhilosophy from '@/app/sections/DesignPhilosophy';
import SoftwareModes from '@/app/sections/SoftwareModes';
import AIWritingAssistant from '@/app/sections/AIWritingAssistant';
import LifestyleStorytelling from '@/app/sections/LifestyleStorytelling';
import ClosingSection from '@/app/sections/ClosingSection';
import EmailCapture from '@/app/sections/EmailCapture';
import NavBar from '@/app/components/NavBar';
import Footer from '@/app/components/Footer';
import Features from '@/app/sections/Features';
import AICapabilities from '@/app/components/AICapabilities';

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      <main className="relative">
        <NavBar />
        <HeroSection />
        <DesignPhilosophy />
        <Features />
        <SoftwareModes />
        <AICapabilities />
        <AIWritingAssistant />
        <LifestyleStorytelling />
        <EmailCapture id="email-capture" />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}
