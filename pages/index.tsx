import React from "react";
import type { InferGetStaticPropsType } from "next";
//own import
import { getAllProducts } from "@framework/products/get-all-products";
import { getConfic } from "@framework/api/config";
import { Layout } from "@components/common";
import { ProductCard } from "@components/product";
import { Grid, Hero, Marquee } from "@components/ui";

export async function getStaticProps() {
  const config = getConfic();
  const products = await getAllProducts(config);

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div>
        <Grid>
          {products.slice(0, 3).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Grid>
        <Hero
          headline={"Shop it and shop it right"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum porta enim eget scelerisque fermentum."
          }
        />
        <Marquee>
          {products.slice(0, 3).map((product) => (
            <ProductCard variant={"slim"} product={product} key={product.id} />
          ))}
        </Marquee>
        <Grid layout={"B"}>
          {products.slice(0, 3).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </Grid>
        <Marquee variant={"secondary"}>
          {products.slice(0, 3).map((product) => (
            <ProductCard variant={"slim"} product={product} key={product.id} />
          ))}
        </Marquee>
      </div>
    </>
  );
}

Home.Layout = Layout;
