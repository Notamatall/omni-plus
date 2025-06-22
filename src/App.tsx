import "./styles/app.css";
import { Navigation } from "./components/Navigation";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { HeroSection } from "./components/HeroSection";
import { GlobalMissionSection } from "./components/GlobalMission/GlobalMission";
import { OmniCatalystSection } from "./components/OmniPlus/OmniPlusSection";
import { HumanBenefitsSection } from "./components/HumanBenefits/HumanBenefitsSection";
import { GlobalChallengeSection } from "./components/GlobalChallenge/GlobalChallengeSection";
import { ContactOrderSection } from "./components/ContactOrder/ContactOrderSection";
import { Footer } from "./components/Footer";

const MainSections = () => {
  return (
    <>
      <GlobalChallengeSection />
      <GlobalMissionSection />
      <OmniCatalystSection />
      <HumanBenefitsSection />
      <ContactOrderSection />
    </>
  );
};

// Main App Component
const App = () => {
  return (
    <>
      <div className="scroll-container">
        <ParticleCanvas />
        <Navigation />
        <HeroSection />
        <MainSections />
        <Footer />
      </div>
    </>
  );
};

export default App;
