/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/(.*)",
        //destination: "http://localhost:3001/api/:path*",
        destination: "http://localhost:8080/api/$1", // for ipv6
      },
    ];
  },
};

module.exports = nextConfig;
