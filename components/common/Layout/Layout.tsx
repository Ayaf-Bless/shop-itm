import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Layout.module.css";
import { Footer, NavBar } from "@components/common";

const Layout: React.FC<ChildrenProps> = ({ children }): JSX.Element => {
  return (
    <div className={style.root}>
      <NavBar />
      <main className={"fit"}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
