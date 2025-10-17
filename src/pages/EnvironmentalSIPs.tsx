import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  { title: "Comparing the Effectiveness of Clementine (Citrus clementina) and Calamansi (Citrus microcarpa) in Mold Prevention" },
  { title: "Effectivity of Avocado (Persea americana) Peels as Rust Remover in Metals" },
  { title: "Papaya (Carica papaya) Peels as Alternative Source of Paper" },
  { title: "Rambutan (Nephelium lappaceum) Seeds as Alternative Food Preservative" },
  { title: "Sweet Potato (Ipomoea batatas) Peels as an Alternative Natural Solvent-Based Adhesive" },
  { title: "The Effectivity of Saba Banana (Musa acuminata) with Coconut Water (Cocos nucifera L.) in Removing Dandruff" },
  { title: "The Feasibility of Corn Husk (Zea mays) as an Alternative Paper Egg Tray" },
  { title: "The Feasibility of Egg (Arnodia caprulis) as Glintillar In Slimes" },
];

const EnvironmentalSIPs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="Environmental SIPs" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default EnvironmentalSIPs;
