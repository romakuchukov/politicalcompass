const height = 512;
const width  = 512;

console.log(d3)

const svg = d3.select('body');

svg.append('div')
  .classed('svg', true)
  .append('svg')
  // .attr('preserveAspectRatio', 'xMinYMin meet')
  .attr('viewBox', '0 0 400 490')
  .classed('responsive', true)
  .style('-webkit-tap-highlight-color', 'transparent')
  .style('overflow', 'visible')
  .style('height', '100%')
  .style('width', '100%');


// // svg.append('path')
// //   .datum(data)
// //   .attr('fill', 'none')
// //   .attr('stroke', 'steelblue')
// //   .attr('stroke-width', 1.5)
// //   .attr('stroke-linejoin', 'round')
// //   .attr('stroke-linecap', 'round')
// //   .attr('d', line);


// svg.node();
