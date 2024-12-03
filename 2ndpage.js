// Assuming you already have a canvas element in your HTML with the ID 'myCanvas'

// Get the canvas element and its 2D context
const canvas = document.getElementById('canvasSSD');
const ctx = canvas.getContext('2d');
const radius = 100;  
// Set the properties for the circle
const x = 200; // x-coordinate of the center
const y = 150; // y-coordinate of the center


// // Draw the circle
// function growcircle (x,y) {
// ctx.cleaRect (0,0, canvas.width,canvas.height) ;
// ctx.beginPath();             // Start a new path
// ctx.arc(x, y, radius, 0, Math.PI * 2); // Create an arc (circle)
// ctx.fillStyle = 'blue';      // Set the fill color
// ctx.fill();                  // Fill the circle with the color
// ctx.closePath(); 
// growcircle (x,y)
// }

ctx.beginPath();
ctx.arc(x,y,radius,0,Math.PI *2);
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'red';
ctx.stroke ();

console.log("abc");
