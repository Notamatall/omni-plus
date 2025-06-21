import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageDropdown } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import "../styles/navigation.css";
import { OmniLogo } from "./OmniLogo";
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    { id: "section1", label: t("section1") },
    { id: "section2", label: t("section2") },
    { id: "section3", label: t("section3") },
    { id: "section4", label: t("section4") },
    { id: "section5", label: t("section5") },
    { id: "section6", label: t("section6") },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 bg-gray-900 text-green-800  ${
        scrolled ? " backdrop-blur-lg shadow-lg" : ""
      }`}
    >
      <div className="px-6 lg:px-12">
        <div className="flex items-center  justify-between h-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-2 mr-6"
          >
            <OmniLogo width={36} height={36} />
            <span className="text-4xl font-bold ">
              OMNI <span className="text-green-500">+</span>
            </span>
          </motion.div>

          <div className="hidden xl:flex items-center space-x-8 h-full">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => scrollToSection(item.id)}
                className="text-green-800 hover:text-green-600 font-medium transition-colors cursor-pointer menu-item"
              >
                <div className="text">{item.label}</div>
              </motion.button>
            ))}
          </div>

          <div className="hidden xl:block">
            <LanguageDropdown />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden cursor-pointer"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-bg backdrop-blur-lg border-t"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 text-green-800 hover:text-green-600 font-medium cursor-pointer menu-item-mobile"
                >
                  {item.label}
                </button>
              ))}
              <LanguageDropdown />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
