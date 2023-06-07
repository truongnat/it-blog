import React from "react"
import { MetaHeader, PageSEO } from "~/components"
import { RootLayout } from "~/layouts"

export default function Project() {
  return (
    <>
      <PageSEO title={"Dự án"} />
      <RootLayout.Container>
        <MetaHeader title="Dự án" />
      </RootLayout.Container>
    </>
  )
}
