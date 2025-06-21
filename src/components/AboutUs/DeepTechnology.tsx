import { useInView, motion } from "framer-motion";
import { Microscope } from "lucide-react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export const DeepTechnology = () => {
  const { t } = useTranslation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all"
    >
      <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
        <Microscope className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {t("omni_deep_techology_description")}
      </h3>

      <div className="text-gray-700 leading-relaxed">
        {t("omni_deep_technology_text")}
      </div>
    </motion.div>
  );
};
