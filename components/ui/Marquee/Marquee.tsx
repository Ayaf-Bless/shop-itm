import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Marquee.module.css";

const Marquee: React.FC<ChildrenProps> = ({ children }) => {
  return <div className={style.root}>{children}</div>;
};

export default Marquee;
