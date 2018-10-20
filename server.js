// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

//TABLES RESERVATIONS ARRAY
var tables = [
    {
        id: 1234,
        name: "bobby",
        email: "bobby@bobby.com",
        phone: "9104325193"
    },
];

//WAITLIST ARRAY
var waitlist = [
    {
        id: 5678,
        name: "Dad",
        email: "dobby@bobby.com",
        phone: "9394848582"
    },
];
  