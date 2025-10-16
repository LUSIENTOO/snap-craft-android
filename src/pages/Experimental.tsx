import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  "Analyzing the Effectiveness of Digital Image Processing in Plant Disease Detection",
  "PAHINGA: Powering Ahead with Hybridized Integrated Nanogenerator Arrays",
  "The Effectiveness of Electroencephalography (EEG), A Brain-Computer Interface (BCI) Platform for Clinical Purposes",
  "WASTE TO ENERGY: Its Viability and Impact on Health, Environment, and Economy",
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
