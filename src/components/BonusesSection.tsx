import React from 'react';
import { Gift, Briefcase, GraduationCap, PlusCircle, Plane } from 'lucide-react';

export const BonusesSection: React.FC = () => {
  const bonuses = [
    {
      title: 'BUSINESS ENGLISH',
      tag: 'Carreira & Negócios',
      description:
        'Conteúdos voltados para situações profissionais, dinâmicas de reuniões, apresentações, negociação, vocabulário de negócios e comunicação corporativa internacional.',
      icon: Briefcase
    },
    {
      title: 'ENEM',
      tag: 'Preparação & Interpretação',
      description:
        'Material complementar focado na preparação de interpretação de textos e leitura em língua inglesa para o ENEM, com aulas gravadas e materiais de apoio.',
      icon: GraduationCap
    },
    {
      title: 'CONTEÚDOS COMPLEMENTARES',
      tag: 'Biblioteca em Expansão',
      description:
        'Aulas temáticas, masterclasses gravadas e materiais de estudo adicionais que são incorporados continuamente ao acervo da comunidade.',
      icon: PlusCircle
    },
    {
      title: 'EXPERIÊNCIAS INTERNACIONAIS',
      tag: 'Vida & Cultura Global',
      description:
        'Conteúdos e orientações práticas relacionadas a viagens, choque cultural, imigração, trabalho remoto para o exterior, estudos fora e navegação cosmopolita.',
      icon: Plane
    }
  ];

  return (
    <section id="bonuses" className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#091122] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-[#c5a880] uppercase font-medium mb-3">
          <Gift className="w-3.5 h-3.5" />
          <span>Materiais Inclusos</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
          ALÉM DO TREINAMENTO PRINCIPAL
        </h2>

        <p className="mt-4 text-slate-400 font-light text-base sm:text-lg max-w-2xl">
          Recursos complementares pensados para apoiar seus objetivos específicos em diferentes momentos da sua trajetória.
        </p>

        {/* 4 Bonus Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {bonuses.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="p-8 bg-[#070c18] border border-white/[0.08] hover:border-[#c5a880]/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-[#c5a880] font-medium">
                      {b.tag}
                    </span>
                    <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-slate-300">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-serif font-medium text-white tracking-wide">
                    {b.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-300 leading-relaxed font-light">
                    {b.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.05] text-[11px] text-slate-400">
                  Acesso liberado a todos os membros ativos
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent clarification */}
        <p className="mt-8 text-center text-xs text-slate-400 font-light">
          Nota ética: os materiais complementares são instrumentos de apoio e estudo direcionado, sem promessa ou garantia de resultados de pontuação em provas específicas ou ganhos financeiros.
        </p>
      </div>
    </section>
  );
};
