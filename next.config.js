/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/community',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
