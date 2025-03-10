// Generate QR Code
const qrCodeElement = document.getElementById("qr-code");
const qrCodeData =
  "BOE No.: 40325141031/00\nStatus: Assessed\nAmount: 3,013.56 GHS"; // Customize this data
new QRCode(qrCodeElement, {
  text: qrCodeData,
  width: 128,
  height: 128,
});

// Declaration Tracking Button Functionality
function trackDeclaration() {
  alert("Redirecting to declaration tracking...");
  // Add logic to redirect or fetch tracking information
}
