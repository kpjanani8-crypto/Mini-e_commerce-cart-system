import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

function Checkout() {
  const {
    cart,
    totalPrice,
    clearCart
  } = useCart();

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [payment, setPayment] = useState("");

  const handleOrder = () => {
    if (!name || !address || !payment) {
      toast.error("Please fill all details");
      return;
    }

    clearCart();
    navigate("/success");
  };

  if (cart.length === 0) {
    return (
      <div className="empty-cart">
        <h1>No items to checkout</h1>
      </div>
    );
  }

  return (
    <div className="checkout">
      <h1>Checkout Summary</h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="summary-item"
        >
          <span>{item.name}</span>
          <span>x {item.quantity}</span>
        </div>
      ))}

      <h2>Total Amount: ₹{totalPrice}</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) =>
          setAddress(e.target.value)
        }
      />

      <select
        value={payment}
        onChange={(e) =>
          setPayment(e.target.value)
        }
      >
        <option value="">
          Select Payment Method
        </option>
        <option value="COD">
          Cash on Delivery
        </option>
        <option value="UPI">
          UPI
        </option>
        <option value="Card">
          Card
        </option>
      </select>

      <button
        className="checkout-btn"
        onClick={handleOrder}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;