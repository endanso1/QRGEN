// Sample BOE data
const boeData = {
  40325141031: {
    billNo: "AFO1-G-40325136561-01",
    boe: "40325141031",
    tin: "U2503070293",
    payerName: "OPHELIA GYATEEN",
    amount: "3,013.56 GHS",
    pdfDate: "07/03/2025 17:55:31",
  },
  60325141031: {
    billNo: "AFO1-G-60325141031-02",
    boe: "60325141031",
    tin: "U1234567890",
    payerName: "JOHN DOE",
    amount: "2,500.00 GHS",
    pdfDate: "08/03/2025 14:20:00",
  },
};

// Function to get query parameter from URL
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Load BOE data based on URL parameter
function loadBOEData() {
  const boeNumber = getQueryParam("boe_no");

  // Convert boeNumber to a string for lookup
  if (!boeNumber || !boeData[String(boeNumber)]) {
    alert("Invalid BOE Number! No record found.");
    return;
  }

  // Update BOE details
  document.getElementById("bill-number").textContent =
    boeData[boeNumber].billNo;
  document.getElementById("boe-number").textContent = boeNumber;
  document.getElementById("tin").textContent = boeData[boeNumber].tin;
  document.getElementById("payer-name").textContent =
    boeData[boeNumber].payerName;
  document.getElementById("amount").textContent = boeData[boeNumber].amount;
  document.getElementById("pdf-date").textContent = boeData[boeNumber].pdfDate;
}

// Run function on page load
window.onload = loadBOEData;
