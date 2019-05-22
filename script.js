var data=[10,20,30,40,70, 200,300];




var scaleBars = d3.scale.linear()
		.domain([0,1000])
		.range([0,500]);


var canvas = d3.select("body")
		.append("svg")
		.attr("width",500)
		.attr("height",500)
		.style("background","red");
var barChart = canvas.selectAll("rect")
		.data(data)
		.enter()
			.append("rect")
			.attr("height",function(d){return scaleBars(d)})
			.attr("width", 10)
			.attr("x",function(d,i){return i*20});

var line = canvas.append("line")
		.attr("x1",0)
		.attr("y1",0)
		.attr("x2",20)
		.attr("y2",20)
		.attr("stroke","green")
		.attr("stroke-width",10);
