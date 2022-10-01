import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Layout.module.css";
import { Footer, NavBar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";

const Layout: React.FC<ChildrenProps> = ({ children }): JSX.Element => {
  return (
    <div className={style.root}>
      <NavBar />
      <Sidebar>
        <CartSidebar />
      </Sidebar>
      <main className={"fit"}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
