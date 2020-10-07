import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { CartItem, Factory } from '../types';
import { CartContext } from '../hooks/useCart';
import Cart from '../components/Cart';
import { asCurrency } from '../utils';

const cartItems: CartItem[] = [
  {
    name: 'Burger',
    size: 'regular',
    price: 3,
    quantity: 1,
  },
  {
    name: 'Fries',
    size: 'large',
    price: 1.99,
    quantity: 2,
  },
];

const renderWithCartItems: Factory<RenderResult> = () => {
  return render(
    <CartContext.Provider
      value={{
        addItem: () => null,
        clearCart: () => null,
        items: cartItems,
      }}
    >
      <Cart />
    </CartContext.Provider>,
  );
};

it('displays each item with line item total', () => {
  const { queryAllByText, queryByText } = renderWithCartItems();
  cartItems.map(item => {
    expect(queryByText(`${item.name} - ${item.size}`)).not.toBeNull();
    expect(
      queryAllByText(asCurrency(item.price * item.quantity)),
    ).not.toBeNull();
  });
});

it('displays grand total', () => {
  const { queryByText } = renderWithCartItems();
  const total = asCurrency(
    cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0),
  );
  expect(queryByText(total)).not.toBeNull();
});
