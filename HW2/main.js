// დავალება 1
// let X = prompt ('type something')
// let numberX = Number(X)

// if ( isNaN(numberX) ){
//     console.log('incorrect input')
//     alert('type number only')
// } else {
//     console.log(numberX)
// }

// დავალება 2
// let userInput = prompt ('put number from 0 to 100')
// let numberUserInput = Number(userInput)
// let result = numberUserInput - 10

// if ( isNaN(result) ){
// alert('type number only')
// } else if (result > 50 && result < 80) {
// console.log('Yes')
// } else {
//     console.log('No')
// }

// დავალება 3

// let userInput = prompt('ჩაწერე რიცხვი')
// let convertedUserInput = Number(userInput)

// if (convertedUserInput > 10 && convertedUserInput < 50 && convertedUserInput % 5 === 0){
//     console.log('არის 5-ის გამყოფი');
// } else {
//     console.log('არ არის 5-ის გამყოფი')
// }

// დავალება 4

// let X = prompt('put a number')

// if ( isNaN(X) ){
//     alert('type number only')
// } else if (X > 0) {
//     console.log('რიცხვი არის დადებითი')
// } else if ( X < 0) {
//     console.log('რიცხვი არის უარყოფითი')
// } else {
//     console.log('რიცხვი არის ნული')
// }

// დავალება 5

// let season = prompt('Enter number of the month')
// let seasonNumber = Number(season)

// switch(seasonNumber){
//     case 1:
//     case 2:
//     case 12:
//         console.log("Winter")
//         alert('Winter')
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log('Spring')
//         alert('Spring')
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log('Summer')
//         alert('Summer')
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log('Autumn')
//         alert('Autumn')
//         break;
//     default:
//         console.log('Such month does not exist')
//         break;
// }

// დავალება 6

// let teams = ['Barcelona','Liverpool','Real Madrid','Manchester City','Bayern']

// let firstTeam = teams.shift()

// teams.push(firstTeam)

// console.log(teams)

// დავალება 7

// let teams = ['Barcelona','Liverpool','Real Madrid', 'Manchester City', 'Bayern', 'Arsenal', 
// 'Chelsea', 'Goris Dila', 'Mimino', 'Wnoris Milani', 'Saburtalo' ]

// miminoIndex = teams.indexOf('Mimino')

// if (miminoIndex %2 === 0){
//     console.log(miminoIndex + " ლუწია")
// } else {
//     console.log(miminoIndex + " კენტია")
// }

// დავალება 8

let myStudent = {
    name: 'Student',
    age: 27,
    hasScolarship: false,
    gpa: 2.7,
    salary: [3000]
}

if (myStudent.hasScolarship){
    myStudent.salary.push(1000)
} else if (myStudent.gpa > 3){
    myStudent.hasScolarship = true
} else {
    myStudent.salary = []
}

console.log(myStudent)
