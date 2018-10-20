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
  
app.get("/", function(req, res) {
// res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "home.html"));
});
    
app.get("/tables", function(req, res) {
// res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
// res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
});

app.get("/api/reserved", function(req, res) {
    return res.json(tables);
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
  
