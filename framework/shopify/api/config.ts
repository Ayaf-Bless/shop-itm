import { fetchAPI } from "@framework/utils";

class Config {
  constructor(private config: any) {}
  getConfig() {
    return this.config;
  }
}

const configWrapper = new Config({
  apiUrl: "http://localhost:4000/graphql",
  fetch: fetchAPI,
});

export function getConfic() {
  return configWrapper.getConfig();
}
