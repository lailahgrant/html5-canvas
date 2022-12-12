//select the canvas element
var canvas = document.querySelector('canvas');

//resize the width of the canvas
canvas.width = innerWidth;

//resize the height of the canvas
canvas.height = innerHeight;

//drawing on the canvas
// create a context to draw with in only 2D
/* returning a drawing context [getContext()] to variable c
                OR
with in c, we're creating a super object, basically passing a tone of methods and functions that we can actually use to draw 2D elements we can manipulate in a 2D space.
*/
var c = canvas.getContext('2d'); 

//add color to the rectangle
c.fillStyle = 'rgba(255,0,0,0.5)';
//fillRect() - fn that takes 4 arguments, fillRect(x,y, width, height); x, y being where on the canvas the rectangle is,
c.fillRect(0, 0, 100, 100);
c.fillStyle = 'rgba(0,0,225,0.5)';
c.fillRect(500, 500, 100, 100);
c.fillStyle = 'rgba(0,225,0,0.5)';
c.fillRect(900, 0, 100, 100);

//Lines and Arcs / Circles
//Line
c.beginPath(); //start a path
c.moveTo(30, 300); //where the line starts (x,y)
//the line is inviscible till we add a stroke()
c.lineTo(300, 100); //where the line ends at (x,y)
c.lineTo(400, 300);
//strokeStyle - for color of line(must be above stroke())
c.strokeStyle = "#fa34a3";
//call stroke() for line viscibility
c.stroke(); //point to point

/**
 * ====================================================================================================================
 */

//Arc / Circle
//c.arc(x, y, radius, startAngle, endAngle, clockwise); - takes some arguments, radius, startAngle and endAngle take the Radian and not degrees.
//endAngle is how long we want the circle or arc to go on for.
//cone academy - sam can (tutorial)
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();


//Create multiple circles using a for loop
/* This loop will draw circles on top of the other since the x and y are the same for every loop
for (var i = 0; i < 3; i++){
    c.beginPath();
    c.arc(500, 500, 30, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();
}
*/
//Specify a changing x and y value using the Math.random() fn
//random numbers generated are 0 - 1 (0, 0.98787, 0.7 etc)
for (var i = 0; i < 10; i++){ //add the ... i<1000 to increase the number of circles
    
    /* this x and y declaration only puts the cirles in the far top left of the canvas, WHAT DO WE DO THEN???????????
    var x = Math.random();
    var y = Math.random();
    */
    
    /**
     * SOLUTION
     * return a random number from 0 to the full width and height of a window
     * multiply window.innerWidth on to the x as follows
     */

    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false); //x and y values are now dynamic
    c.strokeStyle = "blue";
    c.stroke();

    /**
     * Assignment
     * Change color for every circle
     */
    
}

































console.log(canvas);
