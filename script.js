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
