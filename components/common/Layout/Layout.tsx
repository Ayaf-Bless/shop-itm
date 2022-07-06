import React from "react";
import { AuxProps } from "@components/common/type";
import style from "./Layout.module.css";

const Layout: React.FC<AuxProps> = ({ children }): JSX.Element => {
  return (
    <>
      <main className={style.root}>{children}</main>;
    </>
  );
};

export default Layout;
