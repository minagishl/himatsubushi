import { basePath } from './next.config.mjs';
const origin = new URL(process.env.ORIGIN || 'http://localhost:3000');
const url = origin + basePath ?? '';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: url,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
};
