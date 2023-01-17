// Map Activity 1
const steps = ['one', 'two', 'three']
const stepsHtml = steps.map(function (step) {
    return `<li>${step}</li>`;
});

// Map Activity 2
const grades = ['A', 'B', 'A']
function convertGradeToPoints(grades) {
    let points = 0;
    if (grades === "A") {
        points = 4;
    } else if (grades === "B") {
        points = 3;
    } 
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);

// Reduce Activity 3
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});
const gpa = pointsTotal / gpaPoints.length;
// example 2
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Filter Activty 4
const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = words.filter(word => word.length < 6);

// Indexof Activity 5
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
