import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Items from "./components/Items/Items";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartContext";

function App() {
  const [cartDisplay, setCartDisplay] = useState(false);

  const showCartHandler = () => {
    setCartDisplay(true);
  };

  const hideCartHandler = () => {
    setCartDisplay(false);
  };

  return (
    <CartProvider>
      {cartDisplay && <Cart onCloseCart={hideCartHandler} />}
      <Header onOpenCart={showCartHandler} />
      <main>
        <Items />
      </main>
    </CartProvider>
  );
}

export default App;
