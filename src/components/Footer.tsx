import React, { useState } from 'react';
import { Instagram, MessageCircle, Mail } from 'lucide-react';
import { INTEGRATION_CONFIG } from '../config/pricing';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'termos' | 'privacidade' | 'contato' | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/${INTEGRATION_CONFIG.whatsappNumber}?text=${encodeURIComponent(INTEGRATION_CONFIG.whatsappMessageBase)}`;

  return (
    <footer className="border-t border-white/[0.08] bg-[#050914] py-16 px-6 lg:px-8 text-slate-400">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div>
          <span className="font-serif text-lg tracking-widest font-semibold text-white block">
            Domínio das Línguas — DDL
          </span>
          <p className="mt-2 text-sm text-[#c5a880] font-serif italic">
            Seu próximo nível é internacional.
          </p>
          <p className="mt-3 text-xs text-slate-400 max-w-sm font-light">
            Desenvolvimento da autonomia comunicativa e preparação de indivíduos para uma presença global livre de barreiras linguísticas.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-wider text-slate-300">
          <button
            onClick={() => scrollTo('metodologia')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Metodologia
          </button>
          <button
            onClick={() => scrollTo('comunidade')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Comunidade
          </button>
          <button
            onClick={() => setModalType('contato')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Contato
          </button>
          <button
            onClick={() => setModalType('termos')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Termos
          </button>
          <button
            onClick={() => setModalType('privacidade')}
            className="hover:text-white transition-colors cursor-pointer"
          >
            Privacidade
          </button>
        </div>

        {/* Social channels */}
        <div className="flex items-center gap-4">
          <a
            href={INTEGRATION_CONFIG.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#c5a880] hover:border-[#c5a880]/40 transition-colors"
            title="Instagram Domínio das Línguas"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
            title="WhatsApp Domínio das Línguas"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-light gap-4">
        <span>© {new Date().getFullYear()} Domínio das Línguas (DDL). Todos os direitos reservados.</span>
        <span>Acesso privado e restrito por convite institucional.</span>
      </div>

      {/* Institutional Modals */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="max-w-md w-full bg-[#0a1224] border border-white/20 p-6 text-slate-300 text-xs font-light">
            <h4 className="text-sm font-serif font-medium text-white uppercase tracking-wider mb-4">
              {modalType === 'termos' && 'Termos de Participação'}
              {modalType === 'privacidade' && 'Política de Privacidade'}
              {modalType === 'contato' && 'Canais de Contato Institucional'}
            </h4>

            {modalType === 'termos' && (
              <p className="leading-relaxed space-y-2">
                O projeto Domínio das Línguas (DDL) dedica-se ao desenvolvimento da autonomia comunicativa através de métodos concentrados e materiais complementares. O acesso é pessoal, intransferível e regido pelo respeito mútuo e colaboração entre membros.
              </p>
            )}

            {modalType === 'privacidade' && (
              <p className="leading-relaxed">
                Suas informações de contato e interesse são utilizadas estritamente para viabilizar sua integração ao projeto, atendimento direto da coordenação e comunicação institucional. Não compartilhamos nem comercializamos dados de membros.
              </p>
            )}

            {modalType === 'contato' && (
              <div className="space-y-3">
                <p>Para dúvidas sobre sua indicação, convite ou suporte:</p>
                <div className="flex items-center gap-2 text-white">
                  <Mail className="w-3.5 h-3.5 text-[#c5a880]" />
                  <span>{INTEGRATION_CONFIG.contactEmail}</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Atendimento direto via WhatsApp da coordenação</span>
                </div>
              </div>
            )}

            <button
              onClick={() => setModalType(null)}
              className="mt-6 w-full py-2 bg-white/10 hover:bg-white/20 text-white font-medium uppercase tracking-wider text-[11px] transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
