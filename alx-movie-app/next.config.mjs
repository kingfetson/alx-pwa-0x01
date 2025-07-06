import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

// N.B: This is the minimal configuration.
// You can expand your configuration by reviewing the docs here:
// https://github.com/DuCanhGH/next-pwa

const withPWA = withPWAInit({
  dest: 'public',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['m.media-amazon.com'],
  },
};

export default withPWA({
  ...nextConfig,
});
