//* Team members and sections fetch
import Members from '../../../data/members'
const teamSections = [
   {id: 'management', title: 'Gestão'}, 
   {id: 'council', title: 'Conselho'}, 
   {id: 'ex-members', title: 'Ex-membros'}
]

export const getTeamSections = async (): Promise<{
   id: string,
   title: string,
}[]> => {
   return teamSections
}

interface MemberType {
   name: string
   section: string
   role: string
   age: string
   img: string
   description: string
   isFounder: boolean
   institution: string
}

type GetSectionMembersOverload = {
   (all: false, section: string): Promise<MemberType[]>;
   (all: true): Promise<MemberType[]>;
}

export const getSectionMembers: GetSectionMembersOverload = 
   async (all: boolean, section?: string) => {
   if(all) return Members
   const sectionMembers = 
      Members.filter(member => member.section === section) as MemberType[]

   return sectionMembers
}
