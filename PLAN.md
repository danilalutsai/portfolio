# Portfolio — Build Plan

Personal portfolio built as a TypeScript + Vue 3 learning project. Terminal aesthetic, real content, every TS pattern from `ts-vue-practice-plan.md` used in a place where it actually earns its keep.

**Non-negotiable rule for the whole project: no `any`.** Tempted? Write `unknown` and narrow.

---

## Concept

The site looks like a terminal. It does **not** behave like one — no command parser, no `hjkl` navigation, no command palette. Mono fonts, window chrome, `$` prompts as decoration, blinking CSS cursor. It's a website wearing a terminal costume.

Content is real: my actual projects, my actual Neovim / tmux / Ghostty configs. The centrepiece feature lets a visitor collect config pieces they like and download working config files.

---

## Stack

Already scaffolded (create-vue):

| Thing | Version |
|---|---|
| Vue | 3.5 |
| TypeScript | 6.0 |
| Vite | 8.1 |
| vue-router | 5.2 |
| Pinia | 4.0 |
| Runtime | Bun |
| Lint | oxlint + eslint + prettier |

To add: `zod`.

---

## Pages

| Route | What |
|---|---|
| `/` | Hero, typewriter intro, links out |
| `/projects` | Project grid, live GitHub stars |
| `/projects/:slug` | Case study built from `ContentBlock[]` |
| `/setup` | Tool hub — nvim, tmux, ghostty |
| `/setup/:tool` | Config items for one tool, each addable to My Config |
| `/uses` | Hardware + software table (generic table component) |
| `/quiz` | "Find Your Setup" — result feeds My Config |
| `/builder` | My Config — generated config files, download |
| `/contact` | Zod-validated form |
| `/:pathMatch(.*)*` | 404 — `zsh: command not found` |

---

## Feature → TS concept map

Every row is a concept from `ts-vue-practice-plan.md` with a real home.

| Concept | Where it lives | Phase |
|---|---|---|
| `as const` derived unions | `TECH_TAGS`, `TOOLS`, `THEMES` | 1 |
| Branded types | `ProjectId`, `SnippetId`, `PostId` | 1 |
| `Async<T>` discriminated union | GitHub fetch state on `/projects` | 4 |
| Generic composable `useFetch<T>` | GitHub REST API | 4 |
| Discriminated union + `assertNever` | `ContentBlock`, `SetupItem`, `Question` (3 separate uses) | 5, 6, 8 |
| `Extract<Union, {k:'v'}>` for child props | Every variant child component | 5, 6, 8 |
| Zod schema → `z.infer` | Contact form | 9 |
| Zod runtime validation | `useFetch` retrofit + localStorage load | 9 |
| Hand-written type guard | `isSetupItem` or similar | 9 |
| Generic component `<script setup generic="T">` | `DataTable.vue` on `/uses` | 7 |
| Indexed access types `T[keyof T]` | DataTable `format` callback | 7 |
| Pinia setup-syntax store | Theme store (small), Config store (big) | 3, 10 |
| Typed emits | Quiz answers, form submit, item add | 6, 8, 9 |
| `withDefaults` | `Tag.vue`, `TerminalWindow.vue`, `CopyButton.vue` | 2 |
| `satisfies` | All `src/data/*.ts` content files | 5 |
| Typed localStorage wrapper | Theme + config basket persistence | 3, 10 |
| `Record<K, V>` | `Record<Tool, string>` generated files, `Record<Profile, number>` quiz tally | 8, 10 |
| `Partial<T>` | Contact form draft state | 9 |
| `Omit<T, K>` | Display-safe project shape | 5 |
| `ReturnType<typeof …>` | Typing a composable's return | 4 |
| Typed route params | `/projects/:slug`, `/setup/:tool` | 5, 6 |

---

## Target structure

