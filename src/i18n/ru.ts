import { contactOrderSectionT } from "./contact-order";
import { footerTexts } from "./footer";
import { globalChallengeSectionT } from "./global-challenge";
import { globalMissionSectionT } from "./global-mission";
import { humanBenefitsT } from "./human-benefits";
import { omniPlusSectionT } from "./omni-plus";

export default {
  translation: {
    ...contactOrderSectionT.ru,
    ...globalMissionSectionT.ru,
    ...globalChallengeSectionT.ru,
    ...omniPlusSectionT.ru,
    ...humanBenefitsT.ru,
    ...footerTexts.ru,

    section1: "Глобальный вызов",
    section2: "Глобальная миссия",
    section3: "Omni+",
    section4: "Польза для человека",
    section5: "Связаться с нами",
    logo: "Omni +",
    slogan: "От природы, к природе",
  },
};
