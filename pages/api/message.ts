import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
   console.log(req.body)
   res.status(200).json({ message: 'Sucesso no envio da mensagem!!' })
}

export default handler