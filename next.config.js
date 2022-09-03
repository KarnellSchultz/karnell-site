/* eslint-disable no-undef */
const withMDX = require('@next/mdx')();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
module.exports = withMDX();
