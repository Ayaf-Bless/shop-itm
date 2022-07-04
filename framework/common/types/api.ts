export type ApiFetchOption = {
  url: string;
  query: string;
};

export type ApiFetchResult<T> = {
  data: T;
};

export interface ApiConfig {
  apiUrl: string;
  fetch<T>(options: ApiFetchOption): Promise<ApiFetchResult<T>>;
}
