type FetchParams = {
  query: string;
};

type FetchResult<T> = { data: T };

export const fetchAPI = async <T>({
  query,
}: FetchParams): Promise<FetchResult<T>> => {
  const url = "http://localhost:4000/graphql";

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
