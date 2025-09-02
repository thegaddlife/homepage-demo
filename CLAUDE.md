# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This project uses **pnpm** as the package manager (enforced via `packageManager` field).

### Essential Commands

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production with Turbopack
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint linting
- `pnpm lint:fix` - Auto-fix ESLint issues
- `pnpm format` - Format all code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm type-check` - Run TypeScript type checking
- `pnpm bump-deps` - Update all dependencies (excludes react-day-picker)

### Code Quality Pipeline

Always run these commands before committing:

1. `pnpm format` - Handles import sorting and code formatting
2. `pnpm lint` - Checks for ESLint violations
3. `pnpm type-check` - Validates TypeScript

## Architecture Overview

### Tech Stack

- **Next.js 15** with App Router and Turbopack enabled
- **TypeScript** with strict type checking
- **Tailwind CSS** v4 for styling
- **shadcn/ui** components with slate theme (New York style)
- **Framer Motion** for animations
- **next-themes** for dark mode support

### Project Structure

```text
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with Providers
│   ├── page.tsx           # Homepage (client component)
│   └── providers.tsx      # Theme provider setup
├── components/
│   ├── ui/                # shadcn/ui components (auto-generated)
│   ├── layout/            # Layout components (Header, Container)
│   └── theme-toggle.tsx   # Reusable theme switcher
├── lib/                   # Utilities (cn function, etc.)
├── styles/                # Global CSS and Tailwind
└── images/                # Static images (SVGs)
```

### Key Architectural Decisions

#### Import Organization

Prettier automatically sorts imports in this order:

1. `@/` local imports first
2. React
3. Next.js
4. Third-party packages
5. Relative imports

Import separation is disabled (`importOrderSeparation: false`) to maintain consistency between IDE auto-save and `pnpm format`.

#### Component Patterns

- **Client Components**: Use `"use client"` directive for interactive components
- **shadcn/ui Integration**: Components use slate color scheme, ignore these in linting/formatting
- **Animations**: Framer Motion variants are defined as constants outside components
- **Theming**: All components support dark mode via `next-themes`

#### File Organization

- Place reusable components in `/components/` root
- Use `/components/layout/` for layout-specific components
- Keep `/components/ui/` for shadcn auto-generated components
- Store images in `/src/images/` and reference with imports
- Global styles in `/src/styles/globals.css`

### shadcn/ui Configuration

- **Style**: new-york
- **Base Color**: slate
- **Icons**: lucide-react
- **Path Aliases**: `@/components`, `@/lib`, `@/hooks`, etc.

Add new shadcn components with: `pnpm dlx shadcn@latest add [component-name]`

### Theme System

The app uses a sophisticated theming setup:

- **ThemeProvider**: Wraps the app in `/app/providers.tsx`
- **ThemeWatcher**: Syncs with system preferences automatically
- **ThemeToggle**: Dropdown component with Light/Dark/System options
- **Default**: System preference with auto-detection

### Development Environment

VS Code settings are configured for:

- Prettier as default formatter
- Auto-fix ESLint on save
- Auto-remove unused imports
- Disabled TypeScript organize imports (Prettier handles this)
- 120-character ruler, 2-space tabs

The template is designed to be used as a GitHub template repository for starting new Next.js projects.
