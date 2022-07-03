import { getAllProductsQuery } from "../utils";
import { fetchAPI, normalizeProduct } from "../utils";
import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";

type ReturnType = { products: ProductConnection };

export const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchAPI<ReturnType>({ query: getAllProductsQuery });
  return (
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? []
  );
};
