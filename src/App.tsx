import React, { useState } from 'react';
import { Star, Package, Shield } from 'lucide-react';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';

interface ProductCardProps {
  product: {
    image: string;
    video: string;
    title: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] duration-300">
      <h3 className="text-2xl font-bold p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">{product.title}</h3>
      <div className="flex flex-col gap-6 p-6">
        <div className="rounded-xl overflow-hidden h-[500px] shadow-md">
          <img 
            src={product.image} 
            alt={product.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="relative rounded-xl overflow-hidden h-[500px] shadow-md">
          <video 
            ref={videoRef}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
            src={product.video}
          />
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button
              onClick={togglePlay}
              className="bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors"
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
              )}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors"
            >
              {isMuted ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [quantity, setQuantity] = useState(1);

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
            <div className="text-white max-w-3xl">
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg inline-block mb-4">
                🔥 FLASH SALE - LIMITED TIME OFFER 🔥
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Muahib Festival Mega Combo Deal</h1>
              <p className="text-xl md:text-2xl mb-6">Premium 6-in-1 Package - Luxury Meets Affordability!</p>
              <div className="flex items-center mb-6 bg-white/10 p-3 rounded-lg inline-block">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-current text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-lg">4.9 (256 verified reviews)</span>
              </div>
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg p-6 inline-block">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm bg-red-600 text-white px-3 py-1 rounded-full">50% OFF</span>
                  <span className="text-sm bg-green-600 text-white px-3 py-1 rounded-full">Free Delivery</span>
                </div>
                <p className="text-3xl font-bold">₦55,000 
                  <span className="line-through text-xl font-normal text-gray-300 ml-2">₦110,000</span>
                </p>
                <p className="text-black font-medium mt-2">🎁 6 Premium Products + Free Delivery</p>
              </div>
              <div className="mt-8 flex gap-4">
                <a href="#buy-now" className="bg-gradient-to-r from-green-500 to-green-700 text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform">
                  Order Now
                </a>
                <a 
                  href="https://wa.me/+2349162613381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform flex items-center gap-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Countdown Timer */}
            <div className="bg-gradient-to-r from-red-500 to-red-700 text-white p-6 rounded-xl mb-12 text-center">
              <p className="text-xl font-bold mb-4">🚨 FLASH SALE ENDS IN:</p>
              <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
                {['01', '00', '59', '00'].map((value, index) => (
                  <div key={index} className="bg-black/30 rounded-lg p-3">
                    <div className="text-2xl font-bold mb-1">{value}</div>
                    <div className="text-xs">{['Days', 'Hours', 'Minutes', 'Seconds'][index]}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-yellow-300 font-medium">⚡ Only 23 pieces left in stock!</p>
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Premium Quality</h2>
              <p className="text-lg text-gray-600 mb-8">
                The Muahib Festival Mega Combo brings together six premium products, carefully selected to enhance your daily life. Each item is crafted with attention to detail and designed for maximum functionality.
              </p>

              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-bold mb-4">What's Included in Your Package:</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Premium Smart Watch
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Wireless Earbuds
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Luxury Backpack
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Power Bank
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Wireless Charger
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Premium Accessories
                  </li>
                </ul>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
      </div>

      {/* Product Gallery Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Product Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.slice(1).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
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

      {/* Order Form Section */}
      <div className="bg-gray-50 py-16" id="buy-now">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Order Now</h2>
              <p className="text-gray-600">Fill the form below to place your order</p>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Alternative Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter alternative phone number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Delivery Address</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter your delivery address"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">City</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your city"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">State</label>
                <select 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select your state</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                  <option value="Rivers">Rivers</option>
                  {/* Add other Nigerian states */}
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Package</label>
                <select 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="1">1 Package - ₦55,000</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Comments (Optional)</label>
                <textarea 
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Any additional information"
                />
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <input type="checkbox" required />
                <label>I confirm that I will be available to receive and pay for my package</label>
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-md font-bold hover:opacity-90 transition-opacity"
              >
                Submit Order
              </button>
            </form>

            <div className="mt-8 flex items-center justify-center gap-4">
              <img src="https://www.shiprocket.in/wp-content/uploads/2019/02/pay-on-delivery-for-eCommerce-2.jpg" alt="Payment on Delivery" className="h-12" />
              <div className="text-center">
                <p className="font-medium">Payment on Delivery Available</p>
                <p className="text-sm text-gray-600">Cash or Bank Transfer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Money Back Guarantee */}
      <div className="bg-blue-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2151103918/settings_images/e452cf0-64cd-5abf-17b5-0d5ee1d0bf7_Ribbon_Behind_30_Day_Guarantee_2_-_White_Background.png" 
            alt="30 Days Money Back Guarantee" 
            className="h-24 mx-auto mb-6"
          />
          <h2 className="text-2xl font-bold mb-4">30 Days Money Back Guarantee</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We are confident that you will love your product. To ensure your complete satisfaction, 
            we offer an ironclad 30-day money-back guarantee. If you're not entirely happy with your purchase, 
            simply return it within 30 days for a full refund.
          </p>
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

      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
