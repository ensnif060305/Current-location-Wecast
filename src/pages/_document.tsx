import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />

        <link
          rel="apple-touch-icon"
          href="https://raw.githubusercontent.com/baejoonsoo/hangang-water-temp-PWA/main/public/touch-icon.png"
        ></link>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f6f238c69d0126a5c0c556b920041bc9"
          async
        ></script>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
