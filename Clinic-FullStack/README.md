# Tendo

Cloud-based practice management platform for Registered Massage Therapists (RMTs).

**One React app (JavaScript/JSX). Everything in `frontend/src/`.**

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build
```

## Project Structure

```
frontend/src/
├── app/           # Router, providers, layouts
├── modules/       # Feature modules
├── components/    # Shared UI components
├── api/           # API client
└── ...
```

No separate `apps/landing`, `apps/portal`, or `apps/clinic` — everything is built inside this single application.

## Development

Build one module at a time. Stop after each module for approval.
