/** @type {import('next').NextConfig} */
import { v4 } from 'uuid'
import withPWA from 'next-pwa'
import runtimeCaching from 'next-pwa/cache.js'
import withPlugins from 'next-compose-plugins'
import withBundleAnalyzer from '@next/bundle-analyzer'

//TODO Add preact when it's fixed
//const withPreact = require('next-plugin-preact')

import pages from './routes.js'

const config = {
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
    formats: ['image/avif', 'image/webp'],
  },
  generateBuildId: async () => {
    return 'alpesCap-landing-page-build-id-' + v4().toString()
  },
  //Customize webpack config
  webpack(config) {

    //* Enabling inline-svg/svg-modules support
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
    })

    //* Adding support for static serving of .gltf 3D files
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: "/_next/static/models",
          outputPath: "static/models/",
          name: '[name].[ext]'
        }
      },
    })

    return config
  },
  async rewrites() {
    return [
      {
        source: '/:path',
        destination: 'https://alpescap.com.br/:path',
      }
    ]
  },

  //* Like env files
  //* More info here https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
  serverRuntimeConfig: {
    allRoutes: pages,
  },
  publicRuntimeConfig: {
    routes: pages.filter(page => page.navShow),
  },
}

export default withPlugins([
  //withPreact,
  [withPWA, {pwa: {
    runtimeCaching, 
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',

    //? Docs recomend removing .next/static/images from caching rules
    //? for next's optimized-images-plugin to work properly
    buildExcludes: [/chunks\/images\/.*$/]
  }}],
  [withBundleAnalyzer, {enabled: process.env.ANALYZE === 'true'}],
], config)