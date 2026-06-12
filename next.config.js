/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
    images: {
        unoptimized: true,
        domains: ["raw.githubusercontent.com"],
    },
}

module.exports = nextConfig
