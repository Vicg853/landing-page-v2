/** @type {import('./types/routes').PropsCombined} */

const pages = [
   { 
      name: "Home", 
      path: "/" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 1,
        changeFreq: "never",
        lastMod: "never",
      }
   },
   { 
      name: "Sobre", 
      path: "/about" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.9,
        changeFreq: "never",
        lastMod: "never",
      }
   },
   { 
      name: "Time", 
      path: "/team" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.5,
        changeFreq: "never",
        lastMod: "never",
      },
      navSubLinks: [
        { title: 'Gestão', href: '/management' },
        { title: 'Conselho', href: '/council' }
     ]
   },
   { 
      name: "ONGs", 
      path: "/ong" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.7,
        changeFreq: "never",
        lastMod: "never",
      },
      navSubLinks: [
        { title: 'Arrastão', href: '/management' },
      ]
   },
   { 
      name: "Doar", 
      path: "/donate" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.8,
        changeFreq: "never",
        lastMod: "never",
      }
   },
   { 
      name: "Relatorios", 
      path: "/reports" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.1,
        changeFreq: "never",
        lastMod: "never",
      }
   },
   { 
      name: "Contato", 
      path: "/contact" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.6,
        changeFreq: "never",
        lastMod: "never",
      }
   },
   { 
      name: "Blog", 
      path: "/blog" ,
      navShow: true,
      appearForWebCrawllers: true,
      siteMapOptions: {
        priority: 0.5,
        changeFreq: "never",
        lastMod: "never",
      }
   },
   { 
    name: "Politicas", 
    path: "/policies" ,
    navShow: false,
    appearForWebCrawllers: false,
    siteMapOptions: {
      priority: 0.6,
      changeFreq: "never",
      lastMod: "never",
    }
   },
   { 
    name: "Cookies", 
    path: "/site-and-cookies" ,
    navShow: false,
    appearForWebCrawllers: false,
    siteMapOptions: {
      priority: 0.6,
      changeFreq: "never",
      lastMod: "never",
    }
   },
   { 
    name: "techStack", 
    path: "/site-stack" ,
    navShow: false,
    appearForWebCrawllers: false,
    siteMapOptions: {
      priority: 0.4,
      changeFreq: "never",
      lastMod: "never",
    }
   },
]

module.exports = pages