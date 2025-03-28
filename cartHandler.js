console.log('cartHandler.js loaded');

// Initialize the cart (load from localStorage if available)
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add a product to the cart
function addToCart(product) {
  console.log('Adding product to cart:', product);

  // Check if the product with the same ID and size already exists in the cart
  const existingProduct = cart.find(item => item.id === product.id && item.size === product.size);
  if (existingProduct) {
    existingProduct.quantity += 1; // Increment quantity if it exists
  } else {
    cart.push({ ...product, quantity: 1 }); // Add new product with size
  }
  saveCart();

  // Show the notification
  showNotification(`${product.name} (Size: ${product.size}) has been added to your cart!`);
}

// Function to remove a product from the cart
function removeFromCart(productId, productSize) {
  console.log(`Removing product with ID: ${productId} and Size: ${productSize}`);
  
  // Filter out the product with the matching ID and size
  cart = cart.filter(item => !(item.id === productId && item.size === productSize));
  saveCart();
  renderCart(); // Update the cart display
}

// Function to save the cart to localStorage
function saveCart() {
  console.log('Saving cart to localStorage:', cart);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to render the cart in the checkout page
function renderCart() {
  console.log('Rendering cart...');
  
  const cartContainer = document.getElementById('cart-items');
  const totalContainer = document.getElementById('cart-total');

  if (!cartContainer || !totalContainer) {
    console.error('Cart container or total container not found in the DOM.');
    return;
  }

  cartContainer.innerHTML = ''; // Clear the cart display

  let total = 0;

  cart.forEach(item => {
    const cartItem = document.createElement('div');
    cartItem.classList.add('order-item');
    cartItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="item-details">
        <p>${item.name}</p>
        <p>Size: ${item.size}</p>
        <p>Quantity: ${item.quantity}</p>
      </div>
      <p class="item-price">$${item.price * item.quantity}</p>
      <button class="remove-button" onclick="removeFromCart(${item.id}, '${item.size}')">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
    total += item.price * item.quantity;
  });

  totalContainer.textContent = `Total: $${total}`;
}

// Render the cart on page load (only for checkout.html)
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('cart-items')) {
    renderCart();
  }
});

// Function to show a notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  if (!notification) {
    console.error('Notification element not found in the DOM.');
    return;
  }

  // Set the notification message
  notification.textContent = message;

  // Show the notification
  notification.classList.remove('hidden');
  notification.classList.add('show');

  // Hide the notification after 3 seconds
  setTimeout(() => {
    notification.classList.remove('show');
    notification.classList.add('hidden');
  }, 3000);
}