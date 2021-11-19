/** @type {import('next').NextConfig} */
const { v4 } = require('uuid')
//TODO Add preact latter
//const withPreact = require('next-plugin-preact')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    //reactRoot: true,
    //concurrentFeatures: true,
    //serverComponents: true,
    //urlImports: ['https://example.com/modules/'], //New url imports feature
    styledComponents: true,
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

  //! Get more info about using this for sercrets, good resource in the future to maybe create inner api to get posts directly from the server
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
}
