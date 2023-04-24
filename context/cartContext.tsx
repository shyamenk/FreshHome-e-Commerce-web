/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, useEffect, useCallback } from 'react';

export interface CartItem {
  id: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
  description: string;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  changeQuantity: (itemId: string, quantity: number) => void;
  getTotal: () => number;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
  getTotal: () => 0,
  clearCart: () => {}
});

interface Props {
  children: React.ReactNode;
}

const CART_KEY = 'cart';

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const saveCartToLocalStorage = useCallback((cart: CartItem[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, []);

  const handleCartChange = useCallback(
    (updatedCart: CartItem[]) => {
      setCart(updatedCart);
      saveCartToLocalStorage(updatedCart);
    },
    [saveCartToLocalStorage]
  );

  const addToCart = useCallback(
    (item: CartItem) => {
      const existingItemIndex = cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingItemIndex !== -1) {
        const existingItem = cart[existingItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + item.quantity
        };
        const updatedCart = [...cart];
        updatedCart.splice(existingItemIndex, 1, updatedItem);
        handleCartChange(updatedCart);
      } else {
        const updatedCart = [...cart, item];
        handleCartChange(updatedCart);
      }
    },
    [cart, handleCartChange]
  );

  const removeFromCart = useCallback(
    (itemId: string) => {
      const itemIndex = cart.findIndex((item) => item.id === itemId);
      if (itemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart.splice(itemIndex, 1);
        handleCartChange(updatedCart);
      }
    },
    [cart, handleCartChange]
  );

  const changeQuantity = useCallback(
    (itemId: string, quantity: number) => {
      const itemIndex = cart.findIndex((item) => item.id === itemId);

      if (itemIndex !== -1) {
        const existingItem = cart[itemIndex];
        const updatedItem = { ...existingItem, quantity };
        const updatedCart = [...cart];
        updatedCart.splice(itemIndex, 1, updatedItem);
        handleCartChange(updatedCart);
      }
    },
    [cart, handleCartChange]
  );

  const getTotal = useCallback(() => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cart]);

  const clearCart = useCallback(() => {
    setCart([]);
    localStorage.removeItem(CART_KEY);
  }, []);

  useEffect(() => {
    const cartData = localStorage.getItem(CART_KEY);
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        changeQuantity,
        getTotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
