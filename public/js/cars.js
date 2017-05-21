"use strict";

var baseUrl = "http://mimeocarlisting.azurewebsites.net/api/cars/";

function formatCars(carsJSON) {
   var carhtml = `<div class="row">${carsJSON.map(car=> '<div class="col-md-4 car"><h2>' + car.Make + '</h2><p><strong>Model:</strong> ' + car.Model + '</p><p><strong>Year:</strong> ' + car.Year + '</p></div>').join('')}</div>`
   return carhtml
}

function addCarsToDOM(carsJSON) {
  $("#cars").append(formatCars(carsJSON))
}

var n = 3

function fetchJSON() {
  $.ajax({
    url: baseUrl +`${n}/3`,
    contentType: 'application/json',
    dataType: 'jsonp',
    success: function(data) {
      addCarsToDOM(data)
    }
  })
  if (n<22) {
    n++
  }
}
