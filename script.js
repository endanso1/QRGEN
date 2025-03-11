function generateQRCode() {
  let boeNumber = document.getElementById("boeInput").value.trim();
  if (boeNumber === "") {
    alert("Please enter a BOE number!");
    return;
  }

  // Clear previous QR code
  document.getElementById("qrcode").innerHTML = "";

  // Generate the URL for BOE details using the new link
  let boeUrl = `https://external-unipassghana.netlify.app/?boe_no=${boeNumber}`;

  // Generate QR Code
  new QRCode(document.getElementById("qrcode"), {
    text: boeUrl,
    width: 150,
    height: 150,
  });
}
