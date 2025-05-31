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

const temples = [
    {
      name: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      name: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      name: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      name: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      name: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      name: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      name: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "April 6, 1893",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple.jpg"
    },
    {
        name: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "October 28, 1980",
        area: 9990,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-temple.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "March 10, 2019",
        area: 40800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-temple.jpg"
    },
  ];

  function getYear(temple) {
    const match = temple.dedicated.match(/\d{4}/);
    return match ? parseInt(match[0]) : 0;
}

// === Generate Temple Cards ===
function displayTemples(filteredTemples) {
    const container = document.getElementById("temple-container");
    if (!container) return;

    container.innerHTML = "";

    filteredTemples.forEach(temple => {
        const card = document.createElement("div");
        card.classList.add("temple-card");

        card.innerHTML = `
            <h2>${temple.name}</h2>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${temple.name}" loading="lazy">
        `;

        container.appendChild(card);
    });
}

// === Filter Handler ===
function filterTemples(category) {
    let filteredTemples = temples;

    switch (category) {
        case "old":
            filteredTemples = temples.filter(t => getYear(t) < 1900);
            break;
        case "new":
            filteredTemples = temples.filter(t => getYear(t) >= 2000);
            break;
        case "large":
            filteredTemples = temples.filter(t => t.area > 90000);
            break;
        case "small":
            filteredTemples = temples.filter(t => t.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }

    displayTemples(filteredTemples);
}

// === Initial Load ===
document.addEventListener("DOMContentLoaded", () => {
    displayTemples(temples);
    // Expose filterTemples globally for buttons
    window.filterTemples = filterTemples;
});
