import { ImageEdge, MoneyV2, Product as ShopifyProduct } from "../schema";
import { Product } from "@common/types/product";

function normalizeProductImages({ edges }: { edges: ImageEdge[] }) {
  return edges.map(({ node: { originalSrc: url, ...rest } }) => {
    return {
      url: `/images/${url}`,
      ...rest,
    };
  });
}

function normalizeProductPrice({ amount, currencyCode }: MoneyV2) {
  return {
    value: +amount,
    currencyCode,
  };
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    priceRange,
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
    price: normalizeProductPrice(priceRange.minVariantPrice),
    ...rest,
  };
}
