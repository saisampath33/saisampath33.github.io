let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

// Display all products with Add button
const showProducts = () => {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>Product List</h2>";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.innerHTML = `
      <p><strong>${product.name}</strong> - $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    root.appendChild(productDiv);
  });
};

// Show Cart Items
const showCart = () => {
  const root = document.getElementById("root");
  root.innerHTML = "<h2>My Cart</h2>";
  let total = 0;
  products.forEach((product) => {
    const quantity = cart[product.id] || 0;
    if (quantity > 0) {
      const subtotal = quantity * product.price;
      total += subtotal;
      const itemDiv = document.createElement("div");
      itemDiv.innerHTML = `
        <p>
          ${product.name} - $${product.price} x ${quantity} = $${subtotal}
          <button onclick="increment(${product.id})">+</button>
          <button onclick="decrement(${product.id})">-</button>
        </p>
      `;
      root.appendChild(itemDiv);
    }
  });
  const totalDiv = document.createElement("h3");
  totalDiv.textContent = `Total: $${total}`;
  root.appendChild(totalDiv);
};

// Cart Functions
const addToCart = (id) => {
  cart = { ...cart, [id]: (cart[id] || 0) + 1 };
  showCart();
};

const increment = (id) => {
  cart = { ...cart, [id]: cart[id] + 1 };
  showCart();
};

const decrement = (id) => {
  if (cart[id] > 1) {
    cart = { ...cart, [id]: cart[id] - 1 };
  } else {
    delete cart[id]; // Remove item if quantity is 0
  }
  showCart();
};

// Navigation
document.addEventListener("DOMContentLoaded", () => {
  const navItems = document.querySelectorAll("ul li");
  navItems[0].addEventListener("click", showProducts); // Home
  navItems[1].addEventListener("click", showCart);     // Cart
  showProducts(); // default view
});
