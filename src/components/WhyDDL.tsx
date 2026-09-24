import React from 'react';
import { Globe, Clock, Sparkles } from 'lucide-react';

export const WhyDDL: React.FC = () => {
  const possibilities = [
    'Consumir conteúdos que nunca foram traduzidos',
    'Estudar em universidades estrangeiras',
    'Negociar internacionalmente',
    'Vender para novos mercados',
    'Viajar com independência real',
    'Fazer amizades em qualquer continente',
    'Morar fora com tranquilidade',
    'Descobrir outras línguas além do inglês: espanhol, mandarim, francês, alemão'
  ];

  return (
    <section id="por-que-ddl" className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#070c18] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Index & Subtitle */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-[#c5a880] uppercase font-medium mb-3">
          <Globe className="w-3.5 h-3.5" />
          <span>Visão & Contexto</span>
        </div>

        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
          O MUNDO FICOU MAIOR.
        </h2>

        {/* Narrative Flow */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            <p className="text-white text-lg sm:text-xl font-serif leading-relaxed">
              Hoje, uma pessoa pode trabalhar com alguém nos Estados Unidos pela manhã, conversar com alguém da Europa à tarde e viajar para outro país no final da semana.
            </p>

            <p className="text-slate-400 text-sm sm:text-base">
              As fronteiras geográficas tornaram-se permeáveis para quem domina a ferramenta da comunicação. Não se trata mais apenas de uma matéria escolar ou de um certificado na gaveta, mas do acesso direto à realidade global em tempo real.
            </p>

            {/* Possibilities editorial list */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium block mb-4">
                O que essa nova escala permite:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {possibilities.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a880] mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Focal Callout Card */}
          <div className="lg:col-span-5 bg-[#0b1328] border border-white/10 p-7 sm:p-8 relative">
            <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 w-8 h-8 border-t-2 border-r-2 border-[#c5a880]" />
            <div className="flex items-center gap-2 text-[#c5a880] text-xs uppercase tracking-wider font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>O Propósito Fundamental</span>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-snug font-serif">
              Por isso, o objetivo do DDL não é simplesmente fazer você <span className="italic text-white">“estudar inglês”</span>.
            </p>

            <div className="my-6 h-px bg-gradient-to-r from-[#c5a880]/40 to-transparent" />

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              É desenvolver sua <strong className="text-white font-medium">capacidade de se comunicar e aprender línguas com autonomia</strong>. Para que o idioma seja um instrumento de liberdade — e não um entrave constante.
            </p>

            <div className="mt-6 pt-6 border-t border-white/[0.06] flex items-center gap-3 text-xs text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Construído para um mundo sem barreiras</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
