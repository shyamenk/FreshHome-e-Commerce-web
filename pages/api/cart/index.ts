// import { NextApiRequest, NextApiResponse } from 'next';
// import { prisma } from '@/lib/prisma';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'POST') {
//     const { total, userId, cartItems } = req.body;

//     const cartSession = await prisma.cart_Session.upsert({
//       where: {
//         userId: userId
//       },
//       create: {
//         userId: userId,
//         total: total
//       },
//       update: {
//         total: {
//           increment: total
//         }
//       }
//     });

//     if (cartSession) {
//       await prisma.cart_Item.upsert({
//         where: {
//           productId: cartItems.id
//         },
//         create: {
//           quantity: cartItems.quantity,
//           sessionId: cartSession.id,
//           productId: cartItems.id
//         },
//         update: {
//           quantity: {
//             increment: cartItems.quantity
//           }
//         }
//       });
//     }
//     return res.status(200).json({
//       cartSession
//     });
//   }

//   res.setHeader('Allow', ['POST']);
//   res.status(425).end(`Method ${req.method} is not allowed,`);
// }
