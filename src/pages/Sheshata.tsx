import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  { title: "SHESHATA Research Compendium 2015" },
  { title: "SHESHATA Research Compendium 2016" },
  { title: "SHESHATA Research Compendium 2017" },
  { title: "SHESHATA Research Compendium 2018" },
  { title: "SHESHATA Research Compendium 2019" },
  { title: "SHESHATA Research Compendium 2020" },
  { title: "SHESHATA Research Compendium 2021" },
  { title: "SHESHATA Research Compendium 2022" },
  { title: "SHESHATA Research Compendium 2023" },
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
