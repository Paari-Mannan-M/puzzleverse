// Select the theme button
const themeButton = document.getElementById("theme-toggle");

// Load saved theme when the website opens
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeButton.textContent = "☀️";
}
else {
    themeButton.textContent = "🌙";
}

// Theme toggle functionality
themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    // Check the current theme
    if (document.body.classList.contains("light-theme")) {

        themeButton.textContent = "☀️";

        // Save light theme
        localStorage.setItem("theme", "light");

    }
    else {

        themeButton.textContent = "🌙";

        // Save dark theme
        localStorage.setItem("theme", "dark");

    }

});

// ===================================
// GAME SEARCH AND CATEGORY FILTERING
// ===================================

// Select HTML elements
const searchInput = document.getElementById("game-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const gameCards = document.querySelectorAll(".game-card");
const noResults = document.getElementById("no-results");

// Store the currently selected category
let selectedCategory = "all";

// Function to filter games
function filterGames() {

    // Get search text
    const searchText = searchInput.value.toLowerCase();

    // Track visible games
    let visibleGames = 0;

    // Check every game card
    gameCards.forEach(function(card) {

        const gameName = card.querySelector("h3").textContent.toLowerCase();
        const gameDescription = card.querySelector("p").textContent.toLowerCase();
        const gameCategory = card.dataset.category;

        // Check search match
        const matchesSearch =
            gameName.includes(searchText) ||
            gameDescription.includes(searchText);

        // Check category match
        const matchesCategory =
            selectedCategory === "all" ||
            gameCategory === selectedCategory;

        // Display or hide the card
        if (matchesSearch && matchesCategory) {

            card.style.display = "block";
            visibleGames++;

        } else {

            card.style.display = "none";

        }

    });

    // Show message if no games are found
    noResults.hidden = visibleGames !== 0;

}

// Search while typing
searchInput.addEventListener("input", filterGames);


// Category button functionality
filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Remove active class from all buttons
        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        // Activate clicked button
        button.classList.add("active");

        // Update selected category
        selectedCategory = button.dataset.category;

        // Apply filters
        filterGames();

    });

});
