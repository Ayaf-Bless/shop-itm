/** @type {import('next').NextConfig} */

const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "fr"],
    defaultLocale: "en-US",
  },
  framework: {
    name: "shopify",
  },
});

module.exports = nextConfig;
