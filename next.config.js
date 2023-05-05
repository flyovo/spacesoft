module.exports = {
  babel: {
    plugins: [['styled-components', { ssr: true }]]
  },
  webpack: (config, options) => {
    config.module.rules.push(
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.(png|svg)$/i,
        issuer: /\.ts?$/,
        loader: 'url-loader'
      }
    )

    return config
  }
}
