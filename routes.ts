import type { PropsCombined } from './types/routes'

const pages: PropsCombined = [
  { 
     name: "Home", 
     path: "/" ,
     navShow: true,
     appearOnRobotsTXT: true,
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
     appearOnRobotsTXT: true,
     siteMapOptions: {
       priority: 1,
       changeFreq: "never",
       lastMod: "never",
     }
  },
  { 
     name: "Time", 
     path: "/team" ,
     navShow: true,
     appearOnRobotsTXT: true,
     siteMapOptions: {
       priority: 2,
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
     appearOnRobotsTXT: true,
     siteMapOptions: {
       priority: 2,
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
     appearOnRobotsTXT: true,
     siteMapOptions: {
       priority: 1,
       changeFreq: "never",
       lastMod: "never",
     }
  },
  { 
     name: "Relatorios", 
     path: "/reports" ,
     navShow: true,
     appearOnRobotsTXT: true,
     siteMapOptions: {
       priority: 3,
       changeFreq: "never",
       lastMod: "never",
     }
  },
  { 
     name: "Contato", 
     path: "/contact" ,
     navShow: true,
     appearOnRobotsTXT: true,
     siteMapOptions: {
       priority: 2,
       changeFreq: "never",
       lastMod: "never",
     }
  },
  { 
     name: "Blog", 
     path: "/blog" ,
     navShow: true,
     appearOnRobotsTXT: true,
     siteMapOptions: {
       priority: 3,
       changeFreq: "never",
       lastMod: "never",
     }
  },
  { 
   name: "Politicas", 
   path: "/policies" ,
   navShow: false,
   appearOnRobotsTXT: false,
   siteMapOptions: {
     priority: 1,
     changeFreq: "never",
     lastMod: "never",
   }
  },
  { 
   name: "Cookies", 
   path: "/site-and-cookies" ,
   navShow: false,
   appearOnRobotsTXT: false,
   siteMapOptions: {
     priority: 1,
     changeFreq: "never",
     lastMod: "never",
   }
  },
  { 
   name: "techStack", 
   path: "/site-stack" ,
   navShow: false,
   appearOnRobotsTXT: false,
   siteMapOptions: {
     priority: 2,
     changeFreq: "never",
     lastMod: "never",
   }
  },
];

export type {PropsCombined}

export default pages