```
src/
  types/
    index.ts          # barrel, re-exports everything
    common.ts         # Async<T>, Brand<T,B>, assertNever
    content.ts        # ContentBlock union, Project
    setup.ts          # SetupItem union, Tool
    quiz.ts           # Question union, Profile
    form.ts           # ContactForm (z.infer)
    api.ts            # GitHub response shapes + schemas
  composables/
    useFetch.ts
    useLocalStorage.ts
    useClipboard.ts
  stores/
    theme.ts
    config.ts
    toast.ts
  data/
    projects.ts       # satisfies Project[]
    setup.ts          # satisfies SetupItem[]
    uses.ts           # satisfies UsesRow[]
    quiz.ts           # satisfies Question[]
  components/
    ui/               # TerminalWindow, Tag, CopyButton, ToastHost, PromptLine
    layout/           # AppHeader, AppFooter, ThemeToggle
    content/          # BlockRenderer + TextBlock, CodeBlock, ImageBlock, CalloutBlock
    setup/            # SetupItemRenderer + NvimItem, TmuxItem, GhosttyItem
    quiz/             # QuestionRenderer + ChoiceQuestion, TextQuestion, RatingQuestion
    table/            # DataTable.vue (generic)
  pages/
    HomePage.vue
    ProjectsPage.vue
    ProjectDetailPage.vue
    SetupPage.vue
    SetupToolPage.vue
    UsesPage.vue
    QuizPage.vue
    BuilderPage.vue
    ContactPage.vue
    NotFoundPage.vue
  router/index.ts
  assets/
    base.css          # reset + custom props
    main.css
```

---

## Phase 0 — Clean base

**Delete:**
- `src/components/HelloWorld.vue`
- `src/components/TheWelcome.vue`
- `src/components/WelcomeItem.vue`
- `src/components/icons/` (whole folder)
- `src/stores/counter.ts`
- `src/views/` (replaced by `src/pages/`)
- Contents of `src/assets/base.css` and `main.css`
- `src/assets/logo.svg`

**Add to `tsconfig.app.json` → `compilerOptions`:**

```json
"noUnusedLocals": true,
"noImplicitReturns": true
```

`strict` and `noUncheckedIndexedAccess` are already on via `@vue/tsconfig`.

**Install:**

```sh
bun add zod
```

**Verify green before moving on:**

```sh
bun run type-check && bun lint
```

**Done when:** app boots to a blank page with no errors, no boilerplate left.

---

## Phase 1 — Types foundation

Do this before any component. Types live separately; many components import one source of truth.

### `types/common.ts`

```ts
export type Async<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: string }

type Brand<T, B> = T & { readonly __brand: B }

export type ProjectId = Brand<string, 'ProjectId'>
export type SnippetId = Brand<string, 'SnippetId'>

export const projectId = (s: string) => s as ProjectId
export const snippetId = (s: string) => s as SnippetId

export function assertNever(x: never): never {
  throw new Error(`Unhandled variant: ${JSON.stringify(x)}`)
}
```

### `types/setup.ts`

```ts
export const TOOLS = ['nvim', 'tmux', 'ghostty'] as const
export type Tool = (typeof TOOLS)[number]

type BaseItem = {
  id: SnippetId
  label: string
  description: string
}

export type SetupItem =
  | (BaseItem & { tool: 'nvim'; repo: string; opts?: string })
  | (BaseItem & { tool: 'tmux'; lines: string[] })
  | (BaseItem & { tool: 'ghostty'; settings: Record<string, string> })
```

### `types/content.ts`

```ts
export const TECH_TAGS = ['vue', 'typescript', 'css', 'node', 'python'] as const
export type TechTag = (typeof TECH_TAGS)[number]

export type ContentBlock =
  | { kind: 'text'; body: string }
  | { kind: 'code'; lang: string; code: string; caption?: string }
  | { kind: 'image'; src: string; alt: string }
  | { kind: 'callout'; tone: 'info' | 'warn'; body: string }

export type Project = {
  id: ProjectId
  slug: string
  title: string
  summary: string
  tags: readonly TechTag[]
  repo?: string
  live?: string
  blocks: ContentBlock[]
}
```

