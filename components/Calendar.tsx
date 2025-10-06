
import React, { useState } from 'react';

interface CalendarProps {
  bookedDates?: string[];
  onDateSelect: (date: Date) => void;
  selectedDate: Date | null;
}

export const Calendar: React.FC<CalendarProps> = ({ bookedDates = [], onDateSelect, selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDate = new Date(startOfMonth);
  startDate.setDate(startDate.getDate() - startOfMonth.getDay());
  
  const dates = [];
  let date = new Date(startDate);
  while(dates.length < 42) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
  }

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const isSameDay = (d1: Date, d2: Date) => {
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  };
  
  const formatDateForCheck = (d: Date) => {
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-inner w-full max-w-sm mx-auto">
      <div className="flex justify-between items-center mb-4">
        <button onClick={prevMonth} className="text-gray-600 hover:text-primary">&lt;</button>
        <h3 className="text-lg font-semibold text-dark font-serif">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={nextMonth} className="text-gray-600 hover:text-primary">&gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {daysOfWeek.map(day => <div key={day} className="font-semibold text-gray-500">{day}</div>)}
        {dates.map((d, index) => {
          const isCurrentMonth = d.getMonth() === currentDate.getMonth();
          const isBooked = bookedDates.includes(formatDateForCheck(d));
          const isPast = d < new Date() && !isSameDay(d, new Date());
          const isSelectable = isCurrentMonth && !isBooked && !isPast;
          const isSelected = selectedDate && isSameDay(d, selectedDate);
          
          let classes = 'w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200';
          if (!isCurrentMonth) classes += ' text-gray-300';
          else if (isBooked || isPast) classes += ' text-gray-400 bg-gray-100 line-through cursor-not-allowed';
          else if (isSelected) classes += ' bg-primary text-white font-bold';
          else if (isSelectable) classes += ' cursor-pointer hover:bg-secondary hover:text-white';
          
          return (
            <div key={index} className={classes} onClick={() => isSelectable && onDateSelect(d)}>
              {d.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};
