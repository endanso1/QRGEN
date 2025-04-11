// Step 1: Assessed BOE Data
const assessedData = {
    40325141031: {
      boe_no: "40325141031",
      status: "Assessed",
      pdf_date: "07/03/2025 17:55:31",
      amount: "3,013.56 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking",
      
    },
    40425194368: {
      boe_no: "40425194368",
      status: "Assessed",
      pdf_date: "04/04/2025 17:30:23",
      amount: "1,411.52 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425194359: {
      boe_no: "40425194359",
      status: "Assessed",
      pdf_date: "04/04/2025 16:35:12",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425209752: {
      boe_no: "40425209752",
      status: "Assessed",
      pdf_date: "10/04/2025 16:27:12",
      amount: "808.78 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425209871: {
      boe_no: "40425209871",
      status: "Assessed",
      pdf_date: "10/04/2025 16:12:27",
      amount: "821.56 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425210423: {
      boe_no: "40425210423",
      status: "Assessed",
      pdf_date: "11/04/2025 16:01",
      amount: "3,938.15 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425210430: {
      boe_no: "40425210430",
      status: "Assessed",
      pdf_date: "11/04/2025 16:09",
      amount: "3,877.92 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425210446: {
      boe_no: "40425210446",
      status: "Assessed",
      pdf_date: "11/04/2025 16:18",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425210451: {
      boe_no: "40425210451",
      status: "Assessed",
      pdf_date: "11/04/2025 16:22",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425210465: {
      boe_no: "40425210465",
      status: "Assessed",
      pdf_date: "11/04/2025 16:29",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425210474: {
      boe_no: "40425210474",
      status: "Assessed",
      pdf_date: "11/04/2025 16:31",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425210419: {
      boe_no: "40425210419",
      status: "Assessed",
      pdf_date: "11/04/2025 15:36",
      amount: "1,411.52 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
  };
  
  // Step 2: Get Query Param
  function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
  }
  
  // Step 3: Display BOE Info
  function displayAssessedDetails() {
    const boeNumber = getQueryParam("boe_no");
    if (!boeNumber) {
      // alert("No BOE number provided!");
      return;
    }
  
    const details = assessedData[boeNumber];
    if (details) {
      document.getElementById("boe_no").textContent = `${details.boe_no}`;
      document.getElementById("status").textContent = details.status;
      document.getElementById("pdf_date").textContent = details.pdf_date;
      document.getElementById("amount").textContent = details.amount;
      document.getElementById("watermark").textContent = details.watermark;
      document.getElementById("tracking").textContent = details.tracking;
    } 
  }
  
  // Step 4: Call on Page Load
  displayAssessedDetails();
  