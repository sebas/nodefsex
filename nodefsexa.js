var fs = require("fs");

var filePath = "/tmp/test_sync.txt";
var fileData = "Testing asynchronous file write.\n";

fs.writeFile(filePath, fileData, function(err) {
  if (err) {
    throw err;
  }
  console.log("Successfully wrote to", filePath);
});