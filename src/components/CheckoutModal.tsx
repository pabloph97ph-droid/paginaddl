import React, { useState } from 'react';
import { X, Check, ShieldCheck, MessageCircle, ExternalLink, ArrowRight } from 'lucide-react';
import { PLANS, INTEGRATION_CONFIG } from '../config/pricing';
import { PlanType } from '../types';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planId: PlanType;
  activeCoupon: string | null;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  planId,
  activeCoupon
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const plan = PLANS[planId];
  const isCouponApplied = !!activeCoupon;
  const currentPrice = isCouponApplied ? plan.specialPrice : plan.originalPrice;
  const savings = plan.originalPrice - currentPrice;

  // Format WhatsApp Link with filled details
  const buildWhatsAppUrl = () => {
    const text = `Olá! Meu nome é ${name || 'um convidado'}, recebi o convite especial da nova fase DDL.\n\nModalidade: ${plan.title}\nCondição: R$ ${currentPrice} ${isCouponApplied ? `(Cupom ${activeCoupon})` : ''}\nEmail: ${email || 'A informar'}\n\nGostaria de confirmar minha entrada e alinhar os próximos passos!`;
    return `https://wa.me/${INTEGRATION_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleCheckoutDirect = (e: React.FormEvent) => {
    e.preventDefault();

    /**
     * PONTO DE INTEGRAÇÃO 1: ENVIO DE LEAD PARA BANCO DE DADOS / CRM
     * Aqui você pode disparar um fetch('/api/leads', { method: 'POST', body: JSON.stringify({ name, email, phone, planId, activeCoupon }) })
     */
    console.log('Lead registrado:', { name, email, phone, planId, activeCoupon, currentPrice });

    /**
     * PONTO DE INTEGRAÇÃO 2: CHECKOUT EXTERNO (Kiwify / Hotmart / Eduzz / Stripe)
     * Se houver link configurado, redireciona com parâmetros de cupom
     */
    const kiwifyBaseUrl =
      planId === 'individual'
        ? INTEGRATION_CONFIG.kiwifyCheckoutIndividual
        : INTEGRATION_CONFIG.kiwifyCheckoutGroup;

    // Em ambiente de produção, você pode redirecionar para: `${kiwifyBaseUrl}?cupom=${activeCoupon || ''}&email=${encodeURIComponent(email)}`
    // Por enquanto, mostramos a tela de confirmação com opções de transição suave.
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-[#091224] border border-[#c5a880]/30 shadow-2xl p-6 sm:p-8 my-8 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header info */}
            <span className="text-[11px] uppercase tracking-widest text-[#c5a880] font-semibold block mb-1">
              Confirmação de Acesso Especial
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-white font-medium">
              {plan.title}
            </h3>

            {/* Price review summary */}
            <div className="mt-4 p-4 bg-[#050914] border border-white/10 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block">Condição de Inscrição</span>
                <span className="text-2xl font-serif font-semibold text-white tabular-nums">
                  R$ {currentPrice}
                </span>
                {isCouponApplied && (
                  <span className="text-xs text-slate-400 line-through ml-2 tabular-nums">
                    R$ {plan.originalPrice}
                  </span>
                )}
              </div>

              {isCouponApplied && (
                <div className="text-right">
                  <span className="text-[10px] text-emerald-400 uppercase tracking-wider font-semibold block">
                    Cupom Ativo
                  </span>
                  <span className="text-xs font-mono text-white bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5">
                    {activeCoupon}
                  </span>
                </div>
              )}
            </div>

            {isCouponApplied && savings > 0 && (
              <p className="mt-2 text-xs text-emerald-400 font-medium">
                ✓ Benefício de R$ {savings} aplicado pelo convite institucional.
              </p>
            )}

            {/* Lead & Confirmation Form */}
            <form onSubmit={handleCheckoutDirect} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como gostaria de ser chamado(a)"
                  className="w-full bg-[#050914] border border-white/20 focus:border-[#c5a880] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-1">
                  Seu Melhor E-mail
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Para envio dos dados de acesso"
                  className="w-full bg-[#050914] border border-white/20 focus:border-[#c5a880] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 font-medium mb-1">
                  WhatsApp com DDD
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(DDD) 99999-9999"
                  className="w-full bg-[#050914] border border-white/20 focus:border-[#c5a880] px-3.5 py-2.5 text-xs text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#070c18] bg-[#c5a880] hover:bg-[#d4af37] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Garantir Condição Especial</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>

            {/* Direct WhatsApp Alternative */}
            <div className="mt-4 pt-4 border-t border-white/[0.08] text-center">
              <span className="text-[11px] text-slate-400 block mb-2">
                Prefere tirar dúvidas ou alinhar diretamente com a coordenação?
              </span>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Conversar no WhatsApp sobre o {plan.title}</span>
              </a>
            </div>

            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#c5a880]" />
              <span>Ambiente confidencial · Início alinhado diretamente com você</span>
            </div>
          </div>
        ) : (
          /* Submission success / Next step screen */
          <div className="py-4 text-center space-y-4">
            <div className="w-12 h-12 mx-auto border border-emerald-500/40 bg-emerald-950/30 flex items-center justify-center text-emerald-400">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-serif text-white font-medium">
              Acesso Pré-Registrado com Sucesso
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm mx-auto">
              Recebemos seu interesse para o <strong className="text-white">{plan.title}</strong> com a condição especial de <strong className="text-white">R$ {currentPrice}</strong>.
            </p>

            <div className="p-4 bg-[#050914] border border-white/10 text-left text-xs text-slate-300 space-y-1 max-w-sm mx-auto">
              <p><strong className="text-slate-400">Nome:</strong> {name}</p>
              <p><strong className="text-slate-400">Email:</strong> {email}</p>
              <p><strong className="text-slate-400">WhatsApp:</strong> {phone}</p>
              {isCouponApplied && (
                <p><strong className="text-slate-400">Cupom Aplicado:</strong> {activeCoupon}</p>
              )}
            </div>

            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Nossa equipe entrará em contato via WhatsApp e e-mail com as instruções de integração e calendário de início.
            </p>

            <div className="pt-2 flex flex-col gap-2 max-w-sm mx-auto">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-emerald-700 hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Iniciar Conversa no WhatsApp Agora</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs uppercase tracking-wider text-slate-400 hover:text-white"
              >
                Voltar à Página
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
