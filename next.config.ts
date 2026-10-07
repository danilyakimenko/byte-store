import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://c.dns-shop.ru/**"
      ),
    ],
  },
}

export default nextConfig
