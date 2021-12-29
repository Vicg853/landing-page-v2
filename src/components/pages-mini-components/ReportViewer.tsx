import { memo } from "react"

import PDF from '@public/pdf/Relatório_3T2020_-_Alpes_Capital.pdf'

const PDFViewer = () => {
   return (
      <iframe 
      src={PDF} 
      title={PDF.split('/')[PDF.split('/').length - 1].split(':')[0]} 
      height="100%" width="100%"
      />
   )
}

export default memo(PDFViewer)