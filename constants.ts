
import { Salon, Artist, RentalProduct, FashionProduct } from './types';

export const MOCK_SALONS: Salon[] = [
  {
    id: 1,
    name: "The Gilded Comb",
    type: "Hair Salon",
    rating: 4.8,
    reviews: 124,
    location: "Downtown, Metro City",
    imageUrl: "https://picsum.photos/seed/salon1/400/300",
    services: ["Haircut & Style", "Coloring", "Extensions"],
    bookedDates: ["2024-08-10", "2024-08-12", "2024-08-25"],
  },
  {
    id: 2,
    name: "Serenity Spa & Nails",
    type: "Nail & Spa",
    rating: 4.9,
    reviews: 210,
    location: "Uptown, Metro City",
    imageUrl: "https://picsum.photos/seed/salon2/400/300",
    services: ["Manicure", "Pedicure", "Facials"],
    bookedDates: ["2024-08-11", "2024-08-15", "2024-08-22"],
  },
  {
    id: 3,
    name: "Modern Man Barbershop",
    type: "Barbershop",
    rating: 4.7,
    reviews: 98,
    location: "West End, Metro City",
    imageUrl: "https://picsum.photos/seed/salon3/400/300",
    services: ["Classic Cut", "Beard Trim", "Hot Shave"],
    bookedDates: ["2024-08-09", "2024-08-18", "2024-08-28"],
  },
];

export const MOCK_ARTISTS: Artist[] = [
  {
    id: 1,
    name: "Isabella Rossi",
    specialty: "Bridal Makeup",
    rating: 5.0,
    reviews: 75,
    location: "Mobile - Metro City Area",
    imageUrl: "https://picsum.photos/seed/artist1/400/300",
    bookedDates: ["2024-08-11", "2024-08-18", "2024-08-25"],
  },
  {
    id: 2,
    name: "Leo Chen",
    specialty: "Editorial Hair Stylist",
    rating: 4.9,
    reviews: 52,
    location: "Studio in Downtown",
    imageUrl: "https://picsum.photos/seed/artist2/400/300",
    bookedDates: ["2024-08-12", "2024-08-13", "2024-08-20"],
  },
  {
    id: 3,
    name: "Chloe Davis",
    specialty: "Special Effects Makeup",
    rating: 4.8,
    reviews: 41,
    location: "Mobile - Metro City Area",
    imageUrl: "https://picsum.photos/seed/artist3/400/300",
    bookedDates: ["2024-08-15", "2024-08-23"],
  },
];

export const MOCK_RENTALS: RentalProduct[] = [
  {
    id: 1,
    name: "Professional Ring Light Kit",
    category: "Lighting",
    pricePerDay: 25,
    rating: 4.9,
    imageUrl: "https://picsum.photos/seed/rental1/400/300",
    bookedDates: ["2024-08-10", "2024-08-11", "2024-08-21"],
  },
  {
    id: 2,
    name: "Portable Massage Table",
    category: "Equipment",
    pricePerDay: 40,
    rating: 4.7,
    imageUrl: "https://picsum.photos/seed/rental2/400/300",
    bookedDates: ["2024-08-14", "2024-08-15", "2024-08-16"],
  },
  {
    id: 3,
    name: "Airbrush Makeup System",
    category: "Tools",
    pricePerDay: 60,
    rating: 4.8,
    imageUrl: "https://picsum.photos/seed/rental3/400/300",
    bookedDates: ["2024-08-18", "2024-08-25"],
  },
];

export const MOCK_FASHION: FashionProduct[] = [
  {
    id: 1,
    name: "Floral Sundress",
    category: "Dresses",
    price: 89.99,
    rating: 4.6,
    // FIX: Corrected typo in property name from _G_B_C_imageUrl to imageUrl.
    imageUrl: "https://picsum.photos/seed/fashion1/400/500",
    sizes: ["S", "M", "L"],
    reviews: [
        { id: 1, author: "Jane D.", rating: 5, comment: "Absolutely beautiful dress! The fabric is light and perfect for summer.", date: "2024-07-20"},
        { id: 2, author: "Sarah K.", rating: 4, comment: "Very cute, but runs a little small. I would recommend sizing up.", date: "2024-07-18"},
    ],
  },
  {
    id: 2,
    name: "Classic Leather Jacket",
    category: "Outerwear",
    price: 249.99,
    rating: 4.9,
    // FIX: Corrected typo in property name from _G_B_C_imageUrl to imageUrl.
    imageUrl: "https://picsum.photos/seed/fashion2/400/500",
    sizes: ["M", "L", "XL"],
    reviews: [],
  },
  {
    id: 3,
    name: "High-Waisted Denim Jeans",
    category: "Pants",
    price: 75.0,
    rating: 4.5,
    // FIX: Corrected typo in property name from _G_B_C_imageUrl to imageUrl.
    imageUrl: "https://picsum.photos/seed/fashion3/400/500",
    sizes: ["26", "28", "30", "32"],
    reviews: [],
  },
   {
    id: 4,
    name: "Silk Evening Gown",
    category: "Dresses",
    price: 320.0,
    rating: 4.8,
    // FIX: Corrected typo in property name from _G_B_C_imageUrl to imageUrl.
    imageUrl: "https://picsum.photos/seed/fashion4/400/500",
    sizes: ["S", "M", "L"],
    reviews: [],
  },
];
