import { ChildrenProps } from "@components/common/type";
import { createContext, FC, useContext, useState } from "react";

const UIContext = createContext<{ [key: string]: any }>({
  uiState: "default",
});

export const UIProvider: FC<ChildrenProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const uiState = {
    isSidebarOpen,
    setSidebarOpen,
  };
  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  return useContext(UIContext);
};
