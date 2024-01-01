import React, { createContext, useReducer } from "react";
import reducer, { initialState } from "./Reducer";


export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer,  initialState);

  const addToBasket = (product) => {
    const updateBasket = state.product;
    updateBasket.push(product);

    updatePrice(updateBasket)


    dispatch({
      type: "add",
      payload: updateBasket,
    });
  };

  const removeFromBasket = (product) => {
    const updateBasket = state.product.filter(
      (currentProduct) => currentProduct.name !== product.name);

updatePrice(updateBasket)

    dispatch({
      type: "remove",
      payload: updateBasket,
    });
  };

  const updatePrice = (products) => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: "update price",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    product: state.product,
    addToBasket, 
    removeFromBasket
  }
  return <StoreContext.Provider value={value}>
    {children}
  </StoreContext.Provider>
};
