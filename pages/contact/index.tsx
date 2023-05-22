import React from "react";
import { MetaHeader, PageSEO } from "components";

export default function Contact() {
  return (
    <>
      <PageSEO title={"Contact"} />
      <div className="container px-10 md:px-20 lg:px-40">
        <MetaHeader title="contact" />
      </div>
    </>
  );
}
