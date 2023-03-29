import {getProductById} from '@/lib/prisma/products'
import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const {id} = req.query

  if (req.method === 'GET') {
    try {
      const products = await getProductById(id as string)
      // if (error) {
      //   return res.status(400).json({error})
      // } else {
      return res.status(200).json(products)
      // }
    } catch (error) {
      console.log(error)
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed,`)
}
