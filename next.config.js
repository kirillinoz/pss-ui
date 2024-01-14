/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/api/:path*",
        destination: "http://[af49:8982:876:51ff::1]:3001/api/:path*", // replace 'your-ipv6-address' with your actual IPv6 address
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
