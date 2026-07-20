import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Permanente redirect voor achterwaartse compatibiliteit na het hernoemen
   * van het werkgebied `/bedrijf` naar `/bedrijven`.
   */
  async redirects() {
    return [
      {
        source: "/bedrijf",
        destination: "/bedrijven",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
