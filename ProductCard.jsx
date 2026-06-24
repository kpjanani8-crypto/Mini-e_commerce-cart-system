import { useCart } from "../context/CartContext";
import { FaStar, FaPlus, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";

function ProductCard({ product }) {
  const {
    addToCart,
    wishlist,
    toggleWishlist
  } = useCart();

  const isWishlisted = wishlist.some(
    item => item.id === product.id
  );

  const handleAdd = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart 🛒`);
  };

  const handleWishlist = () => {
    toggleWishlist(product);

    if (isWishlisted) {
      toast.info(`${product.name} removed from wishlist`);
    } else {
      toast.success(`${product.name} added to wishlist ❤️`);
    }
  };

  const rating = (4 + Math.random()).toFixed(1);

  return (
    <div className="product-card">

      <button
        className="wishlist-btn"
        onClick={handleWishlist}
        type="button"
      >
        <FaHeart color={isWishlisted ? "red" : "#cbd5e1"} />
      </button>

      <div className="category-tag">
        {product.category}
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-content">
        <div className="product-header">
          <h3 className="product-title">
            {product.name}
          </h3>

          <div className="rating">
            <FaStar />
            {rating}
          </div>
        </div>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-footer">
          <h2 className="product-price">
            ₹{product.price}
          </h2>

          <button
            className="add-btn"
            onClick={handleAdd}
          >
            <FaPlus />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;