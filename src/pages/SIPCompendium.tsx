import { MobileLayout } from "@/components/MobileLayout";
import { ResearchList } from "@/components/ResearchList";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

const researchPapers = [
  { 
    title: "HCCC Research SIP Compendium",
  pdfUrl: "/pdfs/HCCC Compendium of SIP.pdf"
  },
];

const SIPCompendium = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="SIP Compendium 2015-2023" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default SIPCompendium;
