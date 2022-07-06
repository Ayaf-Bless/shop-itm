import { Product } from "@common/types/product";
import React from "react";
import { ChildrenProps } from "@components/common/type";

interface Props {
  product: Product;
}

const ProductCard: React.FC<ChildrenProps & Props> = ({ product }) => {
  return (
    <>
      <div>{product.name}</div>
    </>
  );
};

export default ProductCard;
