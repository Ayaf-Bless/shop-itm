import { AppProps } from "next/app";
import { FC } from "react";
import { ChildrenProps } from "@components/common/type";
import "@assets/main.css";

const Noop: FC<ChildrenProps> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<ChildrenProps> } }) {
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
