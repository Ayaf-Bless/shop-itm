import { Product } from "@common/types/product";
import React from "react";
import { ChildrenProps } from "@components/common/type";
import Link from "next/link";
import Image from "next/image";
import style from "./ProductCard.module.css";

interface Props {
  product: Product;
}

const ProductCard: React.FC<ChildrenProps & Props> = ({ product }) => {
  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <a className={style.root}>
          <div className={style.productBg} />
          <div className={style.productTag}>
            <h3 className={style.productTitle}>
              <span>{product.name}</span>
            </h3>
            <span className={style.productPrice}>$14</span>
          </div>
          {product.images && (
            <Image
              src={product.images[0].url ?? "/product-image-placeholder.svg"}
              alt={product.name ?? "Product image"}
              height={540}
              width={540}
              quality={"58"}
              layout={"responsive"}
              className={style.productImage}
            />
          )}
        </a>
      </Link>
    </>
  );
};

export default ProductCard;
