// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var input1 = d3.select("#datetime");
var input2 = d3.select("#city");
var resetbutton = d3.select("#reset-btn");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]
var populate = (dataInput) => {
    dataInput.forEach(ufo_sightings => {
        var row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column]))
    });
}
//Populate table
populate(data);
// Filter by attribute
button.on("click", () => {
    d3.event.preventDefault();
    var inputfecha = input1.property("value").trim();
    var inputCiudad = input2.property("value").toLowerCase().trim();
    // Filter by field matching input value
    var filterfecha = data.filter(data => data.datetime === inputfecha);
    console.log(filterfecha)
    var filterCiudad = data.filter(data => data.city === inputCiudad);
    console.log(filterCiudad)
    var filterData = data.filter(data => data.datetime === inputDate && data.city === inputCity);
    console.log(filterData)
    // Add filtered sighting to table
    tbody.html("");
    let response = {
        filterData,
        filterCiudad,
        filterfecha
    }
    if (response.filterData.length !== 0) {
        populate(filterData);
    } else if (response.filterData.length === 0 && ((response.filterCiudad.length !== 0 || response.filterfecha.length !== 0))) {
        populate(filterCity) || populate(filterDate);
    } else {
        tbody.append("tr").append("td").text("No results found!");
    }
})
resetbtn.on("click", () => {
    tbody.html("");
    populate(data)
    console.log("Table reset")
})