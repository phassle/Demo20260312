# AGENTS.md — CompanyX (demo)

## What is this?
Regulatory technology platform — compliance monitoring for financial institutions.
This is a **demo project** for the Agentic Development Workshop (March 12, 2026).

## Tech stack
- Backend: C# / .NET 8 — solution in `backend/CompanyX.Demo.sln`
- Frontend: React 18 + TypeScript + Vite — in `frontend/`
- Integrations: YouTrack, Azure DevOps, compliance engine — in `integrations/`
- Repo: Azure DevOps git
- Issues: YouTrack (YT-prefix)

## Project structure
```
demo/
├── backend/          ← C# / .NET API
│   ├── src/          ← Controllers, Services, Models, Middleware
│   └── tests/        ← xUnit tests
├── frontend/         ← React + TypeScript + Vite
│   └── src/          ← components, pages, services, hooks, types
├── integrations/     ← External system clients (YouTrack, AzDO, compliance)
├── specs/            ← BDD spec files from refine-story subagent
└── .claude/          ← Agent config (settings, commands, agents)
```

## Commands
- Backend build: `cd backend && dotnet build`
- Backend test: `cd backend && dotnet test`
- Backend format: `cd backend && dotnet format --verify-no-changes`
- Frontend dev: `cd frontend && npm run dev`
- Frontend lint: `cd frontend && npm run lint`
- Frontend test: `cd frontend && npm run test`

## Dev setup
- Backend runs on `http://localhost:5000`
- Frontend runs on `http://localhost:3000`, proxies `/api` → `http://localhost:5000`
- After fresh clone / env rebuild: verify `frontend/vite.config.ts` proxy target is `http://localhost:5000`
- Start order: backend first, then frontend
- Before starting: kill any existing processes on ports 5000 and 3000 separately (macOS `lsof` stöder inte flera portar med kolon-syntax):
  ```
  lsof -ti :5000 | xargs kill -9 2>/dev/null; lsof -ti :3000 | xargs kill -9 2>/dev/null; true
  ```

## Git strategy
- Branch naming: `feature/YT-{ID}-{short-title}`
- Commit format: `{verb} {description} (YT-{ID})`
- Always create PR — never push directly to main

## Stop rules
- Never touch auth middleware (`backend/src/Middleware/AuthMiddleware.cs`) without asking
- Never modify `integrations/compliance-engine/` without compliance team approval
- Database migrations require review — never auto-apply
- Shared libraries (`backend/src/Shared/`) require team sign-off
- Never add npm dependencies without approval
- If unsure: stop and ask

## Style
- Be extremely concise. Sacrifice grammar for concision.
- At the end of each plan, list unresolved questions (if any).

## Further reading
- Architecture patterns: `docs/architectural_patterns.md`
- API conventions: `docs/api_conventions.md`
- Frontend: `frontend/AGENTS.md`
- Integrations: `integrations/AGENTS.md`
