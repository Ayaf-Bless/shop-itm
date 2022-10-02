import { ChildrenProps } from "@components/common/type";
import { createContext, FC, useContext, useReducer } from "react";

export interface StateModifiers {
  openSidebar: () => void;
  closeSidebar: () => void;
}

export interface StateValues {
  isSidebarOpen: boolean;
}

const stateModifiers: StateModifiers = {
  openSidebar: () => {},
  closeSidebar: () => {},
};

type State = StateValues & StateModifiers;

const initialState: StateValues = {
  isSidebarOpen: false,
};

const UIContext = createContext<State>({
  ...initialState,
  ...stateModifiers,
});

type Action = {
  type: "OPEN_SIDEBAR" | "CLOSE_SIDEBAR";
};

function uiReducer(state: StateValues, action: Action) {
  switch (action.type) {
    case "OPEN_SIDEBAR": {
      return {
        ...state,
        isSidebarOpen: true,
      };
    }
    case "CLOSE_SIDEBAR": {
      return {
        ...state,
        isSidebarOpen: false,
      };
    }
    // default: {
    //   return state;
    // }
  }
}

export const UIProvider: FC<ChildrenProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initialState);
  const openSidebar = () => dispatch({ type: "OPEN_SIDEBAR" });
  const closeSidebar = () => dispatch({ type: "CLOSE_SIDEBAR" });

  const values = {
    openSidebar,
    closeSidebar,
    ...state,
  };
  return <UIContext.Provider value={values}>{children}</UIContext.Provider>;
};

export const useUI = () => {
  return useContext(UIContext);
};
