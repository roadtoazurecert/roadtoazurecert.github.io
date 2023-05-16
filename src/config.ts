// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Road to Azure Certification";
export const SITE_DESCRIPTION =
  "Documenting my path to becoming Azure (and Power Platform) certified";
export const TWITTER_HANDLE = "@poweredbyaltnet";
export const MY_NAME = "Douglas Starnes";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
