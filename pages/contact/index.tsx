import React from "react"
import { MetaHeader, PageSEO } from "~/components"
import { RootLayout } from "~/layouts"

export default function Contact() {
  return (
    <>
      <PageSEO title={"Liên hệ"} />
      <RootLayout.Container>
        <MetaHeader title="Liên hệ" />
        <div>
          Trang của tôi vẫn đang trong quá trình cập nhật, rất xin lỗi vì sự bất
          tiện này!
        </div>
      </RootLayout.Container>
    </>
  )
}
