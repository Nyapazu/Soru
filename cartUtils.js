function searchProducts() {
  const searchInput = document.getElementById("search-bar").value.toLowerCase();
  const suggestionsContainer = document.getElementById("search-suggestions");

  // Clear previous suggestions
  suggestionsContainer.innerHTML = "";

  if (searchInput.trim() === "") {
    suggestionsContainer.style.display = "none"; // Hide suggestions if input is empty
    return;
  }

  let hasResults = false;

  products.forEach((product) => {
    if (product.name.toLowerCase().includes(searchInput)) {
      hasResults = true;

      // Create a suggestion item
      const suggestionItem = document.createElement("div");
      suggestionItem.classList.add("suggestion-item");
      suggestionItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="suggestion-image">
        <a href="${product.link}" class="suggestion-link">${product.name}</a>
        <p class="suggestion-price">${product.price}</p>
      `;
      suggestionsContainer.appendChild(suggestionItem);
    }
  });

  // Show or hide the suggestions container based on results
  if (hasResults) {
    suggestionsContainer.style.display = "block";
  } else {
    suggestionsContainer.style.display = "none";
  }
}

// Attach the searchProducts function to the search bar's input event
document.getElementById("search-bar").addEventListener("input", searchProducts);

const products = [
  {
    name: "Nike Dunk Low Panda",
    price: "$120",
    image: "Nike Dunk Low Panda Sideways.webp",
    link: "Nike Dunk Low Pandas.html",
  },
  {
    name: "Nike Air Force 1",
    price: "$115",
    image: "Nike Air Forces 1 Sideways.webp",
    link: "Nike Air Forces 1.html",
  },
  {
    name: "Nike Air Max 90",
    price: "$150",
    image: "Nike Air Max 90 Sideways.jpg",
    link: "Nike Air Max 90.html",
  },
  {
    name: "Nike Dunks Redwood ",
    price: "$120",
    image: "Nike Dunk Redwood Sideways.webp",
    link: "Nike Dunks Redwood.html",
  },
  {
    name: "Nike Dunks Retro",
    price: "$120",
    image: "Grey Dunks Sideways.webp",
    link: "Nike Dunks Grey.html",
  },
  {
    name: "Nike Air Forces 1 Low 'Light Bone Sail'",
    price: "$125",
    image: "Nike AF 1 Low Light Bone Sail Sideways.webp",
    link: "Nike AF 1 Low Light.html",
  },
];