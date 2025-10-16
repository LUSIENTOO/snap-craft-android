import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ResearchList } from "@/components/ResearchList";

const researchPapers = [
  "ALTER: Lived Experiences of People Who Choose to Undergo Cosmetic Surgery",
  "NAVIGATING PARENTHOOD: Stories from Parents Raising Children with Special Needs",
  "SOLITARY FATHERS: Parenting, Employment, and Mental Challenges",
  "THE EMERGENCE OF FACEBOOK IN THE WORLD OF E-COMMERCE: Narratives of Online Sellers",
  "The Untold Stories of Rice Farmers in Davao City",
  "Unveiling the True Colors of Child Malnutrition",
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
