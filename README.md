# EmergeAI Risk Radar - Next.js recreation

This package contains the public EmergeAI Risk Radar pages using Next.js App Router and responsive CSS.

Included routes:
- /
- /innovation/
- /insights-from-our-leaders/
- /innovation-team/
- /privacy-policy/
- /term-conditions/
- /login/

All site images and video are served from `public/`; the production site has no WordPress runtime or media dependency.

Production routing is intentionally direct, without Azure Front Door:

- `www.aiqariskradar.com` hosts this marketing site.
- `app.aiqariskradar.com` hosts the authenticated application.
- Browser API requests go directly to `https://riskradar-api.azurewebsites.net`.

Override the latter two URLs at build time with `NEXT_PUBLIC_APP_URL` and `NEXT_PUBLIC_API_URL` if needed.

Run:
1. npm install
2. npm run dev
3. npm run build
4. npm start
