import { PropsWithChildren } from "react";
import { AppFooter, AppHeader, BackgroundVideo, DotRing } from "components";
import { MouseContextProvider } from "shared";

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <MouseContextProvider>
      <div className={"flex min-h-screen flex-col"}>
        <AppHeader />
        <main className={"flex flex-1"}>{children}</main>
        <AppFooter />
      </div>
      <DotRing />
      <BackgroundVideo />
    </MouseContextProvider>
  );
}
