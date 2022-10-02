import { ChildrenProps } from "@components/common/type";
import { createContext, FC, useContext } from "react";

const UIContext = createContext<{ [key: string]: string }>({
  uiState: "default",
});

export const UIProvider: FC<ChildrenProps> = ({ children }) => {
  return (
    <UIContext.Provider value={{ uiState: "somethingElse" }}>
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  return useContext(UIContext);
};
