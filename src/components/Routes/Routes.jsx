import { Route, Routes } from "react-router-dom";
import Product from "../Products/Products";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";

const RouteLinks = ({
  cartItems,
  handleAddProduct,
  wishList,
  handleWishList,
}) => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Product
              handleAddProduct={handleAddProduct}
              handleWishList={handleWishList}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              handleAddProduct={handleAddProduct}
              
            />
          }
        />
         <Route
          path="/wishlist"
          element={
            <WishList
             wishList={wishList}
             handleWishList={handleWishList}
              
            />
          }
        />
      </Routes>
    </div>
  );
};

export default RouteLinks;
