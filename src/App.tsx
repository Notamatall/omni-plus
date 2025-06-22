import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Leaf, Plus, Minus, ArrowRight } from "lucide-react";
import "./styles/app.css";
import { Navigation } from "./components/Navigation";
import { ParticleCanvas } from "./components/ParticleCanvas";
import { HeroSection } from "./components/HeroSection";
import { useTranslation } from "react-i18next";
import { NaturalSolution } from "./components/AboutUs/NaturalSolution";
import { OurMission } from "./components/AboutUs/OurMission";
import { DeepTechnology } from "./components/AboutUs/DeepTechnology";
import { GlobalMissionSection } from "./components/GlobalMission/GlobalMission";
import { OmniCatalystSection } from "./components/OmniPlus/OmniPlusSection";
import { HumanBenefitsSection } from "./components/HumanBenefits/HumanBenefitsSection";
import { GlobalChallengeSection } from "./components/GlobalChallenge/GlobalChallengeSection";
import { ContactOrderSection } from "./components/ContactOrder/ContactOrderSection";

// Stats Section
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const stats = [
    { value: "98%", label: "Crop Yield Increase" },
    { value: "50%", label: "Water Savings" },
    { value: "30%", label: "Cost Reduction" },
    { value: "100%", label: "Natural Ingredients" },
  ];

  return (
    <section ref={ref} className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does GreenGrow fertilizer work?",
      answer:
        "Our AI-powered fertilizer system analyzes your soil composition in real-time and delivers precisely formulated nutrients. This ensures optimal growth while minimizing waste and environmental impact.",
    },
    {
      question: "Is it suitable for all crop types?",
      answer:
        "Yes! GreenGrow is designed to work with a wide variety of crops. Our AI system customizes the nutrient blend based on your specific crop requirements and soil conditions.",
    },
    {
      question: "How quickly can I see results?",
      answer:
        "Most farmers report visible improvements within 2-3 weeks of application. Full benefits typically manifest within a complete growing season.",
    },
    {
      question: "What makes it environmentally friendly?",
      answer:
        "We use 100% natural ingredients, reduce water usage by up to 50%, and our precision application system minimizes runoff and soil contamination.",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                {openIndex === i ? (
                  <Minus className="w-5 h-5 text-green-600" />
                ) : (
                  <Plus className="w-5 h-5 text-green-600" />
                )}
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
                    <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main Sections
const MainSections = () => {
  const { t } = useTranslation();

  return (
    <>
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
      <GlobalChallengeSection />
      <GlobalMissionSection />
      <OmniCatalystSection />
      <HumanBenefitsSection />
      <ContactOrderSection />
      <StatsSection />

      <section id="section4" className="py-20 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold mb-6"
          >
            Section 4 Title
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-10 max-w-3xl mx-auto"
          >
            Join thousands of farmers who have transformed their yields with
            GreenGrow
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all cursor-pointer"
          >
            Start Your Journey
          </motion.button>
        </div>
      </section>

      <section id="section5" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 5 Title
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-12 rounded-3xl shadow-lg">
              <blockquote className="text-2xl text-gray-700 italic leading-relaxed">
                "GreenGrow has revolutionized our farming operation. The
                AI-driven approach has increased our yields while reducing our
                environmental impact. It's truly the future of sustainable
                agriculture."
              </blockquote>
              <div className="mt-8 flex items-center">
                <div className="w-16 h-16 bg-green-200 rounded-full"></div>
                <div className="ml-4">
                  <div className="font-bold text-gray-900">John Farmer</div>
                  <div className="text-gray-600">Sustainable Farms Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      <section id="section6" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 6 Title
          </motion.h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: step * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold text-green-600">
                  {step}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Step {step}
                </h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="section7"
        className="py-20 bg-gradient-to-br from-green-50 to-green-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="order-2 lg:order-1"
            >
              <div className="aspect-video bg-white rounded-3xl shadow-lg flex items-center justify-center">
                <p className="text-gray-400">Video/Image Placeholder</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Section 7 Title
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Discover how our innovative approach to fertilization is
                changing the game for farmers worldwide.
              </p>
              <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all cursor-pointer">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="section8" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 8 Title
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: item * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all"
              >
                <div className="text-4xl font-bold text-green-600 mb-3">
                  {item * 25}%
                </div>
                <div className="text-gray-700 font-medium">Metric {item}</div>
                <div className="text-sm text-gray-500 mt-2">
                  Lorem ipsum dolor sit amet
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="section9" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-16"
          >
            Section 9 Title
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((product) => (
              <motion.div
                key={product}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: product * 0.05 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 relative overflow-hidden">
                  <Leaf className="absolute bottom-4 right-4 w-24 h-24 text-green-300/50 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Product {product}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Advanced fertilizer solution designed for maximum efficiency
                    and sustainability.
                  </p>
                  <div className="flex items-center text-green-600 font-semibold">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="w-8 h-8 text-green-400" />
              <span className="text-2xl font-bold">GreenGrow</span>
            </div>
            <p className="text-gray-400">
              Nurturing growth, sustaining life through intelligent farming
              solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 GreenGrow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">f</span>
              </div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">X</span>
              </div>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                <span className="text-xs">in</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <>
      <div className="scroll-container">
        <ParticleCanvas />
        <Navigation />
        <HeroSection />
        <MainSections />
        <Footer />
        <div className="relative z-10"></div>
      </div>
    </>
  );
};

export default App;
