import { MobileLayout } from "@/components/MobileLayout";
import { ResearchList } from "@/components/ResearchList";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

const researchPapers = [
  { 
    title: "Harnessing Plant-Based Electrolytes_ The Electrochemical Potential of Garlic (Allium sativum) and Onion (Allium cepa)",
  pdfUrl: "/pdfs/Harnessing Plant-Based Electrolytes_ The Electrochemical Potential of Garlic (Allium sativum) and Onion (Allium cepa).pdf"
  },
  { 
    title: "Integrating Short Message Service and Internet of Things Sensor for Advanced Soil Moisture and Temperature Monitoring System in Agriculture",
  pdfUrl: "/pdfs/Integrating Short Message Service and Internet of Things Sensor for Advanced Soil Moisture and Temperature Monitoring System in Agriculture.pdf"
  },
];

const TechnologicalSIPs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="Technological SIP" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default TechnologicalSIPs;
