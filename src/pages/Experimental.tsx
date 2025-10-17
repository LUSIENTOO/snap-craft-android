import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  {
    title: "Analyzing the Effectiveness of Digital Image Processing in Plant Disease Detection",
    pdfUrl: "/pdfs/Analyzing_the_Effectiveness_of_Digital_Image_Processing_in_Plant_Disease_Detection.pdf"
  },
  {
    title: "PAHINGA: Powering Ahead with Hybridized Integrated Nanogenerator Arrays",
    pdfUrl: "/pdfs/PAHINGA_Powering_Ahead_with_Hybridized_Integrated_Nanogenerator_Arrays.pdf"
  },
  {
    title: "The Effectiveness of Electroencephalography (EEG), A Brain-Computer Interface (BCI) Platform for Clinical Purposes",
    pdfUrl: "/pdfs/The_Effectiveness_of_Electroencephalography_EEG_A_Brain-Computer_Interface_BCI_Platform_for_Clinical_Purposes.pdf"
  },
  {
    title: "WASTE TO ENERGY: Its Viability and Impact on Health, Environment, and Economy",
    pdfUrl: "/pdfs/WASTE_TO_ENERGY_Its_Viability_and_Impact_on_Health_Environment_and_Economy.pdf"
  },
];

const Experimental = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="Experimental Research" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default Experimental;
