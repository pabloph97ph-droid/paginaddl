export type PlanType = 'individual' | 'group';

export interface PlanPricing {
  id: PlanType;
  title: string;
  tag: string;
  originalPrice: number;
  specialPrice: number;
  description: string;
  ctaText: string;
  features: string[];
}

export interface CouponData {
  code: string;
  discountIndividual: number; // e.g. 200
  discountGroup: number; // e.g. 251
  label: string;
}

export interface CheckoutModalState {
  isOpen: boolean;
  planId: PlanType;
  appliedCoupon: string | null;
  finalPrice: number;
}
