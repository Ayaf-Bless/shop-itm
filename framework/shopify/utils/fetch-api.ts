import { ApiFetchOption, ApiFetchResult } from "@common/types/api";

const fetchAPI = async <T>({
  query,
  url,
}: ApiFetchOption): Promise<ApiFetchResult<T>> => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      query,
    }),
  });
  const { data, errors } = await res.json();
  if (errors) {
    throw new Error(errors[0].message ?? errors.message);
  }
  return { data };
};

export default fetchAPI;
