document.addEventListener("DOMContentLoaded", () => {
    const products = [
      { id: "p001", name: "Wireless Headphones" },
      { id: "p002", name: "Smart Watch" },
      { id: "p003", name: "Bluetooth Speaker" },
      { id: "p004", name: "4K Monitor" },
      { id: "p005", name: "Gaming Mouse" }
    ];
  
    const productSelect = document.getElementById("product");
  
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  });
  

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];
