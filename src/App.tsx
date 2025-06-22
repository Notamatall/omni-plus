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
import { useEffect, useState } from "react";
import { OmniLogo } from "./components/OmniLogo";
import { motion } from "framer-motion";

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
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  // Simulate loading progress
  useEffect(() => {
    let interval: any;

    if (!isLoaded) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev < 90) return prev + 10;
          clearInterval(interval);
          return prev;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isLoaded]);

  // Load images
  useEffect(() => {
    const images = ["/hero-desktop.jpg", "/hero-mobile.jpg"];
    Promise.all(
      images.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
          })
      )
    ).then(() => {
      setIsLoaded(true);
      setProgress(100);
    });
  }, []);
  return (
    <>
      {!isLoaded && (
        <div className="fixed inset-0 bg-gray-900 flex flex-col items-center justify-center z-50">
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mb-6"
          >
            <OmniLogo width={160} height={160} />
          </motion.div>

          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      )}
      {isLoaded && (
        <div className="scroll-container">
          <ParticleCanvas />
          <Navigation />
          <HeroSection />
          <MainSections />
          <Footer />
        </div>
      )}
    </>
  );
};

export default App;
