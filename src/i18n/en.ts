import { globalMissionSectionT } from "./global-mission";
import { humanBenefitsT } from "./human-benefits-section";
import { omniPlusSectionT } from "./omni-plus-section";

export default {
  translation: {
    ...globalMissionSectionT,
    ...humanBenefitsT,
    ...omniPlusSectionT,
    section1: "About us",
    section2: "Global Challenge",
    section3: "Global Mission",
    section4: "In Action",
    section5: "Advantages",
    section6: "Order now",
    logo: "Omni +",
    slogan: "Life Begins with Soil",
    section1_subtitle: `OMNI+ — a cutting-edge organic plant growth enhancer, powered by deep-peat nutrients and cold plasma innovation.`,
    section2_subtitle:
      "Land Degradation — A Global Challenge That Requires Innovative Solutions",
    omni_mission_description: "Our Mission",
    omni_mission_points: [
      "Restoring degraded, semi-arid, and desertified lands",
      "Preserving the microelement balance of fertile soils",
      "Enabling a shift to sustainable organic agriculture",
      "Supporting the production of super-organic crops using OMNI+, a 100% organic plant growth stimulator",
    ],

    omni_benefits_description: "A Natural Solution for Harsh Soils",
    omni_benefits_points: [
      "Promotes the formation of a fertile topsoil layer",
      "Helps retain dew in the upper layers of sand and poor soils",
      "Prevents moisture from draining into deeper layers",
      "Encourages new organic life in the surface soil",
    ],
    omni_deep_techology_description: "Deep Technology Meets Nature",
    omni_deep_technology_text: `Thousands of years of bioactive compounds in deep peat
        have been unlocked using cold plasma technology —
        delivering a natural boost to soil fertility and plant growth, even in the harshest environments.`,

    omni_power_of_organic_agriculture_description:
      "The Power of Organic Agriculture",
    omni_power_of_organic_agriculture_text:
      "Organic farming promotes balanced plant metabolism — and, as a result, better human and animal metabolism.",
    omni_power_of_organic_agriculture_points: [
      "Supports healthy metabolic function",
      "Enhances nutritional biochemistry of crops",
      "Reduces food toxicity",
      "Leads to cleaner, safer nutrition",
    ],
    hidden_dangers_subtitle:
      "Hidden Dangers in Our Food: Nitrates & Heavy Metals",
    omni_soils_are_dying_description:
      " Soils Are Dying. Crops Are Losing Nutritional Value",
    omni_soils_are_dying_points: [
      "Up to 40% of global land is degraded",
      "Degraded land increased from 0.7% to 9.5% in 4 years",
      "Soils are losing water and nutrient retention",
      "Crops contain fewer vitamins and more toxins",
    ],
    omni_toxic_legacy_description: "The Toxic Legacy of Chemical Farming",
    omni_toxic_legacy_text:
      "Chemical agriculture alters plant metabolism, disrupts biochemical processes, and increases the toxic burden on human and animal health.",
    omni_toxic_legacy_points: [
      "Disrupts healthy plant metabolism",
      "Leads to the accumulation of nitrates, heavy metals, and pesticides",
      "Contributes to chronic poisoning and increased cancer risk",
    ],

    hidden_danger: [
      {
        title: "Nitrates",
        sources:
          "Leafy greens (spinach, lettuce, parsley), root vegetables (beets, carrots, potatoes)",
        effects: [
          "Convert to nitrites, which impair oxygen transport by forming methemoglobin",
          'Linked to "blue baby syndrome" in infants',
          "React with amines to form nitrosamines — carcinogens that increase the risk of stomach, esophageal, and colon cancers",
        ],
      },
      {
        title: "Heavy Metals (Cadmium, Lead, Mercury, Arsenic)",
        sources: "Contaminated soil and water",
        effects: [
          "Cadmium: Damages kidneys and bones; linked to lung cancer",
          "Lead: Affects the central nervous system, especially in children (lower IQ, developmental delay)",
          "Mercury: Neurotoxic; harms kidneys, causes tremors and insomnia",
          "Arsenic: Causes skin disorders and cancers of the skin, lungs, and bladder",
        ],
      },
    ],
  },
};
