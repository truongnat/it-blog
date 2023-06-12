import React from "react"
import { MetaHeader, PageSEO } from "~/components"
import { RootLayout } from "~/layouts"

export default function About() {
  return (
    <>
      <PageSEO title={"Về tôi"} />
      <RootLayout.Container>
        <MetaHeader title="Về tôi" />
        <div>
          Bản thân mỗi chúng ta đều là những câu chuyện, và tôi đang trên con
          đường viết nên câu chuyện của chính mình {"<3"}.
        </div>
      </RootLayout.Container>
    </>
  )
}
