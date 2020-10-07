import React, { createContext, useContext, useState } from 'react';
import { CartItem, Consumer, Item, Runnable } from '../types';

export interface Context {
  addItem: Consumer<Item>;
  clearCart: Runnable;
  items: CartItem[];
}

export const CartContext = createContext<Context>({
  addItem: () => null,
  clearCart: () => null,
  items: [],
});

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem: Consumer<Item> = item => {
    const currentIndex = items.findIndex(
      currentItem =>
        item.name === currentItem.name && currentItem.size === item.size,
    );
    if (currentIndex > -1) {
      const copy = [...items];
      copy[currentIndex] = {
        ...copy[currentIndex],
        quantity: copy[currentIndex].quantity + 1,
      };
      setItems(copy);
    } else {
      setItems([...items, { ...item, quantity: 1 }]);
    }
  };

  const clearCart: Runnable = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ addItem, clearCart, items }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart: () => Context = () => useContext(CartContext);
