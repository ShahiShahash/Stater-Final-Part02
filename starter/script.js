// Lecture-32. Activating Strict Mode
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log(`I can drive:D`);
*/

// const interface = 'audio';
// const private = 534;
// const if = 23

// 33. Functions
/*
function logger() {
    console.log('My name is Shahash');
}

// calling / running / invoking function
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

console.log(Number('23'));
*/


// Lecture-34. Function Declarations vs. Expressions

// Function declarations 
// In function declarations we can even call the function but initialization but we cannot do so in Function Expressions

/*const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}

// Function Expression / Anonymous function created / Anonymous function should always be inside of the variable.
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

// Lecture - 35. Arrow Functions

// Function Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }

// Arrow Function / Arrow Function is a special Function Expression

/*const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));

*/

// Lecture- 36. Functions Calling Other Functions

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`;
    return juice;
}
console.log(fruitProcessor(2,3));

// Lecture - Reviewing Functions;

const calcAge = function (birthYear) {
    return 2037 - birthYear;
}


const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    
    if(retirement>0) {
        return retirement;
    } else {
        return -1;
    }
     
    
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, 'Mike'));

*/

// Lecture thumbnail 39. Introduction to Arrays;
/*
const friends = ["Michael", "Steven", "Peter"]
console.log(friends);

const yearY = new Array(1991, 1984, 2008, 2020);
console.log(yearY);



console.log(friends[0]);
console.log(typeof friends.length);
console.log(friends[friends.length - 2]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Jonas"
const jonas = [firstName, "Schmedtmann", 2037-1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

// Exercise;
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1= calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1], calcAge(years[3]))];
console.log(ages);

*/

// Lecture- 40. Basic Array Operations (Methods)
/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements 
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends);

// Remove elements

friends.pop(); // remove last element of the array;
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // rmoves the first element of the array.
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Michael"));
console.log(friends.indexOf("BOB"));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes(23));

if(friends.includes('Peter')) {
    console.log("You have a friend called steven.");
}
*/

//Lecture - 42. Introduction to Objects;
/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"]
];


const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
}
console.log(jonas);
// Lecture- 43. Dot vs. Bracket Notation

console.log(jonas.lastName);
console.log(jonas["lastName"])

const nameKey = "Name";
console.log(jonas['first' + nameKey]);

// const interestedIn = prompt("What do you want to know about Jonas choose between firstName, lastName, age, job and friends?");
// console.log(jonas[interestedIn]);

// if (jonas[interestedIn]) {
//     console.log(jonas[interestedIn]);
// } else {
//     console.log("Wrong request! choose between firstName, lastName, age, job and friends:");
// }

jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtmann";
console.log(jonas);

// Challenge;
// "Jonas has 3 friends, and his best friend is called Michael."
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/

// Lecture- 44. Object Methods
/*
const jonas = {
    firstName: "Jonas",
    lastName : "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    
    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `{this.firstName} is a ${this.calcAge()} years old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`;
    }


};

console.log(jonas.age);
// console.log(jonas["calcAge"](1991));

// Challenge;
// "Jonas is a 46 year old teacher and he has a driver's license"

console.log(jonas.getSummary());
console.log(`${jonas.firstName} is a ${jonas.calcAge()} years old ${jonas["job"]} and he has a`);
*/

// Lecture- 46. Iteration: The for Loop;

// console.log("Lifting weights repetition 1");
// console.log("Lifting weights repetition 2");
// console.log("Lifting weights repetition 3");
// console.log("Lifting weights repetition 4");


// for loop keeps running while the condition is true
/*
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️`);
}
*/

/*
const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i], typeof jonasArray[i]);

    // filling the types of array;
    // types[i] = typeof jonasArray[i];

    types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break;
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== 'string') continue;
    
    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === "number") break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

*/

// Lecture- 48. Looping Backwards and Loops in Loops
/*
const jonas = [
    "Jonas",
    "Schmedtmann",
    2037-1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

// 0 , 1, ... 4
// 4, 3 , ... 0

for(let i = jonas.length-1; i >= 0; i--) {
    console.log(i, jonas[i], typeof jonas[i]);
}

for(let exercise = 1; exercise<=3; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for(let rep = 1; rep<=5; rep++) {
        console.log(`Execise ${exercise}: Lifting weight repetition ${rep} 🏋️`);
    }
}
*/

//  Lecture- 49. The while Loop

let i = 1;
while(i<=10) {
    console.log(`While: ---------Lifting weight repetition ${i}.`);
    i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;


while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice=== 6) console.log('Loop is about to end..');
}



