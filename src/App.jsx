import { useState } from "react";
import data from "./components/Data/Data";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes/Routes";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishList, setWishList] = useState([]);

  const handleAddProduct = (productId) => {
    const productExist = cartItems.find((item) => item.id === productId);
    setCartItems((prev) => [...prev, productId]);
  };

  const handleWishList = (productId) => {
    const itemExist = wishList.find((item) => item.id === productId);
  setWishList((prev) => [...prev, productId]);
  };
 console.log("Cart",wishList)

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          wishList={wishList}
          handleWishList={handleWishList}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
