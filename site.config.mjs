// NEXVORA Technologies — Site Configuration
// Single source of truth for site configuration.
export const SITE_BASE = '/';
export const SITE_URL = 'https://nexvora.com';
export const ACTIVE_TEMPLATE = 'nova';

// NEXVORA site uses English as the default locale.
export const SITE_LOCALE = 'en';

// BUILD_SCOPE — what goes into build (dist/) and what stays dev-only.
export const BUILD_SCOPE = {
  // Allowlist of paths to keep in build. Empty [] = all.
  pages: [],
  // Denylist — always removed from dist/ (dev-only, prototypes, demo).
  forceRemove: ['starwind-demo', 'layout-test', 'roofing', 'dev', 'qa'],
  // Whether to clean unused media (images, videos, fonts) from dist/.
  images: true,
};
