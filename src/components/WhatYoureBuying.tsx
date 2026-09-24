import React from 'react';
import { Target } from 'lucide-react';

export const WhatYoureBuying: React.FC = () => {
  const coreWords = [
    { word: 'INGLÊS', desc: 'A chave inicial' },
    { word: 'COMUNICAÇÃO', desc: 'A habilidade central' },
    { word: 'VIAGENS', desc: 'Sem tensão nos aeroportos' },
    { word: 'NEGÓCIOS', desc: 'Acesso a mercados globais' },
    { word: 'CULTURA', desc: 'Compreensão de nuances' },
    { word: 'AUTONOMIA', desc: 'Liberdade de caminhar só' },
    { word: 'CONEXÕES', desc: 'Pessoas e redes internacionais' },
    { word: 'NOVAS POSSIBILIDADES', desc: 'Horizontes sem teto' }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#091122] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-[#c5a880] uppercase font-medium mb-3">
          <Target className="w-3.5 h-3.5" />
          <span>A Essência do Investimento</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
          NÃO É APENAS UMA AULA DE INGLÊS.
        </h2>

        {/* Visual Words Composition */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {coreWords.map((item, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#070c18] border border-white/[0.08] flex flex-col justify-between hover:border-[#c5a880]/40 transition-colors"
            >
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-medium block">
                {item.word}
              </span>
              <span className="text-[11px] text-slate-400 mt-2 font-light">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Narrative Flow */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300 font-light text-base sm:text-lg leading-relaxed pt-8 border-t border-white/[0.06]">
          <div className="space-y-4">
            <p>Você pode aprender inglês para viajar.</p>
            <p>Pode aprender para trabalhar com clientes ou equipes do exterior.</p>
            <p>Pode aprender para abrir um negócio internacional.</p>
          </div>

          <div className="space-y-4">
            <p>Pode aprender para estudar nas melhores instituições.</p>
            <p>Pode aprender porque quer morar fora com serenidade.</p>
            <p className="text-white font-medium">
              Pode aprender simplesmente porque quer compreender mais do mundo.
            </p>
          </div>
        </div>

        {/* Final punchline */}
        <div className="mt-10 p-6 bg-[#070c18] border-l-2 border-[#c5a880] max-w-xl">
          <p className="text-base sm:text-lg text-slate-200 font-serif">
            O motivo é seu. <strong className="text-white">A ferramenta é a comunicação.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};
