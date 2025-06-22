import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { LanguageDropdown } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { OmniLogo } from "./OmniLogo";
import { Sections } from "../constants/navLinks";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string>();
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
    { id: Sections.GlobalChallenge, label: t("section1") },
    { id: Sections.GlobalMission, label: t("section2") },
    { id: Sections.OmniPlus, label: t("section3") },
    { id: Sections.HumanBenefits, label: t("section4") },
    { id: Sections.ContactOrder, label: t("section5") },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-100"
            : "bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-md"
        }`}
      >
        <div className="px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0 }}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full blur-xl opacity-30"
                />
                <div className="relative bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-2xl shadow-lg">
                  <OmniLogo width={40} height={40} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  OMNI +
                </span>
              </div>
            </motion.div>

            <div className="hidden xl:flex items-center space-x-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(undefined)}
                  className="relative"
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="px-6 py-3 text-gray-700 font-medium transition-all duration-300 relative z-10"
                  >
                    {item.label}
                  </button>
                  {hoveredItem === item.id && (
                    <motion.div
                      layoutId="navbar-hover"
                      className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              <div className="hidden xl:block">
                <LanguageDropdown />
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="xl:hidden p-3 rounded-2xl bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <X size={24} className="text-gray-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                    >
                      <Menu size={24} className="text-gray-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Premium divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
        />
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 xl:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 xl:hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                      <OmniLogo width={24} height={24} />
                    </div>
                    <span className="text-xl font-bold text-gray-800">
                      OMNI+
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    <X size={20} className="text-gray-700" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left p-4 rounded-2xl hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 transition-all duration-300 group"
                    >
                      <span className="text-gray-700 font-medium group-hover:text-green-700 transition-colors">
                        {item.label}
                      </span>
                    </motion.button>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <LanguageDropdown />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
