import { getAllProductsQuery } from "../utils/queries/get-all-products";
import { fetchAPI } from "../utils/queries/fetch-api";

export const getAllProducts = async () => {
  const products = await fetchAPI({ query: getAllProductsQuery });
  return products.data;
};
