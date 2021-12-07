/** @type {import('next-sitemap')} */

import routes from './routes';

module.exports = {
   siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
   generateRobotsTxt: true,
   transform: async (config, path) => {
      const routeData = routes.find(page => page.path === path)
      console.log(routeData)
      return {
         loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
         changefreq: config.changefreq,
         priority: config.priority,
         lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
         alternateRefs: config.alternateRefs ?? [],
      }
   }
}
 