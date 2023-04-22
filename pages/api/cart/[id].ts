import { prisma } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const { id } = req.query;

    try {
      const session = await prisma.cart_Session.findUnique({
        where: {
          userId: id as string
        }
      });
      const cartItems = await prisma.cart_Item.findMany({
        where: {
          sessionId: session?.id
        },
        include: {
          Product: true,
          cart_Session: true
        }
      });
      return res.status(200).json({
        cartItems
      });
    } catch (error) {
      return res.status(400).json('Error');
    }
  } else if (req.method === 'DELETE') {
    const { id } = req.query;

    console.log(id);

    try {
      const deleteItem = await prisma.cart_Item.delete({
        where: {
          productId: id as string
        }
      });
      return res.status(202).json({ deleteItem });
    } catch (error) {
      console.log(error);
    }
  }
  res.setHeader('Allow', ['GET', 'DELETE']);
  res.status(425).end(`Method ${req.method} is not allowed,`);
}
