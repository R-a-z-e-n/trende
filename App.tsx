
import React, { useState } from 'react';
import { View, Salon, Artist, RentalProduct, FashionProduct, BookableItem, ProductReview } from './types';
import { MOCK_SALONS, MOCK_ARTISTS, MOCK_RENTALS, MOCK_FASHION } from './constants';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { StarRating } from './components/StarRating';
import { BookingModal } from './components/BookingModal';

// --- Reusable Card Components --- //

interface ServiceCardProps {
  item: Salon | Artist;
  onBook: (item: Salon | Artist) => void;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ item, onBook }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold font-serif text-dark mb-1">{item.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{'type' in item ? item.type : item.specialty}</p>
      <div className="flex items-center mb-2">
        <StarRating rating={item.rating} size="sm" />
        <span className="text-xs text-gray-500 ml-2">({item.reviews} reviews)</span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{item.location}</p>
      <button onClick={() => onBook(item)} className="w-full bg-secondary text-dark py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
        Book Now
      </button>
    </div>
  </div>
);

interface RentalCardProps {
  item: RentalProduct;
  onBook: (item: RentalProduct) => void;
}
const RentalCard: React.FC<RentalCardProps> = ({ item, onBook }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
        <img src={item.imageUrl} alt={item.name} className="w-full h-48 object-cover" />
        <div className="p-4">
            <h3 className="text-xl font-semibold font-serif text-dark mb-1">{item.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{item.category}</p>
            <div className="flex items-center mb-2">
                <StarRating rating={item.rating} size="sm" />
            </div>
            <p className="text-2xl font-bold text-primary mb-4">${item.pricePerDay}<span className="text-sm font-normal text-gray-500">/day</span></p>
            <button onClick={() => onBook(item)} className="w-full bg-secondary text-dark py-2 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-300">
                Rent Now
            </button>
        </div>
    </div>
);


interface FashionCardProps {
  item: FashionProduct;
  isWishlisted: boolean;
  onToggleWishlist: (id: number) => void;
  onViewDetails: (item: FashionProduct) => void;
}
const FashionCard: React.FC<FashionCardProps> = ({ item, isWishlisted, onToggleWishlist, onViewDetails }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group relative">
        <img src={item.imageUrl} alt={item.name} className="w-full h-96 object-cover" />
         <button 
            onClick={() => onToggleWishlist(item.id)}
            className="absolute top-3 right-3 bg-white/70 p-2 rounded-full text-primary hover:bg-white transition-all duration-200 backdrop-blur-sm z-10"
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth={isWishlisted ? 0 : 1.5}>
                <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
        </button>
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-semibold font-serif text-white mb-1">{item.name}</h3>
          <p className="text-lg font-bold text-accent">${item.price.toFixed(2)}</p>
        </div>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button onClick={() => onViewDetails(item)} className="bg-primary text-white px-6 py-3 rounded-full font-semibold">View Details</button>
        </div>
    </div>
);


// --- Page/View Components --- //

const HomePage: React.FC<{ 
    setView: (view: View) => void;
    onBook: (item: BookableItem) => void;
    wishlist: number[];
    onToggleWishlist: (id: number) => void;
    fashionProducts: FashionProduct[];
    onViewDetails: (item: FashionProduct) => void;
}> = ({ setView, onBook, wishlist, onToggleWishlist, fashionProducts, onViewDetails }) => (
  <div>
    <div className="relative h-[60vh] bg-cover bg-center flex items-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1600/900')" }}>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="container mx-auto px-6 relative text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4">Discover Your Perfect Look.</h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">Book beauty services, rent fashion items, and shop the latest trends.</p>
        <div className="flex gap-4 justify-center">
          <button onClick={() => setView('salons')} className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all duration-300">Explore Salons</button>
          <button onClick={() => setView('fashion')} className="bg-secondary text-dark px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">Shop Fashion</button>
        </div>
      </div>
    </div>

    {/* Featured Salons */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">Featured Salons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_SALONS.slice(0, 3).map((salon) => (
            <ServiceCard key={salon.id} item={salon} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>

    {/* Featured Artists */}
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">Top Makeup Artists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_ARTISTS.slice(0, 3).map((artist) => (
            <ServiceCard key={artist.id} item={artist} onBook={onBook} />
          ))}
        </div>
      </div>
    </section>

    {/* Featured Fashion */}
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">Trending Fashion</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {fashionProducts.slice(0, 4).map((item) => (
            <FashionCard 
              key={item.id} 
              item={item} 
              isWishlisted={wishlist.includes(item.id)}
              onToggleWishlist={onToggleWishlist}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);

