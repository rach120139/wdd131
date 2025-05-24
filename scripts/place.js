// Function to get current year and last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
    } else {
        return "N/A";
    }
}

// Static temperature and wind speed values
const temp = parseFloat(document.getElementById("temperature").textContent);
const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);

// Update wind chill value
document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);

