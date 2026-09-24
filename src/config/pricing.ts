import { PlanPricing } from '../types';

export const PLANS: Record<'individual' | 'group', PlanPricing> = {
  individual: {
    id: 'individual',
    title: 'ACOMPANHAMENTO INDIVIDUAL',
    tag: 'ACOMPANHAMENTO PERSONALIZADO',
    originalPrice: 800,
    specialPrice: 600,
    description: 'Acompanhamento individual com professor, direcionamento personalizado e aplicação da metodologia DDL.',
    ctaText: 'QUERO COMEÇAR',
    features: [
      'Aulas individuais direcionadas com professor',
      'Diagnóstico inicial de perfil e objetivos internacionais',
      'Aplicação imersiva da Metodologia DDL',
      'Foco acelerado em 3 a 4 meses para autonomia',
      'Acesso a todos os conteúdos bônus e materiais gravados',
      'Prioridade de acesso aos novos recursos da comunidade'
    ]
  },
  group: {
    id: 'group',
    title: 'EXPERIÊNCIA EM GRUPO',
    tag: 'COMUNIDADE + GRUPO',
    originalPrice: 650,
    specialPrice: 399,
    description: 'Participação no treinamento em grupo, comunidade e estrutura coletiva de desenvolvimento.',
    ctaText: 'QUERO ENTRAR NO GRUPO',
    features: [
      'Encontros dinâmicos em grupo focado',
      'Ambiente colaborativo com membros em expansão',
      'Prática intensiva de conversação e escuta real',
      'Desenvolvimento do método de estudo autônomo',
      'Acesso integral à área de membros e materiais de apoio',
      'Integração direta com o ecossistema e networking DDL'
    ]
  }
};

/**
 * Cupons aceitos no sistema frontend.
 * Fácil de estender ou editar no futuro.
 */
export const VALID_COUPONS: Record<string, { label: string; description: string }> = {
  'MOTOCLUBE': {
    label: 'Condição Especial Moto Clube',
    description: 'Cupom de entrada exclusivo para membros e convidados do Moto Clube'
  },
  'EXPANSAO': {
    label: 'Condição Especial de Expansão',
    description: 'Cupom de entrada exclusivo para convidados da nova fase DDL'
  },
  'EXPANSÃO': {
    label: 'Condição Especial de Expansão',
    description: 'Cupom de entrada exclusivo para convidados da nova fase DDL'
  },
  'DDL2026': {
    label: 'Acesso Antecipado 2026',
    description: 'Acesso especial comunidade próxima'
  },
  'CONVITE': {
    label: 'Convite Especial',
    description: 'Condição por indicação direta da comunidade'
  }
};

/**
 * Configuração de integrações externas (Kiwify, WhatsApp, redes)
 * Substitua com suas URLs reais quando for publicar em produção.
 */
export const INTEGRATION_CONFIG = {
  whatsappNumber: '5511914966246', // WhatsApp oficial DDL: 11 91496-6246
  whatsappMessageBase: 'Olá! Recebi o acesso especial da nova fase do Domínio das Línguas (DDL) e gostaria de dar início ao meu acesso com a condição especial.',
  instagramUrl: 'https://instagram.com/dominiodaslinguas', // Substituir pelo Instagram oficial DDL
  kiwifyCheckoutIndividual: 'https://kiwify.com.br/checkout-individual-placeholder', // Link Kiwify Individual
  kiwifyCheckoutGroup: 'https://kiwify.com.br/checkout-grupo-placeholder', // Link Kiwify Grupo
  contactEmail: 'contato@dominiodaslinguas.com'
};
