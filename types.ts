
export enum View {
  Home,
  Salons,
  Artists,
  Rentals,
  Store,
  ListYourService,
  Wishlist,
  ProductDetail,
}

export interface Salon {
  id: number;
  name: string;
  type: string;
  rating: number;
  reviews: number;
  location: string;
  imageUrl: string;
  services: string[];
  bookedDates: string[];
}

export interface Artist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  location: string;
  imageUrl: string;
  bookedDates: string[];
}

export interface RentalProduct {
  id: number;
  name: string;
  category: string;
  pricePerDay: number;
  rating: number;
  imageUrl: string;
  bookedDates: string[];
}

export interface ProductReview {
    id: number;
    author: string;
    rating: number;
    comment: string;
    date: string;
}

export interface FashionProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  imageUrl: string;
  sizes: string[];
  reviews: ProductReview[];
}

export type BookableItem = Salon | Artist | RentalProduct;