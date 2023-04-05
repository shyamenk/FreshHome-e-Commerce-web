import { createContext, useContext, useReducer } from 'react';
import { cartReducer } from '@/hooks/cartReducer';
import React, { ReactNode } from 'react';

type CartItem = {
  id: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
  description: string;
};

type CartState = {
  items: CartItem[];
};

type Children = {
  children?: ReactNode;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string } };

type CartContextType = {
  state: CartState;
  dispatch: (action: CartAction) => void;
};

const CartContext = createContext<CartContextType>({
  state: { items: [] },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  dispatch: () => {}
});

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }: Children) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
