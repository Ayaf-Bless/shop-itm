import { CurrencyCode } from "@framework/schema";

export interface ProductImage {
  url: string;
  alt?: string;
}
interface ProductPrice {
  value: number;
  currencyCode: CurrencyCode;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  slug: string;
  path: string;
  images: ProductImage[];
  vendor: string;
  handle?: string;
  price: ProductPrice;
}
