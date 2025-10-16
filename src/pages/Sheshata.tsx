import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  "SHESHATA Research Compendium 2015",
  "SHESHATA Research Compendium 2016",
  "SHESHATA Research Compendium 2017",
  "SHESHATA Research Compendium 2018",
  "SHESHATA Research Compendium 2019",
  "SHESHATA Research Compendium 2020",
  "SHESHATA Research Compendium 2021",
  "SHESHATA Research Compendium 2022",
  "SHESHATA Research Compendium 2023",
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
