import { getAllProductsQuery } from "../utils";
import { normalizeProduct } from "../utils";
import { ProductConnection } from "../schema";
import { Product } from "@common/types/product";
import { ApiConfig } from "@common/types/api";

type ReturnType = { products: ProductConnection };

export const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
  const { data } = await config.fetch<ReturnType>({
    query: getAllProductsQuery,
    url: config.apiUrl,
  });
  return (
    data.products.edges.map(({ node: product }) => {
      return normalizeProduct(product);
    }) ?? []
  );
};
