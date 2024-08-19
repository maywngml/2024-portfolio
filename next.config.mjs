import withPlaiceholder from '@plaiceholder/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@plaiceholder/ui'],
  images: {
    imageSizes: [32, 64, 120],
    deviceSizes: [320, 640, 1200],
  },
  webpack: (config, {}) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          publicPath: 'files',
        },
      },
    });
    return config;
  },
};

export default withPlaiceholder(nextConfig);
