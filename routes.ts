interface PermanentProps {
  readonly name: string,
  readonly path: string,
  readonly navShow: boolean,
  readonly appearOnRobotsTXT: boolean,
  readonly siteMapOptions: {
    priority: number,
    changeFreq: string,
    lastMod: string,
  },
}

type OptionalProps = {
  readonly seo?: {
    description?: string,
    title?: string,
    keywords?: string,
    author?: string,
    canonical?: string,
  }
  readonly navSubLinks?: Array<{
    title: string,
    href: string,
  }>
}

//TODO Create type file for the props 

export type PropsCombined = Array<PermanentProps & OptionalProps>

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
];

export default pages