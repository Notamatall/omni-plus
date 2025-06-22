import { motion } from "framer-motion";
import { useRef } from "react";

// Stats Section
export const StatsSection = () => {
  const ref = useRef(null);
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
