"use client";
import { useMouseContext, useMousePosition } from "shared";
import React, { useCallback, useEffect, useRef } from "react";
import styles from "./DotRing.module.css";

export default function DotRing() {
  const { cursorType } = useMouseContext();
  const { x, y } = useMousePosition();

  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  const updateUI = useCallback(() => {
    const ringElement = ringRef.current;
    const dotElement = dotRef.current;

    if (ringElement && dotElement) {
      ringElement.style.left = `${x}px`;
      ringElement.style.top = `${y}px`;
      dotElement.style.left = `${x}px`;
      dotElement.style.top = `${y}px`;
    }
  }, [x, y]);

  useEffect(() => {
    requestAnimationFrame(updateUI);
  }, [updateUI]);
  return (
    <>
      <div ref={ringRef} className={`${styles.ring} ${styles[cursorType]}`} />
      <div ref={dotRef} className={`${styles.dot} ${styles[cursorType]}`} />
    </>
  );
}
