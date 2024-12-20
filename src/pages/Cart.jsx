import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cart = useSelector(state => state.cart);

  return (
    <div className="p-4">
      {cart.length === 0 ? (
        <p>Karzinka</p>
      ) : (
        cart.map(item => <CartItem key={item.id} item={item} />)
      )}
    </div>
  );
};

export default Cart;
