/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const myInformation = {
// Step 2: Inside of the object, add a property named name with a value of your name as a string
    name: "Leticia Abelenda",
    
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
    photo: "images/Leti.jpg",

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
    favoriteFoods: ["Ramen", "Lamb", "Sushi", "Pizza"],

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
    hobbies: ["Reading", "Drawing", "Playing videogames", "Watching movies and series"],

// Step 6: Add another property named placesLived with a value of an empty array
// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
// Step 8: For each property, add appropriate values as strings
// Step 9: Add additional objects with the same properties for each place you've lived
    placesLived: [
        {
            "place": "Florida, Uruguay",
            "length":"22 years"
        },

        {
            "place": "Montevideo, Uruguay",
            "length":"6 years"
        }
    ]
}


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
const getName = myInformation['name']
document.querySelector('#name').textContent = getName;

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
const getPhoto = myInformation['photo']
document.querySelector('img').setAttribute('src', getPhoto);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('img').setAttribute('alt', getPhoto);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
for (let i = 0; i < myInformation.favoriteFoods.length; i++) {
    let foods = myInformation.favoriteFoods[i];
    console.log(foods);
    let foodName = document.createElement("li");
    foodName.innerHTML = foods;

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
    document.getElementById("favorite-foods").appendChild(foodName);
    }

// Step 6: Repeat Step 4 for each hobby in the hobbies property
for (let i = 0; i < myInformation.hobbies.length; i++) {
    let hobbies = myInformation.hobbies[i];
    console.log(hobbies);
    let hobbieName =  document.createElement("li");
    hobbieName.innerHTML = hobbies;

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
    document.getElementById("hobbies").appendChild(hobbieName);
}
// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
for (let i = 0; i < myInformation.placesLived.length; i++) {
    let places = myInformation.placesLived[i];
    console.log(places);
    let placeName = document.createElement("dt");
    placeName.innerHTML = places.place;

// - Create an HTML <dd> element and put its length property in the <dd> element
    let placeLength = document.createElement("dd");
    placeLength.innerHTML = places.length;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.getElementById("places-lived").appendChild(placeName);
    document.getElementById("places-lived").appendChild(placeLength);
    }



