import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Layout.module.css";
import { Footer, NavBar } from "@components/common";
import { Sidebar } from "@components/ui";
import { CartSidebar } from "@components/cart";
import { useUI } from "@components/ui/context";

const Layout: React.FC<ChildrenProps> = ({ children }): JSX.Element => {
  const ui = useUI();

  return (
    <div className={style.root}>
      <NavBar />
      <Sidebar onClose={ui.closeSidebar} isOpen={ui.isSidebarOpen}>
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
