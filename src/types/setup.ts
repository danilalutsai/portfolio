// # SetupItem union, Tool

import type { SnippetId } from "./common";

export const TOOLS = ['nvim', 'tmux', 'ghostty'];
export type Tool = (typeof TOOLS)[number];

type BaseItem = {
  id: SnippetId;
  label: string;
  description: string;
}

export type SetupItem =
  | (BaseItem & { tool: 'nvim'; repo: string; opts?: string })
  | (BaseItem & { tool: 'tmux'; lines: string[] })
  | (BaseItem & { tool: 'ghostty'; settings: Record<string, string> })

