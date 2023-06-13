import { PropsWithChildren } from "react"
import { AppFooter, AppHeader } from "~/components"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
      <div className={"flex min-h-screen flex-col"}>
        <AppHeader />
        <main id="content" className={"flex flex-1"}>
          {children}
        </main>
        <AppFooter />
      </div>
  )
}

RootLayout.displayName = "RootLayout"

RootLayout.Container = function LayoutContainer({
  children,
}: PropsWithChildren) {
  return <div className="container px-10 md:px-20 lg:px-40">{children}</div>
}
