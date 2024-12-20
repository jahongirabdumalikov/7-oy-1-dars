import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const cart = useSelector(state => state.cart);

  return (
    <nav className="p-4 bg-blue-600 text-white flex justify-between">
      <Link to="/" className="font-bold">Shop</Link>
      <Link to="/cart" className="relative">
        Cart
        {cart.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 rounded-full text-xs px-2">
            {cart.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default Navbar;
