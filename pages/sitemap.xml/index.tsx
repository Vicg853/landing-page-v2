import type { GetServerSideProps } from 'next'
import getConfig from 'next/config'
import fs from 'fs'
import path from 'path'

import type {PropsCombined} from '@custom-types/routes'

import {checkStrMatchAnyOfRgxArr} from '@components/utils'
const { serverRuntimeConfig } = getConfig()

var fileOptOutRegex = [
   RegExp(".json$", 'i'), RegExp("(.nft$|.nft\..+$)", 'i'),RegExp('_.+$', 'i'), 
   RegExp('404\..', 'i'), RegExp('(.xml.+$|.xml$)', 'i'), RegExp('500\..', 'i'), 
   RegExp('robots\..', 'i')
] 

function getAllFiles (dirPath: string, arrayOfFiles: string[] = []) {
   const files = fs.readdirSync(dirPath)

   files.forEach(function(file: string) {
      //? Filtering out the files that are not actually pages 
      //? and are just nextjs runtime files
      if(checkStrMatchAnyOfRgxArr(file, fileOptOutRegex)) return 

      //? If is a directory (if) then call the function again
      //? and map out this directory's files or enter into other sub directories
      //? or if is a file (else) just include it into the sitemap 
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
         arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
      } else {
         //? Removing the '.next/server/pages' or 'page' prefix used by fs to find the files in prod
         //? or dev (respectively), but isn't needed for the sitemap/web
         const refinedDirPath = process.env.NODE_ENV === 'production' ? 
            dirPath.replace(RegExp('.next/server/pages', 'g'), '') : 
            dirPath.replace(RegExp('pages', 'g'), '')
         if(file.match(RegExp('index', 'i'))) return arrayOfFiles.push(path.join(refinedDirPath, "/"))
         return arrayOfFiles.push(path.join(refinedDirPath, "/", file.split('.')[0]))
      }
   })

   return arrayOfFiles
}

function generateSiteMap(): string {
   const staticPages = getAllFiles(process.env.NODE_ENV === 'production' ?'.next/server/pages' : 'pages')

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
