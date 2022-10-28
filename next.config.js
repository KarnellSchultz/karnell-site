/* eslint-disable no-undef */
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  reactStrictMode: true,
  experimental: { appDir: true },
}
// module.exports = nextConfig
module.exports = withMDX({
  // Append the default value with md extensions
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})
