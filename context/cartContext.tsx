import { createContext, useState, useEffect } from 'react';

export type CartItem = {
  id: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
  description: string;
};
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addToCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeFromCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeQuantity: () => {},
  getTotal: () => 0,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  clearCart: () => {}
});
type Props = {
  children: React.ReactNode;
};
const CART_KEY = 'cart';

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
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
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cart, item];
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (itemId: string) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const changeQuantity = (itemId: string, quantity: number) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const existingItem = cart[itemIndex];
      const updatedItem = { ...existingItem, quantity };
      const updatedCart = [...cart];
      updatedCart.splice(itemIndex, 1, updatedItem);
      setCart(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CART_KEY);
  };

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
