import React from 'react';
import Products from '../sections/Products';

const ProductsPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-black py-16">
        <h1 className="text-white text-4xl font-bold text-center">Our Products</h1>
      </div>
      <Products />
    </div>
  );
};

export default ProductsPage;