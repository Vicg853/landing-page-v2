/** @type {import('next-seo').NextSeoProps} */

export default {
   title: "Alpes Capital Web-page",
   description: 'Olá nós somos a Alpes Capital! Somos um fundo de endowment formado por jovens, focado em ensinar jovens a como investir no mercado financeiro.',
   canonical: process.env.NEXT_PUBLIC_SITE_URL,
   author: 'Alpes Capital',
   keywords: ["Alpes Capital", "Fundo de endowment", "Endowment und", "Investment", "Investimento", "Jovens", "ONG", "Mercado Financeiro"].join(', '),
   openGraph: { 
      type: 'website',
      locale: 'pt_br',
      title: "Alpes Capital Web-page",
      url: process.env.NEXT_PUBLIC_SITE_URL,
      site_name: 'Alpes Capital', 
      description: 'Olá nós somos a Alpes Capital! Somos um fundo de endowment formado por jovens, focado em ensinar jovens a como investir no mercado financeiro.',
      images: [
         {
            url:  + '/favicon-96x96.png',
            width: 96,
            height: 96,
            alt: 'Alpes Capital Logo',
         }
      ],
   },
   twitter: {
      site: process.env.NEXT_PUBLIC_SITE_URL,
      cardType: 'summary_large_image',
   },
   additionalLinkTags: [
      {
         rel: 'apple-touch-icon',
         href: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/apple-icon.png',
         sizes: '192x192'
      },
      {
         rel: 'apple-touch-icon',
         href: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/apple-icon-60x60.png',
         sizes: '60x60'
      },
      {
         rel: 'apple-touch-icon',
         href: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/apple-icon-114x114.png',
         sizes: '114x114'
      },
      {
         rel: 'apple-touch-icon',
         href: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/apple-icon-180x180.png',
         sizes: '180x180'
      },
      {
         rel: 'icon',
         href: process.env.NEXT_PUBLIC_SITE_URL + '/manifest/android-icon-192x192.png',
         sizes: '192x192',
         type: 'image/png',
      },
      {
         rel: 'icon',
         href: process.env.NEXT_PUBLIC_SITE_URL + '/favicon-32x32.png',
         sizes: '32x32',
         type: 'image/png',
      },
      {
         rel: 'icon',
         href: process.env.NEXT_PUBLIC_SITE_URL + '/favicon-96x96.png',
         sizes: '96x96',
         type: 'image/png',
      },
      {
         rel: 'icon',
         href: process.env.NEXT_PUBLIC_SITE_URL + '/favicon-16x16.png',
         sizes: '16x16',
         type: 'image/png',
      },
   ]
}