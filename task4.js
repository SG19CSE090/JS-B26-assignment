//1. Basic functions
//create a function called welcomeUser.
function welcomeUser(name){
    console.log("welcome" + name);
}
welcomeUser("Pooja"); // Output : welcome Pooja

//2. Parameter + Return
//create a function sqaureNumber.
function squareNumber(num){
    return num*num;
}
console.log(squareNumber(5)); // Output : 25

//3. Object function
//create an Object
let employee = {
    name : "Rahul",
    salary : 50000
};
function employeeBonus(bonus){
    console.log(employee.name);
    console.log(employee.salary + bonus);
}
employeeBonus(50000) // Output : 100000

//4. Scope Checking
function checkScope(){
    if(true){
        let a = 10;
        var b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(b) // var works outside the block
    //let and const gives error outside the block
}
checkScope()

//5. Arrow function
const add = (a,b) => {
    console.log(a+b);
};
add(10,20) // Output : 30

//6. CallBack function
function multiplyfunction(a,b){
    return a * b;
}
function calculator(callback, num1, num2){
    console.log(callback(num1,num2));
}
calculator(multiplyfunction,5,2) // Output : 10

//7. Generator function
function* offers(){
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}
let offer = offers();
console.log(offer.next().value); //Output : 50% OFF
console.log(offer.next().value); // Free Delivery
console.log(offer.next().value); // Cashback

//8. Default Parameter
// function student(name,course="JavaScript"){
//     console.log("Name:", name);
//     console.log("Course:", course);
// }
// student("Pooja")

//9. Currying
function multi(a){
    return function(b){
        return function(c){
            return a*b*c;
        };
    };
}
console.log(multi(2)(3)(4)); // Output : 24

//10. Spread Operator
let arr1=[1,2,3];
let arr2=[4,5,6];
let mergedArray = [...arr1, ...arr2];
console.log(mergedArray); //  Output : [1,2,3,4,5,6]

//11. Object Spread
let obj1 = {
    name: "Navi"
};
let obj2 = {
    role: "Developer"
};
let mergedObject = {...obj1, ...obj2};
console.log(mergedObject); // Output : {name:'Navi', role:'Developer'}

//12.  Rest Operator
function numbers(...num){
    console.log(num);

    let sum = 0;
    for (let i = 0; i<num.length; i++){
        sum += num[i];
    }
    console.log(sum);
}
numbers(1,2,3,4); 

//Challenge
let student = [];
function addStudent(name, ...marks){
    let total = 0;
    for(let i = 0; i < marks.length; i++){
        total += marks[i];
    }
    let student = {
        name: name,
        marks: [...marks],
        totalMarks: total
    };
    student.push(student);
}
function bonusMarks(student, bonus){
    return {
        ...student,
        totalMarks: student.totalMarks + bonus
    };
}

function calculate(callback, student, bonus){
    return callback(student, bonus);
}
addStudent("Rahul", 80, 75, 90);
addStudent("Pooja", 85, 95, 88);

console.log("Student Details");
for (let i = 0; i<students.length;i++){
    console.log(students[i]);
}
let updatedStudent = calculate(bonusMarks, students[0], 10);
console.log("After Bonus");
console.log(updatedStudent); 