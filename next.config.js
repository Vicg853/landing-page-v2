/** @type {import('next').NextConfig} */
const { v4 } = require('uuid')
const withPreact = require('next-plugin-preact');

module.exports = withPreact({
  reactStrictMode: true,
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    //reactRoot: true,
    //concurrentFeatures: true,
    //serverComponents: true,
    //urlImports: ['https://example.com/modules/'], //New url imports feature
  },
  images: {
    formats: ['image/avif', 'image/webp']
  },
  generateBuildId: async () => {
    return 'alpesCap-landing-page-build-id-' + v4().toString()
  },
  //Customize webpack config
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts)x?$/]
      },
      
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: { plugins: [{ removeViewBox: false }] },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path',
          destination: 'https://alpescap.com.br/:path',
        }
      ]
    }
  },

  //! Look out to using this for sercrets
  //* More info here https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
  /*
  **
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  **
  */
})
