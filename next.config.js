/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio-tomas-roncoroni' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-tomas-roncoroni/' : '',
}

module.exports = nextConfig