### `types/quiz.ts`

```ts
export const PROFILES = ['minimal', 'balanced', 'tinkerer'] as const
export type Profile = (typeof PROFILES)[number]

type BaseQ = { id: string; prompt: string; weights: Partial<Record<Profile, number>> }

export type Question =
  | (BaseQ & { kind: 'choice'; options: readonly string[] })
  | (BaseQ & { kind: 'text'; placeholder: string })
  | (BaseQ & { kind: 'rating'; max: number })
```

### `types/index.ts`

Re-export all of the above. Every import in the app is `from '@/types'`.

**Done when:** `bun run type-check` passes with types defined and nothing consuming them yet.

---

## Phase 2 — Design system + shell

This is the CSS phase. Take it seriously — it's half the portfolio.

### Colour tokens

```css
:root {
  --bg:        #f5f2ed;
  --bg-raised: #ffffff;
  --fg:        #21201d;
  --fg-muted:  #6b6862;
  --border:    #d9d4cb;
  --accent:    #b35c00;
  --green:     #4a7c2a;
  --red:       #b3382b;
  --radius:    6px;
  --mono: 'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, monospace;
}

:root[data-theme='dark'] {
  --bg:        #14130f;
  --bg-raised: #1c1a16;
  --fg:        #e8e3d8;
  --fg-muted:  #918b7e;
  --border:    #2e2b25;
  --accent:    #e0a458;
  --green:     #8fbf60;
  --red:       #e06c5e;
}
```

Pick your own values — those are a starting point. Everything downstream reads the variables, never hardcoded colours.

### Components to build

- **`TerminalWindow.vue`** — the workhorse. Title bar, three dots, slot for body. Use `withDefaults` for `title` and a `variant` prop.
- **`PromptLine.vue`** — renders `~/portfolio ❯ {{ text }}` as a decorative heading.
- **`Tag.vue`** — tech tag chip, `withDefaults` for size.
- **`CopyButton.vue`** — used everywhere in phase 6.
- **`AppHeader.vue`** — nav links styled as `cd projects`, `cat about.md`. Plain `<RouterLink>`s.
- **`AppFooter.vue`**
- **`AppShell.vue`** — header + `<RouterView>` + footer.

### CSS to practise here

- Custom properties + `data-theme` attribute switching
- CSS Grid for the project cards, Flexbox for the header
- `clamp()` for fluid type
- `@keyframes` blink for the cursor, `steps()` for the typewriter
- `@media (prefers-reduced-motion: reduce)` — kill all animation
- Focus-visible rings that survive both themes

### Router

Register all ten routes now, each pointing at a stub page that renders its own name. Lazy-load everything except `HomePage`:

```ts
{ path: '/projects/:slug', name: 'project', component: () => import('@/pages/ProjectDetailPage.vue') }
```

**Done when:** every route navigates, header/footer render, layout doesn't break at 375px width.

---

## Phase 3 — Theme + typed localStorage + first Pinia store

### `composables/useLocalStorage.ts`

```ts
export function save<T>(key: string, value: T): void
export function load<T>(key: string, fallback: T): T
```

Start with a `JSON.parse` + `try/catch` returning `unknown`, cast to `T` with a comment marking it as a lie. Phase 9 comes back and adds a Zod schema parameter — same story arc as `useFetch`.

### `stores/theme.ts`

```ts
export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>(load('theme', prefersDark() ? 'dark' : 'light'))
  const isDark = computed(() => theme.value === 'dark')
  function toggle() { /* flip, write data-theme on <html>, save */ }
  return { theme, isDark, toggle }
})
```

`prefersDark()` reads `window.matchMedia('(prefers-color-scheme: dark)')`.

Apply `data-theme` to `document.documentElement` in a `watchEffect`.

**Watch out:** set the attribute before first paint or you get a flash. Small inline script in `index.html` reading localStorage solves it — optional polish.

**Done when:** toggle works, survives reload, respects OS preference on a fresh visit.

---

