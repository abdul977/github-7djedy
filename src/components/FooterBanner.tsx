import React from 'react';

const FooterBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Limited Time Muahib Festival Offer!</h2>
        <p className="text-lg mb-6">Get this exclusive 6-product combo at 50% OFF with Free Delivery</p>
        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md">
          Buy Now at ₦55,000
        </button>
      </div>
    </div>
  );
};

export default FooterBanner;
