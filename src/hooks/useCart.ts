import { useState, useCallback } from "react";
import { APCProduct } from "../data/apc-products";

export interface CartItem {
  product: APCProduct;
  size: string;
  quantity: number;
  id: string;
}

export interface UseCartReturn {
  cartItems: CartItem[];
  cartCount: number;
  totalPrice: number;
  addToCart: (product: APCProduct, size: string, quantity: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  isInCart: (productId: string, size: string) => boolean;
}

export const useCart = (): UseCartReturn => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback(
    (product: APCProduct, size: string, quantity: number) => {
      const itemId = `${product.id}-${size}`;

      setCartItems((prevItems) => {
        const existingItemIndex = prevItems.findIndex(
          (item) => item.id === itemId
        );

        if (existingItemIndex > -1) {
          // Update existing item quantity
          const updatedItems = [...prevItems];
          updatedItems[existingItemIndex].quantity += quantity;
          return updatedItems;
        } else {
          // Add new item
          const newItem: CartItem = {
            product,
            size,
            quantity,
            id: itemId,
          };
          return [...prevItems, newItem];
        }
      });
    },
    []
  );

  const removeFromCart = useCallback((itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }, []);

  const updateQuantity = useCallback(
    (itemId: string, quantity: number) => {
      if (quantity <= 0) {
        removeFromCart(itemId);
        return;
      }

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  const isInCart = useCallback(
    (productId: string, size: string) => {
      const itemId = `${productId}-${size}`;
      return cartItems.some((item) => item.id === itemId);
    },
    [cartItems]
  );

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.product.prices[item.size] || 0;
    return total + price * item.quantity;
  }, 0);

  return {
    cartItems,
    cartCount,
    totalPrice,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart,
  };
};
