import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Marquee.module.css";

const Marquee: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={style.root}>
      <div className={style.container}>{children}</div>
    </div>
  );
};

export default Marquee;
