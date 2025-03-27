document.addEventListener("DOMContentLoaded", () => {
    // Fetch the header.html file
    fetch("header.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load header");
        }
        return response.text();
      })
      .then(data => {
        // Insert the header content into the <header> element
        document.querySelector("header").outerHTML = data;
      })
      .catch(error => {
        console.error("Error loading header:", error);
      });
  });