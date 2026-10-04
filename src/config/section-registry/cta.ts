import type { SectionEntry } from './types';

const icon = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"></svg>';

export const ctaSections: Record<string, SectionEntry> = {
  cta: {
    id: 'cta', label: 'Końcowe CTA', groupId: 'cta', hint: 'CTA dla NEXVORA', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'CtaBlock', dataKey: 'nova-cta' } },
  },
  novaCta: {
    id: 'novaCta', label: 'Końcowe wezwanie do działania', groupId: 'cta', hint: 'Końcowe CTA dla templateu Nova', icon,
    defaultVariant: 'default',
    variants: { default: { component: 'CtaBlock', dataKey: 'nova-cta' } },
  },
};
