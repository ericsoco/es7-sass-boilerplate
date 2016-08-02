import * as d3 from 'd3';

/**
 * set up empty d3 workspace with conventional margins
 * https://bl.ocks.org/mbostock/3019563
 */
const d3Module = () => {

	const init = () => {

		initGraph();

	};

	const initGraph = () => {

		let app = d3.select('#app')
				.attr('class', 'example-d3'),
			graph,
			margin = {
				top: 40,
				right: 40,
				bottom: 40,
				left: 40
			},
			outerWidth = app.node().offsetWidth,
			outerHeight = app.node().offsetHeight,
			width = outerWidth - margin.left - margin.right,
			height = outerHeight - margin.top - margin.bottom;

		graph = app.append('svg')
			.attr('width', outerWidth)
			.attr('height', outerHeight)
		.append('g')
			.attr('transform', `translate(${ margin.left }, ${ margin.top })`);

		graph.append('text')
			.attr('y', 50)
			.text('d3 module initialized.');

	};
	
	return {
		init
	};
};

export default d3Module;
