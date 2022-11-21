/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.lp1.av5ja.srv.nintendo.net'],
  },
}

module.exports = nextConfig

const withPWA = require("next-pwa")({dest: 'public'});

module.exports = withPWA({
    reactStrinctMode: true,
    images: {
      domains: ['api.lp1.av5ja.srv.nintendo.net'],
    },
  });