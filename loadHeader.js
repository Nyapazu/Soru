document.addEventListener("DOMContentLoaded", () => {
  const headerElement = document.querySelector("header");

  if (!headerElement) {
    console.error("Error: No <header> element found in the document.");
    return;
  }

  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to load header: ${response.status} ${response.statusText}`);
      }
      return response.text();
    })
    .then(data => {
      headerElement.innerHTML = data;
      console.log("Header loaded successfully.");
    })
    .catch(error => {
      console.error("Error loading header:", error);
    });
});