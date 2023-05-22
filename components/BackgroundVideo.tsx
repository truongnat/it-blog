"use client";
import { useResize } from "shared";
import React from "react";

export default function BackgroundVideo() {
  const { height, width } = useResize();
  return (
    <div className={"fixed bottom-0 right-0 z-[-1] min-h-full min-w-full"}>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="object-cover"
        style={{ width, height }}
      >
        <source src="static/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
