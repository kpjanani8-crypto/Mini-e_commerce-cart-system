import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
const {
cart,
increaseQty,
decreaseQty,
removeItem,
totalPrice
} = useCart();

if (cart.length === 0) {
return ( <div className="empty-cart"> <h1>Your Cart is Empty 🛒</h1> <Link to="/"> <button>Continue Shopping</button> </Link> </div>
);
}

return ( <div className="cart-layout">

  <div>

    <h1>Shopping Cart</h1>

    {cart.map((item) => (

      <div
        key={item.id}
        className="cart-card"
      >

        <img
          src={item.image}
          alt={item.name}
          className="cart-image"
        />

        <div className="cart-details">

          <h3>{item.name}</h3>

          <p>
            ₹{item.price}
          </p>

        </div>

        <div className="qty">

          <button
            onClick={() =>
              decreaseQty(item.id)
            }
          >
            -
          </button>

          <span>
            {item.quantity}
          </span>

          <button
            onClick={() =>
              increaseQty(item.id)
            }
          >
            +
          </button>

        </div>

        <h3>
          ₹
          {item.price *
            item.quantity}
        </h3>

        <button
          className="remove-btn"
          onClick={() =>
            removeItem(item.id)
          }
        >
          Remove
        </button>

      </div>

    ))}

  </div>

  <div className="summary-box">

    <h2>
      Order Summary
    </h2>

    <p>
      Items: {cart.length}
    </p>

    <h1>
      ₹{totalPrice}
    </h1>

    <Link to="/checkout">
      <button
        className="checkout-btn"
      >
        Checkout Now
      </button>
    </Link>

  </div>

</div>

);
}

export default Cart;
