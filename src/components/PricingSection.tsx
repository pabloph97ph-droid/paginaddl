import React, { useState } from 'react';
import { Tag, Check, Sparkles, ArrowRight, ShieldCheck, Info } from 'lucide-react';
import { PLANS, VALID_COUPONS } from '../config/pricing';
import { PlanType } from '../types';

interface PricingSectionProps {
  onSelectPlan: (planId: PlanType, coupon: string | null) => void;
  activeCoupon: string | null;
  onApplyCoupon: (code: string) => boolean;
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  onSelectPlan,
  activeCoupon,
  onApplyCoupon
}) => {
  const [individualInput, setIndividualInput] = useState(activeCoupon || '');
  const [groupInput, setGroupInput] = useState(activeCoupon || '');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successAnimation, setSuccessAnimation] = useState(false);

  React.useEffect(() => {
    if (activeCoupon) {
      setIndividualInput(activeCoupon);
      setGroupInput(activeCoupon);
    }
  }, [activeCoupon]);

  const handleApply = (code: string) => {
    const trimmed = code.trim().toUpperCase();
    if (!trimmed) {
      setErrorMessage('Por favor, digite o código de acesso recebido.');
      return;
    }

    const success = onApplyCoupon(trimmed);
    if (success) {
      setErrorMessage(null);
      setSuccessAnimation(true);
      setTimeout(() => setSuccessAnimation(false), 2500);
    } else {
      setErrorMessage('Código de acesso inválido ou expirado. Verifique se digitou corretamente.');
    }
  };

  const isCouponApplied = !!activeCoupon;

  return (
    <section id="escolha-seu-acesso" className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#070c18] relative">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0f1c3a]/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 border border-[#c5a880]/30 bg-[#c5a880]/5 text-[#c5a880] text-xs uppercase tracking-[0.2em] font-medium">
            <Tag className="w-3.5 h-3.5" />
            <span>Condição de Entrada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight">
            ESCOLHA COMO VOCÊ QUER COMEÇAR.
          </h2>

          <p className="mt-4 text-slate-400 font-light text-sm sm:text-base">
            Selecione a modalidade mais alinhada ao seu momento e insira seu código de acesso pessoal.
          </p>

          {isCouponApplied && (
            <div
              className={`mt-6 inline-flex items-center gap-2 text-xs text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 px-4 py-2 transition-all ${
                successAnimation ? 'scale-105 shadow-lg shadow-emerald-500/10' : ''
              }`}
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>
                Condição especial ativada com o código: <strong className="tracking-wider">{activeCoupon}</strong>
                {VALID_COUPONS[activeCoupon]?.label ? ` (${VALID_COUPONS[activeCoupon].label})` : ''}
              </span>
            </div>
          )}

          {errorMessage && (
            <p className="mt-4 text-xs text-rose-300 bg-rose-950/30 border border-rose-800/40 py-2 px-4 max-w-md mx-auto">
              {errorMessage}
            </p>
          )}
        </div>

        {/* The Two Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* CARD 1 — ACOMPANHAMENTO INDIVIDUAL */}
          <div className="relative p-8 sm:p-10 bg-[#091224] border border-[#c5a880]/30 hover:border-[#c5a880]/60 transition-all duration-300 flex flex-col justify-between shadow-2xl">
            {/* Tag */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-[#c5a880] border border-[#c5a880]/30 bg-[#c5a880]/10 px-3 py-1">
                  {PLANS.individual.tag}
                </span>
                <span className="text-xs text-slate-400 font-light">Vagas Limitadas</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-white font-medium tracking-wide">
                {PLANS.individual.title}
              </h3>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed font-light">
                {PLANS.individual.description}
              </p>

              {/* Pricing Display with Transparency */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  {isCouponApplied ? 'Condição Especial Aplicada' : 'Investimento Regular'}
                </span>

                <div className="flex items-baseline gap-3">
                  {isCouponApplied ? (
                    <>
                      <span className="text-4xl sm:text-5xl font-serif font-semibold text-white tabular-nums">
                        R$ {PLANS.individual.specialPrice}
                      </span>
                      <span className="text-lg text-slate-400 line-through tabular-nums">
                        R$ {PLANS.individual.originalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl sm:text-5xl font-serif font-semibold text-white tabular-nums">
                      R$ {PLANS.individual.originalPrice}
                    </span>
                  )}
                </div>

                {isCouponApplied && (
                  <span className="inline-block mt-2 text-xs text-emerald-400 font-medium">
                    Economia de R$ {PLANS.individual.originalPrice - PLANS.individual.specialPrice} na condição de entrada
                  </span>
                )}
              </div>

              {/* Coupon Input Area */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <label className="text-xs text-slate-300 block mb-2 font-medium">
                  {isCouponApplied ? 'Código de acesso validado' : 'Digite seu código de acesso'}
                </label>
                <div className="flex items-stretch gap-2">
                  <input
                    type="text"
                    value={individualInput}
                    onChange={(e) => {
                      setIndividualInput(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleApply(individualInput);
                      }
                    }}
                    placeholder="CÓDIGO DE ACESSO"
                    className="w-full bg-[#050914] border border-white/20 focus:border-[#c5a880] px-3.5 py-2.5 text-xs text-white uppercase tracking-wider placeholder:text-slate-500 focus:outline-none"
                  />
                  <button
                    onClick={() => handleApply(individualInput)}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors cursor-pointer border border-white/10"
                  >
                    {isCouponApplied ? 'Atualizar' : 'Aplicar Cupom'}
                  </button>
                </div>
              </div>

              {/* Features list */}
              <div className="mt-8 space-y-3">
                {PLANS.individual.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span className="font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-6 border-t border-white/[0.08]">
              <button
                onClick={() => onSelectPlan('individual', activeCoupon)}
                className="w-full py-4 px-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#070c18] bg-[#c5a880] hover:bg-[#d4af37] transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>{PLANS.individual.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Confirmação segura de acesso e alinhamento</span>
              </div>
            </div>
          </div>

          {/* CARD 2 — EXPERIÊNCIA EM GRUPO */}
          <div className="relative p-8 sm:p-10 bg-[#091224] border border-white/[0.12] hover:border-[#c5a880]/50 transition-all duration-300 flex flex-col justify-between shadow-xl">
            {/* Tag */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-300 border border-white/20 bg-white/[0.05] px-3 py-1">
                  {PLANS.group.tag}
                </span>
                <span className="text-xs text-slate-400 font-light">Turma Selecionada</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-white font-medium tracking-wide">
                {PLANS.group.title}
              </h3>

              <p className="mt-4 text-sm text-slate-300 leading-relaxed font-light">
                {PLANS.group.description}
              </p>

              {/* Pricing Display with Transparency */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
                  {isCouponApplied ? 'Condição Especial Aplicada' : 'Investimento Regular'}
                </span>

                <div className="flex items-baseline gap-3">
                  {isCouponApplied ? (
                    <>
                      <span className="text-4xl sm:text-5xl font-serif font-semibold text-white tabular-nums">
                        R$ {PLANS.group.specialPrice}
                      </span>
                      <span className="text-lg text-slate-400 line-through tabular-nums">
                        R$ {PLANS.group.originalPrice}
                      </span>
                    </>
                  ) : (
                    <span className="text-4xl sm:text-5xl font-serif font-semibold text-white tabular-nums">
                      R$ {PLANS.group.originalPrice}
                    </span>
                  )}
                </div>

                {isCouponApplied && (
                  <span className="inline-block mt-2 text-xs text-emerald-400 font-medium">
                    Economia de R$ {PLANS.group.originalPrice - PLANS.group.specialPrice} na condição de entrada
                  </span>
                )}
              </div>

              {/* Coupon Input Area */}
              <div className="mt-6 pt-6 border-t border-white/[0.06]">
                <label className="text-xs text-slate-300 block mb-2 font-medium">
                  {isCouponApplied ? 'Código de acesso validado' : 'Digite seu código de acesso'}
                </label>
                <div className="flex items-stretch gap-2">
                  <input
                    type="text"
                    value={groupInput}
                    onChange={(e) => {
                      setGroupInput(e.target.value);
                      if (errorMessage) setErrorMessage(null);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleApply(groupInput);
                      }
                    }}
                    placeholder="CÓDIGO DE ACESSO"
                    className="w-full bg-[#050914] border border-white/20 focus:border-[#c5a880] px-3.5 py-2.5 text-xs text-white uppercase tracking-wider placeholder:text-slate-500 focus:outline-none"
                  />
                  <button
                    onClick={() => handleApply(groupInput)}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors cursor-pointer border border-white/10"
                  >
                    {isCouponApplied ? 'Atualizar' : 'Aplicar Cupom'}
                  </button>
                </div>
              </div>

              {/* Features list */}
              <div className="mt-8 space-y-3">
                {PLANS.group.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <Check className="w-4 h-4 text-[#c5a880] shrink-0 mt-0.5" />
                    <span className="font-light">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 pt-6 border-t border-white/[0.08]">
              <button
                onClick={() => onSelectPlan('group', activeCoupon)}
                className="w-full py-4 px-6 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-white bg-slate-800 hover:bg-slate-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer border border-white/10"
              >
                <span>{PLANS.group.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-3 flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <Info className="w-3.5 h-3.5 text-[#c5a880]" />
                <span>Dinâmica de grupo e conexão entre membros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
