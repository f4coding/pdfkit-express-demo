import PDFDocument from "pdfkit-table";

export function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument();
  doc.on("data", dataCallback);
  doc.on("end", endCallback);

  doc.fontSize(25).text("Some text with an embedded font!", 100, 100);

  doc.moveTo(0 , 20)
  .lineTo(100, 160)
  .quadraticCurveTo(130, 200, 150, 120)
  .bezierCurveTo(190, -40, 200, 200, 300, 150)
  .lineTo(400, 90)
  .stroke();

  const tableArray = {
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
        ["Switzerland", "12%", "+1.12%"],
        ["France", "67%", "-0.98%"],
        ["England", "33%", "+4.44%"],
    ],
  };
  doc.table( tableArray, { width: 500 }); // A4 595.28 x 841.89 (portrait) (about width sizes)

  doc.end();
}
