import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  { 
    title: "Comparing the Effectiveness of Clementine (Citrus clementina) and Calamansi (Citrus microcarpa) in Mold Prevention",
    pdfUrl: "/pdfs/Comparing_the_Effectiveness_of_Clementine_Citrus_clementina_and_Calamansi_Citrus_microcarpa_in_Mold_Preventation.pdf"
  },
  { 
    title: "Effectivity of Avocado (Persea americana) Peels as Rust Remover in Metals",
    pdfUrl: "/pdfs/Effectivity_of_Avocado_Persea_americana_Peels_as_Rust_Remover_in_Metals.pdf"
  },
  { 
    title: "Papaya (Carica papaya) Peels as Alternative Source of Paper",
    pdfUrl: "/pdfs/Papaya_Carica_papaya_Peels_as_Alternative_Source_of_Paper.pdf"
  },
  { 
    title: "Rambutan (Nephelium lappaceum) Seeds as Alternative Food Preservative",
    pdfUrl: "/pdfs/Rambutan_Nephelium_lappaceum_Seeds_as_Alternative_Food_Preservative.pdf"
  },
  { 
    title: "Sweet Potato (Ipomoea batatas) Peels as an Alternative Natural Solvent-Based Adhesive",
    pdfUrl: "/pdfs/Sweet_Potato_Ipomoea_batatas_Peels_as_an_Alternative_Natural_Solvent-Based_Adhesive.pdf"
  },
  { 
    title: "The Effectivity of Saba Banana (Musa acuminata) with Coconut Water (Cocos nucifera L.) in Removing Dandruff",
    pdfUrl: "/pdfs/The_Effectivity_of_Saba_Banana_Musa_acuminata_with_Coconut_Water_Cocus_nucifera_L._in_Removing_Dandruff.pdf"
  },
  { 
    title: "The Feasibility of Corn Husk (Zea mays) as an Alternative Paper Egg Tray",
    pdfUrl: "/pdfs/The_Feasibility_of_Corn_Husk_Zea_maize_as_an_Alternative_Paper_Egg_Tray.pdf"
  },
  { 
    title: "The Feasibility of Pot Marigold (Calendula officinalis) as Stress Relief Ointment",
    pdfUrl: "/pdfs/The_Feasibility_of_Pot_Marigold_Calendula_officinalis_as_Stress_Relief_Ointment.pdf"
  },
  { 
    title: "The Feasibility of using Chitosan and Glycerin with Cocoa (Theobroma cacao) Pod Husk Flour as Starch to Create Bioplastic Films for Food Packaging",
    pdfUrl: "/pdfs/The_Feasibility_of_using_Chitosan_and_Glycerin_with_Cocoa_Theobroma_cacao_Pod_Husk_Flour_as_Starch_to_Create_Bioplastic_Films_for_Food_Packaging.pdf"
  },
  { 
    title: "Utilization of Banana Fibre (Musa fibre) as Paper Towel Tissue",
    pdfUrl: "/pdfs/Utilization_of_Banana_Fibre_Musa_fibre_as_Paper_Towel_Tissue.pdf"
  },
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
