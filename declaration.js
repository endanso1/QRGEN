function generateQRCode() {
  let boeNumber = document.getElementById("boeInput").value.trim();
  if (boeNumber === "") {
    alert("Please enter a BOE number!");
    return;
  }

  // Clear previous QR code
  const qrcodeContainer = document.getElementById("qrcode");
  qrcodeContainer.innerHTML = "";

  // Generate the URL
  let boeUrl = `https://external-unipassghana.netlify.app/assessed.html?boe_no=${boeNumber}`;

  // Generate QR Code
  new QRCode(qrcodeContainer, {
    text: boeUrl,
    width: 90,
    height: 90,
    correctLevel: QRCode.CorrectLevel.H,
  });

  // Convert to image after rendering
  setTimeout(() => {
    const canvas = qrcodeContainer.querySelector("canvas");

    if (canvas) {
      const img = document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      img.alt = "QR Code";
      img.style.width = "80px";
      img.style.height = "80px";

      qrcodeContainer.innerHTML = "";
      qrcodeContainer.appendChild(img);
    }
  }, 300);
}

// Reset button
function resetQRCode() {
  document.getElementById("boeInput").value = "";
  document.getElementById("qrcode").innerHTML = "";
}
