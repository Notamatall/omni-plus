import { OmniLogo } from "./OmniLogo";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between flex-wrap gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-xl">
                <OmniLogo width={24} height={24} />
              </div>
              <span className="text-xl font-bold text-white-800">OMNI+</span>
            </div>
            <p className="text-gray-400">{t("slogan")}</p>
            <p className="mt-2 text-gray-400">
              {t("contact")}{" "}
              <a
                href="mailto:omniplusua@gmail.com"
                className="text-white hover:underline"
              >
                omniplusua@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{t("navigation")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#global-challenge" className="hover:text-white">
                  {t("sections.globalChallenge")}
                </a>
              </li>
              <li>
                <a href="#global-mission" className="hover:text-white">
                  {t("sections.globalMission")}
                </a>
              </li>
              <li>
                <a href="#human-benefits" className="hover:text-white">
                  {t("sections.humanBenefits")}
                </a>
              </li>
              <li>
                <a href="#omni-plus" className="hover:text-white">
                  {t("sections.omniPlus")}
                </a>
              </li>
              <li>
                <a href="#contact-order" className="hover:text-white">
                  {t("sections.contacts")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">{t("copyright")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {["f", "X", "in"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700">
                  <span className="text-xs">{icon}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
