const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


for (let i=0; i<100; i++){
    let x= Math.random()*width;
    let y= Math.random()*height;
    context.beginPath();
    context.fillStyle ="rgb(134,122,255)";
    context.arc(x,y,50,0,2*Math.PI)
    context.closePath();
    context.Stroke();
    context.fill();
}