const SalonsPage: React.FC<{ onBook: (item: Salon) => void }> = ({ onBook }) => (
  <div className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">All Salons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_SALONS.map((salon) => (
          <ServiceCard key={salon.id} item={salon} onBook={onBook} />
        ))}
      </div>
    </div>
  </div>
);

const ArtistsPage: React.FC<{ onBook: (item: Artist) => void }> = ({ onBook }) => (
  <div className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">Makeup Artists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_ARTISTS.map((artist) => (
          <ServiceCard key={artist.id} item={artist} onBook={onBook} />
        ))}
      </div>
    </div>
  </div>
);

const RentalsPage: React.FC<{ onBook: (item: RentalProduct) => void }> = ({ onBook }) => (
    <div className="py-16">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">Fashion Rentals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {MOCK_RENTALS.map((rental) => (
                    <RentalCard key={rental.id} item={rental} onBook={onBook} />
                ))}
            </div>
        </div>
    </div>
);

const FashionPage: React.FC<{ 
  wishlist: number[];
  onToggleWishlist: (id: number) => void;
  fashionProducts: FashionProduct[];
  onViewDetails: (item: FashionProduct) => void;
}> = ({ wishlist, onToggleWishlist, fashionProducts, onViewDetails }) => (
    <div className="py-16">
        <div className="container mx-auto px-6">
            <h2 className="text-4xl font-serif font-bold text-center mb-12 text-dark">Fashion Collection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fashionProducts.map((item) => (
                    <FashionCard 
                        key={item.id} 
                        item={item} 
                        isWishlisted={wishlist.includes(item.id)}
                        onToggleWishlist={onToggleWishlist}
                        onViewDetails={onViewDetails}
                    />
                ))}
            </div>
        </div>
    </div>
);

// --- Main App Component --- //

export default function App() {
  const [view, setView] = useState<View>('home');
  const [bookingItem, setBookingItem] = useState<BookableItem | null>(null);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [fashionProducts] = useState<FashionProduct[]>(MOCK_FASHION);

  const handleBook = (item: BookableItem) => {
    setBookingItem(item);
  };

  const handleCloseBooking = () => {
    setBookingItem(null);
  };

  const handleToggleWishlist = (id: number) => {
    setWishlist(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const handleViewDetails = (item: FashionProduct) => {
    alert(`Viewing details for: ${item.name}\nPrice: $${item.price}\nDescription: ${item.description}`);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={view} setView={setView} wishlistCount={wishlist.length} />
      
      {view === 'home' && (
        <HomePage 
          setView={setView} 
          onBook={handleBook}
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          fashionProducts={fashionProducts}
          onViewDetails={handleViewDetails}
        />
      )}
      {view === 'salons' && <SalonsPage onBook={handleBook} />}
      {view === 'artists' && <ArtistsPage onBook={handleBook} />}
      {view === 'rentals' && <RentalsPage onBook={handleBook} />}
      {view === 'fashion' && (
        <FashionPage 
          wishlist={wishlist}
          onToggleWishlist={handleToggleWishlist}
          fashionProducts={fashionProducts}
          onViewDetails={handleViewDetails}
        />
      )}

      <Footer />
      
      {bookingItem && (
        <BookingModal item={bookingItem} onClose={handleCloseBooking} />
      )}
    </div>
  );
}