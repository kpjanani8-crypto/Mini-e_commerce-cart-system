import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { cart, wishlist } = useCart();

  const count = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">✨ Lumina</div>

      <div className="nav-right">
        <Link to="/">Shop</Link>

        <Link to="/wishlist" className="cart-icon">
          <FaHeart size={24} />
          {wishlist.length > 0 && (
            <span className="cart-badge">
              {wishlist.length}
            </span>
          )}
        </Link>

        <Link to="/cart" className="cart-icon">
          <FaShoppingCart size={28} />
          {count > 0 && (
            <span className="cart-badge">
              {count}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;