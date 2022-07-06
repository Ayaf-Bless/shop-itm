import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Layout.module.css";

const Layout: React.FC<ChildrenProps> = ({ children }): JSX.Element => {
  return (
    <div className={style.root}>
      <main className={"fit"}>{children}</main>;
    </div>
  );
};

export default Layout;
