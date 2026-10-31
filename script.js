
// ===================================
// THEME MANAGEMENT
// ===================================

const themeButton = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");
}

if (themeButton) {

    themeButton.textContent =
        document.body.classList.contains("light-theme") ? "☀️" : "🌙";

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-theme");

        if (document.body.classList.contains("light-theme")) {
            themeButton.textContent = "☀️";
            localStorage.setItem("theme", "light");
        }
        else {
            themeButton.textContent = "🌙";
            localStorage.setItem("theme", "dark");
        }

    });

}


// ===================================
// GAME SEARCH AND CATEGORY FILTERING
// ===================================

const searchInput = document.getElementById("game-search");
const filterButtons = document.querySelectorAll(".filter-btn");
const gameCards = document.querySelectorAll(".game-card");
const noResults = document.getElementById("no-results");

if (searchInput) {

    let selectedCategory = "all";

    function filterGames() {

        const searchText = searchInput.value.toLowerCase();

        let visibleGames = 0;

        gameCards.forEach(function(card) {

            const gameName =
                card.querySelector("h3").textContent.toLowerCase();

            const gameDescription =
                card.querySelector("p").textContent.toLowerCase();

            const gameCategory = card.dataset.category;

            const matchesSearch =
                gameName.includes(searchText) ||
                gameDescription.includes(searchText);

            const matchesCategory =
                selectedCategory === "all" ||
                gameCategory === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = "block";
                visibleGames++;
            }
            else {
                card.style.display = "none";
            }

        });

        noResults.hidden = visibleGames !== 0;

    }

    searchInput.addEventListener("input", filterGames);

    filterButtons.forEach(function(button) {

        button.addEventListener("click", function() {

            filterButtons.forEach(function(btn) {
                btn.classList.remove("active");
            });

            button.classList.add("active");

            selectedCategory = button.dataset.category;

            filterGames();

        });

    });

}
