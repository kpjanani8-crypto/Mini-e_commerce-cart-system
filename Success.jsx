import { Link } from "react-router-dom";

function Success() {
return ( <div className="success-page">

  <h1>
    🎉 Order Placed Successfully
  </h1>

  <p>
    Thank you for shopping
    with Lumina.
  </p>

  <Link to="/">
    <button>
      Continue Shopping
    </button>
  </Link>

</div>

);
}

export default Success;
