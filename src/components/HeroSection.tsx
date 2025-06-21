import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../styles/hero-section.css";
const floatingVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

export const FloatingTextBlocks = () => {
  const blocks = [
    {
      text: "Восстановление деградированных, полупустынных и пустынных почв, поддержание микроэлементного состава плодородных земель.",
      position: "top-left",
    },
    {
      text: "Cпособствует формированию плодородного слоя и удержанию росы в поверхностном слое.",
      position: "top-right",
    },
    {
      text: "Холодной плазмы — инновационной технологии, возвращающей жизнь неплодородным почвам.",
      position: "bottom-left",
    },
  ];

  return (
    <>
      {blocks.map((block, i) => (
        <motion.div
          key={i}
          custom={i}
          initial="initial"
          animate="animate"
          variants={floatingVariants}
          className={`absolute text-gray-600 bg-gradient-to-br from-green-400 to-green-600 p-8 rounded-3xl ${block.position}`}
        >
          {block.text}
        </motion.div>
      ))}
    </>
  );
};

export const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToSection = () => {
    const element = document.getElementById("section1");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative hero-section flex items-center justify-center pt-20">
      <div className="h-full relative">
        <picture>
          <source media="(min-width: 1000px)" srcSet="/hero-desktop.jpg" />
          <source media="(min-width: 640px)" srcSet="/hero-mobile.jpg" />
          <img src="/hero-desktop.jpg" alt="Hero background" />
        </picture>

        <div
          style={{ transform: "translate(-50%,-50%)" }}
          className="w-full left-1/2 top-1/2 absolute inset-0 flex-col flex items-center justify-center text-4xl lg:text-5xl font-semibold text-center px-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="text-[var(--off-white)]">{t("logo")} </div>
            <div className="text-green-500 ">{t("slogan")}</div>
            <motion.div
              onClick={scrollToSection}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className=" mt-5 cursor-pointer max-w-7xl mx-auto px-6 lg:px-12 text-center"
            >
              <ChevronDown
                size={32}
                className="text-[var(--cta)] w-12 h-12 text-gray-300 mx-auto animate-bounce"
              />
              <p className=" text-xs font-light tracking-[0.4em] mt-1 text-gray-300">
                Scroll down
              </p>
            </motion.div>
          </motion.h1>
        </div>
      </div>
    </section>
  );
};
