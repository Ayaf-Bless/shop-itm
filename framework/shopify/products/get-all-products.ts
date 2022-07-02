import { getAllProductsQuery } from "../utils/queries/get-all-products";
import { fetchAPI } from "../utils/queries/fetch-api";
import { ProductConnection } from "../schema";

type RetunType = { products: ProductConnection };

export const getAllProducts = async () => {
  const { data } = await fetchAPI<RetunType>({ query: getAllProductsQuery });
  return data.products;
};
