const svgHeight = 100;
const svgWidth  = 100;

const content = d3.select('body')

const svg = content.append('div')
  .append('svg')
  .attr('preserveAspectRatio', 'xMinYMin meet')
  .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`);

const g = svg.append('g');

const rectW = svgWidth/2-.5;
const rectH = svgHeight/2-.5;
const outerPos = svgWidth/2+.5;


g.append('rect')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .attr('fill', '#444');

g.append('rect')
  .attr('width', rectW)
  .attr('height', rectH)
  .attr('fill', '#FF7575')
  .attr('x', 0)
  .attr('y', 0);

g.append('rect')
  .attr('width', rectW)
  .attr('height', rectH)
  .attr('fill', '#9AED97')
  .attr('x', 0)
  .attr('y', outerPos);

g.append('rect')
  .attr('width', rectW)
  .attr('height', rectH)
  .attr('fill', '#42AAFF')
  .attr('x', outerPos)
  .attr('y', 0);

g.append('rect')
  .attr('width', rectW)
  .attr('height', rectH)
  .attr('fill', '#C09AEA')
  .attr('x', outerPos)
  .attr('y', outerPos);

d3.select('svg').on('click', e => {

  d3.select('circle').remove();

  const { width, height, x, y } = d3.select('svg').node().getBoundingClientRect();

  const ratio = (width/svgWidth);

  svg.append('circle')
    .attr('r', 2)
    .attr('fill', 'red')
    .attr('stroke', '#532670')
    .attr('stroke-width', .1)
    .attr('transform', `translate(${e.x/ratio - x/ratio}, ${e.y/ratio - y/ratio})`)
});

document.querySelector('a').addEventListener('click', e => {

  const ctrl = document.querySelector('.ctrl a');

  ctrl.innerHTML = /\+/.test(ctrl.innerHTML) ? '--' : '+';

  document.querySelector('#copy').classList.toggle('active');

  e.preventDefault();
});
