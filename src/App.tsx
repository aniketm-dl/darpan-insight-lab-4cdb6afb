import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import Survey from "./pages/Survey";
import Playground from "./pages/Playground";

// Import Space Grotesk font
import '@fontsource/space-grotesk';

// Import and set favicon
import faviconUrl from "@/assets/favicon-dl-large.png";

// Set favicon dynamically
const setFavicon = () => {
  const existingLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
  const link = existingLink || document.createElement('link') as HTMLLinkElement;
  link.type = 'image/png';
  link.rel = 'shortcut icon';
  link.href = faviconUrl;
  if (!existingLink) {
    document.getElementsByTagName('head')[0].appendChild(link);
  }
};

// Set favicon on load
if (typeof window !== 'undefined') {
  setFavicon();
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/playground" element={<Playground />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/survey" element={<Survey />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
