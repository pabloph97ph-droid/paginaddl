import React from 'react';
import { Compass } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-28 px-6 lg:px-8 border-t border-white/[0.06] bg-[#060a15] relative overflow-hidden text-center">
      {/* Subtle background circular ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#c5a880]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="inline-flex items-center justify-center w-10 h-10 border border-[#c5a880]/30 mb-8 text-[#c5a880]">
          <Compass className="w-5 h-5" />
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight max-w-3xl mx-auto text-balance">
          O MUNDO NÃO É TÃO GRANDE QUANDO VOCÊ CONSEGUE SE COMUNICAR.
        </h2>

        <div className="mt-12 space-y-4 max-w-2xl mx-auto text-slate-300 font-serif text-lg sm:text-xl font-light leading-relaxed">
          <p>Existem lugares que você ainda não conhece.</p>
          <p>Pessoas com quem você ainda não conversou.</p>
          <p>Ideias que ainda não chegaram até você.</p>
          <p>Experiências que ainda não viveu.</p>
        </div>

        <div className="my-10 max-w-xs mx-auto h-px bg-gradient-to-r from-transparent via-[#c5a880]/40 to-transparent" />

        <div className="space-y-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-300 font-light">
          <p className="text-slate-400">
            E talvez algumas delas estejam do outro lado de uma fronteira.
          </p>
          <p className="text-slate-400">
            Às vezes, do outro lado de uma língua.
          </p>
          <p className="text-xl sm:text-2xl font-serif text-white pt-4">
            O DDL existe para ajudar você a atravessar essa fronteira.
          </p>
        </div>
      </div>
    </section>
  );
};
