import React, { useState } from 'react';
import { Star, ShoppingCart, Package, Truck, Shield, ChevronRight, ChevronLeft } from 'lucide-react';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('photos');

  const products = [
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//full%20picture%20advertisements%20all.png",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//heropage.mp4",
      title: "Full Collection"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//smartwatch%20picture.png",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//smart%20watch%20video%20three.mp4",
      title: "Smart Watch"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//earbud%20picture.png",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//earbud%20video.mp4",
      title: "Wireless Earbuds"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//bag%20pack%20picture.png",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//bag%20pack%20video.mp4",
      title: "Premium Backpack"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//power%20bank%20picture.jpg",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//Apple_MagSafe_Battery_Powebank_Unboxing.mp4",
      title: "Power Bank"
    },
    {
      image: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//charger%20picture.jpg",
      video: "https://ttcapwgcfadajcoljuuk.supabase.co/storage/v1/object/public/Video//smart%20watch%20video%204.mp4",
      title: "Wireless Charger"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Video Background */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={products[0].video}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Muahib Festival Mega Combo Deal</h1>
              <p className="text-xl md:text-2xl mb-6">Limited Time Offer - 6 Premium Products in One Package</p>
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2">4.9 (256 reviews)</span>
              </div>
              <div className="bg-white/20 rounded-lg p-4 inline-block">
                <p className="text-2xl font-bold">₦55,000 <span className="line-through text-lg font-normal text-gray-300">₦110,000</span></p>
                <p className="text-yellow-300 font-semibold">50% OFF (Delivery Included)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Premium Quality</h2>
            <p className="text-lg text-gray-600 mb-8">
              The Muahib Festival Mega Combo brings together six premium products, carefully selected to enhance your daily life. Each item is crafted with attention to detail and designed for maximum functionality.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">Highest grade materials and craftsmanship</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Satisfaction Guaranteed</h3>
                <p className="text-gray-600">30-day money-back guarantee</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Package className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Complete Package</h3>
                <p className="text-gray-600">Everything you need in one box</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Product Gallery Section */}
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

          {/* Buy Now Section */}
          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8 sticky top-4">
              <h2 className="text-3xl font-bold mb-2">Muahib Festival Mega Combo</h2>
              <div className="flex items-center mb-4">
                <p className="text-3xl font-bold text-blue-600 mr-3">₦55,000</p>
                <p className="text-lg line-through text-gray-500 mr-3">₦110,000</p>
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-medium">50% OFF</span>
              </div>
              
              <div className="flex items-center text-sm text-gray-600 mb-6">
                <Truck className="h-4 w-4 mr-1" />
                <span className="mr-4">Free Delivery</span>
                <Shield className="h-4 w-4 mr-1" />
                <span>1 Year Warranty</span>
              </div>

              <div className="mb-6">
                <p className="font-medium mb-2">Quantity:</p>
                <div className="flex items-center">
                  <button 
                    onClick={decreaseQuantity}
                    className="bg-gray-200 px-3 py-1 rounded-l-md hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="bg-gray-100 px-6 py-1">{quantity}</span>
                  <button 
                    onClick={increaseQuantity}
                    className="bg-gray-200 px-3 py-1 rounded-r-md hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium flex items-center justify-center mb-4">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Buy Now
              </button>
              
              <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
                <p className="text-green-800 font-medium">Limited Time Offer! Only 23 combos left in stock.</p>
              </div>

              <div className="space-y-4">
                <div className="flex">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Truck className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Free Delivery</p>
                    <p className="text-sm text-gray-600">Delivery within 3-5 business days</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Payment on Delivery</p>
                    <p className="text-sm text-gray-600">Cash, UPI, or card payment options</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Oluwaseun A.",
                rating: 5,
                comment: "Absolutely love this combo! The backpack is spacious and stylish, and the earbuds have amazing sound quality. Great value for money.",
                date: "2 days ago"
              },
              {
                name: "Chioma M.",
                rating: 5,
                comment: "The smartwatch is fantastic - accurate fitness tracking and the battery lasts for days. The power bank has saved me multiple times already!",
                date: "1 week ago"
              },
              {
                name: "Adebayo K.",
                rating: 4,
                comment: "Everything in this package exceeded my expectations except the wireless charger which is a bit slow. Still, amazing deal overall!",
                date: "2 weeks ago"
              }
            ].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-medium text-lg">{review.name}</p>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-white hover:bg-gray-100 text-blue-600 font-medium py-2 px-6 border border-blue-600 rounded-md">
              View All 256 Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Limited Time Muahib Festival Offer!</h2>
          <p className="text-lg mb-6">Get this exclusive 6-product combo at 50% OFF with Free Delivery</p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-md">
            Buy Now at ₦55,000
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;