
import React, { useState } from 'react';
import { BookableItem } from '../types';
import { Calendar } from './Calendar';

interface BookingModalProps {
  item: BookableItem | null;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ item, onClose }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isBooked, setIsBooked] = useState(false);

  if (!item) return null;
  
  const availableTimes = ['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate && selectedTime && name && email) {
      setIsBooked(true);
      setTimeout(() => {
        onClose();
        setIsBooked(false);
        setSelectedDate(null);
        setSelectedTime('');
      }, 3000);
    } else {
      alert('Please fill all fields and select a date/time.');
    }
  };

  const getItemPrice = () => {
    if ('pricePerDay' in item) {
      return `$${item.pricePerDay} / day`;
    }
    return "Varies";
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-light rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto p-6 md:p-8 relative transform transition-all duration-300 scale-95 animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-dark text-2xl z-10">&times;</button>
        
        {isBooked ? (
          <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
            <svg className="w-24 h-24 text-green-500 mb-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <h2 className="text-3xl font-serif text-dark mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600">You will receive a confirmation email at {email}.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <img src={item.imageUrl} alt={item.name} className="rounded-lg w-full h-64 object-cover mb-4" />
              <h2 className="text-3xl font-serif text-dark mb-2">{item.name}</h2>
              <p className="text-gray-500 mb-4">{'specialty' in item ? item.specialty : 'type' in item ? item.type : item.category}</p>
              <div className="text-lg font-semibold text-primary">{getItemPrice()}</div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
              <h3 className="text-xl font-semibold font-serif text-dark border-b pb-2">Select Date & Time</h3>
              <Calendar 
                bookedDates={item.bookedDates}
                onDateSelect={setSelectedDate}
                selectedDate={selectedDate}
              />
              {selectedDate && (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Available Times for {selectedDate.toLocaleDateString()}</label>
                    <div className="grid grid-cols-3 gap-2">
                        {availableTimes.map(time => (
                            <button key={time} type="button" onClick={() => setSelectedTime(time)} className={`p-2 rounded-md text-sm transition-colors ${selectedTime === time ? 'bg-primary text-white' : 'bg-white hover:bg-secondary'}`}>{time}</button>
                        ))}
                    </div>
                </div>
              )}
              
              <h3 className="text-xl font-semibold font-serif text-dark border-b pb-2 pt-4">Your Details</h3>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary" required/>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors shadow-md disabled:bg-gray-400" disabled={!selectedDate || !selectedTime || !name || !email}>
                Confirm Booking
              </button>
            </form>
          </div>
        )}
      </div>
       <style>{`
        @keyframes scale-in {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};
