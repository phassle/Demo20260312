# AGENTS.md — CompanyX Backend

## Stack
- C# / .NET 8 — Web API
- DI: built-in Microsoft.Extensions.DependencyInjection
- Logging: Serilog (all exceptions via Serilog, never Console.WriteLine)
- Testing: xUnit + Moq

## Commands (run from backend/)
- Build: `dotnet build`
- Test: `dotnet test`
- Format: `dotnet format --verify-no-changes`

## Conventions
- Controllers in `src/Controllers/` — one per domain, route prefix `/api/v2/`
- Services in `src/Services/` — interface + implementation, injected via DI
- Models in `src/Models/` — domain models and DTOs
- Tests in `tests/` — one test class per service, naming: `{Service}Tests.cs`

## Stop rules
- Never touch `src/Middleware/AuthMiddleware.cs` without asking
- Database migrations require review — never auto-apply
- Never modify ComplianceEngine integration without compliance team approval
