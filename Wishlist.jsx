import { useCart } from "../context/CartContext";

function Wishlist() {
  const {
    wishlist,
    toggleWishlist,
    addToCart
  } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty-cart">
        <h1>❤️ Wishlist Empty</h1>
      </div>
    );
  }

  return (
    <div className="products-page">
      <h1>My Wishlist ❤️</h1>

      <div className="grid">
        {wishlist.map((item) => (
          <div key={item.id} className="product-card">
            <img
              src={item.image}
              alt={item.name}
              className="product-image"
            />

            <div className="product-content">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <button
                className="add-btn"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>

              <button
                className="remove-btn"
                onClick={() => toggleWishlist(item)}
                style={{ marginTop: "10px" }}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;