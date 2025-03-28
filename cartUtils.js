function searchProducts() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const productItems = document.querySelectorAll(".product-item");
  
    productItems.forEach((item) => {
      const productName = item.querySelector("h3").textContent.toLowerCase();
      if (productName.includes(searchInput)) {
        item.style.display = "block"; // Show matching products
      } else {
        item.style.display = "none"; // Hide non-matching products
      }
    });
  }

  async function searchProducts() {
    const searchInput = document.getElementById("search-bar").value.toLowerCase();
    const productGrid = document.querySelector(".product-grid");
  
    // Fetch product data from the JSON file
    const response = await fetch("products.json");
    const products = await response.json();
  
    // Clear the current product grid
    productGrid.innerHTML = "";
  
    // Filter and display matching products
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchInput)
    );
  
    if (filteredProducts.length > 0) {
      filteredProducts.forEach(product => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <h3>${product.name}</h3>
          <p>${product.price}</p>
          <a href="${product.link}" class="product-link">View Product</a>
        `;
        productGrid.appendChild(productItem);
      });
    } else {
      // Display "No results found" message
      const noResultsMessage = document.createElement("p");
      noResultsMessage.id = "no-results-message";
      noResultsMessage.textContent = "No products found.";
      noResultsMessage.style.textAlign = "center";
      noResultsMessage.style.marginTop = "20px";
      productGrid.appendChild(noResultsMessage);
    }
  }