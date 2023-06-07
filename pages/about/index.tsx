import React from "react"
import { MetaHeader, PageSEO } from "~/components"
import { RootLayout } from "~/layouts"

export default function About() {
  return (
    <>
      <PageSEO title={"Về tôi"} />
      <RootLayout.Container>
        <MetaHeader title="Về tôi" />
      </RootLayout.Container>
    </>
  )
}
