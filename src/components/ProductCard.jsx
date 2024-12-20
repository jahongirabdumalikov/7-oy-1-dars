import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p>${product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
        onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
