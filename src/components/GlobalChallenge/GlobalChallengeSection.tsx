import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  AlertTriangle,
  Earth,
  Minus,
  Plus,
  Radiation,
  Shield,
  Leaf,
  Skull,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const GlobalChallengeSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mainPoints = t("globalChallenge.mainPoints", {
    returnObjects: true,
  }) as string[];

  const solutionCards = [
    {
      icon: <Earth className="w-8 h-8" />,
      color: "from-green-400 to-emerald-600",
      title: t("globalChallenge.organicPower.title"),
      subtitle: t("globalChallenge.organicPower.subtitle"),
      points: t("globalChallenge.organicPower.points", {
        returnObjects: true,
      }) as string[],
    },
    {
      icon: <Radiation className="w-8 h-8" />,
      color: "from-red-400 to-pink-600",
      title: t("globalChallenge.toxicLegacy.title"),
      subtitle: t("globalChallenge.toxicLegacy.subtitle"),
      points: t("globalChallenge.toxicLegacy.points", {
        returnObjects: true,
      }) as string[],
    },
  ];

  const hiddenDangers = t("globalChallenge.hiddenDangers.items", {
    returnObjects: true,
  }) as { title: string; sources: string; effects: string[] }[];

  return (
    <section id="global-challenge" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0  opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-red-400 to-orange-600 shadow-lg"
          >
            <AlertTriangle className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              {t("globalChallenge.title")}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t("globalChallenge.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {mainPoints.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 group"
                >
                  <div className="mt-1 w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg text-gray-700 leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent z-10" />
              <img
                src="/degradation.jpg"
                alt="Soil degradation"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Solution Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {solutionCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${
                  card.color
                } rounded-3xl blur-xl opacity-20 ${
                  hoveredCard === index ? "scale-110" : "scale-100"
                } transition-transform`}
              />
              <div className="relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all h-full">
                <div
                  className={`inline-flex p-4 bg-gradient-to-r ${card.color} rounded-2xl mb-6`}
                >
                  <div className="text-white">{card.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">{card.subtitle}</p>
                <ul className="space-y-3">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <Leaf className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hidden Dangers Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-red-50 to-orange-50 rounded-3xl p-10"
        >
          <div className="flex items-center justify-center mb-8">
            <Skull className="w-8 h-8 text-red-600 mr-3" />
            <h3 className="text-3xl font-bold text-gray-900">
              {t("globalChallenge.hiddenDangers.title")}
            </h3>
          </div>

          <div className="space-y-4">
            {hiddenDangers.map((danger, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-red-100 rounded-xl group-hover:bg-red-200 transition-colors">
                      <AlertTriangle className="w-6 h-6 text-red-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {danger.title}
                    </h4>
                  </div>
                  <div
                    className={`p-2 rounded-full ${
                      openIndex === i ? "bg-red-100" : "bg-gray-100"
                    } transition-colors`}
                  >
                    {openIndex === i ? (
                      <Minus className="w-5 h-5 text-red-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-600" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <div className="mb-4">
                          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                            {t("globalChallenge.hiddenDangers.sourcesLabel")}
                          </span>
                          <p className="text-gray-700 mt-1">{danger.sources}</p>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">
                            {t("globalChallenge.hiddenDangers.effectsLabel")}
                          </span>
                          <ul className="mt-2 space-y-2">
                            {danger.effects.map((effect, j) => (
                              <li key={j} className="flex items-start">
                                <Shield className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{effect}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
