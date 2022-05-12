import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>COVID in Pixels</title>
        <meta name="title" content="COVID in Pixels" />
        <meta
          name="description"
          content="Every pixel is a life. View COVID-19's impact on the world."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://covid-in-pixels.eliothertenstein.com/"
        />
        <meta property="og:title" content="COVID in Pixels" />
        <meta
          property="og:description"
          content="Every pixel is a life. View COVID-19's impact on the world."
        />
        <meta
          property="og:image"
          content="https://covid-in-pixels.eliothertenstein.com/assets/images/meta.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://covid-in-pixels.eliothertenstein.com/"
        />
        <meta property="twitter:title" content="COVID in Pixels" />
        <meta
          property="twitter:description"
          content="Every pixel is a life. View COVID-19's impact on the world."
        />
        <meta
          property="twitter:image"
          content="https://covid-in-pixels.eliothertenstein.com/assets/images/meta.png"
        />

        <meta name="keywords" content="covid,covid-19,pixel,data,visualized" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
        <meta name="language" content="english"></meta>

        <link
          rel="icon"
          type="image/svg+xml"
          href="https://covid-in-pixels.eliothertenstein.com/assets/images/favicon.svg"
        />
        <link
          rel="icon"
          type="image/png"
          href="https://covid-in-pixels.eliothertenstein.com/assets/images/favicon.png"
        ></link>
      </Head>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
