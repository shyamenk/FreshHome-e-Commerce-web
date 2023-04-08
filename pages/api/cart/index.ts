import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

// type CartItem = {
//   id: string;
//   quantity: number;
// };
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { total, userId, cartItems } = req.body;

    const cartSession = await prisma.cart_Session.upsert({
      where: {
        userId: userId
      },
      update: {
        total: {
          increment: total
        }
      },
      create: {
        userId: userId,
        total: total
      }
    });
    if (cartSession) {
      await prisma.cart_Item.create({
        data: {
          quantity: cartItems.quantity,
          sessionId: cartSession.id,
          productId: cartItems.id
        },
        include: {
          cart_Session: true
        }
      });
    }
    res.status(200).json({
      cartSession
    });
  }
}
