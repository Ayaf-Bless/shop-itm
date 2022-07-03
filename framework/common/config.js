const path = require("path");
const fs = require("fs");
const merge = require("deepmerge");

const ALLOWD_FW = ["shopify", "bigcommerce", "shopify_local"];

function withFrameworkConfig(defaultConfig = {}) {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw Error("The API framework is missing");
  }
  if (!ALLOWD_FW.includes(framework)) {
    throw Error(`Please provide one of these ${ALLOWD_FW.join(", ")}`);
  }
  if (framework === "shopify_local") {
    framework = ALLOWD_FW[0];
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  const config = merge(defaultConfig, frameworkNextConfig);

  const tsPath = path.join(process.cwd(), "tsconfig.json");
  const tsConfig = require(tsPath);
  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2));

  return config;
}

module.exports = { withFrameworkConfig };
