import { useState, useEffect } from "react";
import products from "../assets/products.json";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  let sortedProducts = [...filteredProducts];

  if (sort === "low") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sort === "high") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="products-page">

      <div className="hero-banner">
        <h1>✨ Welcome to Lumina</h1>
        <p>
          Discover premium fashion, electronics &
          accessories curated for you.
        </p>
      </div>

      <h1 className="page-title">New Arrivals</h1>

      <p className="subtitle">
        Discover our latest collection of premium products.
      </p>

      <div className="top-controls">
        <div className="category-buttons">
          <button
            className={category === "All" ? "active-filter" : ""}
            onClick={() => setCategory("All")}
          >
            All Products
          </button>

          <button
            className={category === "Electronics" ? "active-filter" : ""}
            onClick={() => setCategory("Electronics")}
          >
            Electronics
          </button>

          <button
            className={category === "Clothing" ? "active-filter" : ""}
            onClick={() => setCategory("Clothing")}
          >
            Clothing
          </button>

          <button
            className={category === "Accessories" ? "active-filter" : ""}
            onClick={() => setCategory("Accessories")}
          >
            Accessories
          </button>

          <button
            className={category === "Footwear" ? "active-filter" : ""}
            onClick={() => setCategory("Footwear")}
          >
            Footwear
          </button>
        </div>

        <div className="search-sort-box">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort Price</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {loading ? (
          [...Array(8)].map((_, index) => (
            <div
              key={index}
              className="skeleton-card"
            ></div>
          ))
        ) : sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))
        ) : (
          <h2>No products found</h2>
        )}
      </div>
    </div>
  );
}

export default Products;