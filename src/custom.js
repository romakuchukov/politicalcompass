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
  .attr('fill', '#444')
  .classed('bg', true)

// svg.append('rect')
//   .attr('width', 250)
//   .attr('height', 250)
//   .attr('fill', '#FF7575')
//   .attr('x', 0)
//   .attr('y', 0);

// svg.append('rect')
//   .attr('width', 250)
//   .attr('height', 250)
//   .attr('fill', '#9AED97')
//   .attr('x', 0)
//   .attr('y', 262);

// svg.append('rect')
//   .attr('width', 250)
//   .attr('height', 250)
//   .attr('fill', '#42AAFF')
//   .attr('x', 262)
//   .attr('y', 0);

// svg.append('rect')
//   .attr('width', 250)
//   .attr('height', 250)
//   .attr('fill', '#C09AEA')
//   .attr('x', 262)
//   .attr('y', 262);

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
  const { x, y } = e;
  const node = d3.select('svg').node();
  const { width, height } = node.getBoundingClientRect();
  console.log(node.getBoundingClientRect());
  //console.log(node.getBBox()); {x: 0, y: 0, width: 512, height: 512}
  const ratio = (1280/512);



  console.log(e);
  //console.log(node.getBoundingClientRect());

  // layerX: 2
  // layerY: 31
  svg.append('circle')
  .attr('r', 5)
  .attr('fill', 'red')
  .attr('transform', `translate(${e.x/ratio}, ${e.y/ratio})`)
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



