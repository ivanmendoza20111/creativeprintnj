import type { NextConfig } from "next";

const isCloudRun = process.env.CLOUD_RUN === "true";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isCloudRun ? "standalone" : "export",
  basePath: isCloudRun ? "" : isProd ? "/creativeprintnj" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
