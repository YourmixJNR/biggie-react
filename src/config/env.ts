/**
 * environment configuration object.
 */

const env = {
  APP_NAME: import.meta.env.APP_NAME || "biggie react",

  API_URL: import.meta.env.API_URL || "http://localhost:😎",

  ENV: process.env.NODE_ENV || "development",

  STRIPE_KEY: import.meta.env.STRIPE_KEY,

  ANALYTICS_KEY: import.meta.env.ANALYTICS_KEY,

  // ... add more env
} as const;

export default env;
