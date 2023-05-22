"use client";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

// onMouseEnter={() => cursorChangeHandler("hovered")}
// onMouseLeave={() => cursorChangeHandler("")}

type CursorType = "hovered" | "";

type MouseContextProps = {
  cursorType: CursorType;
  cursorChangeHandler: (str: CursorType) => void;
  bindEvent: any;
};

export const MouseContext = createContext<MouseContextProps>({
  cursorType: "",
  cursorChangeHandler: () => {},
  bindEvent: {},
});

const Provider = MouseContext.Provider;

export const MouseContextProvider = ({ children }: PropsWithChildren) => {
  const [cursorType, setCursorType] = useState<CursorType>("");

  const cursorChangeHandler = useCallback((cursorType: CursorType) => {
    setCursorType(cursorType);
  }, []);

  const bindEvent = useMemo(
    () => ({
      onMouseEnter: () => cursorChangeHandler("hovered"),
      onMouseLeave: () => cursorChangeHandler(""),
    }),
    [cursorChangeHandler]
  );

  return (
    <Provider
      value={{
        cursorType: cursorType,
        cursorChangeHandler: cursorChangeHandler,
        bindEvent,
      }}
    >
      {children}
    </Provider>
  );
};

export const useMouseContext = () => useContext(MouseContext);
