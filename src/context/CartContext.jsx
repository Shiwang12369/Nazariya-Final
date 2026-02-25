// src/context/CartContext.jsx
import React, { createContext, useContext, useMemo, useReducer } from "react";

// Initial state
const initialState = {
  items: [],
  shipping: 10, // fixed shipping fee
  taxRate: 0.08, // 8% tax for demonstration
};

// Action types
const ACTIONS = {
  ADD: "ADD_TO_CART",
  REMOVE: "REMOVE_FROM_CART",
  INCREASE: "INCREASE_QUANTITY",
  DECREASE: "DECREASE_QUANTITY",
  CLEAR: "CLEAR_CART",
};

// Reducer
function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD: {
      const { product } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === product.id && item.size === product.size
      );

      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...product, quantity: product.quantity || 1 }];
      }

      return { ...state, items: updatedItems };
    }

    case ACTIONS.REMOVE: {
      const { id, size } = action.payload;
      const updatedItems = state.items.filter(
        (item) => !(item.id === id && item.size === size)
      );
      return { ...state, items: updatedItems };
    }

    case ACTIONS.INCREASE: {
      const { id, size } = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      return { ...state, items: updatedItems };
    }

    case ACTIONS.DECREASE: {
      const { id, size } = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item
      );
      return { ...state, items: updatedItems };
    }

    case ACTIONS.CLEAR:
      return { ...state, items: [] };

    default:
      return state;
  }
}

// Create context
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Derived values
  const subtotal = useMemo(
    () =>
      state.items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [state.items]
  );

  const total = useMemo(() => {
    const tax = subtotal * state.taxRate;
    return subtotal + state.shipping + tax;
  }, [subtotal, state.shipping, state.taxRate]);

  // Actions
  const addToCart = (product) => dispatch({ type: ACTIONS.ADD, payload: { product } });
  const removeFromCart = (id, size) =>
    dispatch({ type: ACTIONS.REMOVE, payload: { id, size } });
  const increaseQuantity = (id, size) =>
    dispatch({ type: ACTIONS.INCREASE, payload: { id, size } });
  const decreaseQuantity = (id, size) =>
    dispatch({ type: ACTIONS.DECREASE, payload: { id, size } });
  const clearCart = () => dispatch({ type: ACTIONS.CLEAR });

  const value = {
    items: state.items,
    subtotal,
    total,
    shipping: state.shipping,
    taxRate: state.taxRate,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
