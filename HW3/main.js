// // Task 1 

// let customerInput = prompt('write some number')
// let convertedInput = Number(customerInput)

// let randomArr = []
// if (isNaN(convertedInput)) {
//     alert("შეცდომა: გთხოვთ შეიყვანოთ რიცხვი და არა ტექსტი.");
// }

// for (let i = 0; i < convertedInput; i++) {
//     let randomNumber = Math.floor(Math.random() * 101)

//     randomArr.push(randomNumber)
// }

// console.log('generated array', randomArr)

// Task 2

// academy = {
//     name: 'Digital Academy',
//     courses: ['JavaScript', 'HTML', 'CSS', 'Angular', 'React', 'Python', 'C#']
// }

// let combinedArr = []

// for (let i = 0; i < academy.courses.length; i++) {
//     let currentCourse = academy.courses[i];

//     if (currentCourse === 'HTML' || currentCourse === 'CSS') { 
//         combinedArr.push(currentCourse)
//     } 
// }

// console.log('new array',combinedArr)

// Task 3

// let limit = Math.floor(Math.random() * 101)   
// let evenNumbers = []
// let i = 0

// while (i <= limit) {
//     if (i % 2 === 0) {
//         evenNumbers.push(i);
//     }
//     i++
// }

// console.log('even numbers', evenNumbers)

// Task 4

// let uniqueNumbers =[]

// while (uniqueNumbers.length < 15) {
//     let randomNumber = Math.floor(Math.random() * 31);

//     if (!uniqueNumbers.includes(randomNumber)) {
//         uniqueNumbers.push(randomNumber);
//     }
// }

// console.log('unique numbers array', uniqueNumbers)
// console.log('array length', uniqueNumbers.length)

// Task 5

let arr = [12, 45, 26, 4, 7, 14, 19]

let min = arr[0]
let max = arr[0]

for (let i =1; i < arr.length; i++){

    if (arr[i] < min){
        min = arr[i]
    }

    if (arr[i] > max) {
        max = arr [i]
    }
}

console.log("minimum value", min)
console.log("maximum value", max)