const svgHeight = 512;
const svgWidth  = 512;

const content = d3.select('body')

const svg = content.append('div')
  .append('svg')
  .attr('preserveAspectRatio', 'xMinYMin meet')
  .attr('viewBox', `0 0 ${svgWidth} ${svgHeight}`)
  .append('g');

svg.append('rect')
  .attr('width', svgWidth)
  .attr('height', svgHeight)
  .attr('fill', '#444')
  .classed('bg', true)

svg.append('rect')
  .attr('width', svgWidth/2)
  .attr('height', svgHeight/2)
  .attr('fill', '#FF7575')
  .attr('x', 0)
  .attr('y', 0);

svg.append('rect')
  .attr('width', svgWidth/2)
  .attr('height', svgHeight/2)
  .attr('fill', '#9AED97')
  .attr('x', 0)
  .attr('y', 262);

svg.append('rect')
  .attr('width', svgWidth/2)
  .attr('height', svgHeight/2)
  .attr('fill', '#42AAFF')
  .attr('x', 262)
  .attr('y', 0);

svg.append('rect')
  .attr('width', svgWidth/2)
  .attr('height', svgHeight/2)
  .attr('fill', '#C09AEA')
  .attr('x', 262)
  .attr('y', 262);

// const img = document.createElement('img');
// const svgStr = new XMLSerializer().serializeToString(content.select('svg').node());

// img.src = (`data:image/svg+xml;base64,${btoa(svgStr)}`);
// document.body.append(img);

// const content = d3.select('body')

  //.attr('preserveAspectRatio', 'xMinYMin meet')

// d3.select('img').on('click', function(e) {
//   const [cx, cy] = d3.pointer(e);
//   const {width, height} = d3.select('img').node().getBoundingClientRect()
//   //e.clientX, e.clientY
//   console.log(e);

//   mark
//   .append('circle')
//   .attr('r', radius)
//   .attr('fill', 'red')
//   .attr('cx', e.x-width/2)
//   .attr('cy', 0)
//   // .attr('cx', e.offsetX)
//   // .attr('cy', e.offsetY)
//   //.attr('transform', `translate(0, 0)`)
//   console.log()

//   //console.log(img.getBBox())

//   e.stopPropagation();
// });

//document.body.addEventListener

// svg.on('click', function(e) {
//   console.log('logging');
//   // const mark = content.append('svg');

//   d3.select('circle').remove();

//   // const [cx, cy] = d3.pointer(e);
//   //const {width, height} = d3.select('img').node().getBoundingClientRect()
//   //e.clientX, e.clientY
//   //mark.remove()

//   svg
//   .attr('viewBox', `0 0 100 100`)
//   .attr('preserveAspectRatio', 'xMinYMin meet')
//   .classed('mark', true)
//   .attr('width', '100%')
//   .attr('height', '100%')

//   //.style('fill', `url(data:image/svg+xml;base64,${btoa(svgStr)})`)

//   .append('circle')
//   .attr('r', radius)
//   .attr('fill', 'red')
//   .attr('transform', `translate(${e.x}, 10)`)

//   // .attr('cx', e.x)
//   // .attr('cy', 0)
// }, null)

d3.select('svg').on('click', function(e) {

  d3.select('circle').remove();

  const node = d3.select('svg').node();

  const { width, height, x, y } = node.getBoundingClientRect();

  const ratio = (width/svgWidth);

  svg.append('circle')
    .attr('r', 10)
    .attr('fill', 'red')
    .attr('stroke', '#000')
    .attr('stroke-width', .2)
    .attr('transform', `translate(${e.x/ratio - x/ratio}, ${e.y/ratio})`)
});

// clientX: 487
// clientY: 31
// layerX: 0
// layerY: 31
// movementX: 0
// movementY: 0
// offsetX: 1
// offsetY: 32
// pageX: 487
// pageY: 31
// screenX: 854
// screenY: 156
// x: 487
// y: 31
//--------------------
// clientX: 900
// clientY: 445
// layerX: 414
// layerY: 445
// movementX: 0
// movementY: 0
// offsetX: 414
// offsetY: 446
// pageX: 900
// pageY: 445
// screenX: 1577
// screenY: 880
// x: 900
// y: 445



