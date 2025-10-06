
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif mb-4">Trend<span className="text-primary">e</span></h3>
            <p className="text-gray-400 text-sm">Your one-stop destination for all things beauty and fashion.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Salons</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Makeup Artists</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Rentals</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Fashion Store</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
               {/* SVG icons for social media */}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Trende. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};