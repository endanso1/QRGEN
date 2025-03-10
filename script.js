// Function to get BOE number from URL
function getBOENumber() {
  const params = new URLSearchParams(window.location.search);
  return params.get("boe_no");
}

// Get the BOE number from the URL
const boeNo = getBOENumber();

if (boeNo) {
  // Redirect to the official BOE details page with the BOE number
  window.location.href = `https://external-unipassghana.netlify.app/boe-details?boe_no=${boeNo}`;
} else {
  document.body.innerHTML = `<h2>BOE Not Found</h2><p>Invalid BOE Number</p>`;
}
