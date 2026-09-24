import React from 'react';
import { ArrowDown, Compass } from 'lucide-react';
import { HeroNetwork } from './HeroNetwork';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-24 px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#070c18] via-[#091122] to-[#070c18]">
      {/* Discreet Animated Network in background */}
      <HeroNetwork />

      {/* Subtle radial ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1d4ed8]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#c5a880]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Identification */}
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-white/10 bg-white/[0.03] backdrop-blur-sm rounded-none text-slate-300 text-xs tracking-[0.25em] uppercase font-medium">
          <Compass className="w-3.5 h-3.5 text-[#c5a880]" />
          <span>DOMÍNIO DAS LÍNGUAS</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.15] max-w-3xl text-balance">
          UM MOVIMENTO DE EXPANSÃO COMEÇA COM UMA NOVA VISÃO DE MUNDO.
        </h1>

        {/* Narrative Text */}
        <p className="mt-8 text-base sm:text-lg text-slate-300/90 leading-relaxed max-w-2xl font-light">
          Estamos entrando em uma nova fase. Uma fase em que aprender uma língua não significa apenas aprender palavras, regras ou frases.
        </p>

        <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl font-light">
          Significa ampliar o lugar onde você pode estar, as pessoas com quem pode conversar, os negócios que pode compreender, as experiências que pode viver e as possibilidades que consegue enxergar.
        </p>

        {/* Highlight Quote */}
        <div className="mt-10 py-5 px-8 border-y border-[#c5a880]/30 bg-[#0a1428]/40 backdrop-blur-sm max-w-xl">
          <p className="text-lg sm:text-xl font-serif italic text-[#f8f9fa] tracking-wide">
            “Seu mundo não precisa terminar onde termina o seu idioma.”
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={onExploreClick}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] text-[#070c18] bg-[#c5a880] hover:bg-[#d4af37] transition-all duration-300 shadow-lg shadow-[#c5a880]/10 cursor-pointer"
          >
            <span>CONHECER O ACESSO</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>
        </div>

        {/* Subtle context note */}
        <div className="mt-12 flex items-center gap-3 text-xs text-slate-400 font-light">
          <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880]" />
          <span>Acesso confidencial para convidados e pessoas próximas ao projeto</span>
        </div>
      </div>
    </section>
  );
};
