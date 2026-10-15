import { useState } from "react";
import "./product.css";

const products = [
  {
    id: 1,
    name: "Ember Lounge Chair",
    category: "SEATING",
    price: 2490,
    image: "/Nike shoe black futuristic.jpeg",
    badge: "BESTSELLER",
  },
  {
    id: 2,
    name: "Ashwood Sofa",
    category: "SEATING",
    price: 4190,
    image: "/Nike shoe black futuristic.jpeg",
    badge: "NEW",
  },
  {
    id: 3,
    name: "Charcoal Dining Set",
    category: "DINING",
    price: 5830,
    image: "/Nike shoe black futuristic.jpeg",
  },
  {
    id: 4,
    name: "Hearthside Armchair",
    category: "SEATING",
    price: 1890,
    image: "/Nike shoe black futuristic.jpeg",
    badge: "LIMITED",
  },
  {
    id: 5,
    name: "Timber Dining Table",
    category: "DINING",
    price: 3600,
    image: "/Nike shoe black futuristic.jpeg",
  },
  {
    id: 6,
    name: "Dusk Console",
    category: "STORAGE",
    price: 1240,
    image: "/Nike shoe black futuristic.jpeg",
    badge: "NEW",
  },
  {
    id: 7,
    name: "Solstice Sideboard",
    category: "STORAGE",
    price: 2850,
    image: "/Nike shoe black futuristic.jpeg",
  },
  {
    id: 8,
    name: "Oak Dining Chair",
    category: "DINING",
    price: 890,
    image: "/Nike shoe black futuristic.jpeg",
  },
  {
    id: 9,
    name: "Noir Cabinet",
    category: "STORAGE",
    price: 3150,
    image: "/Nike shoe black futuristic.jpeg",
  },
];

const categories = [
  "All",
  "Seating",
  "Dining",
  "Storage",
];

function formatPrice(price) {
  return `$${price.toLocaleString("en-US")}`;
}


function Filters({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
  sort,
  setSort,
}) {
  return (
    <aside className="filters">

      {/* Category */}
      <div className="filter-section">

        <h3>CATEGORY</h3>

        <div className="category-list">

          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "filter-option active"
                  : "filter-option"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}

        </div>

      </div>


      {/* Price */}
      <div className="filter-section price-section">

        <h3>MAX PRICE</h3>

        <div className="price-slider-wrapper">

          <input
            type="range"
            min="500"
            max="8000"
            step="100"
            value={maxPrice}
            onChange={(event) =>
              setMaxPrice(Number(event.target.value))
            }
          />

        </div>

        <div className="price-range">

          <span>$500</span>

          <strong>
            {formatPrice(maxPrice)}
          </strong>

        </div>

      </div>


      {/* Sort */}
      <div className="filter-section sort-section">

        <h3>SORT</h3>

        <button
          className={
            sort === "featured"
              ? "filter-option active"
              : "filter-option"
          }
          onClick={() => setSort("featured")}
        >
          Featured
        </button>

        <button
          className={
            sort === "low"
              ? "filter-option active"
              : "filter-option"
          }
          onClick={() => setSort("low")}
        >
          Price: Low to High
        </button>

        <button
          className={
            sort === "high"
              ? "filter-option active"
              : "filter-option"
          }
          onClick={() => setSort("high")}
        >
          Price: High to Low
        </button>

        <button
          className={
            sort === "newest"
              ? "filter-option active"
              : "filter-option"
          }
          onClick={() => setSort("newest")}
        >
          Newest
        </button>

      </div>


      {/* View */}
      <div className="filter-section view-section">

        {/* <h3>VIEW</h3> */}

        <div className="view-buttons">
{/* 
          <button className="view-button">
            <span className="grid-icon small">
              <i />
              <i />
              <i />
              <i />
            </span>
          </button> */}

          {/* <button className="view-button active">
            <span className="grid-icon large">
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </button> */}

        </div>

      </div>

    </aside>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">

      <a
        href="#"
        className="product-image-wrapper"
      >

        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />

        {product.badge && (
          <span
            className={`product-badge ${
              product.badge === "BESTSELLER"
                ? "bestseller"
                : ""
            }`}
          >
            {product.badge}
          </span>
        )}

      </a>

      <div className="product-meta">

        <span className="product-category">
          {product.category}
        </span>

        <div className="product-name-price">

          <h2>
            {product.name}
          </h2>

          <span className="product-price">
            {formatPrice(product.price)}
          </span>

        </div>

      </div>

    </article>
  );
}

export default function Product() {
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(8000);
  const [sort, setSort] = useState("featured");

  let filteredProducts = products.filter(
    (product) => {
      const categoryMatch =
        category === "All" ||
        product.category.toLowerCase() ===
          category.toLowerCase();

      const priceMatch =
        product.price <= maxPrice;

      return categoryMatch && priceMatch;
    }
  );

  if (sort === "low") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === "high") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.price - a.price
    );
  }

  return (
    <div className="collection-page">

      {/* <Header /> */}

      {/* Hero */}
      <section className="collection-hero">

        <div className="collection-container">

          <span className="studio-label">
            MIGHTEX STUDIO
          </span>

          <h1>
            The Full Collection
          </h1>

          <p>
            {filteredProducts.length} pieces available
          </p>

        </div>

      </section>


      {/* Products */}
      <main className="collection-content">

        <div className="collection-container">

          <div className="collection-layout">

            <Filters
              category={category}
              setCategory={setCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
              sort={sort}
              setSort={setSort}
            />

            <section className="product-grid">

              {filteredProducts.map(
                (product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                )
              )}

            </section>

          </div>

        </div>

      </main>

    </div>
  )
}
