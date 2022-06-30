import React from "react";
import type { InferGetStaticPropsType } from "next";
//own import
import { getAllProducts } from "../framework/shopify/products/get-all-products";

export async function getStaticProps() {
  const products = getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

function Home({ products }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{products}</div>;
}

export default Home;
