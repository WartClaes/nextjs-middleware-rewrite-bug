/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: () => ([
    {
      source: '/article/:slug*',
      destination: '/detail/:slug*',
      locale: false,
    },
  ]),
}

module.exports = nextConfig
