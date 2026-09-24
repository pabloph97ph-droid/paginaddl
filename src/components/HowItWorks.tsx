import React from 'react';
import { Layers, MessageSquare, BookOpen, Compass, Award } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'INGLÊS NA PRÁTICA',
      subtitle: 'Comunicação Aplicada & Expressão',
      description:
        'Desenvolvimento da comunicação, compreensão auditiva, vocabulário e capacidade de se expressar com segurança e fluidez em contextos reais.',
      icon: MessageSquare
    },
    {
      num: '02',
      title: 'METODOLOGIA',
      subtitle: 'Aprender a Aprender Línguas',
      description:
        'Você aprende não apenas o idioma, mas também formas eficientes de estudar, absorver conteúdo de imersão e continuar evoluindo de maneira sustentável.',
      icon: BookOpen
    },
    {
      num: '03',
      title: 'COMUNICAÇÃO INTERNACIONAL',
      subtitle: 'Cenários Globais de Vida Real',
      description:
        'Situações reais de viagem, negócios, trabalho, networking, relacionamento e comunicação com pessoas de diferentes lugares e culturas.',
      icon: Compass
    },
    {
      num: '04',
      title: 'AUTONOMIA',
      subtitle: 'Independência Contínua',
      description:
        'A proposta é ensinar você a continuar aprendendo e expandindo seu domínio mesmo após o término do período inicial de acompanhamento.',
      icon: Award
    }
  ];

  return (
    <section id="metodologia" className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#070c18] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-[#c5a880] uppercase font-medium mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Estrutura de Desenvolvimento</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
          UMA EXPERIÊNCIA COMPLETA DE COMUNICAÇÃO.
        </h2>

        <p className="mt-4 text-slate-400 font-light text-base sm:text-lg max-w-2xl">
          Quatro pilares integrados para transformar a forma como você enxerga, estuda e utiliza as línguas no mundo real.
        </p>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 bg-[#0a1224] border border-white/[0.08] hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-2xl text-[#c5a880] font-light tracking-wider">
                      {item.num}
                    </span>
                    <div className="w-9 h-9 border border-white/10 flex items-center justify-center text-slate-300 group-hover:text-[#c5a880] group-hover:border-[#c5a880]/40 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-medium text-white tracking-wide">
                    {item.title}
                  </h3>
                  <span className="text-xs text-slate-400 block mt-1 font-light uppercase tracking-wider">
                    {item.subtitle}
                  </span>

                  <p className="mt-4 text-sm text-slate-300 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center text-xs text-slate-400">
                  <span className="text-[#c5a880] mr-2">✦</span>
                  <span>Foco em aplicação real imediata</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
