/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  // Nested folders (tests/index.html) instead of flat files (tests.html)
  // so any static host serves clean URLs without special rewrite rules.
  trailingSlash: true,
};

export default nextConfig;
