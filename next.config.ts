import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static, content-led business site: no cache-components / partial
  // prefetching — plain static prerendering keeps builds predictable.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
