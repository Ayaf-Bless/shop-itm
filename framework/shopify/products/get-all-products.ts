import { getAllProductsQuery } from "../utils/queries/get-all-products";
import { fetchAPI } from "../utils/queries/fetch-api";
import { ProductConnection } from "../schema";

type ReturnType = { products: ProductConnection };

export const getAllProducts = async () => {
  const { data } = await fetchAPI<ReturnType>({ query: getAllProductsQuery });
  return (
    data.products.edges.map(({ node: product }) => {
      return product;
    }) ?? []
  );
};
