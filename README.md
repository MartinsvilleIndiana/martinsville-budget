# Martinsville Budget (Public Transparency Portal) — Production Deploy Package

This is a production-ready Next.js (App Router) site designed for **public rollups only** (no transactions).

## What you get
- Seal-branded header/footer (swap in the official seal image)
- Pages: Home, Budget, Capital Projects, Documents, Glossary
- Plain-English explanations built in
- Data driven by one file: `public/data/summary.json`

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel (recommended preview)
1. Create a GitHub repo named `martinsville-budget`.
2. Upload **the contents** of this folder (make sure `package.json` is at repo root).
3. In Vercel: New Project → Import GitHub repo → Deploy.

## Branding (required)
Replace these two files with the official seal image:
- `public/brand/martinsville-seal.jpg`
- `app/icon.jpg`

## Updating numbers
Edit `public/data/summary.json` and redeploy.

## Notes
This package is designed to avoid Vercel 404 issues:
- Next.js app lives at repo root
- Uses App Router routes under `/app`
