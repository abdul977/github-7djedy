import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface OrderFormProps {
  onSubmit: (formData: OrderFormData) => void;
  quantity?: number;
  onClose?: () => void;
}

export interface OrderFormData {
  orderNumber: string;
  name: string;
  phoneNumber: string;
  alternativePhone: string;
  address: string;
  city: string;
  state: string;
  comments: string;
  quantity: number;
  totalPrice: number;
}

const PRICE_PER_UNIT = 55000;

const PRODUCT_DETAILS = `
• Premium SmartWatch with Heart Rate & BP Monitor
• High Quality Wireless Earbuds
• 10,000mAh Magnetic Power Bank
• Wireless Fast Charger
• Premium Backpack
• Bonus Accessories
`;

export const OrderForm: React.FC<OrderFormProps> = ({ onSubmit, quantity = 1, onClose }) => {
  const [formData, setFormData] = useState<Omit<OrderFormData, 'orderNumber' | 'totalPrice'>>({
    name: '',
    phoneNumber: '',
    alternativePhone: '',
    address: '',
    city: '',
    state: 'Abuja',
    comments: '',
    quantity: quantity
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNumber = uuidv4();
    onSubmit({
      ...formData,
      orderNumber,
      totalPrice: formData.quantity * PRICE_PER_UNIT
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6 bg-red-50 border-2 border-red-500 p-6 rounded-lg shadow-md">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-red-700 mb-3">🚨 Please Read Carefully!</h3>
            <p className="text-red-700 font-medium mb-3">
              We kindly request that you only place an order if you have a genuine intention to purchase. Non-serious orders have real consequences for our small business:
            </p>
            <ul className="list-disc ml-6 mb-4 text-red-700 space-y-2">
              <li>Each delivery attempt costs us fuel and driver time</li>
              <li>Products reserved for non-serious orders could have gone to genuine customers</li>
              <li>Our staff spends valuable time preparing and following up on orders</li>
            </ul>
            <div className="bg-white p-4 rounded-lg border border-red-300 mb-4">
              <p className="text-red-700 font-semibold text-center">
                If you're not ready to purchase now:
              </p>
              <ul className="list-none mt-2 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-red-500">📌</span>
                  <span className="text-red-700">Bookmark this page to return when ready</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-red-500">💬</span>
                  <span className="text-red-700">Contact us on WhatsApp (+234-814-449-3361) for future delivery</span>
                </li>
              </ul>
            </div>
          </div>
          <img 
            src="https://thumbs.dreamstime.com/z/cartoon-office-worker-begging-his-job-isolated-42117823.jpg"
            alt="Please consider our request"
            className="w-32 h-32 object-contain rounded-lg"
          />
        </div>
        <p className="mt-2 text-red-700 font-medium border-t border-red-300 pt-3">
          Abuja customers: Same-day delivery available (delivery time varies by location)
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6 bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-800 mb-2">🎁 Package Contents:</h3>
          <pre className="whitespace-pre-wrap text-blue-800">{PRODUCT_DETAILS}</pre>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Alternative Phone Number</label>
          <input
            type="tel"
            name="alternativePhone"
            value={formData.alternativePhone}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Delivery Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="Abuja">Abuja</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Order Comments (Optional)</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={3}
          />
        </div>
        <div className="mb-4">
          <p className="font-medium mb-2">Order Summary:</p>
          <div className="bg-gray-50 p-4 rounded-md">
            <p>Quantity: {quantity}</p>
            <p>Price per unit: ₦{PRICE_PER_UNIT.toLocaleString()}</p>
            <p className="font-bold text-lg mt-2">Total: ₦{(quantity * PRICE_PER_UNIT).toLocaleString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <input type="checkbox" required />
          <label>I confirm that I will be available to receive and pay for my package</label>
        </div>
        <div className="flex gap-3">
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-md font-bold"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className={`${onClose ? 'w-1/2' : 'w-full'} bg-gradient-to-r from-green-500 to-green-700 text-white py-3 rounded-md font-bold hover:opacity-90 transition-opacity`}
          >
            Submit Order
          </button>
        </div>
      </form>
    </div>
  );
};
