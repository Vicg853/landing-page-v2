import type { GetServerSideProps } from 'next'
import getConfig from 'next/config'
import {checkStrMatchAnyOfRgxArr} from '@components/utils'
import fs from 'fs'
import path from 'path'

import type {PropsCombined} from '@custom-types/routes'

const { serverRuntimeConfig } = getConfig()

//const productionPath = process.env.IS_VERCEL ? process.env.IS_VERCEL : '.next/server/pages'

//* Gets all build time static pages
async function getAllFiles(basePath: string) {
   const routes_manifest_path = path.join(basePath + '/.next/server/pages-manifest.json')
   const routes_manifest = await JSON.parse(fs.readFileSync(routes_manifest_path, 'utf8'))
   
   //* Getting pages paths form manifest keys
   const pages = Object.keys(routes_manifest)
   
   //* Filtering out nextjs's special pages, api paths, sitemap/robots txt and ISG functions paths
   var fileOptOutRegex = [
      RegExp(".json$", 'i'), RegExp("(.nft$|.nft\..+$)", 'i'),RegExp('_.+$', 'i'), 
      RegExp('(404|500|api)', 'i'), RegExp('(.xml.+$|.xml$)', 'i'), 
      RegExp('robots\..', 'i'), /\[.+\]/
   ] 
   const filteredPages = pages.filter(page => {
      return !checkStrMatchAnyOfRgxArr(page.toString(), fileOptOutRegex)
   })

   return filteredPages
}

//* Get all pages and their details to then generate the sitemap
function getPagesSitemapDetails(pages: string[], routes: PropsCombined) {
   const sitemapDetails = pages.map(page => {
      return {
         url: process.env.NEXT_PUBLIC_SITE_URL + page,
         lastmod: routes.filter(route => route.path === page)[0]?.siteMapOptions.lastMod ?? new Date().toISOString(),
         changefreq: routes.filter(route => route.path === page)[0]?.siteMapOptions.changeFreq ?? 'never',
         priority: routes.filter(route => route.path === page)[0]?.siteMapOptions.priority ?? '0.1'
      }
   })

   return sitemapDetails
}

//* Get all pages and their details to then generate the sitemap
async function generateSiteMap(routes: PropsCombined, basePath: string): Promise<string> {

   const pages = await getAllFiles(basePath)

   const sitemapDetails = getPagesSitemapDetails(pages, routes)

   //* Generating the sitemap
   const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${
      sitemapDetails.map(page => {
      return `<url>
         <loc>${page.url}</loc>
         <lastmod>${page.lastmod}</lastmod>
         <changefreq>${page.changefreq}</changefreq>
         <priority>${page.priority}</priority>
      </url>`
   }).join('')}</urlset>`

   return sitemap
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   const basePath: string = process.cwd();
   const routes = serverRuntimeConfig.allRoutes as PropsCombined

   console.log(basePath)
   console.log(fs.readdirSync(basePath))
   if(!routes || !basePath) return {
      redirect: {
         destination: '/500',
         permanent: false,
      },
   }

   const sitemap = await generateSiteMap(routes, basePath)

   res.setHeader('Content-Type', 'text/xml')
  
   res.write(sitemap)
   res.end()

   return {
      props: {}
   }
}

export default SiteMap
