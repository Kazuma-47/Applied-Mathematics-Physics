const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


//wall
context.beginPath();
context.lineWidth = "3";
context.strokeStyle = "#000000";
context.fillStyle = "rgb(100,100,100)";
context.moveTo(200,300);
context.lineTo(600,400);
context.lineTo(600,600);
context.lineTo(200,500);
context.closePath();
context.stroke();
context.fill();

//wall voorkant
context.beginPath();
context.lineWidth = "3";
context.strokeStyle = "#000000";
context.fillStyle = "rgb(100,100,100)";
context.moveTo(600,400);
context.lineTo(800,300);
context.lineTo(800,500);
context.lineTo(600,600);
context.closePath();
context.stroke();
context.fill();


//deur
context.beginPath();
context.lineWidth = "3";
context.strokeStyle = "#000000";
context.fillStyle = "rgb(200,100,0)";
context.moveTo(700,550);
context.lineTo(700,460);
context.lineTo(750,430);
context.lineTo(750,529);
context.closePath();
context.stroke();
context.fill();

//dak voorkant
context.beginPath();
context.lineWidth = "3";
context.strokeStyle = "#000000";
context.fillStyle = "rgba(255,0,0,0.7)";
context.moveTo(700,200);
context.lineTo(800,300);
context.lineTo(600,400);
context.closePath();
context.stroke();
context.fill();

//dak boven
context.beginPath();
context.lineWidth = "3";
context.strokeStyle = "#000000";
context.fillStyle = "rgb(255,0,0)";
context.moveTo(300,100);
context.lineTo(700,200);
context.lineTo(600,400);
context.lineTo(200,300);
context.closePath();
context.stroke();
context.fill();