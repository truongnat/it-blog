"use client"

import React, { useEffect, useRef } from "react"

export default function BackgroundVideo() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.play()
    }
  }, [])
  return (
    <div
      className={"fixed bottom-0 right-0 z-[-1] min-h-full min-w-full"}
    ></div>
  )
}
