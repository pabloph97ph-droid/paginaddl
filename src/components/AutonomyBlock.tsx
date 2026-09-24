import React from 'react';
import { ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

export const AutonomyBlock: React.FC = () => {
  const steps = [
    { label: 'Avançar com clareza', desc: 'Saber exatamente em qual estágio você está e para onde deve direcionar sua energia.' },
    { label: 'Estudar com eficácia', desc: 'Aprender a absorver vocabulário de contextos reais, sem decoreba estéril.' },
    { label: 'Ouvir e decodificar', desc: 'Compreender sotaques variados, conversas em ritmo natural e áudios autênticos.' },
    { label: 'Falar sem bloqueio', desc: 'Articular raciocínios com naturalidade, sem traduzir palavra por palavra mentalmente.' },
    { label: 'Encontrar novas fontes', desc: 'Consumir podcasts, livros, documentários e reuniões sem intermediários.' }
  ];

  return (
    <section className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#091122] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-[#c5a880] uppercase font-medium mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Princípio de Liberdade</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
          VOCÊ NÃO PRECISA FICAR ANOS CONOSCO.
        </h2>

        {/* Central Manifesto Highlight */}
        <div className="mt-8 p-6 sm:p-8 bg-[#0b162f] border-l-4 border-[#c5a880] text-slate-100">
          <p className="text-lg sm:text-2xl font-serif font-medium text-white leading-snug">
            Nossa meta não é criar dependência. É criar autonomia.
          </p>
        </div>

        {/* Narrative & Timeline */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-5 text-slate-300 font-light text-base sm:text-lg leading-relaxed">
            <p>
              A proposta do DDL é <strong className="text-white font-medium">concentrar o processo</strong>.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              Em aproximadamente <strong className="text-white font-medium">3 a 4 meses</strong>, você passa pela metodologia, entende como o processo funciona, desenvolve sua comunicação e aprende a continuar evoluindo continuamente.
            </p>
            <p className="text-slate-400 text-sm sm:text-base">
              O modelo tradicional de ensino de línguas foi estruturado para manter o aluno matriculado por 3, 5 ou 7 anos pagando mensalidades pelo básico. No DDL, invertemos essa lógica por completo.
            </p>

            <div className="p-5 border border-white/10 bg-[#070c18]/60 mt-6">
              <span className="text-xs tracking-wider uppercase text-[#c5a880] font-semibold block mb-2">
                Nosso indicador de sucesso
              </span>
              <p className="text-lg font-serif italic text-white leading-relaxed">
                “O melhor resultado para nós é quando você consegue seguir em frente sozinho.”
              </p>
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-6 space-y-3.5">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold block mb-2">
              O que você conquista em 3 a 4 meses:
            </span>

            {steps.map((step, idx) => (
              <div
                key={idx}
                className="p-4 bg-[#070c18]/80 border border-white/[0.08] hover:border-[#c5a880]/40 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a880] shrink-0" />
                  <span className="text-sm font-medium text-white tracking-wide">{step.label}</span>
                </div>
                <p className="mt-1 text-xs text-slate-400 pl-7 leading-relaxed font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
