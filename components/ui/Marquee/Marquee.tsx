import React from "react";
import { ChildrenProps } from "@components/common/type";
import style from "./Marquee.module.css";
import cn from "classnames";
// import Ticker from "react-ticker";
interface MarqueeProps {
  variant?: "primary" | "secondary";
}

const Marquee: React.FC<ChildrenProps & MarqueeProps> = ({
  children,
  variant = "primary",
}) => {
  const rootClassName = cn(style.root, {
    [style.secondary]: variant === "secondary",
  });
  return (
    <div className={rootClassName}>
      {/*<Ticker>{() => <div className={style.container}>{children}</div>}</Ticker>*/}
      <div className={style.container}>{children}</div>
      {/*<Ticker>{() => <p>Hello</p>}</Ticker>*/}
    </div>
  );
};

export default Marquee;
