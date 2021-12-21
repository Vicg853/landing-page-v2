import type { NextPage, GetStaticPaths, InferGetStaticPropsType, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'

//* Importing page components
import { SEOComp } from '@components/SEO'
import { Container } from '@p-styles/team/sections'

//* Importing page images
import DefaultMemberImg from '@public/images/global/Logo_mini_bg.png'

//* Static generation functions
type Member = {
   name: string,
   section: string,
   role: string,
   age: string,
   img: string,
   description: string,
   isFounder: boolean,
   institution: string
}
import Members from '../../data/index'
const teamSections = ['management', 'council', 'ex-members']
export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: teamSections.map(section => ({
         params: { section },
      })),
      fallback: false,
   }
}

export const getStaticProps: GetStaticProps<{
   sectionMembers: Member[],
   currentSection: string
}> = async ({ params }) => {
   if(!params || !params.section) return { 
      notFound: true 
   }

   const sectionMembers: Member[] = Members.filter(member => member.section === params.section) as Member[]

   return {
      props: { 
         sectionMembers,
         currentSection: params.section as string,
         allSections: teamSections,
      },
      revalidate: 604800,
   }
}
 
//* Actual page component
const Management: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({sectionMembers, currentSection}) => {
   const SeoTitle = `Time - ${currentSection}`
   const SeoCanonical = `${process.env.NEXT_PUBLIC_BASE_URL}/team/${currentSection}`
   const SeoDescription = `Olá nós somos a Alpes e como falamos em '${process.env.NEXT_PUBLIC_BASE_URL}/team': 
      uma equipe é essencial. Então descubra mais sobre cada um de nós qeu participam do ${currentSection} da AlpesCap!`
   return (
   <>
      <SEOComp 
      title={SeoTitle}
      description={SeoDescription}
      canonical={SeoCanonical}
      keywords={['AlpesCap', 'Time', 'Equipe da AlpesCap', 'Sobre', 'Investimento', 'Fundo de endowment', 'Jovens', 'Sobre', currentSection]}
      openGraph={{
         title: SeoTitle,
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
         title: SeoTitle,
         description: SeoDescription,
         image: `${process.env.NEXT_PUBLIC_SITE_URL}/images/pages/about/header/.jpg`,
      }}
      robotsFollow={true}
      linkTags={[
         {
            rel: 'prev',
            href: `${process.env.NEXT_PUBLIC_BASE_URL}/team`
         }
      ]} />
      <Container>
         <h1>Essa é a equipe que constitui o {currentSection}</h1>
         <div className='memberCardsContainer'>
         {sectionMembers.map((member, i) => (
            <div key={i} className='memberCard'>
               <sub className='leftContent'>
                  <div className='memberBackgroundImage'>
                     <Image
                        src={member.img ? member.img : DefaultMemberImg}
                        alt={`Foto do membro ${member.name}`}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='50% 50%'
                     />
                  </div>
                  <div className='memberProfileImg'>
                     <Image
                        src={member.img ? member.img : DefaultMemberImg}
                        alt={`Foto do membro ${member.name}`}
                        layout='fill'
                        objectFit='cover'
                        objectPosition='50% 0%'
                     />
                  </div>
                  <section>
                     <span className="memberName" style={{marginTop: member.age ? '0' : '15px' }}>{member.name}</span>
                     {member.age && <span className="memberAge">Idade: {member.age}</span>}
                  </section>
               </sub>
               <sub className='centerContent'>
                  <span className="memberDesc">{member.description ? member.description : 'N.Inf.'}</span>
                  <span className="memberInstitution">{member.institution ? member.institution : 'N.Inf.'}</span>
               </sub>
               <sub className='rightContent'>
                  <span className="memberRole">{member.role ? member.role : 'N.Inf.'}</span>
                  {member.isFounder && <span className="memberFounder">Co-fundador</span>}
               </sub>
            </div>
         ))}
         </div>
      </Container>
   </>
   )
}

export default Management