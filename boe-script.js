// Sample BOE data

const boeData = {
  40325155869: {
    billNo: "AFO1-G-40325155869-01",
    boe: "40325155869",
    tin: "U2503140255",
    payerName: "ALICE OWUSU",
    amount: "3,447.09 GHS",
    pdfDate: "14/03/2025 16:53",
  },
  40325155874: {
    billNo: "AFO1-G-40325155874-01",
    boe: "40325155874",
    tin: "U2503140258",
    payerName: "ALICE OWUSU",
    amount: "3,447.09 GHS",
    pdfDate: "14/03/2025 17:06",
  },
  40325155893: {
    billNo: "AFO1-G-40325155893-01",
    boe: "40325155893",
    tin: "U2503140271",
    payerName: "ALICE OWUSU",
    amount: "3,938.15 GHS",
    pdfDate: "21/03/2025 16:03",
  },
  40325169231: {
    billNo: "AFO1-G-40325169231-01",
    boe: "40325169231",
    tin: "U2503210253",
    payerName: "GRACE OPOKU",
    amount: "3,447.09 GHS",
    pdfDate: "14/03/2025 17:37",
  },
  40325169246: {
    billNo: "AFO1-G-40325169246-01",
    boe: "40325169246",
    tin: "U2503210259",
    payerName: "GRACE OPOKU",
    amount: "3,876.92 GHS",
    pdfDate: "21/03/2025 16:10",
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
    // alert("Invalid BOE Number! No record found.");
    // return;
    ("");
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
