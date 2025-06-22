import { motion } from "framer-motion";
import {
  ShoppingCart,
  Phone,
  FileText,
  Users,
  Send,
  Check,
  Loader,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const ContactOrderSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    region: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {});

  useEffect(() => {
    const form = document.getElementById("form");
    if (form) {
      form.addEventListener("submit", formSubmit);

      async function formSubmit(e: any) {
        e.preventDefault();
        const formData = new FormData(e.target);
        try {
          setIsSubmitting(true);
          const response = await fetch("https://getform.io/f/bronreea", {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
            },
          });
          console.log(response);
        } catch (ex) {
          console.error(ex);
        } finally {
          setIsSubmitting(false);
          setIsSubmitted(true);
        }
      }
    }
  }, []);

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: t("contactOrder.features.dealers.title"),
      description: t("contactOrder.features.dealers.description"),
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("contactOrder.features.pricing.title"),
      description: t("contactOrder.features.pricing.description"),
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: t("contactOrder.features.support.title"),
      description: t("contactOrder.features.support.description"),
    },
  ];

  return (
    <section id="contact-order" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0  opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
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
            <ShoppingCart className="w-10 h-10 text-white" />
          </motion.div>

          <h2 className="text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              {t("contactOrder.title")}
            </span>
          </h2>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            {t("contactOrder.subtitle")}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            action="https://getform.io/f/bronreea"
            method="POST"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t("contactOrder.form.title")}
              </h3>

              <div className="space-y-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("contactOrder.form.name")} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder={t("contactOrder.form.namePlaceholder")}
                />

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("contactOrder.form.phone")} *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder={t("contactOrder.form.phonePlaceholder")}
                />

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("contactOrder.form.email")} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder={t("contactOrder.form.emailPlaceholder")}
                />

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("contactOrder.form.region")}
                </label>
                <input
                  type="text"
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  placeholder={t("contactOrder.form.regionPlaceholder")}
                />

                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("contactOrder.form.message")}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all resize-none"
                  placeholder={t("contactOrder.form.messagePlaceholder")}
                />
                <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: "none !important" }}
                ></input>
                <motion.button
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: 1.02 }}
                  type="submit"
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? "bg-green-600"
                      : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  } shadow-lg hover:shadow-xl disabled:opacity-70 cursor-pointer`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-5 h-5 animate-spin" />
                      <span>{t("contactOrder.form.submitting")}</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>{t("contactOrder.form.submitted")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t("contactOrder.form.submit")}</span>
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl">
                    <div className="text-green-600">{feature.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Contact Info */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
