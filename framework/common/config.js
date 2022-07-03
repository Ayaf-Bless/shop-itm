const path = require("path");
const merge = require("deepmerge");

function withFrameworkConfig(defaultConfig = {}) {
  const framework = "shopify";

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  return merge(defaultConfig, frameworkNextConfig);
}

module.exports = { withFrameworkConfig };
