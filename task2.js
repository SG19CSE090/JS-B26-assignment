// Task 1 - Predict the output
console.log("10" + 5) // output : 105
console.log(10 + true) // output : 10true
console.log(false + null) // output : 0
console.log("Hello" + undefined) // output : Helloundefined
console.log([1,2] + 5) // output : 1, 25

// Task 2 - Implicit Type Casting
//1. String + Number
let result = "10" + 5;
console.log(typeof(result)); // output : String

//2. Boolean + Number
let result1 = true + 12;
console.log(typeof(result1)); // output : Number

//3. Array + String
let result2 = [1,3,2] + "Helloworld";
console.log(typeof(result2)); // output : String

//4. Object + Number
let result3 = {} + 12;
console.log(typeof(result3)); // output : String

//5. Null + Number
let result4 = null + 12;
console.log(typeof(result4)); // output : Number

//Task 3 - Explicit Type Casting
console.log(Number("500")); // output : 500
console.log(Number(true)); // output : 1
console.log(Number(false)); // output : 0 
console.log(Number(null)); // output : 0
console.log(Number("abc")); // output : NaN
console.log(Number[100]); // output : 100

//Task 3 - Boolean Constructor
console.log(Boolean("")); //output : false
console.log(Boolean("javascript")); // output : true
console.log(Boolean(0)); // output : false
console.log(Boolean(1)); // output : true
console.log(Boolean(null)); // output : false
console.log(Boolean(undefined)); // output : false
console.log(Boolean([])); // output :  true
console.log(Boolean({})); // output : true

//Task 5 - Student Pass or Fail
// let mark = 45
// if(mark > 35){
//     console.log("Pass");
// }
// else{
//     console.log("Fail");
// } // output : Pass

//Task 6 - Voting Eligibility
// let age = 20
// if(age >= 18){
//     console.log("Is eligible to vote");
// }
// else{
//     console.log("Not eligible to vote");
// } // output : Is eligible to vote

//Task 7 - Greatest Number
// let a = 50
// let b = 80
// let c = 3
// if(a > b && a > c){
//     console.log("B is greatest");
// }
// else if(b > a && b > c){
//     console.log("B is greatest");
// }
// else{
//     console.log("C is a greatest");
// } // output : B is greater

//Task 8 - Traffic Light System
let color = "red";
switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Color");
} // output : Stop

//Task 9 - Login System
// let username = "admin";
// let password = "1234";
// if(username === "admin"){
//     if(password === "1234"){
//         console.log("Login Success");
//     }
//     else{
//         console.log("Invalid Login");
//     }
// }
// else{
//     console.log('Invalid Login'); // output : Login Success
// }

//Task 10 - Session Finder
let hour = 14
if(hour >= 1 && hour <= 12){
    console.log("Morning");
}
else if(hour >= 13 && hour <= 15){
    console.log("Afternoon");
}
else if(hour >= 16 && hour <= 19){
    console.log("Evening");
}
else if(hour >= 20 && hour <= 24){
    console.log("Night");
}
else{
    console.log("Invalid Hour");
} // output : Afternoon


