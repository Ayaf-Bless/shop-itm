import { Product } from "@common/types/product";
import React from "react";
import { ChildrenProps } from "@components/common/type";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product;
}

const ProductCard: React.FC<ChildrenProps & Props> = ({ product }) => {
  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <a>
          <div>
            <h3>
              <span>{product.name}</span>
            </h3>
            <span>$14</span>
          </div>
          {product.images && (
            <Image
              src={"/product-image-placeholder.svg"}
              alt={product.name ?? "Product image"}
              height={540}
              width={540}
              quality={"58"}
              layout={"responsive"}
            />
          )}
        </a>
      </Link>
    </>
  );
};

export default ProductCard;
