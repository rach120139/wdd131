 // Toggle Navigation Menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");

    // Change button symbol
    menuToggle.textContent = navMenu.classList.contains("show-menu") ? "✖" : "☰";
});

// Update Copyright Year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Update Last Modified Date
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
