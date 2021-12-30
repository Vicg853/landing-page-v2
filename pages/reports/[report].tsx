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
   allReports: ReportType[]
}> = async ({ params }) => {
   if(!params || !params.report) return { 
      notFound: true 
   }

   const reports = ReportsImport as ReportType[]

   const currentReport = reports.filter(report => report.path === params.report)[0]

   return {
      props: { 
         report: currentReport,
         allReports: reports
      },
      revalidate: 604800,
   }
}

const Report = ({report, allReports}: InferGetStaticPropsType<typeof getStaticProps>) => {
   const SeoTitle = `Relatório: ${report.title ? report.title : report.source
      .split('/')[report.source.split('/').length - 1]}`
   const SeoDescription = `Deixamos nossos relatórios disponíveis para você acessar e visualizar. Veja aqui
   o relatório ${report.title} postado em ${new Date(report.unixDate * 1000).toLocaleDateString('pt-BR')}`
   const SeoKeywords = ['Fundo de endowment', 'ONG', 'Alpes Capital', 'AlpesCap', 'Investimentos', 'Mercado financeiro', 'Trimestral', 'Relatório', `${report.title ? report.title : report.source
      .split('/')[report.source.split('/').length - 1]}`]
   const SeoCanonical =  process.env.NEXT_PUBLIC_SITE_URL + `/report/${report.path}`

   const currentReportIndex = allReports.findIndex(reports => reports.path === report.path)
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
            article: {
               publishedTime: new Date(report.unixDate * 1000).toISOString(),
               author: 'AlpesCap',
               tag: SeoKeywords,
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
               href: `${process.env.NEXT_PUBLIC_SITE_URL}/reports${currentReportIndex > 0 ? `/${allReports[currentReportIndex - 1].path}` : ''}`,
            },
            {
               rel: 'next',
               href: `${process.env.NEXT_PUBLIC_SITE_URL}/reports${currentReportIndex < allReports.length - 1 && `/${allReports[currentReportIndex + 1].path}`}`,
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