# Flaunt Berries

A modern React application built with Vite, TypeScript, Tailwind CSS, and Radix UI. The project appears to be a multi-page wellness/fashion site with support for health, healing, fashion, blog, contact, and legal pages.

## Key Features

- Vite-powered React + TypeScript starter
- Tailwind CSS utility classes with custom theme extensions
- Framer Motion page transitions
- React Router DOM multi-page navigation
- Radix UI component primitives for dialogs, menus, sheets, and form controls
- Responsive layout and mobile-friendly UI
- Supabase support in dependencies (optional integration)
- Modern React hooks and component organization

## Project Structure

- `src/App.tsx` - application shell and router setup
- `src/main.tsx` - app entry point
- `src/index.css` - global stylesheet and Tailwind imports
- `src/components/` - shared components and UI primitives
- `src/pages/` - page routes for Home, About, Blog, Contact, FAQ, Legal, and vertical sections
- `src/hooks/` - custom hooks (e.g. Lenis scroll helper)
- `src/components/ui/` - reusable Radix/Tailwind UI components

## Requirements

- Node.js 18+ (recommended)
- npm or yarn package manager

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open the local URL reported by Vite in your browser.

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Linting and Type Checking

```bash
npm run lint
npm run typecheck
```
## Deployment
```bash
git add .
git commit -m "first commit"
git push -u origin main
```


## Notes

- The project uses `@vitejs/plugin-react` for React support.
- Tailwind is configured in `tailwind.config.js` and scans the `src` folder.
- The app uses `react-router-dom` for client-side page routing.
- `App.tsx` includes a simple loading screen and disables body scroll while loading.

## License

This repository does not include a license file. Add one if you wish to make the project public with license terms.

# flauntberry
