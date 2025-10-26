export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: Category;
  subcategory?: string;
  brand: Brand;
  tags: string[];
  inStock: boolean;
  stockCount: number;
  isFeatured: boolean;
  isNew: boolean;
  isBestseller: boolean;
  shippingInfo: {
    freeShipping: boolean;
    estimatedDays: number;
    cost?: number;
  };
  specifications?: { [key: string]: string };
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  price: number;
  image?: string;
  inStock: boolean;
  attributes: { [key: string]: string }; // color, size, etc.
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  parentId?: number;
  subcategories?: Category[];
  featured: boolean;
  image?: string;
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  description?: string;
  website?: string;
  featured: boolean;
}

export interface CartItem {
  product: Product;
  variant?: ProductVariant;
  quantity: number;
  addedAt: Date;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface ProductQuery {
  searchText?: string;
  category?: Category;
  brand?: Brand;
  priceRange?: {
    min: number;
    max: number;
  };
  rating?: number;
  sortOrder?: string;
  inStock?: boolean;
  featured?: boolean;
  onSale?: boolean;
  tags?: string[];
}

export interface Review {
  id: number;
  productId: number;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  verified: boolean;
  helpful: number;
  createdAt: Date;
  images?: string[];
}

export interface Deal {
  id: number;
  title: string;
  description: string;
  discountPercent: number;
  validUntil: Date;
  products: Product[];
  bannerImage: string;
  type: "flash" | "daily" | "weekly" | "seasonal";
}
