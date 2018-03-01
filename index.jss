let c = null;
let ctx = null;
window.addEventListener('resize', () => {
  console.log('hi');
  c.width = window.innerWidth/2;
  c.height = window.innerHeight/2;
});
document.addEventListener('DOMContentLoaded', () => {
  c = document.querySelector('#canvas');
  window.dispatchEvent(new Event('resize'));
  ctx = c.getContext('2d');
 //hex = '#'+ Math.floor(Math.random()*16777215).toString(16);
  
  //ctx.fillStyle = (hex.length === 7) ? hex : "#d3d3d3";
  

  c.addEventListener('mousemove', (e) => {
    hex = '#'+ Math.floor(Math.random()*16777215).toString(16);
  
  ctx.fillStyle = (hex.length === 7) ? hex : "#d3d3d3";
  
    ctx.fillRect(e.pageX/2, e.pageY/2, 2, 2);
  });

});
