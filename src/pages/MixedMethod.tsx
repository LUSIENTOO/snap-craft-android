import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  "Mixed Method Research on Educational Technology Integration",
  "Community Health Assessment Using Mixed Methods Approach",
  "Social Media Impact: A Mixed Method Study",
];

const MixedMethod = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="Mixed Method Research" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default MixedMethod;
