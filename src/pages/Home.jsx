import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import api from '../api';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('/products')
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setProducts(response.data.data);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map(product => (
          <div key={product.id} className="p-4 border rounded shadow">
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p>${product.price}</p>
            <button
              className="mt-2 bg-blue-500 text-white py-1 px-3 rounded"
              onClick={() => handleAddToCart(product)}
            >
              Karzinkaga qo'shish
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
