import { MetaHeader, PageSEO } from "components";
import React from "react";

export default function About() {
  return (
    <>
      <PageSEO title={"About"} />
      <div className="container px-10 md:px-20 lg:px-40">
        <MetaHeader title="About" />
      </div>
    </>
  );
}
