// Basic starter script
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded and ready!");
  });
  
// Get current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get last modified date
document.getElementById("lastModified").textContent = "Last Updated: " + document.lastModified;
