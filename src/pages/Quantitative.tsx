import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  { title: "A Content Analysis Study on the Factors Affecting the Purchasing Behavior of the Millennial Consumers" },
  { title: "An Assessment of the ICT Skills, Practices, Perceptions, and Barriers of ICT Use Among Secondary School Students" },
  { title: "Assessing Flood Vulnerabilities in Barangay Riverside, Calinan Davao City" },
  { title: "Assessing the Capacity of the New Carmen Sanitary Landfill to Hold the Solid Waste Generated Via-A-Via the Population Growth for the Next Five Years" },
  { title: "Assessing the Level of Safety of Holy Cross College of Calinan, Inc." },
  { title: "ELEVATING SATISFACTION: Library System Impact on User Material Access and Satisfaction" },
  { title: "Examining the Factors Affecting the Business Performance of Sole Proprietors in Calinan Poblacion" },
  { title: "Factors Affecting the Financial Literacy of SME Employees" },
  { title: "The Correlation Between Basic Mathematics Skills and Attitude" },
];

const Quantitative = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="Quantitative Research" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default Quantitative;
