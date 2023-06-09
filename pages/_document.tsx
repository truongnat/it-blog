import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript, } from "next/document"
import { CssBaseline } from "@geist-ui/core"

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head />
        <body className={"container mx-auto bg-black p-0 text-white"}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
