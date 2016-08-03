import * as d3_axis from 'd3-axis';
import * as d3_brush from 'd3-brush';
import * as d3_scale from 'd3-scale';
import * as d3_selection from 'd3-selection';
const d3 = {
	...d3_axis,
	...d3_brush,
	...d3_scale,
	...d3_selection
};

let d3s = d3_selection;
console.log(">>>>> event:", d3_selection.event);

/**
 * set up empty d3 workspace with conventional margins
 * https://bl.ocks.org/mbostock/3019563
 */
const d3Module = () => {

	const init = () => {

		var margin = {top: 200, right: 40, bottom: 200, left: 40},
		    width = 960 - margin.left - margin.right,
		    height = 500 - margin.top - margin.bottom;

		var x = d3.scaleTime()
		    .domain([new Date(2013, 7, 1), new Date(2013, 7, 15) - 1])
		    .rangeRound([0, width]);

		var brush = d3.brushX()
		    .extent([[0, 0], [width, height]])
		    .on("end", brushended);

		var svg = d3.select("#app").append("svg")
			.attr("class", "d3-modules-test")
		    .attr("width", width + margin.left + margin.right)
		    .attr("height", height + margin.top + margin.bottom)
		  .append("g")
		    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		svg.append("g")
		    .attr("class", "axis axis--grid")
		    .attr("transform", "translate(0," + height + ")")
		    .call(d3.axisBottom(x)
		        .ticks(d3.timeHour, 12)
		        .tickSize(-height)
		        .tickFormat(function() { return null; }))
		  .selectAll(".tick")
		    .classed("tick--minor", function(d) { return d.getHours(); });

		svg.append("g")
		    .attr("class", "axis axis--x")
		    .attr("transform", "translate(0," + height + ")")
		    .call(d3.axisBottom(x)
		        .ticks(d3.timeDay)
		        .tickPadding(0))
		    .attr("text-anchor", null)
		  .selectAll("text")
		    .attr("x", 6);

		svg.append("g")
		    .attr("class", "brush")
		    .call(brush);

		function brushended() {
		  if (!d3.event.sourceEvent) return; // Only transition after input.
		  if (!d3.event.selection) return; // Ignore empty selections.
		  var domain0 = d3.event.selection.map(x.invert),
		      domain1 = domain0.map(d3.timeDay.round);

		  // If empty when rounded, use floor & ceil instead.
		  if (domain1[0] >= domain1[1]) {
		    domain1[0] = d3.timeDay.floor(domain0[0]);
		    domain1[1] = d3.timeDay.ceil(domain0[1]);
		  }

		  d3.select(this)
		    .transition()
		      .call(brush.move, domain1.map(x));
		}

	};
	
	return {
		init
	};
};

export default d3Module;
