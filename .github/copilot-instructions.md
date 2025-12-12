# Copilot instructions for this repository

Purpose
- Help AI coding agents be immediately productive in this Next.js (app router) + TypeScript + Tailwind project.

Quick facts
- Framework: Next.js (app router). See [app/layout.tsx](app/layout.tsx) and [app/page.tsx](app/page.tsx).
- Language: TypeScript. See `tsconfig.json` (strict mode enabled).
- Styling: Tailwind + custom CSS variables in [styles/globals.css](styles/globals.css).
- UI primitives: `ui/` contains low-level, reusable components; `components/` contains higher-level page components.
- Utility: `lib/utils.ts` exports `cn()` (clsx + twMerge) — use this for combining class lists.

How the app is structured (big picture)
- `app/` is the entry (Next.js app router). Components rendered there are server components by default. Add `"use client"` at the top of files that need client features (hooks, state, event handlers). Example: [app/page.tsx](app/page.tsx) uses `"use client"`.
- `components/`: page-level composition (Header, Footer, Hero, etc.). Put layout-specific or page-composed components here.
- `ui/`: small, generic UI primitives (buttons, inputs, dialog wrappers) modeled after shadcn/radix style. Prefer placing reusable low-level UI in `ui/`.
- `hooks/` contains custom hooks (e.g., `use-toast`). Prefer adding hook logic here.
- `types/` contains shared TypeScript interfaces and sample data (`types/index.ts`). Use these types for props and fixtures.
- `public/` stores static assets referenced by `next/image` (example logos referenced in `types/index.ts`).

Conventions and patterns (project-specific)
- Class names: use Tailwind utility classes and `cn(...)` from `lib/utils.ts` to compose and dedupe classes.
- Components: prefer small, focused components. Follow existing naming: PascalCase component files that export named functions (e.g., `export function Header()` in [components/header.tsx](components/header.tsx)).
- Client vs Server: default to server components inside `app/`. Only add `"use client"` when the component uses React hooks or browser APIs (e.g., `useState`, `useEffect`, event handlers).
- Styling tokens: reference CSS variables defined in [styles/globals.css](styles/globals.css) (colors, radii). Use them through Tailwind utility classes in codebase already configured.
- Images: stored in `public/` and referenced with `next/image`. The project uses `images.unoptimized: true` in [next.config.mjs](next.config.mjs) — expect no automatic remote optimization.
- State and toasts: use `hooks/use-toast.ts` and `ui/toaster.tsx` (where present) for consistent UX.

Developer workflows (commands)
- Install: `npm install` (or `pnpm install` if preferred). The repo uses standard npm scripts in [package.json](package.json).
- Dev server: `npm run dev` (starts Next dev server on default port 3000).
- Build: `npm run build` then `npm run start` to run production build.
- Lint: `npm run lint` (uses `next lint`).
- Note: `next` in `package.json` is pinned; npm may warn about security updates (upgrade with care and run the app locally to verify).

Where to look for examples
- Layout and metadata: [app/layout.tsx](app/layout.tsx).
- Page composition and imports: [app/page.tsx](app/page.tsx) — shows how `components/*` are assembled.
- Types and sample data: [types/index.ts](types/index.ts) — use for fixtures and prop shapes.
- Utility helpers: [lib/utils.ts](lib/utils.ts) (`cn`).
- Styles and tokens: [styles/globals.css](styles/globals.css).

Integration points and noteworthy dependencies
- Radix UI primitives are used throughout (`@radix-ui/*`) — components in `ui/` wrap Radix where appropriate.
- `next/font/google` is used for fonts in `app/layout.tsx` (server-side font loading).
- `next/image` with static images in `public/` — check file names (e.g., `/favbet.svg`) in `types/index.ts`.

Editor/PR guidance for AI changes
- Keep changes minimal and component-scoped; follow the existing folder responsibilities (`ui/` vs `components/`).
- When adding a new UI primitive, add it in `ui/`, export named function, add a matching story/example in a page or `components/` file for manual QA.
- Use `cn()` to combine classnames; prefer `clsx`+`tw-merge` semantics to avoid Tailwind conflicts.
- Add `"use client"` only when needed. Avoid converting whole server components to client unless necessary.

Examples (quick snippets)
- Use `cn()`:
  - `import { cn } from '@/lib/utils'
  - `className={cn('px-4 py-2', isActive && 'bg-primary')}`
- Client component header pattern: see [components/header.tsx](components/header.tsx) for toggled mobile menu with `useState`.

If something is unclear
- Ask where the change should live: `ui/` vs `components/` vs `app/`.
- If modifying Next.js config or bumping `next` version, run `npm run dev` and smoke-test pages listed in `app/`.

---
If you want, I can refine this with examples for a specific task (add component, update layout, bump next). Which area should I expand?
