"use client";

import { useEffect, useState } from "react";

export type Dimension = {
  width: string;
  height: string;
};
export function useResize() {
  const [dimension, setDimension] = useState<Dimension>({
    width: "100%",
    height: "100%",
  });

  const handleResize = () => {
    setDimension((prev) => ({ ...prev, height: `${window.innerHeight}px` }));
  };

  useEffect(() => {
    setDimension((prev) => ({
      ...prev,
      height:
        typeof window !== "undefined" ? `${window.innerHeight}px` : "100%",
    }));
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return dimension;
}
