import "./product.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import data from "../../components/Data/Data";
const Products = ( {handleAddProduct, cartItems, handleWishList}) => {
  const { productItems } = data;
//   console.log("handle:",handleAddProduct, cartItems);
    return (
    <div className="container">
    <div className="products">
      {productItems.map((item, id) => {
        return (
          <div className="card" key={id}>
            <div>
              <img className="product-image" src={item.image} alt={item.name} />
            </div>
            <div>
              <h3 className="product-name"> {item.name}</h3>
            </div>
            <div className="product-price">₹{item.price}</div>
            <div className="buttons">

              <button
                className="product-add-button"
                onClick ={() => {handleAddProduct(item)}}
              ><i className="bi bi-cart-fill"></i>
                
              </button>
              <button
                className="product-add-button"
                onClick ={() => {handleWishList(item)}}
              >
           <i class="bi bi-heart-fill"></i>
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Products;
