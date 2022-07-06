import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Grid.module.css";

const Grid: React.FC<ChildrenProps> = ({ children }) => {
  return <div className={style.root}>{children}</div>;
};

export default Grid;
