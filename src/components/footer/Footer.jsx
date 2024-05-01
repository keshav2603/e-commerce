import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-6 py-8 md:py-16">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold uppercase">STAY UPTO DATE ABOUT OUR LATEST OFFERS</span>
            <form className="mt-6 md:mt-10">
              <input type="email" placeholder="Enter your email address" className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-gray-600" />
              <button type="submit" className="w-full block mt-4 px-4 py-3 rounded-lg bg-gray-600 text-white uppercase font-bold">Subscribe</button>
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Shop.co</h2>
            <p className="text-gray-400">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
            <ul className="list-reset mt-6">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Customer Support</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Delivery Details</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">FAQ</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Account</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Features</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Works</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Orders</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Career</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Payments</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Manage Deliveries</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Resources</h2>
            <ul className="list-reset mt-6">
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Free eBooks</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Development Tutorial</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">How to - Blog</a></li>
              <li className="mb-2"><a href="#" className="text-gray-400 hover:text-gray-200">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t-2 border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div className="mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-gray-200">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gray-200 ml-4">Terms of Service</a>
            </div>
            <div>
              <p className="text-gray-400">© 2023 Shop.co</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;