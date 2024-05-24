"use strict";
// Today's Topics Data Types
// 1: String 
// double quotes k sath
let teacherName = "Mannal Rana";
// single quotes k sath
let countryName = 'pakistan';
// backticks k sath
let userName = `Areeba Bano`;
let greet = "Sir Bilal";
// console.log(greet);
// template literals
// console.log(`Hello ${greet} how are you?`);
// in javascript
// console.log("Hello " + greet + " how are you?");
// 2: Number 
// let age: number = 21;
// 3: Boolean true / false 
// let isAdmitCardVerified: boolean = true;
// isAdmitCardVerified = false;
// 4: Array 
// let fruits: string = "Mango, Cherry, Stawberry, Kiwi";
// console.log(typeof fruits);
// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4])
// console.log(fruits[5])
//   index no  0    , 1    ,   2       , 3
let fruit = ["Mango", "Cherry", "Stawberry", "Kiwi", "Apple", "Watermelon"];
// console.log(fruit);
// console.log(fruit[0]);
// console.log(fruit[1]);
// console.log(fruit[2]);
// console.log(fruit[3]);
// console.log(fruit[4]);
// console.log(fruit.length);
// let age: number[] = [10,20,30,40];
// console.log(age);
// let data: (string|number|boolean)[]= ["Typescript",2012,true,"JS",1995,false];
// console.log(data);
// console.log(data.length);
// 5: Object 
//key(name): value(areeba) this is call key-value pairs.
let student = {
    name: "Areeba",
    institute: "GIAIC",
    slot: "Thursday",
    age: 21,
    isStudent: true,
    specifications: {
        eyes: "black",
        hairColor: "brown"
    }
};
// console.log(student);
// // . notation
// console.log(student.isStudent);
// square bracket [] notation
// console.log(student["slot"]);
// // nested object with . notation
// console.log(student.specifications);
// console.log(student.specifications.hairColor);
// // nested object with [] notation
// console.log(student["specifications"]["eyes"]);
// 6: Union Literals / Union Type
let age = 21;
age = "Twenty one";
// 7: Type Literals 
let trafficSignal = "green";
trafficSignal = "yellow";
trafficSignal = "red";
console.log(trafficSignal);
// Today's Task 
//  1. Define a variable title and assign it the value 'Mr. John Doe'.
// What is the type of the title variable?
let title = "Mr. John Doe";
console.log(title); // this is string type
//  2. Create a variable description and assign it the value
// 'This is a very long string'. What is the type of the description variable?   
let description = "This is a very long string";
console.log(description); // this is also a string type
// 3. Declare a variable of type number and assign your age to it.
let myAge = 22;
console.log(myAge); // this is number type
// 4. Calculate the average of 2, 4, and 6, and assign it to the variable average.
// What is the type of the average variable?
let average = 4;
console.log(average); //this is also a number type
//  5. Declare a variable of type boolean and assign it a value indicating
// whether you are a student or not.               
let isStudent = true;
console.log(isStudent); // this is boolean type
// 6. Create a variable isAdmin and assign it the result of the logical AND
// operation between true and true. What is the type of the isAdmin variable?
let isAdmin = true && true;
console.log(isAdmin); // this is also a boolean type
//  7. Declare an array of strings containing the names of your favorite books.
let favBooks = ["1984", "Peer e kamil", "Manzil"];
console.log(favBooks);
//  8. Declare an array of numbers containing your top 3 favorite numbers.  
let favNumbers = [2, 4, 8];
console.log(favNumbers); // this is an array of numbers
//9. Create an object type for a Person with properties name
// (string), age (number), and isStudent (boolean).
let Person = {
    name: "Areeba Hammad",
    age: 22,
    isGiaicStudent: true
};
console.log(Person); //this is object with type annotation
//  10. Create an object of type Person2.
let Person2 = {
    name: "Fatima",
    age: 18,
    isGiaicStudent: false
};
console.log(Person2); //this is another object with type annotation
//11.Create an object type for a Person with properties name (string),
// age (number), and isStudent (boolean). and also create nested object moreInfo with properties 
// slot(string), Timing(number)
let PersonDetail = {
    name: "Areeba Hammad",
    age: 22,
    isGiaicStudent: true,
    moreInfo: {
        slot: "Thursday",
        timing: "2pm To 5pm"
    }
};
console.log(PersonDetail.moreInfo);
console.log(PersonDetail.isGiaicStudent); //object & nested object print with . notation
console.log(PersonDetail["moreInfo"]);
console.log(PersonDetail["name"]); //object & nested object print with square bracket notation
//  12. according to question 12 print nested object properties with . & 
//[] bracket notation 
console.log(PersonDetail.moreInfo.slot);
console.log(PersonDetail["moreInfo"]["timing"]); //target nested object with . & square [] notation
//13.Create a literal type that allows only the values "red", "green", or "blue".
let colors = "green";
console.log(colors);
// 14. Declare a variable of this type and assign one of the allowed values to it.
let numbers = 20;
console.log(numbers);
// 15. Create a union literals
let Rs = "Three Thousand";
Rs = 3000;
console.log(Rs); //this is union type
