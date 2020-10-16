const svgHeight = 512;
const svgWidth  = 512;

const content = d3.select('body')

const svg = content.append('div')
  .append('svg')
  .attr('preserveAspectRatio', 'xMinYMin meet')
  .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`)
  .append('g');

const rectW = svgWidth/2-6;
const rectH = svgHeight/2-6;
const outerPos = svgWidth/2+6


svg.append('rect')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .attr('fill', '#444')
  .classed('bg', true)

svg.append('rect')
  .attr('width', rectW)
  .attr('height', rectH)
  .attr('fill', '#FF7575')
  .attr('x', 0)
  .attr('y', 0);

svg.append('rect')
  .attr('width', rectW)
  .attr('height', rectH)
  .attr('fill', '#9AED97')
  .attr('x', 0)
  .attr('y', outerPos);

svg.append('rect')
  .attr('width', rectW)
  .attr('height', rectH)
  .attr('fill', '#42AAFF')
  .attr('x', outerPos)
  .attr('y', 0);

svg.append('rect')
  .attr('width', rectW)
  .attr('height', rectH)
  .attr('fill', '#C09AEA')
  .attr('x', outerPos)
  .attr('y', outerPos);

d3.select('svg').on('click', e => {

  d3.select('circle').remove();

  const node = d3.select('svg').node();

  const { width, height, x, y } = node.getBoundingClientRect();

  const ratio = (width/svgWidth);

  svg.append('circle')
    .attr('r', 10)
    .attr('fill', 'red')
    .attr('stroke', '#000')
    .attr('stroke-width', .2)
    .attr('transform', `translate(${e.x/ratio - x/ratio}, ${e.y/ratio - y/ratio})`)
});
