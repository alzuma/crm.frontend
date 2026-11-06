# Simple CRM - frontend

Vite + React + TypeScript single-page application for the Simple CRM system.

## Commands

| Command | What it does |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the dev server (default http://localhost:5173) |
| `npm run build` | Type-check and build the production static site into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint with oxlint |

## Configuration

The backend address comes from environment configuration, not from code. Copy
`.env.example` to `.env` to adjust it:

- `VITE_API_PROXY_TARGET` (development): the Vite dev server proxies `/api`
  and `/health` to this address (default `http://localhost:5080`), so the
  frontend can reach the backend same-origin without CORS.
- `VITE_API_BASE_URL`: set only when the browser should call the backend
  directly at another address (same-origin, the default, when unset).

## Layout

- `src/components/` - reusable UI components
- `src/pages/` - routed pages
- `src/api/` - the typed API client, the single place where requests to the
  backend are made

Routing uses React Router in declarative mode; pages are wired in `src/App.tsx`.
