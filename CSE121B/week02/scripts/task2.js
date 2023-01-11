/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = "Leticia";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
let theNameElement = document.getElementById('name');
theNameElement.querySelector('#name').innerHTML = 'Leticia';

// Step 3: declare and instantiate a variable to hold the current year
let currentYear = "2023";

// Step 4: place the value of the current year variable into the HTML file
//document.querySelector('#year');

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPicture = "me"

// Step 6: copy your image into the "images" folder


// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#mainImage').src = 'images/me.png';



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foods = ["Lamb", "Sushi"];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food');

// Step 3: declare and instantiate a variable to hold another favorite food
let otherFood = "Ramen";

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(otherFood);

// Step 5: repeat Step 2
document.querySelector('#food');

// Step 6: remove the first element in the favorite foods array
foods.shift();

// Step 7: repeat Step 2
document.querySelector('#food');

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
document.querySelector('#food');


