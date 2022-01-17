/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
    urlImports: ['https://cdn.skypack.dev'],
  },
  eslint: {
    dirs: ['src'],
  },

  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['raw.githubusercontent.com'],
  },

  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            typescript: true,
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};
