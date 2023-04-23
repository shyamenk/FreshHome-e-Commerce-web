import { CartItem } from '@/context/cartContext';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(`${process.env.STRIPE_SECRET_KEY}`, {
  apiVersion: '2022-11-15'
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { items } = req.body;

    if (!stripe) {
      res.status(500).json({ error: 'Failed to load Stripe' });
      return;
    }

    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.name,
          images: [item.image],
          description: item.description
        },
        unit_amount: item.price * 100
      },
      quantity: item.quantity
    }));

    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: lineItems,
        success_url: `${req.headers.origin}/success?sessionId={CHECKOUT_SESSION_ID}`,
        cancel_url: `${req.headers.origin}`,
        billing_address_collection: 'auto'
      });
      res.status(200).json({ id: session.id });
    } catch (error) {
      console.log(error);
      res.status(500).json({ statusCode: 500, message: 'Error Occured' });
    }
  } else {
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end('Method Not Allowed');
  }
}
