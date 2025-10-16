import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Choice from "./pages/Choice";
import ResearchPapers from "./pages/ResearchPapers";
import SIPChoice from "./pages/SIPChoice";
import Quantitative from "./pages/Quantitative";
import Qualitative from "./pages/Qualitative";
import Experimental from "./pages/Experimental";
import MixedMethod from "./pages/MixedMethod";
import Sheshata from "./pages/Sheshata";
import TechnologicalSIPs from "./pages/TechnologicalSIPs";
import EnvironmentalSIPs from "./pages/EnvironmentalSIPs";
import SIPCompendium from "./pages/SIPCompendium";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/choice" element={<Choice />} />
          <Route path="/research-papers" element={<ResearchPapers />} />
          <Route path="/sip-choice" element={<SIPChoice />} />
          <Route path="/quantitative" element={<Quantitative />} />
          <Route path="/qualitative" element={<Qualitative />} />
          <Route path="/experimental" element={<Experimental />} />
          <Route path="/mixed-method" element={<MixedMethod />} />
          <Route path="/sheshata" element={<Sheshata />} />
          <Route path="/technological-sips" element={<TechnologicalSIPs />} />
          <Route path="/environmental-sips" element={<EnvironmentalSIPs />} />
          <Route path="/sip-compendium" element={<SIPCompendium />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
