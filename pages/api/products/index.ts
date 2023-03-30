import {NextApiRequest, NextApiResponse} from 'next'
import {createProduct, getProducts} from '@/lib/prisma/products'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const {products, error} = await getProducts()
      if (error) {
        return res.status(400).json({error})
      } else {
        return res.status(200).json({products})
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (req.method === 'POST') {
    try {
      const data = req.body
      const {newProduct, error} = await createProduct(data)
      if (error) {
        return res.status(400).json({error})
      }
      return res.status(200).json({newProduct})
    } catch (error) {
      console.log(error)
    }
  }
  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed,`)
}
