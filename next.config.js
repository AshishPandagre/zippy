/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "github.com",
      "asana-user-private-us-east-1.s3.amazonaws.com",
      "source.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
