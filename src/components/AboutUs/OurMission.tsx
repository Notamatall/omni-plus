import { motion } from "framer-motion";
import { Goal } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const OurMission = () => {
  const { t } = useTranslation();
  const points = t("omni_mission_points", {
    returnObjects: true,
  }) as string[];

  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
    >
      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
        <Goal className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {t("omni_mission_description")}
      </h3>

      <ul className="list-disc pl-5 space-y-2  text-gray-700 leading-relaxed">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </motion.div>
  );
};
