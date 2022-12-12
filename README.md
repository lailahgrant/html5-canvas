# HTML5 CANVAS
(HTML5 Canvas is just an HTML element)

BASICS.
> #### Four essential skills for any HTML5 Canvas piece:-
> 1. Creating and Resizing your canvas.
> 2. Drawing elements (static art work)
> 3. Animating elements
> 4. Interacting with elements (mousedown, mouse click, touch  on the phone, tilt of a phone )

1. Creating and Resizing your canvas.
>   a)  Creating your canvas.
>- create an html and js file
>- in the .html file, add a <canva></canva> tag
>- style the canva by adding a border.

>   b)  Resizing your canvas.
>- Resizing the canvas is done in javascript(js file)
> e.g //select the canvas element
>  var canvas = document.querySelector('canvas');
> //resize the width of the canvas 
>canvas.width = innerWidth; //(Full width of the browser)
>//resize the height of the canvas
> canvas.height = innerHeight;


2. Drawing elements (static art work)
>- Can draw shapes, pixel images etc
>- e.g  - drawing a rectangle / box
> <pre>
> //drawing on the canvas
>// create a context to draw with in only 2D
>/* returning a drawing context [getContext()] to variable c
>                OR
>with in c, we're creating a super object, basically passing a tone of methods and functions that we can actually use to draw 2D elements we can manipulate in a 2D space.
>*/
> <code>
>var c = canvas.getContext('2d'); 
>//fillRect() - fn that takes 4 arguments, fillRect(x,y, width, height); x, y being where on the canvas the rectangle is,
>c.fillRect(0, 0, 100, 100);
>c.fillRect(500, 500, 100, 100);
>c.fillRect(900, 0, 100, 100);
></code>
> </pre>
------------------------------------------------------------------------------------
>- - Canvas Objects:
>(Canvas Objects and how to draw them)
>- Rectangles
>- Lines
>- Arcs / Circles (which can be used to create circles)
>- Bezier curves
>- Images
>- Text

3. Animating elements
> Animate - moving objects.
> 1st create a function
> then we requestAnimationFrame(animate) - which loops through and calls a fn passed as an argument 
> <pre>
> function animate(){
>   requestAnimationFrame(animate) // loops thru the fn and calls the animate() passed in its ()  as an argument.
> }
> //call the animate()
> animate()
> </pre>
> 
> ------------------------------------
> - - Animation works by refreshing the page as we increment the x value by 1 (object moving to the right)