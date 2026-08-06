// # Question union, Profile

export const PROFILES = ['minimal', 'balanced', 'tinkerer'] as const;
export type Profile = (typeof PROFILES)[number];

type BaseQ = { id: string; prompt: string; weights: Partial<Record<Profile, number>> };

export type Question =
  | (BaseQ & { kind: 'choice'; options: readonly string[] })
  | (BaseQ & { kind: 'text', placeholder: string })
  | (BaseQ & { kind: 'rating', max: number });
