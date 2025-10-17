import { MobileLayout } from "@/components/MobileLayout";
import { ResearchList } from "@/components/ResearchList";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

const researchPapers = [
  { 
    title: "The Relationship of the Influence of Gadget Use to the Work Values of Millennial Employees",
    pdfUrl: "/pdfs/The_Relationship_of_the_Influence_of_Gadget_Use_to_the_Work_Values_of_Millennial_Employees.pdf"
  },
  { 
    title: "The Relationship of Students Engagement to Hands-on Activity and Students Critical Thinking Skills",
    pdfUrl: "/pdfs/The_Relationship_of_Students_Engagement_to_Hands_on_Activity_and_Students_Critical_Thinking_Skills.pdf"
  },
  { 
    title: "The Relationship Between the Level of Participation in Different Mitigation Programs and Level of Preparedness of the Barangay Functionaries in Barangay Wangan: A Correlational Study",
    pdfUrl: "/pdfs/The_Relationship_Between_the_Level_of_Participation_in_Different_Mitigation_Programs_and_Level_of_Preparedness_of_the_Barangay_Functionaries_in_Barangay_Wangan_A_Correlational_Study.pdf"
  },
  { 
    title: "The Relationship Between Students' Comprehension and Math Problem-Solving Skills",
    pdfUrl: "/pdfs/The_Relationship_Between_Students_Comprehension_and_Math_Problem-Solving_Skills.pdf"
  },
  { 
    title: "The Relationship Between Entrance Examination Scores and the Academic Performance of the Junior High School Students",
    pdfUrl: "/pdfs/The_Relationship_Between_Entrance_Examination_Scores_and_the_Academic_Performance_of_the_Junior_High_School_Students.pdf"
  },
  { 
    title: "The Level of the Impact of Covid-19 Pandemic to the Organizational Performance Of Small and Medium-Sized Enterprises (SMEs) in Calinan Poblacion",
    pdfUrl: "/pdfs/The_Level_of_the_Impact_of_Covid-19_Pandemic_to_the_Organizational_Performance_Of_Small_and_Medium-Sized_Enterprises_SMEs_in_Calinan_Poblacion.pdf"
  },
  { 
    title: "The Impact of Covid-19 Pandemic on the Water Demand in Calinan Poblacion Davao City",
    pdfUrl: "/pdfs/The_Impact_of_Covid-19_Pandemic_on_the_Water_Demand_in_Calinan_Poblacion_Davao_City.pdf"
  },
  { 
    title: "The Correlation Between Basic Mathematics Skills and Attitude Towards Mathematics",
    pdfUrl: "/pdfs/The_Correlation_Between_Basic_Mathematics_Skills_and_Attitude_Towards_Mathematics.pdf"
  },
  { 
    title: "Factors Affecting the Financial Literacy of SME Employees",
    pdfUrl: "/pdfs/Factors_Affecting_the_Financial_Literacy_of_SME_Employees.pdf"
  },
  { 
    title: "Examining the Factors Affecting the Business Performance of Sole Proprietors in Calinan Poblacion",
    pdfUrl: "/pdfs/Examining_the_Factors_Affecting_the_Business_Performance_of_Sole_Proprietors_in_Calinan_Poblacion.pdf"
  },
  { 
    title: "A Content Analysis Study on the Factors Affecting the Purchasing Behavior of the Millennial Consumers",
    pdfUrl: "/pdfs/A_Content_Analysis_Study_on_the_Factors_Affecting_the_Purchasing_Behavior_of_the_Millennial_Consumers.pdf"
  },
  { 
    title: "An Assessment of the ICT Skills, Practices, Perceptions, and Barriers of ICT Use Among Secondary School Students",
  pdfUrl: "/pdfs/An Assessment of the ICT Skills, Practices, Perceptions, and Barriers of ICT Use Among Secondary School Students.pdf"
  },
  { 
    title: "Assessing Flood Vulnerabilities in Barangay Riverside, Calinan Davao City",
  pdfUrl: "/pdfs/Assessing Flood Vulnerabilities in Barangay Riverside, Calinan Davao City.pdf"
  },
  { 
    title: "Assessing the Capacity of the New Carmen Sanitary Landfill to Hold the Solid Waste Generated Vis-A-Vis the Population Growth for the Next Five Years",
  pdfUrl: "/pdfs/Assessing the Capacity of the New Carmen Sanitary Landfill to Hold the Solid Waste Generated Vis-A-Vis the Population Growth for the Next Five Years.pdf"
  },
  { 
    title: "Assessing the Level of Safety of Holy Cross College of Calinan, Inc.",
  pdfUrl: "/pdfs/Assessing the Level of Safety of Holy Cross College of Calinan, Inc..pdf"
  },
  { 
    title: "ELEVATING SATISFACTION Library System Impact on User Material Access and Satisfaction",
  pdfUrl: "/pdfs/ELEVATING SATISFACTION_ Library System Impact on User Material Access and Satisfaction.pdf"
  },
];

const Quantitative = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <MobileLayout title="Quantitative Research" showBack={true} showMenu={true}>
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        onClear={() => setSearchTerm("")}
      />
      <ResearchList items={researchPapers} searchTerm={searchTerm} />
    </MobileLayout>
  );
};

export default Quantitative;
