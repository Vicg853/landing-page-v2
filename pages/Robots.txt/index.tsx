import type { GetServerSideProps } from 'next'
import fs from 'fs'
import path from 'path'

function getAllSitemaps (dirPath: string, arrayOfFiles: string[] = []) {
   const files = fs.readdirSync(dirPath)

   files.forEach(function(file: string) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
         //? If is a dir, diving deeper into it recursively
         arrayOfFiles = getAllSitemaps(dirPath + "/" + file, arrayOfFiles)
      } else {
         //? Checking for any files or dirs that are not xml ones
         if(!dirPath.match(RegExp("(.xml.js$|.xml$)", 'i')) && 
         !file.match(RegExp("(.xml.js$|.xml$)", 'i'))) return
         
         //? Refining path and removing filesystem path from it, only including
         //? the portion of the path that is public
         const refinedDirPath = process.env.NODE_ENV === 'production' ? 
            dirPath.replace(RegExp('.next/server/pages', 'g'), '') : 
            dirPath.replace(RegExp('pages', 'g'), '')

         //? Checking if is index file to remove it from path, but in both cases simply
         //? and finally including the path
         if(file.match(RegExp('index', 'i'))) return arrayOfFiles.push(path.join(refinedDirPath))
         return arrayOfFiles.push(path.join(refinedDirPath, "/", file.replace(RegExp('.js', 'g'), '')))
      }
   })

   return arrayOfFiles
}

function generateRobotsTxt(): string {
   const sitemaps = getAllSitemaps(process.env.NODE_ENV === 'production' ?'.next/server/pages' : 'pages')

   return ['# *',
   'User-agent: *',
   'Allow: /',
   '\n',
   '# Host',
   `Host: ${process.env.NEXT_PUBLIC_SITE_URL}`,
   '\n',
   '# Sitemaps',
   `${sitemaps.map(sitemap => `Sitemap: ${process.env.NEXT_PUBLIC_SITE_URL}${sitemap}`).join('\n')}`,
   ].join('\n')
}

function RobotsTxt() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
   const robotsTxt = generateRobotsTxt()

   res.setHeader('Content-Type', 'text/txt')
  
   res.write(robotsTxt)
   res.end()

   return {
      props: {}
   }
}

export default RobotsTxt