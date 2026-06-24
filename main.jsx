import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./styles.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  CartProvider
} from "./context/CartContext";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <CartProvider>
    <App />
    <ToastContainer
  position="top-right"
  autoClose={2000}
  theme="colored"
/>
  </CartProvider>
);