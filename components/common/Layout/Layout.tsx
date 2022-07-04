import React from "react";

export interface AuxProps {
  children: React.ReactNode;
}
const Layout = ({ children }: AuxProps) => {
  return <div className={"Layout"}>{children}</div>;
};

export default Layout;
