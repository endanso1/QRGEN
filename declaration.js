function generateQRCode() {
    let boeNumber = document.getElementById("boeInput").value.trim();
    if (boeNumber === "") {
      alert("Please enter a BOE number!");
      return;
    }
  
    // Clear previous QR code
    const qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
  
    // LOCAL TESTING: Change 'boe.html' to your local HTML output page
    let boeUrl = `https://external-unipassghana.netlify.app/assessed.html?boe_no=${boeNumber}`;
  
    // Generate QR Code
    const tempDiv = document.createElement("div");
  qrcodeContainer.appendChild(tempDiv);

  const qrCode = new QRCode(tempDiv, {
    text: boeUrl,
    width: 80,
    height: 80,
  });

  // // Wait a bit to let QR code render
  // setTimeout(() => {
  //   const imgTag = tempDiv.querySelector("img");

  //   if (imgTag) {
  //     // Create download button
  //     const downloadLink = document.createElement("a");
  //     downloadLink.href = imgTag.src;
  //     downloadLink.download = `boe_qr_${boeNumber}.png`;
  //     downloadLink.textContent = "Download";
  //     downloadLink.className = "btn btn-sm btn-success mt-5 mx-3";

  //     qrcodeContainer.appendChild(downloadLink);
  //   } else {
  //     alert("QR code could not be generated. Please try again.");
  //   }
  // }, 500); // Adjust timeout if necessary
  setTimeout(() => {
    const imgTag = tempDiv.querySelector("img");
  
    if (imgTag) {
      // Convert base64 to Blob
      fetch(imgTag.src)
        .then(res => res.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const downloadLink = document.createElement("a");
  
          downloadLink.href = url;
          downloadLink.download = `boe_qr_${boeNumber}.png`;
          downloadLink.textContent = "Download";
          downloadLink.className = "btn btn-sm btn-success mt-5 mx-3";
  
          qrcodeContainer.appendChild(downloadLink);
        })
        .catch(err => {
          console.error("QR download error:", err);
          alert("Something went wrong while preparing the download.");
        });
    } else {
      alert("QR code could not be generated. Please try again.");
    }
  }, 500);
  
  }
  
  //Reset button
  function resetQRCode() {
    document.getElementById("boeInput").value = ""; // Clear input field
    document.getElementById("qrcode").innerHTML = ""; // Clear QR code
  }