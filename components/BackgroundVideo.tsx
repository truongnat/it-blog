"use client"

import React, { useEffect, useRef } from "react"
import { useResize } from "~/shared"

export default function BackgroundVideo() {
  const { height, width } = useResize()
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.play()
    }
  }, [])
  return (
    <div className={"fixed bottom-0 right-0 z-[-1] min-h-full min-w-full"}>
      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="object-cover"
        style={{ width, height }}
        ref={ref}
      >
        <source src="static/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  )
}
