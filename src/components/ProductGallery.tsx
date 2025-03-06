import React from 'react';

const ProductGallery = ({ products }) => {
  return (
    <div className="lg:w-1/2">
      <h2 className="text-2xl font-bold mb-6">Product Gallery</h2>
      <div className="space-y-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <h3 className="text-xl font-semibold p-4 bg-gray-50">{product.title}</h3>
            <div className="grid grid-cols-2 gap-2 p-4">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <video 
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  src={product.video}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
