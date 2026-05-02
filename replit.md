# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### `artifacts/mzedu-tours` — MZEDU Tours & Travels website
- **Type**: react-vite (frontend-only, no backend needed)
- **Preview path**: `/`
- **Description**: Kenya safari tour company website ported from Next.js/Vercel
- **Routing**: wouter (client-side SPA routing)
- **Key pages**: `/` (home), `/gallery`, `/blog`, `/packages/*` (13 package detail pages), `/auth/login`, `/auth/signup`, `/admin/blog`
- **Auth**: Supabase SSR (optional — requires `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` env vars)
- **Fonts**: Playfair Display (headings) + Poppins (body) from Google Fonts
- **Colors**: Terracotta safari theme — primary `#c85a2e`, secondary `#d4a574`, background `#faf7f2`
- **Features**: Hero slideshow, animated counters, promotional popups (seasonal), booking form, contact form (EmailJS), gallery with filters, blog with Supabase backend, admin dashboard

### `artifacts/api-server` — Backend API Server
- **Type**: Express + TypeScript
- **Preview path**: `/api`
- **Description**: Shared API server (currently only healthz endpoint; MZEDU is frontend-only)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## Environment Variables (optional for full features)

- `VITE_SUPABASE_URL` — Supabase project URL (for blog auth/admin)
- `VITE_SUPABASE_ANON_KEY` — Supabase anonymous key (for blog auth/admin)
