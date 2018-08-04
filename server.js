// Dependencies
// ===========================================================
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Listener
// ===========================================================
// app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//     console.log("http://localhost:" + PORT);
// });

app.get("/", function (req, res, next) {
    res.send("Hello there");
});

module.exports = app;