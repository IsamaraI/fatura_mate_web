import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/gizlilik-politikasi",
        destination:
          "https://amusing-periodical-3bc.notion.site/FaturaMate-Gizlilik-Politikas-2e0217951faf80d9870bea4dc5dbfdec",
        permanent: false,
      },
      {
        source: "/kullanim-kosullari",
        destination:
          "https://amusing-periodical-3bc.notion.site/FaturaMate-Gizlilik-Politikas-2e0217951faf80d9870bea4dc5dbfdec",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
