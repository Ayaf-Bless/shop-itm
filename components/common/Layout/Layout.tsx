import React from "react";
import { AuxProps } from "@components/common/type";

const Layout: React.FC<AuxProps> = ({ children }): JSX.Element => {
  return <div className={"layout"}>{children}</div>;
};

export default Layout;
