# EmergeAI Risk Radar - Next.js recreation

This package recreates the public pages currently exposed by https://demo.aiqariskradar.com/ using Next.js App Router and responsive CSS.

Included routes:
- /
- /innovation/
- /insights-from-our-leaders/
- /innovation-team/
- /privacy-policy/
- /term-conditions/
- /login/

The Login button intentionally links to the live authentication application at https://www.aiqariskradar.com/login, matching the current site's architecture.

The innovation page uses the live site's infographic/screenshot assets by URL so the design can be viewed immediately. Use download-assets.ps1 to save the assets locally before production if you want the project to be independent of the WordPress media server.

Run:
1. npm install
2. npm run dev
3. npm run build
4. npm start
