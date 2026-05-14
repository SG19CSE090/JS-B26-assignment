//1. Student Registeration Form 
let studentName = prompt("Enter Student name:");
let department = prompt("Enter department name:");
let age = prompt("Enter age:");
console.log('Welcome ${studentName}');
console.log('Welcome ${department}');
console.log('Welcome ${age}');

//2. ATM Withdrawal System
let balance = 10000;
let amount = Number(prompt("Enter Withdrawal amount"));
if(amount<100){
    console.log("Minimum Withdrawal amount is 100");
}
else if(amount <= balance) {
    console.log("Transaction Successful");
    console.log('Remaining Balance: ${balance - amount}');
}
else{
    console.log("Insufficient Balance"); 
}

//3. Swiggy Discount Checker
let orderAmount = prompt("Enter order amount:");
orderAmount = Number(orderAmount);
console.log(
    orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied"
); // Output : Delivery charges applied

//4. Instagram Login System
let username = prompt("Enter username:");
if(username === "admin"){
    let password = prompt("Enter password:");
    if(password === "1234"){
        console.log("Login success");
    }else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid username");
}

//5. Traffic Signal System
let signal = prompt("Enter signal color:");
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;

        default:
            console.log("Invalid signal");
}

//6. Employee Salary Calculator
function salaryCalculation(basicSalary, bonus){
    let totalSalary = basicSalary + bonus;
    return totalSalary;
}
console.log(salaryCalculation(25000,5000)); // 30000

//7. E-Commerce Cart total
let prices = [100, 200, 300, 400];
let total = 0;
for (let i = 0; i < prices.length; i++){
    total += prices[i];
}
let average = total/prices.length;
console.log("Total Price:", total);
console.log("Average Price:", average);

//8. Whatsapp contack book 
let contact = {
    name: "Rahul",
    phone: "9873625278",
    status: "Online"
};
for (let key in contact){
    console.log(key + ": " + contact[key]);
}

//9. Movie Ticket Booking
function payment(){
    console.log("Payment Succesful");
}
function bookTicket(callback){
    console.log("Ticket Booking Completed");
    callback();
}
bookTicket(payment);

//10. Food Delivery Time Tracker
function* deliveryStatus(){
    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}
let order = deliveryStatus();
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);



