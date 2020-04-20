// mapid is the id of the div where the map will appear
var map = L
.map('map-content')
.setView([43.00368, -81.254539], 75);   // center position + zoom


// Add a tile to the map = a background. Comes from OpenStreetmap
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
  maxZoom: 14,
  }).addTo(map);

// Add a svg layer to the map
L.marker([42.983500, -81.250900]).addTo(map)
  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
  .openPopup();
L.svg().addTo(map);

// Create data for circles:



function drawLayer() {
// Select the svg area and add circles:
d3.select("map-content")
.select("svg")
.selectAll("myCircles")
.data(markers)
.enter()
.append("circle")
  .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.lon]).x })
  .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.lon]).y })
  .attr("r", 14)
  .style("fill", "red")
  .attr("stroke-width", 3)
  .attr("fill-opacity", .4)

// Function that update circle position if something change
function update() {
d3.selectAll("circle")
  .attr("cx", function(d){ return map.latLngToLayerPoint([d.lat, d.lon]).x })
  .attr("cy", function(d){ return map.latLngToLayerPoint([d.lat, d.lon]).y })
}

// If the user change the map (zoom or drag), I update circle position:
map.on("moveend", update)
}	