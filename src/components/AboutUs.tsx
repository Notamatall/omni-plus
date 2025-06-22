import { motion } from "framer-motion";
import { DeepTechnology } from "./AboutUs/DeepTechnology";
import { NaturalSolution } from "./AboutUs/NaturalSolution";
import { OurMission } from "./AboutUs/OurMission";
import { useTranslation } from "react-i18next";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <section id="section1" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
            {t("section1")}
          </h2>
          <h3 className="text-2xl text-green-800 max-w-3xl mx-auto">
            {t("section1_subtitle")}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <OurMission />
          <NaturalSolution />
          <DeepTechnology />
        </div>
      </div>
    </section>
  );
};
