import {getCategory} from '@/lib/prisma/categories'
import {NextApiRequest, NextApiResponse} from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    try {
      const {categories, error} = await getCategory()
      if (error) {
        return res.status(400).json({error: 'Error Occured'})
      } else {
        return res.status(200).json(categories)
      }
    } catch (error) {
      console.log(error)
    }
  }

  res.setHeader('Allow', ['GET'])
  res.status(425).end(`Method ${req.method} is not allowed,`)
}
