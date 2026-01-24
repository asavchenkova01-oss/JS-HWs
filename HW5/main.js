// Task 1

const arr = [
	[150, 20, 10],
	[55, 11, 260, 45],
	[1, 28]
]

const getSum = (subArray) => subArray.reduce((acc, curr) => acc + curr, 0)

const sum1 = getSum(arr[0])

const sum2 = getSum(arr[1])

const sum3 = getSum(arr[2])

const totalSum = sum1 + sum2 + sum3

console.log("Sum of the first array: ", sum1)
console.log("Sum of the second array: ", sum2)
console.log("Sum of the third array: ", sum3)
console.log("Sum of all arrays: ", totalSum)

// Task 2

const students = [
  { id: 1, name: "Ana", grades: [85, 90, 78], isActive: true },
  { id: 2, name: "Luka", grades: [60, 75, 70], isActive: false },
  { id: 3, name: "Maya", grades: [92, 88, 95], isActive: true },
  { id: 4, name: "Gio", grades: [40, 55, 48], isActive: true },
];

// 1.
const studentNames = students.map(student => student.name.toUpperCase());

console.log("Capitalized Student Names",studentNames)

// 2.
const activeStudents = students.filter(student => student.isActive)

console.log("Active Students: ", activeStudents)

// 3.

students.forEach(student => {
    const status = student.isActive ? "Is active" : "Isn't active"
    console.log(`${student.name} ${status}`)
})

// 4.

const greaterFifty = students.every( student => {

    const sum = student.grades.reduce((acc, curr) => acc + curr,0);
    const average = sum / student.grades.length;

    return average > 50;
})

console.log(greaterFifty)

// 5.

const getAvg = (s) => s.grades.reduce((a, b) => a + b, 0) / s.grades.length
const greaterNinety = students.some(s => getAvg(s) > 90)

console.log(greaterNinety)

// 6.

const findMaya = students.find(student => student.name === "Maya")
console.log("All about Maya",findMaya)