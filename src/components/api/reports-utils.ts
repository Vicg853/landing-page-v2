import ReportsImport from '../../../data/reports'

export type ReportType = {
   source: string;
   unixDate: number;
   sourceType: 'url';
   path: string;
   title?: string;
}

interface GetReportOverload {
   (all: false, section?: string): Promise<ReportType | ReportType[]>;
   (all: true): Promise<ReportType | ReportType[]>;
}

//TODO Add real CMS
export const getReports: GetReportOverload = 
   async (all: boolean, section?: string) => {
   const AllReports = await ReportsImport as ReportType[]
   if(all) return AllReports as ReportType[]
   else return AllReports.filter(report => report.path === section)[0] as ReportType
}
