import React from 'react'
import Document, { DocumentInitialProps, DocumentContext, Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const originalRenderPage = ctx.renderPage

    ctx.renderPage = () => originalRenderPage({
      // useful for wrapping the whole react tree
      enhanceApp: (App) => (props) => (<App {...props} />),
      // useful for wrapping in a per-page basis
      enhanceComponent: (Component) => Component
    })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return {
      ...initialProps,
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='pt-br'>
        <Head>
          {/* Google Fonts */}
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
          {/* Favicon */}
          <link href='/favicon.ico' rel='icon' />
        </Head>
        <body>
          <Main />

          {/* NextScript */}
          <NextScript />
        </body>
      </Html>
    )
  }
}
