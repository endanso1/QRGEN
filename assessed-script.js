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
    40425213688: {
      boe_no: "40425213688",
      status: "Assessed",
      pdf_date: "12/04/2025 18:13",
      amount: "1,020.66 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425213802: {
      boe_no: "40425213802",
      status: "Assessed",
      pdf_date: "12/04/2025 17:27",
      amount: "485.35 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425219087: {
      boe_no: "40425219087",
      status: "Assessed",
      pdf_date: "15/04/25  16:21",
      amount: "612.11 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425217209: {
      boe_no: "40425217209",
      status: "Assessed",
      pdf_date: "16/04/25 15:36",
      amount: "1,679.52 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425231695: {
      boe_no: "40425231695",
      status: "Assessed",
      pdf_date: "22/04/25 15:57:12",
      amount: "610.11 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425233827: {
      boe_no: "40425233827",
      status: "Assessed",
      pdf_date: "24/04/25 15:28:32",
      amount: "922.14 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425233816: {
      boe_no: "40425233816",
      status: "Assessed",
      pdf_date: "24/04/25 15:22:12",
      amount: "780.23 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425236429: {
      boe_no: "40425236429",
      status: "Assessed",
      pdf_date: "25/04/2025 16:01:02",
      amount: "3,938.15 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425236435: {
      boe_no: "40425236435",
      status: "Assessed",
      pdf_date: "25/04/2025 16:09:10",
      amount: "3,876.92 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425236478: {
      boe_no: "40425236478",
      status: "Assessed",
      pdf_date: "25/04/2025 16:18:12",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425236491: {
      boe_no: "40425236491",
      status: "Assessed",
      pdf_date: "25/04/2025 16:23:25",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425236506: {
      boe_no: "40425236506",
      status: "Assessed",
      pdf_date: "25/04/2025 16:30:12",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425236552: {
      boe_no: "40425236552",
      status: "Assessed",
      pdf_date: "25/04/2025 16:59:43",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425236489: {
      boe_no: "40425236489",
      status: "Assessed",
      pdf_date: "25/04/2025 17:11:20",
      amount: "2,070.43 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425236453: {
      boe_no: "40425236453",
      status: "Assessed",
      pdf_date: "25/04/2025 17:53:35",
      amount: "922.90 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425247619: {
      boe_no: "40425247619",
      status: "Assessed",
      pdf_date: "29/04/2025 16:13:32",
      amount: "1,070.90 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425248613: {
      boe_no: "40425248613",
      status: "Assessed",
      pdf_date: "30/04/2025 15:02:23",
      amount: "1,532.89 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425248658: {
      boe_no: "40425263738",
      status: "Assessed",
      pdf_date: "07/05/2025 15:14:38",
      amount: "2,401.70 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425252880: {
      boe_no: "40425252880",
      status: "Assessed",
      pdf_date: "01/05/2025 14:13:12",
      amount: "1,243.90 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40525251034: {
      boe_no: "40425263721",
      status: "Assessed",
      pdf_date: "07/05/2025 15:39:10",
      amount: "1,560.52 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40525251048: {
      boe_no: "40525251048",
      status: "Assessed",
      pdf_date: "02/05/2025 16:09:18",
      amount: "3,876.92 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40525251093: {
      boe_no: "40525251093",
      status: "Assessed",
      pdf_date: "02/05/2025 16:21:47",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40525251079: {
      boe_no: "40525251079",
      status: "Assessed",
      pdf_date: "02/05/2025 16:18:07",
      amount: "3,447.09 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425262913: {
      boe_no: "40425262913",
      status: "Assessed",
      pdf_date: "06/05/2025 15:42:09",
      amount: "816.78 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425262792: {
      boe_no: "40425262792",
      status: "Assessed",
      pdf_date: "06/05/2025 17:13:39",
      amount: "1,201.67 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40425262928: {
      boe_no: "40425262928",
      status: "Assessed",
      pdf_date: "06/05/2025 18:00:12",
      amount: "904.23 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40525263781: {
      boe_no: "40525263781",
      status: "Assessed",
      pdf_date: "07/05/2025 19:27:49",
      amount: "485.35 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40525263863: {
      boe_no: "40525263863",
      status: "Assessed",
      pdf_date: "08/05/25 15:13:14",
      amount: "1,090.12 GHS",
      watermark: "This is a Customs Electronically Validated Entry Customs Assessment accepted by Declarant",
      tracking:"Declaration Tracking", 
    },
    40525263836: {
      boe_no: "40525263836",
      status: "Assessed",
      pdf_date: "08/05/25 15:41:10",
      amount: "731.26 GHS",
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
  