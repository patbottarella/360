# Team Member 360

# About

This is a prototype of a react component, which displays the teammembers of a company. 
The images of the teammembers will fallow the cursor in the Dom and referable to that,
render the images so it looks like every teammember is always looking to the current position of the cursor.

# Start Application

--> yarn start

# Technical details

The image knows several things:
- its width and height
- it's current position in the DOM (x, y coordinate of the top left edge of the image)
- the current width and height of the browser-screen
- and of course, the current position of the cursor in the browser-window (x, y coordinates)

with these informations we can calculate the area in which the cursor is and render the right image.
you can see the calculation in the attached file.

[attached-files](https://github.com/patbottarella/360/edit/master/Teampage_360-calculation.pdf)
