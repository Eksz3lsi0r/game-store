export interface ShopQuery {
  searchText?: string;
  category?: string;
  brand?: string;
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

export interface FilterState {
  categories: string[];
  brands: string[];
  priceRange: {
    min: number;
    max: number;
  };
  rating: number;
  availability: "all" | "inStock" | "onSale";
  sortBy:
    | "relevance"
    | "price-asc"
    | "price-desc"
    | "rating"
    | "newest"
    | "bestseller";
}
