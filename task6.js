//Real-time javascript questions
//Topic :- Array + Object + HOF + Spread

//1. Student Attendance System
let presentStudents = ["Rahul", "sneha", "Rohit"];
let absentStudents = ["Priya","Karan"];

// Merge arrays using spread operator
let allStudents = [...presentStudents,...absentStudents];

// Add one new Student at last 
allStudents.push("Pooja");

//print final array
console.log("Final students list:");
console.log(allStudents); //output : ['Rahul','sneha','rohit','priya','karan','pooja']

//2. E-Commerce Cart
// Create object for mobile details 
let mobileDetails = {
    brand : "Samsung",
    mobile : "Galaxy S24",
    price : "70000"
};
let chargerDetails = {
    type : "Fast Charger",
    watt : "45W"
};
// Merge objects using spread operator
let productDetails = {
    ...mobileDetails,
    ...chargerDetails,
    deliveryDate : "20 May 2026"
};
// Print final object
console.log("\nFinal Product Details:");
console.log(productDetails);

//3. Food Delivery App
// Create function named orderFood()
function orderFood(...items) {
    console.log("\nFood Order Details:");
    console.log("Total items ordered:", items.length);
    console.log("First item:", items[0]);
    console.log("Last item:", items[items.length - 1]);
}
// Function call
orderFood("Pizza", "Burger", "Pasta", "Cold Coffee");

//4. Employee Salary Filter
// Create array of employee objects
let employees = [
    { name: "Ravi", salary: 45000 },
    { name: "Anjali", salary: 60000 },
    { name: "Kiran", salary: 75000 },
    { name: "Meena", salary: 40000 }
];
// Filter employees with salary greater than 50000
let highSalaryEmployees = employees.filter(employee => employee.salary > 50000);

// Print filtered employees
console.log("\nEmployees with Salary Above 50000:");
console.log(highSalaryEmployees);


//5. Online Game Score Board
// Create array of scores
let scores = [100, 200, 150, 300, 250];

// Use reduce()
let totalScore = scores.reduce((total, score) => total + score, 0);

// print final total
console.log("\nTotal Score of All Players:");
console.log(totalScore);


