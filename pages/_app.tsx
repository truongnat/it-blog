import "~/styles/globals.css";
import "~/styles/mdx.css";
import "inter-ui/inter.css";
import Head from "next/head";
import { ReactElement } from "react";
import { ThemeProvider, useTheme } from "next-themes";
import { CssBaseline, GeistProvider } from "@geist-ui/core";
import { siteMetadata } from "~/shared";
import { RootLayout } from "~/layouts";

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <GeistProviderWithTheme>
        <RootLayout>
          <CssBaseline />
          <Component {...pageProps} />
        </RootLayout>
      </GeistProviderWithTheme>
    </ThemeProvider>
  );
}

function GeistProviderWithTheme(props: any): ReactElement {
  const { resolvedTheme } = useTheme();

  return (
    <GeistProvider themeType={resolvedTheme}>{props.children}</GeistProvider>
  );
}
