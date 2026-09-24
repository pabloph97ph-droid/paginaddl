import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  onNavigateToAccess: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigateToAccess }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.08] bg-[#070c18]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Zone 1: Single text element brand wordmark */}
        <a
          href="#"
          className="text-base sm:text-lg font-serif tracking-widest font-semibold text-[#f8f9fa] hover:text-[#c5a880] transition-colors whitespace-nowrap"
        >
          DOMÍNIO DAS LÍNGUAS
        </a>

        {/* Zone 2: 4 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-wider font-medium text-slate-300">
          <button
            onClick={() => scrollToSection('por-que-ddl')}
            className="hover:text-[#c5a880] transition-colors cursor-pointer"
          >
            Visão
          </button>
          <button
            onClick={() => scrollToSection('metodologia')}
            className="hover:text-[#c5a880] transition-colors cursor-pointer"
          >
            Metodologia
          </button>
          <button
            onClick={() => scrollToSection('comunidade')}
            className="hover:text-[#c5a880] transition-colors cursor-pointer"
          >
            Comunidade
          </button>
          <button
            onClick={() => scrollToSection('bonuses')}
            className="hover:text-[#c5a880] transition-colors cursor-pointer"
          >
            Estrutura
          </button>
        </nav>

        {/* Zone 3: Primary action button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onNavigateToAccess}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#070c18] bg-[#c5a880] hover:bg-[#d4af37] rounded-sm transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap"
          >
            Conhecer o Acesso
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu hamburger */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-white/[0.08] bg-[#0a1124] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection('por-que-ddl')}
              className="text-left py-2 hover:text-[#c5a880] transition-colors"
            >
              Visão
            </button>
            <button
              onClick={() => scrollToSection('metodologia')}
              className="text-left py-2 hover:text-[#c5a880] transition-colors"
            >
              Metodologia
            </button>
            <button
              onClick={() => scrollToSection('comunidade')}
              className="text-left py-2 hover:text-[#c5a880] transition-colors"
            >
              Comunidade
            </button>
            <button
              onClick={() => scrollToSection('bonuses')}
              className="text-left py-2 hover:text-[#c5a880] transition-colors"
            >
              Estrutura
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToAccess();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#070c18] bg-[#c5a880] rounded-sm shadow-md"
            >
              Conhecer o Acesso
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
