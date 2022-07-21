import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Marquee.module.css";
import Ticker from "react-ticker";

const Marquee: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className={style.root}>
      {/*<Ticker>{() => <div className={style.container}>{children}</div>}</Ticker>*/}
      <div className={style.container}>{children}</div>
      {/*<Ticker>{() => <p>Hello</p>}</Ticker>*/}
    </div>
  );
};

export default Marquee;
