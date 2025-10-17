import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  { title: "Harnessing Plant-Based Electrolytes: The Electrochemical Potential of Garlic (Allium sativum and Onion (Allium cepa)" },
  { title: "Integrating Short Message Service and Internet of Things" },
  { title: "Sensor for Advanced Soil Moisture and Temperature Monitoring System in Agriculture" },
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
