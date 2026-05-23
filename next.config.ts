import type { NextConfig } from "next";

const isCloudRun = process.env.CLOUD_RUN === "true";
const isProd = process.env.NODE_ENV === "production";

const base = isCloudRun ? "" : isProd ? "/creativeprintnj" : "";

const nextConfig: NextConfig = {
  output: isCloudRun ? "standalone" : "export",
  basePath: base,
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
