import React from 'react';
import { Users, ArrowRight } from 'lucide-react';

export const CommunitySection: React.FC = () => {
  const stepsFlow = [
    { label: 'Comunidade', desc: 'Pessoas com visão de expansão' },
    { label: 'Comunicação', desc: 'Metodologia e prática autônoma' },
    { label: 'Conexões', desc: 'Troca de vivências e parcerias' },
    { label: 'Oportunidades', desc: 'Fronteiras profissionais e culturais' }
  ];

  return (
    <section id="comunidade" className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#091122] relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-[#c5a880] uppercase font-medium mb-3">
          <Users className="w-3.5 h-3.5" />
          <span>Ecossistema DDL</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
          VOCÊ NÃO ESTÁ ENTRANDO APENAS EM UMA AULA.
        </h2>

        <p className="mt-6 text-slate-300 font-light text-base sm:text-lg max-w-3xl leading-relaxed">
          Uma comunidade de pessoas que querem ampliar sua comunicação e sua presença no mundo. A ideia é conectar pessoas, experiências, conteúdos e oportunidades.
        </p>

        <p className="mt-3 text-slate-400 font-light text-sm sm:text-base max-w-3xl leading-relaxed">
          Espaços para conversas, conteúdos aprofundados, encontros e conexões estratégicas entre pessoas que compartilham o mesmo apetite por crescimento global.
        </p>

        {/* Visual Flow: Comunidade → Comunicação → Conexões → Oportunidades */}
        <div className="mt-12 p-6 sm:p-8 bg-[#070c18] border border-white/[0.08]">
          <span className="text-xs uppercase tracking-widest text-[#c5a880] font-semibold block mb-6">
            A Trajetória do Membro
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepsFlow.map((step, idx) => (
              <div key={idx} className="relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-serif text-sm text-[#c5a880]">0{idx + 1}.</span>
                    <h4 className="text-base font-serif font-medium text-white">{step.label}</h4>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{step.desc}</p>
                </div>
                {idx < stepsFlow.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-2 text-slate-600">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
