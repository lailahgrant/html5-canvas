var canvas = document.querySelector('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;

var c = canvas.getContext('2d');

c.beginPath();
c.arc(500, 300, 50, 0, Math.PI * 2, false);
c.strokeStyle = "blue";
c.stroke();

//animate the circle

//x variable that increments every time a page refreshes
/**
 * This code makes many circles on top of the other and creating a line.
var x = 500;
function animate() {
    requestAnimationFrame(animate);
    c.beginPath();
    c.arc(x, 300, 50, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();

    x += 1;
}
animate();
*/

var x = 500;
var y = 300;
//a variable for either positive or negative velocity
var dx = 4; //when increased, the object moves faster.
var dy = 4;
//radius variable
var radius = 50;
function animate() {
    requestAnimationFrame(animate);
    /**
     * Each time we refresh the canvas/page, we must clear the canvas using clearRect()
     */
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x, y, radius, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.stroke();

    //increment x
    //x += dx; //velocity - speed at which the circle moves to the end of the canvas, (1 pixel per frame refresh to the right)

    /**
     * To  stop the object from moving to the end of the canvas, we create a condition below (make a circle bounce off the end of the screen)
     * add or remove the velocity and the radius of a circle
     * if (x > innerWidth) { //the circle bounces off the end of the screen from the centre 
        dx = -dx;
    }
     */
    if (x + radius > innerWidth || x - radius < 0) { // add an || for when the circle exceeds  0 on x axis (to make the circle bounce off the left side too)
        dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0) { // add an || for when the circle exceeds  0 on x axis (to make the circle bounce off the left side too)
        dy = -dy;
    }

    //increment x
    x += dx;

    //increment y
    y += dy;


    /**
     * 
     */

}
animate();




