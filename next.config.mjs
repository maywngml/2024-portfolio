import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@plaiceholder/ui'],
  images: {
    imageSizes: [32, 64, 120],
    deviceSizes: [320, 640, 1200],
  },
};

export default withPlaiceholder(nextConfig);
