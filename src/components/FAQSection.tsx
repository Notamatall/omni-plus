import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export const FAQSection = () => {
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
