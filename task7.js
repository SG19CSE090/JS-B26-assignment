//1. API Task - Usern Names Uppercase
//API:
// https://jsonplaceholder.typicode.com/users
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

        // Use map() to convert usernames to uppercase
        let uppercaseUsernames = users.map(user =>
            user.username.toUpperCase()
        );

        // Print new array
        console.log("Uppercase Usernames:");
        console.log(uppercaseUsernames);
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    })

//2. API Task -  Expensive Products
//API:
// https://fakestoreapi.com/products
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(products => {

        // Use filter() to get products with price > 100
        let expensiveProducts = products.filter(products => 
            products.price > 100
        );

        // Print expensive products
        console.log("Products Price Greater than 100:");
        console.log(expensiveProducts);
    })
    .catch(error => {
        console.log("Error fetching data:", error);
    })

//3. Date Concept Task - Digital Clock
//Create Date Object
let currentTime = new Date();

// Get current hours, minutes, and seconds
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

// Format time as HH:MM:SS
console.log(hours + ":" + minutes + ":" + seconds);

//4. String Methods Task - Count Vowels

// Create a string
let username = "  Pooja H  ";

// Remove spaces using trim()
let trimmedName = username.trim();

// Convert into uppercase
let upperCaseName = trimmedName.toUpperCase();

// Check string includes "H"
let checkH = upperCaseName.includes("H");

// print final output
console.log("Final Name:", upperCaseName);
console.log("Includes H:", checkH);


//5. Array Concept Task - Student Rank System
// Create Array
let marks = [450, 300, 700, 200, 900];

// Sort marks high to low
marks.sort((a,b) => b - a);

// Get top 3 marks using slice()
let topThreeMarks = marks.slice(0, 3);

// Print final output
console.log("Sorted Marks:", marks);
console.log("Top 3 Marks:", topThreeMarks);