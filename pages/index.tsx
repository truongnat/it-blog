"use client";
import { siteMetadata, useMouseContext } from "shared";
import { TypeAnimation } from "react-type-animation";
import { PageSEO } from "components";

export default function Home() {
  const { cursorChangeHandler } = useMouseContext();

  return (
    <>
      <PageSEO title={siteMetadata.title} />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >
          <h1 className="text-4xl font-semibold">Hi, I am TruongDQ</h1>
          <br />
          <TypeAnimation
            sequence={[
              1500,
              "Software Engineer",
              1000,
              "Inspiring Person",
              1000,
              "Exemplary Husband",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "1.25rem", fontWeight: "normal" }}
            repeat={Infinity}
          />
          <div className="pt-4 font-light">
            If you need assistance, contact me {"<3"}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
