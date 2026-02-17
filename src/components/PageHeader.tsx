import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

interface NavLink {
  label: string;
  section: string;
}

interface PageHeaderProps {
  navLinks: NavLink[];
  showBack?: boolean;
}

const PageHeader = ({ navLinks, showBack = false }: PageHeaderProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="section-container flex items-center h-16 gap-4">
        {showBack && (
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors text-sm shrink-0"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back</span>
          </button>
        )}

        <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide flex-1 min-w-0">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => scrollToSection(link.section)}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm px-2.5 py-1.5 whitespace-nowrap shrink-0"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-baseline shrink-0 ml-auto">
          <span className="text-lg font-bold text-foreground tracking-tight">DARPAN</span>
          <span className="text-lg font-bold text-primary tracking-tight ml-0.5">LABS</span>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
