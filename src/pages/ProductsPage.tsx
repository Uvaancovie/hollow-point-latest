import React from 'react';
import Products from '../sections/Products';

const ProductsPage = () => {
  return (
    <div className="pt-20">
    <div
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
        "url('https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h1 className="relative text-white text-4xl font-bold text-center">
        Our Products
      </h1>
    </div>
      <Products />
    </div>
  );
};

export default ProductsPage;