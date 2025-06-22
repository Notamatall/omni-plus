import { motion } from "framer-motion";
import {
  Heart,
  Leaf,
  Apple,
  Sparkles,
  ShieldCheck,
  Zap,
  FlaskConical,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export const HumanBenefitsSection = () => {
  const { t } = useTranslation();

  const keyBenefits = [
    {
      icon: <Apple className="w-6 h-6" />,
      title: t("humanBenefits.keyBenefits.nutrition.title"),
      description: t("humanBenefits.keyBenefits.nutrition.description"),
      color: "from-red-400 to-pink-600",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: t("humanBenefits.keyBenefits.health.title"),
      description: t("humanBenefits.keyBenefits.health.description"),
      color: "from-pink-400 to-rose-600",
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: t("humanBenefits.keyBenefits.organic.title"),
      description: t("humanBenefits.keyBenefits.organic.description"),
      color: "from-green-400 to-emerald-600",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t("humanBenefits.keyBenefits.taste.title"),
      description: t("humanBenefits.keyBenefits.taste.description"),
      color: "from-purple-400 to-indigo-600",
    },
  ];

  const certifications = [
    { name: "WHO", fullName: t("humanBenefits.certifications.who") },
    { name: "EFSA", fullName: t("humanBenefits.certifications.efsa") },
    { name: "IARC", fullName: t("humanBenefits.certifications.iarc") },
  ];

  return (
    <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-60" />

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
            className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-pink-400 to-rose-600 shadow-lg"
          >
            <Heart className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              {t("humanBenefits.title")}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t("humanBenefits.subtitle")}
          </p>
        </motion.div>

        {/* Main content card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Main message */}
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                {t("humanBenefits.mainMessage.title")}
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  {t("humanBenefits.mainMessage.paragraph1")}
                </p>
                <p className="text-lg leading-relaxed">
                  {t("humanBenefits.mainMessage.paragraph2")}
                </p>
              </div>

              {/* Key highlight */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-green-500 rounded-xl">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {t("humanBenefits.highlight.title")}
                    </h4>
                    <p className="text-gray-600">
                      {t("humanBenefits.highlight.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right side - Visual element */}
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-600 rounded-3xl blur-3xl opacity-30" />
                <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-12 text-center">
                  <FlaskConical className="w-24 h-24 mx-auto text-pink-600 mb-4" />
                  <p className="text-xl font-semibold text-gray-800">
                    {t("humanBenefits.organic.title")}
                  </p>
                  <p className="text-gray-600 mt-2">
                    {t("humanBenefits.organic.subtitle")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Key Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {keyBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}
              />
              <div className="relative bg-white rounded-2xl p-6 shadow-lg h-full">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${benefit.color} mb-4`}
                >
                  <div className="text-white">{benefit.icon}</div>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center space-x-2 mb-6">
            <ShieldCheck className="w-6 h-6 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-800">
              {t("humanBenefits.certifications.title")}
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 bg-white rounded-full shadow-lg border border-gray-200"
              >
                <div className="text-lg font-bold text-gray-800">
                  {cert.name}
                </div>
                <div className="text-sm text-gray-500">{cert.fullName}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
