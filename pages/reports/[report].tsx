import type { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from 'next'
import { useRef } from 'react'

//* Importing page components
import Header from '@layout/header'
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/global'
import { MainReportTitle } from '@p-styles/reports/index'
import PDFViewer from '@p-components/ReportViewer'

//* Importing static assets
import HeaderImg from '@p-images/report/header.jpg'

//? Just importing an test pdf file
import PDF from '@public/pdf/Relatório_3T2020_-_Alpes_Capital.pdf'
import Reports from '../../data/reports'

//* Importing pages paths and data
//? using temporally sample data from static resource
import ReportsImport from '../../data/reports'
import Link from 'next/link'
import { report } from 'process'

type ReportType = {title: string, path: string, source: string, sourceType: 'url', unixDate: number}
export const getStaticPaths: GetStaticPaths = async () => {
   const reports = ReportsImport as ReportType[]

   return {
      paths: reports.map(report => ({
         params: { report: report.path },
      })),
      fallback: false,
   }
}

export const getStaticProps: GetStaticProps<{
   report: ReportType,
}> = async ({ params }) => {
   if(!params || !params.report) return { 
      notFound: true 
   }

   const reports = ReportsImport as ReportType[]

   const currentReport = reports.filter(report => report.path === params.report)[0]

   return {
      props: { 
         report: currentReport,
      },
      revalidate: 604800,
   }
}

const Report = ({report}: InferGetStaticPropsType<typeof getStaticProps>) => {
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
            },
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
         <Container style={{paddingTop: '10rem'}}>
            <MainReportTitle>
               <span>
                  Relatório: {report.title ? report.title : report.source
                     .split('/')[report.source.split('/').length - 1]}
               </span>
               <Link href='/reports' passHref>
                  <a>Ver lista de todos</a>
               </Link>
            </MainReportTitle>
            <sub>
               <PDFViewer 
               title={report.title} 
               PDFsrc={report.source} 
               scrType={report.sourceType} />
            </sub>
         </Container>
      </>
   )
}

export default Report