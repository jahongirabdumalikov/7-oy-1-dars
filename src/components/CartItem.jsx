import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="p-4 border rounded shadow mb-4 flex justify-between items-center">
      <div>
        <h2 className="text-xl font-bold">{item.name}</h2>
        <p>${item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
      </div>
      <button
        className="ml-4 bg-red-500 text-white py-1 px-3 rounded"
        onClick={() => dispatch(removeItem({ id: item.id }))}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
