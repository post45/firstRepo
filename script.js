document
  .getElementById("moving-cost-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const fromZip = document.getElementById("from-zip").value;
    const toZip = document.getElementById("to-zip").value;
    const bedrooms = parseInt(document.getElementById("bedrooms").value);
    const packingServices = document.getElementById("packing-services").value;
    const moveDate = document.getElementById("move-date").value;

    // Calculate moving distance (dummy calculation)
    const movingDistance = Math.abs(parseInt(fromZip) - parseInt(toZip));

    // Calculate estimated cost range
    const minCost = calculateCost(bedrooms, packingServices, "min");
    const maxCost = calculateCost(bedrooms, packingServices, "max");

    // Display result
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
        <p><strong>Moving Distance:</strong> ${movingDistance} miles</p>
        <p><strong>Estimated Move Date:</strong> ${moveDate}</p>
        <p><strong>Estimated Cost Range:</strong> $${minCost} - $${maxCost}</p>
    `;
  });

// Dummy function to calculate moving cost range
function calculateCost(bedrooms, packingServices, type) {
  let baseCost;
  if (bedrooms === 1) {
    baseCost = 800; // Reduced from 1000
  } else if (bedrooms === 2) {
    baseCost = 1200; // Reduced from 1500
  } else if (bedrooms === 3) {
    baseCost = 1600; // Reduced from 2000
  } else if (bedrooms === 4) {
    baseCost = 2000; // Reduced from 2500
  } else {
    baseCost = 2400; // Reduced from 3000
  }

  if (packingServices === "partial") {
    baseCost += 400; // Reduced from 500
  } else if (packingServices === "full") {
    baseCost += 800; // Reduced from 1000
  }

  if (type === "min") {
    return Math.floor(baseCost);
  } else {
    // Assuming a 15% variation for the maximum cost
    return Math.floor(baseCost * 1.15);
  }
}
