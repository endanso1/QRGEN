// Sample BOE data

const boeData = {
  40325136561: {
    billNo: "AFO1-G-40325136561-01",
    boe: "40325136561",
    tin: "U2503070293",
    payerName: "GEORGE APPIAH",
    amount: "1,040.43 GHS",
    pdfDate: "06/03/2025 16:05:01",
  },
  30325133159: {
    billNo: "AFO1-G-40325133159-01",
    boe: "30325133159",
    tin: "U1234567890",
    payerName: "NANA YAW DANSO",
    amount: "610.11 GHS",
    pdfDate: "04/03/2025 17:34:00",
  },
  40325133170: {
    billNo: "AFO1-G-40325133170-01",
    boe: "40325133170",
    tin: "U1234567890",
    payerName: "FATAO ADBULAI",
    amount: "60,910.11 GHS",
    pdfDate: "01/03/2025 17:34:00",
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
