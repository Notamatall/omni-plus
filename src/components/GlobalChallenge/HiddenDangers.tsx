import { AnimatePresence, motion } from "framer-motion";
import { DnaOff, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const HiddenDangers = () => {
  const { t } = useTranslation();
  const hiddenDangerInfo = t("hidden_danger", {
    returnObjects: true,
  }) as { title: string; sources: string; effects: string[] }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <h3>{t("hidden_dangers_subtitle")}</h3>
      <div className="space-y-4">
        {hiddenDangerInfo.map((faq, i) => (
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
              <h3 className=" text-gray-900 flex gap-3 ">
                <DnaOff color="red" />
                {faq.title}
              </h3>
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
                  className="overflow-hidden "
                >
                  <h4 className="px-12 text-xl text-gray-600">
                    <span className="text-green-600 uppercase">Sources: </span>
                    {faq.sources}
                  </h4>
                  <ul className="list-disc px-12 pb-5 text-gray-600">
                    {faq.effects.map((effect) => (
                      <li>{effect}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </>
  );
};
