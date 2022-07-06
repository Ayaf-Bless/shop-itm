import { AppProps } from "next/app";
import { FC } from "react";
import { AuxProps } from "@components/common/type";

const Noop: FC<AuxProps> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<AuxProps> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
