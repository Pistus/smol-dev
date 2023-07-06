module.exports = {
  reactStrictMode: true,
  poweredByHeader: false,
  generateEtags: false,
  distDir: 'build',
  pageExtensions: ['tsx'],
  target: 'server',
  typescript: {
    ignoreBuildErrors: true,
  },
};