import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronUp,
  ChevronDown,
  Target,
  Globe,
  Leaf,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const GlobalMissionSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const missionPoints = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: t("globalMission.points.crossroads.title"),
      description: t("globalMission.points.crossroads.description"),
      color: "from-blue-400 to-indigo-600",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: t("globalMission.points.quality.title"),
      description: t("globalMission.points.quality.description"),
      color: "from-purple-400 to-pink-600",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t("globalMission.points.innovation.title"),
      description: t("globalMission.points.innovation.description"),
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: t("globalMission.points.omni.title"),
      description: t("globalMission.points.omni.description"),
      color: "from-green-400 to-emerald-600",
    },
  ];

  const comparisonRows = [
    {
      parameter: t("globalMission.comparison.rows.source.parameter"),
      organic: t("globalMission.comparison.rows.source.organic"),
      chemical: t("globalMission.comparison.rows.source.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.growth.parameter"),
      organic: t("globalMission.comparison.rows.growth.organic"),
      chemical: t("globalMission.comparison.rows.growth.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.metabolism.parameter"),
      organic: t("globalMission.comparison.rows.metabolism.organic"),
      chemical: t("globalMission.comparison.rows.metabolism.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.nitrate.parameter"),
      organic: t("globalMission.comparison.rows.nitrate.organic"),
      chemical: t("globalMission.comparison.rows.nitrate.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.vitamins.parameter"),
      organic: t("globalMission.comparison.rows.vitamins.organic"),
      chemical: t("globalMission.comparison.rows.vitamins.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.pesticides.parameter"),
      organic: t("globalMission.comparison.rows.pesticides.organic"),
      chemical: t("globalMission.comparison.rows.pesticides.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.metals.parameter"),
      organic: t("globalMission.comparison.rows.metals.organic"),
      chemical: t("globalMission.comparison.rows.metals.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.gut.parameter"),
      organic: t("globalMission.comparison.rows.gut.organic"),
      chemical: t("globalMission.comparison.rows.gut.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.risks.parameter"),
      organic: t("globalMission.comparison.rows.risks.organic"),
      chemical: t("globalMission.comparison.rows.risks.chemical"),
    },
    {
      parameter: t("globalMission.comparison.rows.environment.parameter"),
      organic: t("globalMission.comparison.rows.environment.organic"),
      chemical: t("globalMission.comparison.rows.environment.chemical"),
    },
  ];

  return (
    <section
      id="global-mission"
      className="relative px-6 lg:px-12 py-24 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0  opacity-60" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600 shadow-lg"
          >
            <Target className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t("globalMission.title")}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t("globalMission.subtitle")}
          </p>
        </motion.div>

        {/* Mission Points Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {missionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${point.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}
              />
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all h-full">
                <div
                  className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${point.color} mb-4`}
                >
                  <div className="text-white">{point.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table Toggle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <span className="text-lg">
              {isOpen
                ? t("globalMission.comparison.hide")
                : t("globalMission.comparison.show")}
            </span>
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </motion.button>
        </motion.div>

        {/* Comparison Table */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden mt-8"
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
                  {t("globalMission.comparison.title")}
                </h3>
                <div className="overflow-x-auto rounded-2xl border border-gray-200">
                  <table className="min-w-full text-left">
                    <thead>
                      <tr className="bg-gradient-to-r from-gray-50 to-gray-100">
                        <th className="px-6 py-4 font-bold text-gray-800">
                          {t("globalMission.comparison.headers.parameter")}
                        </th>
                        <th className="px-6 py-4 font-bold text-green-700">
                          {t("globalMission.comparison.headers.organic")}
                        </th>
                        <th className="px-6 py-4 font-bold text-red-700">
                          {t("globalMission.comparison.headers.chemical")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {comparisonRows.map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-6 py-4 font-semibold text-gray-800">
                            {row.parameter}
                          </td>
                          <td className="px-6 py-4 text-green-700">
                            <div className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              {row.organic}
                            </div>
                          </td>
                          <td className="px-6 py-4 text-red-700">
                            <div className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              {row.chemical}
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
