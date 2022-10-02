import { AppProps } from "next/app";
import { FC } from "react";
import { ChildrenProps } from "@components/common/type";
import "@assets/main.css";
import { UIProvider } from "@components/ui/context";

const Noop: FC<ChildrenProps> = ({ children }) => <>{children}</>;

function MyApp({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: FC<ChildrenProps> } }) {
  const Layout = Component.Layout ?? Noop;
  return (
    <UIProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UIProvider>
  );
}

export default MyApp;
