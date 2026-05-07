// Section-1 : Variables 
// Q1
// var a = 10
// a = 15
// console.log(a);  //Output : 15

// Q2
// let b = 20;
// let b = 30; //Output : SyntaxError : Identifier b has already declared

// Q3
// const c = 50;
// console.log(c); //Output : 50

// Q4
// const x = 10; // This is a constant variable and we are trying to change it 
// x = 20; // Output : TypeError : Assignment to constant variable.

// Q5
var p = 5;
var p = 10;
console.log(p); // Output : 10

// Q6
let q = 25;
q = q + 10;
console.log(q); // Output : 35

// Q7
const r = 7;
console.log(r+7); // Output : 14

//Q8
// let a = 10; // it can be var, let, const

// Section - 2 : Console Methods

// Q9. Which methods prints normal Output?
// --> console.log() prints normal Output

// Q10. Which method shows warning?
// -->  alert() shows the warning 

// Q11. Which method shows error?
// -->  console.error() 

// Q12. What does this do? console.clear();
// -->  It clears all the messages from the browser console.

// Section - 3 : Data Types
// Q13
// let a = "hello";
// console.log(typeof a); // Output : String

// Q14
// let b = 100;
// console.log(typeof b); // Output : Number

// Q15
// let c = false;
// console.log(typeof c); // Output : Boolean

// Q16
// let d;
// console.log(d); // Output : Undefined

// Q17 : What is type of null?
// -->  Object is the type of null

// Q18 : Convert string to number: "25"
let str = "25";
let num = Number(str); 

console.log(num);
console.log(typeof num); // Output : 25

// Section - 4 : Arrays
// Q19. Create array of 3 fruits.
// let fruits = ["Mango", "Kiwi", "Apple"];
// console.log(fruits); // Output : ['Mango','Cheery','Apple']

// Q20. 
// let arr = ["a","b","c"];
// console.log(arr[1]); // Output : b

// Q21
// let arr = ["x","y","z"];
// console.log(arr[arr.length-1]); // Output : z

// Q22. How to get first element?
// let arr = ["x","y","z"];
// console.log(arr[0]); // Output : x

// Q23
// let arr = ["apple","banana"];
// console.log(arr.length); // Output : 2

// Q24. Add new element to array.
let fruits = ["Apple", "Mango","Kiwi"];
fruits.push("Grapes");
console.log(fruits); // Output : ['Apple','Mango','Kiwi','Grapes']

// Section - 5 : Objects
// Q25. Create object with name & age.
let person = {
    name : "Jack",
    age : 23
};
console.log(person); // Output : {name : 'Jack', age : 23 }

// Q26
// let obj = {name:"Naveen"};
// console.log(obj.name); // Output : Naveen

// Q27
let obj = {
    fruits: ["apple","banana"]
};
console.log(obj.fruits[1]); // Output : banana

// Q28. How to access last element inside object array?
let students = [
    {name : "Pooja", age : 23},
    {name : "Sanvi", age : 25},
    {name : "Joey", age : 22}
]
console.log(students[students.length-1]); // Output : {name :'Joey', age : 22}

// Section - 6 : Arithmetic Operators
// Q29
console.log(5+3); // Output : 8

// Q30
console.log(10 % 3); // Output : 1

// Q31.
console.log(2 ** 3); // Output : 8
// Q32.
console.log(10/2); // Output : 5

//Section - 7 : Increment/Decrement 
// Q33.
let a = 5;
a++;
console.log(a); // Output : 6

// Q34.
let b = 5;
let c = b++;
console.log(b,c); // Output : 5 6

// Q35.
let x = 5;
let y = ++x;
console.log(x,y); // Output : 6 6

// Q36.
let m =3;
let n = m--;
console.log(m,n); // Output : 2 3

//Section - 8 : Comparison & Logical 
// Q37.
console.log(5 == "5"); // Output : true
// Q38.
console.log(5 === "5"); // Output : false
// Q39.
console.log(true && false || true); // Output : true

//Section - 9 : Ternary
// Q40.
5>3 ? console.log("Yes"):
console.log("No"); // Output : yes















