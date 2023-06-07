import React from "react"
import { MetaHeader, PageSEO } from "~/components"
import { RootLayout } from "~/layouts"

export default function Contact() {
  return (
    <>
      <PageSEO title={"Liên hệ"} />
      <RootLayout.Container>
        <MetaHeader title="Liên hệ" />
      </RootLayout.Container>
    </>
  )
}
