var hotTable1 = [];
var hotTable2 = [];
var hotTable3 = [];
var hotTable4 = [];
var hotTable5 = [];
var waitlist = []

class Reservation {
    constructor (name, phone, email, id) {
        this.name = name,
        this.phone = phone,
        this.email = email,
        this.id = id
    }
    getTable() {
        console.log("you get a table")
    }
}

app.post("/api/reso", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newReservation = req.body;
    console.log(newReservation);
    // We then add the json the user sent to the character array
    characters.push(newReservation);
    // We then display the JSON to the users
    res.json(newReservation);
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
    return res.json(characters);
});

app.get("/api/reserved", function(req, res) {
    return res.json(characters);
});

//POSTING STUFFS
    var tablesFull = false;
    app.get("/api/reserved", function(req, res) {
        if(res.tables.length > 5){
            tablesFull = true;
        }else{
            tablesFull = false;
        }
    });
    app.post("/api/waitlist", function(req, res) {
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newReservation = req.body;
        console.log(newReservation);
        if(tablesFull){
            // We then add the json the user sent to the character array
            waitlist.push(newReservation);
        }else{
            tables.push(newReservation);
        }
    });
//---------------------------------------------------

//tables.html script
$("#search-btn").on("click", function() {
    var searchedCharacter = $("#character-search").val().trim();

    // Using a RegEx Pattern to remove spaces from searchedCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();

    $.get("/api/reserved", function(data) {
      console.log(data);
      if (data) {
        $("#tableRes").text(data.json(tables));
      }
      else {
        $("#tableRes").text("There are no reservations right now!");
      }
    });
  });

