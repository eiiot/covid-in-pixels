import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="title" content="COVID in pixels" />
        <title>COVID in pixels</title>
        <meta
          name="description"
          content="every pixel is a life. view covid-19's impact on the world."
        />
        <meta name="keywords" content="covid,covid-19,pixel,data,visualized" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="language" content="english"></meta>

        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/favicon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          href="/assets/images/favicon.png"
        ></link>
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
