"use client"

import { PageSEO } from "~/components"
import { siteMetadata, useMouseContext } from "~/shared"
import { TypeAnimation } from "react-type-animation"

export default function Home() {
  const { cursorChangeHandler } = useMouseContext()

  return (
    <>
      <PageSEO title={siteMetadata.title} />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <h1 className="text-4xl font-semibold">Xin chào, Tôi là TruongDQ</h1>
          <br />
          <TypeAnimation
            sequence={[
              1500,
              "Software Engineer",
              1000,
              "Người truyền cảm hứng",
            ]}
            speed={50}
            style={{ fontSize: "1.25rem", fontWeight: "normal" }}
            repeat={Infinity}
          />
          <div className="pt-4 font-light">
            Hãy chia sẻ nếu bạn gặp khó khăn {"<3"}{" "}
          </div>
        </div>
      </div>
    </>
  )
}
