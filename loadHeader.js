// Function to load the header dynamically
function loadHeader() {
    fetch('header.html') // Fetch the header.html file
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load header');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data; // Insert the header content
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });
}

// Call the function to load the header
loadHeader();