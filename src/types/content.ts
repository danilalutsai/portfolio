// # ContentBlock union, Project

import type { ProjectId } from "./common";

export const TECH_TAGS = ['vue', 'typescript', 'css', 'node', 'python'] as const;
export type TechTag = (typeof TECH_TAGS)[number];

export type ContentBlock =
  | { kind: 'text', body: string }
  | { kind: 'code', lang: string, code: string, caption?: string }
  | { kind: 'image', src: string, alt: string }
  | { kind: 'callout', tone: 'info' | 'warn', body: string };

export type Project = {
  id: ProjectId;
  slug: string;
  title: string;
  summary: string;
  tags: readonly TechTag[];
  repo?: string;
  live?: string;
  blocks: ContentBlock;
};
