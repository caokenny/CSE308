var mymap = L.map('mapid', {zoomControl: false}).setView([37.0902, -95.7129], 4);

var mapboxtile = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/emerald-v8/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    minZoom: 4,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiY2Fva2VubnkiLCJhIjoiY2ptZHhzcmJoMHVlYjNwbW90cm1kZW11bSJ9.C6aOC-2bLmc9SIXXjI0tyQ'
}).addTo(mymap);

// mymap.dragging.disable();
// mymap.touchZoom.disable();
// mymap.doubleClickZoom.disable();
// mymap.scrollWheelZoom.disable();

//Add geoJSON

var states = L.geoJSON(usageo, {
    style: function () {
        return {color: "black", fillColor: "blue", fillOpacity: 1}
    }
}).addTo(mymap);

var continents = L.geoJSON(continentsgeo, {
    style: function (feature) {
        if (feature.properties.CONTINENT !== "North America") {
            return {color: "black", opacity: 1, fillColor: "black", fillOpacity: 1};
        } else {
            return {color: "black"};
        }
    }
}).addTo(mymap);
