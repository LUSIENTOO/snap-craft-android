import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  { 
    title: "SOLITARY FATHERS: Parenting, Employment, and Mental Challenges",
    pdfUrl: "/pdfs/SOLITARY_FATHERS_Parenting_Employment_and_Mental_Challenges.pdf"
  },
  { 
    title: "THE EMERGENCE OF FACEBOOK IN THE WORLD OF E-COMMERCE: Narratives of Online Sellers",
    pdfUrl: "/pdfs/THE_EMERGENCE_OF_FACEBOOK_IN_THE_WORLD_OF_E-_COMMERCE_Narratives_of_Online_Sellers.pdf"
  },
  { 
    title: "The Untold Stories of Rice Farmers in Davao City",
    pdfUrl: "/pdfs/The_Untold_Stories_of_Rice_Farmers_in_Davao_City.pdf"
  },
  { 
    title: "Unveiling the True Colors of Child Malnutrition",
    pdfUrl: "/pdfs/Unveiling_the_True_Colors_of_Child_Malnutrition.pdf"
  },
];

const Qualitative = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="QUALIRESEARCH" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default Qualitative;
