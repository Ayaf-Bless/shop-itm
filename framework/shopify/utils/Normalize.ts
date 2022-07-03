import { ImageEdge, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product";

function normalizeProductImages({ edges }: { edges: ImageEdge[] }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    images: imageConnection,
    ...rest
  } = productNode;
  return {
    id,
    name,
    handle,
    vendor,
    description,
    path: `/${handle}`,
    images: normalizeProductImages(imageConnection),
    slug: handle.replace(/^\/+|\/+$/g, ""),
    ...rest,
  };
}
