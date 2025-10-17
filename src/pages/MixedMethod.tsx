import { MobileLayout } from "@/components/MobileLayout";
import { ResearchList } from "@/components/ResearchList";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

const researchPapers = [
  { 
    title: "Level of Perceived Skills and Employability Skills of the First Batch of Graduates of K-12 Basic Education Program ",
    pdfUrl: "/pdfs/Level of Perceived Skills and Employability Skills of the First Batch of Graduates of K-12 Basic Education Program .pdf"
  },
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
