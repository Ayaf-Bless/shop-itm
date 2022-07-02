import { Product as ShopifyProduct } from "../schema";

export function normalizeProduct(productNode: ShopifyProduct) {
  const { id, title: name, handle, vendor, description, ...rest } = productNode;
  return {
    id,
    name,
    handle,
    vendor,
    description,
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ""),
    ...rest,
  };
}
