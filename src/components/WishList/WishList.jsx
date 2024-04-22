
const WishList = (props ) => {
   
    const{WishList}=props
    console.log("cartItems1234", cartItems)
  return (
    <div className="cart-items">
      <div className="cart-items-header"><h4>Wish list Items</h4></div>
      {WishList.length === 0 && (
        <div className="cart-items-empty">No items are added</div>
      )}
      <div>
        {WishList?.map((item, id) => (
        <div className='card'>
            <div key={id} className="cart-items-list">
              <img className="cart-items-image"src={item.image} alt={item.name} />
            </div>
            <div>
              <h3 className="product-name"> {item.name}</h3>
            </div>
            <div className="product-price">₹{item.price}</div>
            <button
                className="product-add-button"
                onClick ={() => {handleAddProduct(item)}}
              >
                Remove
              </button>
            </div>
            
          
        ))}
      </div>
    </div>
  );
};

export default WishList;
