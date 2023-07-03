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
          defer
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=24b3b45454423787cba0b4a06f4b2937&autoload=false`}
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
