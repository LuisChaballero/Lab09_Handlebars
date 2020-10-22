// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const { table } = require("console");
var path = require("path");

var tableData = require("../data/tableData");
var waitListData = require("../data/waitinglistData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/tables", function(req, res) {
    return res.render("tables",{tables: tableData , waitList: waitListData} );
    //res.sendFile(path.join(__dirname, "../public/tables.html"));
  });


  //  waitList: waitListData 

  app.get("/reserve", function(req, res) {
    
    return res.render("reserve");
    //res.sendFile(path.join(__dirname, "../public/reserve.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    return res.render("home");
    //res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
