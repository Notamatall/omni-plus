import { motion, AnimatePresence } from "framer-motion";
import {
  Droplet,
  Leaf,
  Shield,
  Beaker,
  Sparkles,
  Zap,
  TreePine,
  Activity,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const OmniCatalystSection = () => {
  const [activeTab, setActiveTab] = useState("technology");
  const [hoveredBenefit, setHoveredBenefit] = useState<number>();
  const { t } = useTranslation();

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: t("omni.benefits.growth"),
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: t("omni.benefits.development"),
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      text: t("omni.benefits.moisture"),
      color: "from-blue-400 to-cyan-600",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      text: t("omni.benefits.resistance"),
      color: "from-purple-400 to-pink-600",
    },
  ];

  const technology = [
    {
      method: t("omni.technology.advanced.title"),
      icon: <Leaf className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      description: t("omni.technology.advanced.description"),
      steps: [
        t("omni.technology.advanced.step1"),
        t("omni.technology.advanced.step2"),
        t("omni.technology.advanced.step3"),
        t("omni.technology.advanced.step4"),
        t("omni.technology.advanced.step5"),
      ],
    },
    {
      method: t("omni.technology.composition.title"),
      icon: <Droplet className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      description: t("omni.technology.composition.description"),
      steps: [
        t("omni.technology.composition.humic"),
        t("omni.technology.composition.fulvic"),
        t("omni.technology.composition.amino"),
        t("omni.technology.composition.vitamins"),
        t("omni.technology.composition.minerals"),
        t("omni.technology.composition.microbiota"),
      ],
    },
    {
      method: t("omni.technology.freefrom.title"),
      icon: <Beaker className="w-6 h-6" />,
      color: "from-red-500 to-pink-600",
      description: "",
      steps: [
        t("omni.technology.freefrom.cl"),
        t("omni.technology.freefrom.pe"),
        t("omni.technology.freefrom.sc"),
      ],
    },
  ];

  const applicationMethods = [
    {
      method: t("omni.application.soil.title"),
      icon: <Leaf className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      description: t("omni.application.soil.description"),
      steps: [
        t("omni.application.soil.step1"),
        t("omni.application.soil.step2"),
        t("omni.application.soil.step3"),
        t("omni.application.soil.step4"),
      ],
    },
    {
      method: t("omni.application.irrigation.title"),
      icon: <Droplet className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      description: t("omni.application.irrigation.description"),
      steps: [
        t("omni.application.irrigation.step1"),
        t("omni.application.irrigation.step2"),
        t("omni.application.irrigation.step3"),
      ],
    },
    {
      method: t("omni.application.seed.title"),
      icon: <Beaker className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600",
      description: t("omni.application.seed.description"),
      steps: [
        t("omni.application.seed.step1"),
        t("omni.application.seed.step2"),
        t("omni.application.seed.step3"),
        t("omni.application.seed.step4"),
      ],
    },
  ];

  const idealApplications = [
    {
      icon: <TreePine className="w-8 h-8" />,
      title: t("omni.ideal.desert.title"),
      desc: t("omni.ideal.desert.description"),
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: t("omni.ideal.soil.title"),
      desc: t("omni.ideal.soil.description"),
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: t("omni.ideal.climate.title"),
      desc: t("omni.ideal.climate.description"),
    },
  ];

  const tabs = [
    { id: "technology", label: t("omni.tabs.technology") },
    { id: "benefits", label: t("omni.tabs.benefits") },
    { id: "application", label: t("omni.tabs.application") },
  ];

  return (
    <section
      className="relative px-6 lg:px-12 py-24 overflow-hidden"
      id="omni-plus"
    >
      <div className="absolute inset-0 opacity-50" />

      <div className="relative max-w-7xl mx-auto">
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
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-green-400 to-emerald-600 shadow-lg"
          >
            <Sparkles className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {t("omni.title")}
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t("omni.subtitle")}
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg"
                  : "bg-white text-gray-600 shadow-md hover:shadow-lg"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "technology" && (
            <motion.div
              key="technology"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-8"
            >
              {technology.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                  />
                  <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${method.color} rounded-2xl mb-4`}
                    >
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {method.method}
                    </h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <ul className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className="flex items-start text-sm"
                        >
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {activeTab === "benefits" && (
            <motion.div
              key="benefits"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10 }}
                    onHoverStart={() => setHoveredBenefit(index)}
                    onHoverEnd={() => setHoveredBenefit(undefined)}
                    className="relative"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${
                        benefit.color
                      } rounded-2xl blur-xl opacity-50 ${
                        hoveredBenefit === index ? "scale-110" : "scale-100"
                      } transition-transform`}
                    />
                    <div className="relative bg-white rounded-2xl p-6 shadow-lg h-full">
                      <div
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.color} mb-4`}
                      >
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <p className="font-semibold text-gray-800">
                        {benefit.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl"
              >
                <h3 className="text-2xl font-bold mb-6">
                  {t("omni.ideal.title")}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {idealApplications.map((item, index) => (
                    <div key={index} className="text-center">
                      <div className="inline-flex p-4 bg-white/20 rounded-2xl mb-4">
                        {item.icon}
                      </div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm opacity-90">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "application" && (
            <motion.div
              key="application"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {applicationMethods.map((method, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.02 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
                  />
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl h-full">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-r ${method.color} rounded-2xl mb-4`}
                    >
                      <div className="text-white">{method.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {method.method}
                    </h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <ul className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className="flex items-start text-sm"
                        >
                          <span
                            className={`font-bold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mr-2`}
                          >
                            {stepIndex + 1}.
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
