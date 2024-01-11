/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3001/api/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
