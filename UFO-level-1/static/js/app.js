// Assign the data from `data.js` to a descriptive variable
var sightings = data;

//show all data as a default
function addDataToTbody(nl, data) { // nl -> NodeList, data -> array with objects
    data.forEach((d, i) => {
      var tr = nl.insertRow(i);
      Object.keys(d).forEach((k, j) => { // Keys from object represent th.innerHTML
        var cell = tr.insertCell(j);
        cell.innerHTML = d[k]; // Assign object values to cells   
      });
      nl.appendChild(tr);
    })
  }
  
  var ufotableTbody = document.querySelector("#ufo-table tbody");
  
  addDataToTbody(ufotableTbody, sightings);

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // clear html table
    document.getElementById("output").innerHTML = "";

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
  
    // Create filtered data variable
    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);
  
    //Replace ufo-table data with filtered data
    addDataToTbody(ufotableTbody, filteredData);

};
  