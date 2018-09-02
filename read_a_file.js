var fs = require("fs");

// Synchronous read
fs.readFileSync(process.argv[2], function (err, data) {
    if (err) {
       return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});