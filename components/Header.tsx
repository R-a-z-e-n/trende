
import React from 'react';
import { View } from '../types';

interface HeaderProps {
  setView: (view: View) => void;
  currentView: View;
  wishlistCount: number;
}

const NavLink: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative ${
      isActive ? 'text-primary' : 'text-dark hover:text-primary'
    }`}
  >
    {label}
    {isActive && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
    )}
  </button>
);

export const Header: React.FC<HeaderProps> = ({ setView, currentView, wishlistCount }) => {
  return (
    <header className="bg-light/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold font-serif text-dark cursor-pointer" onClick={() => setView(View.Home)}>
          Trend<span className="text-primary">e</span>
        </div>
        <div className="hidden md:flex items-center space-x-2 bg-white/50 px-3 py-1.5 rounded-full">
          <NavLink label="Home" isActive={currentView === View.Home} onClick={() => setView(View.Home)} />
          <NavLink label="Salons" isActive={currentView === View.Salons} onClick={() => setView(View.Salons)} />
          <NavLink label="Artists" isActive={currentView === View.Artists} onClick={() => setView(View.Artists)} />
          <NavLink label="Rentals" isActive={currentView === View.Rentals} onClick={() => setView(View.Rentals)} />
          <NavLink label="Store" isActive={currentView === View.Store} onClick={() => setView(View.Store)} />
        </div>
        <div className="hidden md:flex items-center space-x-4">
            <button 
                onClick={() => setView(View.Wishlist)} 
                className="relative text-dark hover:text-primary transition-colors p-2 rounded-full"
                aria-label={`Wishlist with ${wishlistCount} items`}
                >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-secondary text-dark text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                        {wishlistCount}
                    </span>
                )}
            </button>
            <button 
                onClick={() => setView(View.ListYourService)}
                className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-transform hover:scale-105 shadow-md">
              List Your Service
            </button>
        </div>
         <div className="md:hidden">
            {/* Mobile Menu Button can be added here */}
        </div>
      </nav>
    </header>
  );
};