## Phase 4 — `Async<T>` + `useFetch<T>`

Build it exactly as `ts-vue-practice-plan.md` §3 — including the `as T` cast. The cast is the point; you delete it in phase 9 and feel the difference.

```ts
export function useFetch<T>(url: string) {
  const state = ref<Async<T>>({ status: 'idle' })
  async function run() { /* … */ }
  return { state, run }
}
```

Two things to actually learn here:
1. `catch (e)` gives `unknown` — `e instanceof Error` is real narrowing.
2. The `as T` is unverified. The network doesn't care about your types.

### Wire it to GitHub

```
https://api.github.com/users/<your-handle>/repos?sort=updated&per_page=6
```

Unauthenticated limit is **60 requests/hour per IP**. Dev reloads burn it fast. Cache the response in localStorage with a timestamp, refetch only if older than an hour.

### Template narrowing

```vue
<div v-if="state.status === 'loading'">loading…</div>
<div v-else-if="state.status === 'error'">{{ state.error }}</div>
<div v-else-if="state.status === 'success'">{{ state.data.length }} repos</div>
```

Narrowing works on a plain `ref` accessed directly. **Destructure it and narrowing breaks.**

Also practise `ReturnType<typeof useFetch<Repo[]>>` when you need to pass the composable's shape around.

**Done when:** all four states render correctly. Test error by pointing at a bad URL, test loading with devtools throttling.

---

## Phase 5 — Projects

### `data/projects.ts`

```ts
import type { Project } from '@/types'

export const projects = [
  {
    id: projectId('p1'),
    slug: 'portfolio',
    title: 'This site',
    // …
    blocks: [
      { kind: 'text', body: '…' },
      { kind: 'code', lang: 'ts', code: '…' },
    ],
  },
] satisfies Project[]
```

`satisfies`, not `: Project[]`. Keeps literal types narrow while still checking the shape.

### `/projects`

Grid of cards. GitHub stars merged in from phase 4's fetch — match repo name to `project.repo`.

Use `Omit<Project, 'blocks'>` for the card component's prop type. Cards don't need the body.

### `/projects/:slug`

Typed route params. `useRoute().params.slug` is `string | string[]`:

```ts
const route = useRoute()
const slug = computed(() => {
  const raw = route.params.slug
  return Array.isArray(raw) ? raw[0] : raw
})
```

`noUncheckedIndexedAccess` makes `raw[0]` be `string | undefined`. Handle it. Not found → render the 404 component.

### `BlockRenderer.vue`

```ts
switch (block.kind) {
  case 'text':    return /* TextBlock */
  case 'code':    return /* CodeBlock */
  case 'image':   return /* ImageBlock */
  case 'callout': return /* CalloutBlock */
  default:        return assertNever(block)
}
```

Each child's props typed to its own variant:

```ts
defineProps<{ block: Extract<ContentBlock, { kind: 'code' }> }>()
```

**Test the lesson:** add a 5th variant to the union and watch the build break at exactly the right line. Then handle it or revert.

`CodeBlock.vue` renders inside a `TerminalWindow` with a `CopyButton`. No syntax highlighting yet — plain `<pre><code>` with themed colours is enough. Shiki is a stretch item.

**Done when:** every project renders, `/projects/nonsense` shows 404, adding a union variant fails the build.

---

## Phase 6 — Setup pages

Real content. Your actual configs.

### `data/setup.ts`

```ts
export const setupItems = [
  {
    id: snippetId('telescope'),
    tool: 'nvim',
    label: 'telescope.nvim',
    description: "Fuzzy finder. Can't work without it.",
    repo: 'nvim-telescope/telescope.nvim',
  },
  {
    id: snippetId('tmux-mouse'),
    tool: 'tmux',
    label: 'Mouse mode',
    description: 'Scroll and resize panes with the mouse.',
    lines: ['set -g mouse on'],
  },
  {
    id: snippetId('ghostty-font'),
    tool: 'ghostty',
    label: 'Font',
    description: 'JetBrains Mono at 14pt.',
    settings: { 'font-family': 'JetBrains Mono', 'font-size': '14' },
  },
] satisfies SetupItem[]
```

