// Task 1

// function factorial(n) {
//     if (n < 0) {
//         return "Invalid input";
//     }
//     if (n === 0 || n === 1) {
//         return 1;
//     }

//     let result = 1;
//     for (let i = 2; i <= n; i++){
//         result = result * i;
//     }
//     return result;
// }

// console.log("Factorial of 5:", factorial(5)); 

// Task 2

// function findTwoLargest(arr) {
//     let first = 0;
//     let second = 0;

//     for (let i = 0; i < arr.length; i++){
//         let current = arr[i];

//         if (current > first){
//             second = first;
//             first = current;
//         }else if (current > second) {
//             second = current;
//         }
//     }
//     return [first, second];
// }

// console.log("Two largest numbers:", findTwoLargest([10, 5, 8, 12, 3]));

// Task 3

// function reverseArray (arr) {
//     return arr.reverse();
// }

// console.log("Reversed Array:", reverseArray([1,5,8,4,8]));

// Task 4

// function sumArray(arr) {
//     let sum = 0;
    
//     for (let i =0; i < arr.length; i ++){
//         sum = sum + arr[i]
//     }

//     return sum;
// }

// console.log("Sum of Array elements:", sumArray([1,2,3,4,5]));

// Task 5

function countCharacter (arr, letter){
    let counter = 0;

    for(let x of arr){
        if (x === letter){
            counter++;
        }
    }
    return counter;
}

console.log("Count of 'a':", countCharacter(['a','b','c','a','d','a'], 'a'));

// Task 6

function oddNumbers (arr){
    let oddArr = [];

    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0){
            oddArr.push(arr[i]);
        }
    }
    return oddArr;
}

console.log("Odd numbers:", oddNumbers([1,2,3,4,5,6,7,8,9]));

// Task 7

function getUniqueElements(arr){
    let uniqueArr = [];

    for (let i = 0; i < arr.length; i++){
        if (!uniqueArr.includes(arr[i])){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

console.log("Unique elements:", getUniqueElements([1,2,2,3,4,4,5]));