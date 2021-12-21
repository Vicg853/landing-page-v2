import type { NextPage } from 'next'
import Image from 'next/image'

//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'

//* Importing page images
import HeaderImage from '@p-images/team/header.jpg'

//* SEO Variables
const SeoCanonical = `${process.env.NEXT_PUBLIC_BASE_URL}/team`
const SeoDescription = "Olá, somos a AlpesCap e este, é nosso time. Sabemos que toda organização precisa de um time forte, mais do que tudo. Com isso, tudo ocorre do melhor jeito! Veja mais sobre nós toods aqui! 🏢👋😄"

const Team: NextPage = () => (
   <>
      <SEOComp 
      title="Nosso time"
      description={SeoDescription}
      canonical={SeoCanonical}
      keywords={['AlpesCap', 'Time', 'Equipe da AlpesCap', 'Sobre', 'Investimento', 'Fundo de endowment', 'Jovens', 'Sobre']}
      openGraph={{
         title: 'Nosso time',
         description: SeoDescription,
         url: SeoCanonical,
         image: {
            url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`,
            width: 1500,
            height: 1500,
            alt: 'AlpesCap Logo',
            type: 'image/png'
         },
      }}
      twitter={{
         url: SeoCanonical,
         title: 'Nosso time',
         description: SeoDescription,
         image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/pages/about/header/.jpg`,
      }}
      robotsFollow={true}
      linkTags={[
         {
            rel: 'prev',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/about`
         },
         {
            rel: 'next',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/team/management`
         },
         {
            rel: 'next',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/team/council`
         }
      ]} />
     
     <Header 
     title="Time" subTitle="Todo projeto precisa de um time obviamente! E esse é o nosso!🏢" 
     isCustomImgBg={{imgSource: HeaderImage, imgSourceType: 'import'}}
     illustrationDisplay={true} optionalButton={{url: '/about', text: 'E sobre o projeto?'}}
      />
   </>
)

export default Team