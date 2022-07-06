import React from "react";
import cn from "classnames";
import { ChildrenProps } from "@components/common/type";
import style from "./Grid.module.css";

interface Props {
  layout?: "A" | "B";
}

const Grid: React.FC<ChildrenProps & Props> = ({ children, layout = "A" }) => {
  const classRoot = cn(style.root, {
    [style.layoutA]: layout === "A",
    [style.layoutB]: layout === "B",
  });
  return <div className={classRoot}>{children}</div>;
};

export default Grid;
