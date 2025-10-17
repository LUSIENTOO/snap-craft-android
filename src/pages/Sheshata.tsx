import { MobileLayout } from "@/components/MobileLayout";
import { ResearchList } from "@/components/ResearchList";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

const researchPapers = [
  { 
    title: "SHESHATA Research Compendium",
  pdfUrl: "/pdfs/SHESHATA HCCC Research Compendium.pdf"
  },
];

const Sheshata = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="SHESHATA Compendium" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default Sheshata;
