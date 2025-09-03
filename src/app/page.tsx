import HeroSection from './sections/HeroSection';
import DesignPhilosophy from './sections/DesignPhilosophy';
import SoftwareModes from './sections/SoftwareModes';
import AIWritingAssistant from './sections/AIWritingAssistant';
import LifestyleStorytelling from './sections/LifestyleStorytelling';
import ClosingSection from './sections/ClosingSection';
import EmailCapture from './sections/EmailCapture';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Features from './sections/Features';
import AICapabilities from './components/AICapabilities';

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
