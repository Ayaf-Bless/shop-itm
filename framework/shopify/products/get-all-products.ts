import { getAllProductsQuery } from "../utils/queries/get-all-products";

type FetchParam = {
  query: string;
};

const fetchAPI = async ({ query }: FetchParam) => {
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
  const data = await res.json();
  return { data };
};

export const getAllProducts = async () => {
  const products = await fetchAPI({ query: getAllProductsQuery });
  return products.data;
};
