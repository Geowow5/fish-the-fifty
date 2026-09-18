# Fish the Fifty — Blue River update

This upload adds the Blue River Public Fishing and Hunting Area guide and links it from the Oklahoma state page.

## New route

- `/states/oklahoma/blue-river`

The guide includes ODWC access directions, map searches, the 6.25-mile wadable stream focus, seasonal rainbow-trout stocking, warmwater species, current area limits, department-area restrictions, nonresident check-in guidance, and official USGS water-data links.

## Upload

Upload the ZIP contents to the repository root. Keep the existing `package.json`, `package-lock.json`, `tsconfig.json`, and `next-env.d.ts` files. Vercel should detect the Next.js app and run `npm run build` automatically.

## Verification

The production build completed successfully with Next.js 16.3.3. The new page is statically generated at `/states/oklahoma/blue-river`.
