import Head from 'next/head'

import SEO from '../../next-seo.config'

//* SEO component that is used to define global and default SEO settings for the whole webp
const DefaultSEOComp: React.FC = () => (
   <Head>
      <title>{SEO.title}</title>
      <base href={process.env.NEXT_PUBLIC_SITE_URL} target="_blank" />
      <meta name='canonical' content={SEO.canonical} />
      <meta name="title" content={SEO.title} />
      <meta name="description" content={SEO.description} />
      <meta name="google-site-verification" content={SEO.googleSiteVerification} />
      <meta charSet='utf-8' />
      <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
      <meta name="theme-color" content={SEO.themeColor} />
      <meta name="language" content={SEO.language} />
      <meta name="Classification" content={SEO.classification} />
      <meta name="copyright" content={SEO.copyright} />
      <meta name="reply-to" content={SEO.email} />
      <meta name="owner" content={SEO.owner} />
      <link rel='index' title={SEO.title} href={SEO.index} />
      <meta name="keywords" content={SEO.keywords.join(', ')}/>
      <link rel="manifest" href={SEO.manifest} />
      <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-96x96.png' />
      <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
      <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
      
      
      {/* Apple mobile app capabilities */}
      <meta name="apple-mobile-web-app-status-bar-style" content={SEO.asApplication.appleMobile.statusBarStyle} />
      <meta name="apple-mobile-web-app-capable" content={SEO.asApplication.appleMobile.capable} />
      <meta name="format-detection" content={SEO.asApplication.appleMobile.formatDetection} />
      <link rel='apple-touch-icon' href={SEO.asApplication.appleMobile.touchIcon} />
      <meta name='apple-mobile-web-app-title' content={SEO.asApplication.appleMobile.barTitle} />
      {SEO.asApplication.appleMobile.images.map((image, index) => (
         <link rel={image.rel} key={index} sizes={image.sizes} href={image.href} />
      ))}

      {/* Ms application */}
      <meta name="msapplication-TileColor" content={SEO.asApplication.msApplication.tileColor} />
      <meta name="application-name" content={SEO.asApplication.msApplication.applicationName} />
      <meta name="msapplication-starturl" content={SEO.asApplication.msApplication.startUrl} />
      <meta name="msapplication-tooltip" content={SEO.asApplication.msApplication.tooltip} />
      <link rel="shortcut icon" href={SEO.asApplication.msApplication.shortcutIcon} />
      {SEO.asApplication.msApplication.images.map((image, index) => (
         <meta name={image.name} key={index} content={image.content} />
      ))}


      {/* Google structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(
         {
            "@context": `${SEO.structuredData.context}`,
            "@type": `${SEO.structuredData.type}`,
            "url": `${SEO.structuredData.url}`,
            "name": `${SEO.structuredData.name}`,
            "logo": `${SEO.structuredData.logo}`,
            "foundingDate": `${SEO.structuredData.foundingDate}`,
            "founders": [SEO.structuredData.founders.map((founder) => (
               {
                  "@type": `${founder.type}`,
                  "name": `${founder.name}`,
               }
            ))],
            "address": {
               "@type": `${SEO.structuredData.address.type}`,
               "addressLocality": `${SEO.structuredData.address.addressLocality}`,
               "addressRegion": `${SEO.structuredData.address.addressRegion}`,
               "addressCountry": `${SEO.structuredData.address.addressCountry}`,
            },
            "contactPoint": [SEO.structuredData.contactPoint.map((contact) => (
               {
                  "@type": `${contact.type}`,
                  "contactType": `${contact.contactType}`,
                  "email": `${contact.email}`,
               }
            ))],
            "sameAs": [SEO.structuredData.sameAs.map((sameAs) => (
               `${sameAs}`
            ))],
         }
      )}} />

      {/* Robots txt and search engines config */}
      <meta name="robots" content= "index,follow" />

      {/* OpenGraph meta tags */}
      <meta property="og:type" content={SEO.openGraph.type} />
      <meta property="og:url" content={SEO.openGraph.url} />
      <meta property="og:site_name" content={SEO.openGraph.site_name} />
      <meta property="og:title" content={SEO.openGraph.title} />
      <meta property="og:description" content={SEO.openGraph.description} />
      <meta name="og:email" content={SEO.openGraph.email}/>
      <meta property="og:locale" content={SEO.openGraph.locale} />
      <meta name="og:locality" content={SEO.openGraph.locality} />
      <meta name="og:region" content={SEO.openGraph.region} />
      <meta name="og:country-name" content={SEO.openGraph.countryName} />
      <meta name="fb:page_id" content="43929265776" />
      {SEO.openGraph.images.map((image, index) => (
         <>
            <meta property="og:image" key={index} content={image.url} />
            <meta property="og:image:width" key={index} content={image.width.toString()} />
            <meta property="og:image:height" key={index} content={image.height.toString()} />
            <meta property="og:image:alt" key={index} content={image.alt} />
            <meta property="og:image:type" key={index} content={image.type} />
         </>
      ))}

      {/* Twitter meta tags */}
      <meta property="twitter:card" content={SEO.twitter.cardType} />
      <meta property="twitter:url" content={SEO.twitter.url} />
      <meta property="twitter:title" content={SEO.twitter.title} />
      <meta property="twitter:description" content={SEO.twitter.description} />
      <meta property="twitter:image" content={SEO.twitter.img} />

      {/* Any additional meta tags */}
      {SEO.additionalMetaTags.map((props, index) => (
         <meta {...props} key={index} />
      ))}
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
