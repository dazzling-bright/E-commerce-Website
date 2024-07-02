import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/header";
import MainContent from "./components/Header/body/mainContent";
import CartInfo from "./components/Header/body/cartInfo";

function App() {
  const [itemValue, setItemValue] = useState(0);
  const [cartItems, setCartItems] = useState(0);
  const [showCartInfo, setShowCartInfo] = useState(false);

  const handleAddItem = () => {
    setItemValue((prevValue) => prevValue + 1);
  };

  const handleSubtractItem = () => {
    setItemValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setItemValue(isNaN(value) ? 0 : value);
  };

  const handleAddToCart = () => {
    setCartItems(cartItems + itemValue);
    setItemValue(0); // Reset itemValue after adding to cart
  };

  const handleClearCart = () => {
    setCartItems(0);
  };

  const handleRemoveItem = () => {
    if (cartItems > 0) {
      setCartItems(cartItems - 1);
    }
  };

  const handleCartClick = () => {
    setShowCartInfo(!showCartInfo);
  };

  const handleCloseCart = () => {
    setShowCartInfo(false);
  };

  return (
    <main className="max-w-7xl mx-auto">
      <Header
        cartItems={cartItems}
        showCartInfo={showCartInfo}
        handleCartClick={handleCartClick}
        handleCloseCart={handleCloseCart}
        handleClearCart={handleClearCart}
        handleRemoveItem={handleRemoveItem}
      />
      <CartInfo
        itemValue={cartItems}
        handleClose={handleCloseCart}
        handleClearCart={handleClearCart}
        handleRemoveItem={handleRemoveItem}
      />
      <MainContent
        itemValue={itemValue}
        handleAddItem={handleAddItem}
        handleSubtractItem={handleSubtractItem}
        handleChange={handleChange}
        handleAddToCart={handleAddToCart}
      />
    </main>
  );
}

export default App;