Aim for 15–20 items across the three tools. This is content work, not code work — budget time for it.

### `/setup`

Three tool cards linking to `/setup/nvim` etc. `v-for` over `TOOLS` — the `as const` array. Type can never drift from the data.

### `/setup/:tool`

Validate the param against `TOOLS` before using it:

```ts
function isTool(v: unknown): v is Tool {
  return typeof v === 'string' && (TOOLS as readonly string[]).includes(v)
}
```

That's your hand-written type guard, and it's a real one.

Filter items by tool, render through `SetupItemRenderer.vue` — switch on `tool`, `assertNever` in the default. Children: `NvimItem.vue`, `TmuxItem.vue`, `GhosttyItem.vue`, each taking `Extract<SetupItem, { tool: 'nvim' }>` and friends.

Every card gets:
- a `CopyButton`
- an `+ add to my config` button emitting `add: [item: SetupItem]`

Typed emits:

```ts
const emit = defineEmits<{
  add: [item: SetupItem]
  copy: []
}>()
```

### `composables/useClipboard.ts`

`navigator.clipboard.writeText`. Return `{ copy, copied }` where `copied` is a ref that flips true for 2 seconds.

### `stores/toast.ts`

15 lines. `push(msg)`, auto-dismiss after 3s. One `<ToastHost>` in `AppShell`. Copy buttons and add buttons both fire toasts.

**Done when:** all three tool pages render, copy works, add button fires (store lands in phase 10 — for now just toast).

---

## Phase 7 — Generic data table

```vue
<script setup lang="ts" generic="T extends { id: string }">
defineProps<{
  rows: T[]
  columns: {
    key: keyof T
    label: string
    format?: (value: T[keyof T]) => string
  }[]
}>()
</script>
```

`key: 'nmae'` is now a compile error. `T[keyof T]` is an indexed access type — that's the lesson.

Build in three passes, each working before the next:

1. **Plain render.** Rows and columns, nothing else.
2. **Sorting.** Click a header, sort by that key. Typed comparator, tri-state (asc → desc → off).
3. **Filter.** One text input, filters across all columns.

### Use it twice

- `/uses` — hardware and software table
- `/setup/nvim` — a compact plugin list view

Second use is what proves the generic was worth writing. If it doesn't fit the second case, the type is wrong — fix the shape, not the type.

Stretch: a `Pick<T, K>` compact mode for narrow screens.

**Done when:** both tables work, sorting is type-safe, a typo in a column key fails the build.

---

## Phase 8 — Quiz

Six questions covering all three variants.

| Kind | Question |
|---|---|
| `choice` | Which editor do you live in? — VS Code / Neovim / JetBrains / Zed |
| `choice` | Terminal multiplexer? — tmux / zellij / none / what's that |
| `choice` | Mouse or keyboard? — mouse / keyboard / both |
| `rating` | How much do you care about startup time? (1–5) |
| `rating` | How much do you enjoy tweaking configs? (1–5) |
| `text` | Favourite colourscheme? |

### Scoring

```ts
const scores = ref<Record<Profile, number>>({ minimal: 0, balanced: 0, tinkerer: 0 })
```

Each answer adds weight. Highest score wins. Ties → `balanced`.

### Components

`QuestionRenderer.vue` switches on `kind`, `assertNever` in default. Three children:

```ts
// ChoiceQuestion.vue
defineProps<{ question: Extract<Question, { kind: 'choice' }> }>()
const emit = defineEmits<{ answer: [value: string] }>()
```

`RatingQuestion` emits `[value: number]`, `TextQuestion` emits `[value: string]`. Wrong payload = compile error. That's the point.

### Result screen

> You're a **tinkerer**. Favourite colourscheme: *rose-pine*.
> Here's a starter setup → **[add all to My Config]**

