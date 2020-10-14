const height = 512;
const width  = 512;

const content = d3.select('body')

const svg = content.append('svg')
  .classed('hidden', true)
  .attr('preserveAspectRatio', 'xMinYMin meet')
  .attr('viewBox', `0 0 ${width} ${height}`)
  .append('g');

svg.append('rect')
  .attr('width', 512)
  .attr('height', 512)
  .attr('fill', '#444');

svg.append('rect')
  .attr('width', 250)
  .attr('height', 250)
  .attr('fill', '#FF7575')
  .attr('x', 0)
  .attr('y', 0);

svg.append('rect')
  .attr('width', 250)
  .attr('height', 250)
  .attr('fill', '#9AED97')
  .attr('x', 0)
  .attr('y', 262);

svg.append('rect')
  .attr('width', 250)
  .attr('height', 250)
  .attr('fill', '#42AAFF')
  .attr('x', 262)
  .attr('y', 0);

svg.append('rect')
  .attr('width', 250)
  .attr('height', 250)
  .attr('fill', '#C09AEA')
  .attr('x', 262)
  .attr('y', 262);

const img = document.createElement('img');
const svgStr = new XMLSerializer().serializeToString(content.select('svg').node());

img.src = (`data:image/svg+xml;base64,${btoa(svgStr)}`);
document.body.append(img);

// const content = d3.select('body')

  //.attr('preserveAspectRatio', 'xMinYMin meet')

const radius = 5;

// d3.select('img').on('click', function(e) {
//   const [cx, cy] = d3.pointer(e);
//   const {width, height} = d3.select('img').node().getBoundingClientRect()
//   //e.clientX, e.clientY
//   console.log(e);

//   mark.selectAll('circle').remove()

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


document.body.addEventListener('click', function(e) {
  d3.select('svg').remove()
  const mark = content.append('svg')
  .attr('preserveAspectRatio', 'xMinYMin meet')
  //.append('g')
  .attr('transform', `translate(${e.x}, ${e.y})`)
  .attr('viewBox', `0 0 30 30`)
  .classed('mark', true)
  const [cx, cy] = d3.pointer(e);
  //const {width, height} = d3.select('img').node().getBoundingClientRect()
  //e.clientX, e.clientY
  console.log(e);

  //mark.remove()

  mark
  .append('circle')
  .attr('r', radius)
  .attr('fill', 'red')
  // .attr('cx', e.x)
  // .attr('cy', 0)
}, null)

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