# Bonus-Challenges-Algorithmics-Classes

In this serie, you'll practice classes. Good Luck!

### Exercise 1 - Class Circle

Create a class named `Circle` with attributes `xPos`, `yPos` and `radius`. Add a method named `move(xOffset, yOffset)` that will adjust the position of the circle. Add a getter accessor named `surface` that will return the surface of the circle.

Test its method and accessors by modifying the values and checking if everything is consistent.

### Exercise 2 - Class Rectangle

Create a class name `Rectangle` with attributes `topLeftXPos`, `topLeftYPos`, `width` and `length`. Add a method named `collides(otherRectangle)` that returns `true` only if the current rectangle collides with `otherRectangle`.

Test the `collides(otherRectangle)` method by using multiple test cases.

### Exercise 3 - Class random Rectangles

Create a program that will re-use the `Rectangle` class you created previously. It should generate 1000 random instances of `Rectangle` with random positions and sizes. Then it will display all colliding rectangles amongst those that were generated that way.