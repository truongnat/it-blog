import { PropsWithChildren } from "react"
import { AppFooter, AppHeader, BackgroundVideo, DotRing } from "~/components"
import { MouseContextProvider } from "~/shared"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <MouseContextProvider>
      <div className={"flex min-h-screen flex-col"}>
        <AppHeader />
        <main id="content" className={"flex flex-1"}>
          {children}
        </main>
        <AppFooter />
      </div>
      <DotRing />
      <BackgroundVideo />
    </MouseContextProvider>
  )
}

RootLayout.displayName = "RootLayout"

RootLayout.Container = function LayoutContainer({
  children,
}: PropsWithChildren) {
  return <div className="container px-10 md:px-20 lg:px-40">{children}</div>
}
