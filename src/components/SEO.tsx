import Head from 'next/head'

import SEO from '../../next-seo.config'

//* SEO component that is used to define global and default SEO settings for the whole webp
const DefaultSEOComp: typeof Head = () => (
   <Head>
      
   </Head>
)

//* SEO component that is used to be called in every page so each page
//* can have it's custom SEO data
const SEOComp: typeof Head = () => (
   <Head>
   </Head>
)

export {
   DefaultSEOComp,
   SEOComp
}
