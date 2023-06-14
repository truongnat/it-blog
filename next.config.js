const { withContentlayer } = require("next-contentlayer")
const withImages = require("next-images")

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "welcome.peanut-ft.com"],
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    })

    return config
  },
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ["en-US", "vi-VN"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  trailingSlash: true,
}

module.exports = withBundleAnalyzer(withImages(withContentlayer(nextConfig)))
