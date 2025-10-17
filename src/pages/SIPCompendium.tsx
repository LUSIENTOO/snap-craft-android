import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  { title: "SIP Compendium 2015 - Environmental Projects" },
  { title: "SIP Compendium 2016 - Technological Innovations" },
  { title: "SIP Compendium 2017 - Community Development" },
  { title: "SIP Compendium 2018 - Health and Wellness" },
  { title: "SIP Compendium 2019 - Sustainable Solutions" },
  { title: "SIP Compendium 2020 - Digital Transformation" },
  { title: "SIP Compendium 2021 - Climate Action" },
  { title: "SIP Compendium 2022 - Education Technology" },
  { title: "SIP Compendium 2023 - Innovation and Research" },
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
