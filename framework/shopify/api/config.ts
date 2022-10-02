import { fetchAPI } from "@framework/utils";
import { ApiConfig } from "@common/types/api";

class Config {
  constructor(private config: ApiConfig) {}
  getConfig(): ApiConfig {
    return this.config;
  }
}

const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchAPI,
});

export function getConfig() {
  return configWrapper.getConfig();
}
