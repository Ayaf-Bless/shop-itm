import React from "react";
import { ChildrenProps } from "@components/common/type";

interface Props {
  el?: any;
}
const Container: React.FC<ChildrenProps & Props> = ({
  children,
  el: Component = "div",
}) => {
  return <Component className={"px-6 mx-auto mx-w-8xl"}>{children}</Component>;
};

export default Container;
