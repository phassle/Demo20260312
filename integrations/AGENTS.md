# AGENTS.md — Integrations

## What is this?
External system integrations: YouTrack, Azure DevOps, compliance engine.

## Stop rules
- **compliance-engine/**: NEVER modify without explicit compliance team approval
- **youtrack/**: MCP config contains secrets — never commit tokens
- **azure-devops/**: PAT tokens in env vars only, never in code

## Day 2 topics
- Build a real YouTrack MCP server (replaces mock)
- Azure DevOps MCP for automated PR creation
- Compliance engine as a verify hook