Map each profile to a curated `SnippetId[]`. That button calls into the phase 10 store.

Keep quiz answer state local to the page (`ref`) — no Pinia needed. Knowing when *not* to reach for a store is part of the lesson.

**Done when:** all six questions render, back/forward between questions works, result is deterministic.

---

## Phase 9 — Zod

### Contact form

```ts
export const contactSchema = z.object({
  name: z.string().min(2, 'Too short'),
  email: z.email('Invalid email'),
  subject: z.enum(['work', 'question', 'other']),
  message: z.string().min(10, 'Say a bit more').max(500, 'Too long'),
})

export type ContactForm = z.infer<typeof contactSchema>
```

Schema first, type derived. They can never disagree.

Draft state is `Partial<ContactForm>` — nothing is filled at the start, and the type should say so.

```ts
const result = contactSchema.safeParse(draft.value)
if (!result.success) {
  // map result.error.issues -> Partial<Record<keyof ContactForm, string>>
} else {
  // result.data is fully typed
}
```

Validate on blur per field, and on submit for everything.

Submission target: Formspree or Web3Forms (both free, no backend). Or just log it and show a success state — it's a portfolio, not a product.

Emit typed: `submit: [data: ContactForm]`.

### Retrofit `useFetch`

```ts
export function useFetch<T>(url: string, schema: z.ZodType<T>) {
  // …
  const parsed = schema.safeParse(json)
  if (!parsed.success) throw new Error('Response shape mismatch')
  state.value = { status: 'success', data: parsed.data }
}
```

Write `repoSchema` in `types/api.ts` picking only the GitHub fields you use — `name`, `description`, `stargazers_count`, `html_url`. **Delete the `as T`.** This is the moment types stop being decoration.

### Retrofit `useLocalStorage`

```ts
export function load<T>(key: string, schema: z.ZodType<T>, fallback: T): T
```

localStorage is `unknown` from the outside — someone could have edited it, or your own schema changed between deploys. `safeParse` + fallback handles both.

**Done when:** no `as T` remains, `grep -rn "as T\|: any\|as any" src/` is clean, form rejects bad input with per-field messages.

---

## Phase 10 — Config Builder (main Pinia store)

The centrepiece. Same shape as the `useCartStore` in `ts-vue-practice-plan.md` §7, but useful.

### `stores/config.ts`

```ts
export const useConfigStore = defineStore('config', () => {
  const items = ref<SetupItem[]>(load('my-config', z.array(setupItemSchema), []))

  const count = computed(() => items.value.length)

  const byTool = computed<Record<Tool, SetupItem[]>>(() => /* group by item.tool */)

  const files = computed<Record<Tool, string>>(() => ({
    nvim:    generateNvim(byTool.value.nvim),
    tmux:    generateTmux(byTool.value.tmux),
    ghostty: generateGhostty(byTool.value.ghostty),
  }))

  function add(item: SetupItem) {
    if (items.value.some(i => i.id === item.id)) return
    items.value.push(item)
  }
  function remove(id: SnippetId) { /* … */ }
  function clear() { items.value = [] }

  return { items, count, byTool, files, add, remove, clear }
})
```

Persist with a `watch` on `items` writing to localStorage.

### Generators — `lib/generate.ts`

Pure functions. No Vue imports. Each takes `SetupItem[]` and returns a string.

```ts
export function generateNvim(items: SetupItem[]): string
export function generateTmux(items: SetupItem[]): string
export function generateGhostty(items: SetupItem[]): string
```

Or one function switching on `tool` with `assertNever` — second `assertNever` in the codebase, on the same union, in a totally different context. That's the pattern proving itself.

Output shapes:

```lua
-- plugins.lua
return {
  { 'nvim-telescope/telescope.nvim' },
  { 'folke/which-key.nvim' },
}
```

```sh
# .tmux.conf
set -g mouse on
set -g base-index 1
```

```ini
# ghostty/config
font-family = JetBrains Mono
font-size = 14
```

Every file gets a header comment crediting the site. Free backlink.

