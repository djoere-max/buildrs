# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Local Development
- `bun run dev` - Start Next.js development server with Turbopack
- `bun i` - Install dependencies

### Database Operations
- `bun run generate-types` - Generate TypeScript types from Supabase schema
- `bun run supabase:link` - Link local project to remote Supabase project
- `bun run migration:new <name>` - Create new database migration
- `bun run migration:up` - Run migrations and regenerate types
- `bun run migration:squash` - Squash migrations

### Email Development
- `bun run email:dev` - Start React Email development server (port 3001)
- `bun run email:build` - Build email templates
- `bun run email:export` - Export email templates

### Build & Quality
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint

### Stripe Integration
- `bun run stripe:listen` - Listen for Stripe webhooks (requires project name update)
- `stripe fixtures ./stripe-fixtures.json --api-key <your-sk>` - Load product fixtures

## Architecture Overview

This is a **Next.js 15 SaaS starter** with Supabase, Stripe, and React Email integration. The project follows a feature-based architecture pattern.

### Core Stack
- **Next.js 15** with App Router and React 19
- **Supabase** for database and authentication
- **Stripe** for payments and subscriptions
- **React Email + Resend** for transactional emails
- **TailwindCSS + shadcn/ui** for styling
- **TypeScript** throughout

### Directory Structure

**Feature-based organization:**
- `src/features/` - Business logic grouped by feature
  - `account/` - User account management controllers
  - `pricing/` - Stripe product/pricing logic and components
  - `emails/` - React Email templates

**Infrastructure:**
- `src/libs/` - External service integrations (Supabase, Stripe, Resend clients)
- `src/components/` - Reusable UI components (shadcn/ui in `ui/` subfolder)
- `src/app/` - Next.js App Router pages and API routes

### Key Architectural Patterns

**Authentication Flow:**
- Server-side auth via `src/features/account/controllers/get-session.ts`
- Middleware-based route protection in `src/middleware.ts`
- Multiple Supabase client configurations for different contexts

**Stripe Integration:**
- Webhooks sync Stripe data to Supabase (`src/app/api/webhooks/route.ts`)
- Product metadata schema with Zod validation (`src/features/pricing/models/product-metadata.ts`)
- Checkout flow through server actions

**Database Schema:**
- Managed via Supabase migrations
- TypeScript types auto-generated from schema
- Current schema appears minimal (no tables defined yet)

## Important Configuration

**Environment Variables Required:**
- Supabase: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- Stripe: `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`
- Resend: `RESEND_API_KEY`

**Setup Placeholders to Update:**
- Search for `UPDATE_THIS` strings in codebase and replace with actual values
- Stripe project name in package.json scripts
- App display name in footer and metadata
- Stripe app name in `src/libs/stripe/stripe-admin.ts`

**Product Management:**
- Products defined in `stripe-fixtures.json`
- Metadata schema defines: `price_card_variant`, `generated_images`, `image_editor`, `support_level`
- Changes to products should be made via fixtures, not Stripe dashboard

## Development Workflow

1. **Database changes**: Create migration → Run `migration:up` → Types auto-generated
2. **Product changes**: Update `stripe-fixtures.json` → Run fixture command
3. **Email development**: Use `email:dev` for live preview
4. **Type safety**: Always run `generate-types` after schema changes

## Testing & Quality

No test framework is currently configured. ESLint is configured with Prettier and Tailwind plugins.