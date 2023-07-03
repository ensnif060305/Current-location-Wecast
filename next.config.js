/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")
const withPlugins = require("next-compose-plugins")

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig

module.exports = withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
        },
      },
    ],
    // 추가 플러그인 작성
  ],
  nextConfig,
)