### `/builder` page

- Empty state: "Nothing here yet. Go pick some things →"
- Tab per tool, only tools with items
- Each tab: `TerminalWindow` with the generated file, `[copy]` and `[download]`
- Item list with `[x]` remove buttons
- `[clear all]` with a confirm step

### Download

```ts
function download(filename: string, contents: string) {
  const blob = new Blob([contents], { type: 'text/plain' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
```

No dependency. One button per file — skip zip, it needs a library.

### Wire everything up

- Setup page `+ add` buttons → `store.add(item)` + toast
- Header shows `my config (3)` linking to `/builder`, hidden at zero
- Quiz result `add all` → loop `store.add()`

**Done when:** add items on three different pages, reload, they're still there, downloaded files are valid config.

---

## Phase 11 — Polish + ship

### Accessibility

- Full keyboard run-through, no mouse. Every interactive thing reachable and visibly focused.
- `aria-live="polite"` on the toast host
- `aria-current="page"` on the active nav link
- Real `<button>` and `<a>` elements, never a clickable `<div>`
- Alt text on every image
- Contrast check both themes — WCAG AA minimum
- `prefers-reduced-motion` actually kills the typewriter and blink

### Meta

- Per-route `<title>` via a router `afterEach` hook
- `og:image`, `og:title`, `og:description`
- `favicon` matching the theme
- `robots.txt`, `sitemap.xml`

### Performance

- Lighthouse ≥ 95 across the board
- Fonts: `font-display: swap`, subset if self-hosting
- Images: correct sizes, `loading="lazy"` below the fold
- `bun run build` and check the bundle — route lazy-loading should keep the initial chunk small

### Final type audit

```sh
grep -rn ": any\|as any\|@ts-ignore\|@ts-expect-error" src/
bun run type-check
bun lint
```

Should all come back clean.

### Deploy

Netlify or Vercel — connect the repo, build command `bun run build`, publish `dist`. GitHub Pages works too but needs `base` set in `vite.config.ts`.

Add a GitHub Action running `type-check` + `lint` on push. Ten lines, and it stops you shipping a broken build.

---

## Stretch — only after the core ships

Ordered by value-to-effort:

1. **`/resume`** — print stylesheet only (`@media print`). Under-practised CSS, genuinely useful.
2. **Vitest** on the pure functions — generators, comparators, type guards. No component tests needed; these are the parts worth testing.
3. **`/logbook`** — TIL entries with tag filtering. Reuses the filter logic from `DataTable`.
4. **Shiki** syntax highlighting, themed to your palette.
5. **`requires?: SnippetId[]`** on setup items — adding telescope auto-adds plenary.
6. **Shareable quiz result** — encode answers in the querystring, decode with Zod. Real use for `safeParse` on untrusted input.
7. **Live dotfiles** — fetch your actual config from GitHub raw so the site never goes stale.
8. **Konami code** easter egg.

---

## Rules to hold to

**No `any`.** Write `unknown` and narrow.

**Types before components.** Every phase that adds a feature starts by adding its type.

**One thing at a time.** Type-check green before starting the next phase.

**Don't out-clever yourself.** From `ts-vue-practice-plan.md`: if a type takes 30 minutes to satisfy, the *data model* is wrong, not the type. Simplify the shape.

**Real content only.** Placeholder text is how portfolios die at 80% done. Write the real words as you build each page.

---

## Progress

- [ ] Phase 0 — Clean base
- [ ] Phase 1 — Types foundation
- [ ] Phase 2 — Design system + shell
- [ ] Phase 3 — Theme + localStorage + theme store
- [ ] Phase 4 — `Async<T>` + `useFetch<T>`
- [ ] Phase 5 — Projects
- [ ] Phase 6 — Setup pages
- [ ] Phase 7 — Generic data table
- [ ] Phase 8 — Quiz
- [ ] Phase 9 — Zod
- [ ] Phase 10 — Config Builder
- [ ] Phase 11 — Polish + ship
