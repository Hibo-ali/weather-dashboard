// Variable for Date
var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var year = date.getFullYear();
var today = month + "-" + day + "-" + year;

var savedButton = $(".saved-button");
var searchButton = $("#searchButton");
var searchInput = $("#searchInput");
var cityName = "";
var pastSearches = [];

function searchHistory() {
  var savedCities = $("#savedCities");
  var trEl = $("<tr>");
  var thEl = $("<th>");
  thEl.text(cityName).attr("scope", "row").addClass("saved-button");
  trEl.append(thEl);
  savedCities.append(trEl);
}