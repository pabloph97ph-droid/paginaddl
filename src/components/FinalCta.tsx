import React, { useState } from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { PLANS, VALID_COUPONS } from '../config/pricing';
import { PlanType } from '../types';

interface FinalCtaProps {
  onSelectPlan: (planId: PlanType, coupon: string | null) => void;
  activeCoupon: string | null;
  onApplyCoupon: (code: string) => boolean;
}

export const FinalCta: React.FC<FinalCtaProps> = ({
  onSelectPlan,
  activeCoupon,
  onApplyCoupon
}) => {
  const [couponCode, setCouponCode] = useState(activeCoupon || '');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  React.useEffect(() => {
    if (activeCoupon) {
      setCouponCode(activeCoupon);
    }
  }, [activeCoupon]);

  const handleApply = (codeToApply: string) => {
    const trimmed = codeToApply.trim().toUpperCase();
    if (!trimmed) {
      setErrorMsg('Digite um código de acesso.');
      return;
    }
    const ok = onApplyCoupon(trimmed);
    if (ok) {
      setErrorMsg(null);
    } else {
      setErrorMsg('Código de acesso inválido ou expirado.');
    }
  };

  const isApplied = !!activeCoupon;

  return (
    <section className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#070c18] relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
          TALVEZ ESTE SEJA UM BOM MOMENTO PARA COMEÇAR.
        </h2>

        <div className="mt-8 space-y-3 text-slate-300 font-light text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          <p className="text-slate-400">Você não precisa saber exatamente onde isso vai levar.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-slate-200 text-sm sm:text-base py-2">
            <span>Pode ser uma viagem.</span>
            <span className="text-[#c5a880]">·</span>
            <span>Uma nova oportunidade profissional.</span>
            <span className="text-[#c5a880]">·</span>
            <span>Uma conversa.</span>
            <span className="text-[#c5a880]">·</span>
            <span>Um negócio.</span>
            <span className="text-[#c5a880]">·</span>
            <span>Uma mudança de país.</span>
            <span className="text-[#c5a880]">·</span>
            <span>Uma nova língua.</span>
          </div>
          <p className="text-slate-400">Ou simplesmente uma nova maneira de enxergar o mundo.</p>
          <p className="text-lg sm:text-xl font-serif text-white pt-2 font-medium">
            Comece pela comunicação. Descubra o resto no caminho.
          </p>
        </div>

        {/* Coupon field */}
        <div className="mt-10 max-w-md mx-auto p-4 bg-[#0a1224] border border-white/10">
          <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-2 text-left">
            {isApplied ? 'Código de acesso ativado' : 'Possui um código de acesso?'}
          </label>
          <div className="flex items-stretch gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => {
                setCouponCode(e.target.value);
                if (errorMsg) setErrorMsg(null);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleApply(couponCode);
                }
              }}
              placeholder="CÓDIGO DE ACESSO"
              className="w-full bg-[#050914] border border-white/20 focus:border-[#c5a880] px-3.5 py-2 text-xs text-white uppercase tracking-wider placeholder:text-slate-500 focus:outline-none"
            />
            <button
              onClick={() => handleApply(couponCode)}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors cursor-pointer border border-white/10"
            >
              {isApplied ? 'Atualizado' : 'Validar'}
            </button>
          </div>

          {isApplied && (
            <p className="mt-2 text-xs text-emerald-400 flex items-center gap-1.5 text-left">
              <Sparkles className="w-3.5 h-3.5" />
              <span>
                Condição especial ativa ({activeCoupon})
                {VALID_COUPONS[activeCoupon]?.label ? ` — ${VALID_COUPONS[activeCoupon].label}` : ''}
              </span>
            </p>
          )}

          {errorMsg && (
            <p className="mt-2 text-xs text-rose-300 text-left">{errorMsg}</p>
          )}
        </div>

        {/* Dual Decision Cards Compact */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
          {/* Option 1: Individual */}
          <div className="p-6 bg-[#091122] border border-[#c5a880]/40 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-[#c5a880] block mb-1">
                Acompanhamento Personalizado
              </span>
              <h3 className="text-lg font-serif text-white">INDIVIDUAL</h3>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Direcionamento exclusivo com professor e metodologia concentrada.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-serif font-semibold text-white tabular-nums">
                  R$ {isApplied ? PLANS.individual.specialPrice : PLANS.individual.originalPrice}
                </span>
                {isApplied && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    R$ {PLANS.individual.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('individual', activeCoupon)}
              className="mt-6 w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-[#070c18] bg-[#c5a880] hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>COMEÇAR NO INDIVIDUAL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Option 2: Group */}
          <div className="p-6 bg-[#091122] border border-white/10 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-300 block mb-1">
                Comunidade + Grupo
              </span>
              <h3 className="text-lg font-serif text-white">GRUPO</h3>
              <p className="text-xs text-slate-400 mt-1 font-light">
                Imersão coletiva, trocas de experiências e dinâmica compartilhada.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-serif font-semibold text-white tabular-nums">
                  R$ {isApplied ? PLANS.group.specialPrice : PLANS.group.originalPrice}
                </span>
                {isApplied && (
                  <span className="text-sm text-slate-400 line-through tabular-nums">
                    R$ {PLANS.group.originalPrice}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => onSelectPlan('group', activeCoupon)}
              className="mt-6 w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 cursor-pointer border border-white/10"
            >
              <span>ENTRAR NO GRUPO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400 font-light">
          <ShieldCheck className="w-4 h-4 text-[#c5a880]" />
          <span>Acesso direto, transparente e sem pegadinhas contratuais</span>
        </div>
      </div>
    </section>
  );
};
