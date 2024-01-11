/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/api/:path*",
        // destination: "http://[af49:8982:876:51ff::1]:3001/api/:path*", // for ipv6
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
