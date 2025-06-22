import { motion } from "framer-motion";
import { ArrowRight, Sword } from "lucide-react";
import { HiddenDangers } from "./HiddenDangers";
import { ToxicLegacy } from "./ToxicLegacy";
import { useTranslation } from "react-i18next";
import { PowerOfOrganicAgriculture } from "./PowerOfOrganicAgriculture";

export const GlobalChallegeSection = () => {
  const { t } = useTranslation();
  const points = t("omni_soils_are_dying_points", {
    returnObjects: true,
  }) as string[];

  return (
    <section id="section3" className="py-20 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-20 h-20 mb-6 mx-auto rounded-full bg-gradient-to-r from-green-400 to-emerald-600 shadow-lg"
              >
                <Sword className="w-10 h-10 text-white" />
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-10">
                {t("section2")}
              </h2>
              <h3 className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                {t("section2_subtitle")}
              </h3>
            </motion.div>
            <ul className="space-y-4">
              {points.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className=" bg-gradient-to-br rounded-3xl flex items-center justify-center">
              <img src="/degradation.jpg" className="max-h-600 rounded-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col gap-12">
        <div className="grid md:grid-cols-2 gap-12">
          <PowerOfOrganicAgriculture />
          <ToxicLegacy />
        </div>
        <HiddenDangers />
      </div>
    </section>
  );
};
