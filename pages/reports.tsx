//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/global'
import PDFViewer from '@p-components/ReportViewer'

//* Importing static assets
import HeaderImg from '@p-images/report/header.jpg'

const Report = () => {
   const SeoTitle = 'ONG'
   const SeoDescription = 'Veja qui a ONG que nós apoiamos e um pouco sobre ela.'
   const SeoKeywords = ['Fundo de endowment', 'ONG', 'Alpes Capital', 'AlpesCap', 'Investimentos', 'Mercado financeiro', 'ONGs', 'ONG', 'NGO']
   const SeoCanonical =  process.env.NEXT_PUBLIC_SITE_URL + '/ong'
   return (
      <>
         <SEOComp 
         title={SeoTitle}
         description={SeoDescription}
         canonical={SeoCanonical}
         keywords={SeoKeywords}
         locale='pt-BR'
         openGraph={{
            title: `AlpesCap - ${SeoTitle}`,
            description: SeoDescription,
            url: SeoCanonical,
            image: {
               url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`,
               width: 1500,
               height: 1500,
               alt: 'AlpesCap Logo',
               type: 'image/png'
            }
         }}
         twitter={{
            url: SeoCanonical,
            title: `AlpesCap - ${SeoTitle}`,
            description: SeoDescription,
            image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/global/Logo_mini_bg.png`
         }}
         linkTags={[
            {
               rel: 'prev',
               href: `${process.env.NEXT_PUBLIC_SITE_URL}/about`
            },
            {
               rel: 'next',
               href: `${process.env.NEXT_PUBLIC_SITE_URL}/donate`
            }
         ]}
         robotsFollow={true} />
         <Header 
         title="Projeto Arrastão..." subTitle="... a AlpesCap e o fundo Arrastão 🤝"
         isCustomImgBg={{imgSourceType: 'import', imgSource: HeaderImg}} 
         illustrationDisplay={true} />
         <Container>
            <sub>
               <PDFViewer />
            </sub>
         </Container>
      </>
   )
}

export default Report