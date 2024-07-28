document.addEventListener('DOMContentLoaded', function() {
  // Set the dimensions and margins of the graph
  var margin = {top: 10, right: 30, bottom: 30, left: 40},
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  // Append the svg object to the div called 'orders'
  var svg = d3.select("#orders")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Create dummy data
  var data = [30, 80, 45, 60, 20];

  // Create the bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
      .attr("x", function(d, i) { return i * 70; })
      .attr("y", function(d) { return height - d; })
      .attr("width", 65)
      .attr("height", function(d) { return d; })
      .attr("fill", "#69b3a2");
});


document.addEventListener('DOMContentLoaded', function() {
  // Set the dimensions and margins of the graph
  var margin = {top: 10, right: 30, bottom: 30, left: 40},
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

  // Append the svg object to the div called 'total'
  var svg = d3.select("#total")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Create dummy data
  var data = [30, 80, 45, 60, 20];

  // Create the bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
      .attr("x", function(d, i) { return i * 70; })
      .attr("y", function(d) { return height - d; })
      .attr("width", 65)
      .attr("height", function(d) { return d; })
      .attr("fill", "#69b3a2");
});
