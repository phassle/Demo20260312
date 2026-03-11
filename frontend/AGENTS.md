# AGENTS.md — CompanyX Frontend

## Stack
- React 18 + TypeScript + Vite
- Router: react-router-dom v6
- HTTP: axios → proxied to backend at /api

## Commands
- Dev: `npm run dev` (port 3000)
- Build: `npm run build`
- Lint: `npm run lint`
- Test: `npm run test`

## Conventions
- Components in `src/components/` — PascalCase, one per file
- Pages in `src/pages/` — one per route
- API calls in `src/services/api.ts` — never call axios directly from components
- Types in `src/types/` — shared interfaces
- Hooks in `src/hooks/` — custom hooks prefixed with `use`

## Stop rules
- Never modify vite.config.ts proxy without asking
- Never add new npm dependencies without approval
