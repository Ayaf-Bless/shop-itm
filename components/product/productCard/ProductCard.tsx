import { Product } from "@common/types/product";
import React from "react";
import { ChildrenProps } from "@components/common/type";
import Link from "next/link";
import Image from "next/image";
import style from "./ProductCard.module.css";

interface Props {
  product: Product;
  variant?: "simple" | "slim";
}

const ProductCard: React.FC<ChildrenProps & Props> = ({
  product,
  variant = "simple",
}) => {
  return (
    <>
      <Link href={`/products/${product.slug}`}>
        <a className={style.root}>
          {variant === "slim" ? (
            <>
              <div
                className={
                  "inset-0 flex justify-center items-center absolute z-20 "
                }
              >
                <span className={"bg-black text-white p-3 font-bold text-xl"}>
                  {product.name}
                </span>
              </div>
              {product.images && (
                <Image
                  src={
                    product.images[0].url ?? "/product-image-placeholder.svg"
                  }
                  alt={product.name ?? "Product image"}
                  height={320}
                  width={320}
                  quality={"58"}
                  layout={"fixed"}
                  className={style.productImage}
                />
              )}
            </>
          ) : (
            <>
              <div className={style.productBg} />
              <div className={style.productTag}>
                <h3 className={style.productTitle}>
                  <span>{product.name}</span>
                </h3>
                <span className={style.productPrice}>
                  {product.price.currencyCode} {product.price.value}
                </span>
              </div>
              {product.images && (
                <Image
                  src={
                    product.images[0].url ?? "/product-image-placeholder.svg"
                  }
                  alt={product.name ?? "Product image"}
                  height={540}
                  width={540}
                  quality={"58"}
                  layout={"responsive"}
                  className={style.productImage}
                />
              )}
            </>
          )}
        </a>
      </Link>
    </>
  );
};

export default ProductCard;
