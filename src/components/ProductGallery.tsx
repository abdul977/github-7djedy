import React from 'react';
import ProductCard from './ProductCard';

interface ProductGalleryProps {
  products: {
    image: string;
    video: string;
    title: string;
  }[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ products }) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Product Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
