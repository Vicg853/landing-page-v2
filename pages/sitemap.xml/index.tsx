import type { GetServerSideProps } from 'next'
import getConfig from 'next/config'
import fs from 'fs'
import path from 'path'

import type {PropsCombined} from '@custom-types/routes'

const { serverRuntimeConfig } = getConfig()

function getAllFiles (dirPath: string, arrayOfFiles: string[] = []) {
   const files = fs.readdirSync(dirPath)

   files.forEach(function(file: string) {
      if(file === '_document.tsx' || file === '_app.tsx' || file === 'sitemap.xml' ||
         file === '_document.js' || file === '_app.js' || file === 'sitemap' ||
         file === '_error.tsx' || file === '_404.tsx' || file === 'sitemap.js' || 
         file === '_error.js' || file === '_404.js') return 
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
         arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
         const refinedDirPath = dirPath.replace(/pages/g, '')
         if(file === 'index.tsx' ||
         file === 'index.js' ||
         file === 'index') return arrayOfFiles.push(path.join(refinedDirPath, "/"))
         return arrayOfFiles.push(path.join(refinedDirPath, "/", file.split('.')[0]))
      }
   })

   return arrayOfFiles
}

function generateSiteMap(): string {
   //TODO Add production version with regex checking for the production files
   const staticPages = getAllFiles('pages')

   const routes = serverRuntimeConfig.allRoutes as PropsCombined

   return `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         ${staticPages.map(page => {
            const pageConfig = routes.find(route => route.path === page)
            if(!pageConfig) return `
               <url>
                  <loc>${page}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>never</changefreq>
                  <priority>0.1</priority>
               </url>
            `

            if(!pageConfig.appearForWebCrawllers) return  

            return `
               <url>
                  <loc>${page}</loc>
                  <lastmod>${pageConfig.siteMapOptions.lastMod}</lastmod>
                  <changefreq>${pageConfig.siteMapOptions.changeFreq}</changefreq>
                  <priority>${pageConfig.siteMapOptions.priority}</priority>
               </url>
            `
         })}
      </urlset>
   `
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   const sitemap = generateSiteMap()

   res.setHeader('Content-Type', 'text/xml')
  
   res.write(sitemap)
   res.end()

   return {
      props: {}
   }
}

export default SiteMap
