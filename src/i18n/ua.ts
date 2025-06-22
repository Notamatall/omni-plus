import { contactOrderSectionT } from "./contact-order";
import { footerTexts } from "./footer";
import { globalChallengeSectionT } from "./global-challenge";
import { globalMissionSectionT } from "./global-mission";
import { humanBenefitsT } from "./human-benefits";
import { omniPlusSectionT } from "./omni-plus";

export default {
  translation: {
    ...contactOrderSectionT.ua,
    ...globalMissionSectionT.ua,
    ...globalChallengeSectionT.ua,
    ...omniPlusSectionT.ua,
    ...humanBenefitsT.ua,
    ...footerTexts.ua,

    section1: "Глобальний виклик",
    section2: "Глобальна місія",
    section3: "Omni+",
    section4: "Користь для людини",
    section5: "Зв’язатися з нами",
    logo: "Omni +",
    slogan: "Від природи — для природи",
  },
};
