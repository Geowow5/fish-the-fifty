# Fish the Fifty — Missouri Trout Slam update

This update adds a Missouri state guide, a Blue Ribbon Trout Slam overview with a private browser checklist, and complete trip-planning guides for all nine eligible waters. Each water guide includes the qualifying reach, named access notes and map searches, fishing tactics, fly starting points, seasonal guidance, camping information, special-area rules, and official MDC links. Missouri is linked from the home page and state directory.

## Upload

Upload the ZIP contents to the repository root, preserving the `app/`, `public/`, `package.json`, `package-lock.json`, `tsconfig.json`, and `next-env.d.ts` paths. Do not upload the ZIP as a nested file or upload `.next/` and `node_modules/`.

## Verify

Run `npm install`, then `npm run build`. The Missouri water guides are statically generated from the shared water data in `app/states/missouri/guides.ts`.
