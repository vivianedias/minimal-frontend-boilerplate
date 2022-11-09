/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    const isInMaintenance = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "1";
    const redirect = isInMaintenance
      ? [
          {
            source: "/",
            destination: "/maintenance",
            permanent: false,
          },
        ]
      : [
          {
            source: "/maintenance",
            destination: "/",
            permanent: false,
          },
        ];
    return redirect;
  },
};

module.exports = nextConfig;
