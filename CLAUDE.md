# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
ZebraLabs landing page - a modern React/TypeScript application built with Vite featuring a synthwave aesthetic design with mouse-tracking logo interactions and email collection for waitlist signups.

## Development Commands
- `pnpm dev` - Start development server (runs on port 8080)
- `pnpm build` - Build for production (runs TypeScript compilation + Vite build)
- `pnpm lint` - Run ESLint with TypeScript support
- `pnpm preview` - Preview production build locally

## Architecture & Stack
- **Framework**: React 18 with TypeScript, built with Vite
- **Routing**: React Router DOM with BrowserRouter
- **UI Components**: Radix UI primitives with custom styling
- **Styling**: TailwindCSS with shadcn/ui design system
- **State Management**: React Query for server state, React hooks for local state
- **Build Tool**: Vite with SWC plugin for fast compilation

## Key Components Structure
- `src/App.tsx` - Main app with QueryClient provider, routing setup
- `src/pages/Index.tsx` - Landing page with synthwave design, mouse tracking, email signup
- `src/components/ui/` - Reusable UI components following shadcn/ui patterns
- `src/components/MouseGradient.tsx` - Mouse tracking gradient effect
- `src/lib/utils.ts` - Utility functions including clsx/tailwind-merge helpers

## Design System
- Uses shadcn/ui component library with Tailwind CSS
- Components configured in `components.json`
- Path aliases: `@/` points to `src/` directory
- Color scheme defined with CSS custom properties in theme
- Dark synthwave aesthetic with cyan/pink/purple gradients and neon effects

## Email Collection Strategy
Current implementation uses mailto: links that open the user's email client with pre-filled subject and body. The email is sent to `dan@zebralabs.org`. This is a simple approach but requires users to have email clients configured.

## Important Notes
- Server configured to run on port 8080 and bind to all interfaces (::)
- All UI components follow Radix UI + Tailwind patterns
- Mouse tracking creates 3D transform effects on logo
- Email signup form has neon styling consistent with synthwave theme