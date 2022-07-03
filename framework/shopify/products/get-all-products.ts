import { getAllProductsQuery } from "../utils/queries/get-all-products";
import { fetchAPI } from "../utils/queries/fetch-api";
import { ProductConnection } from "../schema";
import { normalizeProduct } from "../utils/Normalize";
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
