import { contactOrderSectionT } from "./contact-order";
import { footerTexts } from "./footer";
import { globalChallengeSectionT } from "./global-challenge";
import { globalMissionSectionT } from "./global-mission";
import { humanBenefitsT } from "./human-benefits";
import { omniPlusSectionT } from "./omni-plus";

export default {
  translation: {
    ...contactOrderSectionT.eng,
    ...globalMissionSectionT.eng,
    ...globalChallengeSectionT.eng,
    ...omniPlusSectionT.eng,
    ...humanBenefitsT.eng,
    ...footerTexts.en,
    section1: "Global Challenge",
    section2: "Global Mission",
    section3: "Omni+",
    section4: "Human Benefits",
    section5: "Contact Us",
    logo: "Omni +",
    slogan: "From nature, for nature",
  },
};
