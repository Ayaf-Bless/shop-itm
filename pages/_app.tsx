import { AppProps } from "next/app";
import { FC } from "react";
import { AuxProps } from "@components/common/type";
// import { Layout } from "@components/common";

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<AuxProps> } }) {
  const { Layout } = Component;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
