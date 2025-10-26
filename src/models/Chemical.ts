export interface ChemicalProduct {
  id: number;
  name: string;
  category: string;
  subcategory?: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  purity: string;
  cas_number?: string;
  molecular_formula?: string;
  molecular_weight?: string;
  appearance: string;
  solubility: string[];
  storage_conditions: string;
  safety_warnings: string[];
  applications: string[];
  documentation: {
    certificate_of_analysis: boolean;
    safety_data_sheet: boolean;
    nmr_spectrum: boolean;
  };
  availability: "in_stock" | "low_stock" | "out_of_stock" | "pre_order";
  shipping_restrictions: string[];
  tags: string[];
  rating: number;
  reviews_count: number;
  created_at: string;
  updated_at: string;
}

export interface ChemicalCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  subcategories: ChemicalSubcategory[];
  product_count: number;
  color_theme: string;
}

export interface ChemicalSubcategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  product_count: number;
}

export interface ChemicalQuery {
  searchText?: string;
  category?: ChemicalCategory;
  subcategory?: ChemicalSubcategory;
  priceRange?: {
    min: number;
    max: number;
  };
  purityRange?: {
    min: number;
    max: number;
  };
  availability?: string[];
  sortOrder?: "name" | "price" | "rating" | "newest" | "popularity";
}

export interface CartItem {
  product: ChemicalProduct;
  quantity: number;
  selectedPackaging?: string;
}

export interface ShoppingCart {
  items: CartItem[];
  total: number;
  itemCount: number;
  shippingCost: number;
  tax: number;
  grandTotal: number;
}
