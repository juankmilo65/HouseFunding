class ReadPDF {
  constructor(url, object64) {
    this.url = url;
    this.object64 = object64;
  }
  OpenPdf() {
    var fs = require("fs");
    var path = require("path");

    var fd = path.join(__dirname, "/public/", "example2.pdf");
    var base64Data = this.object64.replace(
      /^data:application\/pdf;base64,/,
      ""
    );
    fs.writeFile(fd, base64Data, "base64", function(err) {
      if (err) {
        console.log(fd, "\n\n\n\n\n Can not write to above file:\n\n", err);
      } else {
        var PDFExtract = require("pdf.js-extract").PDFExtract;
        var pdfExtract = new PDFExtract();
        pdfExtract.extract(fd, {} /* options*/, function(err, data) {
          if (err) return console.log(err);
          fs.writeFileSync(
            "./example-output.json",
            JSON.stringify(data, null, "\t")
          );
          var lines = PDFExtract.utils.pageToLines(data.pages[0], 2);
          var rows = PDFExtract.utils.extractTextRows(lines);
          var text = rows
            .map(function(row) {
              return row.join("");
            })
            .join("\n");
          fs.writeFileSync("./example-output.txt", text);
          //console.log(JSON.stringify(data, null, "\t"));
          console.log(fd, " is Done");
        });
      }
    });
  }
}

module.exports = ReadPDF;
